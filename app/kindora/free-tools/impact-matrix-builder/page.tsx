"use client";

import { useState } from "react";
import Link from "next/link";

const missions = [
  "Food security & hunger relief",
  "Youth development & education",
  "Housing & homelessness",
  "Healthcare access",
  "Environmental conservation",
  "Animal welfare",
];

const emptyRows = ["Inputs", "Activities", "Outputs", "Outcomes", "Impact"];

export default function ImpactMatrixBuilderPage() {
  const [mission, setMission] = useState(missions[0]);
  const [rows, setRows] = useState<Record<string, string>>(
    Object.fromEntries(emptyRows.map((r) => [r, ""]))
  );

  const setRow = (key: string, value: string) =>
    setRows((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4-2v6M12 3l2 2-2 2" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Impact Matrix & Logic Model Builder</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Map your mission into a clean logic model with inputs, activities, outputs, outcomes, and impact — ready for grant proposals and board reports.
          </p>
        </div>

        <div className="mb-6">
          <p className="text-sm font-semibold text-white mb-3">Mission focus</p>
          <div className="flex flex-wrap gap-2">
            {missions.map((m) => (
              <button
                key={m}
                onClick={() => setMission(m)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                  mission === m
                    ? "bg-[#2563eb]/20 border-[#2563eb] text-[#60a5fa]"
                    : "bg-gray-800/60 border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {emptyRows.map((row) => (
            <div key={row} className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/60 border border-gray-700/50">
              <div className="w-28 flex-shrink-0">
                <span className={`text-sm font-semibold ${
                  row === "Impact" ? "text-[#a78bfa]" : row === "Outcomes" ? "text-[#60a5fa]" : "text-gray-300"
                }`}>
                  {row}
                </span>
              </div>
              <textarea
                value={rows[row]}
                onChange={(e) => setRow(row, e.target.value)}
                placeholder={`Describe your ${row.toLowerCase()}...`}
                rows={2}
                className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none resize-none border-b border-gray-700 focus:border-[#60a5fa]"
              />
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2563eb]/15 to-[#7c3aed]/15 border border-blue-500/30 mb-6">
          <h2 className="text-lg font-bold text-white mb-2">Built your impact matrix?</h2>
          <p className="text-sm text-gray-300 mb-4">
            Automate outcome tracking and log real-time program metrics with Kindora&apos;s Impact & Outcome Reporting module.
          </p>
          <Link
            href="/kindora/demo"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
          >
            See Kindora in action
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link href="/kindora/free-tools" className="text-sm text-gray-500 hover:text-gray-300">← All free tools</Link>
        </div>
      </div>
    </div>
  );
}