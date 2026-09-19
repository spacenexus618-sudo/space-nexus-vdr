import type { Metadata } from "next";
import FreeToolJsonLd from "../../components/FreeToolJsonLd";

export const metadata: Metadata = {
  title: "Grant Indirect Cost (MTDC) Allocator (Free)",
  description:
    "Split direct vs. indirect grant costs under the Modified Total Direct Cost methodology — see a Form 990-style functional expense breakdown, free.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/free-tools/indirect-cost-allocator",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net/kindora/free-tools/indirect-cost-allocator",
    siteName: "Kindora",
    title: "Grant Indirect Cost (MTDC) Allocator (Free)",
    description:
      "Split direct vs. indirect grant costs under the Modified Total Direct Cost methodology — see a Form 990-style functional expense breakdown, free.",
    images: [
      {
        url: "/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Grant Indirect Cost (MTDC) Allocator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Indirect Cost (MTDC) Allocator (Free)",
    description:
      "Split direct vs. indirect grant costs under the Modified Total Direct Cost methodology — see a Form 990-style functional expense breakdown, free.",
    images: ["/kindora-og.png"],
  },
};

export default function IndirectCostAllocatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FreeToolJsonLd
        name="Grant Indirect Cost (MTDC) Allocator"
        description="Split direct vs. indirect grant costs under the Modified Total Direct Cost methodology — see a Form 990-style functional expense breakdown, free."
        url="https://spacenexus.net/kindora/free-tools/indirect-cost-allocator"
        faqs={[
          {
            question: "What does the indirect cost allocator do?",
            answer:
              "Split direct vs. indirect costs under the Modified Total Direct Cost methodology and see a Form 990-style functional expense breakdown.",
          },
          {
            question: "What is the MTDC base?",
            answer:
              "Total direct costs minus personnel and subawards or equipment form the Modified Total Direct Cost (MTDC) base, which the indirect cost rate is applied to.",
          },
          {
            question: "What does the Form 990 functional expense split show?",
            answer:
              "The Form 990 Functional Expense Split shows Program Services, Management & General, and Fundraising.",
          },
          {
            question: "How can I use these numbers in Kindora?",
            answer:
              "Import your allocated budget directly into Kindora to automate real-time grant tracking and financial reporting.",
          },
        ]}
      />
      {children}
    </>
  );
}