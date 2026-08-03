---
name: tangison-web-audit
description: Independently audit website code and live output with evidence. Use for baseline, release, regression, or audit-and-fix work covering functionality, accessibility, performance, responsive behaviour, SEO, security, content, assets, integrations, and deployment state.
---

# Tangison Web Audit

## Purpose

Produce reproducible findings against the exact audited state without silently editing when only an audit was authorised.

**A completion claim without evidence is invalid.**

## Use this skill when

- A website needs a baseline or release gate.
- A regression must be verified.
- A live deployment needs evidence.
- The user explicitly authorises audit and fix.

## Do not use this skill when

- Do not edit in audit-only mode.
- Do not replace a failed test with a different passing test.
- Do not call a local build a live audit.

## Ownership

This skill owns independent evidence and findings. Build owns authorised corrections. Deploy owns release actions.

## Required inputs

- Audit mode and exact authority.
- Repository SHA or working state and target URLs.
- Approved scope, content, assets, browsers, viewports, and integrations.
- Prior failures and expected regression checks.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop before edits unless audit-and-fix authority is explicit.
- Stop before destructive testing, production data changes, or credential use not already configured.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Use applicable lint, type, test, build, browser, Lighthouse, axe, Pa11y, link, header, secret, and live-request checks.
- Record unavailable tools instead of inventing results.
- Capture route and viewport with visual evidence.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Lock audit mode and exact target state.
2. Record SHA, URL, viewport, browser, and timestamp.
3. Run repository integrity and secret checks.
4. Run functional, responsive, accessibility, performance, SEO, security-header, content, asset, form, and integration checks that apply.
5. Preserve raw failures.
6. Classify severity, evidence, reproduction, root cause hypothesis, and owner.
7. In audit-and-fix mode, route corrections to Build and rerun the exact failed check.
8. Run regression checks.
9. Publish a factual audit summary and `PROOF.md` rows.

## Verification

- Every finding has reproduction and evidence.
- The exact audited state is identified.
- Unavailable checks are disclosed.
- Fixed findings pass the original check.
- No unauthorised edit occurred.
- Live claims use live evidence.
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

Return audit mode, state identifier, passed checks, findings by severity, evidence paths, blocked checks, and release recommendation.
