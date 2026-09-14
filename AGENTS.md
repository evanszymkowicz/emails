# AGENTS.md

Guidance for AI agents working in this repository. Harness- and model-agnostic — any agent
(Cline, Claude Code, Cursor, Codex, …) should follow this file plus `context/`.

## Project

`emails`: a monorepo of HTML email templates rebuilt with Maizzle 6 (Vue SFC components +
Tailwind CSS 4), replacing seven 2019-era Foundation for Emails 2 projects that live in
`~/projects/old-emails/` (reference only — never modified). The old repos are the visual
and content source of truth for each port; the new builds are a modernized refresh of the
same designs, hosted as a browsable gallery on GitHub Pages.

## Status

The Maizzle 6 project is scaffolded at the repo root. The first email
(`transaction-email`) is ported; remaining six emails are not yet started. Read
these before starting work:

- `context/project-overview.md` — architecture, email inventory, build pipeline, hosting.
- `context/current-feature.md` — the feature in flight.
- `context/ai-interaction.md` — how to work in this repo: verification expectations,
  git conventions, the ask-before-send rule.
- `context/coding-standards.md` — Maizzle/Tailwind email conventions to build to.

## Commands

```
npm run dev        # maizzle serve — dev server with HMR + email preview
npm run build      # maizzle build — production HTML with inlined CSS
npm run screenshot # capture portfolio PNGs of the built emails
```

## Rules that bite

- **The old repos are read-only reference.** Copy content/assets from
  `~/projects/old-emails/<name>/`; never edit files there.
- **UTM/tracking links are preserved as-is.** Port them verbatim; don't "clean" them.
- **Dead image hosts get replaced with local assets.** Old templates point at i.imgur.com
  and tinyurl redirects; several are dead. Copy replacements from the old repo's
  `src/assets/img/`; if no local copy exists, flag it during the port.
- **No test sends without asking.** Sending email (dev-server send, Nodemailer) needs
  credentials and touches real inboxes — always ask first.
- **GitHub Pages serves from a base path.** URLs are `evanszymkowicz.github.io/emails/…`;
  production builds must set `url.base` with that path or assets 404.

## Agent tooling

This repo ships harness-neutral skills, agent prompts, and hook cores. Harness-specific
wiring (`.opencode/`) is a thin shim over these files — treat them as canonical.

- **Precedence.** Harness-learned preference files are advisory. When they conflict
  with this file, `context/`, `skills/`, or `agents/`, the canonical files win. When a
  harness learning proves durable and isn't yet captured here, promote it back into the
  canonical file it belongs to rather than letting the shim drift into a shadow workflow.

- **Agent prompts** (`agents/`): `code-scanner` (security/correctness audit of templates,
  components, and config), `ui-review` (reviews rendered emails in the dev server via the
  playwright MCP — mobile widths, image integrity, alt text, fidelity to the original).
  Each is a self-contained task prompt — read the file and execute it as a focused
  subtask when its trigger applies.
- **Skills** (`skills/<name>/SKILL.md`, pull-based — read when the trigger applies): the
  feature workflow — `load` (point `current-feature.md` at a new spec), `start` (begin
  implementation), `review` (check against goals/acceptance criteria), `test` (build +
  render checks), `explain` (document the diff), `complete` (change-log entry + reset) —
  plus two domain skills: `add-email` (the per-email port checklist) and `deploy` (GitHub
  Pages build/publish checklist).
- **Hooks**: none scaffolded yet. If a need shows up, add the harness-neutral core first
  (like the sibling repos' `scripts/hooks/`), then wire shims.

## Tech Stack

- **Framework**: Maizzle 6 (`@maizzle/framework`) — Vue SFC email components + Tailwind
  CSS 4; the build pipeline handles CSS inlining, purging, and minification.
- **Templates**: one `.vue` SFC per email; shared partials become Vue components with
  props/slots.
- **Hosting**: GitHub Pages project site (`evanszymkowicz.github.io/emails/`) — gallery
  index + one URL per email, deployed from `main` via GitHub Actions.
- **Reference sources**: the seven Foundation for Emails 2 repos in `~/projects/old-emails/`.
