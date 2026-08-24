import type { CollectionEntry } from "astro:content";
import { assets, organizationDescription, siteEmail, siteName } from "./config";
import { faqItems, faqPlainText } from "./faq";
import { sameAs } from "./social";
import type { JsonLd, PageMeta, Project } from "./types";

export function resolveSiteUrl(fallback: string, astroSite?: URL): URL {
  return astroSite ?? new URL(fallback);
}

export function resolveCanonicalUrl(pathname: string, site: URL): URL {
  return new URL(pathname, site);
}

export function resolveImageUrl(imagePath: string, site: URL): URL {
  return new URL(imagePath, site);
}

export function buildOrganizationJsonLd(site: URL, imageURL: URL): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: site.href,
    logo: new URL(assets.logo, site).href,
    image: imageURL.href,
    description: organizationDescription,
    email: siteEmail,
    areaServed: "Worldwide",
    priceRange: "$1,000+",
    sameAs: [...sameAs],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Website development",
        description: "Custom website design and development for businesses.",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 1000,
        priceCurrency: "USD",
        name: "Website projects starting at $1,000",
      },
    },
  };
}

export function buildFaqJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqPlainText(item),
      },
    })),
  };
}

export function buildArticleJsonLd(
  post: CollectionEntry<"blog">,
  site: URL,
): JsonLd {
  const postUrl = new URL(`/blog/${post.id}/`, site);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.data.title,
    description: post.data.description,
    datePublished: post.data.publishDate.toISOString(),
    author: { "@type": "Person", name: post.data.author },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: { "@type": "ImageObject", url: new URL(assets.logo, site).href },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl.href },
    url: postUrl.href,
    image: new URL(assets.ogImage, site).href,
  };
}

export function mergeJsonLdBlocks(
  organization: JsonLd,
  extra?: JsonLd | JsonLd[],
): JsonLd[] {
  return [
    organization,
    ...(extra ? (Array.isArray(extra) ? extra : [extra]) : []),
  ];
}

export function buildWorkPageMeta(project: Project): PageMeta {
  return {
    title: `${project.title} | ${siteName}`,
    description: project.summary,
  };
}

export function buildBlogPostMeta(
  title: string,
  description: string,
): PageMeta {
  return {
    title: `${title} | ${siteName}`,
    description,
  };
}
