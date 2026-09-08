---
name: add-email
description: Use when porting one of the seven Foundation for Emails emails into this repo — the full checklist for reading the old repo, mapping Inky to Maizzle, porting assets, and verifying against the original.
---

# Port an Email

The implementation checklist behind every `port-<name>` spec in `context/features/`. The
old repos live in `~/projects/old-emails/` and are **read-only reference**.

## Checklist

1. **Inventory the old repo** (`~/projects/old-emails/<name>/`):
   - `src/pages/` — every page is an email; front matter holds subject/description and
     button copy/links.
   - `src/layouts/`, `src/partials/`, `src/helpers/` — partials map to shared Vue
     components; helpers (`bold`, `mainButton`, `raw`) map to small components or direct
     markup.
   - `src/data/*.json` — becomes props.
   - `src/assets/scss/` — `_settings.scss` and template SCSS hold the theme tokens to port.
   - `src/assets/img/` — the assets to copy.
   - `dist/index.html` — the compiled original; the visual comparison target. (Note:
     `augnewsletter-email` was never compiled — compare against `src/pages/index.html`
     intent instead.)
2. **Copy assets** into the repo's static directory under a per-email subdirectory. Copy
   from `src/assets/img/` (not `dist/`) so originals stay pristine.
3. **Port theme tokens** (colors, fonts, spacing from `_settings.scss` + template SCSS)
   into the shared Tailwind theme config — one place, not per-template inline values.
4. **Build the template** as a Vue SFC per `@context/coding-standards.md`:
   - Inky → Maizzle mapping: `container` → `<Container>`, `wrapper` → `<Section>`,
     `row`/`columns` → `<Row>`/`<Column>`, `spacer` → `<Spacer>`, `button` → `<Button>`,
     `hr` → `<Hr>`, `menu` → a `<Row>` of `<Link>`s.
   - Every `<Img>` gets `alt` and `width`.
   - `<Preheader>` from the old `description` front matter / preheader partial.
5. **Content rules**:
   - Copy, links, and UTM parameters verbatim from the old source — never re-derive or
     "clean up" tracking URLs.
   - Replace dead remote image URLs (i.imgur.com, tinyurl redirects) with the local assets
     copied in step 2; keep live remote URLs as-is unless the spec says otherwise. If a
     dead image has no local copy, flag it and ask.
   - Modernize per `@context/project-overview.md`: normalize spacing, email-safe font
     stacks, drop obsolete hacks (Gmail-iOS font-fix div, `bgcolor` where CSS suffices).
     Document every deliberate delta.
6. **Verify** (the `test` skill owns the full pass): clean build, render at desktop +
   ~375px, side-by-side against the old compiled output.
7. **Update** the email's row in `@context/project-overview.md` when the port passes
   review (the `complete` skill does the final flip to `Ported`).

## Notes

- Multi-page repos (ESPN's five pages) become multiple templates sharing components —
  port one page fully, then the rest.
- One email per commit-sized increment; don't batch multiple emails into one diff.
