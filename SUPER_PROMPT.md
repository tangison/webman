# Webman Super Prompt

Copy everything inside the block below into a new agent conversation.

```text
Use the Webman system from https://github.com/tangison/webman for this project.

This instruction is harness-neutral. Apply it in Codex, Claude Code, Kimi Code, Antigravity, Gemini CLI, Cursor, Windsurf, ZCode, Zed, OpenCode, or another Agent Skills-compatible harness. Detect the current harness and map skills, plugins, connectors, MCP servers, browser, shell, filesystem, image, document, GitHub, Vercel, and deployment tools by capability rather than by one vendor-specific name.

First, inspect the workspace and current agent capabilities. Verify the current primary source, compatibility, installation method, licence, and installed version for every required tool before using it. Ask for approval before installing anything that changes my environment. Use the maintained installer at https://github.com/vercel-labs/skills for portable skills where appropriate. Use an official harness-specific plugin method when hooks, commands, agents, or MCP servers are part of the capability. Do not guess a package or silently substitute an unknown skill.

Required stack:
1. Webman: tangison-web-loop, tangison-web-plan, tangison-web-content, tangison-web-create, tangison-web-audit, tangison-web-deploy, tangison-documents, and tangison-magazine.
2. Superpowers from https://github.com/obra/superpowers for brainstorming, planning, test-driven development, systematic debugging, code review, and verification before completion.
3. Ponytail from https://github.com/dietrichgebert/ponytail for YAGNI, reuse, native platform preference, dependency restraint, and root-cause simplification.
4. Impeccable from https://github.com/pbakaus/impeccable for design context, critique, hardening, responsive adaptation, anti-pattern detection, and final polish.
5. Taste Skill from https://github.com/Leonxlnx/taste-skill, install name design-taste-frontend, for brief inference and the layout-variance, motion-intensity, and visual-density direction.
6. Hallmark from https://github.com/Nutlope/hallmark for structural anti-slop design, reference study, independent audit, or redesign.
7. Marketing Skills from https://github.com/coreyhaines31/marketingskills for product-marketing context, customer research, positioning, competitor analysis, copywriting, SEO, CRO, analytics, content strategy, launch, pricing, and growth when relevant.
8. Squirrelscan from https://github.com/squirrelscan/skills, SEOJuice from https://github.com/calm-north/seojuice-skills, and real audit tools that apply to the stack.
9. Together AI skills from https://github.com/togethercomputer/skills only when the project uses Together AI models, function calling, images, audio, video, embeddings, or infrastructure.
10. Meta Astryx from https://github.com/facebook/astryx as a preferred evaluation candidate for component-heavy React applications. It is beta, so verify its current release and compare it with the existing system, native components, and shadcn/ui from https://github.com/shadcn-ui/ui. Do not force it into every website.

Choose one design skill as the art-direction owner. Other design skills may study references, critique, harden, adapt, audit, or polish. Do not mix conflicting design rules silently.

Run the Webman workflow in this order:
Harness and tool bootstrap, plan, research, product-marketing context, content, brand definition, creation, audit, fixes, re-audit, demo deployment, client approval, production deployment, and live audit.

Interview me one concise question at a time. Reuse answers already supplied. Do not start implementation until the audience, offer, conversion goal, build mode, route scope, deployment intent, and brand direction are clear.

Every project must create and maintain PRODUCT.md, BRAND.md, BUILD_PLAN.md, CONTENT_PLAN.md, and PROOF.md.

BRAND.md is mandatory and must define the brand purpose, audience, position, promise, personality, voice, prohibited language, verified logo rules, colours and accessible pairings, typography and licensing, grid, spacing, shapes, imagery, icons, motion, components, operational states, correct and incorrect usage, sources, and approval status.

Every website must include a designed public /brand page based on approved BRAND.md content. In demo mode, unlock the approved home experience and /brand page only. Lock all other planned pages with intentional preview states. In full mode, unlock and complete every approved route and integration.

Build every applicable route and state agents commonly forget: legal pages, human-readable /sitemap, sitemap.xml, robots.txt, manifest, favicon, social images, canonical metadata, structured data, authentication states, loading, success, validation failure, server failure, timeout, empty, no results, offline, maintenance, access denied, session expired, locked demo, 404, and 500.

Add a restrained footer credit on every public page reading “Made by Tangison Studio” and link the complete text to https://studio.tangison.com. Keep it accessible and visible unless I explicitly remove it for the project.

Use exact approved facts and copy. Never invent metrics, testimonials, partners, prices, addresses, registration details, legal claims, or business results. Avoid em dashes and generic AI language such as revolutionise, unlock, next generation, cutting edge, seamless, game changing, world class, and unwavering commitment.

Reject generic AI design. Do not default to Inter, purple gradients, repeated card grids, excessive pills, glass panels, random blobs, decorative dashboards, fake metrics, or staged stock photographs. Choose one brand-specific visual idea and implement it coherently. State which design skill owns art direction and which skills provide critique so their rules do not conflict silently.

Every material action requires proof. Maintain PROOF.md with: Phase | Action | Target | Command or method | Result | Evidence path or URL | Timestamp | Status. Acceptable evidence includes source links, file inspection, diffs, test output, audit JSON, screenshots, commit SHAs, deployment IDs, DNS lookups, HTTP responses, and verified live URLs. Redact secrets. Do not call an action complete without proof.

Take tool calling seriously. Whenever a tool can inspect current state, search an unstable fact, read a source, calculate, render, test, crawl, audit, deploy, or verify more reliably than prose, use the tool. Prefer user-supplied sources, first-party connectors, official APIs, local deterministic tools, and primary web sources in that order. Use parallel tool calls only for independent read-only work. Never fabricate tool output or hide a failed tool.

Use the autonomous loop in every phase: observe, define the next bounded outcome, act with the smallest complete change, verify deterministically, inspect visually or functionally, trace failures to root causes, fix, re-run the exact failing check, record proof, and hand off only when the phase gate passes. Stop after three cycles without measurable improvement, ten cycles in one phase, or a decision requiring my authority.

Before every handoff, run the relevant verification. Before release, require a passing type check, lint, production build, applicable tests, critical journeys, route and state checks, accessibility checks, responsive inspection, content comparison, security scan, SEO verification, design critique, and real audit output.

The release audit must use multiple independent layers: project checks; Playwright or equivalent journey checks; axe-core and Pa11y plus manual accessibility testing; Lighthouse; Squirrelscan crawling; direct SEO inspection; Gitleaks and dependency audit; optional TruffleHog and OWASP ZAP when authorised; Impeccable critique; Hallmark audit; and Ponytail complexity review. Keep subjective design scores separate from technical measurements. Fix root causes, then re-run the exact failing check and record before-and-after evidence.

Use GitHub and Vercel for deployment when approved. Demo and staging environments must be noindex and use test integrations. Connect only the exact approved subdomain, preserve unrelated DNS records, verify TLS and redirects, and retain a rollback path. Production deployment must use the exact audited commit and must be followed by a live audit.

Start by telling me which Webman phase applies, what you found in the workspace, which required skills are already available, which verified installations need my approval, and the single first question you need answered.
```
