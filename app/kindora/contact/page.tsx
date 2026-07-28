import type { Metadata } from "next";
import Script from "next/script";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Kindora — Request a Demo",
  description:
    "Contact the Kindora team to request a personalized demo of nonprofit management software. See donor management, grant tracking, and program reporting in action.",
  keywords: [
    "kindora contact",
    "kindora demo",
    "nonprofit management software demo",
    "NGO software demo",
    "nonprofit CRM demo",
  ],
  alternates: {
    canonical: "/kindora/contact",
  },
  openGraph: {
    title: "Contact Kindora — Request a Demo",
    description:
      "Request a personalized demo of Kindora nonprofit management platform. See donor management, grant tracking, and reporting in action.",
    url: "https://spacenexus.net/kindora/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kindora — Request a Demo",
    description:
      "Request a personalized demo of Kindora nonprofit management platform.",
  },
};

export default function ContactPage() {
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://spacenexus.net/kindora/contact",
    name: "Contact Kindora — Request a Demo",
    description: "Contact the Kindora team to request a personalized demo of nonprofit management software.",
    publisher: { "@id": "https://spacenexus.net/kindora/#organization" },
    url: "https://spacenexus.net/kindora/contact",
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://spacenexus.net/kindora/contact",
      availableLanguage: ["English"],
    },
  };

  return (
    <>
      <Script id="contact-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }} />
      <ContactForm />
    </>
  );
}
