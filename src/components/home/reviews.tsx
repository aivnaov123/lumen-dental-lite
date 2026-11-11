import { Star } from "lucide-react";
import { clinic } from "@/config/site";
import { getContent } from "@/content/server";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { STAGGER } from "@/components/shared/utils/constants";

export async function ReviewsSection() {
  const { copy, reviews } = await getContent();
  return (
    <section className="container-site pb-16 sm:pb-24 flex flex-col gap-10">
      <Reveal><SectionHeading kicker={copy.home.reviews.kicker} title={copy.home.reviews.title(clinic.rating.value)} align="center" /></Reveal>
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} as="figure" delay={i * STAGGER} className="flex flex-col gap-4 rounded-[22px] border border-line bg-card p-6 sm:p-8">
            <div className="flex gap-0.5" role="img" aria-label={copy.home.reviews.stars}>
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="size-[18px] fill-[#f5a524] text-[#f5a524]" />
              ))}
            </div>
            <blockquote className="flex-1 text-[15px] leading-relaxed sm:text-base">“{r.text}”</blockquote>
            <figcaption className="flex items-center gap-3">
              <span className="size-10 rounded-full" style={{ background: ["#c9d9d8", "#a9c4c2", "#86aba8"][i % 3] }} />
              <span>
                <span className="block text-sm font-bold">{r.name}</span>
                <span className="block text-[13px] text-ink-muted">{r.treatment}</span>
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
