// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';
export default defineConfig({
  site: 'https://panduanhosting.id',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/keystatic') && !page.includes('/api') && !page.includes('/go/'),
      serialize(item) {
        // Use lastmod from URL pattern — Astro will pick up lastUpdated via content collection
        return { ...item, lastmod: item.lastmod ?? new Date().toISOString().split('T')[0] };
      },
    }),
    react(),
    keystatic(),
  ],
  adapter: vercel(),
});
