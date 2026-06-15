import type { Metadata } from "next";
import Script from "next/script";
import KindoraHeader from "./components/KindoraHeader";
import KindoraFooter from "./components/KindoraFooter";
import BreadcrumbSchema from "./components/BreadcrumbSchema";

// Replace with your Kindora-specific GA4 measurement ID when available.
// Using the same property as SpaceNexus for now — create a separate GA4
// property for Kindora at analytics.google.com and update this value.
const KINDORA_GA_ID = "G-18DD7WWPHE";

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
      <BreadcrumbSchema />
      <KindoraHeader />
      {children}
      <KindoraFooter />

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${KINDORA_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="kindora-google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${KINDORA_GA_ID}');
        `}
      </Script>
    </>
  );
}
