import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpaceNexus Comparisons | Virtual Data Room Reviews",
  description: "Side-by-side comparisons of SpaceNexus vs top VDR providers. Features, pricing, and security compared.",
  alternates: {
    canonical: "https://spacenexus.net/compare",
  },
};

const comparisons = [
  { name: "Datasite", slug: "spacenexus-vs-datasite" },
  { name: "Intralinks", slug: "spacenexus-vs-intralinks" },
  { name: "Firmex", slug: "spacenexus-vs-firmex" },
  { name: "Ideals", slug: "spacenexus-vs-ideals" },
  { name: "OneHub", slug: "spacenexus-vs-onehub" },
  { name: "Securedocs", slug: "spacenexus-vs-securedocs" },
  { name: "ShareFile", slug: "spacenexus-vs-sharefile" },
  { name: "Box", slug: "spacenexus-vs-box" },
  { name: "Ansarada", slug: "spacenexus-vs-ansarada" },
  { name: "Drooms", slug: "spacenexus-vs-drooms" },
  { name: "DealRoom", slug: "spacenexus-vs-dealroom" },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            SpaceNexus <span className="text-[#2563eb]">Comparisons</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how SpaceNexus stacks up against leading virtual data room providers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((comp) => (
            <Link
              key={comp.slug}
              href={`/${comp.slug}`}
              className="group bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:border-[#2563eb]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <span className="text-[#2563eb] font-bold text-sm">SN</span>
                </div>
                <span className="text-gray-400">vs</span>
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-xs">{comp.name.substring(0, 3).toUpperCase()}</span>
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#2563eb] transition-colors">
                SpaceNexus vs {comp.name}
              </h2>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] mt-2">
                View Comparison
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
