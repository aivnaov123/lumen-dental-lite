export function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5 text-sm text-ink-muted">
      <span className="font-bold text-foreground">{title}</span>
      {children}
    </div>
  );
}
