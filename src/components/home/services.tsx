import { getContent } from "@/content/server";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { STAGGER } from "@/components/shared/utils/constants";
import { ServiceCard } from "@/components/shared/service-card";

export async function ServicesSection() {
  const { copy, services } = await getContent();
  const featured = services.filter((s) => s.featured).slice(0, 6);
  return (
    <section className="container-site section flex flex-col gap-10 lg:gap-12">
      <Reveal><SectionHeading
        kicker={copy.home.services.kicker}
        title={copy.home.services.title}
        link={{ label: copy.home.services.link(services.length), href: "/services" }}
      /></Reveal>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {featured.map((s, i) => (
          <Reveal key={s.slug} delay={i * STAGGER}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
