import { siteName } from "../config";

export const meta = {
  title: `Work | ${siteName}`,
  description:
    "Selected websites and software projects from Quantum Code Devs, including personal and studio work.",
} as const;

export const workPage = {
  eyebrow: "Work",
  title: "Selected work.",
  description:
    "These are real projects. Personal work is labeled as such. None of these are presented as unnamed client case studies.",
} as const;

export const work = {
  meta,
  workPage,
} as const;
