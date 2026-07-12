// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://disha-iiserpune.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
