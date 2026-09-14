import type { Metadata } from "next";
import FreeToolJsonLd from "../../components/FreeToolJsonLd";

export const metadata: Metadata = {
  title: "Nonprofit Donation Receipt Generator (Free)",
  description:
    "Create a free, Form 990-compliant donation receipt in seconds — donor info, amount, and IRS-required substantiation language included.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/free-tools/donation-receipt-generator",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net/kindora/free-tools/donation-receipt-generator",
    siteName: "Kindora",
    title: "Nonprofit Donation Receipt Generator (Free)",
    description:
      "Create a free, Form 990-compliant donation receipt in seconds — donor info, amount, and IRS-required substantiation language included.",
    images: [
      {
        url: "/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Nonprofit Donation Receipt Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Donation Receipt Generator (Free)",
    description:
      "Create a free, Form 990-compliant donation receipt in seconds — donor info, amount, and IRS-required substantiation language included.",
    images: ["/kindora-og.png"],
  },
};

export default function DonationReceiptGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FreeToolJsonLd
        name="Nonprofit Donation Receipt Generator"
        description="Create a free, Form 990-compliant donation receipt in seconds — donor info, amount, and IRS-required substantiation language included."
        url="https://spacenexus.net/kindora/free-tools/donation-receipt-generator"
        faqs={[
          {
            question: "What does the donation receipt generator create?",
            answer:
              "Generate an IRS-compliant 501(c)(3) contribution receipt — including quid pro quo disclosure when donors receive something in return.",
          },
          {
            question: "When is quid pro quo disclosure required?",
            answer:
              "In exchange for a contribution, the donor received goods or services with an estimated fair market value, so the deductible amount is the donation less that value. This disclosure is provided in accordance with IRC §6115 and §170.",
          },
          {
            question: "When do I need to provide a donation receipt?",
            answer:
              "No goods or services were provided in exchange for the contribution, the receipt is provided in accordance with IRC §170(f)(8) and is valid for contributions of $250 or more. For contributions under $250, this acknowledgment may not be required but is provided for convenience.",
          },
          {
            question: "How do I save and print the receipt?",
            answer:
              "Print / Save as PDF the generated receipt. Please keep this receipt for your records and consult a tax advisor regarding deductibility.",
          },
        ]}
      />
      {children}
    </>
  );
}