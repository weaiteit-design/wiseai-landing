import type { Metadata } from "next";
import { Suspense } from "react";
import LegalLayout from "@/components/LegalLayout";
import CallbackCode from "./CallbackCode";

export const metadata: Metadata = {
  title: "TikTok connection. WiseAI",
  robots: { index: false, follow: false },
};

export default function TikTokCallbackPage() {
  return (
    <LegalLayout title="TikTok connection" lastUpdated="September 18, 2026">
      <Suspense fallback={<p>Reading the response from TikTok.</p>}>
        <CallbackCode />
      </Suspense>
    </LegalLayout>
  );
}
