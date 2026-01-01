import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ✅ 1. IDENTITY
  site: 'https://toponlineform.com',
  output: 'static', // HTML files banayega (Super Fast)

  // ✅ 2. SEO SAFETY & CLOUDFLARE FIX (Redirect Loop Killer)
  // Isse '/job' aur '/job/' ka jhagda khatam ho jayega.
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
  // Jab user link par bas hover karega, page background me load ho jayega.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  // ✅ 6. BUILD SETTINGS (Cloudflare Special)
  build: {
    // Astro ab 'job/index.html' (folder) nahi, balki 'job.html' (file) banayega.
    // Cloudflare Pages ke liye ye sabse BEST setting hai.
    format: 'file' 
  }
});
