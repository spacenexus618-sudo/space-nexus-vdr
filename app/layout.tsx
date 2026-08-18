import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import AppFooter from "./components/AppFooter";
import SystemStatus from "./components/SystemStatus";
import JsonLd from "./components/JsonLd";
import SiteNavigationSchema from "./components/SiteNavigationSchema";
import LazyWhatsAppButton from "./components/LazyWhatsAppButton";
import { AuthProvider } from "../lib/auth-context";

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
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://spacenexus.net"),
  title: {
    default:
      "AI-Powered Virtual Data Room Software for M&A, Fundraising & Legal Deals | SpaceNexus",
    template: "%s | SpaceNexus",
  },
  description:
    "SpaceNexus is the AI-powered virtual data room for M&A due diligence, fundraising & legal deals. SOC 2 Type II certified, transparent flat-rate pricing & 24-hour setup. Start free.",
  keywords: [
    "virtual data room software",
    "VDR software",
    "SpaceNexus",
    "Space Nexus",
    "virtual data rooms",
    "virtual data room",
    "VDR",
    "M&A Due Diligence Software",
    "AI Due Diligence Software",
    "Secure Virtual Data Room",
    "Due Diligence Platform",
    "Capital Raising Software",
    "IPO Data Room",
    "Investment Banking Data Room",
    "Private Equity Data Room",
    "Virtual Data Room for Law Firms",
    "SOC 2 Virtual Data Room",
    "document management software for M&A",
  ],
  authors: [{ name: "SpaceNexus" }],
  creator: "SpaceNexus",
  publisher: "SpaceNexus",
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
    siteName: "SpaceNexus",
    title: "AI-Powered Virtual Data Room Software for M&A, Fundraising & Legal Deals | SpaceNexus",
      description:
        "SpaceNexus is the AI-powered virtual data room for M&A due diligence, fundraising & legal deals. SOC 2 Type II certified, transparent flat-rate pricing & 24-hour setup. Start free.",
      images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpaceNexus - Virtual Data Room Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Virtual Data Room Software for M&A, Fundraising & Legal Deals | SpaceNexus",
      description:
        "SpaceNexus is the AI-powered virtual data room for M&A due diligence, fundraising & legal deals. SOC 2 Type II certified, transparent flat-rate pricing & 24-hour setup. Start free.",
      images: ["/og-image.png"],
    creator: "@spacenexus",
  },
  alternates: {
    canonical: "https://spacenexus.net",
    languages: {
      "en-US": "https://spacenexus.net",
      "en-GB": "https://spacenexus.net",
      "en-CA": "https://spacenexus.net/solutions/virtual-data-room-canada",
      "zh-Hant-TW": "https://spacenexus.net/solutions/virtual-data-room-taiwan",
      "ar-AE": "https://spacenexus.net/solutions/virtual-data-room-uae",
      "de-DE": "https://spacenexus.net/solutions/virtual-data-room-germany",
      "x-default": "https://spacenexus.net",
    },
  },
  category: "technology",
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="scroll-smooth">
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
        <link rel="dns-prefetch" href="https://spaceaiapp.com" />
        <link rel="preconnect" href="https://spaceaiapp.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />

        <JsonLd />
        <SiteNavigationSchema />

        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="google43f4a543c8cb4c24" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-[#f8f9fa] text-gray-900`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
          Skip to content
        </a>
        <AuthProvider>
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <AppFooter />
        </AuthProvider>
        <LazyWhatsAppButton />
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
