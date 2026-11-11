"use client";

import { cn } from "@/lib/utils";

export function FilterTabs<T extends string>({ items, value, onChange, className, labels }: { items: readonly T[]; value: T; onChange: (v: T) => void; className?: string; /** optional display names, e.g. translated category names */ labels?: Partial<Record<T, string>> }) {
  return (
    <div className={cn("-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0", className)} role="tablist">
      {items.map((t) => (
        <button
          key={t}
          type="button"
          role="tab"
          aria-selected={t === value}
          onClick={() => onChange(t)}
          className={cn(
            "h-11 shrink-0 rounded-full px-5 text-sm font-bold transition",
            t === value ? "bg-brand-dark text-white dark:bg-brand dark:text-brand-dark" : "border border-line bg-card text-ink-muted hover:text-foreground"
          )}
        >
          {labels?.[t] ?? t}
        </button>
      ))}
    </div>
  );
}
