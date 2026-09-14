# Project Overview

## What this is

A monorepo that rebuilds seven HTML emails originally built with Foundation for Emails 2
(Gulp 4 + Babel 6 + Panini/Handlebars + Inky). The originals are frozen reference material
in `~/projects/old-emails/`. New versions are built with Maizzle 6 and hosted on GitHub
Pages as a browsable gallery — one URL per email plus an index.

The originals were scaffolded from the Foundation for Emails template stack, which now
requires Node ≤ 10 and is unmaintained — hence the rebuild rather than an in-place upgrade.

## Layout

```
emails/               # one .vue SFC per email
components/           # shared Vue components (header/footer patterns, buttons)
public/               # per-email static assets copied from the old repos
data/                 # JSON data files ported from the old repos
scripts/              # build/preview helpers (e.g. screenshot capture)
tailwind.css          # shared Tailwind theme + brand tokens
maizzle.config.js     # Maizzle build configuration
```

## Build pipeline

Maizzle handles what the old Gulpfile hand-rolled: Handlebars + Inky compilation → Vue SFC
render; Sass → Tailwind utilities; `gulp-inline-css` + `siphon-media-query` → built-in CSS
inlining and media-query handling; `gulp-uncss` → purge; `gulp-htmlmin` → minify; plus
plaintext generation. Production config adds `url.base`
(`https://evanszymkowicz.github.io/emails/`) so relative asset paths become absolute for
both web preview and email sending.

## Email inventory

| Email | Old repo (`~/projects/old-emails/`) | Pages | Data / partials worth knowing | Status |
|---|---|---|---|---|
| Transaction (adidas order) | `transaction-email` | 1 | `customerData.json` (order number); preheader partial; custom flexgrid mixin | Ported |
| Restaurant (Glen's Garden Market) | `restaurant-emails` | 1 | buttons/divider partials; bold + mainButton helpers | Not ported |
| Animation (CAVA grilling) | `animation-email` | 1 | GIF-heavy hero; images imgur-hosted with local copies in `src/assets/img/`; long UTM links | Ported |
| T-Mobile Money | `tmobile-email` | 1 | `tmobileData.json` (APY/cash-back figures); per-section partials (hero, getstarted, moremoney, privacy) | Not ported |
| Kayak mockup | `kayak-mockup` | 1 | `kayakEmail.json` — deal-of-the-day + offers array (→ loop); dedicated kayak layout | Not ported |
| Aug newsletter (Heroku) | `augnewsletter-email` | 1 | Social icons + Heroku branding assets; never had a compiled dist | Ported |
| Upcoming schedule (ESPN+) | `upcoming-schedule-email` | 5 (index, collegefootball-090719, disneyplus, ufc242, usopen) | buttons partial driven by front matter; `espnData.json` (subscriber email); team-logo assets | Ported |

Each port is specced in `context/features/port-<name>.md` and implemented via the
`add-email` skill. Status updates land here (and in the port's change-log entry) on
completion.

## Hosting

GitHub Pages project site: `https://evanszymkowicz.github.io/emails/`. A gallery index
lists all ported emails; each email renders at its own URL. Deployment is a GitHub Actions
workflow on push to `main` (spec: `context/features/github-pages-gallery-spec.md`). The old
2019 emails are not hosted — new builds only.

## Modernization policy

Ports are a *refresh*, not a pixel-faithful clone: same layout hierarchy, copy, and links;
normalized spacing; email-safe modern font stacks; obsolete client hacks removed (the
Gmail-iOS font-fix div, `bgcolor` attributes where CSS suffices); alt text on every image;
dead remote images replaced with the local assets in each old repo's `src/assets/img/`.
Deliberate visual deltas get documented in the change-log entry.
