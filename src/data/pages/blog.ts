import { siteName } from "../config";

export const meta = {
  title: `Blog | ${siteName}`,
  description: `Articles and updates from ${siteName}.`,
} as const;

export const blogPage = {
  eyebrow: "Blog",
  title: "Writing from the studio.",
  description:
    "Sample posts live here for now. They will be replaced with real articles over time.",
  emptyMessage: "No posts published yet.",
} as const;

export const blog = {
  meta,
  blogPage,
} as const;
