import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "WiseAI — Master AI before it masters you";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HEADLINE = "Master AI before it masters you.";
const TAGLINE = "Daily AI news · bite-sized lessons · 50+ tool comparisons · AI duels";

// Fetch real Google Font subsets so the OG card matches the site's actual
// typography (Instrument Serif italic headline + Inter body) instead of
// whatever generic fallback Satori happens to substitute.
async function getGoogleFont(
  family: string,
  text: string,
  axes = ""
): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}${axes}&text=${encodeURIComponent(text)}`
    ).then((res) => res.text());
    const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1];
    if (!fontUrl) return null;
    return await fetch(fontUrl).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Image() {
  const logo = readFileSync(join(process.cwd(), "public", "wiseai-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  const [serifItalic, sans] = await Promise.all([
    getGoogleFont("Instrument Serif", HEADLINE, ":ital@1"),
    getGoogleFont("Inter", TAGLINE),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B1A2B",
          backgroundImage:
            "linear-gradient(180deg, #0d1f33 0%, #0B1A2B 420px, #0B1A2B 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={100} height={100} alt="" />
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 60,
            fontStyle: "italic",
            color: "#F5F5F7",
            fontFamily: serifItalic ? "Instrument Serif" : "serif",
            textAlign: "center",
            gap: "0.22em",
          }}
        >
          <span>Master</span>
          <span style={{ color: "#F97316" }}>AI</span>
          <span>before</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontStyle: "italic",
            color: "#F5F5F7",
            fontFamily: serifItalic ? "Instrument Serif" : "serif",
          }}
        >
          it{" "}masters{" "}you.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 26,
            color: "#9CA3AF",
            fontFamily: sans ? "Inter" : "sans-serif",
          }}
        >
          {TAGLINE}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(serifItalic
          ? [{ name: "Instrument Serif", data: serifItalic, style: "italic" as const, weight: 400 as const }]
          : []),
        ...(sans ? [{ name: "Inter", data: sans, style: "normal" as const, weight: 400 as const }] : []),
      ],
    }
  );
}
