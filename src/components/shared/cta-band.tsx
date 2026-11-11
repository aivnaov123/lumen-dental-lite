import { Link } from "@/i18n/navigation";
import { Phone } from "lucide-react";
import { clinic } from "@/config/site";
import { getContent } from "@/content/server";
import { Reveal } from "./reveal";

type Props = { title?: string; text?: string; primary?: { label: string; href: string } };

export async function CtaBand({ title, text, primary }: Props) {
  const { copy } = await getContent();
  const heading = title ?? copy.common.cta.title;
  const body = text ?? copy.common.cta.text;
  const action = primary ?? { label: copy.common.bookOnline, href: "/contact" };
  return (
    <section className="container-site section">
      <Reveal>
      <div className="flex flex-col gap-6 rounded-[28px] bg-brand px-6 py-8 text-white sm:px-14 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2.5">
          <h2 className="font-heading text-[28px] font-medium leading-[1.1] tracking-tight sm:text-[38px]">{heading}</h2>
          <p className="text-[15px] text-white/80 sm:text-base">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:shrink-0">
          <a href={clinic.phoneHref} className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-white/50 px-6 text-base font-bold whitespace-nowrap">
            <Phone className="size-[18px]" /> {clinic.phone}
          </a>
          <Link href={action.href} className="inline-flex h-14 items-center justify-center rounded-full bg-white px-7 text-base font-bold whitespace-nowrap text-ink">
            {action.label}
          </Link>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
