---
name: tangison-web-plan
description: Own website scope, architecture, routes, integrations, risks, and acceptance criteria. Use when the user asks to plan, scope is undefined, architecture is unsafe to assume, or legal, production, data, migration, or deployment decisions require an approved build plan.
---

# Tangison Web Plan

## Purpose

Convert verified requirements into bounded website outcomes without using planning as a substitute for implementation.

**A completion claim without evidence is invalid.**

## Use this skill when

- The user explicitly requests a plan.
- A substantial new build or migration lacks architecture.
- Routes, states, integrations, data ownership, or release criteria are unclear.

## Do not use this skill when

- Do not write final copy owned by copywriting.
- Do not implement code owned by web build.
- Do not invent features to make a plan appear complete.

## Ownership

This skill owns scope and architecture. Research owns facts; content owns structure; build owns implementation.

## Required inputs

- Verified user objective, audience, primary action, and constraints.
- Current repository architecture and deployment environment.
- Authentic assets, content status, integrations, and data rules.
- Authority boundaries and success criteria.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Ask one concise question when ownership, visibility, cost, legal meaning, destructive migration, or deployment authority changes the plan.
- Label recommendations and alternatives; do not present them as approved facts.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Inspect the existing repository and configuration before proposing architecture.
- Use research for unstable facts and external requirements.
- Use diagrams only when they clarify real dependencies.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Define product statement, audience, objective, and primary action.
2. Inventory routes, pages, components, states, integrations, assets, and content.
3. Separate verified, supplied, inferred, recommended, missing, and rejected items.
4. Choose the smallest complete architecture that fits existing constraints.
5. Record rejected alternatives and why.
6. Break scope into bounded outcomes with exact verification criteria.
7. Assign owner and supporting skills to each outcome.
8. Define security, accessibility, performance, SEO, responsive, error, loading, empty, and rollback requirements.
9. Write `BUILD_PLAN.md` and update `SYSTEM.md`.
10. Hand the approved plan to content and build owners.

## Verification

- Every approved route and operational state is counted.
- Architecture matches the inspected repository.
- Every outcome has an owner and pass criterion.
- Assumptions and authority gates are explicit.
- No implementation is hidden behind vague wording.
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

Return the approved scope count, architecture, bounded outcomes, rejected alternatives, missing decisions, and build entry point.
