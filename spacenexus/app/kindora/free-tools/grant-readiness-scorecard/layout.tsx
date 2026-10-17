import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grant Readiness Scorecard (Free)",
  description:
    "Score your nonprofit's grant readiness — 501(c)(3), SAM.gov, financial controls, and Form 990 compliance — with a free 7-question checklist.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/free-tools/grant-readiness-scorecard",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net/kindora/free-tools/grant-readiness-scorecard",
    siteName: "Kindora",
    title: "Grant Readiness Scorecard (Free)",
    description:
      "Score your nonprofit's grant readiness — 501(c)(3), SAM.gov, financial controls, and Form 990 compliance — with a free 7-question checklist.",
    images: [
      {
        url: "/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Grant Readiness Scorecard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Readiness Scorecard (Free)",
    description:
      "Score your nonprofit's grant readiness — 501(c)(3), SAM.gov, financial controls, and Form 990 compliance — with a free 7-question checklist.",
    images: ["/kindora-og.png"],
  },
};

export default function GrantReadinessScorecardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}