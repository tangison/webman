---
name: tangison-skill-author
description: Create, revise, audit, validate, and release Tangison skills. Use when adding a skill, changing a canonical `SKILL.md`, resolving duplicates, checking portability, updating manifests, or preparing a skill library for another harness.
---

# Tangison Skill Author

## Purpose

Produce unique, truthful, GLM-readable skills with explicit ownership, standalone safety, verified sources, scenario coverage, and proof-driven release gates.

**A completion claim without evidence is invalid.**

## Use this skill when

- A new skill is proposed.
- An existing skill is incomplete or conflicting.
- A catalogue entry may be mistaken for a real skill.
- A portable skill set needs validation or packaging.

## Do not use this skill when

- Do not promote marketing copy as a skill.
- Do not invent an installer, tool, source, licence, or upstream authorship.
- Do not maintain duplicate canonical bodies.

## Ownership

This skill owns skill definition quality and release validation. Domain owners still govern their specialist rules.

## Required inputs

- Concrete trigger examples and non-trigger examples.
- Canonical name, source, licence, and intended owner.
- Existing skills, manifest, routing matrix, and migration audit.
- Target harnesses and standalone-copy requirements.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop when source, licence, ownership, destructive deduplication, or public release authority is ambiguous.
- Do not install or publish an unvalidated skill.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Use deterministic frontmatter, link, duplicate, and manifest validators.
- Inspect primary sources before recording external installation or licence claims.
- Use scenario tests for routing and behaviour.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Define concrete use and non-use scenarios.
2. Search all canonical names and bodies for overlap.
3. Assign one owner and explicit boundaries.
4. Write frontmatter with only `name` and `description`.
5. Write direct, numbered, GLM-readable procedures.
6. Include inputs, tool fallbacks, authority gates, verification, proof, failure handling, completion, and handoff.
7. Repeat safety-critical rules inside the standalone skill.
8. Verify every external source and licence status.
9. Run frontmatter, naming, duplicate, link, placeholder, manifest, and scenario checks.
10. Score all 15 quality dimensions. Require no score below 3, average at least 4, and verification and proof at 5.
11. Update manifest, routing, changelog, and proof records.
12. Release only the verified canonical body.

## Verification

- Directory and frontmatter names match.
- The trigger description is precise and unique.
- All mandatory sections exist.
- No placeholder or obsolete owner remains.
- Standalone copy works without hidden references.
- Manifest and scenario tests match the skill.
- Run verification after the latest material change.
- Separate action, observed result, evidence, interpretation, and remaining risk.

## Proof requirements

Maintain **PROOF.md** for material work using:

Phase | Action | Target | Command or method | Result | Evidence path or URL | Timestamp | Status

Use only these working statuses: planned, running, passed, failed, blocked, paused, superseded.

The following are not proof: a file merely existing, a claim that work should function, a check run before the latest change, a local commit without remote verification, or a different test replacing the failed test.

## Failure and debugging procedure

1. Reproduce the failure with the same input and command or method.
2. Preserve the failing output and evidence path.
3. Identify the root cause. Do not replace diagnosis with a guess.
4. Apply the smallest complete correction within the authorised scope.
5. Rerun the exact failed check, then run the relevant regression checks.
6. Record the failure, correction, new result, and remaining risk in `PROOF.md`.

## Completion gate

Do not claim completion until:

- every approved output exists and matches the locked scope;
- the latest applicable checks pass;
- **PROOF.md** contains real evidence;
- unauthorised or unrelated work is absent;
- remaining risk and blocked checks are disclosed.

## Handoff

Return the canonical path, source and licence status, quality score, validation evidence, manifest impact, and unresolved risks.
