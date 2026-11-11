import { Link } from "@/i18n/navigation";
import { ArrowRight, Check } from "lucide-react";
import { clinic } from "@/config/site";
import { getContent } from "@/content/server";
import { Photo } from "@/components/shared/photo";
import { Reveal } from "@/components/shared/reveal";

export async function Hero() {
  const { copy, clinicText } = await getContent();
  return (
    <section className="container-site pt-10 pb-12 sm:pt-16 lg:grid lg:grid-cols-[1fr_600px] lg:items-start lg:gap-16 lg:pt-24 lg:pb-20">
      <Reveal eager className="flex max-w-[600px] flex-col gap-6 lg:gap-7 lg:pt-8">
        <div className="flex items-center gap-2.5 text-sm font-bold text-brand">
          <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
          {copy.home.hero.badge(clinic.openTodayUntil, clinicText.city)}
        </div>
        <h1 className="font-heading text-[40px] font-medium leading-[1.06] tracking-tight sm:text-[54px] lg:text-[66px]">
          {clinicText.tagline}
        </h1>
        <p className="max-w-[520px] text-base leading-relaxed text-ink-muted sm:text-[19px]">{clinicText.description}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-brand px-7 text-base font-bold text-white transition hover:bg-brand/90">
            {copy.common.bookFree}
          </Link>
          <Link href="/services" className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-[1.5px] border-input px-6 text-base font-bold transition hover:bg-secondary">
            {copy.common.seeServices} <ArrowRight className="size-[18px]" />
          </Link>
        </div>
        <div className="flex items-center gap-3.5 pt-2">
          <div className="flex">
            {["#c9d9d8", "#a9c4c2", "#86aba8"].map((c, i) => (
              <span key={c} className="size-10 rounded-full border-2 border-background" style={{ background: c, marginLeft: i ? -12 : 0 }} />
            ))}
          </div>
          <p className="text-sm text-ink-muted">
            <span className="font-bold text-foreground">{clinic.rating.value} / 5</span> {copy.home.hero.rating(clinic.rating.value, clinicText.reviewCount, clinic.rating.source)}
          </p>
        </div>
      </Reveal>

      <Reveal eager delay={0.15} className="relative mt-10 lg:mt-0">
        <Photo src={clinic.heroImage} alt={copy.home.hero.photoAlt(clinic.name)} label="HERO PHOTO — smiling patient in clinic" className="aspect-[4/3] w-full rounded-[28px] lg:h-[560px]" sizes="(max-width: 1024px) 100vw, 600px" priority />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white p-4 shadow-[0_12px_32px_rgba(16,34,42,0.10)] sm:bottom-12 sm:left-[-40px] sm:right-auto sm:w-[260px] sm:flex-col sm:items-start sm:gap-1.5 sm:p-5 dark:bg-card">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-ink-muted">{copy.home.hero.nextAvailable}</div>
            <div className="text-lg font-bold sm:text-xl">{copy.home.hero.nextSlot}</div>
            <div className="hidden text-sm text-ink-muted sm:block">{copy.home.hero.nextNote}</div>
          </div>
          <Link href="/contact" className="inline-flex h-10 items-center rounded-full bg-brand px-4 text-sm font-bold text-white sm:hidden">{copy.common.bookShort}</Link>
        </div>
        <div className="absolute right-[-8px] top-6 hidden items-center gap-2.5 rounded-[14px] bg-brand-dark px-[18px] py-3.5 text-sm font-bold text-white sm:flex lg:right-[-24px] lg:top-10">
          <Check className="size-[18px] text-[#7fd1c6]" /> {copy.home.hero.financeBadge}
        </div>
      </Reveal>
    </section>
  );
}
