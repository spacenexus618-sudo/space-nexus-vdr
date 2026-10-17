import type { Metadata } from "next";

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
  return <>{children}</>;
}