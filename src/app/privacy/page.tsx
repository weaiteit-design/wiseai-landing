import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — WiseAI",
  description:
    "How WiseAI collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 3, 2026">
      <p>
        This Privacy Policy describes how <strong>WiseAI</strong> (&quot;WiseAI,&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares
        information about you when you use our mobile application and related
        services (collectively, the &quot;Service&quot;).
      </p>
      <p>
        By using WiseAI, you agree to the collection and use of information as
        described in this policy. If you do not agree, please do not use the
        Service.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Account Information</h3>
      <p>
        When you sign up, we collect:
      </p>
      <ul>
        <li>
          <strong>Email address</strong> — used for authentication, account
          recovery, and important service communications.
        </li>
        <li>
          <strong>Name and profile photo</strong> — if you sign in with Google
          or Apple, we receive your name and profile picture from those
          providers (with your permission).
        </li>
        <li>
          <strong>Optional onboarding answers</strong> — such as your role,
          industry, AI experience level, and topics of interest. These power
          your personalized feed and lesson recommendations.
        </li>
      </ul>

      <h3>Usage Data</h3>
      <p>
        We collect information about how you interact with the app to deliver
        and improve the Service:
      </p>
      <ul>
        <li>Lessons completed, streaks, XP earned, and quiz results</li>
        <li>Articles read, bookmarks, and search queries</li>
        <li>Feature usage and in-app navigation events</li>
        <li>Device type, OS version, app version, and crash logs</li>
      </ul>

      <h3>AI Chat Content</h3>
      <p>
        When you use AI chat features, your messages are sent to our AI
        providers (Google Gemini) for response generation. We may store these
        conversations to provide chat history within the app and improve the
        Service. We do not use your conversations to train AI models.
      </p>

      <h3>Subscription & Payment Data</h3>
      <p>
        WiseAI Pro subscriptions are processed by Apple App Store and Google
        Play. We never receive your payment card details. We do receive
        anonymized subscription status (active, expired, trial) via RevenueCat
        to grant access to Pro features.
      </p>

      <h3>Cookies & Local Storage</h3>
      <p>
        Our website uses cookies and local storage to remember preferences and
        track basic analytics. The mobile app uses device storage to cache
        content for offline use.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide, maintain, and improve the Service</li>
        <li>To personalize your content feed and lesson recommendations</li>
        <li>To send you transactional notifications (streak reminders, account alerts)</li>
        <li>To respond to your support requests</li>
        <li>To detect, prevent, and address technical issues, fraud, or abuse</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>
        We <strong>do not sell</strong> your personal information. We share data
        only with the following categories of recipients:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> — Supabase (database & auth),
          Google Gemini (AI features), Sentry (crash reporting), RevenueCat
          (subscriptions), Apple/Google (sign-in & payments). Each operates
          under their own privacy policies and is contractually bound to
          protect your data.
        </li>
        <li>
          <strong>Legal requirements</strong> — when required by law, valid
          legal process, or to protect our rights and safety.
        </li>
        <li>
          <strong>Business transfers</strong> — in the event of a merger,
          acquisition, or asset sale, your information may be transferred.
          You'll be notified before this happens.
        </li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain your account data for as long as your account is active. If
        you delete your account, we delete your personal information within 30
        days, except where retention is required by law (e.g., financial
        records). Anonymized analytics data may be retained indefinitely.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        Depending on your jurisdiction (including GDPR, CCPA, and similar laws),
        you have the right to:
      </p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data (&quot;right to be forgotten&quot;)</li>
        <li>Export your data in a portable format</li>
        <li>Opt out of marketing communications at any time</li>
        <li>Withdraw consent where processing is based on consent</li>
      </ul>
      <p>
        To exercise these rights, email us at{" "}
        <a href="mailto:privacy@thewiseai.app">privacy@thewiseai.app</a>. You can also
        delete your account directly from the app under{" "}
        <strong>Profile → Settings → Delete Account</strong>.
      </p>

      <h2>6. Children's Privacy</h2>
      <p>
        WiseAI is not directed to children under 13. We do not knowingly
        collect personal information from children under 13. If you believe a
        child has provided us with personal information, please contact us and
        we'll delete it promptly.
      </p>

      <h2>7. International Data Transfers</h2>
      <p>
        Your data may be processed in countries outside your own. We use
        providers (Supabase, Google) that maintain industry-standard safeguards
        and comply with frameworks like GDPR Standard Contractual Clauses.
      </p>

      <h2>8. Security</h2>
      <p>
        We use industry-standard security practices: encryption in transit
        (TLS), encryption at rest, role-based access controls, and regular
        security reviews. No system is 100% secure, but we work hard to
        protect your information.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes
        will be communicated via email or in-app notification. Continued use of
        the Service after changes constitutes acceptance.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        Questions about this Privacy Policy or our data practices? Reach out:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:privacy@thewiseai.app">privacy@thewiseai.app</a>
        </li>
        <li>
          General contact:{" "}
          <a href="mailto:hello@thewiseai.app">hello@thewiseai.app</a>
        </li>
      </ul>
    </LegalLayout>
  );
}
