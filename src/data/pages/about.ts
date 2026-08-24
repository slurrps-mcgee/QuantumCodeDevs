import { siteName } from "../config";
import { urls } from "../social";

export const meta = {
  title: `About | ${siteName}`,
  description:
    "Quantum Code Devs is a solo studio run by Kenneth Lamb, a software developer with 10+ years of experience building custom websites.",
} as const;

export const aboutPage = {
  eyebrow: "About",
  title: "A small studio with serious software experience.",
  description:
    "Quantum Code Devs is operated by Kenneth Lamb, a software developer with 10+ years of professional experience. The studio is intentionally small so communication stays direct and the work stays focused.",
  points: [
    {
      title: "Direct communication",
      body: "You are not passed between a salesperson, a project manager, and a developer. You work with Kenneth.",
    },
    {
      title: "Built around the business",
      body: "The website is planned from your audience, offer, and content — not from a generic industry template.",
    },
    {
      title: "Engineering behind the site",
      body: "Years of software work show up as clean structure, careful performance, and a site that is maintainable after launch.",
    },
  ],
} as const;

export const developer = {
  kicker: "The developer",
  name: "Kenneth Lamb",
  body: "Quantum Code Devs is a solo studio. There is no account manager and no handoff. You talk with the developer who is designing and building the website.",
  portfolioLabel:
    "Learn more about Kenneth and his broader software development experience.",
  startProjectLabel: "Start a Project",
  portfolioCtaLabel: "View Kenneth's portfolio",
} as const;

export const about = {
  meta,
  aboutPage,
  developer,
  portfolioUrl: urls.portfolio,
} as const;
