import type { Metadata } from "next";
import PricingContent from "./PricingContent";
import { pricingFaqs, pricingPlanFaqs } from "./pricing-faqs";

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
  mainEntity: [...pricingFaqs, ...pricingPlanFaqs].map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
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