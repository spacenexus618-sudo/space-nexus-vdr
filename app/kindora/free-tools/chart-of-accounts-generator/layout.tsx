import type { Metadata } from "next";
import FreeToolJsonLd from "../../components/FreeToolJsonLd";

export const metadata: Metadata = {
  title: "Nonprofit Chart of Accounts Generator (Free)",
  description:
    "Generate a free nonprofit chart of accounts tuned to your sector and budget — with Form 990-clean fund accounting and standardized account codes.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/free-tools/chart-of-accounts-generator",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net/kindora/free-tools/chart-of-accounts-generator",
    siteName: "Kindora",
    title: "Nonprofit Chart of Accounts Generator (Free)",
    description:
      "Generate a free nonprofit chart of accounts tuned to your sector and budget — with Form 990-clean fund accounting.",
    images: [
      {
        url: "/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Nonprofit Chart of Accounts Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Chart of Accounts Generator (Free)",
    description:
      "Generate a free nonprofit chart of accounts tuned to your sector and budget — with Form 990-clean fund accounting.",
    images: ["/kindora-og.png"],
  },
};

export default function ChartOfAccountsGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FreeToolJsonLd
        name="Nonprofit Chart of Accounts Generator"
        description="Generate a free nonprofit chart of accounts tuned to your sector and budget, with Form 990-clean fund accounting and standardized account codes."
        url="https://spacenexus.net/kindora/free-tools/chart-of-accounts-generator"
        faqs={[
          {
            question: "What does the nonprofit chart of accounts generator do?",
            answer:
              "Pick your nonprofit's sector and budget size to get a standardized chart of accounts tailored to Form 990 fund accounting.",
          },
          {
            question: "What does the generated chart of accounts include?",
            answer:
              "The generated structure includes 1000-1999 Assets & Cash, 2000-2999 Liabilities & Deferred Revenue, 3000-3999 Net Assets (Restricted / Unrestricted), 4000-4999 Revenue & Contributions, sector-specific program and revenue accounts, and 9000 Other Expense / Contra.",
          },
          {
            question: "Is the chart of accounts generator free?",
            answer:
              "Yes — the generated chart of accounts can be downloaded as a CSV file, or imported into Kindora with one click.",
          },
          {
            question: "How do I use the generated chart of accounts in Kindora?",
            answer:
              "Use the 1-Click Import into Kindora option to load the generated structure directly into Kindora.",
          },
        ]}
      />
      {children}
    </>
  );
}