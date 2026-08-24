import { siteName } from "../config";

export const meta = {
  title: `FAQ | ${siteName}`,
  description: `Answers about website pricing, process, and working with ${siteName}.`,
} as const;

export const faqPage = {
  eyebrow: "FAQ",
  title: "Questions before you start a project.",
  description:
    "Straightforward answers about pricing, process, and what it is like to work with a solo studio.",
} as const;

export const faq = {
  meta,
  faqPage,
} as const;
