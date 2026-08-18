"use client";

import { useState } from "react";
import Link from "next/link";

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function SoftwareRoiCalculatorPage() {
  const [hoursWeek, setHoursWeek] = useState("15");
  const [staff, setStaff] = useState("2");
  const [hourlyRate, setHourlyRate] = useState("35");
  const [platformCost, setPlatformCost] = useState("2400");
  const [efficiency, setEfficiency] = useState("30");

  const hrs = parseFloat(hoursWeek || "0");
  const st = parseInt(staff || "0");
  const rate = parseFloat(hourlyRate || "0");
  const cost = parseFloat(platformCost || "0");
  const gain = parseFloat(efficiency || "0") / 100;

  const annualHours = hrs * 52 * st;
  const manualCost = annualHours * rate;
  const hoursRecovered = annualHours * gain;
  const valueRecovered = manualCost * gain;
  const netYear1 = valueRecovered - cost;
  const roi = cost > 0 ? (valueRecovered / cost) * 100 : 0;
  const fiveYearNet = valueRecovered * 5 - cost * 5;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nonprofit Software ROI Calculator</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            See what manual bookkeeping, grant tracking, and donor admin really cost your organization — and what automation could return.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Hours/week on admin per person</span>
            <input
              type="number"
              min="0"
              value={hoursWeek}
              onChange={(e) => setHoursWeek(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Staff doing this work</span>
            <input
              type="number"
              min="0"
              value={staff}
              onChange={(e) => setStaff(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Fully-loaded staff cost ($/hr)</span>
            <input
              type="number"
              min="0"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">New platform cost ($/yr)</span>
            <input
              type="number"
              min="0"
              value={platformCost}
              onChange={(e) => setPlatformCost(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50 sm:col-span-2">
            <span className="text-sm text-gray-400">Expected time saved with automation (%)</span>
            <input
              type="number"
              min="0"
              max="100"
              value={efficiency}
              onChange={(e) => setEfficiency(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
            <span className="text-xs text-gray-500">Most teams report 30-50% time recovery after automating donor, grant, and fund admin.</span>
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <p className="text-sm text-gray-400 mb-2">Annual cost of manual admin</p>
            <p className="text-3xl font-bold text-white">${fmt(manualCost)}</p>
            <p className="text-xs text-gray-500 mt-1">{fmt(annualHours)} staff hours / year</p>
          </div>
          <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30">
            <p className="text-sm text-gray-300 mb-2">Value recovered with automation</p>
            <p className="text-3xl font-bold text-[#60a5fa]">${fmt(valueRecovered)}</p>
            <p className="text-xs text-gray-500 mt-1">{fmt(hoursRecovered)} hours returned to mission</p>
          </div>
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
            <p className="text-sm text-gray-300 mb-2">Net gain — Year 1</p>
            <p className="text-3xl font-bold text-emerald-400">${fmt(netYear1)}</p>
            <p className="text-xs text-gray-500 mt-1">{roi.toFixed(0)}% first-year return</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <p className="text-sm text-gray-400 mb-2">5-year net gain</p>
            <p className="text-3xl font-bold text-white">${fmt(fiveYearNet)}</p>
            <p className="text-xs text-gray-500 mt-1">Assuming steady efficiency</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2563eb]/15 to-[#7c3aed]/15 border border-blue-500/30">
          <h2 className="text-lg font-bold text-white mb-2">Put the hours back into your mission</h2>
          <p className="text-sm text-gray-300 mb-4">
            Kindora automates donor management, grant tracking, fund accounting, and reporting — one platform instead of a stack of spreadsheets.
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