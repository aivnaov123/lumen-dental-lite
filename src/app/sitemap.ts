import type { MetadataRoute } from "next";
import { clinic } from "@/config/site";
import { contentFor } from "@/content";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = clinic.url.replace(/\/$/, "");
  const now = new Date();
  return routing.locales.flatMap((locale) => {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    const { nav } = contentFor(locale);
    const staticPages = ["", ...nav.map((n) => n.href), "/privacy", "/terms"];
    return [
      ...staticPages.map((path) => ({ url: `${base}${prefix}${path}`, lastModified: now, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ];
  });
}
