import type { MetadataRoute } from "next";

// Explicitly welcome the major AI answer-engine crawlers. A wildcard already
// allows them, but naming them is a clear signal that WiseAI wants to be indexed
// and cited by AI assistants (see /ai.txt and /llms.txt).
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/",
      })),
    ],
    sitemap: "https://www.thewiseai.app/sitemap.xml",
    host: "https://www.thewiseai.app",
  };
}
