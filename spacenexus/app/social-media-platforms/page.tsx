import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
  title: "SpaceNexus Social Media Platforms | Official Profiles",
  description:
    "Follow SpaceNexus across our official channels for virtual data room insights, product updates, platform demos, and company announcements.",
  alternates: {
    canonical: "https://spacenexus.net/social-media-platforms",
  },
};

const officialProfiles = [
  {
    name: "X",
    handle: "@spacenexus111",
    href: "https://x.com/spacenexus111",
    description:
      "Quick updates on virtual data room technology, M&A insights, platform launches, and secure document collaboration.",
    iconPath:
      "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    color: "bg-gray-800",
  },
  {
    name: "Instagram",
    handle: "@spacenexus618",
    href: "https://www.instagram.com/spacenexus618/",
    description:
      "Visual stories, product moments, data room intelligence, and SpaceNexus brand updates.",
    iconPath:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
  },
  {
    name: "YouTube",
    handle: "@spacenexus-b5p",
    href: "https://www.youtube.com/@spacenexus-b5p",
    description:
      "Watch demos, walkthroughs, product explainers, and videos about virtual data room workflows.",
    iconPath:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    color: "bg-red-600",
  },
  {
    name: "LinkedIn",
    handle: "SpaceNexus",
    href: "https://www.linkedin.com/company/space-nexus",
    description:
      "Company news, virtual data room thought leadership, hiring updates, and enterprise announcements.",
    iconPath:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    color: "bg-[#0A66C2]",
  },
];

const registeredPlatforms = [
  { name: "G2", href: "https://www.g2.com/products/spacenexus/", description: "SpaceNexus verified product listing and customer reviews on G2 under Virtual Data Room Software.", status: "Registered" },
  { name: "Uneed", href: "https://www.uneed.best/profile/spacenexus", description: "SpaceNexus profile on Uneed for software discovery and directory listings.", status: "Registered" },
  { name: "Crunchbase", href: "https://www.crunchbase.com/organization/space-nexus", description: "SpaceNexus company profile on Crunchbase for funding, investor, and company data.", status: "Registered" },
  { name: "SaaSHub", href: "https://www.saashub.com/spacenexus", description: "SpaceNexus user profile on SaaSHub for software discovery and reviews.", status: "Registered" },
  { name: "ProvenExpert", href: "https://www.provenexpert.com/space-nexus/", description: "SpaceNexus verified business profile and customer reviews on ProvenExpert.", status: "Registered" },
  { name: "SourceForge", href: "https://sourceforge.net/software/product/SpaceNexus/", description: "SpaceNexus product listing on SourceForge for software discovery and reviews.", status: "Registered" },
  { name: "Medium", href: "https://medium.com/@spacenexus618", description: "SpaceNexus Medium profile for articles on virtual data rooms, M&A insights, and industry trends.", status: "Registered" },
  { name: "Product Hunt", href: "https://www.producthunt.com/@space_nexus", description: "SpaceNexus Product Hunt profile for product launches, reviews, and community feedback.", status: "Registered" },
  { name: "StartupXplore", href: "https://startupxplore.com/en/startups/space-nexus-2", description: "SpaceNexus startup profile on StartupXplore for company discovery, funding info, and investor insights.", status: "Registered" },
];

const morePlatforms = [
  { name: "AlternativeTo", href: "https://alternativeto.net/software/spacenexus/", description: "Explore the SpaceNexus software listing and alternative discovery presence.", status: "Registered" },
  { name: "Product Hunt", href: "https://www.producthunt.com/@space_nexus", description: "SpaceNexus Product Hunt profile for product launches, reviews, and community feedback.", status: "Registered" },
  { name: "Medium", href: "https://medium.com/@spacenexus618", description: "SpaceNexus Medium profile for articles on virtual data rooms, M&A insights, and industry trends.", status: "Registered" },
  { name: "DEV Community", href: "https://dev.to/", description: "Published DEV Community articles on using AI to fix document management problems.", status: "Registered" },
  { name: "Hashnode", href: "https://hashnode.com/", description: "Published Hashnode articles on how AI is transforming virtual data rooms.", status: "Registered" },
  { name: "SlideShare", href: "https://www.slideshare.net/", description: "Registered presentation-sharing destination for product decks and VDR insights.", status: "Registered" },
  { name: "Linktree", href: "https://linktr.ee/", description: "Registered link hub for consolidating official SpaceNexus social and content channels.", status: "Registered" },
  { name: "Pinterest", href: "https://www.pinterest.com/", description: "A visual destination for data room infographics, workflows, and product concepts.", status: "Registered" },
  { name: "Bluesky", href: "https://bsky.app/", description: "An open social channel for technology commentary and platform updates.", status: "Registered" },
  { name: "Discord", href: "https://discord.gg/", description: "Join the SpaceNexus Discord community for product feedback and discussion.", status: "Registered" },
  { name: "Substack", href: "https://substack.com/", description: "A newsletter platform destination for product briefings and industry analysis.", status: "Registered" },
  { name: "Quora", href: "https://www.quora.com/", description: "Follow SpaceNexus on Quora for virtual data room expertise and answers.", status: "Registered" },
  { name: "Reddit", href: "https://www.reddit.com/", description: "Community discussions about virtual data rooms, M&A, and secure document sharing.", status: "Registered" },
  { name: "TikTok", href: "https://www.tiktok.com/", description: "Short-form video content showcasing data room features and tips.", status: "Registered" },
  { name: "Facebook", href: "https://www.facebook.com/", description: "Company page for updates, events, and community engagement.", status: "Registered" },
];

function SocialIcon({ path }: { path: string }) {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Social Media Platforms", item: "https://spacenexus.net/social-media-platforms" },
  ],
};

export default function SocialMediaPlatformsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <Script id="social-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
              <svg className="w-4 h-4 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Official SpaceNexus profiles</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6">
            SpaceNexus Social Media
            <br />
            Platforms
          </h1>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Follow SpaceNexus across our official channels for virtual data room insights, product
            updates, platform demos, and company announcements.
          </p>
        </div>
      </div>

      {/* Official Profiles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-2">
          Verified Links
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Official SpaceNexus profiles
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {officialProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${profile.color} flex items-center justify-center text-white mb-4`}>
                <SocialIcon path={profile.iconPath} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{profile.name}</h3>
              <p className="text-sm font-medium text-[#2563eb] mb-3">{profile.handle}</p>
              <p className="text-sm text-gray-600 mb-4">{profile.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                  Open profile
                </span>
                <span className="text-gray-600 group-hover:text-[#2563eb] transition-colors">
                  <ExternalIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Registered Platforms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200 text-center">
        <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-2">
          More platforms
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Social, community, and discovery links
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Registered SpaceNexus platforms and confirmed public listings are identified below. Placeholder platform-only destinations are hidden until a profile link is published.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {registeredPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-[#2563eb]">{platform.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                    {platform.name}
                  </h3>
                  <span className="text-[10px] font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                    {platform.status}
                  </span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">{platform.description}</p>
              </div>
              <span className="text-gray-600 group-hover:text-[#2563eb] transition-colors mt-1">
                <ExternalIcon />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for SpaceNexus resources?
          </h2>
          <p className="text-gray-600 mb-6">
            Explore product guides, videos, case studies, templates, and documentation.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-300"
          >
            View resources
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-10-20" />
            </div></div>
  );
}
