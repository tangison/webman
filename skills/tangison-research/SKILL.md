---
name: tangison-research
description: Verify facts, dates, sources, conflicts, and inferences for Tangison projects. Use when current information, official requirements, competitor context, business claims, website content, funding criteria, or source attribution materially affects the deliverable.
---

# Tangison Research

## Purpose

Create a dated fact ledger that separates verified facts, user-supplied claims, inference, recommendation, missing information, and rejected claims.

**A completion claim without evidence is invalid.**

## Use this skill when

- A claim could have changed.
- A named institution, law, requirement, product, or website must be verified.
- Sources conflict.
- Another skill needs reliable facts before writing or design.

## Do not use this skill when

- Do not invent missing data.
- Do not copy competitor language.
- Do not treat search snippets or summaries as final evidence.

## Ownership

This skill owns fact and source truth. Content, business-plan, and design owners decide how verified facts are used.

## Required inputs

- Supplied documents and files.
- Exact questions and required freshness.
- Target geography, institution, audience, and date.
- Existing fact ledger and rejected claims.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop when legal, medical, financial, ownership, or publication decisions depend on unresolved conflicting sources.
- Respect quotation and copyright limits.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Prefer supplied documents, primary sources, official APIs, and authoritative current pages.
- Use secondary sources only to locate or contextualise primary evidence.
- Record source date, access date, direct URL or evidence path.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Define each fact question before searching.
2. Inspect supplied evidence first.
3. Locate current primary sources.
4. Record exact source, date, jurisdiction, and supported claim.
5. Classify each item as verified, user supplied, inferred, recommended, missing, conflicting, or rejected.
6. Resolve conflicts by authority, recency, jurisdiction, and directness.
7. Mark unsupported claims and remove them from approved copy.
8. Hand the fact ledger to the task owner.
9. Record unavailable sources and remaining uncertainty in `PROOF.md`.

## Verification

- Every material claim maps to evidence or an explicit non-fact classification.
- Sources are current enough for the decision.
- Conflicts are visible and resolved or blocked.
- No competitor wording was copied.
- Access dates and evidence paths exist.
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

Return the fact ledger, source list, conflicts, rejected claims, verification date, and remaining uncertainty.
