import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service. WiseAI",
  description: "The terms governing your use of the WiseAI app and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="May 3, 2026">
      <p>
        Welcome to <strong>WiseAI</strong>. These Terms of Service
        (&quot;Terms&quot;) govern your access to and use of the WiseAI mobile
        application, website, and related services (collectively, the
        &quot;Service&quot;) operated by WiseAI (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;).
      </p>
      <p>
        By creating an account or using the Service, you agree to be bound by
        these Terms. If you don't agree, please don't use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old to use WiseAI. If you're under 18,
        you confirm that a parent or guardian has reviewed these Terms and
        consents to your use.
      </p>

      <h2>2. Your Account</h2>
      <p>
        You're responsible for keeping your account credentials secure and for
        all activity that happens under your account. Notify us immediately at{" "}
        <a href="mailto:hello@thewiseai.app">hello@thewiseai.app</a> if you suspect
        unauthorized access.
      </p>
      <p>
        We may suspend or terminate accounts that violate these Terms, abuse
        the Service, or pose a risk to other users.
      </p>

      <h2>3. Subscriptions & Billing</h2>
      <p>
        WiseAI offers a free tier and paid plans (WiseAI Pro / Premium).
        Subscriptions are processed by Apple App Store or Google Play and are
        subject to their respective terms.
      </p>
      <ul>
        <li>
          <strong>Auto-renewal</strong>, paid subscriptions renew automatically
          at the end of each billing period unless canceled at least 24 hours
          before renewal.
        </li>
        <li>
          <strong>Cancellation</strong>, you can cancel anytime from your
          App Store or Google Play subscription settings. Cancellation takes
          effect at the end of the current billing period.
        </li>
        <li>
          <strong>Refunds</strong>, refund requests are handled by Apple or
          Google according to their policies.
        </li>
        <li>
          <strong>Free trials</strong>, if a free trial is offered, you'll be
          charged when it ends unless canceled before then.
        </li>
      </ul>

      <h2>4. Acceptable Use</h2>
      <p>
        You agree not to:
      </p>
      <ul>
        <li>Use the Service for any unlawful purpose</li>
        <li>Attempt to reverse engineer, decompile, or extract source code</li>
        <li>Scrape, mass-download, or systematically harvest content</li>
        <li>Resell, sublicense, or redistribute the Service without permission</li>
        <li>Use the AI chat features to generate harmful, illegal, or abusive content</li>
        <li>Interfere with the Service's security or integrity</li>
        <li>Impersonate another person or misrepresent your affiliation</li>
        <li>Submit content you don't have the right to share</li>
      </ul>

      <h2>5. AI-Generated Content</h2>
      <p>
        WiseAI uses third-party AI models (Google Gemini) to generate lesson
        content, summaries, and chat responses. AI output may contain
        inaccuracies or errors. <strong>Always verify important information</strong>{" "}
        independently before relying on it. We're not liable for decisions you
        make based on AI-generated content.
      </p>

      <h2>6. User Content</h2>
      <p>
        You retain ownership of any content you submit (such as community
        posts, prompt responses, or feedback). By submitting content, you grant
        us a worldwide, non-exclusive, royalty-free license to use, store,
        display, and distribute it within the Service. We may remove content
        that violates these Terms.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        WiseAI and all related content (lessons, branding, code, design, logos)
        are the property of WiseAI or its licensors and are protected by
        copyright, trademark, and other laws. You may not use our trademarks
        without prior written consent.
      </p>

      <h2>8. Third-Party Services</h2>
      <p>
        The Service integrates with third-party providers (Google, Apple,
        Supabase, RevenueCat, Sentry, etc.). Their services are governed by
        their own terms and privacy policies, and we're not responsible for
        their actions or content.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        The Service is provided <strong>&quot;as is&quot; and &quot;as
        available&quot;</strong>, without warranties of any kind, express or
        implied. We don't guarantee uninterrupted access, error-free operation,
        or that the Service will meet your specific needs. WiseAI is an
        educational tool, not professional advice.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, WiseAI and its affiliates,
        employees, and partners will not be liable for any indirect, incidental,
        special, consequential, or punitive damages arising from your use of
        the Service. Our total liability is limited to the amount you paid us
        in the 12 months preceding the claim, or USD $50, whichever is greater.
      </p>

      <h2>11. Termination</h2>
      <p>
        You can stop using the Service and delete your account at any time
        from <strong>Profile → Settings → Delete Account</strong>. We may
        suspend or terminate your account if you violate these Terms or for any
        reason at our sole discretion. On termination, your right to use the
        Service ends immediately.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be
        communicated via email or in-app notification. Continued use after
        changes constitutes acceptance.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which
        WiseAI is established, without regard to conflict-of-law principles.
        Any disputes will be resolved in the courts of that jurisdiction.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms? Reach out:
      </p>
      <ul>
        <li>
          Email: <a href="mailto:hello@thewiseai.app">hello@thewiseai.app</a>
        </li>
        <li>
          Privacy questions:{" "}
          <a href="mailto:privacy@thewiseai.app">privacy@thewiseai.app</a>
        </li>
      </ul>
    </LegalLayout>
  );
}
