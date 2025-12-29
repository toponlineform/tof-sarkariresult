import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ✅ 1. IDENTITY
  site: 'https://toponlineform.com',
  output: 'static', // HTML files banayega (Super Fast)

  // ✅ 2. SEO SAFETY (Duplicate Content Killer)
  // Isse '/job' aur '/job/' alag-alag count nahi honge.
  trailingSlash: 'never', 
  
  // ✅ 3. SPEED BOOSTER
  compressHTML: true, // HTML se faltu spaces hata dega

  // ✅ 4. INTEGRATIONS
  integrations: [
    tailwind(), 
    sitemap({
      // Google Bot ko signal: "Bhai roz nayi jobs aati hain, check karte rehna"
      changefreq: 'daily', 
      priority: 0.7
    })
  ],

  // ✅ 5. MAGIC CODE (Prefetch - Super Speed)
  // Jab user link par bas hover karega ya scroll karke dekhega, page background me load ho jayega.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  // ✅ 6. BUILD SETTINGS
  build: {
    format: 'file' // Clean URLs generate karega
  }
});
