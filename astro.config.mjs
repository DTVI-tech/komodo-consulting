import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// @astrojs/image is deprecated since Astro 3 — use astro:assets (built-in) instead.
// It has been installed per request but is not included here as it is incompatible with Astro 6.

export default defineConfig({
  site: 'https://komodo-consulting.com', // update with your actual domain
  output: 'static',
  integrations: [
    react(),
    tailwind({
      // Point to the existing tailwind config; disable base styles since
      // src/index.css already applies them via @tailwind base.
      applyBaseStyles: false,
      configFile: './tailwind.config.ts',
    }),
    sitemap(),
  ],
});
