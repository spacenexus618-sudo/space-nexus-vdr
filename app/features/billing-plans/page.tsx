import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing & Plans | SpaceNexus",
  description: "Transparent flat-rate pricing for VDR. No per-page fees, no hidden overages. Self-serve or enterprise plans.",
  alternates: {
    canonical: "https://spacenexus.net/features/billing-plans",
  },
  openGraph: {
    title: "Billing & Plans | SpaceNexus",
    description:
      "Transparent flat-rate pricing for VDR. No per-page fees, no hidden overages. Self-serve...",
    url: "https://spacenexus.net/features/billing-plans",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billing & Plans — Subscription Management & Usage Tracking | Space Nexus VDR",
    description:
      "Clear plan overview, usage monitoring, invoice access, and subscription management — everything your team needs to stay on top of billing.",
  },
};

const features = [
  {
    title: "Current Plan Overview",
    description:
      "View a clear summary of your active subscription plan, including pricing, included features, and renewal dates. Understand exactly what your plan covers so there are no surprises at billing time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Usage Monitoring",
    description:
      "Monitor key usage metrics in real time — active deals, storage consumed, and team members added. Track how your resource usage compares to your subscription limits at any point in the billing cycle.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Invoice Access",
    description:
      "Access and download all billing invoices directly from the platform. Keep your finance team supplied with the documentation they need without submitting support requests for historical invoices.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Monthly Usage Tracking",
    description:
      "Track your monthly resource consumption against subscription limits. See usage trends over time to anticipate when an upgrade may be needed before limits are reached.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Plan Upgrades",
    description:
      "Manage plan upgrades directly from the billing interface. Scale your subscription to match growing deal volume, larger teams, or higher storage requirements without interrupting active transactions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
      </svg>
    ),
  },
  {
    title: "Payment Method Management",
    description:
      "Update and manage payment methods securely within the platform. Keep billing information current and ensure uninterrupted access to your data room and all active deals.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

export default function BillingPlansPage() {
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
              { "@type": "ListItem", position: 3, name: "Billing & Plans", item: "https://spacenexus.net/features/billing-plans" },
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                Subscription Management
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Billing & Plans
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Billing & Plans section allows users to manage their subscription, monitor usage,
                and view payment details. It provides a clear overview of the current plan, resource
                usage, and billing history within the platform.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "View details of the current subscription plan and pricing",
                  "Monitor usage metrics such as active deals, storage usage, and team members",
                  "Access and download billing invoices",
                  "Track monthly usage and subscription limits",
                  "Manage plan upgrades and payment methods",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="absolute -inset-4 bg-green-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.spacenexus.net / billing
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/billing%20plans.jpeg"
                  alt="Space Nexus VDR Billing & Plans — subscription management interface"
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
              Complete Visibility into Your Subscription
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Monitor what you use, manage how you pay, and scale your plan as your deal
              volume grows — all from a single, transparent billing interface.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subscription Management Made Simple
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No hidden fees. No surprises. Space Nexus gives you full transparency into
              your plan, usage, and billing — so your team can focus on closing deals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Review Your Plan",
                description:
                  "See your current plan details, pricing, and included features at a glance. Understand exactly what you have access to and when your subscription renews.",
              },
              {
                step: "02",
                title: "Track Usage",
                description:
                  "Monitor active deals, storage, and team member counts against your subscription limits. Identify when you're approaching capacity before it impacts your operations.",
              },
              {
                step: "03",
                title: "Manage & Upgrade",
                description:
                  "Access invoices, update payment methods, and upgrade your plan directly from the billing interface — without contacting support for routine subscription tasks.",
              },
            ].map((step) => (
              <div key={step.step} className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.step.replace("0", "")}</span>
                </div>
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-2">
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
      <section className="py-12 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-4">
            Explore More Features
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Security & Compliance — Enterprise Protection", href: "/features/security-compliance" },
              { title: "Users & Permissions — Access Control", href: "/features/users-permissions" },
              { title: "Integrations — Connect Your Tools", href: "/features/integrations" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                  {link.title}
                </p>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border border-green-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Find the Right Plan for Your Team
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo and learn how Space Nexus pricing scales with
              your deal volume — from single transactions to enterprise portfolios.
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
