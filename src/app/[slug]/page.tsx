import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANDING_PAGES, getLandingPage } from "@/lib/landing-pages";
import LandingLayout from "@/components/LandingLayout";

// Only the known landing slugs render; anything else 404s. Static folders like
// /blog, /privacy, /terms take precedence over this dynamic segment.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANDING_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://www.thewiseai.app/${page.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function LandingPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  return <LandingLayout page={page} />;
}
