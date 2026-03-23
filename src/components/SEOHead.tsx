import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://komodo-consulting.pt";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;
const SITE_NAME = "Komodo Consulting";

const SEOHead = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  noindex = false,
  jsonLd,
}: SEOHeadProps) => {
  const { pathname } = useLocation();
  const fullCanonical = canonical || `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const fullTitle = pathname === "/" ? title : `${title} — ${SITE_NAME}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", fullCanonical);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_US");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fullCanonical);

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach((s) => s.remove());
    };
  }, [fullTitle, description, fullCanonical, ogType, image, noindex, jsonLd]);

  return null;
};

export default SEOHead;

/* ─── Reusable Schema Builders ─── */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Komodo Consulting",
  url: "https://komodo-consulting.pt",
  logo: "https://komodo-consulting.pt/logo.png",
  description:
    "IT Consulting and IT Outsourcing company providing technology teams, staff augmentation, dedicated teams, and nearshore delivery from Portugal.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisbon",
    addressCountry: "PT",
  },
  email: "hello@komodo-consulting.pt",
  areaServed: [
    { "@type": "Country", name: "Portugal" },
    { "@type": "Continent", name: "Europe" },
    { "@type": "Place", name: "International" },
  ],
  serviceType: [
    "IT Consulting",
    "IT Outsourcing",
    "Staff Augmentation",
    "Dedicated Teams",
    "Nearshore IT Services",
  ],
  knowsAbout: [
    "Software Engineering",
    "Cloud & DevOps",
    "Data & AI",
    "QA & Test Automation",
    "Cybersecurity",
    "ERP & Business Applications",
    "IT Support & Infrastructure",
    "Product & Project Delivery",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Komodo Consulting",
  url: "https://komodo-consulting.pt",
  publisher: {
    "@type": "Organization",
    name: "Komodo Consulting",
  },
};

export const buildBreadcrumbs = (
  items: { name: string; path: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `https://komodo-consulting.pt${item.path}`,
  })),
});

export const buildServiceSchema = (
  name: string,
  description: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "ProfessionalService",
    name: "Komodo Consulting",
    url: "https://komodo-consulting.pt",
  },
  url: `https://komodo-consulting.pt${url}`,
  areaServed: "Europe",
});

export const buildFAQSchema = (
  faqs: { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
