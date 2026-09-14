import type { Metadata } from "next";
import FreeToolJsonLd from "../../components/FreeToolJsonLd";

export const metadata: Metadata = {
  title: "Impact Matrix & Logic Model Builder (Free)",
  description:
    "Build a free impact matrix / logic model with inputs, activities, outputs, outcomes, and impact — ready for grant proposals and board reports.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/free-tools/impact-matrix-builder",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net/kindora/free-tools/impact-matrix-builder",
    siteName: "Kindora",
    title: "Impact Matrix & Logic Model Builder (Free)",
    description:
      "Build a free impact matrix / logic model with inputs, activities, outputs, outcomes, and impact — ready for grant proposals and board reports.",
    images: [
      {
        url: "/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Impact Matrix & Logic Model Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impact Matrix & Logic Model Builder (Free)",
    description:
      "Build a free impact matrix / logic model with inputs, activities, outputs, outcomes, and impact — ready for grant proposals and board reports.",
    images: ["/kindora-og.png"],
  },
};

export default function ImpactMatrixBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FreeToolJsonLd
        name="Impact Matrix & Logic Model Builder"
        description="Build a free impact matrix / logic model with inputs, activities, outputs, outcomes, and impact — ready for grant proposals and board reports."
        url="https://spacenexus.net/kindora/free-tools/impact-matrix-builder"
        faqs={[
          {
            question: "What does the impact matrix builder do?",
            answer:
              "Map your mission into a clean logic model with inputs, activities, outputs, outcomes, and impact — ready for grant proposals and board reports.",
          },
          {
            question: "What rows does the impact matrix include?",
            answer: "The matrix includes five rows: Inputs, Activities, Outputs, Outcomes, and Impact.",
          },
          {
            question: "What mission focuses can I choose from?",
            answer:
              "Choose a mission focus such as food security & hunger relief, youth development & education, housing & homelessness, healthcare access, environmental conservation, or animal welfare.",
          },
          {
            question: "How does Kindora help track outcomes?",
            answer:
              "Automate outcome tracking and log real-time program metrics with Kindora's Impact & Outcome Reporting module.",
          },
        ]}
      />
      {children}
    </>
  );
}