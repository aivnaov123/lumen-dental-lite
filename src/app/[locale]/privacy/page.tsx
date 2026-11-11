import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content/server";
import { PageHeader } from "@/components/shared/page-header";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  setRequestLocale((await params).locale);
  const { copy } = await getContent();
  return { title: copy.legal.privacy.title };
}

export default async function Page({ params }: Props) {
  setRequestLocale((await params).locale);
  const { copy } = await getContent();
  const t = copy.legal.privacy;
  return (
    <>
      <PageHeader kicker={copy.legal.kicker} title={t.title} crumbs={[{ label: t.title }]} />
      <section className="container-site py-12 text-ink-muted"><div className="max-w-[760px]">
        <p>{t.text}</p>
      </div></section>
    </>
  );
}
