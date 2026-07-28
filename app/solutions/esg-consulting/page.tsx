import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "ESG Consulting Data Room | SpaceNexus",
  description: "Secure data room for ESG consulting, sustainability due diligence, and ESG reporting workflows. CSRD compliance, double materiality assessments, and stakeholder data sharing.",
  alternates: {
    canonical: "https://spacenexus.net/solutions/esg-consulting",
  },
  keywords: [
    "ESG data room",
    "ESG consulting platform",
    "sustainability due diligence",
    "CSRD data room",
    "double materiality assessment",
    "ESG reporting platform",
    "greenwashing audit",
  ],
  openGraph: {
    title: "ESG Consulting Data Room | SpaceNexus",
    description: "Secure data room for ESG consulting, sustainability due diligence, and CSRD reporting workflows.",
    url: "https://spacenexus.net/solutions/esg-consulting",
    type: "website",
  },
};

const useCases = [
  {
    title: "Double Materiality Assessment",
    description: "ESG consultants coordinate double materiality assessments with internal stakeholders, value chain partners, and affected communities — collecting impact, risk, and opportunity data through structured forms and document upload.",
  },
  {
    title: "CSRD & ESRS Reporting",
    description: "Organizations preparing Corporate Sustainability Reporting Directive (CSRD) disclosures use SpaceNexus to centralize ESRS data points, evidence documents, and third-party assurance evidence.",
  },
  {
    title: "Sustainability Due Diligence",
    description: "PE firms and corporate acquirers conducting ESG due diligence on targets use SpaceNexus to assess Scope 1/2/3 emissions, supply chain practices, and governance maturity.",
  },
  {
    title: "Greenwashing Audit & Verification",
    description: "Independent assurance providers and rating agencies use SpaceNexus to verify sustainability claims, audit ESG disclosures, and gather evidence for second-party opinions.",
  },
];

const features = [
  {
    title: "ESRS Data Point Library",
    desc: "Pre-built library of all CSRD/ESRS data points with definitions, calculation methods, and required evidence. Tag uploaded documents to specific data points for traceability.",
  },
  {
    title: "Scope 1/2/3 Emissions Hub",
    desc: "Centralized hub for GHG emissions data — utility bills, supplier surveys, travel records, and calculation worksheets. Audit-ready with full version history.",
  },
  {
    title: "Supply Chain Data Collection",
    desc: "Secure portals for suppliers to submit ESG questionnaires, carbon data, and certifications. Tier-1, Tier-2, and Tier-3 supplier engagement managed from a single dashboard.",
  },
  {
    title: "Stakeholder Engagement",
    desc: "Structured workflows for engaging employees, customers, communities, and investors in materiality assessments. Anonymous input collection, multilingual support, GDPR-compliant.",
  },
  {
    title: "Third-Party Assurance",
    desc: "Dedicated access for limited assurance and reasonable assurance providers. Sample selection, evidence requests, and findings tracked with full audit trail.",
  },
  {
    title: "Greenwashing Risk Detection",
    desc: "Cross-reference public ESG claims with internal data. AI flags inconsistencies between marketing materials, disclosures, and actual sustainability performance.",
  },
  {
    title: "Regulatory Compliance",
    desc: "EU CSRD, ESRS, SFDR, EU Taxonomy, UK SDR, SEC Climate Disclosure, and ISSB S1/S2 supported. Configurable frameworks for global operations.",
  },
  {
    title: "XBRL & iXBRL Export",
    desc: "Export ESRS data in XBRL and iXBRL formats for regulatory submission. Pre-built tagging aligned with the European Single Access Point requirements.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ESG Consulting Data Room",
  description: "Secure virtual data room for ESG consulting, sustainability due diligence, and CSRD/ESRS reporting workflows. Double materiality assessments and stakeholder data sharing.",
  url: "https://spacenexus.net/solutions/esg-consulting",
  serviceType: "Virtual Data Room",
  provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "ESG consultants, sustainability teams, PE firms, assurance providers, and corporate sustainability officers",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an ESG consulting data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An ESG consulting data room is a secure workspace for collecting materiality assessment evidence, CSRD and ESRS documentation, supplier data, and assurance records for sustainability projects.",
      },
    },
    {
      "@type": "Question",
      name: "How does SpaceNexus support ESG reporting teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus helps ESG teams centralize evidence, manage stakeholder submissions, and track compliance workflows with role-based access and complete audit trails.",
      },
    },
    {
      "@type": "Question",
      name: "Can sustainability consultants share data securely with suppliers and auditors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The platform supports secure external sharing for suppliers, assurance providers, and internal sustainability stakeholders without exposing the full project dataset.",
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
    { "@type": "ListItem", position: 3, name: "ESG Consulting", item: "https://spacenexus.net/solutions/esg-consulting" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SpaceNexus",
  url: "https://spacenexus.net",
  description: "SpaceNexus helps ESG teams, private credit funds, and deal teams manage sensitive information in secure virtual data rooms.",
};

const relatedSolutions = [
  {
    title: "Legal Document Sharing",
    description: "Support secure collaboration for legal teams, counsel, and external reviewers during investigations or transactions.",
    href: "/solutions/secure-document-sharing-for-legal",
  },
  {
    title: "Private Credit",
    description: "Use the same secure foundation for credit diligence, portfolio monitoring, and lender communications.",
    href: "/solutions/private-credit",
  },
  {
    title: "CLO Advisory",
    description: "Coordinate structured credit transactions, warehouse facilities, and investor reporting in a dedicated workspace.",
    href: "/solutions/clo-advisory",
  },
];

export default function ESGConsultingPage() {
  return (
    <>
      <Script id="sol-esg-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="esg-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="esg-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="esg-organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <main className="pt-20 lg:pt-24">
        <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <Link href="/features" className="hover:text-[#2563eb] transition-colors">Solutions</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-gray-600">ESG Consulting</span>
        </nav>
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link href="/features" className="inline-flex items-center text-sm text-gray-600 hover:text-[#2563eb] mb-6 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Solutions
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                ESG Consulting
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Data room for ESG consulting and sustainability reporting
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ESG consultants, sustainability teams, and PE firms use SpaceNexus to coordinate double materiality assessments, CSRD/ESRS reporting, supply chain data collection, and third-party assurance workflows — with full EU CSRD, SFDR, EU Taxonomy, and ISSB compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/demo" className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                  Request ESG Demo
                </Link>
                <Link href="/solutions/secure-document-sharing-for-legal" className="inline-flex items-center px-6 py-3 text-base font-semibold text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-full">
                  Legal Document Sharing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Built for sustainability professionals</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Purpose-built for ESG workflows</h2>
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
              <h2 className="text-3xl font-bold text-gray-900">Explore related secure collaboration use cases</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coordinate your next ESG engagement</h2>
            <p className="text-lg text-gray-600 mb-8">Set up your ESG data room in under 24 hours with pre-built CSRD/ESRS templates and supply chain data collection workflows.</p>
            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
              Request ESG Demo
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
