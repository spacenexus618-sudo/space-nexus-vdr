import type { Metadata } from "next";
import FreeToolJsonLd from "../../components/FreeToolJsonLd";

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
  return (
    <>
      <FreeToolJsonLd
        name="Grant Readiness Scorecard"
        description="Score your nonprofit's grant readiness — 501(c)(3), SAM.gov, financial controls, and Form 990 compliance — with a free 7-question checklist."
        url="https://spacenexus.net/kindora/free-tools/grant-readiness-scorecard"
        faqs={[
          {
            question: "What does the grant readiness scorecard measure?",
            answer:
              "Answer 7 quick questions to get your grant readiness score (0-100%) and see which compliance policies you may be missing.",
          },
          {
            question: "What readiness areas does it check?",
            answer:
              "It checks 501(c)(3) public charity registration with the IRS, active SAM.gov registration, board oversight of finances and an audit committee, internal financial controls with separated duties, a Whistleblower Policy and Conflict of Interest Policy, a searchable donation log, and on-time Form 990 filings.",
          },
          {
            question: "What does a strong grant readiness score mean?",
            answer:
              "Strong readiness — most foundations will see you as a reliable grant partner.",
          },
          {
            question: "How can I close my grant readiness gaps?",
            answer:
              "Kindora's Grant Management Hub helps you store policy documents, track compliance deadlines, and log every donation in one secure place.",
          },
        ]}
      />
      {children}
    </>
  );
}