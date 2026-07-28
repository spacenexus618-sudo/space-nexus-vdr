import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Structured Q&A Workflow | SpaceNexus",
  description: "Replace email threads with structured Q&A. Category routing, deadline tracking, audit trail, and SLA management.",
  keywords: [
    "Virtual Data Room Q&A",
    "VDR Q&A software",
    "due diligence question management",
    "M&A Q&A platform",
    "deal Q&A management",
    "buyer question tracking",
    "data room Q&A",
  ],
  alternates: {
    canonical: "https://spacenexus.net/features/qa",
  },
  openGraph: {
    title:
      "Structured Q&A Workflow | SpaceNexus",
    description:
      "Replace email threads with structured Q&A. Category routing, deadline tracking, audit t...",
    url: "https://spacenexus.net/features/qa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Virtual Data Room Q&A Software — Due Diligence Questions | SpaceNexus",
    description:
      "Manage due diligence questions in your Virtual Data Room. Status tracking, department categorization, team assignment & audit trails in SpaceNexus VDR.",
  },
};

const features = [
  {
    title: "Centralized Q&A List",
    description:
      "View all questions and answers related to a deal in one place. No more scattered emails or disconnected threads — every diligence question is captured in a single, structured interface.",
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
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
  },
  {
    title: "Status Tracking",
    description:
      "Track every question through its lifecycle with clear status labels — Open, Answered, and Urgent. Instantly identify which items need attention and ensure nothing is left unresolved.",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Department Categorization",
    description:
      "Organize questions by department — Technical, Finance, HR, and Commercial. Route queries to the right team automatically and keep your diligence process structured.",
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
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
  },
  {
    title: "Team & User Assignment",
    description:
      "Assign any question directly to a specific team or individual user. Ownership is clear, accountability is maintained, and response deadlines are never ambiguous.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Direct Question Actions",
    description:
      "Answer, edit, or delete questions directly from the interface without navigating away. Streamlined action controls keep your team moving fast through the diligence checklist.",
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
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    title: "Audit Trail",
    description:
      "Every question, response, edit, and deletion is logged with a timestamp and user record. Generate a complete Q&A history for compliance reviews and post-deal documentation.",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
];

const qaFaqs = [
  {
    question: "What is a virtual data room Q&A module?",
    answer: "A VDR Q&A module is a structured communication tool built into virtual data rooms that allows buyers, investors, and advisors to ask questions about deal documents directly within the platform. Unlike email, Q&A modules provide tracked, auditable threads with automatic notifications and deadline management.",
  },
  {
    question: "How does SpaceNexus Q&A differ from email-based due diligence?",
    answer: "SpaceNexus Q&A replaces scattered email threads with a centralized, searchable workspace. Every question is linked to specific documents, assigned to the right team member, tracked with SLA deadlines, and logged in an immutable audit trail — eliminating the risk of lost or overlooked questions during live deals.",
  },
  {
    question: "Can I set deadlines and SLAs for Q&A responses?",
    answer: "Yes. SpaceNexus lets you set response deadlines for each question or batch of questions. The system sends automatic escalation alerts when deadlines approach, and overdue items are flagged in the dashboard — ensuring no question falls through the cracks during time-sensitive transactions.",
  },
  {
    question: "Is the Q&A module included in all SpaceNexus plans?",
    answer: "Yes, Q&A management is included in all SpaceNexus plans. Starter plans include core Q&A features, while Professional and Enterprise plans add advanced workflows, bulk operations, role-based routing, and custom SLA configurations.",
  },
];

const qaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: qaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function QAPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script
        id="qa-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qaFaqSchema) }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://spacenexus.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Features",
                item: "https://spacenexus.net/features",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Q&A Management",
                item: "https://spacenexus.net/features/qa",
              },
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
                className="inline-flex mr-7 items-center text-sm text-gray-600 hover:text-[#2563eb] mb-6 transition-colors"
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
                Back to Features
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
                Due Diligence Communication
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Virtual Data Room Q&A Management
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                SpaceNexus Virtual Data Room Q&A software enables deal teams to
                manage due diligence questions and responses throughout M&A
                transactions. Track buyer questions, automate seller responses,
                and maintain a complete audit trail — all within your secure VDR.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Centralized list of all questions and answers related to a deal",
                  "Status tracking for Open, Answered, and Urgent questions",
                  "Categorization by departments: Technical, Finance, HR, and Commercial",
                  "Assign questions to specific teams or users",
                  "Answer, edit, or delete questions directly from the interface",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-violet-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
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

            {/* Right: Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-violet-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">
                  app.spacenexus.net / qa
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/vdr-qa.png"
                  alt="SpaceNexus VDR Q&A — due diligence question management interface"
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
              Structured Due Diligence, Start to Finish
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every question tracked, every response accountable, every
              department organized — so your diligence process runs without
              friction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
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
              From Question to Resolution — Without the Back-and-Forth
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Space Nexus replaces scattered diligence emails with a structured
              Q&A workflow that keeps every question visible, assigned, and
              resolved on time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Submit & Categorize",
                description:
                  "Buyers submit questions directly into the platform. Each question is automatically tagged by department (Technical, Finance, HR, Commercial) and marked Open.",
              },
              {
                step: "02",
                title: "Assign & Track",
                description:
                  "Assign questions to the right team or individual. Set priority flags for Urgent items and monitor status across all open questions from a single list.",
              },
              {
                step: "03",
                title: "Answer & Export",
                description:
                  "Respond directly from the interface, edit or delete as needed. Export the full Q&A thread for post-deal documentation and compliance records.",
              },
            ].map((step) => (
              <div key={step.step} className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {step.step.replace("0", "")}
                  </span>
                </div>
                <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-2">
                  Step {step.step}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-12 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-4">
            Explore More Features
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Dashboard — Deal Command Center",
                href: "/features/dashboard",
              },
              {
                title: "Activity & Analytics — Buyer Intelligence",
                href: "/features/activity-analytics",
              },
              {
                title: "Reports — Audit & Compliance",
                href: "/features/reports",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-violet-300 hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-medium text-gray-900 group-hover:text-violet-700 transition-colors">
                  {link.title}
                </p>
                <svg
                  className="w-4 h-4 text-gray-600 group-hover:text-violet-600 transition-colors shrink-0 ml-2"
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Q&A Module FAQ</h2>
            <p className="text-lg text-gray-600">Common questions about SpaceNexus Q&A management.</p>
          </div>
          <div className="space-y-4">
            {qaFaqs.map((faq, i) => (
              <div key={i} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-violet-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See Q&A Management in Action
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a demo and see how Space Nexus replaces scattered
              diligence emails with a structured, trackable Q&A workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <Link
                href="/features"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                View All Features
              </Link>
            </div>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </main>
  );
}
