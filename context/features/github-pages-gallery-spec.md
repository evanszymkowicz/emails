# GitHub Pages Gallery

## Goal

Host the ported emails at `https://evanszymkowicz.github.io/emails/`: a gallery index
linking every ported email, each email at its own URL, deployed automatically on push to
`main` via GitHub Actions.

## Next Steps

1. Add production config: `url.base` = `https://evanszymkowicz.github.io/emails/` so asset
   URLs and links are absolute and base-path correct.
2. Build a gallery index page listing each ported email (subject + link; plain HTML or a
   Maizzle template — builder's choice, documented in the change-log entry).
3. Generate plaintext alongside HTML for each email.
4. Add `.github/workflows/deploy.yml`: on push to `main` — install, production build,
   publish the output directory to GitHub Pages via the official Pages actions.
5. Verify locally under an `/emails/` base path before first deploy; then verify live
   after.
6. Record any deviation from the `deploy` skill's checklist in the change-log entry.

## Acceptance Criteria

- [ ] `https://evanszymkowicz.github.io/emails/` loads with the gallery index.
- [ ] Every ported email renders at its own URL with all assets resolving (no 404s).
- [ ] Pushes to `main` redeploy without manual steps.
- [ ] Emails render correctly when opened directly (base-path assets, absolute links).

## Out of Scope

- Porting emails (separate specs) — the gallery ships even if only one email is ported.
- Custom domains, analytics, or hosting the old 2019 emails.
