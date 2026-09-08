---
name: deploy
description: Use when publishing the gallery to GitHub Pages — the production build + base-path + Actions deploy checklist.
---

# Deploy to GitHub Pages

The operational checklist for the hosting spec
(`context/features/github-pages-gallery-spec.md`). The site is a GitHub Pages project
site: `https://evanszymkowicz.github.io/emails/`.

## Checklist

1. **Base path first.** GitHub Pages serves from `/emails/` — production config must set
   Maizzle's `url.base` to `https://evanszymkowicz.github.io/emails/` and the build output
   must not assume a root-relative site. A build without this produces 404'd assets.
2. **Build**: run the production build; confirm the gallery index plus one HTML (and
   plaintext) file per ported email, with assets under their per-email directories.
3. **Verify locally at the base path** before pushing — serve the output under an
   `/emails/` prefix and click through: index links, one email, images, UTM-bearing
   links resolve.
4. **Deploy** via the GitHub Actions workflow (or create/update it if this is the first
   deploy — that's the gallery spec's job, not this skill's).
5. **Post-deploy check**: load `https://evanszymkowicz.github.io/emails/` and one email
   URL in a browser; confirm no mixed content and all images resolve.
6. **If anything 404s**, suspect the base path first, then case-sensitivity in asset
   paths (Pages is case-sensitive; macOS is not).

## Notes

- The user handles pushes and any repo-settings changes (Pages source, custom domain) —
  same rule as all git operations.
- Only ported emails ship to the gallery; never host the old repos' output.
