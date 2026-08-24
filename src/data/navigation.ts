import type { NavKey } from "./types";

export const navItems: { label: string; href: string; key: NavKey }[] = [
  { label: "Work", href: "/work", key: "work" },
  { label: "Services", href: "/services", key: "services" },
  { label: "About", href: "/about", key: "about" },
  { label: "Contact", href: "/contact", key: "contact" },
  { label: "Blog", href: "/blog", key: "blog" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Data Retention Policy", href: "/data-retention-policy" },
] as const;
