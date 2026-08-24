import { siteName } from "../config";
import { pricing, processSteps, websiteIncludes } from "./home";

export const meta = {
  title: `Website Development | ${siteName}`,
  description:
    "Custom website design and development for small businesses. Projects start at $1,000 and are quoted after we understand the scope.",
} as const;

export const servicePage = {
  eyebrow: "Services",
  title: "Website development, focused on the business.",
  description:
    "Quantum Code Devs designs and builds custom websites for small businesses, professional services, and organizations that need a stronger online presence.",
  primary: {
    title: "Website Development",
    body: "Custom websites designed and developed around your business, your audience, and your goals — not a reused template with a new logo.",
  },
  secondary:
    "Have a project that goes beyond a website? We also have experience building custom desktop and mobile applications. Those projects are quoted separately.",
  hourlyRateNote:
    "We do not publish an hourly rate. Website work is quoted as a project after scope is clear.",
  secondaryTitle: "Other software, when it is needed.",
  processSectionTitle: "A straightforward website project.",
} as const;

export const services = {
  meta,
  servicePage,
  pricing,
  processSteps,
  websiteIncludes,
} as const;

export { websiteIncludes };
