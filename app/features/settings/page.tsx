import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings & Administration | SpaceNexus",
  description: "Workspace settings, security policies, branding, and admin controls. Configure SpaceNexus for your team.",
  keywords: [
    "VDR settings",
    "data room administration",
    "workspace configuration VDR",
    "VDR admin controls",
    "data room security policies",
  ],
  alternates: {
    canonical: "https://spacenexus.net/features/settings",
  },
  openGraph: {
    title: "Settings & Administration | SpaceNexus",
    description:
      "Workspace settings, security policies, branding, and admin controls. Configure SpaceNex...",
    url: "https://spacenexus.net/features/settings",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrated Trackers — Deal Progress & Engagement Monitoring | Space Nexus VDR",
    description:
      "Monitor deal stages, project completion, buyer engagement, and Q&A activity across departments with Space Nexus Integrated Trackers.",
  },
};

const features = [
  {
    title: "Deal Progress Tracking",
    description:
      "Track overall deal progress across different stages in real time. Get a clear view of where each transaction stands — from initial discovery through due diligence, negotiation, and close.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Project Completion Status",
    description:
      "Monitor project completion percentages, in-progress tasks, and overdue items at a glance. Identify bottlenecks early and keep all workstreams aligned with deal timelines.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Engagement Metrics",
    description:
      "View key engagement metrics including total views, unique viewers, and time spent on documents. Understand how actively buyers and counterparties are engaging with your data room.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Most Viewed Documents",
    description:
      "Identify which documents are receiving the most attention during the transaction process. Surface high-interest files to understand buyer focus and anticipate follow-up questions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Q&A Activity Tracking",
    description:
      "Track Q&A activity across departments such as Legal, Finance, HR, and Tax. Monitor open questions, response times, and department workloads to keep due diligence moving forward.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Deal Milestones Overview",
    description:
      "Get a centralized view of deal milestones and collaboration activity. Keep all stakeholders aligned on progress, flag delays before they escalate, and maintain full visibility across every workstream.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do workspace settings work in SpaceNexus?",
      acceptedAnswer: { "@type": "Answer", text: "SpaceNexus workspace settings provide centralized control over your account configuration, including branding customization, security policies, user management, notification preferences, and integration management. Administrators can configure global settings that apply across all deals in the workspace." },
    },
    {
      "@type": "Question",
      name: "Can I customize my VDR branding?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Enterprise plans include white-label branding options. You can customize the data room with your organization's logo, color scheme, and branded login page, presenting a professional, consistent experience to buyers, investors, and counterparties." },
    },
    {
      "@type": "Question",
      name: "What security policies can I configure?",
      acceptedAnswer: { "@type": "Answer", text: "SpaceNexus administrators can configure IP whitelisting, geo-based access restrictions, session timeout policies, multi-factor authentication requirements, device management policies, and password complexity rules. These enterprise-grade security controls ensure your data room meets your organization's compliance requirements." },
    },
    {
      "@type": "Question",
      name: "How do admin controls work for managing team access?",
      acceptedAnswer: { "@type": "Answer", text: "Administrators can manage team members, assign roles, set permissions, and control access to individual deals from the settings interface. Bulk user management, audit log access, and billing controls are also centralized in the admin panel, giving IT and compliance teams full oversight." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
    { "@type": "ListItem", position: 3, name: "Settings & Administration", item: "https://spacenexus.net/features/settings" },
  ],
};

export default function SettingsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script
        id="settings-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
              { "@type": "ListItem", position: 3, name: "Integrated Trackers", item: "https://spacenexus.net/features/settings" },
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                Deal Monitoring
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Integrated Trackers
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Integrated Trackers section helps teams monitor deal progress, engagement metrics,
                and Q&A activity within ongoing transactions. It provides real-time tracking of milestones
                and performance indicators to ensure smooth deal management.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Track overall deal progress across different stages",
                  "Monitor project completion, in-progress tasks, and overdue items",
                  "View engagement metrics such as views, unique viewers, and time spent",
                  "Identify most viewed documents during the transaction process",
                  "Track Q&A activity across departments like Legal, Finance, HR, and Tax",
                  "Get a centralized overview of deal milestones and collaboration activity",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="absolute -inset-4 bg-amber-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.spacenexus.net / trackers
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/integrated%20traks.jpeg"
                  alt="SpaceNexus VDR Integrated Trackers — deal progress and engagement monitoring"
                  className="w-full h-auto"
                  loading="lazy"
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
              Full Visibility Across Every Deal Workstream
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From deal stage progress to document engagement and Q&A across departments —
              Integrated Trackers keep your entire deal team informed and aligned in real time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
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
              Keep Every Deal on Track
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Space Nexus Integrated Trackers give deal teams a live pulse on progress, engagement,
              and activity — so nothing falls through the cracks during a complex transaction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Monitor Deal Progress",
                description:
                  "View deal stages and project completion status at a glance. Track what's done, what's in progress, and what's overdue across all active transactions.",
              },
              {
                step: "02",
                title: "Track Engagement",
                description:
                  "See which buyers are most active, which documents are getting attention, and how time is being spent — with engagement metrics updated in real time.",
              },
              {
                step: "03",
                title: "Manage Q&A Activity",
                description:
                  "Monitor Q&A volume across Legal, Finance, HR, and Tax. Track response times across departments and identify areas where the deal needs more attention.",
              },
            ].map((step) => (
              <div key={step.step} className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.step.replace("0", "")}</span>
                </div>
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
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
          <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-4">
            Explore More Features
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Activity & Analytics — Buyer Intelligence", href: "/features/activity-analytics" },
              { title: "Q&A Management — Due Diligence Questions", href: "/features/qa" },
              { title: "Dashboard — Deal Command Center", href: "/features/dashboard" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-amber-300 hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                  {link.title}
                </p>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12 border border-amber-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See Integrated Trackers in Action
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo and see how Space Nexus keeps your deal team
              aligned with real-time tracking of progress, engagement, and Q&A activity.
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
