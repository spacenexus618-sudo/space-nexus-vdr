"use client";

import { useState } from "react";
import Link from "next/link";
import { useTrackFirstCalculation } from "@/lib/analytics";
import { toolSchemas } from "../tool-schemas";

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function DonorRetentionCalculatorPage() {
  const [donors, setDonors] = useState("1000");
  const [avgGift, setAvgGift] = useState("100");
  const [acqCost, setAcqCost] = useState("50");
  const [retention, setRetention] = useState("45");

  useTrackFirstCalculation("donor-retention-calculator", donors, avgGift, acqCost, retention);

  const d = parseInt(donors || "0");
  const g = parseFloat(avgGift || "0");
  const a = parseFloat(acqCost || "0");
  const r = parseFloat(retention || "0") / 100;

  const retained = (years: number) => d * Math.pow(r, years);
  const revenueAt = (years: number) => retained(years) * g;
  const optimalRetained = (years: number) => d * Math.pow((r + 0.05) > 1 ? 1 : Math.min(r + 0.05, 1), years);
  const optimalRevenue = (years: number) => optimalRetained(years) * g;
  const lostRevenue = (years: number) => optimalRevenue(years) - revenueAt(years);
  const acqCostYearly = (years: number) => Math.max(0, d - retained(years)) * a / Math.max(1, years);

  return (
      <div className="min-h-screen bg-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchemas["donor-retention-calculator"].webApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchemas["donor-retention-calculator"].faqPage) }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Donor Retention & Churn Calculator</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            See how much revenue donor attrition costs you over 1, 3, and 5 years compared with a 5% retention improvement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Active donors</span>
            <input
              type="number"
              min="0"
              value={donors}
              onChange={(e) => setDonors(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Average annual gift ($)</span>
            <input
              type="number"
              min="0"
              value={avgGift}
              onChange={(e) => setAvgGift(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Donor acquisition cost ($)</span>
            <input
              type="number"
              min="0"
              value={acqCost}
              onChange={(e) => setAcqCost(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Annual retention rate (%)</span>
            <input
              type="number"
              min="0"
              max="100"
              value={retention}
              onChange={(e) => setRetention(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
        </div>

        <div className="space-y-3 mb-6">
          {[1, 3, 5].map((years) => (
            <div key={years} className="grid grid-cols-3 gap-3 text-center">
              <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700/50">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Year {years}</p>
                <p className="text-white font-bold">{retained(years).toFixed(0)} donors</p>
                <p className="text-xs text-gray-500">at {retention}% retention</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Projected revenue</p>
                <p className="text-[#60a5fa] font-bold">${fmt(revenueAt(years))}</p>
                <p className="text-xs text-gray-500">vs ${fmt(optimalRevenue(years))} with +5%</p>
              </div>
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Lost to churn</p>
                <p className="text-red-400 font-bold">-${fmt(lostRevenue(years))}</p>
                <p className="text-xs text-gray-500">+ ${fmt(acqCostYearly(years))} replacement cost</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2563eb]/15 to-[#7c3aed]/15 border border-blue-500/30">
          <h2 className="text-lg font-bold text-white mb-2">Stem the churn</h2>
          <p className="text-sm text-gray-300 mb-4">
            Kindora&apos;s donor CRM tracks engagement scores and automates re-engagement campaigns, so fewer donors slip away each year.
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