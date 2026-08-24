/** Global site configuration and Layout defaults. */

export const siteName = "Quantum Code Devs";
export const siteUrl = "https://quantumcode.dev";
export const siteEmail = "quantumcodedevs@gmail.com";

export const defaultDescription =
  "Custom websites for small businesses, built directly with an experienced software developer.";

export const defaultTitle = `${siteName} | Custom Website Development`;

export const organizationDescription =
  "A solo software studio that designs and builds custom websites for businesses.";

export const assets = {
  ogImage: "/images/og-default.png",
  logo: "/images/icon-512.png",
  appleTouchIcon: "/apple-touch-icon.png",
} as const;

export const fontStylesheet =
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap";

export const themeColor = "#E7E6F7";

export const rss = {
  title: `${siteName} Blog`,
  description: "Articles and updates from Quantum Code Devs.",
} as const;

export const finalCta = {
  title: "Have a website project in mind?",
  body: "Tell us what you are looking to build and we will determine whether Quantum Code Devs is a good fit.",
  button: "Start a Project",
} as const;
