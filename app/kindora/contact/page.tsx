import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Kindora — Request a Demo | Kindora NGO OS",
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
    title: "Contact Kindora — Request a Demo | Kindora NGO OS",
    description:
      "Request a personalized demo of Kindora nonprofit management platform. See donor management, grant tracking, and reporting in action.",
    url: "https://spacenexus.net/kindora/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kindora — Request a Demo | Kindora NGO OS",
    description:
      "Request a personalized demo of Kindora nonprofit management platform.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
