---
name: tangison-full-output-enforcement
description: Guarantee complete, unabridged output across code, websites, documents, content, and assets. Use whenever an approved deliverable could be shortened, skeletonised, deferred, replaced by examples, or claimed complete without comparison to `BUILD_PLAN.md` and `PROOF.md`.
---

# Tangison Full Output Enforcement

## Purpose

Lock the approved deliverable count, prevent silent scope reduction, and require independent verification before completion.

**A completion claim without evidence is invalid.**

## Use this skill when

- A task requests multiple files, routes, pages, states, or variants.
- A context or token limit could truncate delivery.
- An agent is about to claim a bounded outcome finished.
- Repeated items are at risk of being replaced with one example.

## Do not use this skill when

- Do not add unapproved scope.
- Do not confuse completeness with unnecessary abstraction.
- Do not mark existence as validation.

## Ownership

This skill owns completeness of approved scope. Planning owns what the scope is. Independent verifiers own pass or fail.

## Required inputs

- `PRODUCT.md`, `BUILD_PLAN.md`, `CONTENT_PLAN.md`, `ASSET_MANIFEST.md`, and `PROOF.md` when present.
- Approved page copy, asset lists, and repository instructions.
- Exact verification criterion for every deliverable.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- For a substantial build with no approved scope, stop and request a plan or explicit scope.
- Keep paused work open in `PROOF.md`; a pause is not completion.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Count deliverables with deterministic file and route inspection.
- Search for banned shortcuts and placeholders.
- Use clean breakpoints only when one deliverable cannot fit in one context.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Read the approved source files.
2. Count every required deliverable and lock the count.
3. Cross-reference verified work in `PROOF.md`.
4. Write or build every approved item completely.
5. Reject `TODO`, `implement here`, `rest of code`, `similar to above`, `continue the pattern`, bare ellipses, and prose replacing implementation.
6. At a clean context breakpoint, record the exact resumption point and continue in the next bounded action.
7. Cross-check delivered count against approved count.
8. Run the relevant independent verification gate.
9. Record counts, checks, and evidence in `PROOF.md`.

## Verification

- Delivered count equals approved count.
- No banned shortcut replaces required output.
- Every file, route, state, page, or variant is substantive.
- The latest change is included in the latest check.
- Independent verification passed.
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

Return approved count, delivered count, verification evidence, paused items if any, and remaining risk.
