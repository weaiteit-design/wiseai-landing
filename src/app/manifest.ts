import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WiseAI — Master AI Before It Masters You",
    short_name: "WiseAI",
    description:
      "Daily AI news, bite-sized lessons, 50+ tool comparisons, and AI duels — one app, 15 minutes a day.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1A2B",
    theme_color: "#0B1A2B",
    icons: [
      {
        src: "/wiseai-logo.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}
