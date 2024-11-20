// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://poivre.dev',
  trailingSlash: 'never',
  output: 'server',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('kit')
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
  // redirects: {
  //   '/': '/kit'
  // }
});
