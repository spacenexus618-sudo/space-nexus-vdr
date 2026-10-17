import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nonprofit Donation Receipt Generator (Free)",
  description:
    "Create a free, Form 990-compliant donation receipt in seconds — donor info, amount, and IRS-required substantiation language included.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/free-tools/donation-receipt-generator",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net/kindora/free-tools/donation-receipt-generator",
    siteName: "Kindora",
    title: "Nonprofit Donation Receipt Generator (Free)",
    description:
      "Create a free, Form 990-compliant donation receipt in seconds — donor info, amount, and IRS-required substantiation language included.",
    images: [
      {
        url: "/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Nonprofit Donation Receipt Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Donation Receipt Generator (Free)",
    description:
      "Create a free, Form 990-compliant donation receipt in seconds — donor info, amount, and IRS-required substantiation language included.",
    images: ["/kindora-og.png"],
  },
};

export default function DonationReceiptGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}