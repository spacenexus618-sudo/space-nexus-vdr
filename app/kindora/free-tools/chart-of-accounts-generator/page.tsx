"use client";

import { useState } from "react";
import Link from "next/link";

const sectors: Record<string, string[]> = {
  "Food Bank": ["4000 Food & Grocery Distribution", "4100 Client Pantry Operations", "4200 Procurement & Logistics", "4300 Volunteer Coordination"],
  "Youth Services": ["4000 Youth Programming", "4100 Education & Tutoring", "4200 Mentorship Services", "4300 Youth Mental Health"],
  "Animal Shelter": ["4000 Animal Care", "4100 Veterinary Services", "4200 Shelter Operations", "4300 Adoption Programs"],
  Healthcare: ["4000 Patient Services", "4100 Clinical Programs", "4200 Community Health Outreach", "4300 Patient Assistance"],
  Education: ["4000 Instruction & Programs", "4100 Curriculum Development", "4200 Student Support", "4300 Scholarships & Aid"],
  "Housing & Homelessness": ["4000 Housing Assistance", "4100 Shelter Operations", "4200 Case Management", "4300 Rapid Rehousing"],
  "Religious / Faith-Based": ["4000 Ministry Programming", "4100 Community Outreach", "4200 Worship & Congregation", "4300 Mission Work"],
  "Arts & Culture": ["4000 Program & Exhibitions", "4100 Education & Access", "4200 Productions & Events", "4300 Outreach & Engagement"],
};

const budgetSizes = ["< $250K", "$250K - $1M", "$1M - $5M", "> $5M"];

export default function ChartOfAccountsGeneratorPage() {
  const [sector, setSector] = useState("Food Bank");
  const [budget, setBudget] = useState("$250K - $1M");
  const [digits, setDigits] = useState("4");

  const generated = sectors[sector] ?? sectors["Food Bank"];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18M3 18h18M8 6v12M13 6v12M18 6v12" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nonprofit Chart of Accounts Generator</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Pick your sector and budget size to get a standardized {digits}-digit chart of accounts tailored to Form 990 fund accounting.
          </p>
        </div>

        <div className="space-y-6 mb-6">
          <div>
            <p className="text-sm font-semibold text-white mb-3">1. What is your nonprofit sector?</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(sectors).map((s) => (
                <button
                  key={s}
                  onClick={() => setSector(s)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                    sector === s
                      ? "bg-[#2563eb]/20 border-[#2563eb] text-[#60a5fa]"
                      : "bg-gray-800/60 border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-3">2. Annual operating budget</p>
            <div className="flex flex-wrap gap-2">
              {budgetSizes.map((b) => (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                    budget === b
                      ? "bg-[#2563eb]/20 border-[#2563eb] text-[#60a5fa]"
                      : "bg-gray-800/60 border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-3">3. Account number length</p>
            <div className="flex gap-2">
              {["4", "5"].map((d) => (
                <button
                  key={d}
                  onClick={() => setDigits(d)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                    digits === d
                      ? "bg-[#2563eb]/20 border-[#2563eb] text-[#60a5fa]"
                      : "bg-gray-800/60 border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                  }`}
                >
                  {d}-digit
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gray-800/60 border border-gray-700/50 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Generated Structure</h2>
            <span className="text-xs text-gray-500">{sector} • {budget}</span>
          </div>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between text-gray-500 border-b border-gray-700 pb-2">
              <span>ACCOUNT</span><span>DESCRIPTION</span>
            </div>
            <div className="flex justify-between text-gray-300"><span>1000-{digits === "4" ? "1999" : "10999"}</span><span>Assets & Cash</span></div>
            <div className="flex justify-between text-gray-300"><span>2000-{digits === "4" ? "2999" : "20999"}</span><span>Liabilities & Deferred Revenue</span></div>
            <div className="flex justify-between text-gray-300"><span>3000-{digits === "4" ? "3999" : "30999"}</span><span>Net Assets (Restricted / Unrestricted)</span></div>
            <div className="flex justify-between text-gray-300"><span>4000-{digits === "4" ? "4999" : "40999"}</span><span>Revenue & Contributions</span></div>
            {generated.map((g) => (
              <div key={g} className="flex justify-between text-[#60a5fa]"><span>{digits === "4" ? g.slice(0, 4) : g.slice(0, 5)}*</span><span>{g}</span></div>
            ))}
            <div className="flex justify-between text-gray-300"><span>{digits === "4" ? "9000" : "90999"}</span><span>Other Expense / Contra</span></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => {
              const lines = [
                "Kindora Chart of Accounts",
                `${sector} • ${budget} • ${digits}-digit`,
                "",
                "1000-1999 Assets & Cash",
                "2000-2999 Liabilities & Deferred Revenue",
                "3000-3999 Net Assets",
                "4000-4999 Revenue & Contributions",
                ...generated.map((g) => g),
                "9000 Other Expense / Contra",
              ];
              const blob = new Blob([lines.join("\n")], { type: "text/csv" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "kindora-chart-of-accounts.csv";
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
          >
            Download CSV
          </button>
          <Link
            href="/kindora/demo"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-[#60a5fa] bg-blue-500/10 hover:bg-blue-500/20 rounded-full transition-all duration-300"
          >
            1-Click Import into Kindora
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link href="/kindora/free-tools" className="text-sm text-gray-500 hover:text-gray-300">← All free tools</Link>
        </div>
      </div>
    </div>
  );
}