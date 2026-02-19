"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const vdrFooterLinks = {
  main: {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Request Demo", href: "/demo" },
    ],
  },
  features: {
    title: "Product Features",
    links: [
      { name: "Deals", href: "/features/deals" },
      { name: "Data Room", href: "/features/data-room" },
      { name: "Q&A Module", href: "/features/qa" },
      { name: "Users & Permissions", href: "/features/users-permissions" },
      { name: "Activity & Analytics", href: "/features/activity-analytics" },
      { name: "Reports", href: "/features/reports" },
      { name: "Integrations", href: "/features/integrations" },
      { name: "Security & Compliance", href: "/features/security-compliance" },
    ],
  },
};

const kindoraFooterLinks = {
  main: {
    title: "Navigation",
    links: [
      { name: "Home", href: "/kindora" },
      { name: "Features", href: "/kindora/features" },
      { name: "Solutions", href: "/kindora/solutions" },
      { name: "Pricing", href: "/kindora/pricing" },
      { name: "Request Demo", href: "/kindora/contact" },
    ],
  },
  features: {
    title: "Platform Features",
    links: [
      {
        name: "Dashboard & Analytics",
        href: "/kindora/features/dashboard-analytics",
      },
      { name: "Donor Management", href: "/kindora/features/donor-management" },
      { name: "Grant Management", href: "/kindora/features/grant-management" },
      {
        name: "Campaign Management",
        href: "/kindora/features/campaign-management",
      },
      {
        name: "Client & Programs",
        href: "/kindora/features/client-management",
      },
      {
        name: "Financial Management",
        href: "/kindora/features/financial-management",
      },
      { name: "Reporting & Export", href: "/kindora/features/reporting" },
      { name: "Communications", href: "/kindora/features/communications" },
    ],
  },
};

export default function Footer() {
  const pathname = usePathname();
  const isKindora = pathname?.startsWith("/kindora");
  const footerLinks = isKindora ? kindoraFooterLinks : vdrFooterLinks;

  return (
    <footer className="bg-white border-t border-gray-200" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {isKindora ? (
              <Link
                href="/kindora"
                className="flex items-center gap-2.5 mb-6"
                aria-label="Kindora NGO OS Home"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black tracking-tight text-[#2563eb]">
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
                className="flex items-center gap-2.5 mb-6"
                aria-label="Space Nexus Home"
              >
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/icononly_transparent_nobuffer.png"
                    alt="Space Nexus Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black tracking-tight text-gray-900">
                    SPACE
                  </span>
                  <span className="text-xl font-black tracking-tight text-[#2563eb]">
                    NEXUS
                  </span>
                </div>
              </Link>
            )}
            <p className="text-base text-gray-600 mb-8 max-w-md">
              {isKindora
                ? "The complete operating system for nonprofits. Manage donors, track grants, deliver programs, and report impact from a single platform."
                : "Enterprise-grade virtual data room platform for secure M&A transactions, due diligence, and capital raising."}
            </p>

            {/* Contact Info for Kindora */}
            {isKindora && (
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Contact:</span>{" "}
                  <a
                    href="mailto:contact@spacenexus.net"
                    className="text-[#2563eb] hover:underline"
                  >
                    contact@spacenexus.net
                  </a>
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="font-medium text-gray-900">SG:</span>{" "}
                  <a href="tel:+6586111900" className="text-[#2563eb] hover:underline">
                    +65 8611 1900
                  </a>
                </p>
                <p className="text-xs text-gray-500">Version: Kindora-V1.0</p>
              </div>
            )}

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:text-white hover:bg-black hover:border-black transition-all duration-300"
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:text-white hover:border-transparent hover:bg-[#E1306C] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:text-white hover:border-transparent hover:bg-[#FF0000] transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              {footerLinks.main.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.main.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              {footerLinks.features.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.features.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()}{" "}
              {isKindora ? "SpaceAI App - Kindora NGO OS" : "Space Nexus"}. All
              rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-500">Privacy Policy</span>
              <span className="text-sm text-gray-500">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
