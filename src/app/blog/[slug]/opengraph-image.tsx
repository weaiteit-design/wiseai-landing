import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { getGoogleFont } from "@/lib/og-fonts";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";

export const runtime = "nodejs";
export const alt = "WiseAI Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const title = post?.title ?? "WiseAI Blog";

  const logo = readFileSync(join(process.cwd(), "public", "wiseai-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  const [serifItalic, sans] = await Promise.all([
    getGoogleFont("Instrument Serif", title, ":ital@1"),
    getGoogleFont("Inter", "WiseAI Blog"),
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
          padding: "0 100px",
          backgroundColor: "#0B1A2B",
          backgroundImage:
            "linear-gradient(180deg, #0d1f33 0%, #0B1A2B 420px, #0B1A2B 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={72} height={72} alt="" />
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 22,
            fontFamily: sans ? "Inter" : "sans-serif",
            color: "#9CA3AF",
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          WiseAI Blog
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 56,
            fontStyle: "italic",
            color: "#F5F5F7",
            fontFamily: serifItalic ? "Instrument Serif" : "serif",
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          {title}
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
