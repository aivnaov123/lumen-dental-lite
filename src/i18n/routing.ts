import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en"],
  defaultLocale: "en",
  /** English has no prefix (/services), other languages do (/bg/services). */
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
