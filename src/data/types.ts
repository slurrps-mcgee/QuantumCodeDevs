export type PageMeta = { title: string; description: string };

export type NavKey =
  "home" | "work" | "services" | "about" | "contact" | "blog";

export type JsonLd = Record<string, unknown>;

export type CtaLink = { label: string; href: string };

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalPage = {
  meta: PageMeta;
  lastUpdated: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export type ProjectType = "Website" | "Web application" | "Desktop application";

export type ProjectOrigin = "Personal project" | "Studio website";

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  origin: ProjectOrigin;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  tech: string[];
  image?: string;
  repo?: string;
  liveUrl?: string;
  featured: boolean;
}

export type FaqItem = {
  question: string;
  paragraphs: string[];
  list?: string[];
  closing?: string;
  link?: { href: string; label: string };
};
