import type { Metadata } from "next";
import FreeToolJsonLd from "../../components/FreeToolJsonLd";

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
  return (
    <>
      <FreeToolJsonLd
        name="Value of Volunteer Time Calculator"
        description="Turn volunteer hours into dollars using Independent Sector's national hourly value — free volunteer time value calculator for nonprofits."
        url="https://spacenexus.net/kindora/free-tools/volunteer-time-value-calculator"
        faqs={[
          {
            question: "What does the volunteer time value calculator do?",
            answer:
              "Turn volunteer hours into a dollar figure — and a printable impact statement — using Independent Sector's national hourly value.",
          },
          {
            question: "What hourly rate does it default to?",
            answer:
              "The value defaults to Independent Sector's current national value. Adjust to your state or an average wage.",
          },
          {
            question: "What does the impact statement include?",
            answer:
              "Volunteer hours are valued using Independent Sector's hourly rate and converted to full-time equivalents — 2080 hours equals one full-time staff position.",
          },
          {
            question: "How can I use the results?",
            answer:
              "Copy the impact statement into your annual report, grant proposals, and board materials. Some foundations request volunteer-hour values for in-kind matching and impact calculations.",
          },
          {
            question: "How can I track volunteer hours automatically?",
            answer:
              "Kindora's volunteer management logs every shift and keeps running totals, so this number stays current for your next board report — no manual tallies.",
          },
        ]}
      />
      {children}
    </>
  );
}