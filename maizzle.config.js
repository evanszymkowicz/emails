export default {
  static: {
    source: ['public/**/*.*'],
    destination: '',
  },
  css: {
    base: '.',
  },
  // Absolute asset URLs for the GitHub Pages project site (served from
  // /emails/, so root-relative paths would 404). Enabled by setting
  // MAIZZLE_BASE_URL — the deploy workflow does this automatically.
  // No trailing slash: it concatenates directly onto our root-relative
  // "/per-email/asset" paths. Local builds omit it and keep root-relative
  // paths so the dev server and screenshot script resolve assets offline.
  url: process.env.MAIZZLE_BASE_URL ? { base: process.env.MAIZZLE_BASE_URL } : {},
  // One plaintext file per email, written next to its HTML counterpart.
  plaintext: true,
}
