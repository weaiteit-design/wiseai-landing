export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "WiseAI",
        url: "https://www.thewiseai.app",
        logo: "https://www.thewiseai.app/wiseai-logo.png",
        sameAs: [],
      },
      {
        "@type": "MobileApplication",
        name: "WiseAI",
        operatingSystem: "iOS, Android",
        applicationCategory: "EducationalApplication",
        description:
          "Daily AI news, bite-sized lessons, 50+ tool comparisons, and AI duels — one app, 15 minutes a day.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
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
