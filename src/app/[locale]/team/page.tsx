import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Check } from "lucide-react";
import { getContent } from "@/content/server";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBand } from "@/components/shared/cta-band";
import { TeamGrid } from "@/components/team/team-grid";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  setRequestLocale((await params).locale);
  const { copy } = await getContent();
  return copy.team.meta;
}

export default async function TeamPage({ params }: Props) {
  setRequestLocale((await params).locale);
  const { copy, values } = await getContent();
  const t = copy.team;
  return (
    <>
      <PageHeader kicker={t.kicker} title={t.title} text={t.text} crumbs={[{ label: t.kicker }]} />
      <TeamGrid />
      <section className="container-site pt-16 sm:pt-24">
        <div className="flex flex-col gap-10 rounded-[24px] bg-brand-dark p-6 text-white sm:rounded-[32px] sm:p-10 lg:flex-row lg:gap-12 lg:p-16">
          <div className="flex flex-col gap-4 lg:w-[400px] lg:shrink-0">
            <span className="text-[13px] font-bold uppercase tracking-[1px] text-[#7fd1c6]">{t.howWeWork.kicker}</span>
            <h2 className="font-heading text-[32px] font-medium leading-[1.1] tracking-tight sm:text-[40px]">{t.howWeWork.title}</h2>
          </div>
          <div className="grid flex-1 gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title}>
                <div className="flex items-center gap-2.5 text-lg font-bold"><Check className="size-[18px] text-[#7fd1c6]" />{v.title}</div>
                <p className="pl-7 text-[15px] leading-relaxed text-[#b7c6c9]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand {...t.cta} />
    </>
  );
}
