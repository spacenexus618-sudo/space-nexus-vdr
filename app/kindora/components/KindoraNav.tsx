"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const quickLinks = [
  { label: "Features", href: "/kindora/features" },
  { label: "Solutions", href: "/kindora/solutions" },
  { label: "Pricing", href: "/kindora/pricing" },
  { label: "Blog", href: "/kindora/blog" },
  { label: "Reviews", href: "/kindora/consumer-review" },
];

export default function KindoraNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setProductsOpen(false);
    setContactOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          {/* Logo */}
          <Link
            href="/kindora"
            className="flex items-center gap-2.5 group"
            aria-label="Kindora Home"
          >
            <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/icononly_transparent_nobuffer.png"
                alt="Kindora"
                className="object-contain drop-shadow-md w-full h-full"
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gray-700">
                SPACE
              </span>
              <span className="text-xl font-black tracking-tight text-[#2563eb] transition-colors duration-300 group-hover:text-[#1d4ed8]">
                KINDORA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-50/80 group">
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      onClick={() => setProductsOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
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
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      onClick={() => setProductsOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                          Kindora
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

            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-50/80 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#2563eb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}

            {/* Contact Dropdown */}
            <div
              className="relative"
              ref={contactRef}
              onMouseEnter={() => setContactOpen(true)}
              onMouseLeave={() => setContactOpen(false)}
            >
              <button className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-50/80 group">
                Contact
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${contactOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {contactOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[700px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-5 animate-fade-in ring-1 ring-black/5">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1 mb-3">
                      Global Offices
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { flag: "🇺🇸", phone: "+1 646 421 5740", email: "usa@pmspace.ai", address: "2500 MARCONI AVE, STE 101, SACRAMENTO, CA 95821 USA" },
                        { flag: "🇨🇦", phone: "+1 (979) 326-9493", email: "ca@pmspace.ai", address: "North America - Regional Office, Toronto, ON, Canada" },
                        { flag: "🇦🇪", phone: "+971 56 256 7509", email: "uae@pmspace.ai", address: "Middle East Regional Office, Dubai, UAE" },
                        { flag: "🇸🇦", phone: "+966 56 208 1999", email: "sa@pmspace.ai", address: "Saudi Arabia Office, Riyadh, Kingdom of Saudi Arabia" },
                        { flag: "🇰🇼", phone: "+965 9724 3755", email: "kw@pmspace.ai", address: "Kuwait City, Strategic Partner for Gulf Region" },
                        { flag: "🇸🇬", phone: "+65 86 111 900", email: "sg@pmspace.ai", address: "7 Soon Lee St, #04-39 ISPACE BUILDING, Singapore 627608" },
                      ].map((office) => (
                        <div key={office.flag} className="p-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-50">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg">{office.flag}</span>
                            <a href={`tel:${office.phone.replace(/[\s()\-]/g, "")}`} className="text-sm font-semibold text-gray-900 hover:text-[#2563eb] transition-colors">
                              {office.phone}
                            </a>
                          </div>
                          <a href={`mailto:${office.email}`} className="text-xs text-[#2563eb] hover:text-[#1d4ed8] transition-colors block mb-0.5">
                            {office.email}
                          </a>
                          <p className="text-xs text-gray-500 leading-tight">{office.address}</p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-3 pt-3 px-1">
                      <Link
                        href="/kindora/contact"
                        className="flex items-center justify-between w-full py-1.5 text-sm font-medium text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
                      >
                        Send us a message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/kindora/demo"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Request a Demo
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <div className="flex justify-center">
              <a
                href="https://cad.spaceaiapp.com/kindora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Try for Free
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
