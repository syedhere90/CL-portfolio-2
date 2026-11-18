import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
const preview = !!process.env.PREVIEW; // PREVIEW=1 builds a single self-contained file for quick viewing
export default defineConfig({
  site: process.env.SITE_URL || undefined, // set SITE_URL on Vercel for absolute OG/canonical URLs
  outDir: preview ? './dist-preview' : './dist',
  build: { inlineStylesheets: preview ? 'always' : 'auto' },
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: preview ? 100000000 : 4096 } },
});
