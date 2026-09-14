import type { Metadata } from "next";
import FreeToolJsonLd from "../../components/FreeToolJsonLd";

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
  return (
    <>
      <FreeToolJsonLd
        name="Donor Retention Calculator"
        description="Estimate your nonprofit donor retention rate, churn, and the impact of a retention boost on lifetime giving — free calculator."
        url="https://spacenexus.net/kindora/free-tools/donor-retention-calculator"
        faqs={[
          {
            question: "What does the donor retention calculator show?",
            answer:
              "See how much revenue donor attrition costs you over 1, 3, and 5 years compared with a 5% retention improvement.",
          },
          {
            question: "What inputs does the donor retention calculator need?",
            answer:
              "Enter your active donors, average annual gift, donor acquisition cost, and annual retention rate.",
          },
          {
            question: "How is projected revenue calculated?",
            answer:
              "Projected revenue compares donors retained at your current retention rate with the revenue you would keep with a 5% improvement, and Lost to churn shows the gap plus donor acquisition replacement cost.",
          },
          {
            question: "How does Kindora help retain donors?",
            answer:
              "Kindora's donor CRM tracks engagement scores and automates re-engagement campaigns, so fewer donors slip away each year.",
          },
        ]}
      />
      {children}
    </>
  );
}