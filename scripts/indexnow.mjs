/**
 * Ping IndexNow so Bing (and therefore Copilot and ChatGPT search, which lean on
 * Bing's index) picks up changes in minutes instead of waiting for a crawl.
 * Yandex and Seznam share the same protocol and the same submission.
 *
 * Google does NOT participate in IndexNow. Google discovery comes from the
 * sitemap plus Search Console.
 *
 * Ownership is proven by a key file served at the site root, which must contain
 * exactly the key. Both live in this repo so they cannot drift apart:
 *   public/<INDEXNOW_KEY>.txt
 *
 * Usage:  node scripts/indexnow.mjs
 * Safe to run repeatedly. It submits the full URL list, which is what the
 * protocol expects for a small site.
 */

const KEY = "9aefcc584ad9490fff3859e1b6449609";
const HOST = "www.thewiseai.app";
const BASE = `https://${HOST}`;

// Mirrors src/app/sitemap.ts. Kept explicit rather than imported because this
// script runs in plain Node, outside the Next build.
const PATHS = [
  "/",
  "/iq",
  "/best-ai-learning-app",
  "/duolingo-for-ai",
  "/ai-news-app",
  "/learn-chatgpt",
  "/learn-claude",
  "/learn-gemini",
  "/ai-for-work",
  "/blog",
  "/blog/chatgpt-vs-claude-vs-gemini",
  "/blog/15-minutes-a-day-vs-weekend-bootcamp",
  "/blog/whats-your-ai-iq",
  "/blog/best-ai-learning-apps-2026",
  "/privacy",
  "/terms",
];

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList: PATHS.map((p) => `${BASE}${p}`),
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

// 200 and 202 both mean accepted. 422 usually means the key file is not
// reachable yet, which happens if you ping before the deploy finishes.
console.log(`IndexNow: HTTP ${res.status} for ${body.urlList.length} URLs`);
if (!res.ok) {
  console.log(await res.text());
  console.log(`Check that ${body.keyLocation} is live and contains only the key.`);
  process.exit(1);
}
