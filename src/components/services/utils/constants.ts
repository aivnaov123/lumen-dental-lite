import { SERVICE_CATEGORIES } from "@/constants";
import type { Content } from "@/content";

export const serviceFilters = (copy: Content["copy"]) => [copy.services.allFilter, ...SERVICE_CATEGORIES] as const;
export type ServiceFilter = ReturnType<typeof serviceFilters>[number];
