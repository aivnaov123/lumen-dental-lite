import { getLocale } from "next-intl/server";
import { contentFor, type Content } from "./index";

/** Server components: `const { copy, services } = await getContent();` */
export async function getContent(): Promise<Content> {
  return contentFor(await getLocale());
}
