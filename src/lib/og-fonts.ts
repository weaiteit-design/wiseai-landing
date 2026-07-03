// Fetches real Google Font subsets for use inside next/og ImageResponse, so
// generated OG cards match the site's actual typography (Instrument Serif
// italic headlines + Inter body) instead of whatever generic fallback Satori
// substitutes when a requested font-family isn't registered.
export async function getGoogleFont(
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
