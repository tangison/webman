---
name: tangison-financial-model
description: Create auditable financial schedules, formulas, projections, and scenarios. Use for revenue, costs, capital expenditure, operating expenditure, payroll, loans, cash flow, income statements, balance-sheet logic, break-even, sensitivities, and use-of-funds tables.
---

# Tangison Financial Model

## Purpose

Produce transparent machine-readable financial logic that distinguishes supplied figures from assumptions and never invents precision.

**A completion claim without evidence is invalid.**

## Use this skill when

- A business plan or funding application needs projections.
- Deposits, percentages, repayments, break-even, or scenarios must be calculated.
- Existing figures do not reconcile.

## Do not use this skill when

- Do not let document-layout calculations become the source of truth.
- Do not invent figures without labelling the assumption.
- Do not present estimates as audited actuals.

## Ownership

This skill owns financial calculations and schedules. Business Plan owns narrative reasoning; Documents owns presentation.

## Required inputs

- Currency, period, tax treatment, opening balances, and supplied actuals.
- Pricing, volumes, growth, costs, payroll, capital expenditure, financing terms, and timing assumptions.
- Required statements, scenarios, and institution format.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop when currency, period, tax, financing terms, opening balances, or a material assumption is missing and cannot be responsibly estimated.
- Mark every estimate and never imply false precision.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Use a spreadsheet or machine-readable tables with visible formulas.
- Recalculate totals independently.
- Use sensitivity and continuity checks.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. State currency, period, frequency, and tax treatment.
2. Create an assumption register with source and status.
3. Build revenue, direct cost, operating cost, payroll, capital expenditure, working capital, and financing schedules.
4. Build cash flow and income statement; add balance-sheet logic when required.
5. Show formulas and timing.
6. Calculate break-even, funding use, repayment, and scenario sensitivities.
7. Recalculate totals and percentages independently.
8. Check opening-to-closing continuity and statement links.
9. Compare narrative figures and funding request.
10. Record model version, checks, and unresolved assumptions.

## Verification

- All figures have source or assumption status.
- Formulas are visible and recalculate.
- Totals, percentages, deposits, and loan schedules reconcile.
- Cash continuity and statement links pass.
- Scenario changes affect the correct drivers.
- No unexplained precision or hard-coded total remains.
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

Return machine-readable model, assumption register, formula notes, statements, scenarios, reconciliation checks, and unresolved inputs.
