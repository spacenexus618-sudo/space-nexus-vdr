import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LastUpdated from "../components/LastUpdated";
import AnswerBlock from "../components/AnswerBlock";

export const metadata: Metadata = {
  title: "Enterprise Virtual Data Room Solutions | SpaceNexus",
  description: "Enterprise-grade virtual data room for Fortune 500 M&A, capital markets, and global deal teams. SOC 2 Type II, ISO 27001, customer-managed keys, 99.9% uptime SLA, and 24/7 dedicated support.",
  alternates: {
    canonical: "https://spacenexus.net/enterprise",
  },
  keywords: [
    "enterprise data room",
    "enterprise virtual data room",
    "enterprise VDR",
    "Fortune 500 data room",
    "enterprise M&A platform",
    "enterprise deal room software",
    "enterprise secure document sharing",
    "enterprise data room solutions",
  ],
  openGraph: {
    title: "Enterprise Virtual Data Room Solutions | SpaceNexus",
    description: "Enterprise-grade VDR for Fortune 500 M&A, capital markets, and global deal teams. SOC 2 Type II, ISO 27001, CMEK, 99.9% uptime SLA.",
    url: "https://spacenexus.net/enterprise",
    type: "website",
  },
};

const trustBadges = [
  { name: "SOC 2 Type II", desc: "Annually audited" },
  { name: "ISO 27001", desc: "Certified ISMS" },
  { name: "GDPR", desc: "EU compliant" },
  { name: "HIPAA", desc: "BAA available" },
  { name: "FedRAMP Ready", desc: "US Gov alignment" },
  { name: "FIPS 140-2", desc: "Validated crypto" },
  { name: "CCPA", desc: "Privacy compliant" },
  { name: "PCI DSS", desc: "Payment ready" },
];

const enterpriseFeatures = [
  {
    title: "Customer-Managed Encryption Keys (CMEK)",
    desc: "Bring your own KMS keys via AWS KMS, Azure Key Vault, or Google Cloud KMS. Full control over data access with cryptographic isolation.",
    icon: "key",
  },
  {
    title: "Single Sign-On (SSO) + SCIM",
    desc: "SAML 2.0 and OpenID Connect with Okta, Azure AD, Google Workspace, Ping, and OneLogin. SCIM auto-provisioning for user lifecycle management.",
    icon: "sso",
  },
  {
    title: "Phishing-Resistant MFA (FIDO2)",
    desc: "Hardware security key enforcement (YubiKey, Titan, Windows Hello). Compliance with Executive Order 14028 and CISA zero-trust mandates.",
    icon: "mfa",
  },
  {
    title: "Data Residency Controls",
    desc: "Pin data to US, EU, UK, APAC, or Middle East regions. GDPR Standard Contractual Clauses and EU-US Data Privacy Framework certified.",
    icon: "globe",
  },
  {
    title: "Dedicated Tenant Option",
    desc: "Single-tenant deployment with isolated infrastructure, custom URL, and dedicated database for the largest enterprises and regulated industries.",
    icon: "tenant",
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Named Customer Success Manager, 30-minute SLA on P1 incidents, dedicated Slack channel, and quarterly business reviews.",
    icon: "support",
  },
  {
    title: "Advanced Audit & Compliance",
    desc: "Immutable audit logs with 7+ year retention, SIEM integration (Splunk, Datadog, Sumo Logic), and pre-built compliance reports for SOC 2, ISO 27001, HIPAA.",
    icon: "audit",
  },
  {
    title: "API & Webhooks",
    desc: "REST and GraphQL APIs for deal room provisioning, user management, document upload, and audit log access. Webhooks for deal-room events.",
    icon: "api",
  },
  {
    title: "Custom SLAs & Uptime Guarantees",
    desc: "99.99% uptime SLA available with financial credits. Active-active multi-region failover with RPO < 5 minutes and RTO < 15 minutes.",
    icon: "sla",
  },
];

const industries = [
  { name: "Investment Banking", href: "/industries/investment-banking", desc: "M&A advisory, capital markets, restructuring" },
  { name: "Private Equity", href: "/industries/private-equity", desc: "Buy-side, portfolio management, LP reporting" },
  { name: "Law Firms", href: "/industries/law-firms", desc: "M&A diligence, litigation discovery, client portals" },
  { name: "Life Sciences", href: "/industries/life-sciences", desc: "Pharma licensing, clinical trial data, FDA Part 11" },
  { name: "Technology", href: "/industries/technology", desc: "Acquisitions, IP transfers, security audits" },
  { name: "Real Estate", href: "/industries/real-estate", desc: "Commercial RE transactions, lease abstracts" },
  { name: "Energy & Infrastructure", href: "/industries/energy-infrastructure", desc: "Project finance, asset divestitures" },
  { name: "Corporate Development", href: "/industries/corporate-development", desc: "Strategic acquisitions, integration" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Enterprise", item: "https://spacenexus.net/enterprise" },
  ],
};

const enterpriseSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise Virtual Data Room",
  description: "Enterprise-grade virtual data room with CMEK, SSO, FIDO2 MFA, data residency, and 99.99% uptime SLA for Fortune 500 M&A, capital markets, and global deal teams.",
  url: "https://spacenexus.net/enterprise",
  serviceType: "Virtual Data Room",
  provider: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Enterprise deal teams, Fortune 500, and regulated industries",
  },
};

export default function EnterprisePage() {
  return (
    <>
      <Script
        id="ent-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="enterprise-schema"
        type="application/ld+json"
      >
        {JSON.stringify(enterpriseSchema)}
      </Script>
      <main className="pt-20 lg:pt-24">
        <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-gray-600">Enterprise</span>
        </nav>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                Enterprise
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Enterprise virtual data room for the world's most demanding deal teams
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Trusted by 500+ enterprises for M&A, capital markets, restructuring, and global due diligence. Bank-grade security, customer-managed keys, dedicated support, and 99.99% uptime SLA.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-7 py-3.5 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
                >
                  Request Enterprise Demo
                </Link>
                <Link
                  href="/security"
                  className="inline-flex items-center px-7 py-3.5 text-base font-semibold text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-full transition-all duration-200"
                >
                  Review Security Architecture
                </Link>
              </div>
            </div>
          </div>
        </section>

        <AnswerBlock text="SpaceNexus Enterprise includes unlimited storage and users, SSO/SAML integration, custom branding and white-label options, API access, dedicated account management, 99.99% SLA uptime guarantee, on-premise deployment options, and 24/7 phone support with compliance reporting." />

        {/* Trust Badges */}
        <section className="py-12 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest text-center mb-8">
              Certified, audited, and aligned with global standards
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex flex-col items-center p-4 rounded-xl border border-gray-200 hover:border-[#2563eb] hover:shadow-md transition-all duration-200 bg-white"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-gray-900 text-center">{badge.name}</p>
                  <p className="text-xs text-gray-600 text-center mt-0.5">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features Grid */}
        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Enterprise-grade capabilities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every feature engineered for the scale, security, and compliance requirements of Fortune 500 deal teams.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Trusted across regulated industries
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Purpose-built workflows for the most demanding enterprise use cases.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((ind) => (
                <Link
                  key={ind.href}
                  href={ind.href}
                  className="group block p-5 rounded-xl border border-gray-200 hover:border-[#2563eb] hover:shadow-md transition-all duration-200 bg-white"
                >
                  <p className="text-base font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                    {ind.name} →
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{ind.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Stats */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-[#2563eb] mb-2">500+</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Enterprise Customers</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-[#2563eb] mb-2">99.99%</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Uptime SLA</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-[#2563eb] mb-2">Multi-Billion</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Deal Value Secured</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-[#2563eb] mb-2">24/7</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Dedicated Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to upgrade to enterprise VDR?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get a personalized demo, security review, and enterprise pricing within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request Enterprise Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-full transition-all duration-200"
              >
                View Enterprise Pricing
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
