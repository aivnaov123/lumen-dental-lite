import { Link } from "@/i18n/navigation";
import { getContent } from "@/content/server";

export default async function NotFound() {
  const { copy } = await getContent();
  const t = copy.notFound;
  return (
    <section className="container-site flex flex-col items-start gap-5 py-24">
      <span className="text-[13px] font-bold uppercase tracking-[1px] text-brand">{t.kicker}</span>
      <h1 className="font-heading text-[40px] font-medium tracking-tight sm:text-[56px]">{t.title}</h1>
      <p className="text-lg text-ink-muted">{t.text}</p>
      <Link href="/" className="inline-flex h-14 items-center rounded-full bg-brand px-7 text-base font-bold text-white">{t.back}</Link>
    </section>
  );
}
