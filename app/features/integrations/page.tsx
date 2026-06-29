import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VDR Integrations | SpaceNexus",
  description: "Native integrations with Slack, Microsoft 365, Salesforce, and SSO providers including Okta and Azure AD.",
  alternates: {
    canonical: "https://spacenexus.net/features/integrations",
  },
  openGraph: {
    title: "VDR Integrations | SpaceNexus",
    description:
      "Native integrations with Slack, Microsoft 365, Salesforce, and SSO providers including ...",
    url: "https://spacenexus.net/features/integrations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrations — Connect Cloud Storage, CRM & E-Signature Tools | Space Nexus VDR",
    description:
      "Connect cloud storage, CRM, e-signature, and SSO tools to Space Nexus — managed from a single integrations interface.",
  },
};

const features = [
  {
    title: "Cloud Storage Sync",
    description:
      "Sync documents directly with cloud storage platforms including Google Drive and Box. Keep your data room content aligned with existing storage workflows without manual file transfers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "E-Signature Platforms",
    description:
      "Enable secure document signing directly from the data room with e-signature integrations including Adobe Sign. Send, track, and collect signatures without leaving the Space Nexus platform.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "CRM Integration",
    description:
      "Integrate with CRM systems such as Salesforce to manage deal information and counterparty data. Keep your deal pipeline in sync between Space Nexus and your CRM without duplicate data entry.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Identity & SSO",
    description:
      "Enable Identity & SSO services for secure authentication. Allow users to log in with their existing enterprise credentials — reducing friction while maintaining strong access controls.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: "Centralized Integration Management",
    description:
      "View, connect, or disconnect all integrations from one centralized interface. Monitor active connections, manage credentials, and control which tools have access to your Space Nexus environment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    description:
      "Improve collaboration and workflow efficiency by connecting Space Nexus with the tools your team already uses. Reduce manual steps between platforms and keep all deal activity synchronized.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function IntegrationsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
              { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
              { "@type": "ListItem", position: 3, name: "Integrations", item: "https://spacenexus.net/features/integrations" },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <Link
                href="/features"
                className="inline-flex mr-7 items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Features
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
                Platform Connectivity
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Integrations
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Integrations section allows users to connect the platform with external services to
                improve workflow and collaboration. It enables seamless integration with cloud storage,
                CRM systems, e-signature platforms, and identity management tools.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Connect with tools such as Google Drive, Salesforce, Box, and Adobe Sign",
                  "Support for e-signature integrations for secure document signing",
                  "Sync documents with cloud storage platforms",
                  "Integrate with CRM systems to manage deal information",
                  "Enable Identity & SSO services for secure authentication",
                  "View, connect, or disconnect integrations from a centralized interface",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
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

            {/* Right: Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.spacenexus.net / integrations
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/integration.jpeg"
                  alt="Space Nexus VDR Integrations — connected tools and services overview"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Connect the Tools Your Team Already Uses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Space Nexus integrates with the platforms that power your deal workflows — so your
              team can collaborate without switching between systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Integrations Screenshot */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Available Integrations</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Browse and connect the full library of available integrations — all managed from one central interface.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                app.spacenexus.net / integrations / available
              </div>
            </div>
            <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-xl shadow-gray-900/10">
              <img
                src="/spacenexus/screenshots/avilabe%20integratoins.jpeg"
                alt="Space Nexus VDR available integrations — full library of connectable tools"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Connect Your Ecosystem in Minutes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Space Nexus integrations are designed to be simple to configure and easy to manage —
              so your team spends less time on setup and more time closing deals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Browse Available Integrations",
                description:
                  "Explore the full library of available integrations — cloud storage, CRM, e-signature, and identity management tools — all listed in one place.",
              },
              {
                step: "02",
                title: "Connect Your Tools",
                description:
                  "Authorize and configure your preferred integrations with a few clicks. Set up document syncs, CRM connections, or SSO in minutes without technical expertise.",
              },
              {
                step: "03",
                title: "Manage from One Interface",
                description:
                  "View all active integrations from the central management interface. Monitor connection status, update credentials, or disconnect tools whenever needed.",
              },
            ].map((step) => (
              <div key={step.step} className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.step.replace("0", "")}</span>
                </div>
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                  Step {step.step}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-4">
            Explore More Features
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Security & Compliance — Enterprise Protection", href: "/features/security-compliance" },
              { title: "Users & Permissions — Access Control", href: "/features/users-permissions" },
              { title: "Billing & Plans — Subscription Management", href: "/features/billing-plans" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-5 bg-[#f8f9fa] border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {link.title}
                </p>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-indigo-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See Integrations in Action
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo and see how Space Nexus connects with your existing
              tools — from cloud storage and CRM to e-signature and SSO.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                View All Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
