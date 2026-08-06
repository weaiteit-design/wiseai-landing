/**
 * Structured data for search and answer engines.
 *
 * This is a factual claim surface, not marketing copy: Google can render it as
 * a rich result and LLM crawlers read it as authoritative. It previously
 * declared an Offer with price "0" named "Free" while the app is behind a hard
 * paywall, listed AI duels (disabled), claimed 500+ lessons and 50+ tools, and
 * said Android. Everything below is verified against production.
 *
 * Keep in sync with /public/wiseai.json, /public/llms.txt and
 * /public/llms-full.txt. Counts last verified 2026-08-06.
 */

const APP_STORE_URL = "https://apps.apple.com/app/id6761073614";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.thewiseai.app/#organization",
        name: "WiseAI",
        url: "https://www.thewiseai.app",
        logo: "https://www.thewiseai.app/wiseai-logo.png",
        description:
          "WiseAI helps busy people get good at using AI in about 10 minutes a day.",
        email: "manas@thewiseai.app",
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.thewiseai.app/#website",
        url: "https://www.thewiseai.app",
        name: "WiseAI",
        publisher: { "@id": "https://www.thewiseai.app/#organization" },
        inLanguage: "en",
      },
      {
        "@type": "MobileApplication",
        "@id": "https://www.thewiseai.app/#app",
        name: "WiseAI",
        url: "https://www.thewiseai.app",
        installUrl: APP_STORE_URL,
        operatingSystem: "iOS",
        applicationCategory: "EducationalApplication",
        description:
          "WiseAI is an iOS app for getting good at using AI in about 10 minutes a day: short interactive lessons, hands-on practice, a two-minute daily AI news brief, and Wurtle Lock, a Screen Time feature that keeps your distracting apps locked until you finish a lesson.",
        featureList: [
          "457 published interactive lessons across nine categories",
          "Wurtle Lock: distracting apps stay locked until you finish a lesson",
          "A two-minute daily AI news brief, personalized by role",
          "71 AI tools compared, with lessons that teach them",
          "Hands-on prompt practice with feedback",
          "A free AI IQ test, no signup required",
          "Streaks, XP, and a progressive unlock path",
        ],
        publisher: { "@id": "https://www.thewiseai.app/#organization" },
        // No "Free" offer: the app requires a subscription. Declaring price 0
        // here would be a structured-data claim that contradicts the paywall.
        offers: [
          {
            "@type": "Offer",
            name: "WiseAI Pro, annual",
            price: "49.99",
            priceCurrency: "USD",
            category: "subscription",
            url: APP_STORE_URL,
          },
          {
            "@type": "Offer",
            name: "WiseAI Pro, weekly",
            price: "9.99",
            priceCurrency: "USD",
            category: "subscription",
            url: APP_STORE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
