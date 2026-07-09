import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce no trailing slash for consistent canonical URLs
  trailingSlash: false,

  // Redirects for legacy/short URLs and duplicate content consolidation
  async redirects() {
    return [
      {
        source: "/ma-document-sharing",
        destination: "/solutions/ma-document-sharing",
        permanent: true,
      },
      {
        source: "/blog/ma-due-diligence-checklist-2025",
        destination: "/blog/ma-due-diligence-checklist-2026",
        permanent: true,
      },
      // Consolidate duplicate VDR provider pages → single canonical
      {
        source: "/vdr-providers",
        destination: "/virtual-data-room-providers",
        permanent: true,
      },
      {
        source: "/data-room-providers",
        destination: "/virtual-data-room-providers",
        permanent: true,
      },
      // Consolidate board portal duplicate
      {
        source: "/board-portals",
        destination: "/board-portal-software",
        permanent: true,
      },
      // Consolidate deal room ↔ data room synonym duplicate
      {
        source: "/deal-room-software",
        destination: "/data-room-software",
        permanent: true,
      },
      // Consolidate redundant "VDR Data Room" naming
      {
        source: "/features/vdr-data-room",
        destination: "/features/data-room",
        permanent: true,
      },
      // Standardize M&A abbreviation (m-a → ma)
      {
        source: "/m-a-data-room-providers",
        destination: "/ma-data-room-providers",
        permanent: true,
      },
      {
        source: "/m-a-case-studies",
        destination: "/ma-case-studies",
        permanent: true,
      },
      // Shorter SEO-friendly URL for fundraising guide
      {
        source: "/fundraising-and-investor-due-diligence",
        destination: "/investor-due-diligence",
        permanent: true,
      },
      // Restructure case studies under parent directory
      {
        source: "/startup-fundraising-case-studies",
        destination: "/case-studies/startup-fundraising",
        permanent: true,
      },
    ];
  },

  // Enable gzip/brotli compression
  compress: true,

  // Optimize images: add WebP/AVIF support and cache control
  images: {
    formats: ["image/avif", "image/webp"],
    // Serve logo at the sizes we actually render it (40px in header/footer)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 40, 48, 64, 96, 128, 256],
    // Cache optimized images for 7 days
    minimumCacheTTL: 604800,
  },

  // Add cache-control and security headers
  async headers() {
    return [
      {
        // Cache static assets aggressively (JS/CSS/fonts get hashed filenames)
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache public images for 7 days with revalidation
        source: "/:path*.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/:path*.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Add security headers on all routes (improves Core Web Vitals trust signals)
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
