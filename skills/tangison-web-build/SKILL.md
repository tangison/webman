---
name: tangison-web-build
description: Implement approved websites completely while preserving existing architecture. Use when building, repairing, or extending authorised website routes, components, states, integrations, accessibility, performance, and responsive behaviour.
---

# Tangison Web Build

## Purpose

Deliver the smallest complete implementation of approved scope and verify every route and operational state after the latest change.

**A completion claim without evidence is invalid.**

## Use this skill when

- An approved website plan is ready to implement.
- A website defect is authorised for correction.
- Existing code must be extended without unrelated rewrites.

## Do not use this skill when

- Do not take ownership of strategy, facts, final copy, widget selection, motion direction, audit independence, or deployment.
- Do not rewrite architecture without evidence and authority.
- Do not add speculative dependencies.

## Ownership

This skill owns website implementation only.

## Required inputs

- Repository instructions, clean status understanding, and approved `BUILD_PLAN.md`.
- Final content, authentic assets, widget states, motion rules, and acceptance criteria.
- Existing architecture, dependencies, environment contract, and deployment constraints.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop for production credentials, destructive migrations, unclear data ownership, new cost, or architecture changes outside approved scope.
- Preserve unrelated user changes.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Inspect first with repository search, status, package files, routes, components, tests, and configuration.
- Use the existing stack and dependency versions where safe.
- Run lint, type, unit, integration, build, accessibility, and browser checks that apply.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Inspect current status and diff before editing.
2. Map approved routes and states to existing code.
3. Stage one vertical slice with real content and assets.
4. Implement all approved loading, empty, error, success, responsive, keyboard, focus, and reduced-motion states.
5. Avoid duplicate dependencies and unnecessary abstraction.
6. Use exact approved wording and authentic assets.
7. Run the slice verification gate.
8. Repeat for every bounded outcome.
9. Run full regression checks after the latest change.
10. Record commands, results, and evidence in `PROOF.md`.

## Verification

- All approved routes and states exist.
- Lint, types, tests, and production build pass when available.
- Responsive, accessibility, motion, asset, link, form, and error behaviour pass.
- No placeholder code, TODO, or unrelated change remains.
- Checks cover the latest commit or working state.
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

Return changed paths, route and state count, exact checks, evidence, known risks, and the commit ready for independent audit.
