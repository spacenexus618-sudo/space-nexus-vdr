import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nonprofit Software ROI Calculator (Free)",
  description:
    "See what manual bookkeeping, grant tracking, and donor admin cost your nonprofit — and what automation could return — free ROI calculator.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/free-tools/nonprofit-software-roi-calculator",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net/kindora/free-tools/nonprofit-software-roi-calculator",
    siteName: "Kindora",
    title: "Nonprofit Software ROI Calculator (Free)",
    description:
      "See what manual bookkeeping, grant tracking, and donor admin cost your nonprofit — and what automation could return — free ROI calculator.",
    images: [
      {
        url: "/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Nonprofit Software ROI Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Software ROI Calculator (Free)",
    description:
      "See what manual bookkeeping, grant tracking, and donor admin cost your nonprofit — and what automation could return — free ROI calculator.",
    images: ["/kindora-og.png"],
  },
};

export default function SoftwareRoiCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}