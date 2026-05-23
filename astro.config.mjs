// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';
export default defineConfig({
  site: 'https://panduanhosting.id',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/keystatic') && !page.includes('/api'),
    }),
    react(),
    keystatic(),
  ],
  adapter: vercel(),
});
