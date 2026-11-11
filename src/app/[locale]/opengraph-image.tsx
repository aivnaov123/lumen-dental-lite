import { ImageResponse } from "next/og";
import { clinic } from "@/config/site";
import { contentFor } from "@/content";
import { routing, type Locale } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = clinic.name;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/** Social preview image, rendered on the server per language. Edit colours/text here or replace with a static /public/og.png. */
export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { copy, clinicText } = contentFor(locale as Locale);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f6f9f9", color: "#10222a", fontFamily: "Georgia, serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 36, fontWeight: 700 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "#0f766e" }} />
          {clinic.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>{clinicText.tagline}</div>
          <div style={{ fontSize: 30, color: "#5b6b70", fontFamily: "sans-serif", maxWidth: 900 }}>{clinicText.description}</div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 26, color: "#0f766e", fontFamily: "sans-serif", fontWeight: 700 }}>
          {copy.ogHighlights(clinic.rating.value, clinic.rating.source).map((h, i) => (<span key={h} style={{ display: "flex", gap: 40 }}>{i > 0 && <span>·</span>}<span>{h}</span></span>))}
        </div>
      </div>
    ),
    size
  );
}
