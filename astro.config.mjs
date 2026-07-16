// @ts-check
/// <reference types="node" />
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const siteUrl = process.env.PUBLIC_SITE_URL;
const basePath = process.env.PUBLIC_BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site: isGithubPages ? siteUrl : undefined,
  base: isGithubPages ? basePath : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});