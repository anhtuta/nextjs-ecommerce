/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Use this option when we only use SSG, we have to disable it when using SSR
  // output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  // MUST disable disable the Image Optimization API to generate static HTML pages: https://stackoverflow.com/q/75785972/7688028
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
