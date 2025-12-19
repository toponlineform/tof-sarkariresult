import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://toponlineform.com',
  output: 'static',
  integrations: [
    tailwind(), 
    sitemap()
  ],
  // ✅ YE HAI MAGIC CODE (Prefetch)
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});
