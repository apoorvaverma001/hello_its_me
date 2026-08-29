// PostCSS configuration
// PostCSS processes our CSS through plugins before it reaches the browser.
// - tailwindcss: Scans our files and generates utility CSS classes
// - autoprefixer: Adds vendor prefixes (-webkit-, -moz-) for cross-browser compatibility
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
