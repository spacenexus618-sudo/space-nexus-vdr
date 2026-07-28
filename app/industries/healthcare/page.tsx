import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "VDR for Healthcare | SpaceNexus",
  description: "Virtual data room for healthcare M&A, HIPAA compliance, clinical data sharing, and hospital system transactions. SOC 2 certified.",
  keywords: [
    "healthcare data room",
    "HIPAA compliant VDR",
    "hospital M&A data room",
    "medical records data room",
    "healthcare due diligence",
  ],
  alternates: {
    canonical: "https://spacenexus.net/industries/healthcare",
  },
  openGraph: {
    title: "VDR for Healthcare | SpaceNexus",
    description:
      "Virtual data room for healthcare M&A, HIPAA compliance, clinical data sharing, and hospital system transactions.",
    url: "https://spacenexus.net/industries/healthcare",
    type: "website",
  },
};

const capabilities = [
  {
    title: "HIPAA-Compliant Sharing",
    description:
      "Share protected health information (PHI) with role-based access controls, encryption, and audit trails that satisfy HIPAA requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Hospital M&A Transactions",
    description:
      "Manage acquisitions, mergers, and divestitures of hospitals, clinics, and healthcare systems with structured due diligence workflows.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Clinical Data Management",
    description:
      "Organize clinical trial documentation, research data, and regulatory submissions in structured repositories for partnership discussions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Regulatory Compliance",
    description:
      "Maintain audit trails and access logs that satisfy HIPAA, HITECH, and state-level healthcare privacy regulations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Provider Network Transactions",
    description:
      "Support management service organization (MSO) transactions, physician practice acquisitions, and provider network consolidations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Health IT Due Diligence",
    description:
      "Evaluate electronic health record (EHR) systems, health IT infrastructure, and telemedicine platforms during technology transactions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Healthcare Virtual Data Room",
  description: "Virtual data room for healthcare M&A, HIPAA compliance, clinical data sharing, and hospital system transactions. SOC 2 certified.",
  url: "https://spacenexus.net/industries/healthcare",
  serviceType: "Virtual Data Room",
  provider: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Healthcare executives, hospital administrators, and deal teams",
  },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    description: "Contact for pricing tailored to healthcare transaction volume and team size.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
    { "@type": "ListItem", position: 3, name: "Healthcare", item: "https://spacenexus.net/industries/healthcare" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is SpaceNexus HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SpaceNexus supports HIPAA-compliant document sharing with AES-256 encryption, role-based access controls, audit trails, and business associate agreement (BAA) support for healthcare transactions.",
      },
    },
    {
      "@type": "Question",
      name: "Can I share PHI in a SpaceNexus data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SpaceNexus provides the security controls necessary for sharing protected health information (PHI) during healthcare M&A, due diligence, and partnership discussions, including view-only mode, dynamic watermarking, and access expiration.",
      },
    },
    {
      "@type": "Question",
      name: "What healthcare transactions use virtual data rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtual data rooms are used for hospital acquisitions, physician practice mergers, health IT due diligence, clinical trial data sharing, insurance company transactions, and pharmaceutical partnerships.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Is SpaceNexus HIPAA compliant?",
    answer: "Yes. SpaceNexus supports HIPAA-compliant document sharing with AES-256 encryption, role-based access controls, audit trails, and business associate agreement (BAA) support for healthcare transactions.",
  },
  {
    question: "Can I share PHI in a SpaceNexus data room?",
    answer: "Yes. SpaceNexus provides the security controls necessary for sharing protected health information (PHI) during healthcare M&A, due diligence, and partnership discussions, including view-only mode, dynamic watermarking, and access expiration.",
  },
  {
    question: "What healthcare transactions use virtual data rooms?",
    answer: "Virtual data rooms are used for hospital acquisitions, physician practice mergers, health IT due diligence, clinical trial data sharing, insurance company transactions, and pharmaceutical partnerships.",
  },
];

export default function HealthcarePage() {
  return (
    <>
      <Script
        id="healthcare-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="healthcare-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="pt-20 lg:pt-24">
        <Script
          id="hc-faq"
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
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  All Industries
                </Link>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
                  Healthcare
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Secure Data Rooms for Healthcare
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Manage hospital acquisitions, health IT due diligence, and clinical
                  data sharing with a platform built for HIPAA compliance and
                  healthcare transaction requirements.
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
                >
                  Request a Demo
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl" />
                <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Healthcare Transactions
                      </h3>
                      <p className="text-sm text-gray-600">
                        HIPAA-ready document management
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Hospital & Health System M&A",
                      "Physician Practice Acquisitions",
                      "Health IT Due Diligence",
                      "Clinical Data Sharing",
                      "Insurance Transactions",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                Purpose-Built for Healthcare
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Features designed for the unique regulatory and compliance
                requirements of healthcare transactions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
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
              Why Healthcare Organizations Choose Space Nexus
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Healthcare transactions involve some of the most sensitive data
                in any industry. Patient records, clinical trial data, provider
                credentials, and insurance information must be shared with
                potential buyers, partners, and regulators while maintaining
                strict HIPAA compliance.
              </p>
              <p className="mb-6">
                SpaceNexus provides hospitals, health systems, physician
                groups, and health IT companies with a virtual data room
                platform that understands these unique challenges. Our system
                is designed to organize the extensive documentation that
                healthcare transactions require, from financial records through
                clinical operations.
              </p>
              <p className="mb-6">
                HIPAA compliance is built into our platform. Every document
                access, download, and modification is logged with complete
                audit trails that satisfy HIPAA, HITECH, and state-level
                healthcare privacy regulations. When preparing for regulatory
                inspections or responding to information requests,
                comprehensive access records are readily available.
              </p>
              <p className="mb-6">
                For health IT due diligence, SpaceNexus enables organizations
                to share EHR implementations, interoperability assessments,
                and technology infrastructure documentation securely. Potential
                acquirers can review technical systems while sensitive patient
                data remains protected.
              </p>
              <p>
                Provider network transactions, including MSO acquisitions and
                physician practice consolidations, benefit from our structured
                Q&A workflows and real-time engagement analytics. Track which
                buyers are most engaged and which documents they spend the
                most time reviewing.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Support Your Healthcare Transactions?
            </h2>
            <p className="text-gray-600 mb-8">
              See how SpaceNexus can help with your next acquisition or
              partnership.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Request a Demo
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Related VDR Resources */}
        <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Healthcare — related resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/solutions/mergers-and-acquisitions-vdr"
                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
              >
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Hospital and health system M&A.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
              </Link>
              <Link
                href="/features/security-compliance"
                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
              >
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">HIPAA, HITECH, SOC 2.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Security & compliance →</h3>
              </Link>
              <Link
                href="/solutions/secure-document-sharing-for-legal"
                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
              >
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">PHI handling and access controls.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Secure document sharing →</h3>
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
