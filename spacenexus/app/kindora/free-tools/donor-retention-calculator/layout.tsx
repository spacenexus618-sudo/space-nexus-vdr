import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donor Retention Calculator (Free)",
  description:
    "Estimate your nonprofit donor retention rate, churn, and the impact of a retention boost on lifetime giving — free calculator.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/free-tools/donor-retention-calculator",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net/kindora/free-tools/donor-retention-calculator",
    siteName: "Kindora",
    title: "Donor Retention Calculator (Free)",
    description:
      "Estimate your nonprofit donor retention rate, churn, and the impact of a retention boost on lifetime giving — free calculator.",
    images: [
      {
        url: "/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Donor Retention Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Retention Calculator (Free)",
    description:
      "Estimate your nonprofit donor retention rate, churn, and the impact of a retention boost on lifetime giving — free calculator.",
    images: ["/kindora-og.png"],
  },
};

export default function DonorRetentionCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}