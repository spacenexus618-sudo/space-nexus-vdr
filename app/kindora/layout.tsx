import type { Metadata } from "next";
import KindoraHeader from "./components/KindoraHeader";
import KindoraFooter from "./components/KindoraFooter";
import BreadcrumbSchema from "./components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: {
    default: "Kindora NGO OS - Complete Nonprofit Management Platform",
    template: "%s | Kindora NGO OS",
  },
  description:
    "Kindora NGO OS is the all-in-one platform for nonprofits to manage donors, track grants, deliver programs, handle finances, coordinate volunteers, and report impact. Built for organizations of all sizes.",
  keywords: [
    "nonprofit management software",
    "NGO management platform",
    "donor management system",
    "grant tracking software",
    "nonprofit CRM",
    "nonprofit accounting software",
    "volunteer management tool",
    "program management for nonprofits",
    "nonprofit dashboard",
    "nonprofit reporting software",
    "fundraising campaign management",
    "client case management nonprofit",
    "nonprofit operating system",
    "nonprofit budget tracking",
    "cost allocation nonprofit",
  ],
  authors: [{ name: "SpaceAI App" }],
  creator: "SpaceAI App",
  publisher: "SpaceAI App",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kindora NGO OS",
    title: "Kindora NGO OS - Complete Nonprofit Management Platform",
    description:
      "The all-in-one operating system for nonprofits. Manage donors, track grants, deliver programs, and report impact from a single platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora NGO OS - Complete Nonprofit Management Platform",
    description:
      "The all-in-one operating system for nonprofits. Manage donors, track grants, deliver programs, and report impact from a single platform.",
  },
};

export default function KindoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema />
      <KindoraHeader />
      {children}
      <KindoraFooter />
    </>
  );
}
