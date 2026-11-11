import { getContent } from "@/content/server";

export async function TrustStrip() {
  const { stats } = await getContent();
  return (
    <section className="border-y border-line bg-white dark:bg-card">
      <div className="container-site grid grid-cols-2 gap-3 py-5 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between lg:py-9">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3.5 rounded-[14px] bg-background p-4 lg:bg-transparent lg:p-0">
            {i > 0 && <span className="hidden h-12 w-px bg-line lg:block lg:-ml-6" aria-hidden="true" />}
            <span className="font-heading text-[26px] font-semibold text-brand lg:text-[32px]">{s.value}</span>
            <span className="text-[13px] leading-snug text-ink-muted lg:text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
