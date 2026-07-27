import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Why Choose Kindora Over Bloomerang | Nonprofit Software",
  description:
    "6 reasons nonprofits choose Kindora over Bloomerang — more features, better value, one platform. See why Kindora is the smarter choice for growing nonprofits.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/why-kindora-over-bloomerang",
  },
  openGraph: {
    title: "Why Choose Kindora Over Bloomerang",
    description:
      "6 reasons nonprofits choose Kindora over Bloomerang — more features, better value, one platform. The smarter choice for growing nonprofits.",
    url: "https://spacenexus.net/kindora/why-kindora-over-bloomerang",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/icononly_transparent_nobuffer.png",
        width: 1200,
        height: 630,
        alt: "Why Choose Kindora Over Bloomerang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Kindora Over Bloomerang",
    description:
      "6 reasons nonprofits choose Kindora over Bloomerang. More features, better value, one platform.",
    images: ["https://spacenexus.net/icononly_transparent_nobuffer.png"],
  },
  keywords: [
    "why choose kindora over bloomerang",
    "kindora vs bloomerang",
    "bloomerang vs kindora",
    "switch from bloomerang",
    "bloomerang alternative",
    "best nonprofit software",
    "nonprofit crm comparison",
    "donor management software",
    "kindora benefits",
    "bloomerang limitations",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Why Choose Kindora Over Bloomerang",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "6 reasons nonprofits choose Kindora over Bloomerang — more features, better value, one platform replacing 3–4 tools.",
      url: "https://spacenexus.net/kindora/why-kindora-over-bloomerang",
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
          name: "Why should I choose Kindora over Bloomerang?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora gives you everything Bloomerang does for donor management — plus grant tracking, case management, nonprofit accounting, volunteer management, and communications. You get one platform instead of paying for 3–4 separate tools.",
          },
        },
        {
          "@type": "Question",
          name: "What features does Kindora have that Bloomerang doesn't?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora adds grant lifecycle management, client case management, nonprofit accounting with cost allocation, volunteer management, a donor portal, peer-to-peer fundraising, event management, text-to-give, and a built-in communications hub.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora more affordable than Bloomerang?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora is priced for small to mid-sized nonprofits and includes features that would require separate subscriptions with Bloomerang. One Kindora subscription replaces Bloomerang plus a grant tracker, accounting tool, and case management system — saving you money.",
          },
        },
        {
          "@type": "Question",
          name: "Can I switch from Bloomerang to Kindora easily?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports data import from Bloomerang and other platforms. Our team helps you migrate donor records, giving history, and campaign data. Most organizations are fully set up in under 30 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora work for organizations that only do fundraising?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. While Kindora includes more features than Bloomerang, it works perfectly for fundraising-only organizations too. You'll still get donor CRM, engagement scoring, campaigns, and email marketing — plus room to grow into grants and programs later.",
          },
        },
      ],
    },
  ],
};

const reasons = [
  {
    number: "01",
    title: "One Platform, Not Three",
    description:
      "Bloomerang handles donors. That's it. If you also manage grants, deliver programs, or need accounting, you'll need 2–3 additional tools. Kindora does donor CRM, grant tracking, case management, accounting, and communications — all in one subscription.",
    highlight: "Replaces 3–4 separate tools",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    details: [
      "Donor CRM & engagement scoring",
      "Grant lifecycle management",
      "Client case management",
      "Nonprofit accounting & cost allocation",
      "Volunteer management",
      "Built-in communications hub",
    ],
  },
  {
    number: "02",
    title: "More Donor Features",
    description:
      "Kindora includes everything Bloomerang offers for donors — plus extras Bloomerang doesn't have. You won't lose any functionality by switching.",
    highlight: "100% of Bloomerang's donor features, plus more",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    details: [
      "Donor profiles & giving history",
      "Engagement scoring & lapsed donor alerts",
      "Campaign management & tracking",
      "Email marketing & communications",
      "Donor portal (Bloomerang doesn't have this)",
      "Peer-to-peer fundraising (Bloomerang doesn't have this)",
    ],
  },
  {
    number: "03",
    title: "Better Value",
    description:
      "Bloomerang charges for donor management. Then you pay separately for grant software, accounting tools, and case management systems. Kindora includes it all in one price.",
    highlight: "Save 50–70% vs. multiple tools",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    details: [
      "One subscription replaces 3–4 tools",
      "No per-seat or per-record hidden fees",
      "No consultants required for setup",
      "Transparent, published pricing",
      "No annual lock-in — month-to-month available",
      "Free trial with no credit card",
    ],
  },
  {
    number: "04",
    title: "Unified Reporting",
    description:
      "With Bloomerang, your donor data lives in one tool, grants in another, and finances in a third. Kindora unifies everything into one reporting engine.",
    highlight: "One source of truth for everything",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    details: [
      "Board-ready financial reports",
      "Grant compliance reports",
      "Program impact reports",
      "Donor analytics & fundraising reports",
      "All in PDF, Excel, and scheduled delivery",
      "Custom dashboard builder",
    ],
  },
  {
    number: "05",
    title: "Built for Growth",
    description:
      "Bloomerang works when you're small and only fundraising. But as you grow into grants, programs, and social services, you'll outgrow it. Kindora scales with you.",
    highlight: "Grows with your organization",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    details: [
      "Start with donor management, add modules as needed",
      "No migration pain when you grow",
      "Grant management ready when you win your first grant",
      "Case management ready when you launch programs",
      "Accounting built in from day one",
      "One platform throughout your growth journey",
    ],
  },
  {
    number: "06",
    title: "Same Ease of Use",
    description:
      "Bloomerang is known for being easy to use. So is Kindora. You get an intuitive interface with no consultants or training required — live in 30 minutes.",
    highlight: "Easy as Bloomerang, but more powerful",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    details: [
      "Intuitive, modern interface",
      "No consultants or training needed",
      "Live in 30 minutes — not months",
      "Role-based access control built in",
      "Mobile-friendly design",
      "Priority support when you need it",
    ],
  },
];

const testimonials = [
  {
    quote:
      "We were paying for Bloomerang plus a separate grant tracker and accounting software. Switching to Kindora saved us over $200/month and our team finally works from one system.",
    author: "Executive Director",
    org: "Community Youth Services",
  },
  {
    quote:
      "Bloomerang was great for donors, but we kept running into walls when we needed grant reports or financial statements. Kindora solved all of that.",
    author: "Development Director",
    org: "Housing Assistance Coalition",
  },
];

const faqs = [
  {
    question: "Why should I choose Kindora over Bloomerang?",
    answer:
      "Kindora gives you everything Bloomerang does for donor management — plus grant tracking, case management, nonprofit accounting, volunteer management, and communications. You get one platform instead of paying for 3–4 separate tools.",
  },
  {
    question: "What features does Kindora have that Bloomerang doesn't?",
    answer:
      "Kindora adds grant lifecycle management, client case management, nonprofit accounting with cost allocation, volunteer management, a donor portal, peer-to-peer fundraising, event management, text-to-give, and a built-in communications hub.",
  },
  {
    question: "Is Kindora more affordable than Bloomerang?",
    answer:
      "Kindora is priced for small to mid-sized nonprofits and includes features that would require separate subscriptions with Bloomerang. One Kindora subscription replaces Bloomerang plus a grant tracker, accounting tool, and case management system — saving you money.",
  },
  {
    question: "Can I switch from Bloomerang to Kindora easily?",
    answer:
      "Yes. Kindora supports data import from Bloomerang and other platforms. Our team helps you migrate donor records, giving history, and campaign data. Most organizations are fully set up in under 30 minutes.",
  },
  {
    question: "Does Kindora work for organizations that only do fundraising?",
    answer:
      "Yes. While Kindora includes more features than Bloomerang, it works perfectly for fundraising-only organizations too. You'll still get donor CRM, engagement scoring, campaigns, and email marketing — plus room to grow into grants and programs later.",
  },
];

const lastUpdated = "May 15, 2026";
export default function WhyKindoraOverBloomerangPage() {
  return (
    <>
      <Script
        id="why-kindora-over-bloomerang-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            The Definitive Guide
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
              Kindora
            </span>{" "}
            Over Bloomerang
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Bloomerang is a solid donor management tool. But if you also manage
            grants, deliver programs, or need nonprofit accounting — you&apos;re
            outgrowing it. Here&apos;s why Kindora is the smarter choice.
          </p>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed italic">
            A 2024 Nonprofit Tech Benchmark report found that organizations managing grants, programs, finances, and donors require an average of 3.7 separate software tools — costing an estimated 8+ hours per month in manual data entry across systems.<sup className="text-[#2563eb]">[1]</sup>{" "}
            The Nonprofit Finance Fund&apos;s 2024 State of the Sector Survey reports that 63% of nonprofits say their current software cannot effectively track restricted grants and cost allocations.<sup className="text-[#2563eb]">[2]</sup>
          </p>
          <p className="text-xs text-gray-400 mb-6">Last updated: {lastUpdated}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Try Kindora Free
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/kindora-vs-bloomerang"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
            >
              See Full Comparison
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Free trial · No credit card · Setup in 30 minutes
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "3–4×", label: "More features" },
              { stat: "50–70%", label: "Cost savings" },
              { stat: "30 min", label: "Setup time" },
              { stat: "1", label: "Platform to manage it all" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-[#2563eb] mb-1">
                  {item.stat}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Reasons Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              The Reasons
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              6 reasons nonprofits choose Kindora over Bloomerang
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each reason explains a specific advantage Kindora has over
              Bloomerang for growing nonprofits.
            </p>
          </div>

          <div className="space-y-12">
            {reasons.map((reason, idx) => (
              <div
                key={reason.number}
                className={`rounded-2xl border ${idx % 2 === 0 ? "bg-white border-gray-200" : "bg-white border-gray-200"} p-8 lg:p-12`}
              >
                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Left - Content */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#2563eb] flex items-center justify-center text-white font-black text-lg">
                        {reason.number}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {reason.title}
                        </h3>
                        <p className="text-sm font-semibold text-[#2563eb]">
                          {reason.highlight}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {reason.description}
                    </p>
                    <a
                      href="https://cad.spaceaiapp.com/kindora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-colors"
                    >
                      Try Kindora Free →
                    </a>
                  </div>

                  {/* Right - Details */}
                  <div className="lg:col-span-2">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-[#2563eb]/10 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-[#2563eb]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d={reason.icon}
                            />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          What this means
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {reason.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2.5 text-sm text-gray-700"
                          >
                            <svg
                              className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              What Nonprofits Say
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real organizations, real results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 relative"
              >
                <svg
                  className="w-10 h-10 text-[#2563eb]/20 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.author}
                  </p>
                  <p className="text-xs text-gray-500">{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions when considering Kindora over Bloomerang.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#1e3a8a] to-[#1e40af]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to make the switch?
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join nonprofits that chose Kindora over Bloomerang. One platform,
            more features, better value — and you can start free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563eb] bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Free — No Credit Card Required
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/kindora-vs-bloomerang"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300"
            >
              See Full Comparison
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-300">
            Free trial · No credit card · Setup in 30 minutes · Cancel anytime
          </p>
          <p className="mt-4 text-sm text-blue-200">
            <Link href="/kindora/pricing" className="text-white hover:underline">View pricing</Link>
            {" · "}
            <Link href="/kindora/vs-competitors" className="text-white hover:underline">Compare all alternatives</Link>
            {" · "}
            <Link href="/kindora/blog" className="text-white hover:underline">Nonprofit blog</Link>
          </p>
        </div>
      </section>
    </>
  );
}
