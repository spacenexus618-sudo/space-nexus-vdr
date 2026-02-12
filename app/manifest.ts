import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Space Nexus - Enterprise Virtual Data Room",
    short_name: "Space Nexus",
    description:
      "Enterprise-grade Virtual Data Room for M&A due diligence, capital raising, and secure document sharing.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0066FF",
    orientation: "portrait-primary",
    scope: "/",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    categories: ["business", "productivity", "finance", "security"],
    lang: "en",
    dir: "ltr",
  };
}
