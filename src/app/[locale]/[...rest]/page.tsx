import { notFound } from "next/navigation";

/**
 * Catch-all for unknown URLs inside a locale (e.g. /foo or /bg/foo).
 * Calling notFound() here renders the styled [locale]/not-found.tsx
 * instead of Next.js' default 404 screen.
 */
export default function CatchAll() {
  notFound();
}
