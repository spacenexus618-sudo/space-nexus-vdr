import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "VDR for Private Equity | SpaceNexus",
  description: "Virtual data room for PE buy-side due diligence, sell-side portfolio exits, and LP reporting. IR-grade security and analytics.",
  keywords: [
    "private equity data room",
    "PE VDR",
    "buy-side diligence VDR",
    "portfolio management VDR",
    "LP reporting data room",
    "PE deal room",
  ],
  alternates: {
    canonical: "https://spacenexus.net/industries/private-equity",
  },
  openGraph: {
    title: "VDR for Private Equity | SpaceNexus",
    description: "Virtual data room for PE buy-side due diligence, sell-side portfolio exits, and LP repo...",
    url: "https://spacenexus.net/industries/private-equity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Data Room for Private Equity — Deal Sourcing, Due Diligence & Exits | Space Nexus",
    description:
      "The financial data room trusted by private equity firms for buy-side due diligence, LP reporting, portfolio management, and sell-side exits.",
  },
};

const capabilities = [
  {
    title: "Portfolio Company Management",
    description:
      "Centralize all portfolio documentation in organized data rooms. Track performance, maintain compliance records, and prepare for exits from day one.",
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "Fundraising & LP Communications",
    description:
      "Share fund documents, quarterly reports, and capital call notices with limited partners through secure, branded portals with complete audit trails.",
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
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Deal Sourcing & Pipeline",
    description:
      "Manage incoming deal flow with organized workspaces. Quickly spin up new data rooms for each opportunity and track engagement across prospects.",
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Due Diligence Coordination",
    description:
      "Run buy-side and sell-side due diligence processes with structured Q&A, document indexing, and real-time collaboration across deal teams.",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Exit Preparation",
    description:
      "Build comprehensive sell-side data rooms months in advance. Present your portfolio companies professionally to maximize valuations.",
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
    title: "Investor Analytics",
    description:
      "Understand which documents attract the most attention, track time spent by each bidder, and identify the most engaged potential acquirers.",
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
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Private Equity Virtual Data Room",
  description: "Virtual data room for private equity buy-side due diligence, sell-side portfolio exits, and LP reporting. Granular permissions, engagement analytics, and IR-grade security.",
  url: "https://spacenexus.net/industries/private-equity",
  serviceType: "Virtual Data Room",
  provider: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Private Equity professionals and deal teams",
  },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    description: "Contact for pricing tailored to private equity transaction volume and team size.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
    { "@type": "ListItem", position: 3, name: "Private Equity", item: "https://spacenexus.net/industries/private-equity" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a PE data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A private equity data room is a secure platform for managing confidential documents during buy-side due diligence, portfolio company reporting, LP fundraising, and exit transactions.",
      },
    },
    {
      "@type": "Question",
      name: "How does SpaceNexus support PE firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus provides multi-room management for concurrent deals, add-on acquisition templates, portfolio company document hubs, and LP reporting workflows.",
      },
    },
    {
      "@type": "Question",
      name: "Can PE firms manage multiple deals in SpaceNexus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SpaceNexus Professional and Enterprise plans include unlimited deal rooms, allowing PE firms to run multiple acquisitions simultaneously with separate permission structures.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is a PE data room?",
    answer: "A private equity data room is a secure platform for managing confidential documents during buy-side due diligence, portfolio company reporting, LP fundraising, and exit transactions.",
  },
  {
    question: "How does SpaceNexus support PE firms?",
    answer: "SpaceNexus provides multi-room management for concurrent deals, add-on acquisition templates, portfolio company document hubs, and LP reporting workflows.",
  },
  {
    question: "Can PE firms manage multiple deals in SpaceNexus?",
    answer: "Yes. SpaceNexus Professional and Enterprise plans include unlimited deal rooms, allowing PE firms to run multiple acquisitions simultaneously with separate permission structures.",
  },
];

export default function PrivateEquityPage() {
  return (
    <>
      <Script
        id="private-equity-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="private-equity-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <main className="pt-20 lg:pt-24">
      <Script
        id="pe-faq"
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
                className="inline-flex items-center text-sm text-gray-600 hover:text-[#2563eb] mb-6 transition-colors"
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                Private Equity
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Data Rooms Built for PE Workflows
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From deal sourcing to exit, Space Nexus provides private equity
                firms with the secure, efficient platform they need to manage
                portfolio companies, run due diligence, and execute transactions
                at scale.
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
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      PE Deal Management
                    </h3>
                    <p className="text-sm text-gray-600">
                      Full investment lifecycle
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Portfolio Monitoring",
                    "LP Reporting",
                    "Deal Pipeline",
                    "Exit Preparation",
                    "Co-Investment",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-purple-500"
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
              Purpose-Built for Private Equity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every feature designed to support the unique demands of PE
              deal-making.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
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
            Why Private Equity Firms Choose Space Nexus
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Private equity firms operate in an environment where speed,
              security, and precision are paramount. Every day, deal teams
              juggle multiple transactions, coordinate with portfolio companies,
              communicate with limited partners, and prepare for exits—all while
              maintaining the highest standards of confidentiality and
              compliance.
            </p>
            <p className="mb-6">
              Space Nexus was built with these demands in mind. Our platform
              provides PE professionals with the tools they need to manage the
              entire investment lifecycle from a single, secure hub. Whether you
              are running a competitive auction process, conducting buy-side due
              diligence, or preparing quarterly LP reports, every document and
              communication is organized, tracked, and protected.
            </p>
            <p className="mb-6">
              The platform integrates seamlessly with existing PE workflows.
              Deal teams can spin up new data rooms in minutes, invite
              counterparties with granular permission controls, and monitor
              engagement in real-time. Our analytics provide actionable insights
              into buyer behavior, helping you understand which parties are most
              engaged and which documents are driving interest.
            </p>
            <p className="mb-6">
              For portfolio management, Space Nexus serves as a centralized
              repository for all company documentation. Board materials,
              financial statements, legal documents, and operational reports are
              all accessible to authorized team members while remaining
              invisible to others. When it is time to exit, your sell-side data
              room is already populated with years of well-organized
              documentation.
            </p>
            <p>
              Fund administration is equally streamlined. LP communications,
              capital call notices, distribution memos, and K-1 packages can be
              shared through branded portals that reinforce your firm identity
              while providing investors with secure access to their documents.
              Every interaction is logged, creating a complete audit trail for
              compliance purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshot Callout — Activity & Analytics */}
      <section className="py-14 lg:py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                Live Product
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Know which LP is most engaged — before they call you
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Space Nexus tracks every document view, download, and time-on-page per investor. Engagement scores surface the hottest prospects so your deal team can prioritize follow-up calls at exactly the right moment.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Per-investor engagement scores (e.g. Acme Corp 85%)",
                  "Most-viewed documents ranked by views",
                  "Unique viewers, downloads, avg. time spent",
                  "Export full analytics for LP reporting",
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
                className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
              >
                See buyer intelligence in action
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            {/* Screenshot */}
            <div className="relative">
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">
                  app.spacenexus.net / analytics
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/vdr-analytics.png"
                  alt="SpaceNexus Activity & Analytics — buyer engagement insights for private equity"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related Resources</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Virtual Data Rooms for Private Equity: The Ultimate Guide",
                href: "/blog/virtual-data-room-for-private-equity",
                label: "Private Equity",
              },
              {
                title: "M&A Due Diligence Checklist 2026 — The Complete Deal Room Guide",
                href: "/blog/ma-due-diligence-checklist-2026",
                label: "M&A",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex flex-col p-5 border border-gray-200 rounded-xl hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-200"
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
            Ready to Modernize Your Deal Operations?
          </h2>
          <p className="text-gray-600 mb-8">
            Join leading PE firms who trust Space Nexus for their most sensitive
            transactions.
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Private Equity — related resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/solutions/mergers-and-acquisitions-vdr"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Buy-side and sell-side workflows.</p>
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
                            href="/industries/investment-banking"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Co-advisory deal workflows.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For investment banking →</h3>
                        </Link>
                        <Link
                            href="/industries/law-firms"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Legal counsel coordination.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For law firms →</h3>
                        </Link>
                        <Link
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers compared.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
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
                <LastUpdated date="2026-08-01" />
            </div></div>
            </section>

</main>
  </>
  );
}

