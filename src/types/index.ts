/** Shared content types used by the config files and components. */

export type ServiceCategory =
  | "Preventive"
  | "Aesthetic"
  | "Restorative"
  | "Orthodontics"
  | "Children"
  | "Surgery";

export type ServiceIconName =
  | "implant"
  | "sparkles"
  | "braces"
  | "clock"
  | "veneer"
  | "heart"
  | "root"
  | "crown"
  | "surgery";

export type Service = {
  slug: string;
  name: string;
  short: string;
  category: ServiceCategory;
  icon: ServiceIconName;
  priceFrom: string;
  /** shown on the home page */
  featured?: boolean;
};

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  years: number;
  languages: string[];
  /** one line, shown on cards */
  bio: string;
  /** /images/team/… */
  image?: string;
};

export type Review = { name: string; treatment: string; text: string };

export type NavItem = { label: string; href: string };
