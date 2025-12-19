import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static', // SSG Mode
  integrations: [tailwind()],
});
