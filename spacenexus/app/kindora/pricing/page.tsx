import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: { absolute: "Kindora Pricing — Free & Nonprofit-Friendly Plans" },
  description:
    "Kindora pricing for nonprofits: a forever-free Starter plan plus flexible Professional and Enterprise tiers with donor CRM, grant tracking, and nonprofit-friendly rates.",
  alternates: { canonical: "https://spacenexus.net/kindora/pricing" },
  openGraph: {
    type: "website",
    url: "https://spacenexus.net/kindora/pricing",
    siteName: "Kindora",
    title: "Kindora Pricing — Free & Nonprofit-Friendly Plans",
    description:
      "Forever-free Starter plan plus Professional and Enterprise tiers with donor CRM, grant tracking, and nonprofit-friendly rates.",
    images: [{ url: "/kindora-og.png", alt: "Kindora — Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora Pricing — Free & Nonprofit-Friendly Plans",
    description:
      "Forever-free Starter plan plus Professional and Enterprise tiers with donor CRM, grant tracking, and nonprofit-friendly rates.",
    images: ["/kindora-og.png"],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kindora — Nonprofit Management Software",
  "url": "https://spacenexus.net/kindora/pricing",
  "description": "Affordable pricing plans for nonprofits: a free Starter plan, Professional plan, and Enterprise plan with donor CRM, grant tracking, case management, accounting, and volunteer management.",
  "brand": { "@type": "Brand", "name": "Kindora" },
  "offers": [
    { "@type": "Offer", "name": "Starter", "price": "0", "priceCurrency": "USD", "description": "Forever free for up to 5 team members", "url": "https://kindora.pmspace.ai/login?redirectTo=%2F" },
    { "@type": "Offer", "name": "Professional", "description": "Custom pricing for growing nonprofits", "url": "https://spacenexus.net/kindora/contact" },
    { "@type": "Offer", "name": "Enterprise", "description": "Custom pricing for large organizations", "url": "https://spacenexus.net/kindora/contact" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is there really a free plan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Starter plan is completely free, forever. No credit card required. It covers the core modules for small nonprofits getting started — donor management, client tracking, and basic reporting." } },
    { "@type": "Question", "name": "How is Kindora's Professional plan priced?", "acceptedAnswer": { "@type": "Answer", "text": "Professional pricing is based on your organization's size and needs. We offer nonprofit-friendly rates and do not charge per-module — all features are included. Contact us for a custom quote." } },
    { "@type": "Question", "name": "Can I get a nonprofit discount?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Kindora is purpose-built for nonprofits and our pricing reflects that. We offer additional discounts for organizations serving high-need communities. Reach out to discuss your situation." } },
    { "@type": "Question", "name": "Is there a long-term contract required?", "acceptedAnswer": { "@type": "Answer", "text": "No. Kindora does not require annual contracts. You can start month-to-month and upgrade, downgrade, or cancel at any time." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://spacenexus.net" },
    { "@type": "ListItem", "position": 2, "name": "Kindora", "item": "https://spacenexus.net/kindora" },
    { "@type": "ListItem", "position": 3, "name": "Pricing", "item": "https://spacenexus.net/kindora/pricing" },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PricingContent />
    </>
  );
}