import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "bits-and-bytes",
    title: "Bits and Bytes",
    type: "Website",
    origin: "Personal project",
    summary:
      "A marketing website for an internet gaming cafe, with pricing, menu, events, and a blog.",
    challenge:
      "The cafe needed a public site that could explain gaming plans, show food and drink, list events, and publish updates without a heavy content system.",
    solution:
      "A static Astro site with dedicated pages for pricing and the menu, plus Markdown-driven events and blog posts.",
    result:
      "A fast marketing site that can be updated by editing content files, covering the pages a cafe visitor would actually look for.",
    tech: ["Astro", "Tailwind CSS", "TypeScript", "Markdown"],
    image: "/assets/work/bitsandbytes.png",
    liveUrl: "https://bitsandbytes.quantumcode.dev",
    repo: "https://github.com/slurrps-mcgee/BitsAndBytes",
    featured: true,
  },
  {
    slug: "steamstats",
    title: "SteamStats",
    type: "Web application",
    origin: "Personal project",
    summary:
      "A Steam companion dashboard for library stats, recently played games, and a random game picker.",
    challenge:
      "A large Steam library is difficult to scan when you want recent play data or a quick pick from the catalog.",
    solution:
      "An Angular dashboard with a Fastify API and the Steam Web API, showing library stats, recently played titles, and a random game picker.",
    result:
      "A working companion app for browsing a Steam library. This is personal software work, not a client website.",
    tech: [
      "Angular",
      "TypeScript",
      "Fastify",
      "Tailwind CSS",
      "Docker",
      "Steam API",
    ],
    image: "/assets/work/steamstats.png",
    liveUrl: "https://steamstats.quantumcode.dev",
    repo: "https://github.com/slurrps-mcgee/SteamStats",
    featured: true,
  },
  {
    slug: "snippy",
    title: "Snippy",
    type: "Web application",
    origin: "Personal project",
    summary:
      "An open-source CodePen-style app for writing, previewing, and sharing HTML, CSS, and JavaScript snippets.",
    challenge:
      "Developers often need a self-hosted place to draft front-end snippets with live preview, accounts, and shareable links.",
    solution:
      "A multi-service Angular application with an Express API, MySQL, Auth0, live preview, sharing, embeds, and optional object storage.",
    result:
      "An open-source snippet workspace that can run locally or be deployed with Docker. Labeled here as engineering work, not a client website.",
    tech: [
      "Angular",
      "TypeScript",
      "Express",
      "MySQL",
      "Auth0",
      "Docker",
      "MinIO",
      "Tailwind CSS",
    ],
    image: "/assets/work/snippy.png",
    liveUrl: "https://snippy.quantumcode.dev",
    repo: "https://github.com/slurrps-mcgee/Snippy",
    featured: true,
  },
  {
    slug: "mbaspayroll",
    title: "MBASPayroll",
    type: "Desktop application",
    origin: "Personal project",
    summary:
      "A desktop application that processes CSV files for payroll-related workflows.",
    challenge:
      "Payroll data arriving as CSV files needed a local tool instead of a fully manual spreadsheet process.",
    solution:
      "An Electron application with an Angular interface that reads and processes CSV files on the desktop.",
    result:
      "A local desktop tool for CSV processing. Included as software experience, not as a website offering.",
    tech: ["Angular", "Electron", "TypeScript"],
    image: "/assets/work/mbas.png",
    repo: "https://github.com/QuantumCodeDevs/MBASPayroll",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getWorkStaticPaths() {
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { slug: project.slug },
  }));
}

export { buildWorkPageMeta } from "./seo";
