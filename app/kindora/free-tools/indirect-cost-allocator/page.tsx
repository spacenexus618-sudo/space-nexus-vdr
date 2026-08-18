"use client";

import { useState } from "react";
import Link from "next/link";

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function IndirectCostAllocatorPage() {
  const [direct, setDirect] = useState("50000");
  const [personnel, setPersonnel] = useState("20000");
  const [subawards, setSubawards] = useState("10000");
  const [rate, setRate] = useState("10");

  const d = parseFloat(direct || "0");
  const p = parseFloat(personnel || "0");
  const s = parseFloat(subawards || "0");
  const r = parseFloat(rate || "0") / 100;

  const mtdcBase = Math.max(0, d - p - s);
  const indirect = mtdcBase * r;
  const total = d + indirect;

  const programSplit = total * 0.7;
  const adminSplit = total * 0.2;
  const fundraisingSplit = total * 0.1;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Grant Indirect Cost (MTDC) Allocator</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Split direct vs. indirect costs under the Modified Total Direct Cost methodology and see a Form 990-style functional expense breakdown.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Total direct costs ($)</span>
            <input
              type="number" min="0" value={direct}
              onChange={(e) => setDirect(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Personnel (excluded from MTDC base) ($)</span>
            <input
              type="number" min="0" value={personnel}
              onChange={(e) => setPersonnel(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Subawards / equipment (excluded) ($)</span>
            <input
              type="number" min="0" value={subawards}
              onChange={(e) => setSubawards(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Indirect cost rate (%)</span>
            <input
              type="number" min="0" max="100" value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6 text-center">
          <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700/50">
            <p className="text-xs text-gray-500 uppercase tracking-wider">MTDC Base</p>
            <p className="text-white font-bold">${fmt(mtdcBase)}</p>
          </div>
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <p className="text-xs text-gray-400 uppercase tracking-wider">Indirect Cost</p>
            <p className="text-[#60a5fa] font-bold">${fmt(indirect)}</p>
            <p className="text-xs text-gray-500">at {rate}%</p>
          </div>
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
            <p className="text-xs text-gray-400 uppercase tracking-wider">Total Award</p>
            <p className="text-green-400 font-bold">${fmt(total)}</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gray-800/60 border border-gray-700/50 mb-6">
          <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Form 990 Functional Expense Split</h2>
          <div className="space-y-3">
            {[
              { label: "Program Services", value: programSplit, color: "bg-[#2563eb]" },
              { label: "Management & General", value: adminSplit, color: "bg-[#7c3aed]" },
              { label: "Fundraising", value: fundraisingSplit, color: "bg-[#0ea5e9]" },
            ].map((row) => (
              <div key={row.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">{row.label}</span>
                  <span className="text-white font-semibold">${fmt(row.value)}</span>
                </div>
                <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
                  <div
                    className={`h-full ${row.color} rounded-full`}
                    style={{ width: `${Math.min(100, (row.value / Math.max(1, total)) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2563eb]/15 to-[#7c3aed]/15 border border-blue-500/30">
          <h2 className="text-lg font-bold text-white mb-2">Tired of manual budget spreadsheets?</h2>
          <p className="text-sm text-gray-300 mb-4">
            Import your allocated budget directly into Kindora to automate real-time grant tracking and financial reporting.
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