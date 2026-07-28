import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Kindora Social Media",
    description: "Follow Kindora on YouTube, Instagram, Twitter/X, LinkedIn, and Facebook for nonprofit management tips, product updates, and industry insights.",
    alternates: {
        canonical: "/kindora/social-media",
    },
};

const platforms = [
  { name: "YouTube", href: "https://www.youtube.com/@KindoraNGOOS", color: "hover:bg-[#FF0000]" },
  { name: "Instagram", href: "https://www.instagram.com/space_kindora/", color: "hover:bg-[#E1306C]" },
  { name: "Twitter / X", href: "https://x.com/space_kindora", color: "hover:bg-black" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/kindora-ngo-os", color: "hover:bg-[#0A66C2]" },
  { name: "Facebook", href: "https://www.facebook.com/kindora.ngo.os", color: "hover:bg-[#1877F2]" },
];

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Connect With Kindora</h1>
          <p className="text-lg text-gray-400">Join our nonprofit community across social platforms.</p>
        </div>

        <div className="grid gap-4">
          {platforms.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 border border-gray-700 hover:border-gray-500 transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center ${p.color} transition-colors duration-200`}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <span className="text-white font-medium">{p.name}</span>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/kindora" className="text-sm text-gray-500 hover:text-gray-300">← Back to Kindora home</Link>
        </div>
      </div>
    </div>
  );
}
