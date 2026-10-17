import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kindora — Request a Demo for Your Nonprofit",
  description:
    "Schedule a personalized demo of Kindora nonprofit management software. Tell us about your organization and we'll show you how Kindora fits your needs.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/contact",
  },
  openGraph: {
    title: "Contact Kindora — Request a Demo for Your Nonprofit",
    description:
      "Schedule a personalized demo of Kindora. Donor management, grant tracking, financial reporting — all in one platform for nonprofits.",
    url: "https://spacenexus.net/kindora/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kindora — Request a Demo",
    description:
      "Schedule a personalized demo of Kindora nonprofit management software.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
