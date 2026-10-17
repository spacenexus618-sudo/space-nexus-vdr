import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "VDR for Life Sciences | SpaceNexus",
  description: "Virtual data room for pharmaceutical licensing, biotech M&A, and clinical trial data sharing. HIPAA-ready configuration.",
  keywords: [
    "life sciences data room",
    "pharma VDR",
    "biotech M&A data room",
    "HIPAA compliant VDR",
    "clinical trial data room",
  ],
  alternates: {
    canonical: "https://spacenexus.net/industries/life-sciences",
  },
  openGraph: {
    title: "VDR for Life Sciences | SpaceNexus",
    description:
      "Virtual data room for pharmaceutical licensing, biotech M&A, and clinical trial data sharing. HIPAA-ready configuration.",
    url: "https://spacenexus.net/industries/life-sciences",
    type: "website",
  },
};

const capabilities = [
  {
    title: "Clinical Trial Documentation",
    description:
      "Organize clinical study reports, regulatory submissions, and trial data in structured repositories that support due diligence and partnership discussions.",
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
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: "IP Portfolio Management",
    description:
      "Securely share patent filings, trade secrets, and proprietary research with potential partners or acquirers under strict access controls.",
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
  {
    title: "Regulatory Compliance",
    description:
      "Maintain audit trails and access logs that satisfy FDA, EMA, and other regulatory requirements for document control and traceability.",
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
    title: "Licensing & Partnerships",
    description:
      "Support licensing negotiations and partnership discussions with secure document sharing. Control which assets different potential partners can review.",
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
    title: "M&A Transaction Support",
    description:
      "Run acquisition or divestiture processes with comprehensive data rooms covering scientific, regulatory, commercial, and corporate documentation.",
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
    title: "Scientific Collaboration",
    description:
      "Enable secure collaboration between research teams, academic partners, and contract organizations while protecting proprietary information.",
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Life Sciences Virtual Data Room",
  description: "Virtual data room for life sciences licensing, M&A, and clinical trial data sharing. HIPAA-ready configuration, FDA 21 CFR Part 11 alignment, and pharma-grade audit trails.",
  url: "https://spacenexus.net/industries/life-sciences",
  serviceType: "Virtual Data Room",
  provider: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Life Sciences professionals and deal teams",
  },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    description: "Contact for pricing tailored to life sciences transaction volume and team size.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
    { "@type": "ListItem", position: 3, name: "Life Sciences", item: "https://spacenexus.net/industries/life-sciences" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a life sciences data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A life sciences data room is a secure platform for sharing clinical trial data, regulatory submissions, IP portfolios, and partnership documents during licensing, M&A, and fundraising.",
      },
    },
    {
      "@type": "Question",
      name: "Does SpaceNexus support HIPAA compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SpaceNexus supports HIPAA-compliant document sharing with encryption, audit trails, and role-based access controls for healthcare and life sciences transactions.",
      },
    },
    {
      "@type": "Question",
      name: "How does SpaceNexus help biotech fundraising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus provides structured data room templates for biotech licensing deals, clinical data sharing, and Series A-C fundraising with investor engagement analytics.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is a life sciences data room?",
    answer: "A life sciences data room is a secure platform for sharing clinical trial data, regulatory submissions, IP portfolios, and partnership documents during licensing, M&A, and fundraising.",
  },
  {
    question: "Does SpaceNexus support HIPAA compliance?",
    answer: "Yes. SpaceNexus supports HIPAA-compliant document sharing with encryption, audit trails, and role-based access controls for healthcare and life sciences transactions.",
  },
  {
    question: "How does SpaceNexus help biotech fundraising?",
    answer: "SpaceNexus provides structured data room templates for biotech licensing deals, clinical data sharing, and Series A-C fundraising with investor engagement analytics.",
  },
];

export default function LifeSciencesPage() {
  return (
    <>
      <Script
        id="life-sciences-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="life-sciences-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <main className="pt-20 lg:pt-24">
      <Script
        id="ls-faq"
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
                Life Sciences
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Secure Data Rooms for Life Sciences
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Manage pharmaceutical, biotechnology, and medical device
                transactions with a platform built for the complex documentation
                and regulatory requirements of the life sciences industry.
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
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
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
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Life Sciences Transactions
                    </h3>
                    <p className="text-sm text-gray-600">
                      Compliant document management
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "M&A Transactions",
                    "Licensing Deals",
                    "Partnership Due Diligence",
                    "Regulatory Filings",
                    "Clinical Data Sharing",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-rose-500"
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
              Purpose-Built for Life Sciences
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Features designed for the unique requirements of pharmaceutical
              and biotech transactions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
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
            Why Life Sciences Companies Choose Space Nexus
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Life sciences transactions involve some of the most complex and
              sensitive documentation in any industry. Clinical trial data,
              proprietary research, patent portfolios, and regulatory filings
              must be shared with potential partners or acquirers while
              maintaining strict confidentiality and complying with industry
              regulations.
            </p>
            <p className="mb-6">
              Space Nexus provides pharmaceutical, biotechnology, and medical
              device companies with a virtual data room platform that
              understands these unique challenges. Our system is designed to
              organize the extensive documentation that life sciences
              transactions require, from preclinical research through commercial
              operations.
            </p>
            <p className="mb-6">
              Regulatory compliance is built into our platform. Every document
              access, download, and modification is logged with complete audit
              trails that satisfy FDA, EMA, and other regulatory requirements.
              When preparing for regulatory inspections or responding to
              information requests, comprehensive access records are readily
              available.
            </p>
            <p className="mb-6">
              For licensing and partnership discussions, Space Nexus enables
              companies to share specific assets or therapeutic areas with
              different potential partners. A pharmaceutical company can
              simultaneously discuss licensing arrangements for different
              pipeline assets with multiple parties, each seeing only the
              materials relevant to their discussions.
            </p>
            <p>
              Scientific collaboration is also supported through secure
              workspaces where research teams, academic partners, and contract
              research organizations can share data and documents. Access
              controls ensure that proprietary information remains protected
              while enabling the collaboration that drives innovation in life
              sciences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Support Your Life Sciences Transactions?
          </h2>
          <p className="text-gray-600 mb-8">
            See how Space Nexus can help with your next partnership or
            acquisition.
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Life Sciences — related resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/solutions/mergers-and-acquisitions-vdr"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Pharma licensing and biotech M&A.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                        </Link>
                        <Link
                            href="/solutions/secure-document-sharing-for-legal"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">HIPAA-ready secure sharing.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Secure document sharing for legal →</h3>
                        </Link>
                        <Link
                            href="/features/security-compliance"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">HIPAA, GDPR, FDA 21 CFR Part 11.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Security & compliance →</h3>
                        </Link>
                        <Link
                            href="/blog/vdr-security-what-to-look-for"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">PHI handling in transactions.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">HIPAA compliant file sharing in healthcare M&A →</h3>
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

