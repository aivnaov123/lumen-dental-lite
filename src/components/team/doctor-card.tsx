"use client";

import type { Doctor } from "@/types";
import { Photo } from "@/components/shared/photo";
import { cn } from "@/lib/utils";
import { useContent } from "@/content/use-content";

export function DoctorCard({ doctor, compact = false, className }: { doctor: Doctor; compact?: boolean; className?: string }) {
  const { copy } = useContent();
  return (
    <article className={cn("group flex flex-col gap-4", className)}>
      <Photo src={doctor.image} alt={doctor.name} label="DOCTOR PHOTO" className="aspect-[3/4] rounded-[22px] transition group-hover:-translate-y-1" position="50% 15%" sizes="(max-width: 640px) 100vw, 33vw" />
      <div className="flex flex-col gap-1.5">
        <span className="text-lg font-bold group-hover:text-brand sm:text-[21px]">{doctor.name}</span>
        <span className="text-sm text-ink-muted sm:text-[15px]">{doctor.specialty} · {copy.team.years(doctor.years)}</span>
        {!compact && (
          <>
            <span className="text-sm leading-relaxed text-ink-muted">{doctor.bio}</span>
            <span className="flex gap-2 pt-1">
              {doctor.languages.map((l) => (
                <span key={l} className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand">{l}</span>
              ))}
            </span>
          </>
        )}
      </div>
    </article>
  );
}
