import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const promptsHubRoot = "/Users/zby/atlascloud/prompts-hub";
const localeDir = path.join(repoRoot, "data", "prompts_by_locale");

const GENERATED_ID_RE = /^\d{3}_generated_/;

const batchIndexFiles = [
  ["omni-api-examples-20260520", path.join(promptsHubRoot, "generated", "omni-api-examples-20260520", "index.json")],
  ["seedance-batch-20260520", path.join(promptsHubRoot, "generated", "seedance-batch-20260520", "index.json")],
  ["seedance-batch-20260520-topup-720p", path.join(promptsHubRoot, "generated", "seedance-batch-20260520-topup-720p", "index.json")],
  [
    "seedance-batch-20260520-topup-720p-round2",
    path.join(promptsHubRoot, "generated", "seedance-batch-20260520-topup-720p-round2", "index.json"),
  ],
];

const categoryByLocale = {
  default: {
    "Atlas Generated T2V": "Atlas Generated T2V",
    "Atlas Generated I2V": "Atlas Generated I2V",
  },
  "zh-CN": {
    "Atlas Generated T2V": "Atlas 生成案例 T2V",
    "Atlas Generated I2V": "Atlas 生成案例 I2V",
  },
  "zh-TW": {
    "Atlas Generated T2V": "Atlas 生成案例 T2V",
    "Atlas Generated I2V": "Atlas 生成案例 I2V",
  },
};

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
  const outputMap = await loadOutputMap();
  const localeFiles = (await fs.readdir(localeDir)).filter((name) => name.endsWith(".json"));

  for (const fileName of localeFiles) {
    const localeCode = fileName.replace(/\.json$/, "");
    const localePath = path.join(localeDir, fileName);
    const existing = await loadJson(localePath);
    const categoryMap = categoryByLocale[localeCode] || categoryByLocale.default;

    const generatedItems = dataset.map((item) => {
      const output = outputMap.get(item.video);
      if (!output) {
        throw new Error(`Missing OSS output mapping for ${item.video}`);
      }

      const title = output.title || cleanTitle(item.title) || item.id;
      return {
        id: item.id,
        title,
        description: deriveDescription(item.prompt, title, output.mode),
        prompt: String(item.prompt || "").trim(),
        category: categoryMap[item.category] || item.category,
        video_url: output.video_url,
        author_name: `Atlas Generated ${item.index}`,
        source_platform: `${item.sourceLabel} | prompts-hub generated`,
        language: localeCode,
      };
    });

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
