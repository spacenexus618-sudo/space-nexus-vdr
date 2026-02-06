import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Q&A - Due Diligence Communication | Space Nexus",
  description:
    "Streamline due diligence communication with centralized question management, role-based visibility, and controlled answer publishing.",
  alternates: {
    canonical: "/features/qa",
  },
};

const features = [
  {
    title: "Centralized Question Management",
    description: "All questions in one place. Track status, assign owners, and ensure nothing falls through the cracks during due diligence.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: "Role-Based Visibility",
    description: "Control who sees what. Buyers, sellers, and advisors each see only the questions and answers relevant to their role.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Question Categorization",
    description: "Organize questions by category—Legal, Finance, HR, Tax, Operations—for efficient routing and response management.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: "Controlled Publishing",
    description: "Draft, review, and approve answers before publishing. Maintain quality control with multi-level approval workflows.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Audit Trail",
    description: "Every question, answer, and interaction is logged. Generate compliance reports with complete Q&A history.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Notifications & Reminders",
    description: "Automatic alerts for new questions, pending responses, and approaching deadlines keep everyone on track.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

export default function QAPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/features"
                className="inline-flex items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Features
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
                Due Diligence Communication
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Q&A Module
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ensures a clear, auditable diligence process. Centralize all buyer questions, 
                manage responses efficiently, and maintain complete control over what information 
                is shared and when.
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
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Active Questions</h3>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">5 Pending</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">12 Answered</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { q: "Revenue recognition policy?", cat: "Finance", status: "Pending" },
                    { q: "IP ownership documentation?", cat: "Legal", status: "Answered" },
                    { q: "Employee benefit details?", cat: "HR", status: "Pending" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-[#f8f9fa] rounded-xl">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm text-gray-700">{item.q}</p>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${item.status === "Pending" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"}`}>
                          {item.status}
                        </span>
                      </div>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-violet-100 text-violet-700 text-xs rounded-full">{item.cat}</span>
                    </div>
                  ))}
                </div>
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
              Streamlined Due Diligence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every feature designed to accelerate your Q&A process.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Streamline Your Q&A Process?
          </h2>
          <p className="text-gray-600 mb-8">
            See how Space Nexus Q&A can accelerate your due diligence.
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
    </main>
  );
}
