/**
 * Clinic details that are the same in every language (name, contact, address, numbers).
 * Translatable text (tagline, hours, navigation, stats…) lives in src/content/<locale>/site.ts.
 */
export const clinic = {
  name: "Lumen Dental",
  /** Public URL of the deployed site — used for sitemap, canonical links and social previews. */
  /** Public site URL (no trailing slash). Set NEXT_PUBLIC_SITE_URL in .env / your host to override. */
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://lumen-dental.example",
  /** Two-letter locale for <html lang> and Open Graph. */
  locale: "en",
  phone: "+359 000 000 000",
  phoneHref: "tel:+359000000000",
  email: "hello@lumendental.example",
  address: {
    street: "12 Example Street",
    city: "Sofia",
    postcode: "1000",
    mapsUrl: "https://maps.google.com/?q=Sofia",
    /** Google Maps embed URL (Share → Embed a map) */
    embedUrl: "",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  /** Shown in the hero badge */
  openTodayUntil: "20:00",
  /** Home page hero photo (landscape, ~1600px wide). */
  heroImage: "/images/hero.jpg",
  rating: { value: "4.9", count: "1,200+", source: "Google", /** numeric values for structured data */ numeric: 4.9, reviewCount: 1200 },
  /** Shown to search engines as the clinic's price range. */
  priceRange: "€€",
  geo: { lat: 42.6977, lng: 23.3219 },
  yearFounded: 2011,
};
