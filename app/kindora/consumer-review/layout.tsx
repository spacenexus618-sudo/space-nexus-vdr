import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Reviews",
  description: "Read real consumer reviews of Kindora nonprofit management software. See why nonprofits trust Kindora for donor management, grant tracking, and program management.",
  keywords: ["Kindora reviews", "nonprofit software reviews", "NGO management software reviews", "Kindora consumer reviews", "nonprofit CRM reviews"],
  alternates: { canonical: "https://spacenexus.net/kindora/consumer-review" },
  openGraph: {
    title: "Consumer Reviews",
    description: "Read real reviews from nonprofits using Kindora. See why organizations choose Kindora for their management needs.",
    url: "https://spacenexus.net/kindora/consumer-review",
    type: "website",
  },
};

export default function ConsumerReviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
