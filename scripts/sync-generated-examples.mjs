import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const promptsHubRoot = process.env.PROMPTS_HUB_ROOT || path.resolve(repoRoot, "..", "prompts-hub");
const localeDir = path.join(repoRoot, "data", "prompts_by_locale");
const previewDir = path.join(repoRoot, "previews", "generated");
const translationCacheFile = "/tmp/awesome-gemini-omni-translation-cache.json";

const GENERATED_ID_RE = /^\d{3}_generated_/;
const CHUNK_SIZE = 350;
const translationCache = new Map();
const promptTranslationLocales = new Set(
  String(process.env.TRANSLATE_PROMPTS_LOCALES || "zh-CN,zh-TW")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean),
);
const skipGeneratedTranslation = process.env.SKIP_GENERATED_TRANSLATION === "1";
const requestedLocaleSet = new Set(
  String(process.env.SYNC_LOCALES || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean),
);

const batchIndexFiles = [
  ["omni-api-examples-20260520", path.join(promptsHubRoot, "generated", "omni-api-examples-20260520", "index.json")],
  ["seedance-batch-20260520", path.join(promptsHubRoot, "generated", "seedance-batch-20260520", "index.json")],
  ["seedance-batch-20260520-topup-720p", path.join(promptsHubRoot, "generated", "seedance-batch-20260520-topup-720p", "index.json")],
  [
    "seedance-batch-20260520-topup-720p-round2",
    path.join(promptsHubRoot, "generated", "seedance-batch-20260520-topup-720p-round2", "index.json"),
  ],
];

function flattenOutputFile(batch, outputFile) {
  const [mode, caseDir] = String(outputFile).split("/");
  return `${batch}__${mode}__${caseDir}.mp4`;
}

function cleanTitle(title) {
  return String(title || "")
    .replace(/\s+/g, " ")
    .replace(/\bImax\b/g, "IMAX")
    .trim();
}

function deriveDescription(prompt, title, mode) {
  const normalized = String(prompt || "").replace(/\s+/g, " ").trim();
  if (!normalized) {
    return `Generated ${mode} example: ${title}.`;
  }
  if (normalized.startsWith("{")) {
    return `Structured ${mode} prompt example for ${title}.`;
  }
  const maxLength = 180;
  return normalized.length > maxLength ? `${normalized.slice(0, maxLength - 3)}...` : normalized;
}

function promptSortValue(prompt) {
  const match = String(prompt.id).match(/(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

async function loadJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function delay(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function loadTranslationCache() {
  try {
    const cacheObject = await loadJson(translationCacheFile);
    for (const [key, value] of Object.entries(cacheObject)) {
      translationCache.set(key, String(value));
    }
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return;
    }
    throw error;
  }
}

async function persistTranslationCache() {
  await fs.writeFile(
    translationCacheFile,
    `${JSON.stringify(Object.fromEntries(translationCache.entries()))}\n`,
    "utf8",
  );
}

function detectSourceLanguage(text) {
  const cjkCount = (String(text).match(/[\u4e00-\u9fff]/g) ?? []).length;
  const latinCount = (String(text).match(/[a-zA-Z]/g) ?? []).length;
  return cjkCount >= latinCount ? "zh-CN" : "en";
}

function splitLongText(text) {
  if (text.length <= CHUNK_SIZE) {
    return [text];
  }

  const blocks = text.split("\n");
  const chunks = [];
  let current = "";

  for (const block of blocks) {
    const candidate = current.length === 0 ? block : `${current}\n${block}`;
    if (candidate.length <= CHUNK_SIZE) {
      current = candidate;
      continue;
    }

    if (current.length > 0) {
      chunks.push(current);
      current = "";
    }

    if (block.length <= CHUNK_SIZE) {
      current = block;
      continue;
    }

    for (let i = 0; i < block.length; i += CHUNK_SIZE) {
      chunks.push(block.slice(i, i + CHUNK_SIZE));
    }
  }

  if (current.length > 0) {
    chunks.push(current);
  }

  return chunks;
}

function protectPromptTokens(text) {
  const originals = [];
  const protectedText = String(text).replace(/(\{argument[\s\S]*?\}|@\w+\d+|<video>|<image>|<audio>)/g, (match) => {
    const token = `ZXQTOKEN${originals.length}ZXQ`;
    originals.push(match);
    return token;
  });

  return { protectedText, originals };
}

function restorePromptTokens(text, originals) {
  let restored = String(text);
  originals.forEach((value, index) => {
    const token = new RegExp(`Z\\s*X\\s*Q\\s*T\\s*O\\s*K\\s*E\\s*N\\s*${index}\\s*Z\\s*X\\s*Q`, "gi");
    restored = restored.replace(token, value);
  });
  return restored;
}

async function translateText(text, targetLocale) {
  const normalizedText = String(text ?? "");
  if (!normalizedText.trim()) {
    return normalizedText;
  }

  const sourceLocale = detectSourceLanguage(normalizedText);
  if ((targetLocale === "en-US" && sourceLocale === "en") || (targetLocale === "zh-CN" && sourceLocale === "zh-CN")) {
    return normalizedText;
  }

  const cacheKey = `${targetLocale}__${normalizedText}`;
  const cached = translationCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const { protectedText, originals } = protectPromptTokens(normalizedText);
  const chunks = splitLongText(protectedText);
  const translatedChunks = [];

  for (const chunk of chunks) {
    const params = new URLSearchParams({
      q: chunk,
      langpair: `${sourceLocale}|${targetLocale}`,
    });

    let translatedChunk = "";
    let translated = false;
    for (let attempt = 0; attempt < 6; attempt += 1) {
      const response = await fetch(`https://api.mymemory.translated.net/get?${params.toString()}`, {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      });

      if (response.ok) {
        const result = await response.json();
        translatedChunk = result?.responseData?.translatedText || "";
        translated = true;
        break;
      }

      if (response.status !== 429 || attempt === 5) {
        throw new Error(`Translate API failed: ${response.status}`);
      }

      await delay(1000 * (attempt + 1));
    }

    if (!translated) {
      throw new Error(`Translate API failed: retry exhausted for ${targetLocale}`);
    }

    translatedChunks.push(translatedChunk);
    await delay(250);
  }

  const translated = restorePromptTokens(translatedChunks.join(""), originals);
  translationCache.set(cacheKey, translated);
  await persistTranslationCache();
  return translated;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function ensurePreviewPages(dataset, outputMap) {
  await fs.rm(previewDir, { recursive: true, force: true });
  await fs.mkdir(previewDir, { recursive: true });

  for (const item of dataset) {
    const output = outputMap.get(item.video);
    if (!output) {
      throw new Error(`Missing OSS output mapping for preview page: ${item.video}`);
    }

    const title = output.title || cleanTitle(item.title) || item.id;
    const previewPath = path.join(previewDir, `${item.id}.md`);
    const lines = [
      `# ${title}`,
      "",
      "## Preview",
      "",
      `<video src="${escapeHtml(output.video_url)}" controls muted playsinline width="960"></video>`,
      "",
      `- **Source:** \`${item.sourceLabel} | prompts-hub generated\``,
      `- **Direct Video:** [Download Original](${output.video_url})`,
      "",
      "## Prompt",
      "",
      "```text",
      String(item.prompt || "").trim(),
      "```",
      "",
      "This preview page is auto-generated from `scripts/sync-generated-examples.mjs`.",
      "",
    ];
    await fs.writeFile(previewPath, lines.join("\n"), "utf8");
  }
}

async function loadOutputMap() {
  const outputMap = new Map();

  for (const [batch, filePath] of batchIndexFiles) {
    const items = await loadJson(filePath);
    for (const item of items) {
      outputMap.set(flattenOutputFile(batch, item.output_file), {
        title: cleanTitle(item.title),
        video_url: item.output_url,
        mode: item.mode,
      });
    }
  }

  return outputMap;
}

async function main() {
  const datasetPath = path.join(promptsHubRoot, "src", "data", "omni", "omni-generated-dataset.json");
  const dataset = await loadJson(datasetPath);
  await loadTranslationCache();
  const outputMap = await loadOutputMap();
  const localeFiles = (await fs.readdir(localeDir))
    .filter((name) => name.endsWith(".json"))
    .filter((name) => requestedLocaleSet.size === 0 || requestedLocaleSet.has(name.replace(/\.json$/, "")));

  await ensurePreviewPages(dataset, outputMap);

  for (const fileName of localeFiles) {
    const localeCode = fileName.replace(/\.json$/, "");
    const localePath = path.join(localeDir, fileName);
    const existing = await loadJson(localePath);
    const existingGeneratedById = new Map(
      existing.filter((item) => GENERATED_ID_RE.test(String(item.id))).map((item) => [String(item.id), item]),
    );

    const generatedItems = [];
    for (const item of dataset) {
      const output = outputMap.get(item.video);
      if (!output) {
        throw new Error(`Missing OSS output mapping for ${item.video}`);
      }

      const existingGenerated = existingGeneratedById.get(String(item.id));
      const baseTitle = output.title || cleanTitle(item.title) || item.id;
      const translatedTitle =
        skipGeneratedTranslation && existingGenerated?.title
          ? existingGenerated.title
          : localeCode === "en-US"
            ? baseTitle
            : await translateText(baseTitle, localeCode);
      const shouldTranslatePrompt = promptTranslationLocales.has(localeCode);
      const translatedPrompt =
        skipGeneratedTranslation && existingGenerated?.prompt
          ? existingGenerated.prompt
          : localeCode === "en-US"
          ? String(item.prompt || "").trim()
          : shouldTranslatePrompt
            ? await translateText(String(item.prompt || "").trim(), localeCode)
            : String(item.prompt || "").trim();
      const baseDescription = deriveDescription(String(item.prompt || "").trim(), baseTitle, output.mode);
      const translatedDescription =
        skipGeneratedTranslation && existingGenerated?.description
          ? existingGenerated.description
          : localeCode === "en-US"
          ? baseDescription
          : shouldTranslatePrompt
            ? baseDescription.startsWith("Structured ")
              ? await translateText(baseDescription, localeCode)
              : deriveDescription(translatedPrompt, translatedTitle, output.mode)
            : await translateText(baseDescription, localeCode);
      const translatedCategory =
        skipGeneratedTranslation && existingGenerated?.category
          ? existingGenerated.category
          : localeCode === "en-US"
          ? item.category
          : await translateText(item.category, localeCode);
      const translatedSource =
        skipGeneratedTranslation && existingGenerated?.source_platform
          ? existingGenerated.source_platform
          : localeCode === "en-US"
          ? `${item.sourceLabel} | prompts-hub generated`
          : await translateText(`${item.sourceLabel} | prompts-hub generated`, localeCode);

      generatedItems.push({
        id: item.id,
        title: translatedTitle,
        description: translatedDescription,
        prompt: translatedPrompt,
        category: translatedCategory,
        video_url: output.video_url,
        preview_url: `./previews/generated/${item.id}.md`,
        author_name: `Atlas Generated ${item.index}`,
        source_platform: translatedSource,
        language: localeCode,
      });
    }

    const preserved = existing.filter((item) => !GENERATED_ID_RE.test(String(item.id)));
    const merged = [...preserved, ...generatedItems].sort((a, b) => promptSortValue(a) - promptSortValue(b));

    await fs.writeFile(localePath, `${JSON.stringify(merged, null, 2)}\n`, "utf8");
    console.log(`Synced ${fileName}: ${merged.length} prompts`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
