import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Value of Volunteer Time Calculator (Free)",
  description:
    "Turn volunteer hours into dollars using Independent Sector's national hourly value — free volunteer time value calculator for nonprofits.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/free-tools/volunteer-time-value-calculator",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacenexus.net/kindora/free-tools/volunteer-time-value-calculator",
    siteName: "Kindora",
    title: "Value of Volunteer Time Calculator (Free)",
    description:
      "Turn volunteer hours into dollars using Independent Sector's national hourly value — free volunteer time value calculator for nonprofits.",
    images: [
      {
        url: "/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Value of Volunteer Time Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Value of Volunteer Time Calculator (Free)",
    description:
      "Turn volunteer hours into dollars using Independent Sector's national hourly value — free volunteer time value calculator for nonprofits.",
    images: ["/kindora-og.png"],
  },
};

export default function VolunteerTimeValueCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}