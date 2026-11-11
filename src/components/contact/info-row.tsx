export function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">{icon}</span>
      <div>
        <div className="text-[13px] font-bold uppercase tracking-wide text-ink-muted">{label}</div>
        <div className="text-[17px] font-semibold leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
