import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Nonprofit Tools by Kindora",
  description: "Free nonprofit tools built by Kindora: grant readiness scorecard, donor retention calculator, KPI calculator, donation receipt generator, indirect cost allocator, chart of accounts generator, and more.",
  keywords: [
    "free nonprofit tools",
    "nonprofit calculators",
    "grant readiness tool",
    "donor retention calculator",
    "nonprofit chart of accounts generator",
    "grant indirect cost tool",
  ],
  alternates: {
    canonical: "/kindora/free-tools",
  },
};

const tools = [
  {
    name: "Grant Readiness & Compliance Scorecard",
    href: "/kindora/free-tools/grant-readiness-scorecard",
    description: "Answer 10 quick questions and get a 0-100% grant readiness score plus missing compliance policies flagged.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    name: "Donor Retention & Churn Calculator",
    href: "/kindora/free-tools/donor-retention-calculator",
    description: "See how much revenue donor attrition costs you over 1, 3, and 5 years versus a 5% retention lift.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
  {
    name: "Grant Indirect Cost (MTDC) Allocator",
    href: "/kindora/free-tools/indirect-cost-allocator",
    description: "Split direct vs. indirect grant costs and generate Form 990-compliant functional expense allocations.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    name: "Nonprofit Chart of Accounts Generator",
    href: "/kindora/free-tools/chart-of-accounts-generator",
    description: "Generate a sector-tailored 4- or 5-digit chart of accounts structure built for Form 990 reporting.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6h18M3 12h18M3 18h18M8 6v12M13 6v12" />
    ),
  },
  {
    name: "Impact Matrix & Logic Model Builder",
    href: "/kindora/free-tools/impact-matrix-builder",
    description: "Map inputs, activities, outputs, and outcomes into a presentation-ready logic model PDF.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4-2v6M12 3l2 2-2 2" />
    ),
  },
  {
    name: "Nonprofit KPI Calculator",
    href: "/kindora/free-tools/nonprofit-kpi-calculator",
    description: "Compute the KPIs boards and grant reviewers ask for: retention, LTV, gift frequency, and cost per dollar raised.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    name: "Donation Receipt Generator",
    href: "/kindora/free-tools/donation-receipt-generator",
    description: "Generate an IRS-compliant 501(c)(3) contribution receipt, including quid pro quo disclosure.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13l-3 3m0 0l-3-3m3 3V8m6 13H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z" />
    ),
  },
  {
    name: "Value of Volunteer Time Calculator",
    href: "/kindora/free-tools/volunteer-time-value-calculator",
    description: "Turn volunteer hours into a dollar value and printable impact statement using Independent Sector rates.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    name: "Nonprofit Software ROI Calculator",
    href: "/kindora/free-tools/nonprofit-software-roi-calculator",
    description: "See what manual donor, grant, and fund admin costs you — and what automation could return to mission.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#60a5fa] uppercase tracking-widest mb-3">Free Online Tools</p>
          <h1 className="text-4xl font-bold text-white mb-4">Free Nonprofit Tools</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Practical calculators and generators built for the teams that run nonprofits every day. No sign-up required — just pick a tool and start.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col p-6 rounded-2xl bg-gray-800/60 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {tool.icon}
                  </svg>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                  Free
                </span>
              </div>
              <div className="min-w-0">
                <span className="text-white font-semibold group-hover:text-[#60a5fa] transition-colors">{tool.name}</span>
                <p className="text-sm text-gray-400 mt-2">{tool.description}</p>
              </div>
              <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#60a5fa]">
                Launch Tool
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gray-800/60 border border-gray-700/50 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Need more than a calculator?</h2>
          <p className="text-sm text-gray-400 mb-5 max-w-xl mx-auto">
            Every tool points to a Kindora module, but the full platform goes further — donor CRM, grant tracking, fund accounting, and impact reporting in one system.
          </p>
          <Link
            href="/kindora/demo"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            See Kindora in action
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link href="/kindora" className="text-sm text-gray-500 hover:text-gray-300">← Back to Kindora home</Link>
        </div>
      </div>
    </div>
  );
}