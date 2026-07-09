import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kindora vs DonorPerfect | Complete Nonprofit Software Comparison 2026",
  description:
    "Kindora vs DonorPerfect: a head-to-head comparison of CRM, fundraising, grant management, volunteers, and more. See which nonprofit platform is right for you.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/kindora-vs-donorperfect",
  },
  openGraph: {
    title: "Kindora vs DonorPerfect — Complete Comparison 2026",
    description:
      "Head-to-head comparison of Kindora and DonorPerfect across CRM, fundraising, grants, volunteers, and more. The definitive guide for nonprofits.",
    url: "https://spacenexus.net/kindora/kindora-vs-donorperfect",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/icononly_transparent_nobuffer.png",
        width: 1200,
        height: 630,
        alt: "Kindora vs DonorPerfect Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora vs DonorPerfect — Complete Comparison 2026",
    description:
      "Which nonprofit software is better? See how Kindora and DonorPerfect compare across every feature that matters.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "kindora vs donorperfect",
    "donorperfect vs kindora",
    "kindora donorperfect comparison",
    "nonprofit software comparison",
    "donorperfect review",
    "kindora review",
    "best nonprofit crm 2026",
    "donorperfect pricing vs kindora",
    "nonprofit software comparison chart",
    "switch from donorperfect",
    "kindora vs donorperfect pricing",
    "donorperfect alternatives",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Nonprofit Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "All-in-one nonprofit management software — donor CRM, fundraising, grant tracking, volunteer management, and more. Compared to DonorPerfect.",
      url: "https://spacenexus.net/kindora/kindora-vs-donorperfect",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free trial available",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is better, Kindora or DonorPerfect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your needs. DonorPerfect is a solid donor management system, but it doesn't include grant tracking, volunteer management, programme tracking, or event management. Kindora is a true all-in-one platform that includes donor CRM, fundraising, grants, volunteers, programmes, events, and reporting in one subscription.",
          },
        },
        {
          "@type": "Question",
          name: "How does DonorPerfect pricing compare to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DonorPerfect charges per-user fees that add up quickly as your team grows. Kindora offers flat-rate pricing that includes unlimited users — no per-seat fees, no hidden costs, no surprises when you add staff.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora have the same donor management features as DonorPerfect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora includes donor profiles, giving history, segmentation, acknowledgement tracking, and online giving — everything DonorPerfect offers. Plus Kindora adds grant management, volunteer tools, programme tracking, and event management that DonorPerfect doesn't provide.",
          },
        },
        {
          "@type": "Question",
          name: "Can I migrate from DonorPerfect to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora provides full data migration support from DonorPerfect. Our team helps you transfer donor records, giving history, custom fields, and campaign data so nothing is lost in the switch.",
          },
        },
        {
          "@type": "Question",
          name: "What does Kindora have that DonorPerfect doesn't?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora includes grant management, volunteer management, programme tracking, event management, workflow automation, and unlimited users — none of which DonorPerfect offers. These capabilities make Kindora a complete operational platform, not just a donor database.",
          },
        },
      ],
    },
  ],
};

const comparisonData = [
  { feature: "Donor CRM & Profiles", kindora: true, donorperfect: true },
  { feature: "Giving History & Segmentation", kindora: true, donorperfect: true },
  { feature: "Online Giving & Recurring", kindora: true, donorperfect: true },
  { feature: "Email Marketing", kindora: true, donorperfect: true },
  { feature: "Campaign Management", kindora: true, donorperfect: true },
  { feature: "Reporting & Dashboards", kindora: true, donorperfect: true },
  { feature: "Donor Portal", kindora: true, donorperfect: false },
  { feature: "Grant Management", kindora: true, donorperfect: false },
  { feature: "Volunteer Management", kindora: true, donorperfect: false },
  { feature: "Programme Tracking", kindora: true, donorperfect: false },
  { feature: "Event Management", kindora: true, donorperfect: false },
  { feature: "Workflow Automation", kindora: true, donorperfect: false },
  { feature: "Unlimited Users", kindora: true, donorperfect: false },
  { feature: "Flat-Rate Pricing", kindora: true, donorperfect: false },
];

const verdicts = [
  {
    category: "Best for Donors Only",
    winner: "DonorPerfect",
    description: "If you only need donor management and nothing else, DonorPerfect is a solid choice with years of nonprofit expertise.",
    color: "text-gray-600",
  },
  {
    category: "Best All-in-One Platform",
    winner: "Kindora",
    description: "If you need donors, grants, volunteers, programmes, and events — Kindora gives you everything in one platform.",
    color: "text-blue-600",
  },
  {
    category: "Best Value for Money",
    winner: "Kindora",
    description: "Kindora includes unlimited users and all features at flat-rate pricing. DonorPerfect charges per user, costs add up fast.",
    color: "text-blue-600",
  },
];

export default function KindoraVsDonorPerfectPage() {
  return (
    <>
      <Script
        id="kindora-vs-donorperfect-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-600">Complete Comparison</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">Kindora</span> vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">DonorPerfect</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              A head-to-head comparison of two nonprofit platforms. See which one fits your organisation.
            </p>
          </div>

          {/* Feature Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-3 bg-gradient-to-r from-blue-500 to-cyan-600">
                <div className="p-5 text-white font-bold text-lg">Feature</div>
                <div className="p-5 text-white font-bold text-lg text-center">Kindora</div>
                <div className="p-5 text-white font-bold text-lg text-center">DonorPerfect</div>
              </div>
              <div className="divide-y divide-gray-50">
                {comparisonData.map((row) => (
                  <div key={row.feature} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                    <div className="p-4 px-6 text-sm font-medium text-gray-900">{row.feature}</div>
                    <div className="p-4 text-center">
                      {row.kindora ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 text-sm font-bold">&#10003;</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-500 text-sm font-bold">&#10007;</span>
                      )}
                    </div>
                    <div className="p-4 text-center">
                      {row.donorperfect ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 text-sm font-bold">&#10003;</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-500 text-sm font-bold">&#10007;</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verdicts */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">Our Verdict</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Which Platform Wins?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {verdicts.map((v) => (
              <div key={v.category} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{v.category}</p>
                <p className={`text-2xl font-bold mb-3 ${v.color}`}>{v.winner}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">Key Differences</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Where Kindora Pulls Ahead</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "No Per-User Fees",
                description: "DonorPerfect charges per user. Kindora includes unlimited users on every plan — add your entire team without extra costs.",
              },
              {
                title: "Grant Management",
                description: "DonorPerfect doesn't track grants. Kindora manages the full grant lifecycle — applications, budgets, deadlines, and funder reports.",
              },
              {
                title: "Volunteer Management",
                description: "DonorPerfect has no volunteer tools. Kindora includes recruitment, scheduling, hour tracking, and volunteer communication.",
              },
              {
                title: "Programme Tracking",
                description: "Track programme outcomes, beneficiary data, and impact metrics — capabilities DonorPerfect simply doesn't offer.",
              },
              {
                title: "Event Management",
                description: "DonorPerfect doesn't manage events. Kindora handles registration, attendance tracking, and post-event communication.",
              },
              {
                title: "Workflow Automation",
                description: "Automate thank-yous, follow-ups, and internal processes. DonorPerfect has limited automation compared to Kindora.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {(jsonLd["@graph"][1] as any)?.mainEntity?.map((faq: any) => (
              <div key={faq.name} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to See the Difference?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Try Kindora free and see why nonprofits are switching from DonorPerfect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Free Trial
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}