import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Private Credit Data Room | SpaceNexus",
  description: "Secure data room for private credit funds, direct lending origination, portfolio monitoring, covenant reporting, and lender communications.",
  alternates: {
    canonical: "https://spacenexus.net/solutions/private-credit",
  },
  keywords: [
    "private credit data room",
    "direct lending data room",
    "private credit fund diligence",
    "covenant reporting",
    "portfolio monitoring",
    "private credit communications",
    "lender onboarding",
  ],
  openGraph: {
    title: "Private Credit Data Room | SpaceNexus",
    description: "Secure data room for private credit origination, loan monitoring, and lender reporting.",
    url: "https://spacenexus.net/solutions/private-credit",
    type: "website",
  },
};

const useCases = [
  {
    title: "Direct Lending Origination",
    description: "Private credit lenders share teaser materials, credit memos, and diligence packs with internal deal teams and external syndicate partners in a structured workspace.",
  },
  {
    title: "Portfolio Monitoring",
    description: "Fund managers centralize covenant compliance packages, borrower updates, and portfolio reporting for ongoing monitoring across multiple investments.",
  },
  {
    title: "Lender & Investor Reporting",
    description: "Use SpaceNexus to distribute quarterly reporting, KPI dashboards, and capital call materials to lenders and fund stakeholders with controlled access.",
  },
  {
    title: "Special Situations & Credit Workouts",
    description: "Support amend-and-extend discussions, refinancing materials, and workout communications with a secure audit-ready repository.",
  },
];

const features = [
  {
    title: "Borrower Due Diligence Hub",
    desc: "Organize financials, legal docs, collateral reports, and operating metrics in a single structured environment for credit review.",
  },
  {
    title: "Tiered Lender Access",
    desc: "Control which parties see the term sheet, full credit package, or ongoing monitoring materials as the transaction progresses.",
  },
  {
    title: "Covenant Tracking",
    desc: "Monitor compliance milestones, waiver requests, and reporting deadlines with tasks, reminders, and document attachments.",
  },
  {
    title: "Portfolio Reporting",
    desc: "Share monthly financial packages, borrower updates, and risk summaries with fund investors and internal credit committees.",
  },
  {
    title: "Secure External Collaboration",
    desc: "Provide counsel, advisers, and lenders controlled access to deal materials while maintaining confidentiality and role-based permissions.",
  },
  {
    title: "Governance & Audit Trails",
    desc: "Maintain an immutable record of document access, permission changes, and significant events to support compliance and internal controls.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Private Credit Data Room",
  description: "Secure virtual data room for private credit funds, direct lending origination, portfolio monitoring, covenant reporting, and lender communications.",
  url: "https://spacenexus.net/solutions/private-credit",
  serviceType: "Virtual Data Room",
  provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Private credit funds, direct lenders, credit committees, and portfolio managers",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a private credit data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A private credit data room is a secure workspace for borrower diligence, loan monitoring, covenant reporting, and lender communications during direct lending and portfolio management processes.",
      },
    },
    {
      "@type": "Question",
      name: "How does SpaceNexus support private credit funds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpaceNexus helps private credit teams organize borrower documents, coordinate lender access, and track portfolio reporting with controlled permissions and audit trails.",
      },
    },
    {
      "@type": "Question",
      name: "Can lenders and advisors collaborate securely in one place?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The platform supports secure collaboration for lenders, advisers, and internal credit teams without exposing sensitive materials beyond approved groups.",
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
    { "@type": "ListItem", position: 3, name: "Private Credit", item: "https://spacenexus.net/solutions/private-credit" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SpaceNexus",
  url: "https://spacenexus.net",
  description: "SpaceNexus provides secure virtual data rooms for private credit, distressed debt, CLO, and ESG workflows.",
};

const relatedSolutions = [
  {
    title: "Distressed Debt",
    description: "Support restructuring, creditor coordination, and workout diligence in a controlled workspace.",
    href: "/solutions/distressed-debt",
  },
  {
    title: "CLO Advisory",
    description: "Coordinate structured credit transactions, ratings, and warehouse management with secure document sharing.",
    href: "/solutions/clo-advisory",
  },
  {
    title: "ESG Consulting",
    description: "Manage sustainability reporting, assurance workflows, and stakeholder data collection with the same security model.",
    href: "/solutions/esg-consulting",
  },
];

export default function PrivateCreditPage() {
  return (
    <>
      <Script id="sol-pc-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="private-credit-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="private-credit-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="private-credit-organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <main className="pt-20 lg:pt-24">
        <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <Link href="/features" className="hover:text-[#2563eb] transition-colors">Solutions</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-gray-600">Private Credit</span>
        </nav>
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link href="/features" className="inline-flex items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Solutions
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
                Private Credit
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Data room for private credit origination and portfolio management
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Private credit funds, direct lenders, and portfolio managers use SpaceNexus to coordinate origination, borrower diligence, covenant monitoring, and lender reporting with secure collaboration across internal and external stakeholders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/demo" className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                  Request Private Credit Demo
                </Link>
                <Link href="/solutions/distressed-debt" className="inline-flex items-center px-6 py-3 text-base font-semibold text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-full">
                  Distressed Debt
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Built for private credit deal and portfolio workflows</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Purpose-built for private credit teams</h2>
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
              <h2 className="text-3xl font-bold text-gray-900">See the broader credit and restructuring toolkit</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Run your next private credit process with confidence</h2>
            <p className="text-lg text-gray-600 mb-8">Launch a dedicated credit data room for origination, monitoring, and reporting in under a day.</p>
            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
              Request Private Credit Demo
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
