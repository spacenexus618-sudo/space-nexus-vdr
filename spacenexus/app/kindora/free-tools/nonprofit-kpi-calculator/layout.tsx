import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nonprofit KPI Calculator (Free)",
  description:
    "Calculate your nonprofit KPI health — donor retention, average gift, donor lifetime value, and cost per dollar raised — free.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/free-tools/nonprofit-kpi-calculator",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net/kindora/free-tools/nonprofit-kpi-calculator",
    siteName: "Kindora",
    title: "Nonprofit KPI Calculator (Free)",
    description:
      "Calculate your nonprofit KPI health — donor retention, average gift, donor lifetime value, and cost per dollar raised — free.",
    images: [
      {
        url: "/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Nonprofit KPI Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit KPI Calculator (Free)",
    description:
      "Calculate your nonprofit KPI health — donor retention, average gift, donor lifetime value, and cost per dollar raised — free.",
    images: ["/kindora-og.png"],
  },
};

export default function NonprofitKpiCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}