---
name: test
description: Use after implementing a feature to verify it — runs the production build, render-checks affected emails in the dev server (desktop + ~375px), and compares ports against the old dist output.
---

# Test a Feature

Verifies what `start` implemented. Follow `@context/ai-interaction.md`'s "Verify Before
Handing Off" section.

## Steps

1. Read `context/current-feature.md` to see what was implemented.
2. Run `npm run build` — it must complete without errors. Note any Maizzle/transformer
   warnings; a *new* warning means something changed.
3. Identify what to render-check:
   - **New or modified email templates**: open each in the dev server (or built output)
     via the playwright MCP. Check: layout intact at desktop and ~375px widths, images
     resolve, preheader present, alt text present, buttons render as table-based targets,
     CSS is inlined in the production build.
   - **Ports**: open the old email's `dist/index.html` side-by-side and compare against
     the modernization policy in `@context/project-overview.md` — same layout/copy/links,
     documented deltas only.
   - **Shared components/config**: check every email that consumes them, not just one.
4. If the tooling for a check doesn't exist yet, say so explicitly and fall back to manual
   checks: re-read the code and sanity-check by hand.
5. Report: what was run, what passed, what failed (with file + suspected cause), and what
   couldn't be verified automatically.

## Notes

- A clean build is not sufficient for visual changes — always render-check.
- Sending test email is out of scope for this skill — ask the user first (see
  `@context/ai-interaction.md`).
