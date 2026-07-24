import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Distressed Debt Data Room | SpaceNexus",
  description: "Secure data room for distressed debt, restructuring, workout diligence, creditor coordination, and claims management workflows.",
  alternates: {
    canonical: "https://spacenexus.net/solutions/distressed-debt",
  },
  keywords: [
    "distressed debt data room",
    "restructuring data room",
    "workout diligence",
    "creditor coordination",
    "claims management",
    "distressed debt advisory",
    "special situations data room",
  ],
  openGraph: {
    title: "Distressed Debt Data Room | SpaceNexus",
    description: "Secure data room for distressed debt, restructuring, and workout diligence.",
    url: "https://spacenexus.net/solutions/distressed-debt",
    type: "website",
  },
};

const useCases = [
  {
    title: "Workout & Restructuring Diligence",
    description: "Advisors and lenders coordinate borrower financials, legal documents, collateral schedules, and recovery plan materials in one secure workspace.",
  },
  {
    title: "Creditor Committee Management",
    description: "Creditor groups use SpaceNexus to share updates, distribute restructuring term sheets, and track milestone approvals with full auditability.",
  },
  {
    title: "Special Situations Investing",
    description: "Distressed debt funds review claims, collateral packages, and recovery analyses while managing access across multiple investor and legal stakeholders.",
  },
  {
    title: "Claims & Recovery Tracking",
    description: "Teams manage claim submissions, payment waterfall updates, and evidentiary support on a controlled platform built for high-stakes restructuring workflows.",
  },
];

const features = [
  {
    title: "Collateral & Claim Repository",
    desc: "Centralize loan schedules, collateral descriptions, claims notices, and supporting evidence in a single version-controlled repository.",
  },
  {
    title: "Workstream Coordination",
    desc: "Organize legal, finance, operations, and investor communication tasks around each restructuring process with roles and permissions by stakeholder group.",
  },
  {
    title: "Document Version Control",
    desc: "Track revisions to restructuring term sheets, court filings, valuation memos, and consent materials so all parties work from the latest approved version.",
  },
  {
    title: "Secure External Sharing",
    desc: "Grant controlled access to creditors, counsel, consultants, and investors without exposing confidential materials to broader teams.",
  },
  {
    title: "Audit Trail & Governance",
    desc: "Every view, download, and permission change is logged to support governance, compliance, and post-close dispute resolution.",
  },
  {
    title: "Investor Reporting",
    desc: "Share updates, recovery status reports, and capital allocation summaries to fund investors and committee members on a structured timeline.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Distressed Debt Data Room",
  description: "Secure virtual data room for distressed debt, restructuring, workout diligence, creditor coordination, and claims management.",
  url: "https://spacenexus.net/solutions/distressed-debt",
  serviceType: "Virtual Data Room",
  provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Distressed debt funds, restructuring advisors, lenders, and creditor committees",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a distressed debt data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A distressed debt data room is a secure repository for restructuring documents, creditor communications, claims packages, collateral schedules, and workout materials used during special situations transactions.",
      },
    },
    {
      "@type": "Question",
      name: "How does SpaceNexus help restructuring teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus gives restructuring teams a controlled workspace for document sharing, workstream coordination, audit trails, and secure communication with creditors, counsel, and investors.",
      },
    },
    {
      "@type": "Question",
      name: "Can distressed debt investors control who sees each document?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SpaceNexus supports role-based permissions and tiered access so different parties can see only the materials relevant to their role.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://spacenexus.net/solutions" },
    { "@type": "ListItem", position: 3, name: "Distressed Debt", item: "https://spacenexus.net/solutions/distressed-debt" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SpaceNexus",
  url: "https://spacenexus.net",
  description: "SpaceNexus supports distressed debt, private credit, and restructuring teams with secure document sharing and audit-ready workflows.",
};

const relatedSolutions = [
  {
    title: "Private Credit",
    description: "Use the same secure data room model for portfolio monitoring, covenant reporting, and lender coordination.",
    href: "/solutions/private-credit",
  },
  {
    title: "CLO Advisory",
    description: "Apply the same structured credit controls to warehouse facilities, ratings, and investor reporting.",
    href: "/solutions/clo-advisory",
  },
  {
    title: "ESG Consulting",
    description: "Coordinate sustainability data, assurance evidence, and stakeholder collaboration in a secure environment.",
    href: "/solutions/esg-consulting",
  },
];

export default function DistressedDebtPage() {
  return (
    <>
      <Script id="sol-dd-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="distressed-debt-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="distressed-debt-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="distressed-debt-organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <main className="pt-20 lg:pt-24">
        <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <Link href="/features" className="hover:text-[#2563eb] transition-colors">Solutions</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-gray-600">Distressed Debt</span>
        </nav>
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link href="/features" className="inline-flex items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Solutions
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                Distressed Debt
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Data room for distressed debt and restructuring workflows
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Distressed debt funds, restructuring advisors, lenders, and creditor committees use SpaceNexus to coordinate workout diligence, claims management, and recovery planning with secure document sharing and full governance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/demo" className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                  Request Distressed Debt Demo
                </Link>
                <Link href="/solutions/private-credit" className="inline-flex items-center px-6 py-3 text-base font-semibold text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-full">
                  Private Credit
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Built for special situations and restructuring needs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((uc) => (
                <div key={uc.title} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{uc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Purpose-built for high-stakes restructuring workflows</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-8">
              <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-2">Related solutions</p>
              <h2 className="text-3xl font-bold text-gray-900">Explore adjacent credit and restructuring workflows</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedSolutions.map((item) => (
                <Link key={item.href} href={item.href} className="group block rounded-2xl border border-gray-200 bg-[#f8f9fa] p-6 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  <p className="mt-4 text-sm font-semibold text-[#2563eb]">Explore →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coordinate your next distressed debt engagement</h2>
            <p className="text-lg text-gray-600 mb-8">Launch a secure data room for workout diligence, creditor communications, and recovery planning in less than a day.</p>
            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
              Request Distressed Debt Demo
            </Link>
          
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
        </section>
      </main>
    </>
  );
}
