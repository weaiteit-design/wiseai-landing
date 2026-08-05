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
          "WiseAI helps busy people learn AI and stay current in about 15 minutes a day.",
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
        operatingSystem: "iOS, Android",
        applicationCategory: "EducationalApplication",
        description:
          "WiseAI is a mobile app that helps you learn AI and stay current in about 15 minutes a day: personalized daily AI news, 500+ interactive lessons, 50+ AI tools compared, an AI chat tutor, AI duels, and an AI IQ test.",
        featureList: [
          "Personalized daily AI news: 25 updates from 30+ sources",
          "500+ interactive micro-lessons and adaptive paths",
          "50+ AI tools compared with honest ratings",
          "AI chat tutor powered by Gemini",
          "AI duels and a weekly leaderboard",
          "AI IQ test with a shareable score",
          "Spaced-repetition review and certificates",
          "Daily missions, XP, streaks, and badges",
        ],
        publisher: { "@id": "https://www.thewiseai.app/#organization" },
        offers: [
          {
            "@type": "Offer",
            name: "Free",
            price: "0",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "WiseAI Pro",
            description:
              "Unlimited AI chat tutor, deep-reads, advanced lessons, spaced repetition, and certificates. Pricing varies by region.",
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
