# Quantum Code Devs

Astro site for Quantum Code Devs, a solo studio that builds custom websites for businesses.

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the static site |
| `npm run preview` | Preview the production build |

## Contact form

The contact page posts to Formspree when `PUBLIC_CONTACT_FORM_ENDPOINT` is set.

```env
PUBLIC_CONTACT_FORM_ENDPOINT="https://formspree.io/f/your-form-id"
PUBLIC_SITE_URL="https://quantumcode.dev"
```

If the form endpoint is missing, the page falls back to a `mailto:` submit.

## Notes

- Canonical URLs, Open Graph tags, the sitemap, and RSS use `PUBLIC_SITE_URL` (default `https://quantumcode.dev`).
- After deploy, submit `https://quantumcode.dev/sitemap-index.xml` in Google Search Console.
