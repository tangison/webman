---
name: tangison-web-deploy
description: Deploy an exact audited website commit and verify production behaviour. Use only when deployment is requested or already authorised, including preview, production, domain, TLS, redirect, indexing, integration, rollback, and live-audit work.
---

# Tangison Web Deploy

## Purpose

Release the audited commit without changing unrelated DNS or production state and prove that the live result matches the intended revision.

**A completion claim without evidence is invalid.**

## Use this skill when

- A verified commit is authorised for preview or production.
- A domain or release must be connected and checked.
- Rollback readiness and live verification are required.

## Do not use this skill when

- Do not deploy unaudited or uncommitted changes.
- Do not modify unrelated DNS records.
- Do not claim success from provider build status alone.

## Ownership

This skill owns deployment and live verification. Audit owns release evidence; Build owns source corrections.

## Required inputs

- Explicit environment and deployment authority.
- Exact local and remote commit SHA.
- Passing release audit and known risks.
- Provider project, domain, DNS, environment variables, integrations, and rollback target.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop if local and remote SHA differ, release audit failed, ownership is ambiguous, or production credentials are unavailable.
- Ask before irreversible domain, database, or traffic changes.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Use configured deployment connectors or authenticated CLI.
- Use DNS, TLS, HTTP, browser, form, integration, and live-audit checks.
- Keep credentials process-scoped and out of logs and files.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Confirm environment and authority.
2. Verify clean intended state and matching local and remote SHA.
3. Verify release audit covers that SHA.
4. Capture current production and rollback state.
5. Deploy the exact commit.
6. Verify build output and deployment revision.
7. Verify TLS, canonical host, redirects, indexing, assets, forms, integrations, error routes, and responsive behaviour.
8. Run a live audit.
9. If critical verification fails, roll back or stop traffic change according to the approved plan.
10. Record URLs, SHAs, checks, and rollback evidence.

## Verification

- Provider revision matches the audited commit.
- TLS and redirects are correct.
- Indexing matches environment intent.
- Forms and integrations perform real expected actions safely.
- Live audit passes release criteria.
- Rollback is documented and available.
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

Return environment, live URL, deployed SHA, verification evidence, rollback target, incidents, and remaining monitoring actions.
