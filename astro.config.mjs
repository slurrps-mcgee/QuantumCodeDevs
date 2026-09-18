// @ts-check
/// <reference types="node" />
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteUrl as defaultSiteUrl } from "./src/data/config.ts";

const siteUrl = process.env.PUBLIC_SITE_URL || defaultSiteUrl;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
  build: {
    // Keep CSS in external files so CSP can omit style-src 'unsafe-inline'.
    inlineStylesheets: "never",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
