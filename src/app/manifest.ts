import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WiseAI. Master AI Before It Masters You",
    short_name: "WiseAI",
    description:
      "Short daily lessons, real practice, and the AI news that matters. Get good at AI in 10 minutes a day.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF6EE",
    theme_color: "#FBF6EE",
    icons: [
      {
        src: "/wiseai-logo.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}
