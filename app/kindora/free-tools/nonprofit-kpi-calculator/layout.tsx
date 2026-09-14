import type { Metadata } from "next";
import FreeToolJsonLd from "../../components/FreeToolJsonLd";

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
  return (
    <>
      <FreeToolJsonLd
        name="Nonprofit KPI Calculator"
        description="Calculate your nonprofit KPI health — donor retention, average gift, donor lifetime value, and cost per dollar raised — free."
        url="https://spacenexus.net/kindora/free-tools/nonprofit-kpi-calculator"
        faqs={[
          {
            question: "What does the nonprofit KPI calculator do?",
            answer:
              "Enter six numbers about your fundraising year and get the KPIs boards and grant reviewers actually ask for.",
          },
          {
            question: "Which KPIs does it compute?",
            answer:
              "It computes donor retention rate, net donor growth, average gift size, gift frequency per donor, donor lifetime value (LTV), and cost per dollar raised.",
          },
          {
            question: "How is donor lifetime value (LTV) calculated?",
            answer:
              "Donor lifetime value (LTV) is average gift multiplied by gift frequency and divided by attrition rate.",
          },
          {
            question: "How can I track these KPIs automatically?",
            answer:
              "Kindora computes retention, LTV, and cost-per-dollar for you from your live donor and fund data — no spreadsheets, board-ready every month.",
          },
        ]}
      />
      {children}
    </>
  );
}