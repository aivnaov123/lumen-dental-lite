"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useContent } from "@/content/use-content";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

export function Header() {
  const { copy, nav } = useContent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header className={cn("sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur transition-shadow dark:bg-card/90", scrolled && "shadow-[0_8px_24px_rgba(16,34,42,0.06)]")}>
      <div className="container-site flex h-16 items-center justify-between lg:h-[84px]">
        <Logo />

        <nav className="hidden items-center gap-5 text-sm font-semibold lg:flex xl:gap-9 xl:text-[15px]" aria-label="Main">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex min-h-11 items-center whitespace-nowrap border-b-2 border-transparent text-ink-muted transition-colors hover:text-foreground",
                  active && "border-brand text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:gap-3">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center whitespace-nowrap rounded-full bg-brand px-4 text-sm font-bold text-white transition hover:-translate-y-px hover:bg-brand/90 active:translate-y-0 lg:h-[46px] lg:px-[22px] lg:text-[15px]"
          >
            <span className="sm:hidden">{copy.common.bookShort}</span>
            <span className="hidden sm:inline">{copy.common.bookVisit}</span>
          </Link>
          <button
            type="button"
            aria-label={open ? copy.header.closeMenu : copy.header.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-xl border border-line bg-white lg:hidden dark:bg-card"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden dark:bg-card">
          <nav className="container-site flex flex-col py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-base font-semibold last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between py-4">
              <Link href="/contact" onClick={() => setOpen(false)} className="text-sm font-semibold text-brand">
                {copy.common.callClinic}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
