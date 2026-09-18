"use client";

import { useSearchParams } from "next/navigation";

export default function CallbackCode() {
  const params = useSearchParams();
  const code = params.get("code");
  const error = params.get("error_description") || params.get("error");

  if (error) {
    return <p>TikTok returned an error: {error}</p>;
  }
  if (!code) {
    return <p>This page finishes connecting a TikTok account to WiseAI Studio. There is nothing to do here.</p>;
  }
  return (
    <>
      <p>TikTok approved the connection. Copy this full page address and paste it back to the WiseAI team.</p>
      <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>{code}</p>
    </>
  );
}
