"use client";

import type { Service } from "@/types";
import { ServiceIcon } from "@/components/shared/service-icon";
import { useContent } from "@/content/use-content";

export function ServiceCard({ service }: { service: Service }) {
  const { copy } = useContent();
  return (
    <article
      className="group flex min-h-[260px] flex-col gap-[18px] rounded-[22px] border border-line bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_rgba(16,34,42,0.10)]"
    >
      <span className="grid size-[52px] place-items-center rounded-[14px] bg-brand-soft text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
        <ServiceIcon icon={service.icon} />
      </span>
      <span className="text-[21px] font-bold">{service.name}</span>
      <span className="flex-1 text-[15px] leading-relaxed text-ink-muted">{service.short}</span>
      <span className="flex items-center justify-between text-sm font-bold">
        <span className="text-ink-muted">{copy.common.from}</span>
        <span>{service.priceFrom}</span>
      </span>
    </article>
  );
}
