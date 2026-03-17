import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Activity & Analytics — Buyer Engagement & Deal Insights | Space Nexus VDR",
  description:
    "Monitor user activity, track document engagement, analyze buyer participation, and export analytics reports with Space Nexus Activity & Analytics. Visualize deal momentum with engagement heatmaps.",
  alternates: {
    canonical: "https://spacenexus.net/features/activity-analytics",
  },
  openGraph: {
    title:
      "Activity & Analytics — Buyer Engagement & Deal Insights | Space Nexus VDR",
    description:
      "Track views, downloads, unique viewers, and time spent. Analyze document popularity, monitor buyer engagement, and export analytics reports — all from one interface.",
    url: "https://spacenexus.net/features/activity-analytics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Activity & Analytics — Buyer Engagement & Deal Insights | Space Nexus VDR",
    description:
      "Real-time activity tracking, engagement heatmaps, buyer monitoring, and exportable analytics reports for M&A deal teams.",
  },
};

const features = [
  {
    title: "Overall Metrics Overview",
    description:
      "View top-level engagement metrics at a glance — total views, downloads, unique viewers, and time spent. Understand deal momentum with numbers that actually matter.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Document Popularity & Engagement",
    description:
      "Analyze which documents are most viewed, most downloaded, and most time-consuming. Identify which materials are driving buyer interest and which need more attention.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "User Activity Tracking",
    description:
      "Track individual user actions — uploads, downloads, and document views — with timestamps. Know exactly who did what and when across your entire data room.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Buyer Engagement Monitoring",
    description:
      "Monitor buyer participation levels across the deal. Compare engagement between bidder groups to identify the most serious parties and prioritize your dealmaking efforts.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Engagement Heatmaps",
    description:
      "Visualize activity patterns with engagement heatmaps. See when users are most active, which time periods drive the most document access, and where deal momentum is building.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
  },
  {
    title: "Export Analytics Reports",
    description:
      "Export analytics and activity reports for presentations, investor updates, or compliance reviews. Download data in structured formats for deeper analysis outside the platform.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

const galleryScreenshots = [
  {
    src: "/spacenexus/screenshots/anlytics-douementviews.jpeg",
    caption: "Document Views",
  },
  {
    src: "/spacenexus/screenshots/anelectics-useractiviy.jpeg",
    caption: "User Activity Log",
  },
  {
    src: "/spacenexus/screenshots/anlytics-buyerinsights.jpeg",
    caption: "Buyer Insights",
  },
  {
    src: "/spacenexus/screenshots/anlytics-enagementheatmap.jpeg",
    caption: "Engagement Heatmap",
  },
  {
    src: "/spacenexus/screenshots/anlytics-export.jpeg",
    caption: "Export & Reports",
  },
];

export default function ActivityAnalyticsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://spacenexus.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Features",
                item: "https://spacenexus.net/features",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Activity & Analytics",
                item: "https://spacenexus.net/features/activity-analytics",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <Link
                href="/features"
                className="inline-flex mr-7 items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Features
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
                Buyer Intelligence
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Activity & Analytics
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Activity & Analytics section provides insights into user
                interactions and document engagement within the Space Nexus
                platform. It helps deal teams monitor activity, track document
                views and downloads, analyze buyer engagement, and generate
                reports to better understand the progress of transactions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "View overall metrics: views, downloads, unique viewers, and time spent",
                  "Analyze document popularity and engagement levels",
                  "Track user activity including uploads, downloads, and views",
                  "Monitor buyer engagement and participation",
                  "Visualize activity patterns through engagement heatmaps",
                  "Export analytics and activity reports for further analysis",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-cyan-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Right: Hero Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.spacenexus.net / analytics
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <img
                  src="/spacenexus/screenshots/aneletics-overview.jpeg"
                  alt="Space Nexus VDR Activity & Analytics — engagement overview dashboard"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Every Insight You Need to Move Deals Forward
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From top-level metrics to individual user actions — get complete
              visibility into how buyers engage with your data room.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See Analytics in Detail
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every view of your deal&apos;s activity — from document-level
              engagement to buyer-by-buyer participation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryScreenshots.map((shot, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800 rounded-t-lg px-3 py-2 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={shot.src}
                    alt={`Space Nexus Analytics — ${shot.caption}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mt-3">
                  {shot.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-12 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-4">
            Explore More Features
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Dashboard — Deal Command Center",
                href: "/features/dashboard",
              },
              {
                title: "Reports — Audit & Compliance",
                href: "/features/reports",
              },
              { title: "Q&A Management — Due Diligence", href: "/features/qa" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-cyan-300 hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-medium text-gray-900 group-hover:text-cyan-700 transition-colors">
                  {link.title}
                </p>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors shrink-0 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-cyan-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See Who&apos;s Serious About Your Deal
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Book a demo and see how Space Nexus analytics helps you identify
              your most engaged buyers and track deal momentum in real time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                View All Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
