import type { Locale } from "@/i18n/routing";
import * as en from "./en";

export type Content = typeof en;

const content: Record<Locale, Content> = { en };

/** All translatable content for a locale. */
export function contentFor(locale: string): Content {
  return content[locale as Locale] ?? content.en;
}
