---
name: tangison-web-loop
description: Autonomously orchestrate complete Tangison website work from workspace inspection through research, content, brand definition, creation, audit, fixes, deployment, and live verification. Use for full website builds, redesigns, repairs, launches, or multi-phase web work. Default to full-build execution, invoke planning only when explicitly requested or genuinely blocking, and activate demo mode only when the user explicitly says the project is a demo.
---

# Tangison Web Loop

Use specialist skills with clear ownership and preserve their handoffs. Default to autonomous execution, not a ceremonial planning process.

## Universal operating foundation

Webman follows the open Agent Skills format and must work across Codex, Claude Code, Kimi Code, Antigravity, Gemini CLI, Cursor, Windsurf, Zed, OpenCode, and other compatible harnesses. Detect the harness and map capabilities by purpose. Never weaken a gate because a command has a different name.

Use tool calling seriously. When a tool can inspect current state, search the web, read a source, calculate, render, test, audit, deploy, or verify more reliably than a prose answer, call the tool. Prefer primary sources and first-party connectors. Use parallel calls only for independent read-only work. Never fabricate output, conceal a failed tool, or call an action complete without proof.

Read [references/operating-foundation.md](references/operating-foundation.md), [references/harness-setup.md](references/harness-setup.md), and [references/skill-stack.md](references/skill-stack.md) before starting a full project.

Treat the user's first prompt, supplied files, and existing repository as the working brief. Ask one concise question only when a missing answer materially changes scope, cost, architecture, legal meaning, production data, or brand direction. Otherwise record a reasonable assumption and continue.

## Skills in the system

1. `tangison-web-plan`: discovery, research, positioning, architecture, scope, route matrix, risks, and acceptance criteria.
2. `tangison-web-content`: evidence gathering, editorial plan, exact page copy, interface text, SEO copy, and content approval.
3. `tangison-web-create`: implementation of every approved route, state, integration, responsive layout, and system page.
4. `tangison-web-audit`: measured technical and visual audit, safe fix loop, re-audit, and release verdict.
5. `tangison-web-deploy`: GitHub, Vercel, preview or production configuration, subdomain connection, live verification, and rollback.
6. `tangison-documents`: transactional and formal business documents.
7. `tangison-magazine`: editorial company profiles, annual reports, brochures, lookbooks, and visual publications.

External specialist sources and ownership rules are defined in [references/skill-stack.md](references/skill-stack.md). Install the verified Webman foundation automatically at project scope when the harness supports safe, reversible installation. Ask only for global, privileged, destructive, uncertain, or licence-sensitive changes. Prove each installation and invocation.

## Routing

- A full website request defaults to a complete full-build sequence.
- A clear single-phase request runs only the relevant specialist skill, but reads existing handoff files first.
- Run `tangison-web-plan` only when the user explicitly requests planning, the project is genuinely undefined, or implementation cannot safely proceed.
- Activate demo mode only when the user explicitly says `demo`, `client demo`, or equivalent. Never infer demo mode from a client project, preview URL, or incomplete content.
- A company profile can route to `tangison-magazine`, a website, or both. Ask which output is needed.
- Quotations, invoices, contracts, letters, and formal PDFs route to `tangison-documents`.
- A visual proposal may combine `tangison-magazine` with the relevant commercial requirements from `tangison-documents`.

## Full sequence

### Phase 0: Harness and tool bootstrap

1. Detect the active harness and installed skills, plugins, connectors, MCP servers, and CLIs.
2. Read [references/harness-setup.md](references/harness-setup.md).
3. Verify current primary repositories, licences, commits or versions, installation names, and installation instructions.
4. Install missing project-scoped skills automatically when installation is safe, reversible, and supported.
5. Request approval only when the harness requires it or installation is global, privileged, destructive, licence-sensitive, or from an unverified source.
6. Verify visibility and one real invocation per required capability.
7. Record versions, paths, commands, results, and evidence in `PROOF.md`.

Do not continue with a silently degraded workflow. If a specialist tool is unavailable, state the limitation and use a named, evidence-based fallback.

### Phase 1: Brief or plan

If the user did not request planning and the brief is sufficient, create or update the minimum working `PRODUCT.md`, `BRAND.md`, `BUILD_PLAN.md`, and `CONTENT_PLAN.md` from verified information, then proceed. These are living execution records, not approval rituals.

When planning is explicitly requested or required for safety, run `tangison-web-plan` and produce:

- `PRODUCT.md`;
- `BRAND.md`;
- `BUILD_PLAN.md`;
- approved build mode;
- route and state matrix;
- requirements, risks, dependencies, and acceptance criteria.

Do not stop for information that can be safely inferred from verified context. Stop only when the unresolved choice materially changes the build.

### Phase 2: Content

Run `tangison-web-content` using the approved plan. Produce `CONTENT_PLAN.md` with exact page copy, interface states, metadata, source notes, and unresolved content decisions.

Do not let layout fabricate content to fill space.

### Phase 3: Create

Run `tangison-web-create`. Full mode is the default. In explicitly requested demo mode, unlock only the approved experiences and design honest locked states for the rest. In full mode, complete all approved routes, integrations, system pages, and operational states.

The production build, type checker, linter, and applicable tests must pass before audit.

### Phase 4: Audit and fix

Run `tangison-web-audit`. Keep measured results separate from subjective critique. Fix authorised P0 and P1 findings, validate the build, and re-run the finding tools.

Do not deploy without a pass or an explicit, documented user acceptance of remaining P1 risk.

### Phase 5: Deployment

Run `tangison-web-deploy` only when deployment is requested or already authorised.

For an explicitly requested client demo, use client-demo mode:

- GitHub repository prepared safely;
- Vercel preview connected;
- approved subdomain attached;
- indexing disabled;
- irreversible integrations disabled or in test mode;
- only approved routes unlocked;
- live smoke audit completed.

For a full build, deploy the exact audited commit to the approved preview, staging, or production target. Never downgrade a full build to a locked demo.

### Phase 6: Feedback and continuation

Record client feedback as decisions, not scattered comments. Update plan and content first when scope changes, then rebuild and re-audit.

### Phase 7: Production deployment

Run `tangison-web-deploy` against the exact audited commit. Verify domain, TLS, redirects, forms, analytics, consent, indexing, sitemap, metadata, integrations, and rollback.

### Phase 8: Live audit

Run a focused `tangison-web-audit` against the public URL. Close only after the live release has no unresolved P0 and all P1 findings are fixed or explicitly accepted.

## Interview rule

Ask one concise question at a time when a critical choice is missing. Do not send a long questionnaire. Continue with safe work between answers when possible.

Do not ask for plan approval unless the user explicitly requested planning. Do not repeat questions answered in the prompt, files, repository, prior decisions, or verified sources.

## Specialist orchestration

- Superpowers is the engineering-process owner. Use brainstorming only when requirements are ambiguous, TDD for non-trivial behaviour, `systematic-debugging` for every failure or unexpected result, code review before release, and verification-before-completion before every completion claim.
- Ponytail is the complexity owner. It enforces YAGNI, reuse, platform and standard-library preference, minimum dependencies, and root-cause simplification.
- Choose one visual art-direction owner. Taste sets the project dials. Hallmark always provides structural anti-slop review and an independent final audit. Impeccable supplies design context, responsive hardening, critique, and polish.
- Full-output enforcement forbids skipped files, truncated implementations, TODOs, placeholder comments, inactive controls, and claims that omitted work follows the same pattern.
- Motion skills define implementation options. Anime.js owns deliberate timeline, stagger, SVG, and interaction choreography. GSAP ScrollTrigger owns advanced scroll-driven storytelling. CSS and native browser APIs remain the preferred simple path. Use one primary runtime motion engine unless a measured requirement justifies more.

## State and truthfulness

At every phase, report:

- what is approved;
- what is complete;
- what is simulated;
- what is locked;
- what failed;
- what requires user authority;
- what the next specialist skill needs.

Never describe a demo as a complete production system. Never describe an unmeasured audit as a pass. Never describe a Vercel build as launched until the live domain is verified.

## Evidence ledger

Maintain `PROOF.md` throughout the workflow. For every material action record:

`Phase | Action | Target | Command or method | Result | Evidence path or URL | Timestamp | Status`

Acceptable proof includes source links, inspected files, diffs, test output, audit JSON, screenshots, commit SHAs, deployment IDs, DNS lookups, HTTP responses, and live URLs. Redact secrets. A claim without proof remains incomplete.

Read `references/skill-stack.md` before setup or implementation. Install only verified skills from their primary source, use each for its defined job, and record installation and invocation proof in `PROOF.md`.

## Content and design standards

- Use concrete, human copy.
- Avoid em dashes.
- Reject “revolutionise”, “unlock”, “next generation”, “cutting edge”, “seamless”, “game changing”, fabricated metrics, and generic testimonials.
- Preserve exact supplied facts and brand assets.
- Add a restrained `Made by Tangison Studio` footer credit linked to `https://studio.tangison.com` on every public page, unless the user explicitly removes it for that project.
- Avoid repetitive card grids, arbitrary gradients, excessive pills, decorative dashboards, and generic stock imagery.
- Build every necessary loading, empty, error, offline, maintenance, locked, access, 404, and 500 state.
- Define a real scroll and motion system on every project, including purpose, hierarchy, easing, timing, reduced-motion fallback, cleanup, and performance limits.
- Convert suitable raster delivery assets to WebP or AVIF, keep safe fallbacks when required, preserve originals and transparency, retain SVG logos as SVG, declare dimensions, and verify desktop and mobile crops.

## Stop conditions

Pause and request direction when:

- the next action changes an external system without clear authority;
- a missing decision materially changes scope, architecture, cost, legal meaning, or production data;
- required credentials or brand assets are unavailable;
- a release gate fails;
- no measurable improvement occurs after three audit cycles;
- ten fix cycles have run in one session.

The workflow ends only when the requested output is complete, verified, documented, and, when requested, deployed and live-audited, or when the user intentionally stops at an earlier phase.
