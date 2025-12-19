import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'; // Sitemap plugin (SEO ke liye)

export default defineConfig({
  site: 'https://toponlineform.com', // Yahan aapka asli domain aayega
  output: 'static',
  integrations: [tailwind(), sitemap()],
});
