// @ts-check
/// <reference types="node" />
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { siteUrl as defaultSiteUrl } from './src/data/site.ts';

const siteUrl = process.env.PUBLIC_SITE_URL || defaultSiteUrl;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
