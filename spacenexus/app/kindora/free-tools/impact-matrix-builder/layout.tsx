import type { Metadata } from "next";

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
  return <>{children}</>;
}