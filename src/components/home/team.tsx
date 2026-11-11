import { getContent } from "@/content/server";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { STAGGER } from "@/components/shared/utils/constants";
import { DoctorCard } from "@/components/team/doctor-card";

export async function TeamSection() {
  const { copy, doctors } = await getContent();
  return (
    <section className="container-site pb-16 sm:pb-24 flex flex-col gap-10 lg:gap-12">
      <Reveal>
        <SectionHeading kicker={copy.home.team.kicker} title={copy.home.team.title} link={{ label: copy.home.team.link, href: "/team" }} />
      </Reveal>
      <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0">
        {doctors.slice(0, 3).map((d, i) => (
          <Reveal key={d.slug} delay={i * STAGGER} className="w-[220px] shrink-0 sm:w-auto">
            <DoctorCard doctor={d} compact />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
