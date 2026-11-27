import { defineConfig } from 'astro/config';

// SITE_BASE is only set when the site is served from a sub-folder
// (GitHub Pages: /repo-name). Everywhere else it is the domain root.
export default defineConfig({
  site: 'https://www.tavernaitaliankitchen.com',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'always',
});
