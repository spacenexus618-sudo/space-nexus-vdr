"use client";

import { useState } from "react";
import Link from "next/link";

const fmtMoney = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtDate = (iso: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  return isNaN(d.getTime()) ? iso : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

export default function DonationReceiptGeneratorPage() {
  const [orgName, setOrgName] = useState("");
  const [orgAddress, setOrgAddress] = useState("");
  const [ein, setEin] = useState("");
  const [donorName, setDonorName] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Credit card");
  const [dateRaw, setDateRaw] = useState("");
  const [exchange, setExchange] = useState(false);
  const [fmv, setFmv] = useState("0");

  const amt = parseFloat(amount || "0");
  const fairValue = exchange ? parseFloat(fmv || "0") : 0;
  const deductible = Math.max(0, amt - fairValue);
  const receiptNo = `KND-${new Date().getFullYear()}${Math.floor(1000 + Math.random() * 9000)}`;

  const ready = orgName.length > 0 && donorName.length > 0 && amt > 0 && dateRaw.length > 0;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m6 13H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Donation Receipt Generator</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Generate an IRS-compliant 501(c)(3) contribution receipt — including quid pro quo disclosure when donors receive something in return.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50 sm:col-span-2">
            <span className="text-sm text-gray-400">Your organization name</span>
            <input
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="mt-1 w-full bg-transparent text-xl font-semibold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
              placeholder="Community Food Bank"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Organization address</span>
            <input
              type="text"
              value={orgAddress}
              onChange={(e) => setOrgAddress(e.target.value)}
              className="mt-1 w-full bg-transparent text-lg font-semibold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
              placeholder="123 Main St, Anytown, USA"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">EIN (optional)</span>
            <input
              type="text"
              value={ein}
              onChange={(e) => setEin(e.target.value)}
              className="mt-1 w-full bg-transparent text-lg font-semibold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
              placeholder="00-0000000"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Donor name</span>
            <input
              type="text"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="mt-1 w-full bg-transparent text-lg font-semibold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
              placeholder="Jane Doe"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Donation amount ($)</span>
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 w-full bg-transparent text-lg font-semibold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
              placeholder="250"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Date of contribution</span>
            <input
              type="date"
              value={dateRaw}
              onChange={(e) => setDateRaw(e.target.value)}
              className="mt-1 w-full bg-gray-800 text-lg font-semibold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            />
          </label>
          <label className="block p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
            <span className="text-sm text-gray-400">Form of contribution</span>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="mt-1 w-full bg-gray-800 text-lg font-semibold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
            >
              <option>Credit card</option>
              <option>Check</option>
              <option>Cash</option>
              <option>Online</option>
              <option>ACH / Bank transfer</option>
            </select>
          </label>
          <label className="flex items-center gap-3 p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50 sm:col-span-2">
            <input type="checkbox" checked={exchange} onChange={(e) => setExchange(e.target.checked)} className="w-5 h-5 accent-[#2563eb]" />
            <span className="text-sm text-gray-300">Donor received goods/services in exchange (e.g., event ticket, gift)</span>
          </label>
          {exchange && (
            <label className="block p-5 rounded-2xl bg-gray-800/60 border border-amber-500/40 sm:col-span-2">
              <span className="text-sm text-gray-400">Estimated fair market value of goods/services ($)</span>
              <input
                type="number"
                min="0"
                value={fmv}
                onChange={(e) => setFmv(e.target.value)}
                className="mt-1 w-full bg-transparent text-2xl font-bold text-white focus:outline-none border-b border-gray-600 focus:border-[#60a5fa]"
              />
            </label>
          )}
        </div>

        {ready && (
          <div id="receipt" className="p-8 rounded-2xl bg-white mb-6">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <p className="text-xl font-bold text-gray-900">{orgName || "Your Organization"}</p>
              {orgAddress && <p className="text-sm text-gray-600">{orgAddress}</p>}
              {ein && <p className="text-sm text-gray-600">EIN: {ein}</p>}
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-semibold text-gray-900">Donation Receipt</p>
              <p className="text-xs text-gray-500">Receipt #: {receiptNo}</p>
            </div>
            <dl className="text-sm text-gray-700 space-y-1 mb-4">
              <div className="flex gap-2"><dt className="font-semibold w-32">Date:</dt><dd>{fmtDate(dateRaw)}</dd></div>
              <div className="flex gap-2"><dt className="font-semibold w-32">Donor:</dt><dd>{donorName}</dd></div>
              <div className="flex gap-2"><dt className="font-semibold w-32">Contribution:</dt><dd>${fmtMoney(amt)} ({method})</dd></div>
            </dl>
            <p className="text-sm text-gray-700 mb-4">
              {orgName || "This organization"} is a tax-exempt organization under IRC §501(c)(3). We acknowledge receipt of ${fmtMoney(amt)} contributed by {donorName} on {fmtDate(dateRaw)}.
            </p>
            {exchange ? (
              <p className="text-sm text-gray-700 mb-4">
                In exchange for this contribution, {donorName} received goods or services with an estimated fair market value of ${fmtMoney(fairValue)}. The deductible amount of this contribution is therefore <strong>${fmtMoney(deductible)}</strong>. This disclosure is provided in accordance with IRC §6115 and §170.
              </p>
            ) : (
              <p className="text-sm text-gray-700 mb-4">
                No goods or services were provided in exchange for this contribution. This receipt is provided in accordance with IRC §170(f)(8) and is valid for contributions of $250 or more.
              </p>
            )}
            <p className="text-xs text-gray-500 mb-4">
              Please keep this receipt for your records and consult a tax advisor regarding deductibility. For contributions under $250, this acknowledgment may not be required but is provided for your convenience.
            </p>
            <p className="text-sm text-gray-700">Thank you for your generosity!</p>
          </div>
        )}

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {ready && (
            <button
              onClick={() => window.print()}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
            >
              Print / Save as PDF
            </button>
          )}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2563eb]/15 to-[#7c3aed]/15 border border-blue-500/30">
          <h2 className="text-lg font-bold text-white mb-2">Send compliant receipts automatically</h2>
          <p className="text-sm text-gray-300 mb-4">
            Kindora tracks every donation, applies quid pro quo rules, and emails IRS-compliant acknowledgments the moment a gift lands — no manual typing.
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