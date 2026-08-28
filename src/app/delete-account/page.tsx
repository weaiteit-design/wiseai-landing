import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Delete Your Account. WiseAI",
  description:
    "How to delete your WiseAI account and everything associated with it, from inside the app or by email.",
  alternates: { canonical: "/delete-account" },
};

export default function DeleteAccountPage() {
  return (
    <LegalLayout title="Delete Your Account" lastUpdated="August 28, 2026">
      <p>
        You can delete your WiseAI account at any time. Deleting your account
        removes your profile and your learning history permanently. It cannot
        be undone.
      </p>

      <h2>Delete from inside the app</h2>
      <p>This is the fastest route and takes effect immediately.</p>
      <ol>
        <li>Open WiseAI and go to the <strong>Profile</strong> tab.</li>
        <li>Scroll to the bottom, past Sign Out.</li>
        <li>Tap <strong>Delete Account</strong>.</li>
        <li>
          Confirm on the warning that appears. It tells you the action cannot
          be undone.
        </li>
      </ol>
      <p>
        Your account and data are deleted straight away. You will be signed out
        on every device.
      </p>

      <h2>Delete by email</h2>
      <p>
        If you cannot access the app, email{" "}
        <a href="mailto:support@thewiseai.app">support@thewiseai.app</a> from
        the address on your account, with the subject{" "}
        <strong>Delete my account</strong>. We action these within 30 days and
        will confirm by email once it is done.
      </p>
      <p>
        We can only accept requests sent from the email address registered to
        the account. This is to stop someone else deleting your account.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your profile: name, email address and profile photo.</li>
        <li>
          Your learning history: lessons completed, XP, streaks, achievements
          and saved items.
        </li>
        <li>Your quiz results and personalised learning path.</li>
        <li>Your chat history with the in-app AI assistant.</li>
        <li>Any content you have submitted.</li>
      </ul>

      <h2>What is kept, and for how long</h2>
      <ul>
        <li>
          <strong>Purchase and transaction records.</strong> Kept for as long
          as tax and accounting law requires, typically seven years. These are
          held by Apple or Google, not by us, and we cannot delete them on
          your behalf.
        </li>
        <li>
          <strong>Anonymised, aggregated usage statistics.</strong> These carry
          no identifiers and cannot be traced back to you.
        </li>
        <li>
          <strong>Backups.</strong> Your data may persist in encrypted backups
          for up to 30 days after deletion, after which it is overwritten.
        </li>
      </ul>

      <h2>Your subscription</h2>
      <p>
        Deleting your account does <strong>not</strong> cancel a paid
        subscription. Subscriptions are billed by Apple or Google, so you have
        to cancel with them:
      </p>
      <ul>
        <li>
          <strong>iPhone or iPad:</strong> Settings, then your name, then
          Subscriptions, then WiseAI, then Cancel Subscription.
        </li>
        <li>
          <strong>Android:</strong> Play Store, then your profile icon, then
          Payments and subscriptions, then Subscriptions, then WiseAI, then
          Cancel.
        </li>
      </ul>
      <p>
        Cancel before you delete your account, or you will keep being charged.
      </p>

      <h2>Questions</h2>
      <p>
        Email <a href="mailto:support@thewiseai.app">support@thewiseai.app</a>{" "}
        and we will help. See our <a href="/privacy">Privacy Policy</a> for how
        we handle your information generally.
      </p>
    </LegalLayout>
  );
}
