import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  main: {
    title: "",
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

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
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
            <p className="text-base text-gray-600 mb-8 max-w-md">
              Enterprise-grade virtual data room platform for secure M&A
              transactions, due diligence, and capital raising.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                aria-label="Twitter/X"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Navigation
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
              © {new Date().getFullYear()} Space Nexus. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-500">Privacy Policy</span>
              <span className="text-sm text-gray-500">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
