import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://spacenexus.net"),
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
    "AI Due Diligence Software",
    "Best Virtual Data Room",
    "VDR Comparison",
    "Secure Virtual Data Room",
    "Data Room Software",
    "Data Room Pricing",
    "Due Diligence Platform",
    "M&A Software",
    "Capital Raising",
    "Deal Room",
    "IPO Data Room",
    "Investment Banking Data Room",
    "Private Equity Data Room",
    "Virtual Data Room for Law Firms",
    "SOC 2 Virtual Data Room",
    "Zero Trust Data Room",
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
    url: "https://spacenexus.net",
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
    canonical: "https://spacenexus.net",
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

        {/* Preload the logo — it's the first meaningful paint above the fold */}
        <link
          rel="preload"
          href="/icononly_transparent_nobuffer.png"
          as="image"
          type="image/png"
        />

        {/* DNS prefetch + preconnect for third-party origins */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-18DD7WWPHE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-18DD7WWPHE');
          `}
        </Script>
      </body>
    </html>
  );
}
