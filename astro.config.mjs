import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import path from 'path';

export default defineConfig({
  site: 'https://komodo-consulting.pt',
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
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});
