import type { Metadata } from "next";
import FreeToolJsonLd from "../../components/FreeToolJsonLd";

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
  return (
    <>
      <FreeToolJsonLd
        name="Nonprofit Software ROI Calculator"
        description="See what manual bookkeeping, grant tracking, and donor admin cost your nonprofit — and what automation could return — free ROI calculator."
        url="https://spacenexus.net/kindora/free-tools/nonprofit-software-roi-calculator"
        faqs={[
          {
            question: "What does the nonprofit software ROI calculator show?",
            answer:
              "See what manual bookkeeping, grant tracking, and donor admin really cost your organization — and what automation could return.",
          },
          {
            question: "What outputs does the ROI calculator produce?",
            answer:
              "It produces the annual cost of manual admin, the value recovered with automation, the net gain in Year 1 with first-year return, and the 5-year net gain — plus hours returned to mission.",
          },
          {
            question: "What time-savings assumption does it use?",
            answer:
              "Most teams report 30-50% time recovery after automating donor, grant, and fund admin.",
          },
          {
            question: "How does Kindora deliver that return?",
            answer:
              "Kindora automates donor management, grant tracking, fund accounting, and reporting — one platform instead of a stack of spreadsheets.",
          },
        ]}
      />
      {children}
    </>
  );
}