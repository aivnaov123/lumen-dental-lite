import type { NavItem } from "@/types";

/** Text parts of the clinic profile that change per language. */
export const clinicText = {
  tagline: "Modern dentistry, without the anxiety.",
  description:
    "Digital diagnostics, painless treatments and flexible monthly payments — all under one roof. Your first consultation is free.",
  /** Short line under the map pin, e.g. nearest metro */
  addressNote: "Metro Serdika, 2 min walk",
  country: "Bulgaria",
  /** City name as shown to visitors (the schema.org address uses config/clinic.ts) */
  city: "Sofia",
  /** Review count as displayed, e.g. "1,200+" */
  reviewCount: "1,200+",
};

/** `schema` is the schema.org form used for search engines (Mo, Tu, We, Th, Fr, Sa, Su). */
export const hours = [
  { days: "Mon – Fri", time: "08:00 – 20:00", schema: "Mo-Fr 08:00-20:00" },
  { days: "Saturday", time: "09:00 – 15:00", schema: "Sa 09:00-15:00" },
  { days: "Sunday", time: "Closed", schema: "" },
];

export const nav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "15+", label: "years of experience" },
  { value: "12,000", label: "patients treated" },
  { value: "3D", label: "digital scanning & planning" },
  { value: "0%", label: "interest instalments" },
  { value: "5 yr", label: "implant warranty" },
];
