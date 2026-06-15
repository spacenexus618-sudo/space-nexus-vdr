import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce no trailing slash for consistent canonical URLs
  trailingSlash: false,

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
