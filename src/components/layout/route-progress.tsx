"use client";

import { usePathname } from "next/navigation";

/** Thin brand-coloured bar that sweeps across the top each time the route changes. */
export function RouteProgress() {
  const pathname = usePathname();
  return (
    <div
      key={pathname}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-brand motion-safe:animate-route-progress"
    />
  );
}
