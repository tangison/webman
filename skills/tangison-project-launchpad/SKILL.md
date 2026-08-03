---
name: tangison-project-launchpad
description: Prepare complete, reusable project starter packs and verified handoffs for websites, brands, documents, applications, automations, campaigns, and other client work. Use when another agent or human must continue from organised Markdown instructions and authentic source assets without relying on chat history.
---

# Tangison Project Launchpad

## Purpose

Create a self-contained Markdown-first project, preserve source truth, verify the handoff, and provide a short continuation prompt.

**A completion claim without evidence is invalid.**

## Use this skill when

- The user requests a starter pack, ZIP, repository handoff, demo pack, or continuation prompt.
- Prior work must survive a new agent or harness.
- Files, brand assets, facts, and constraints need one authoritative structure.

## Do not use this skill when

- Do not build the final product in starter-only mode.
- Do not make a PDF the only source of truth.
- Do not deploy or promote a demo without authority.

## Ownership

This skill owns project organisation and handoff verification. Specialist skills own the content and assets they create.

## Required inputs

- Approved brief, files, screenshots, facts, and assets.
- Project mode and intended next executor.
- Repository owner, visibility, and deployment authority when publishing is requested.
- Existing project files and Git status.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop for ambiguous repository ownership, destructive replacement, public visibility, production deployment, or legal meaning.
- Never place credentials in files, URLs, logs, proof, or reusable archives.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Inspect local and persistent files before creating duplicates.
- Use Markdown as the authoritative source.
- Use authenticated connectors or configured CLI for publishing.
- Create a ZIP only when explicitly requested.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. State phase, mode, executor, capabilities, assumptions, first bounded action, and verification criterion.
2. Classify information as verified, user supplied, inferred, recommended, missing, or rejected.
3. Establish authentic asset priority and preserve originals.
4. Create `SYSTEM.md`, `PRODUCT.md`, `BRAND.md`, `BUILD_PLAN.md`, `CONTENT_PLAN.md`, `ASSET_MANIFEST.md`, `PROOF.md`, and `README.md` when relevant.
5. Add only practical snippets that reduce ambiguity.
6. Apply demo or production locks.
7. Scan source control scope, secrets, placeholders, broken links, and file formats.
8. Validate the complete handoff and record evidence.
9. Package the verified source when requested.
10. If publishing is authorised, verify local and remote SHAs.
11. Return one short continuation prompt.

## Verification

- The project is self-contained and understandable in under two minutes.
- Every expected file and asset exists and opens.
- Markdown contains no placeholder instructions.
- Official assets remain unchanged.
- The archive contains no credentials, caches, dependencies, or unrelated work.
- `PROOF.md` reflects the actual handoff state.
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

Return the package path, included and excluded scope, verification results, publishing status, and one short continuation prompt.
