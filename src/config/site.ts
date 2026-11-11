/**
 * ─────────────────────────────────────────────────────────────
 *  SHARED CONFIG (same in every language)
 * ─────────────────────────────────────────────────────────────
 *  clinic.ts     name, contact, address, rating, geo, hero image
 *
 *  Everything with text lives per language in src/content/<locale>/:
 *  copy.ts, site.ts (nav, hours, stats, tagline), services.ts, team.ts,
 *  reviews.ts
 */
export * from "./clinic";
export type * from "@/types";
