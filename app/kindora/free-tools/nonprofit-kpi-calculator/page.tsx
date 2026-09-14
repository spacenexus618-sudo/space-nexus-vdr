"use client";

import { useState } from "react";
import Link from "next/link";
import { useTrackFirstCalculation } from "@/lib/analytics";

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });
const pct = (n: number) => `${(n * 100).toFixed(1)}%`;

function Status({ good, ok, label }: { good: boolean; ok?: boolean; label: string }) {
  const tone = good
    ? "text-emerald-400"
    : ok
      ? "text-amber-400"
      : "text-red-400";
  return <span className={`text-xs font-semibold ${tone}`}>{label}</span>;
}

export default function NonprofitKpiCalculatorPage() {
  const [donors, setDonors] = useState("1000");
  const [retained, setRetained] = useState("450");
  const [newDonors, setNewDonors] = useState("200");
  const [revenue, setRevenue] = useState("150000");
  const [gifts, setGifts] = useState("2800");
  const [expenses, setExpenses] = useState("20000");

  useTrackFirstCalculation("nonprofit-kpi-calculator", donors, retained, newDonors, revenue, gifts, expenses);

  const prior = parseInt(donors || "0");
  const ret = parseInt(retained || "0");
  const newD = parseInt(newDonors || "0");
  const rev = parseFloat(revenue || "0");
  const gif = parseInt(gifts || "0");
  const exp = parseFloat(expenses || "0");

  const active = ret + newD;
  const retention = prior > 0 ? ret / prior : 0;
  const netGrowth = prior > 0 ? (active - prior) / prior : 0;
  const avgGift = gif > 0 ? rev / gif : 0;
  const freq = active > 0 ? gif / active : 0;
  const lifespan = retention < 1 ? 1 / (1 - retention) : 0;
  const ltv = retention < 1 ? avgGift * freq * lifespan : 0;
  const costPerDollar = rev > 0 ? exp / rev : 0;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nonprofit KPI Calculator</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Enter six numbers about your fundraising year and get the KPIs boards and grant reviewers actually ask for.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Donors (previous year)</span>
            <input
              type="number"
              min="0"
              value={donors}
              onChange={(e) => setDonors(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Donors retained (gave again)</span>
            <input
              type="number"
              min="0"
              value={retained}
              onChange={(e) => setRetained(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">New donors acquired</span>
            <input
              type="number"
              min="0"
              value={newDonors}
              onChange={(e) => setNewDonors(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Total fundraising revenue ($)</span>
            <input
              type="number"
              min="0"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Number of gifts (transactions)</span>
            <input
              type="number"
              min="0"
              value={gifts}
              onChange={(e) => setGifts(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Fundraising expenses ($)</span>
            <input
              type="number"
              min="0"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
        </div>

        <h2 className="text-lg font-bold text-white mb-4">Your KPI Scorecard</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Donor retention rate</p>
              <Status good={retention >= 0.6} ok={retention >= 0.4} label={retention >= 0.6 ? "Strong" : retention >= 0.4 ? "Average" : "At risk"} />
            </div>
            <p className="text-3xl font-bold text-white">{pct(retention)}</p>
            <p className="text-xs text-gray-500 mt-1">Benchmark: 40-50% typical · 60%+ strong</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Net donor growth</p>
              <Status good={netGrowth >= 0.05} ok={netGrowth >= 0} label={netGrowth >= 0.05 ? "Growing" : netGrowth >= 0 ? "Flat" : "Shrinking"} />
            </div>
            <p className="text-3xl font-bold text-white">{pct(netGrowth)}</p>
            <p className="text-xs text-gray-500 mt-1">Year over year change in active donors</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <p className="text-sm text-gray-400 mb-2">Average gift size</p>
            <p className="text-3xl font-bold text-white">${fmt(avgGift)}</p>
            <p className="text-xs text-gray-500 mt-1">Revenue ÷ number of gifts</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <p className="text-sm text-gray-400 mb-2">Gift frequency / donor</p>
            <p className="text-3xl font-bold text-white">{freq.toFixed(1)}</p>
            <p className="text-xs text-gray-500 mt-1">Gifts ÷ active donors per year</p>
          </div>
          <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30">
            <p className="text-sm text-gray-300 mb-2">Donor lifetime value (LTV)</p>
            <p className="text-3xl font-bold text-[#60a5fa]">${fmt(ltv)}</p>
            <p className="text-xs text-gray-500 mt-1">Avg gift × frequency ÷ attrition rate</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Cost per $1 raised</p>
              <Status good={costPerDollar <= 0.15} ok={costPerDollar <= 0.25} label={costPerDollar <= 0.15 ? "Efficient" : costPerDollar <= 0.25 ? "Healthy" : "Review"} />
            </div>
            <p className="text-3xl font-bold text-white">${costPerDollar.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-1">Fundraising expenses ÷ revenue</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2563eb]/15 to-[#7c3aed]/15 border border-blue-500/30">
          <h2 className="text-lg font-bold text-white mb-2">Track these KPIs automatically</h2>
          <p className="text-sm text-gray-300 mb-4">
            Kindora computes retention, LTV, and cost-per-dollar for you from your live donor and fund data — no spreadsheets, board-ready every month.
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