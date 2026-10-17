import type { Metadata } from "next";

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
  return <>{children}</>;
}