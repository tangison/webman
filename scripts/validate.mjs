import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(import.meta.dirname, "..");
const checks = [
  "validate-skills.mjs",
  "detect-duplicates.mjs",
  "build-manifest.mjs",
  "validate-links.mjs",
  "verify-prompt-packs.mjs",
  "validate-scenarios.mjs"
];
const results = [];

for (const script of checks) {
  const run = spawnSync(process.execPath, [resolve(import.meta.dirname, script)], { cwd: root, encoding: "utf8" });
  const output = `${run.stdout}${run.stderr}`.trim();
  results.push({ script, status: run.status === 0 ? "passed" : "failed", output });
  console.log(output);
  if (run.status !== 0) {
    mkdirSync(resolve(root, "reports"), { recursive: true });
    writeFileSync(resolve(root, "reports/validation-summary.json"), `${JSON.stringify({ generated_at: new Date().toISOString(), status: "failed", results }, null, 2)}\n`);
    process.exit(run.status ?? 1);
  }
}

mkdirSync(resolve(root, "reports"), { recursive: true });
writeFileSync(resolve(root, "reports/validation-summary.json"), `${JSON.stringify({ generated_at: new Date().toISOString(), status: "passed", results }, null, 2)}\n`);
console.log(`PASS: ${checks.length} validation groups passed.`);
