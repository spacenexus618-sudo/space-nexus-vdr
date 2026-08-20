import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Kindora Social Media",
    description: "Find Kindora across the web — G2, SoftwareSuggest, AlternativeTo, SourceForge, and SaaSHub — and follow us on YouTube, Instagram, Twitter/X, and LinkedIn for nonprofit management tips, product updates, and industry insights.",
    alternates: {
        canonical: "/kindora/social-media",
    },
};

const socialPlatforms = [
  {
    name: "YouTube",
    handle: "@KindoraNGOOS1",
    href: "https://www.youtube.com/@KindoraNGOOS1",
    description: "Product walkthroughs, nonprofit management tips, and industry insights.",
    gradient: "from-red-500 to-red-700",
    shadow: "shadow-red-500/30",
    icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />,
  },
  {
    name: "Instagram",
    handle: "@space_kindora",
    href: "https://www.instagram.com/space_kindora_/",
    description: "Behind-the-scenes, community stories, and nonprofit spotlights.",
    gradient: "from-amber-500 via-pink-600 to-purple-600",
    shadow: "shadow-pink-500/30",
    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
  },
  {
    name: "Twitter / X",
    handle: "@space_kindora",
    href: "https://x.com/space_kindora",
    description: "Quick updates, nonprofit news, and product announcements.",
    gradient: "from-gray-700 to-gray-900",
    shadow: "shadow-gray-500/30",
    icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
  },
  {
    name: "LinkedIn",
    handle: "Kindora NGO OS",
    href: "https://www.linkedin.com/company/space-kindora/",
    description: "Company updates, thought leadership, and job opportunities.",
    gradient: "from-blue-500 to-blue-800",
    shadow: "shadow-blue-500/30",
    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
  },
];

const platforms = [
  {
    name: "G2",
    handle: "g2.com/users/kindora",
    href: "https://www.g2.com/users/kindora",
    description: "Kindora user profile on G2 — read and share reviews from real nonprofit teams.",
    gradient: "from-orange-500 to-red-500",
    shadow: "shadow-orange-500/30",
    icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    name: "SoftwareSuggest",
    handle: "softwaresuggest.com",
    href: "https://www.softwaresuggest.com/vendorsportal/index.php?r=upgrade",
    description: "Kindora vendor profile on SoftwareSuggest — software discovery and user reviews.",
    gradient: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/30",
    icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    name: "AlternativeTo",
    handle: "alternativeto.net/user/space_kindora1",
    href: "https://alternativeto.net/user/space_kindora1/",
    description: "Kindora user profile on AlternativeTo — software alternatives and community recommendations.",
    gradient: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/30",
    icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    name: "SourceForge",
    handle: "sourceforge.net/u/space-kndora1",
    href: "https://sourceforge.net/u/space-kndora1/profile",
    description: "Kindora user profile on SourceForge — open source software discovery and downloads.",
    gradient: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/30",
    icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    name: "SaaSHub",
    handle: "saashub.com/u/spacenexus",
    href: "https://www.saashub.com/u/spacenexus",
    description: "Kindora user profile on SaaSHub — SaaS discovery, ratings, and reviews.",
    gradient: "from-sky-500 to-blue-600",
    shadow: "shadow-sky-500/30",
    icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
];

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Connect With Kindora</h1>
          <p className="text-lg text-gray-400">Find Kindora across the web — reviews, profiles, and software listings.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {socialPlatforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-start gap-4 p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${p.shadow}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  {p.icon}
                </svg>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">{p.name}</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{p.handle}</p>
                <p className="text-sm text-gray-400 mt-2">{p.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">More Platforms</h2>
            <p className="text-sm text-gray-400">Find Kindora listed and reviewed across the web.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start gap-4 p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${p.shadow}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    {p.icon}
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">{p.name}</span>
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{p.handle}</p>
                  <p className="text-sm text-gray-400 mt-2">{p.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/kindora" className="text-sm text-gray-500 hover:text-gray-300">← Back to Kindora home</Link>
        </div>
      </div>
    </div>
  );
}
