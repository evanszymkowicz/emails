# Coding Standards — Maizzle 6 + Tailwind CSS 4

Primary reference: the official Maizzle agent skill
(`github.com/maizzle/framework/tree/master/skills/maizzle`) and the docs at maizzle.com.
This file records the conventions that apply to this repo specifically.

## Templates and components

- One email = one `.vue` SFC in the templates directory. Front-matter-style metadata
  (subject, preheader, button copy) becomes `<script setup>` config / component props.
- Repeated structures (headers, footers, button rows, deal cards) become Vue components
  with props/slots — never copy-pasted markup. The old repos' Panini partials and
  Handlebars helpers (`bold`, `mainButton`) are the map of what to extract.
- Old data files (`customerData.json`, `tmobileData.json`, `kayakEmail.json`,
  `espnData.json`) become props passed to templates — static values, no runtime fetching.

## Reach for built-in components

Use Maizzle's render-tested components over raw HTML — they encode client quirks:
`<Layout>`, `<Html>`, `<Head>`, `<Body>`, `<Tailwind>`, `<Preheader>`, `<Container>`,
`<Section>`, `<Row>`, `<Column>`, `<Heading>`, `<Text>`, `<Link>`, `<Button>`, `<Img>`,
`<Hr>`, `<Spacer>`, `<Outlook>`, `<Raw>`, `<WithUrl>`.

Inky → Maizzle mapping from the old code: `container` → `<Container>`, `wrapper` →
`<Section>`, `row`/`columns` → `<Row>`/`<Column>`, `spacer` → `<Spacer>`, `button` →
`<Button>`, `hr` → `<Hr>`, `menu` → a `<Row>` of `<Link>`s.

## Authoring rules (from the Maizzle skill — obey these)

- No padding (or horizontal border) on an element that sets an explicit width — columns
  overflow and stack. Width on the outer element, padding on a nested
  `<Section class="px-*">`.
- Prefer `<Spacer>` between block elements (Outlook ignores some margins); margins are
  fine on text.
- Every `<Img>` gets `alt` and `width`. PNG/JPEG/GIF in production.
- No `position: absolute/relative`, no embedded SVG, no flex/grid for layout —
  `<Row>`/`<Column>` instead.
- Don't restate a `text-*` size's built-in line-height with `leading-*` unless deviating.
- Keep templates lean — Gmail clips over ~102 KB. Minify for production.

## Styling

- Tailwind utilities for all styling; theme tokens (brand colors, fonts, spacing ported
  from each old repo's `_settings.scss`) defined in the shared theme config — one place,
  not per-template inline values.
- Responsive: `sm:` (≤600px) and `xs:` (≤430px) variants as progressive enhancement.
- Dark mode: `dark:` and `<Img dark-src>` where cheap; treat as enhancement, never break
  light mode for it.
- Client variants (`gmail:`, `outlook-mac:`, …) only when a real rendering issue demands it.

## URLs and assets

- Static assets live in the Maizzle static directory (`public/` in the starter) under a
  per-email subdirectory; reference via absolute paths and let the build rewrite them.
- Production builds set `url.base` to the GitHub Pages URL. UTM/query parameters come from
  config (`url.query`) or `<WithUrl parameters>` — but ported tracking URLs are preserved
  verbatim from the old repos, not re-derived.

## Output quality bar

- Every email has a preheader, a subject/title, and a plaintext version (build supports it).
- Production HTML: CSS inlined, no framework cruft, no `<style>` blocks for layout.
