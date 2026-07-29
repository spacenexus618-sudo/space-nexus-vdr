import type { Metadata } from "next";
import BreadcrumbSchema from "./components/BreadcrumbSchema";
import KindoraJsonLd from "./components/KindoraJsonLd";
import KindoraNav from "./components/KindoraNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://spacenexus.net"),
  title: {
    default: "Kindora — All-in-One Nonprofit Management Software",
    template: "%s | Kindora",
  },
  description:
    "Kindora is the all-in-one nonprofit management platform for donors, grants, programs, finances, volunteers, and impact reporting. Built for NGOs and nonprofits of all sizes.",
  keywords: [
    "nonprofit management software",
    "NGO management platform",
    "donor management system",
    "grant tracking software",
    "nonprofit CRM",
    "volunteer management system",
    "campaign management software",
    "nonprofit accounting software",
    "program management for nonprofits",
    "nonprofit dashboard",
    "nonprofit reporting software",
    "fundraising campaign management",
    "client case management nonprofit",
    "nonprofit budget tracking",
    "expense tracking software nonprofit",
    "NGO software India",
  ],
  authors: [{ name: "Kindora" }],
  creator: "Kindora",
  publisher: "Kindora",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://spacenexus.net/kindora",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net/kindora",
    siteName: "Kindora",
    title: "Kindora — All-in-One Nonprofit Management Software",
    description:
      "The all-in-one platform for nonprofits. Manage donors, track grants, deliver programs, and report impact from a single platform.",
    images: [
      {
        url: "/icononly_transparent_nobuffer.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Nonprofit Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora — All-in-One Nonprofit Management Software",
    description:
      "The all-in-one platform for nonprofits. Manage donors, track grants, deliver programs, and report impact from a single platform.",
    images: ["/icononly_transparent_nobuffer.png"],
  },
};

export default function KindoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#2563eb] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <KindoraJsonLd />
      <BreadcrumbSchema />
      <KindoraNav />
      <div id="main-content">
        {children}
      </div>
    </>
  );
}
