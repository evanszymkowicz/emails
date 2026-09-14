# Port: Animation Email (CAVA grilling)

## What shipped

Built `emails/animation-email.vue` — the CAVA "John, grill school is in session" email
ported from `~/projects/old-emails/animation-email/`.

- One continuous white container (matching the old outer container) holding: CAVA name
  banner, big animated GIF hero, sizzle copy, "protein-powered bowls" heading, three
  protein-bowl cards, "bring the heat" CTA, rule, second copy block, "see our grill
  tips" CTA, and the footer (hashtag strip, social row, copyright, address).
- Corrected the GIF mapping against `framegrab.png`: the hero is `banner-img.gif`
  ("STAY FIRED UP", 800×1001) and the footer strip is `cookwithfire.gif`
  ("#COOKWITHFIRE", 1000×136) linked to the Instagram UTM URL. (An earlier draft had
  them swapped.)
- Replaced all dead i.imgur.com image URLs with local copies in
  `public/animation-email/`; kept the live cava.com / forthosewhosavor.com links with
  their long UTM strings and the `shorturl.at` social links verbatim.
- Buttons match the old compiled output: `#FFB134` background and border, 15px bold
  uppercase, 2px letter-spacing, 8px/16px padding.
- Added `w-full` to centered `<Column>`s: Maizzle 6 renders column classes on an inner
  `inline-block` wrapper that shrink-wraps, so `text-center` alone left-aligns short
  content (heading, buttons, socials, footer text).
- Added CAVA theme tokens (`cava-black/white/light-gray/medium-gray/orange`,
  `font-cava-serif`) to `tailwind.css`.
- Alt text on every image (the original had none on most images).

## URLs

- Local preview: `npm run dev` → http://localhost:3000/animation-email.html
- Production (GitHub Pages): `https://evanszymkowicz.github.io/emails/animation-email.html`

## Visual deltas from original (modernization policy)

- Removed the obsolete Gmail-iOS font-fix div.
- Normalized spacing (even spacers between blocks) and email-safe font stacks
  (Helvetica/Arial body, Georgia serif copy).
- Alt text added to all images, including descriptions of the copy baked into the
  three composite bowl-card images.

## Verification

- `npm run build` completes without errors (~17 KB HTML, well under the Gmail clip limit).
- Render-checked at desktop (700 px) and mobile (375 px) via
  `scripts/capture-screenshot.js`; screenshots in `screenshots/animation-email/`.
- Compared side-by-side against the old `dist/index.html` and `framegrab.png`; layout
  order, copy, links, and block structure match.

## Follow-ups

- Unreferenced `framegrab.png` copies exist at the repo root and in
  `public/animation-email/` (the latter ships into the production build). Flagged in
  review; left in place per user direction — delete when convenient.
