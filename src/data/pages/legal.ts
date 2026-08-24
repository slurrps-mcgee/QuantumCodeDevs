import { siteEmail, siteName } from "../config";
import type { LegalPage } from "../types";

export const privacy: LegalPage = {
  meta: {
    title: `Privacy Policy | ${siteName}`,
    description: `How ${siteName} collects, uses, and protects personal information from website visitors and project inquiries.`,
  },
  lastUpdated: "August 23, 2026",
  eyebrow: "Legal",
  title: "Privacy Policy",
  description: `This policy explains how ${siteName} collects, uses, and protects personal information when you use this website or contact us about a project.`,
  sections: [
    {
      title: "Information we collect",
      list: [
        "Contact details such as your name, email address, and company name.",
        "Project details you send through the inquiry form, email, or calls.",
        "Basic website usage data, such as pages viewed and referring site, if analytics are enabled.",
      ],
    },
    {
      title: "How we use information",
      list: [
        "To respond to inquiries and prepare project quotes.",
        "To deliver contracted website work and send project updates.",
        "To improve the website and the clarity of our services.",
      ],
    },
    {
      title: "Sharing",
      paragraphs: [
        "We do not sell personal information. We may share details only with trusted providers used for hosting, email, forms, or analytics, under appropriate confidentiality expectations.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        `You may request access, correction, or deletion of your personal information. Contact ${siteEmail} to make a request.`,
      ],
    },
  ],
};

export const terms: LegalPage = {
  meta: {
    title: `Terms & Conditions | ${siteName}`,
    description: `Terms governing use of the ${siteName} website and professional website development services.`,
  },
  lastUpdated: "August 23, 2026",
  eyebrow: "Legal",
  title: "Terms & Conditions",
  description: `These terms govern use of this website and professional services provided by ${siteName}.`,
  sections: [
    {
      title: "Use of the website",
      paragraphs: [
        "You may use this website for lawful purposes only. You agree not to misuse, disrupt, or attempt unauthorized access to systems connected with this website.",
      ],
    },
    {
      title: "Project work",
      paragraphs: [
        "Scope, timeline, deliverables, and payment terms for website projects are defined in a written quote or agreement. If there is a conflict, the signed agreement controls.",
      ],
    },
    {
      title: "Intellectual property",
      paragraphs: [
        `Unless otherwise agreed in writing, reusable tools and internal methods remain the property of ${siteName}. Client website deliverables transfer according to the project agreement.`,
      ],
    },
    {
      title: "Liability",
      paragraphs: [
        "To the fullest extent permitted by law, we are not liable for indirect or consequential damages from website use. Liability for contracted work is governed by the project agreement.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [`Questions about these terms can be sent to ${siteEmail}.`],
    },
  ],
};

export const dataRetention: LegalPage = {
  meta: {
    title: `Data Retention Policy | ${siteName}`,
    description: `How long ${siteName} retains inquiry, project, and website interaction data.`,
  },
  lastUpdated: "August 23, 2026",
  eyebrow: "Legal",
  title: "Data Retention Policy",
  description: `This policy describes how long ${siteName} keeps information from inquiries, project work, and website use.`,
  sections: [
    {
      title: "Inquiry data",
      paragraphs: [
        "Contact form submissions and inquiry emails are kept for up to 24 months to support follow-up, quotes, and service history.",
      ],
    },
    {
      title: "Project records",
      paragraphs: [
        "Contracts, invoices, and project documentation are kept for up to 7 years for legal, accounting, and operational needs.",
      ],
    },
    {
      title: "Analytics and logs",
      paragraphs: [
        "Technical logs and analytics, when used, are kept only as long as needed for performance, security, and service quality.",
      ],
    },
    {
      title: "Deletion requests",
      paragraphs: [
        "You may request deletion of personal data where legally allowed. Some records may be retained when required for tax, legal, or contractual reasons.",
      ],
    },
  ],
};

export const legal = {
  privacy,
  terms,
  dataRetention,
} as const;
