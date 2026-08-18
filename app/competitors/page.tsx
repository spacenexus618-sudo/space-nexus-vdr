import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VDR Competitor Alternatives | SpaceNexus",
  description: "Compare SpaceNexus against top VDR providers. Detailed alternatives to Datasite, Intralinks, Firmex, and more.",
  alternates: {
    canonical: "https://spacenexus.net/competitors",
  },
};

const competitors = [
  { name: "Datasite", slug: "datasite-alternative", description: "Modern alternative to Datasite with AI-powered features and transparent pricing." },
  { name: "Intralinks", slug: "intralinks-alternative", description: "Switch from Intralinks to SpaceNexus for better UX and faster setup." },
  { name: "Firmex", slug: "firmex-alternative", description: "SpaceNexus vs Firmex - compare features, pricing, and security." },
  { name: "Ideals", slug: "ideals-alternative", description: "Why leading firms choose SpaceNexus over Ideals VDR." },
  { name: "OneHub", slug: "onehub-alternative", description: "Enterprise-grade alternative to OneHub with advanced permissions." },
  { name: "Securedocs", slug: "securedocs-alternative", description: "Securedocs alternative with AI document processing." },
  { name: "ShareFile", slug: "sharefile-alternative", description: "Purpose-built M&A VDR vs ShareFile generic sharing." },
  { name: "Box", slug: "box-alternative", description: "Box for enterprise vs SpaceNexus for deal management." },
  { name: "Ansarada", slug: "ansarada-alternative", description: "Ansarada alternative with transparent flat-rate pricing." },
  { name: "Drooms", slug: "drooms-alternative", description: "European VDR alternative with global compliance." },
  { name: "DealRoom", slug: "dealroom-alternative", description: "DealRoom alternative for M&A project management." },
  { name: "VDR Alternatives", slug: "vdr-alternatives", description: "Top 7 VDR alternatives compared side-by-side." },
];

export default function CompetitorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            VDR <span className="text-[#2563eb]">Competitor</span> Alternatives
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare SpaceNexus against leading virtual data room providers. See why firms are making the switch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitors.map((comp) => (
            <Link
              key={comp.slug}
              href={`/competitors/${comp.slug}`}
              className="group bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:border-[#2563eb]/30 transition-all duration-300"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">
                SpaceNexus vs {comp.name}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{comp.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] mt-4">
                Compare
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
