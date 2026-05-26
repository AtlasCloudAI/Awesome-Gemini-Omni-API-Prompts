import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const localeDir = path.join(repoRoot, "data", "prompts_by_locale");
const saleshubConfigPath = "/Users/zby/atlascloud/saleshub-crm/backend/src/config.py";
const GENERATED_ID_RE = /^\d{3}_generated_/;
const BATCH_SIZE = Number(process.env.TRANSLATE_BATCH_SIZE || 4);
const DEFAULT_BASE_URL = "https://api.atlascloud.ai/v1";
const DEFAULT_MODEL = "deepseek-ai/DeepSeek-V3-0324";
const FULL_PROMPT_TRANSLATION_LOCALES = new Set(["zh-CN", "zh-TW"]);

const requestedLocaleSet = new Set(
  String(process.env.SYNC_LOCALES || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean),
);

async function loadJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function writeJson(filePath, value) {
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function delay(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function chunkArray(items, size) {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

function extractPythonString(source, key) {
  const match = source.match(new RegExp(`${key}:\\s*str\\s*=\\s*"([^"]*)"`, "m"));
  return match ? match[1] : "";
}

async function loadAtlasConfig() {
  const envKey = process.env.ATLASCLOUD_API_KEY || process.env.LLM_API_KEY || process.env.OPENAI_API_KEY || "";
  const envBaseUrl = process.env.ATLASCLOUD_BASE_URL || process.env.LLM_BASE_URL || process.env.OPENAI_BASE_URL || "";
  const envModel = process.env.ATLASCLOUD_MODEL || process.env.LLM_MODEL || process.env.OPENAI_MODEL || "";

  const configText = await fs.readFile(saleshubConfigPath, "utf8");
  const fileKey = extractPythonString(configText, "LLM_API_KEY");
  const fileBaseUrl = extractPythonString(configText, "LLM_BASE_URL");
  const fileModel = extractPythonString(configText, "LLM_MODEL");

  const apiKey = envKey || fileKey;
  if (!apiKey) {
    throw new Error("Missing Atlas API key. Set ATLASCLOUD_API_KEY or keep saleshub-crm config available.");
  }

  return {
    apiKey,
    baseUrl: envBaseUrl || fileBaseUrl || DEFAULT_BASE_URL,
    model: envModel || fileModel || DEFAULT_MODEL,
  };
}

async function translateBatch(clientConfig, localeCode, items) {
  const fullPromptTranslation = FULL_PROMPT_TRANSLATION_LOCALES.has(localeCode);
  const requestItems = fullPromptTranslation
    ? items
    : items.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        category: item.category,
        source_platform: item.source_platform,
      }));
  const systemPrompt = [
    "You are a professional localization engine for AI prompt libraries.",
    `Translate all text values into locale ${localeCode}.`,
    'Return exactly one JSON object with a single top-level key named "items".',
    "Preserve every object id exactly.",
    "Preserve prompt placeholders and markup exactly, including patterns like {argument ...}, <video>, <image>, <audio>, @video1, @image1, URLs, and line breaks.",
    "Do not omit fields. Keep the same array length and object order.",
    fullPromptTranslation
      ? "Translate these fields only: title, description, prompt, category, source_platform."
      : "Translate these fields only: title, description, category, source_platform. Keep prompt exactly unchanged in English.",
    "Do not add commentary, markdown fences, or extra keys.",
  ].join(" ");

  const userPrompt = JSON.stringify(requestItems, null, 2);
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await fetch(`${clientConfig.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${clientConfig.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: clientConfig.model,
        temperature: 0.1,
        max_tokens: 12000,
        response_format: {
          type: "json_object",
        },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (response.status >= 500 && response.status < 600 && attempt < 4) {
        await delay(2000 * (attempt + 1));
        continue;
      }
      throw new Error(`Atlas translate failed: ${response.status} ${errorText}`);
    }

    const payload = await response.json();
    const content = payload?.choices?.[0]?.message?.content || "";
    const match = content.match(/\{\s*"items"[\s\S]*\}/);
    const parsed = JSON.parse(match ? match[0] : content);
    const translated = parsed?.items;
    if (!Array.isArray(translated) || translated.length !== items.length) {
      throw new Error(`Unexpected translation payload for ${localeCode}`);
    }
    if (!fullPromptTranslation) {
      return translated.map((item, index) => ({
        ...item,
        prompt: items[index].prompt,
      }));
    }
    return translated;
  }

  throw new Error(`Atlas translate failed after retries for ${localeCode}`);
}

async function main() {
  const clientConfig = await loadAtlasConfig();
  const fileNames = (await fs.readdir(localeDir))
    .filter((name) => name.endsWith(".json"))
    .filter((name) => name !== "en-US.json")
    .filter((name) => requestedLocaleSet.size === 0 || requestedLocaleSet.has(name.replace(/\.json$/, "")));

  const sourcePath = path.join(localeDir, "en-US.json");
  const sourceItems = await loadJson(sourcePath);
  const sourceGenerated = sourceItems.filter((item) => GENERATED_ID_RE.test(String(item.id)));
  const translationSource = sourceGenerated.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    prompt: item.prompt,
    category: item.category,
    source_platform: item.source_platform,
  }));

  for (const fileName of fileNames) {
    const localeCode = fileName.replace(/\.json$/, "");
    const localePath = path.join(localeDir, fileName);
    const localeItems = await loadJson(localePath);
    const localeMap = new Map(localeItems.map((item) => [String(item.id), item]));
    const fullPromptTranslation = FULL_PROMPT_TRANSLATION_LOCALES.has(localeCode);
    const pendingItems = translationSource.filter((item) => {
      const current = localeMap.get(String(item.id));
      if (!current) {
        return true;
      }
      if (fullPromptTranslation) {
        return (
          current.title === item.title &&
          current.description === item.description &&
          current.prompt === item.prompt &&
          current.category === item.category &&
          current.source_platform === item.source_platform
        );
      }
      return (
        current.title === item.title &&
        current.description === item.description &&
        current.category === item.category &&
        current.source_platform === item.source_platform
      );
    });
    const batches = chunkArray(pendingItems, BATCH_SIZE);

    console.log(`Translating ${localeCode}: ${pendingItems.length} pending items in ${batches.length} batches`);

    for (let index = 0; index < batches.length; index += 1) {
      const batch = batches[index];
      let translatedBatch;
      try {
        translatedBatch = await translateBatch(clientConfig, localeCode, batch);
      } catch (error) {
        if (batch.length === 1) {
          throw error;
        }
        console.warn(`Batch parse failed for ${localeCode} batch ${index + 1}, retrying item-by-item`);
        translatedBatch = [];
        for (const item of batch) {
          const [translatedItem] = await translateBatch(clientConfig, localeCode, [item]);
          translatedBatch.push(translatedItem);
        }
      }

      for (const translated of translatedBatch) {
        const existing = localeMap.get(String(translated.id));
        if (!existing) {
          throw new Error(`Missing locale item for ${translated.id} in ${localeCode}`);
        }
        localeMap.set(String(translated.id), {
          ...existing,
          title: translated.title,
          description: translated.description,
          prompt: translated.prompt,
          category: translated.category,
          source_platform: translated.source_platform,
          language: localeCode,
        });
      }

      const merged = localeItems.map((item) => localeMap.get(String(item.id)) || item);
      await writeJson(localePath, merged);
      console.log(`Translated ${localeCode} batch ${index + 1}/${batches.length}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
