# Quantum Code Devs Site

Modern multi-page Astro + Tailwind website for an IT business that builds websites and software applications.

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build the static site output |
| `npm run preview` | Preview the build locally |

## Blog Markdown Example

Blog list page: `/blog`

Blog detail pages: `/blog/[slug]`

Create markdown posts in `src/content/blog/` using this format:

```markdown
---
title: "How to Scope a Software MVP"
description: "A practical framework to pick the right first features."
publishDate: 2026-07-16
category: "Product Strategy"
author: "Quantum Code Devs"
---

Start with one clear user outcome and build only what is required to validate it.

## Define your MVP boundary

- Choose one primary workflow
- Limit launch scope to must-have features
- Add analytics before launch

## Ship, measure, iterate

Use the first release to gather evidence, then expand based on real usage patterns.
```

## Contact Form Without A Server

You can connect the contact form to Formspree without adding a backend.

1. Create a Formspree form endpoint.
2. Add a `.env` file in the project root.
3. Set this variable:

```env
PUBLIC_CONTACT_FORM_ENDPOINT="https://formspree.io/f/your-form-id"
```

4. Restart the dev server.

If `PUBLIC_CONTACT_FORM_ENDPOINT` is not set, the form falls back to opening the default mail client.

## Cloudflare Pages Deployment From GitHub

This repository is set up to be deployed from GitHub to Cloudflare Pages.

### Setup Steps

1. Go to your GitHub repository settings.
2. Go to **Settings > Secrets and variables > Actions** and add `PUBLIC_CONTACT_FORM_ENDPOINT` as a repository variable.
3. Set `PUBLIC_CONTACT_FORM_ENDPOINT` to your Formspree endpoint, for example:

```text
https://formspree.io/f/your-form-id
```

4. Connect the repository in Cloudflare Pages and set the build command to `npm run build` with output directory `dist`.
5. Push to `main` and let Cloudflare Pages deploy from GitHub.

### How It Works

- Cloudflare Pages builds the Astro app directly from GitHub.
- The Formspree endpoint is injected at build time through `PUBLIC_CONTACT_FORM_ENDPOINT`.
- If the variable is missing, the contact page falls back to opening the email client.

### Notes

- Set `PUBLIC_SITE_URL` as a repository variable if you want canonical URLs in the generated site.
- If you want to use a custom domain or route, configure it in Cloudflare Pages.
