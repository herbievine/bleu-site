// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://bleu.dev',
  output: 'server',
  integrations: [react(), tailwind()],
  adapter: cloudflare()
});
