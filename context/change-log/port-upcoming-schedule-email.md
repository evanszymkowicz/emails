# Port: Upcoming Schedule Emails (ESPN+)

## What shipped

Five Maizzle templates sharing one component set, ported from
`~/projects/old-emails/upcoming-schedule-email/`:

- `emails/upcoming-schedule-email-collegefootball-090719.vue` — "Today's slate of
  games": hero, gold bar, matchup banner, headline block, `see full schedule`
  button, four-game "Week 2 Schedule Highlights" rows, Les Miles episode banner
  + block, `stream now` button.
- `emails/upcoming-schedule-email-usopen.vue` — "Don't miss the US Open on
  ESPN+": header bar, gold bar, US Open mural, copy block, `see schedule` button.
- `emails/upcoming-schedule-email-disneyplus.vue` — "It's here....": header bar,
  Disney+/Hulu/ESPN+ mosaic, "The Time is Now" block, `bundle now` button (long
  Disney URL verbatim).
- `emails/upcoming-schedule-email-ufc242.vue` — "Khabib vs Poirier is tomorrow
  at 2PM/ET!": UFC header, faceoff hero, buy-now strip, headline block, `buy
  now` button, stream-help link, main-card graphic.
- `emails/upcoming-schedule-email-index.vue` — the old dev link-list page, same
  four links + copyright.
- Shared: `components/EspnButton.vue` (gold uppercase CTA),
  `components/EspnFooter.vue` (navy footer, subscriber email, verbatim opt-out
  URL), `components/EspnGoldBar.vue` (5px gold divider rule),
  `data/upcoming-schedule-email/espnData.json`, ESPN theme tokens
  (`espn-gold/navy/body/footer-text/light-gray`) in `tailwind.css`.
- 21 assets copied to `public/upcoming-schedule-email/` from the old
  `src/assets/img/` (team logos, heroes, ESPN bars). Dead i.imgur.com URLs all
  replaced with local files; tinyurl + Disney + help links ported verbatim.

## Image mapping (dead imgur hosts → local assets)

Matched by name/dimensions/alt, verified in renders: collegefootball hero →
`espn-collegefootball.jpg`, matchup banner → `osu-espn.png`, Les Miles banner →
`lesmiles-espn.png`, usopen/disney headers → `espnlogotop.jpg` /
`espn-noadditional.jpg` (generic ESPN+ bars), usopen hero → `espn-usopen.jpg`,
disney hero → `disney+.jpg`, UFC headers → `espn-ufc.jpg` /
`khabib-poirier.jpg` / `buynow.jpg`, main card → `main-event.jpg`, footer logo
→ `espnlogo-small.png`, schedule logos → `cc/ku/charlotte/appstate/nd/ndsu/
westkentucky/fiu-espn.png` (300×200 → `width="106"`, aspect preserved).

## Framework findings (applies repo-wide)

- Centered `<Column>`s need `w-full`: Maizzle 6 puts column classes on an inner
  `inline-block` wrapper that shrink-wraps, so `text-center` alone left-aligns
  short content. Same for `<Hr>` percentage widths — the wrapping column must be
  full-width or the rule collapses to zero.
- `<Spacer class="h-*">` heights only take effect paired with an explicit
  `leading-*` (Spacer converts height→line-height, and the CSS is only generated
  for `leading-*` tokens present in source). All ESPN spacers are paired.
- `<Heading>` takes `:level`, not `as` (the latter leaks as an attribute and
  renders `h1`).
- Multi-column `<Row>`s must total under 100% (whitespace gaps wrap exact-100%
  splits — schedule rows use 22/50/22). Logos use fluid sizing
  (`width:100%; max-width:106px`) so mobile 3-across never overflows.
- Arbitrary `h-[5px]` generates no CSS in this pipeline — the gold bar is an
  inline-styled div in `EspnGoldBar`.

## Visual deltas from original (modernization policy + user requests)

- Removed the obsolete Gmail-iOS font-fix div; email-safe Roboto stack.
- Fixed a source bug: the Charlotte/App-State row's second logo had
  `alt="Kansas Jayhawks"` — now `"Appalachian State"`.
- Body copy breaks after each sentence (`<br />`, user-requested); footer
  address re-lineated into a proper block with even spacing (user-requested).
- Mobile keeps the original's 3-across schedule rows (user-confirmed).
- Alt text added everywhere, including heroes the original left untagged.

## Deviations from spec (accepted)

- `EspnFooter` imports `espnData.json` directly instead of taking the email as a
  prop (mirrors the `transaction-email.vue` precedent; single subscriber).
- `EspnButton` forks the `Button.vue` pattern rather than extending the
  restaurant button components.
- `big12-espn.png` copied but unreferenced; `espn-email.png` (1080×1822,
  looks like a full-email screenshot, referenced by no page) not copied.

## URLs

- Local preview: `npm run dev` → http://localhost:3000/upcoming-schedule-email-{collegefootball-090719,usopen,disneyplus,ufc242,index}.html
- Production (GitHub Pages):
  `https://evanszymkowicz.github.io/emails/upcoming-schedule-email-{...}.html`

## Verification

- `npm run build` completes without errors or warnings (9 templates).
- Render-checked at desktop (700 px) and mobile (375 px) via
  `scripts/capture-screenshot.js` + playwright probes (computed boxes for
  wrapped columns, zero-width rules, footer alignment); screenshots in
  `screenshots/upcoming-schedule-email-*/`.
- `collegefootball-090719` and `usopen` compared against their old `dist/`
  baselines: same block order, copy, links, gold rules/bars, footer.

## Follow-ups

- `transaction-email` has the same exact-100% column-wrap bug in its product
  row (w-6/12 stacks) — pre-existing, out of scope. Fix on request.
- `Divider.vue` and older ports use unpaired `<Spacer class="h-*">` (heights
  don't apply) — same offer.
- Open review notes (EspnFooter prop, button fork, index `.html` filenames)
  recorded, none actioned — see change-log discussion.
