# Bits And Bytes IT Solutions Site

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
author: "Bits And Bytes Team"
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
