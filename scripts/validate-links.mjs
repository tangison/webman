import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const failures = [];
const files = [];

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory() && ![".git", "node_modules", "reports"].includes(entry.name)) walk(path);
    else if (entry.isFile() && entry.name.endsWith(".md")) files.push(path);
  }
}

walk(root);
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const target = match[1].split("#")[0];
    if (!target || /^(https?:|mailto:|tel:)/.test(target)) continue;
    if (!existsSync(resolve(dirname(file), target))) failures.push(`${relative(root, file)}: broken link ${target}`);
  }
}

const required = ["SYSTEM.md", "PRODUCT.md", "BRAND.md", "BUILD_PLAN.md", "CONTENT_PLAN.md", "ASSET_MANIFEST.md", "PROOF.md", "README.md", "SKILL_INDEX.md", "ROUTING_MATRIX.md"];
for (const path of required) if (!existsSync(resolve(root, path))) failures.push(`missing required root file ${path}`);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`PASS: ${files.length} Markdown files have valid internal links and required root files exist.`);
