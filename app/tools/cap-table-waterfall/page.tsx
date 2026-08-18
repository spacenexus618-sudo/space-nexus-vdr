"use client";

import { useState } from "react";
import Link from "next/link";

type ShareClass = {
  name: string;
  shares: number;
  pricePerShare: number;
  liquidationMultiple: number;
  participating: boolean;
  capParticipation?: number;
};

type PayoutResult = {
  className: string;
  totalPayout: number;
  perShare: number;
  source: string;
};

const defaultShareClasses: ShareClass[] = [
  { name: "Seed Preferred", shares: 1000000, pricePerShare: 0.5, liquidationMultiple: 1, participating: false },
  { name: "Series A Preferred", shares: 2000000, pricePerShare: 2.0, liquidationMultiple: 1, participating: false },
  { name: "Series B Preferred", shares: 1500000, pricePerShare: 5.0, liquidationMultiple: 1, participating: true, capParticipation: 3 },
  { name: "Common Stock", shares: 5000000, pricePerShare: 0, liquidationMultiple: 0, participating: false },
  { name: "ESOP Pool", shares: 1000000, pricePerShare: 0, liquidationMultiple: 0, participating: false },
];

export default function CapTableWaterfallPage() {
  const [exitValuation, setExitValuation] = useState(50000000);
  const [shareClasses, setShareClasses] = useState<ShareClass[]>(defaultShareClasses);
  const [showShareModal, setShowShareModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const formatCurrency = (n: number) => {
    if (n >= 1000000000) return `$${(n / 1000000000).toFixed(2)}B`;
    if (n >= 1000000) return `$${(n / 1000000).toFixed(2)}M`;
    if (n >= 1000) return `$${(n / 1000).toFixed(1)}K`;
    return `$${n.toLocaleString("en-US")}`;
  };

  const totalShares = shareClasses.reduce((sum, sc) => sum + sc.shares, 0);

  const calculateWaterfall = (): PayoutResult[] => {
    const results: PayoutResult[] = [];
    let remainingProceeds = exitValuation;

    const preferredClasses = shareClasses
      .filter((sc) => sc.liquidationMultiple > 0)
      .sort((a, b) => b.liquidationMultiple - a.liquidationMultiple || b.pricePerShare - a.pricePerShare);

    const liquidationPrefTotal = preferredClasses.reduce(
      (sum, sc) => sum + sc.shares * sc.pricePerShare * sc.liquidationMultiple,
      0
    );

    if (remainingProceeds >= liquidationPrefTotal) {
      preferredClasses.forEach((sc) => {
        const prefPayout = sc.shares * sc.pricePerShare * sc.liquidationMultiple;
        results.push({
          className: sc.name,
          totalPayout: prefPayout,
          perShare: sc.pricePerShare * sc.liquidationMultiple,
          source: "Liquidation Preference",
        });
        remainingProceeds -= prefPayout;
      });

      const participatingPreferred = preferredClasses.filter((sc) => sc.participating);
      const nonParticipatingPreferred = preferredClasses.filter((sc) => !sc.participating);
      const commonClasses = shareClasses.filter((sc) => sc.liquidationMultiple === 0);

      const totalParticipatingShares = participatingPreferred.reduce((sum, sc) => sum + sc.shares, 0);
      const totalNonParticipatingShares = nonParticipatingPreferred.reduce((sum, sc) => sum + sc.shares, 0);
      const totalCommonShares = commonClasses.reduce((sum, sc) => sum + sc.shares, 0);

      const totalRemainingShares = totalParticipatingShares + totalNonParticipatingShares + totalCommonShares;
      const perShareRemaining = totalRemainingShares > 0 ? remainingProceeds / totalRemainingShares : 0;

      participatingPreferred.forEach((sc) => {
        let participationPayout = sc.shares * perShareRemaining;
        if (sc.capParticipation) {
          const maxPayout = sc.shares * sc.pricePerShare * sc.capParticipation;
          participationPayout = Math.min(participationPayout, maxPayout - (sc.shares * sc.pricePerShare * sc.liquidationMultiple));
          participationPayout = Math.max(0, participationPayout);
        }
        results.push({
          className: `${sc.name} (Participation)`,
          totalPayout: participationPayout,
          perShare: sc.shares > 0 ? participationPayout / sc.shares : 0,
          source: "Participation",
        });
        remainingProceeds -= participationPayout;
      });

      nonParticipatingPreferred.forEach((sc) => {
        const conversionPayout = sc.shares * perShareRemaining;
        const prefPayout = sc.shares * sc.pricePerShare * sc.liquidationMultiple;
        const betterPayout = Math.max(conversionPayout, prefPayout);
        const result = results.find((r) => r.className === sc.name);
        if (result) {
          result.totalPayout = betterPayout;
          result.perShare = sc.shares > 0 ? betterPayout / sc.shares : 0;
          result.source = conversionPayout > prefPayout ? "Converted to Common" : "Liquidation Preference";
          remainingProceeds += prefPayout - betterPayout;
        }
      });

      commonClasses.forEach((sc) => {
        const payout = sc.shares * perShareRemaining;
        results.push({
          className: sc.name,
          totalPayout: payout,
          perShare: sc.shares > 0 ? payout / sc.shares : 0,
          source: "Common Equity",
        });
        remainingProceeds -= payout;
      });
    } else {
      const ratio = remainingProceeds / liquidationPrefTotal;
      preferredClasses.forEach((sc) => {
        const prefPayout = sc.shares * sc.pricePerShare * sc.liquidationMultiple * ratio;
        results.push({
          className: sc.name,
          totalPayout: prefPayout,
          perShare: sc.shares > 0 ? prefPayout / sc.shares : 0,
          source: "Pro-rata Preference",
        });
      });
      remainingProceeds = 0;
    }

    return results;
  };

  const results = calculateWaterfall();

  const addShareClass = () => {
    setEditingIndex(null);
    setShowShareModal(true);
  };

  const editShareClass = (index: number) => {
    setEditingIndex(index);
    setShowShareModal(true);
  };

  const deleteShareClass = (index: number) => {
    setShareClasses(shareClasses.filter((_, i) => i !== index));
  };

  const handleSaveShareClass = (sc: ShareClass) => {
    if (editingIndex !== null) {
      const updated = [...shareClasses];
      updated[editingIndex] = sc;
      setShareClasses(updated);
    } else {
      setShareClasses([...shareClasses, sc]);
    }
    setShowShareModal(false);
    setEditingIndex(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/tools" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#2563eb] mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Free Financial Calculator
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Cap Table & M&A <span className="text-[#2563eb]">Waterfall</span> Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Model payout distributions across common shareholders, preferred investors, and option pools at various exit valuations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Exit Valuation</h2>
                <span className="text-sm text-gray-500">Total: {totalShares.toLocaleString("en-US")} shares</span>
              </div>
              <div className="mb-4">
                <input
                  type="range"
                  min={1000000}
                  max={1000000000}
                  step={1000000}
                  value={exitValuation}
                  onChange={(e) => setExitValuation(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563eb]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$1M</span>
                  <span>$1B</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={exitValuation}
                  onChange={(e) => setExitValuation(Number(e.target.value))}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                />
                <button
                  onClick={() => setShowResults(true)}
                  className="px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors"
                >
                  Calculate
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Share Classes</h2>
                <button onClick={addShareClass} className="text-sm text-[#2563eb] hover:underline font-medium flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  Add Class
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Class</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Shares</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Price</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Pref Mult</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">Partic</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shareClasses.map((sc, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2 font-medium text-gray-900">{sc.name}</td>
                        <td className="py-3 px-2 text-right text-gray-600">{sc.shares.toLocaleString("en-US")}</td>
                        <td className="py-3 px-2 text-right text-gray-600">{sc.pricePerShare > 0 ? `$${sc.pricePerShare.toFixed(2)}` : "-"}</td>
                        <td className="py-3 px-2 text-right text-gray-600">{sc.liquidationMultiple > 0 ? `${sc.liquidationMultiple}x` : "-"}</td>
                        <td className="py-3 px-2 text-center">
                          {sc.participating ? (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Yes{sc.capParticipation ? ` (${sc.capParticipation}x cap)` : ""}</span>
                          ) : (
                            <span className="text-xs text-gray-400">No</span>
                          )}
                        </td>
                        <td className="py-3 px-2 text-center">
                          <button onClick={() => editShareClass(i)} className="text-gray-400 hover:text-[#2563eb] mr-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                          </button>
                          <button onClick={() => deleteShareClass(i)} className="text-gray-400 hover:text-red-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {results.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Waterfall Distribution</h2>
                <div className="space-y-4">
                  {results.map((r, i) => {
                    const pct = exitValuation > 0 ? (r.totalPayout / exitValuation) * 100 : 0;
                    return (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">{r.className}</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{r.source}</span>
                          </div>
                          <span className="font-bold text-gray-900">{formatCurrency(r.totalPayout)}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${i === 0 ? "bg-[#2563eb]" : i === 1 ? "bg-indigo-500" : i === 2 ? "bg-purple-500" : i === 3 ? "bg-green-500" : "bg-gray-400"}`}
                            style={{ width: `${Math.min(pct, 100)}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{pct.toFixed(1)}% of exit</span>
                          <span>{r.perShare > 0 ? `$${r.perShare.toFixed(2)}/share` : ""}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Exit Valuation</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(exitValuation)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Shares</span>
                  <span className="font-semibold text-gray-900">{totalShares.toLocaleString("en-US")}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Price per Share</span>
                  <span className="font-semibold text-gray-900">${(exitValuation / totalShares).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Preferred Payout</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(results.filter((r) => r.source.includes("Preference") || r.source.includes("Particip")).reduce((s, r) => s + r.totalPayout, 0))}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Common Payout</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(results.filter((r) => r.source === "Common Equity" || r.source === "Converted to Common").reduce((s, r) => s + r.totalPayout, 0))}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl shadow-xl p-6 text-white">
              <h3 className="font-bold mb-3">Share This Waterfall</h3>
              <p className="text-blue-100 text-sm mb-4">
                Save and share this waterfall output securely via a password-protected SpaceNexus deal link.
              </p>
              <Link
                href="https://cad.spaceaiapp.com/vdr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#2563eb] font-semibold rounded-xl hover:bg-blue-50 transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Save to SpaceNexus Deal Room
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Scenarios</h3>
              <div className="space-y-2">
                {[
                  { label: "Down Round ($10M)", value: 10000000 },
                  { label: "Moderate Exit ($50M)", value: 50000000 },
                  { label: "Strong Exit ($100M)", value: 100000000 },
                  { label: "Unicorn ($500M)", value: 500000000 },
                ].map((scenario) => (
                  <button
                    key={scenario.value}
                    onClick={() => setExitValuation(scenario.value)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {scenario.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="font-bold mb-2">Need Cap Table Management?</h3>
              <p className="text-green-100 text-sm mb-4">
                SpaceNexus manages your cap table, models scenarios, and generates investor-ready reports.
              </p>
              <Link
                href="/demo"
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-white text-green-700 font-semibold rounded-xl hover:bg-green-50 transition-all text-sm"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showShareModal && (
        <ShareClassModal
          shareClass={editingIndex !== null ? shareClasses[editingIndex] : null}
          onSave={handleSaveShareClass}
          onClose={() => { setShowShareModal(false); setEditingIndex(null); }}
        />
      )}
    </main>
  );
}

function ShareClassModal({
  shareClass,
  onSave,
  onClose,
}: {
  shareClass: ShareClass | null;
  onSave: (sc: ShareClass) => void;
  onClose: () => void;
}) {
  const [name, setName] = useState(shareClass?.name || "");
  const [shares, setShares] = useState(shareClass?.shares || 1000000);
  const [pricePerShare, setPricePerShare] = useState(shareClass?.pricePerShare || 1);
  const [liquidationMultiple, setLiquidationMultiple] = useState(shareClass?.liquidationMultiple || 1);
  const [participating, setParticipating] = useState(shareClass?.participating || false);
  const [capParticipation, setCapParticipation] = useState(shareClass?.capParticipation || 3);

  const handleSave = () => {
    onSave({ name, shares, pricePerShare, liquidationMultiple, participating, capParticipation: participating ? capParticipation : undefined });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{shareClass ? "Edit" : "Add"} Share Class</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Class Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb]" placeholder="e.g., Series A Preferred" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Shares</label>
              <input type="number" value={shares} onChange={(e) => setShares(Number(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price per Share ($)</label>
              <input type="number" step="0.01" value={pricePerShare} onChange={(e) => setPricePerShare(Number(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Liquidation Multiple</label>
              <select value={liquidationMultiple} onChange={(e) => setLiquidationMultiple(Number(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb]">
                <option value={0}>0x (Common)</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
                <option value={3}>3x</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Participating?</label>
              <select value={participating ? "yes" : "no"} onChange={(e) => setParticipating(e.target.value === "yes")} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb]">
                <option value="no">Non-Participating</option>
                <option value="yes">Participating</option>
              </select>
            </div>
          </div>
          {participating && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Participation Cap (x)</label>
              <input type="number" step="0.5" value={capParticipation} onChange={(e) => setCapParticipation(Number(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb]" placeholder="e.g., 3" />
              <p className="text-xs text-gray-500 mt-1">Max multiple of initial investment before participation stops</p>
            </div>
          )}
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button onClick={handleSave} disabled={!name} className="flex-1 py-3 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] disabled:opacity-50 transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
