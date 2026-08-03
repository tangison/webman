import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const skills = new Set(JSON.parse(readFileSync(resolve(root, "manifests/skills.json"), "utf8")).skills.map((entry) => entry.name));
const data = JSON.parse(readFileSync(resolve(root, "tests/routing-scenarios.json"), "utf8"));
const failures = [];
const ids = new Set();

if (data.scenarios.length !== 20) failures.push(`expected 20 routing scenarios; found ${data.scenarios.length}`);
for (const scenario of data.scenarios) {
  if (ids.has(scenario.id)) failures.push(`duplicate scenario id ${scenario.id}`);
  ids.add(scenario.id);
  if (!skills.has(scenario.owner)) failures.push(`${scenario.id}: unknown owner ${scenario.owner}`);
  for (const supporter of scenario.supporters) if (!skills.has(supporter)) failures.push(`${scenario.id}: unknown supporter ${supporter}`);
  if (scenario.supporters.includes(scenario.owner)) failures.push(`${scenario.id}: owner also listed as supporter`);
  if (!scenario.authority_gate || !scenario.proof || !scenario.completion) failures.push(`${scenario.id}: missing gate, proof, or completion definition`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`PASS: ${data.scenarios.length} deterministic routing scenarios have one canonical owner, valid supporters, authority gates, proof, and completion definitions.`);
