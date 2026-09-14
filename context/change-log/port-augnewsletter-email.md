# Port: Aug Newsletter Email (Heroku)

## What shipped

Built `emails/augnewsletter-email.vue` — the Heroku August 2019 newsletter ported from
`~/projects/old-emails/augnewsletter-email/`.

- One Maizzle template rendering all sections from the old page: purple header band
  ("View in Browser", Heroku logo, "august 2019 newsletter"), white rounded content
  card (headlines, you-may-also-enjoy, GA add-ons, beta add-ons, built-on-Heroku,
  upcoming events, Code[ish] podcasts, hiring + survey blocks), and a stacked centered
  footer (lockup, address, social rows).
- This old repo was never compiled (no `dist/`), so verification was against
  `src/pages/index.html` intent plus the `top.png`/`bottom.png` full-page design
  mockups in `src/assets/img/`.
- Copied the 9 referenced images to `public/augnewsletter-email/` (logo, footer
  lockup, 7 social icons). `top.png`/`bottom.png` are mockup screenshots, not email
  assets, and `sflogosmall.png` is an unreferenced duplicate of the footer lockup —
  none copied, to avoid shipping dead weight.
- Added Heroku theme tokens to `tailwind.css` (`heroku-purple/blue/lavender/rule/ink`,
  matching `_settings.scss`).
- New shared `components/SectionTitle.vue` for the repeated purple section headings
  (uppercase, 5px tracking, rule below).
- Article/add-on/event/podcast content lives in data arrays in `<script setup>`; the
  webinar's emphasized date is a separate field on the same item (no duplicated copy).
- Empty placeholder links ported as `href="#"` (repo precedent from the transaction
  port — Maizzle's `<Link>` validator rejects the source's empty `href=""`).
- Footer social alt texts corrected (the source mislabels fb/git/linkedin icons) and
  malformed anchors cleaned (stray `</href>` closers, `src` on `<a>`).
- Copy preserved verbatim, including source quirks: "ReadHeroku", "Infasctructure",
  "My V02", "Philipe Navarro", "29.Technology", and the identical DevOpsDays-derived
  bodies on the PostGresOpen/DjangoCon events.

## URLs

- Local preview: `npm run dev` → http://localhost:3000/augnewsletter-email.html
- Production (GitHub Pages): `https://evanszymkowicz.github.io/emails/augnewsletter-email.html`

## Visual deltas from original (modernization policy)

- Footer restructured from 3 side-by-side columns to a stacked centered layout
  (lockup → address → social rows) with a tighter gap above it, per user direction.
- Removed the obsolete Gmail-iOS font-fix div; email-safe Helvetica/Arial stacks.
- Alt text on every image (several corrected, see above).
- Card side padding relaxes to `sm:px-5` on small screens (progressive enhancement).
- `rounded-md` on the card is progressive enhancement (Outlook renders square corners).

## Verification

- `npm run build` completes with no warnings (~size consistent with sibling ports).
- Render-checked at desktop (700 px) and mobile (375 px) via
  `scripts/capture-screenshot.js`; screenshots in `screenshots/augnewsletter-email/`.
- Compared against the `top.png`/`bottom.png` mockups: block order, copy, section
  titles, and footer contents match.

## Follow-ups

- `h-*` height utilities don't compile in this setup (no height rules in built CSS),
  so fixed gaps use inline-style divs and `<Spacer>` heights degrade to ~1 line. Affects
  all ports (transaction too) — repo-level issue, not specific to this email.
