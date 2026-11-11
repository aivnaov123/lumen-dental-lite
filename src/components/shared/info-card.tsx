import { Check } from "lucide-react";

export function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-1 items-center gap-5 rounded-[22px] border border-line bg-card px-8 py-7">
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Check className="size-5" /></span>
      <div>
        <div className="text-[17px] font-bold">{title}</div>
        <div className="text-[15px] text-ink-muted">{children}</div>
      </div>
    </div>
  );
}
