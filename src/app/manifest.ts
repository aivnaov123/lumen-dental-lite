import type { MetadataRoute } from "next";
import { clinic } from "@/config/site";
import { contentFor } from "@/content";
import { routing } from "@/i18n/routing";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: clinic.name,
    short_name: clinic.name,
    description: contentFor(routing.defaultLocale).clinicText.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f9f9",
    theme_color: "#0f766e",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
