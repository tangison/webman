---
name: tangison-funding-application
description: Package verified business plans, financial models, and supporting documents for a named funding institution. Use for current requirement research, gap analysis, submission indexes, institutional forms, and lender-specific handoff without implying approval.
---

# Tangison Funding Application

## Purpose

Create a complete, current, source-backed submission pack for a named institution while preserving exact institutional wording and separating mandatory items from recommendations.

**A completion claim without evidence is invalid.**

## Use this skill when

- A DBN, EIF, SME, lender, grant, or investor application is requested.
- Institution requirements must be verified and mapped to existing evidence.
- A submission pack needs a gap checklist and index.

## Do not use this skill when

- Do not hard-code old institution requirements as permanent fact.
- Do not guarantee approval or provide legal or financial assurance.
- Do not alter official form wording.

## Ownership

This skill owns institution-specific packaging. Research verifies requirements; Business Plan owns narrative; Financial Model owns figures; Documents or Magazine owns final layout.

## Required inputs

- Named institution, product, jurisdiction, deadline, and applicant type.
- Current official requirements and forms.
- Verified business plan, model, legal records, identities, quotations, and supporting evidence.
- Submission channel and format.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop when applicant identity, authority, regulated activity, funding amount, deadline, or mandatory form is unresolved.
- Do not submit externally without explicit authority.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Research current requirements from official sources and record access date.
- Use exact forms when required.
- Maintain a gap checklist and submission index.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Confirm the named institution and funding product.
2. Research current official requirements and access dates.
3. Separate mandatory documents, conditional documents, and recommendations.
4. Map each requirement to verified evidence.
5. Create a gap checklist with owner and next action.
6. Route narrative gaps to Business Plan and calculation gaps to Financial Model.
7. Preserve exact institutional wording and form structure.
8. Create a numbered submission index and filename convention.
9. Verify names, IDs, dates, amounts, signatures, certifications, and cross-document consistency.
10. Package the complete application without claiming approval.
11. Record evidence and missing items.

## Verification

- Every requirement maps to a file, a justified not-applicable status, or an explicit gap.
- Official source and access date are recorded.
- Names, amounts, dates, and figures agree across documents.
- Institutional wording remains unchanged.
- No approval guarantee or outdated unsupported requirement remains.
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

Return submission index, requirement-source ledger, complete files, gap checklist, deadline and channel notes, and unresolved authority items.
