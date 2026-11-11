import type { MetadataRoute } from "next";
import { clinic } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const base = clinic.url.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${base}/sitemap.xml`,
  };
}
