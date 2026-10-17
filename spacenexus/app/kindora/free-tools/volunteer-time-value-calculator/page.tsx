"use client";

import { useState } from "react";
import Link from "next/link";
import { useTrackFirstCalculation } from "@/lib/analytics";
import { toolSchemas } from "../tool-schemas";

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function VolunteerTimeValueCalculatorPage() {
  const [hours, setHours] = useState("1000");
  const [volunteers, setVolunteers] = useState("40");
  const [rate, setRate] = useState("36.14");

  useTrackFirstCalculation("volunteer-time-value-calculator", hours, volunteers, rate);

  const h = parseFloat(hours || "0");
  const v = parseInt(volunteers || "0");
  const r = parseFloat(rate || "0");

  const totalValue = h * r;
  const fte = h / 2080;
  const avgPerVolunteer = v > 0 ? totalValue / v : 0;
  const hoursPerVolunteer = v > 0 ? h / v : 0;

  return (
      <div className="min-h-screen bg-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchemas["volunteer-time-value-calculator"].webApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchemas["volunteer-time-value-calculator"].faqPage) }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Value of Volunteer Time Calculator</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Turn volunteer hours into a dollar figure — and a printable impact statement — using Independent Sector&apos;s national hourly value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Volunteer hours (this year)</span>
            <input
              type="number"
              min="0"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Number of volunteers</span>
            <input
              type="number"
              min="0"
              value={volunteers}
              onChange={(e) => setVolunteers(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50 sm:col-span-2">
            <span className="text-sm text-gray-400">Value of one volunteer hour ($/hr)</span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
            <span className="text-xs text-gray-500">Defaults to Independent Sector&apos;s current national value. Adjust to your state or an average wage.</span>
          </label>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30">
            <p className="text-sm text-gray-300 mb-2">Total value</p>
            <p className="text-3xl font-bold text-[#60a5fa]">${fmt(totalValue)}</p>
            <p className="text-xs text-gray-500 mt-1">{fmt(h)} volunteer hours × ${r.toFixed(2)}</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <p className="text-sm text-gray-400 mb-2">Full-time equivalents</p>
            <p className="text-3xl font-bold text-white">{fte.toFixed(1)} FTE</p>
            <p className="text-xs text-gray-500 mt-1">2080 hours = one full-time staff</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <p className="text-sm text-gray-400 mb-2">Per volunteer</p>
            <p className="text-3xl font-bold text-white">${fmt(avgPerVolunteer)}</p>
            <p className="text-xs text-gray-500 mt-1">{hoursPerVolunteer.toFixed(0)} hrs each on average</p>
          </div>
        </div>

        {v > 0 && h > 0 && (
          <div className="p-6 rounded-2xl bg-white mb-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">Impact Statement</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              In the past year, {v.toLocaleString()} volunteers contributed {fmt(h)} hours of service to our mission — equivalent to {fte.toFixed(1)} full-time staff positions and valued at <strong>${fmt(totalValue)}</strong> using Independent Sector&apos;s hourly rate. This generosity multiplied our capacity to serve the community.
            </p>
            <p className="text-xs text-gray-500 mt-3">Copy into your annual report, grant proposals, and board materials. Some foundations request volunteer-hour values for in-kind matching and impact calculations.</p>
          </div>
        )}

        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2563eb]/15 to-[#7c3aed]/15 border border-blue-500/30">
          <h2 className="text-lg font-bold text-white mb-2">Track hours automatically</h2>
          <p className="text-sm text-gray-300 mb-4">
            Kindora&apos;s volunteer management logs every shift and keeps running totals, so this number stays current for your next board report — no manual tallies.
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