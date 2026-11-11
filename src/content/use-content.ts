"use client";

import { useLocale } from "next-intl";
import { contentFor, type Content } from "./index";

/** Client components: `const { copy } = useContent();` */
export function useContent(): Content {
  return contentFor(useLocale());
}
