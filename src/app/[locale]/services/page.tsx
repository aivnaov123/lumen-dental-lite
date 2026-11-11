import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getContent } from "@/content/server";
import { PageHeader } from "@/components/shared/page-header";
import { InfoCard } from "@/components/shared/info-card";
import { CtaBand } from "@/components/shared/cta-band";
import { ServicesGrid } from "@/components/services/services-grid";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  setRequestLocale((await params).locale);
  const { copy } = await getContent();
  return copy.services.meta;
}

export default async function ServicesPage({ params }: Props) {
  setRequestLocale((await params).locale);
  const { copy } = await getContent();
  const t = copy.services;
  return (
    <>
      <PageHeader kicker={t.kicker} title={t.title} text={t.text} crumbs={[{ label: t.kicker }]} />
      <ServicesGrid />
      <div className="container-site flex flex-col gap-4 pt-14 sm:gap-6 lg:flex-row">
        {t.infoCards.map((c) => (
          <InfoCard key={c.title} title={c.title}>
            {c.text}{" "}
            {c.linkLabel && c.linkHref && <Link href={c.linkHref} className="font-semibold text-brand">{c.linkLabel}</Link>}
          </InfoCard>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
