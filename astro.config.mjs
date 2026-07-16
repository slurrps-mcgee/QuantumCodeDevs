// @ts-check
/// <reference types="node" />
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const siteUrl = process.env.PUBLIC_SITE_URL;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  vite: {
    plugins: [tailwindcss()]
  }
});