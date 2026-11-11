import { Link } from "@/i18n/navigation";
import { clinic } from "@/config/site";
import { getContent } from "@/content/server";
import { FULL_VERSION_URL } from "@/constants";
import { Logo } from "@/components/layout/logo";
import { FooterCol } from "@/components/layout/footer-col";

export async function Footer() {
  const { copy, hours, nav, services, clinicText } = await getContent();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-white dark:bg-card">
      <div className="container-site pt-12 sm:pt-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex max-w-xs flex-col gap-4">
            <Logo />
            <p className="text-sm leading-relaxed text-ink-muted">
              {clinic.address.street}
              <br />
              {clinicText.city}, {clinic.address.postcode}
              <br />
              <a href={clinic.phoneHref} className="hover:text-foreground">{clinic.phone}</a> ·{" "}
              <a href={`mailto:${clinic.email}`} className="hover:text-foreground">{clinic.email}</a>
            </p>
          </div>

          <FooterCol title={copy.footer.services}>
            {services.filter((s) => s.featured).slice(0, 4).map((s) => (
              <Link key={s.slug} href="/services" className="hover:text-foreground">{s.name}</Link>
            ))}
          </FooterCol>

          <FooterCol title={copy.footer.clinic}>
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-foreground">{n.label}</Link>
            ))}
          </FooterCol>

          <FooterCol title={copy.footer.hours}>
            {hours.map((h) => (
              <span key={h.days}>{h.days} · {h.time}</span>
            ))}
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line py-6 text-[13px] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {clinic.name}. {copy.footer.rights}</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-foreground">{copy.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-foreground">{copy.footer.terms}</Link>
            <span>
              {copy.footer.credit} ·{" "}
              <a href={FULL_VERSION_URL} className="font-semibold text-brand hover:underline" target="_blank" rel="noopener">{copy.footer.creditLink}</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
