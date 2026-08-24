import { siteName } from "../config";

export const meta = {
  title: `Start a Project | ${siteName}`,
  description:
    "Tell Quantum Code Devs about your website project. We typically reply within one business day with next steps and a project quote.",
} as const;

export const contactPage = {
  eyebrow: "Start a project",
  title: "Tell us about the website you need.",
  description:
    "Share a little context. We typically reply within one business day with whether the project is a fit, what we would need to quote it, and suggested next steps.",
  emailLabel: "Email",
  locationLabel: "Location",
  locationValue: "Remote, working with clients anywhere",
  afterSubmit: [
    "We review your goals, current site, timeline, and budget range.",
    "You receive a reply with fit, questions, and an initial direction.",
    "If it looks like a match, we define scope and send a project quote.",
  ],
} as const;

export const contactForm = {
  websiteTypes: ["New website", "Website redesign", "Something else"],
  budgets: ["$1k – $5k", "$5k – $15k", "$15k+", "Not sure"],
  timelines: [
    "As soon as possible",
    "In the next 1–2 months",
    "Later this year",
    "Just exploring",
  ],
  messagePlaceholder:
    "Describe the business, what the site needs to do, and anything else that would help us understand the project.",
  subject: "New website project inquiry",
} as const;

export const contact = {
  meta,
  contactPage,
  contactForm,
} as const;
