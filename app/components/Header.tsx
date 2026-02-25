"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const vdrNavLinks = [
  { name: "Features", href: "/features" },
  { name: "Solutions", href: "/solutions/mergers-and-acquisitions-vdr" },
  { name: "Pricing", href: "/pricing" },
  { name: "Security", href: "/security" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Kindora → NGO OS", href: "/kindora" },
];

const kindoraNavLinks = [
  { name: "Features", href: "/kindora/features" },
  { name: "Solutions", href: "/kindora/solutions" },
  { name: "Pricing", href: "/kindora/pricing" },
];

const kindoraFeatures = [
  {
    name: "Dashboard & Analytics",
    href: "/kindora/features/dashboard-analytics",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    description: "Real-time KPIs & insights",
  },
  {
    name: "Donor Management",
    href: "/kindora/features/donor-management",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    description: "Donor profiles & donations",
  },
  {
    name: "Campaign Management",
    href: "/kindora/features/campaign-management",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
    description: "Fundraising campaigns",
  },
  {
    name: "Grant Management",
    href: "/kindora/features/grant-management",
    icon: (
      <svg
        className="w-5 h-5"
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
    description: "Grant lifecycle tracking",
  },
  {
    name: "Client & Programs",
    href: "/kindora/features/client-management",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    description: "Service enrollment",
  },
  {
    name: "Financial Management",
    href: "/kindora/features/financial-management",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    description: "Accounts & budgets",
  },
  {
    name: "Reporting & Export",
    href: "/kindora/features/reporting",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    description: "PDF & Excel exports",
  },
  {
    name: "Communications",
    href: "/kindora/features/communications",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    description: "Email & templates",
  },
];

const industries = [
  {
    name: "Private Equity",
    href: "/industries/private-equity",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    description: "Portfolio management & exits",
  },
  {
    name: "Investment Banking",
    href: "/industries/investment-banking",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    description: "M&A advisory & capital markets",
  },
  {
    name: "Law Firms",
    href: "/industries/law-firms",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    description: "Legal due diligence & transactions",
  },
  {
    name: "Real Estate",
    href: "/industries/real-estate",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    description: "Property transactions & asset sales",
  },
  {
    name: "Life Sciences",
    href: "/industries/life-sciences",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    description: "Pharma, biotech & healthcare",
  },
  {
    name: "Technology",
    href: "/industries/technology",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    description: "Tech M&A & venture deals",
  },
  {
    name: "Energy & Infrastructure",
    href: "/industries/energy-infrastructure",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    description: "Power, utilities & infrastructure",
  },
  {
    name: "Corporate Development",
    href: "/industries/corporate-development",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    description: "Strategic acquisitions & divestitures",
  },
];

export default function Header() {
  const pathname = usePathname();
  const isKindora = pathname?.startsWith("/kindora");

  // All hooks must be declared before any early returns (React Rules of Hooks)
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [kindoraFeaturesOpen, setKindoraFeaturesOpen] = useState(false);
  const [mobileKindoraFeaturesOpen, setMobileKindoraFeaturesOpen] =
    useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setIndustriesOpen(false);
    setKindoraFeaturesOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Kindora has its own KindoraHeader rendered in kindora/layout.tsx
  if (isKindora) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
        : "bg-gradient-to-b from-white via-white to-white/95"
        }`}
      role="banner"
    >
      {/* Premium top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent opacity-80" />

      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Context Aware */}
          {isKindora ? (
            <Link
              href="/kindora"
              className="flex items-center gap-2.5 group"
              aria-label="Kindora NGO OS Home"
            >
              <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/icononly_transparent_nobuffer.png"
                  alt="Kindora Logo"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black tracking-tight text-[#2563eb] transition-colors duration-300 group-hover:text-[#1d4ed8]">
                  KINDORA
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  NGO OS
                </span>
              </div>
            </Link>
          ) : (
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Space Nexus Home"
            >
              <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/icononly_transparent_nobuffer.png"
                  alt="Space Nexus Logo"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gray-700">
                  SPACE
                </span>
                <span className="text-xl font-black tracking-tight text-[#2563eb] transition-colors duration-300 group-hover:text-[#1d4ed8]">
                  NEXUS
                </span>
              </div>
            </Link>
          )}

          {/* Desktop Navigation - Context Aware */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-50/80 group">
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 pt-3 w-[340px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-4 animate-fade-in ring-1 ring-black/5">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                      Our Products
                    </p>
                    <Link
                      href="/"
                      className={`flex items-start gap-3 p-3 rounded-xl transition-colors group ${!isKindora ? "bg-blue-50" : "hover:bg-gray-50"}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                          Space Nexus VDR
                        </p>
                        <p className="text-xs text-gray-500">
                          Virtual Data Room for M&A & due diligence
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/kindora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-start gap-3 p-3 rounded-xl transition-colors group ${isKindora ? "bg-blue-50" : "hover:bg-gray-50"}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                          Kindora NGO OS
                        </p>
                        <p className="text-xs text-gray-500">
                          Complete operating system for nonprofits
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {isKindora ? (
              <>
                {/* Kindora Features Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setKindoraFeaturesOpen(true)}
                  onMouseLeave={() => setKindoraFeaturesOpen(false)}
                >
                  <button className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-50/80 group">
                    Features
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${kindoraFeaturesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {kindoraFeaturesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[600px]">
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-6 animate-fade-in ring-1 ring-black/5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-gray-900">
                            Platform Features
                          </h3>
                          <Link
                            href="/kindora/features"
                            className="text-xs font-medium text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1"
                          >
                            View All
                            <svg
                              className="w-3 h-3"
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
                        <div className="grid grid-cols-2 gap-2">
                          {kindoraFeatures.map((feature) => (
                            <Link
                              key={feature.name}
                              href={feature.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563eb] flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                                {feature.icon}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors">
                                  {feature.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {feature.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Kindora Nav Links */}
                {kindoraNavLinks
                  .filter((link) => link.name !== "Features")
                  .map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-50/80 group"
                    >
                      {link.name}
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#2563eb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                    </Link>
                  ))}
              </>
            ) : (
              <>
                {/* VDR Nav Links */}
                {vdrNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-50/80 group"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#2563eb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </Link>
                ))}

                {/* Industries Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  <button className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-50/80 group">
                    Industries
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {industriesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[600px]">
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-6 animate-fade-in ring-1 ring-black/5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-gray-900">
                            Industries We Serve
                          </h3>
                          <Link
                            href="/industries"
                            className="text-xs font-medium text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1"
                          >
                            View All
                            <svg
                              className="w-3 h-3"
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
                        <div className="grid grid-cols-2 gap-2">
                          {industries.map((industry) => (
                            <Link
                              key={industry.name}
                              href={industry.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563eb] flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                                {industry.icon}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors">
                                  {industry.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {industry.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href={isKindora ? "/kindora/demo" : "/demo"}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
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

            <div className=" flex justify-center">
              <a
                href={isKindora ? "https://cad.spaceaiapp.com/kindora" : "https://cad.spaceaiapp.com/vdr"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold  text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Try for Free
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-fade-in bg-white">
            <div className="space-y-1">
              {/* Mobile Products Accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                >
                  Products
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileProductsOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    <Link
                      href="/"
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${!isKindora ? "bg-blue-50 text-[#2563eb]" : "text-gray-600 hover:bg-gray-50"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">
                        Space Nexus VDR
                      </span>
                    </Link>
                    <Link
                      href="/kindora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${isKindora ? "bg-blue-50 text-[#2563eb]" : "text-gray-600 hover:bg-gray-50"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">
                        Kindora NGO OS
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              {isKindora ? (
                <>
                  {/* Kindora Mobile Features Accordion */}
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() =>
                        setMobileKindoraFeaturesOpen(!mobileKindoraFeaturesOpen)
                      }
                    >
                      Features
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileKindoraFeaturesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {mobileKindoraFeaturesOpen && (
                      <div className="pl-4 space-y-1 mt-1">
                        {kindoraFeatures.map((feature) => (
                          <Link
                            key={feature.name}
                            href={feature.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {feature.name}
                          </Link>
                        ))}
                        <Link
                          href="/kindora/features"
                          className="block px-4 py-2 text-sm font-medium text-[#2563eb] hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Features →
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Kindora Mobile Links */}
                  {kindoraNavLinks
                    .filter((link) => link.name !== "Features")
                    .map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                </>
              ) : (
                <>
                  {/* VDR Mobile Nav Links */}
                  {vdrNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}

                  {/* Mobile Industries Accordion */}
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() =>
                        setMobileIndustriesOpen(!mobileIndustriesOpen)
                      }
                    >
                      Industries
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {mobileIndustriesOpen && (
                      <div className="pl-4 space-y-1 mt-1">
                        {industries.map((industry) => (
                          <Link
                            key={industry.name}
                            href={industry.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {industry.name}
                          </Link>
                        ))}
                        <Link
                          href="/industries"
                          className="block px-4 py-2 text-sm font-medium text-[#2563eb] hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Industries →
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              )}

              <hr className="border-gray-200 my-4" />
              <Link
                href={isKindora ? "/kindora/demo" : "/demo"}
                className="block mx-4 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full text-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
