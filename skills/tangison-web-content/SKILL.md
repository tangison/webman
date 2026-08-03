---
name: tangison-web-content
description: Own source-backed website content strategy, information architecture, page hierarchy, and section-level content planning. Use before final copywriting or implementation when website facts and page structure must be established.
---

# Tangison Web Content

## Purpose

Create an approved content system that tells copywriting what must be said and build what must be rendered.

**A completion claim without evidence is invalid.**

## Use this skill when

- A new or revised website needs page structure.
- Existing content is incomplete, duplicated, generic, or unsupported.
- Facts must be mapped to routes and sections.

## Do not use this skill when

- Do not own final persuasive wording.
- Do not invent testimonials, metrics, services, clients, or claims.
- Do not choose UI widgets or motion.

## Ownership

This skill owns website content structure and fact placement. Copywriting owns final wording.

## Required inputs

- Research fact ledger and approved business facts.
- Website plan, route list, audience, and primary action.
- Approved brand voice and existing copy.
- Legal, operational, and client-verification items.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop when a material claim lacks evidence or the user must approve legal or operational wording.
- Mark missing copy rather than filling it with generic text.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Read supplied documents and current pages before proposing structure.
- Use research for unstable or unsupported facts.
- Maintain `CONTENT_PLAN.md` as the source of truth.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. List every route and its user job.
2. Create a fact ledger per route.
3. Define message hierarchy and section order.
4. Assign each fact to one best location.
5. Define required CTAs, forms, metadata, proof points, and trust content.
6. Remove duplicate or unsupported claims.
7. Mark exact client-verification items.
8. Write production-ready content requirements in `CONTENT_PLAN.md`.
9. Hand the structure and fact boundaries to copywriting.

## Verification

- Every approved route has a complete section ledger.
- Every material claim is verified or labelled.
- Primary and secondary actions are consistent.
- No invented social proof remains.
- Copywriting can produce final wording without guessing structure.
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

Return route ledger, message hierarchy, fact constraints, CTA map, metadata requirements, and items awaiting approval.
