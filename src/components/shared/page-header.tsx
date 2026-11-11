import { Link } from "@/i18n/navigation";
import { Fragment } from "react";
import { getContent } from "@/content/server";

type Crumb = { label: string; href?: string };

export async function PageHeader({ kicker, title, text, crumbs }: { kicker: string; title: string; text?: string; crumbs?: Crumb[] }) {
  const { copy } = await getContent();
  return (
    <div className="container-site pt-10 sm:pt-16 lg:pt-[72px]">
      <div className="flex max-w-[900px] flex-col gap-3.5">
      {crumbs && (
        <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-ink-muted">
          <Link href="/" className="hover:text-foreground">{copy.common.home}</Link>
          {crumbs.map((c) => (
            <Fragment key={c.label}>
              <span aria-hidden="true">/</span>
              {c.href ? <Link href={c.href} className="hover:text-foreground">{c.label}</Link> : <span className="text-foreground">{c.label}</span>}
            </Fragment>
          ))}
        </nav>
      )}
      <span className="text-[13px] font-bold uppercase tracking-[1px] text-brand">{kicker}</span>
      <h1 className="font-heading text-[38px] font-medium leading-[1.08] tracking-tight sm:text-[56px]">{title}</h1>
      {text && <p className="max-w-[640px] text-base leading-relaxed text-ink-muted sm:text-lg">{text}</p>}
      </div>
    </div>
  );
}
