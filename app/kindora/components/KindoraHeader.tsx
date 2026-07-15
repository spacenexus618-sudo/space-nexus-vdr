"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const featureLinks = [
  {
    name: "Dashboard & Analytics",
    href: "/kindora/features/dashboard-analytics",
    description: "Real-time KPIs and insights",
  },
  {
    name: "Donor Management",
    href: "/kindora/features/donor-management",
    description: "Complete donor profiles and tracking",
  },
  {
    name: "Campaign Management",
    href: "/kindora/features/campaign-management",
    description: "Fundraising goal tracking",
  },
  {
    name: "Grant Management",
    href: "/kindora/features/grant-management",
    description: "Full grant lifecycle tracking",
  },
  {
    name: "Expense Management",
    href: "/kindora/features/expense-management",
    description: "Bills, vendors, cost allocation",
  },
  {
    name: "Financial Management",
    href: "/kindora/features/financial-management",
    description: "Chart of accounts and budgets",
  },
  {
    name: "Client Management",
    href: "/kindora/features/client-management",
    description: "Intake, services, enrollments",
  },
  {
    name: "People Management",
    href: "/kindora/features/people-management",
    description: "Employees and volunteers",
  },
  {
    name: "Communications",
    href: "/kindora/features/communications",
    description: "Email templates and logging",
  },
  {
    name: "Reporting",
    href: "/kindora/features/reporting",
    description: "PDF, Excel, and analytics",
  },
  {
    name: "User Management",
    href: "/kindora/features/user-management",
    description: "RBAC and security",
  },
  {
    name: "File Management",
    href: "/kindora/features/file-management",
    description: "Document uploads and storage",
  },
  {
    name: "Settings",
    href: "/kindora/features/settings",
    description: "Customization and preferences",
  },
];

export default function KindoraHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
        : "bg-gradient-to-b from-white/90 to-white/70"
        }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/kindora" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Kindora
              </span>
              <span className="text-[10px] font-medium text-[#2563eb] uppercase tracking-wider -mt-1">
                NGO OS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button className={`flex items-center px-4 py-2 text-sm font-medium transition-colors ${isActive("/kindora/features") ? "text-[#2563eb]" : "text-gray-700 hover:text-[#2563eb]"}`}>
                Features
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${featuresOpen ? "rotate-180" : ""}`}
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

              {featuresOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[600px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-4 grid grid-cols-2 gap-1">
                    <Link
                      href="/kindora/features"
                      className="col-span-2 flex items-center p-3 rounded-xl hover:bg-[#2563eb]/5 transition-colors border-b border-gray-100 mb-2"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] mr-3">
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
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">
                          All Features
                        </span>
                        <p className="text-xs text-gray-500">
                          Explore everything Kindora offers
                        </p>
                      </div>
                    </Link>
                    {featureLinks.map((feature) => (
                      <Link
                        key={feature.href}
                        href={feature.href}
                        className="flex items-start p-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-800 group-hover:text-[#2563eb] transition-colors">
                            {feature.name}
                          </span>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/kindora/solutions"
              className={`px-4 py-2 text-sm font-medium transition-colors ${isActive("/kindora/solutions") ? "text-[#2563eb]" : "text-gray-700 hover:text-[#2563eb]"}`}
            >
              Solutions
            </Link>
            <Link
              href="/kindora/pricing"
              className={`px-4 py-2 text-sm font-medium transition-colors ${isActive("/kindora/pricing") ? "text-[#2563eb]" : "text-gray-700 hover:text-[#2563eb]"}`}
            >
              Pricing
            </Link>
            <Link
              href="/kindora/blog"
              className={`px-4 py-2 text-sm font-medium transition-colors ${isActive("/kindora/blog") ? "text-[#2563eb]" : "text-gray-700 hover:text-[#2563eb]"}`}
            >
              Blog
            </Link>
            <Link
              href="/kindora/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors ${isActive("/kindora/contact") ? "text-[#2563eb]" : "text-gray-700 hover:text-[#2563eb]"}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://cad.spaceaiapp.com/kindora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-100 hover:border-[#2563eb]/20 hover:bg-gray-50 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Request Demo
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-gray-700"
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
                className="w-6 h-6 text-gray-700"
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {/* Features Accordion */}
            <div>
              <button
                onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Features
                <svg
                  className={`w-5 h-5 transition-transform ${mobileFeaturesOpen ? "rotate-180" : ""}`}
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
              {mobileFeaturesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/kindora/features"
                    className="block px-4 py-2 text-sm font-medium text-[#2563eb] hover:bg-[#2563eb]/5 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Features
                  </Link>
                  {featureLinks.map((feature) => (
                    <Link
                      key={feature.href}
                      href={feature.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {feature.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/kindora/solutions"
              className={`block px-4 py-3 text-base font-medium rounded-lg ${isActive("/kindora/solutions") ? "text-[#2563eb] bg-[#2563eb]/5" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/kindora/pricing"
              className={`block px-4 py-3 text-base font-medium rounded-lg ${isActive("/kindora/pricing") ? "text-[#2563eb] bg-[#2563eb]/5" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/kindora/blog"
              className={`block px-4 py-3 text-base font-medium rounded-lg ${isActive("/kindora/blog") ? "text-[#2563eb] bg-[#2563eb]/5" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/kindora/contact"
              className={`block px-4 py-3 text-base font-medium rounded-lg ${isActive("/kindora/contact") ? "text-[#2563eb] bg-[#2563eb]/5" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href="https://cad.spaceaiapp.com/kindora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try for Free
              </a>
              <Link
                href="/kindora/contact"
                className="flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Demo
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
