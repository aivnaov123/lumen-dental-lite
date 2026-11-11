import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/site";
import { getContent } from "@/content/server";
import { PageHeader } from "@/components/shared/page-header";
import { Placeholder } from "@/components/shared/placeholder";
import { InfoRow } from "@/components/contact/info-row";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  setRequestLocale((await params).locale);
  const { copy } = await getContent();
  return copy.contact.meta;
}

export default async function ContactPage({ params }: Props) {
  setRequestLocale((await params).locale);
  const { copy, hours, clinicText } = await getContent();
  const t = copy.contact;
  return (
    <>
      <PageHeader kicker={t.kicker} title={t.title} text={t.text} crumbs={[{ label: t.kicker }]} />
      <section className="container-site flex flex-col gap-8 pt-12 lg:flex-row lg:items-stretch">
        <div className="flex flex-col gap-5 lg:w-[460px] lg:shrink-0">
          <div className="flex flex-1 flex-col justify-between gap-6 rounded-[22px] border border-line bg-card p-8">
            <InfoRow icon={<MapPin className="size-5" />} label={t.labels.address}>
              {clinic.address.street}<br />{clinicText.city}, {clinic.address.postcode}
            </InfoRow>
            <InfoRow icon={<Phone className="size-5" />} label={t.labels.phone}>
              <a href={clinic.phoneHref}>{clinic.phone}</a>
              <span className="block text-sm font-medium text-ink-muted">{t.phoneNote}</span>
            </InfoRow>
            <InfoRow icon={<Mail className="size-5" />} label={t.labels.email}><a href={`mailto:${clinic.email}`}>{clinic.email}</a></InfoRow>
            <InfoRow icon={<Clock className="size-5" />} label={t.labels.hours}>
              {hours.map((h) => <span key={h.days} className="block">{h.days} · {h.time}</span>)}
            </InfoRow>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex h-[52px] flex-1 items-center justify-center rounded-full bg-brand text-[15px] font-bold text-white hover:bg-brand/90">{copy.common.bookOnline}</Link>
            <a href={clinic.address.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex h-[52px] flex-1 items-center justify-center rounded-full border-[1.5px] border-input text-[15px] font-bold hover:bg-secondary">{copy.common.getDirections}</a>
          </div>
        </div>
        <div className="relative h-[360px] flex-1 overflow-hidden rounded-[28px] sm:h-[560px] lg:h-auto lg:min-h-[560px]">
          {clinic.address.embedUrl ? (
            <iframe src={clinic.address.embedUrl} title={t.mapTitle} className="size-full border-0" loading="lazy" allowFullScreen />
          ) : (
            <Placeholder label={t.mapPlaceholder} className="size-full" />
          )}
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-4 shadow-[0_12px_32px_rgba(16,34,42,0.10)] dark:bg-card">
            <div className="text-[15px] font-bold">{clinic.name}</div>
            <div className="text-[13px] text-ink-muted">{clinic.address.street} · {clinicText.addressNote}</div>
          </div>
        </div>
      </section>
      <section className="container-site grid gap-4 pt-12 pb-16 sm:gap-6 sm:pb-24 lg:grid-cols-3">
        {t.extras.map((e) => (
          <div key={e.title} className="flex flex-col gap-2.5 rounded-[22px] border border-line bg-card p-7">
            <div className="flex items-center gap-2.5 text-lg font-bold"><Check className="size-[18px] text-brand" />{e.title}</div>
            <p className="text-[15px] leading-relaxed text-ink-muted">{e.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
