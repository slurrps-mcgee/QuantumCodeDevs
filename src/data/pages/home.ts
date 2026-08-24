import { siteName } from "../config";
import { urls } from "../social";

export const meta = {
  title: `${siteName} | Custom Websites for Businesses`,
  description:
    "Quantum Code Devs builds custom, modern websites for small businesses. Work directly with an experienced software developer. Website projects start at $1,000.",
} as const;

export const hero = {
  eyebrow: "Website development studio",
  title: "Websites built by a software developer.",
  description:
    "Custom, modern websites designed to help businesses look professional online and turn visitors into customers.",
  primaryCta: { label: "Start a Project", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/work" },
} as const;

export const credibilityItems = [
  {
    label: "10+ years",
    title: "Software experience",
    description:
      "A decade of professional development behind every website we ship.",
  },
  {
    label: "Custom work",
    title: "Not a template mill",
    description:
      "Each site is designed around the business, the audience, and the goals.",
  },
  {
    label: "Modern build",
    title: "Fast and responsive",
    description:
      "Sites that load quickly, work on phones, and are ready for search and analytics.",
  },
  {
    label: "Direct line",
    title: "One developer",
    description:
      "You work with the person designing and building the site. No sales handoff.",
  },
] as const;

export const pricing = {
  startingAt: "$1,000",
  headline: "Website projects starting at $1,000.",
  body: "Every project is different. After we understand your goals, content, and requirements, you receive a clear project quote — not an open-ended hourly surprise.",
} as const;

export const processSteps = [
  {
    step: "01",
    title: "Tell us about your project",
    description:
      "Share your business, goals, and what you need the website to do.",
  },
  {
    step: "02",
    title: "Define the project",
    description:
      "We agree on scope, timeline, requirements, and a clear project price.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Design, development, review, and communication throughout the work.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "The site goes live, and you have what you need to use and maintain it.",
  },
] as const;

export const websiteIncludes = [
  "Custom design",
  "Responsive development",
  "Contact forms",
  "SEO foundations",
  "Analytics setup",
  "Performance-conscious build",
  "Launch and hosting guidance",
  "Post-launch support",
] as const;

export const aboutPreview = {
  eyebrow: "Meet the developer",
  title: "You work directly with Kenneth Lamb.",
  body: "Quantum Code Devs is a solo studio. There is no account manager and no handoff. You talk with the developer who is designing and building the website.",
  cta: { label: "About the studio", href: "/about" },
  portfolioLabel:
    "Learn more about Kenneth and his broader software development experience.",
  portfolioHref: urls.portfolio,
} as const;

export const pricingCard = {
  kicker: "Starting price",
  body: "Website projects start here. The final quote depends on scope, content, and timeline.",
} as const;

export const credibilityHeading = "Why work with Quantum Code Devs";

export const servicesPreview = {
  eyebrow: "Services",
  title: "Website development, built around the business.",
  description:
    "A custom site designed for your audience, your content, and the action you want visitors to take.",
  footerNote:
    "Need something beyond a website? Desktop and mobile application work is available as a separate conversation.",
  linkLabel: "Review services and pricing",
} as const;

export const workPreview = {
  eyebrow: "Selected work",
  title: "Real projects, labeled honestly.",
  description:
    "Website work sits first. Other software is included as proof of engineering, not as a second sales pitch.",
  linkLabel: "All work",
} as const;

export const processPreview = {
  eyebrow: "Process",
  title: "What happens after you get in touch.",
} as const;

export const home = {
  meta,
  hero,
  credibilityItems,
  pricing,
  processSteps,
  websiteIncludes,
  aboutPreview,
  pricingCard,
  credibilityHeading,
  servicesPreview,
  workPreview,
  processPreview,
} as const;
