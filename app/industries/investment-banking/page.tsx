import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "VDR for Investment Banking | SpaceNexus",
  description: "Virtual data room for investment banking M&A, capital markets, and restructuring. Multi-bidder workflows and structured Q&A.",
  keywords: [
    "investment banking data room",
    "M&A data room",
    "IPO data room",
    "capital markets VDR",
    "investment bank VDR",
    "IB deal room",
  ],
  alternates: {
    canonical: "https://spacenexus.net/industries/investment-banking",
  },
  openGraph: {
    title: "VDR for Investment Banking | SpaceNexus",
    description: "Virtual data room for investment banking M&A, capital markets, and restructuring. Multi...",
    url: "https://spacenexus.net/industries/investment-banking",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investment Banking Data Room — SEC & FINRA Compliant | SpaceNexus",
    description:
      "Execute M&A mandates, IPOs, and restructurings with a US-compliant investment banking data room built for speed, security, and institutional deal-making.",
  },
};

const capabilities = [
  {
    title: "M&A Transaction Management",
    description:
      "Run sell-side and buy-side mandates with structured data rooms, controlled access, and comprehensive audit trails for every transaction.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    title: "Capital Markets Support",
    description:
      "Facilitate IPOs, debt offerings, and private placements with secure document distribution to underwriters, investors, and regulatory bodies.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Multi-Party Coordination",
    description:
      "Manage complex deal teams spanning clients, counterparties, law firms, and advisors with role-based access and clear communication channels.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Bidder Management",
    description:
      "Track multiple bidders through each phase of an auction. Control information flow, monitor engagement, and manage process letters efficiently.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    title: "Client Reporting",
    description:
      "Generate detailed activity reports for clients showing document views, time spent, and engagement patterns across all participants.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Regulatory Compliance",
    description:
      "Maintain complete records for regulatory requirements. Every action is logged with timestamps, user identification, and IP addresses.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Investment Banking Virtual Data Room",
  description: "Virtual data room for investment banking M&A, capital markets, and restructuring. Multi-bidder processes, structured Q&A, real-time engagement analytics, and SOC 2 Type II compliance.",
  url: "https://spacenexus.net/industries/investment-banking",
  serviceType: "Virtual Data Room",
  provider: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Investment Banking professionals and deal teams",
  },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    description: "Contact for pricing tailored to investment banking transaction volume and team size.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
    { "@type": "ListItem", position: 3, name: "Investment Banking", item: "https://spacenexus.net/industries/investment-banking" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an investment banking data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An investment banking data room is a secure virtual workspace used to share confidential deal documents with bidders, advisors, and regulatory parties during M&A and capital markets transactions.",
      },
    },
    {
      "@type": "Question",
      name: "How does SpaceNexus support IB workflows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus provides structured Q&A workflows, bidder engagement analytics, dynamic watermarking, and tiered access controls designed for sell-side M&A and capital raising processes.",
      },
    },
    {
      "@type": "Question",
      name: "Is SpaceNexus used by investment banks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SpaceNexus is used by boutique and mid-market investment banks for M&A advisory, capital raising, restructuring, and private capital transactions.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is an investment banking data room?",
    answer: "An investment banking data room is a secure virtual workspace used to share confidential deal documents with bidders, advisors, and regulatory parties during M&A and capital markets transactions.",
  },
  {
    question: "How does SpaceNexus support IB workflows?",
    answer: "SpaceNexus provides structured Q&A workflows, bidder engagement analytics, dynamic watermarking, and tiered access controls designed for sell-side M&A and capital raising processes.",
  },
  {
    question: "Is SpaceNexus used by investment banks?",
    answer: "Yes. SpaceNexus is used by boutique and mid-market investment banks for M&A advisory, capital raising, restructuring, and private capital transactions.",
  },
];

export default function InvestmentBankingPage() {
  return (
    <>
      <Script
        id="investment-banking-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="investment-banking-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <main className="pt-20 lg:pt-24">
      <Script
        id="ib-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/industries"
                className="inline-flex items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                All Industries
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Investment Banking
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Enterprise Data Rooms for Investment Banks
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Execute complex M&A transactions, capital raises, and
                restructurings with the security, speed, and sophistication that
                investment banking demands. Space Nexus delivers the
                infrastructure your deal teams need.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      IB Deal Execution
                    </h3>
                    <p className="text-sm text-gray-500">
                      Full transaction support
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Sell-Side M&A",
                    "Buy-Side Advisory",
                    "Capital Raises",
                    "Restructuring",
                    "Fairness Opinions",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Investment Banking Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every feature engineered to support the pace and precision of IB
              transactions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Investment Banks Choose Space Nexus
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Investment banking operates at the intersection of high stakes and
              tight timelines. Whether advising on a multi-billion dollar
              merger, underwriting a landmark IPO, or restructuring a distressed
              company, deal teams require infrastructure that matches the
              intensity and importance of their work.
            </p>
            <p className="mb-6">
              Space Nexus provides investment banks with a virtual data room
              platform designed for the demands of institutional deal-making.
              Our infrastructure supports the complex multi-party dynamics of
              M&A transactions, where sellers, buyers, legal counsel,
              accountants, and other advisors must collaborate while maintaining
              strict information barriers.
            </p>
            <p className="mb-6">
              For sell-side engagements, bankers can rapidly construct
              professional data rooms organized according to industry-standard
              due diligence frameworks. Granular permission controls allow
              different bidders to see different documents as appropriate for
              their stage in the process. Real-time analytics reveal which
              buyers are most engaged and which areas of the business attract
              the most scrutiny.
            </p>
            <p className="mb-6">
              Buy-side teams benefit from organized workspaces that centralize
              all target company materials, internal analysis, and communication
              threads. The Q&A module ensures that questions and responses are
              tracked, assigned, and never lost in email chains. When multiple
              targets are being evaluated simultaneously, each has its own
              isolated data room.
            </p>
            <p>
              Throughout every transaction, Space Nexus maintains the
              comprehensive audit trails that regulatory environments require.
              Every document view, download, and permission change is logged
              with precise timestamps and user identification. When deals close
              and records must be preserved, the complete transaction archive is
              available for secure long-term storage.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshot Callout — Deals Management */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Screenshot first on this page — reversed layout */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.spacenexus.net / deals
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/vdr-deals.png"
                  alt="SpaceNexus Deals Management — M&A pipeline view"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -inset-4 bg-purple-500/10 blur-2xl rounded-3xl -z-10" />
            </div>
            {/* Copy */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                Live Product
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Manage every M&amp;A deal from a single pipeline
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Track combined deal value, stage progression, and per-deal document counts in real time. Filter by Discovery, Due Diligence, Negotiation, or Closed — and jump into any deal room with one click.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Concurrent deal pipeline with live value tracking",
                  "Deal stage pipeline with instant filters",
                  "Per-deal document count & import management",
                  "One-click 'Create Deal' — live in minutes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/demo"
                className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                See the full platform
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related Resources</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "M&A Due Diligence Checklist 2026 — The Complete Deal Room Guide",
                href: "/blog/ma-due-diligence-checklist-2026",
                label: "M&A",
              },
              {
                title: "What Is a Virtual Data Room? The Complete Guide for 2026",
                href: "/blog/what-is-a-virtual-data-room",
                label: "Guide",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex flex-col p-5 bg-white border border-gray-200 rounded-xl hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-200"
              >
                <span className="text-xs font-semibold text-[#2563eb] mb-2">{post.label}</span>
                <p className="text-sm font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">
                  {post.title} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Elevate Your Deal Execution?
          </h2>
          <p className="text-gray-600 mb-8">
            See how Space Nexus can support your next transaction.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            Request a Demo
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
                {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Investment Banking — related resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/solutions/mergers-and-acquisitions-vdr"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Multi-bidder sell-side processes.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                        </Link>
                        <Link
                            href="/solutions/ma-document-sharing"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Multi-party deal document exchange.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A document sharing →</h3>
                        </Link>
                        <Link
                            href="/industries/private-equity"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">PE deal workflows.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For private equity →</h3>
                        </Link>
                        <Link
                            href="/industries/law-firms"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Co-counsel deal coordination.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For law firms →</h3>
                        </Link>
                        <Link
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Independent ranking of 7 providers.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
                        </Link>
                        <Link
                            href="/pricing-comparison"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transparent pricing vs legacy.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR pricing comparison →</h3>
                        </Link>
                    </div>
                
            {/* FAQ */}
            <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
            </section>

</main>
  </>
  );
}

