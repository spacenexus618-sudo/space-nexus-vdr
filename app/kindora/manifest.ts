import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kindora NGO OS",
    short_name: "Kindora",
    description:
      "All-in-one operating system for nonprofit organizations. Manage donors, grants, clients, volunteers, and programs in one integrated platform.",
    start_url: "/kindora",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        // TODO: replace with a dedicated Kindora 192×192 icon
        src: "/icononly_transparent_nobuffer.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        // TODO: replace with a dedicated Kindora 512×512 icon
        src: "/icononly_transparent_nobuffer.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
