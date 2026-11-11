import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { ServicesSection } from "@/components/home/services";
import { TeamSection } from "@/components/home/team";
import { ReviewsSection } from "@/components/home/reviews";
import { CtaBand } from "@/components/shared/cta-band";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  setRequestLocale((await params).locale);
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <TeamSection />
      <ReviewsSection />
      <CtaBand />
    </>
  );
}
