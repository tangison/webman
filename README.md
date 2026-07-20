# Webman by Tangison Studio

An evidence-led website and document production system for strategy, content, brand definition, creation, auditing, deployment, and premium document production.

Webman uses portable Agent Skills and is designed for Codex, Claude Code, Kimi Code, Antigravity, Gemini CLI, Cursor, Windsurf, ZCode, Zed, OpenCode, and other compatible harnesses. It discovers available tools, installs approved specialist skills from verified primary sources, iterates autonomously, and requires proof for every completion claim.

## Install

Install the complete collection:

```bash
npx skills add https://github.com/tangison/webman
```

Or select an individual skill when prompted.

## Included skills

| Skill | Purpose |
|---|---|
| `tangison-web-loop` | Routes a project through the complete workflow |
| `tangison-web-plan` | Discovery, research, architecture, scope, and acceptance criteria |
| `tangison-web-content` | Research, editorial planning, exact website copy, metadata, and content QA |
| `tangison-web-create` | Complete website implementation, including forgotten routes and UI states |
| `tangison-web-audit` | Evidence-based code, design, accessibility, SEO, performance, and security audit |
| `tangison-web-deploy` | GitHub, Vercel, demo subdomain, production domain, verification, and rollback |
| `tangison-documents` | Premium transactional and business PDFs |
| `tangison-magazine` | Editorial profiles, reports, brochures, and page-image documents |

## Workflow

```text
Plan
Content
Create
Audit
Fix and re-audit
Demo deployment
Client approval
Production deployment
Live audit
```

The specialist skills can also be invoked independently.

## Start a complete project

Copy the master invocation from [`SUPER_PROMPT.md`](SUPER_PROMPT.md). It tells the agent to verify the tool stack, create the brand guidelines and brand page, run the full workflow, and prove every completed action.
