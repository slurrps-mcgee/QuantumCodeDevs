# Quantum Code Devs Site

Modern multi-page Astro + Tailwind website for an IT business that builds websites and software applications.

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build static output |
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

You can connect the contact form to a hosted form service (no backend required).

1. Create an endpoint with a service such as Formspree, Getform, or Basin.
2. Add a `.env` file in the project root.
3. Set this variable:

```env
PUBLIC_CONTACT_FORM_ENDPOINT="https://formspree.io/f/your-form-id"
```

4. Restart the dev server.

If `PUBLIC_CONTACT_FORM_ENDPOINT` is not set, the form falls back to opening the default mail client.

## GitHub Pages Deployment With GitHub Actions

This repository includes a workflow at `.github/workflows/deploy.yml` that builds the Astro site and deploys it to GitHub Pages.

### Setup Steps

1. Go to your GitHub repository settings.
2. Open **Pages** and set the source to **GitHub Actions**.
3. Go to **Settings > Secrets and variables > Actions > Variables**.
4. Add a repository variable named `PUBLIC_CONTACT_FORM_ENDPOINT` with your Formspree endpoint, for example:

```text
https://formspree.io/f/your-form-id
```

5. Push to `main` or manually run the **Deploy to GitHub Pages** workflow.

### How It Works

- The workflow sets `GITHUB_PAGES=true` so Astro builds with the correct GitHub Pages base path.
- The Formspree endpoint is injected at build time through `PUBLIC_CONTACT_FORM_ENDPOINT`.
- If the variable is missing, the contact page falls back to opening the email client.

### Notes

- Set `PUBLIC_SITE_URL` and `PUBLIC_BASE_PATH` as repository variables to match your GitHub Pages or custom domain setup.
- If you change the repository name or use a custom domain, update those variables and the workflow configuration accordingly.
