import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Virtual Data Room for Law Firms | SpaceNexus",
  description: "Legal VDR with privilege protection, ethical walls, due diligence Q&A, and court-admissible audit trails for Am Law 100 firms.",
  alternates: {
    canonical: "https://spacenexus.net/industries/law-firms",
  },
  openGraph: {
    title: "Virtual Data Room for Law Firms | SpaceNexus",
    description:
      "Legal VDR with privilege protection, ethical walls, due diligence Q&A, and court-admiss...",
    url: "https://spacenexus.net/industries/law-firms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Rooms for Law Firms — Secure Legal VDR | SpaceNexus",
    description:
      "Purpose-built data rooms for law firms: privilege protection, due diligence management, structured Q&A, and SOC 2 Type II compliance.",
  },
  keywords: [
    "data rooms for law firms",
    "legal data room",
    "virtual data room for law firms",
    "law firm data room",
    "legal VDR",
    "attorney data room",
    "secure document sharing for lawyers",
    "legal due diligence software",
    "law firm virtual data room",
    "M&A data room for lawyers",
  ],
};

const faqItems = [
  {
    question: "What is a data room for law firms?",
    answer:
      "A data room for law firms is a secure Virtual Data Room (VDR) designed specifically for legal workflows. It enables attorneys to share confidential documents with clients, opposing counsel, and deal parties while protecting attorney-client privilege, maintaining tamper-evident audit trails, and enforcing granular access controls that meet regulatory and ethical requirements.",
  },
  {
    question: "Why do law firms need a dedicated data room instead of Dropbox or SharePoint?",
    answer:
      "Consumer file-sharing tools lack the security controls law firms require: there are no attorney-client privilege folder hierarchies, no tamper-evident audit logs accepted by courts, no dynamic watermarking, no NDA click-through gates, and no ethical wall enforcement. A legal data room like SpaceNexus is purpose-built for regulated industries where document security, privilege protection, and compliance are non-negotiable.",
  },
  {
    question: "Is SpaceNexus SOC 2 Type II certified for law firm use?",
    answer:
      "Yes. SpaceNexus is independently audited and SOC 2 Type II certified, with ISO 27001 alignment and GDPR readiness. All data is encrypted with AES-256 at rest and TLS 1.3 in transit. These certifications satisfy the security review requirements of Am Law 100 firms and their enterprise clients.",
  },
  {
    question: "How does a legal data room protect attorney-client privilege?",
    answer:
      "SpaceNexus provides dedicated privilege and non-privilege folder hierarchies with separate permission sets, ensuring only authorized attorneys can view protected materials. Privilege logs are maintained automatically, every access is recorded in an immutable audit trail, and ethical walls prevent information from crossing matter boundaries — preventing inadvertent waiver of privilege during due diligence or litigation.",
  },
  {
    question: "What types of legal matters use data rooms?",
    answer:
      "Law firm data rooms are used for M&A due diligence, litigation and e-discovery document production, corporate restructuring, IPO preparation, real estate closings, joint ventures, debt financing, and licensing agreements. Any legal workflow that involves sharing confidential or privileged documents with external parties benefits from a secure, audit-ready data room.",
  },
  {
    question: "How quickly can a law firm set up a data room in SpaceNexus?",
    answer:
      "Most law firms have their SpaceNexus data room operational within 24 hours. The platform includes drag-and-drop bulk uploading, AI-powered auto-indexing by document category, and pre-built folder templates for common legal transactions including M&A due diligence and litigation discovery.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://spacenexus.net/industries" },
    { "@type": "ListItem", position: 3, name: "Data Rooms for Law Firms", item: "https://spacenexus.net/industries/law-firms" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Room for Law Firms",
  description: "Virtual data room purpose-built for law firms. Privilege protection, ethical wall enforcement, due diligence Q&A, court-admissible audit trails, and SOC 2 Type II compliance for legal M&A, litigation, and corporate transactions.",
  url: "https://spacenexus.net/industries/law-firms",
  serviceType: "Virtual Data Room",
  provider: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Law firms and legal departments",
  },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    description: "Contact for pricing tailored to matter volume and user count.",
  },
};

const capabilities = [
  {
    title: "Due Diligence Management",
    description:
      "Organize and review thousands of documents efficiently. Create custom checklists, track review progress, and identify issues systematically.",
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
    title: "Client Privilege Protection",
    description:
      "Maintain strict confidentiality with granular access controls. Separate privileged from non-privileged materials with clear audit trails.",
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
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Matter Collaboration",
    description:
      "Work seamlessly with clients, co-counsel, and opposing parties. Control exactly who sees what at every stage of the engagement.",
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
    title: "Contract Analysis",
    description:
      "Review and analyze contracts with AI-assisted tools. Extract key terms, identify risks, and compare documents efficiently.",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Ethical Wall Enforcement",
    description:
      "Implement and maintain information barriers between matters. Automatic conflict checking and access restrictions protect client interests.",
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
    title: "Billing Integration",
    description:
      "Track time spent in the data room by matter and user. Export activity data for seamless integration with legal billing systems.",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function LawFirmsPage() {
  return (
    <>
      <Script
        id="law-firms-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="law-firms-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="law-firms-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <main className="pt-20 lg:pt-24">
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                Law Firms
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Data Rooms for Law Firms
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                SpaceNexus provides data rooms purpose-built for law firms — manage
                due diligence, protect attorney-client privilege, enforce ethical
                walls, and collaborate on M&amp;A transactions with a SOC 2 Type II
                certified platform that meets the rigorous security demands of
                modern legal practice.
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
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
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
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Legal Practice Support
                    </h3>
                    <p className="text-sm text-gray-500">
                      Complete matter management
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Due Diligence",
                    "Document Review",
                    "Privilege Management",
                    "Client Portals",
                    "Litigation Support",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-amber-500"
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

      {/* Compliance Badges */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 mb-6">
            Security certifications that satisfy law firm oversight committees
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "SOC 2 Type II", detail: "Independently audited" },
              { label: "ISO 27001", detail: "Information security" },
              { label: "GDPR Ready", detail: "Data protection" },
              { label: "AES-256 + TLS 1.3", detail: "Bank-grade encryption" },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-[#f8f9fa] border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-gray-900">{badge.label}</span>
                <span className="text-xs text-gray-500 mt-0.5">{badge.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why law firms choose SpaceNexus data rooms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every capability is designed for the unique requirements of legal practice — from privilege protection to billing integration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
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
            Why law firms need dedicated data rooms
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Legal practice demands precision, confidentiality, and
              comprehensive record-keeping that generic file-sharing tools
              cannot provide. When attorneys share documents through consumer-grade
              platforms, they risk inadvertent waiver of attorney-client privilege,
              loss of work-product protections, and regulatory violations that can
              result in sanctions, malpractice claims, or disqualification from
              proceedings.
            </p>
            <p className="mb-6">
              SpaceNexus data rooms for law firms solve these problems with a
              secure document management platform designed for the full range of
              legal work. Our virtual data rooms handle the volume and complexity
              of modern transactions, where thousands of documents must be
              reviewed, organized, and shared with appropriate parties while
              maintaining strict access controls and tamper-evident audit trails.
            </p>
            <p className="mb-6">
              Privilege protection is central to the SpaceNexus design. Attorneys
              can clearly segregate privileged materials from documents that may
              be produced, with folder-level access controls that prevent
              inadvertent disclosure. When working with opposing counsel or third
              parties, SpaceNexus ensures that only designated materials are
              visible while maintaining detailed logs of every access for ethical
              compliance and courtroom admissibility.
            </p>
            <p className="mb-6">
              For transactional practices, our data rooms streamline the entire
              due diligence process. Custom checklists help teams track review
              progress across all document categories. The{" "}
              <Link href="/features/qa" className="text-[#2563eb] hover:underline">
                Q&amp;A module
              </Link>{" "}
              provides a structured channel for raising and resolving issues with
              counterparties. When deals close, complete archives preserve the
              transaction record for future reference and regulatory review.
            </p>
            <p className="mb-6">
              Integration with legal workflows extends to billing and matter
              management. Activity data can be exported to support accurate time
              tracking and client invoicing. Attorneys can see exactly how much
              time was spent reviewing specific document categories, providing
              the detail clients increasingly expect in legal bills.
            </p>
            <p>
              Whether your firm handles{" "}
              <Link href="/solutions/mergers-and-acquisitions-vdr" className="text-[#2563eb] hover:underline">
                M&amp;A transactions
              </Link>
              , litigation discovery, corporate restructuring, or IPO preparation,
              SpaceNexus provides the{" "}
              <Link href="/solutions/secure-document-sharing-for-legal" className="text-[#2563eb] hover:underline">
                secure document sharing platform
              </Link>{" "}
              that law firms and their oversight committees require — with SOC 2
              Type II certification, ISO 27001 alignment, and GDPR readiness as
              standard.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshot Callout — Q&A Management */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Screenshot first */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.spacenexus.net / qa
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/vdr-qa.png"
                  alt="SpaceNexus Q&A Management — due diligence questions and answers for law firms"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -inset-4 bg-orange-500/10 blur-2xl rounded-3xl -z-10" />
            </div>
            {/* Copy */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                Live Product
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Structured Q&amp;A — no more email chains
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every due diligence question is categorized, prioritized, and assigned directly in your SpaceNexus data room. Finance, Legal, and Technical queries each have their own track — and urgent items are flagged so nothing falls through the cracks.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Questions tagged by Finance, Legal, Technical",
                  "Urgent flag with visual priority indicators",
                  "Direct assignment to counterparty team members",
                  "Answered / Open / Urgent status at a glance",
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
                See the Q&amp;A module live
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
                title: "VDR Security: What to Look For Before You Sign Up",
                href: "/blog/vdr-security-what-to-look-for",
                label: "Security",
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

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Frequently asked questions about data rooms for law firms
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Set up your law firm data room today
          </h2>
          <p className="text-gray-600 mb-8">
            SOC 2 Type II certified. Attorney-client privilege protection. Tamper-evident audit trails. See why leading law firms choose SpaceNexus.
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Law Firms — related resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/solutions/law-firm-document-exchange"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Counsel-to-counsel exchange.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Law firm document exchange →</h3>
                        </Link>
                        <Link
                            href="/solutions/secure-document-sharing-for-legal"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Encrypted sharing for legal teams.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Secure document sharing for legal →</h3>
                        </Link>
                        <Link
                            href="/solutions/mergers-and-acquisitions-vdr"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transactional data rooms for counsel.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                        </Link>
                        <Link
                            href="/legal-document-management"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Manage legal documents at scale.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Legal document management →</h3>
                        </Link>
                        <Link
                            href="/secure-document-sharing"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">General-purpose secure sharing.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Secure document sharing →</h3>
                        </Link>
                        <Link
                            href="/blog/secure-file-sharing-for-lawyers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">What to look for in 2026.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Secure file sharing for lawyers →</h3>
                        </Link>
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
            </section>

</main>
    </>
  );
}
