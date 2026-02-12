import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SystemStatus from "./components/SystemStatus";
import JsonLd from "./components/JsonLd";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://spacenexus.com"),
  title: {
    default:
      "Space Nexus | Enterprise Virtual Data Room for M&A & Due Diligence",
    template: "%s | Space Nexus",
  },
  description:
    "Space Nexus is the enterprise-grade Virtual Data Room for M&A due diligence, capital raising, and secure document sharing. Bank-grade security with AI-powered document processing.",
  keywords: [
    "Virtual Data Room",
    "VDR",
    "M&A Due Diligence Software",
    "Secure Document Sharing",
    "Data Room",
    "Due Diligence Platform",
    "M&A Software",
    "Capital Raising",
    "Deal Room",
    "Secure File Sharing",
    "Enterprise Data Room",
    "Document Management",
    "Investment Banking Software",
    "Private Equity Tools",
  ],
  authors: [{ name: "Space Nexus" }],
  creator: "Space Nexus",
  publisher: "Space Nexus",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.com",
    siteName: "Space Nexus",
    title: "Space Nexus | Enterprise Virtual Data Room for M&A & Due Diligence",
    description:
      "Enterprise-grade Virtual Data Room for M&A due diligence, capital raising, and secure document sharing. Trusted by 500+ enterprises worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Space Nexus - Secure Virtual Data Room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Nexus | Enterprise Virtual Data Room",
    description:
      "Enterprise-grade VDR for M&A due diligence and secure document sharing.",
    images: ["/og-image.png"],
    creator: "@spacenexus",
  },
  alternates: {
    canonical: "https://spacenexus.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} antialiased bg-[#f8f9fa] text-gray-900`}
      >
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <SystemStatus />
      </body>
    </html>
  );
}
