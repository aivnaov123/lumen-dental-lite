/**
 * ─────────────────────────────────────────────────────────────
 *  COPY — every heading, label and sentence that is not clinic data.
 *  Organised by page / section. Edit freely; nothing here changes layout.
 * ─────────────────────────────────────────────────────────────
 */

import type { ServiceCategory } from "@/types";

const categories: Record<ServiceCategory, string> = {
    Preventive: "Preventive",
    Aesthetic: "Aesthetic",
    Restorative: "Restorative",
    Orthodontics: "Orthodontics",
    Children: "Children",
    Surgery: "Surgery",
};

export const copy = {
  categories,
  common: {
    bookVisit: "Book a visit",
    bookShort: "Book",
    bookOnline: "Book online",
    bookFree: "Book free consultation",
    seeServices: "See services",
    seeFinancing: "See financing options",
    callClinic: "Call the clinic",
    getDirections: "Get directions",
    home: "Home",
    allDoctors: "All doctors",
    loading: "Loading…",
    from: "from",
    /** Default CTA band (used when a page does not pass its own) */
    cta: { title: "Book your free consultation", text: "Pick a time online in under a minute. No card required." },
  },


  header: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    lightMode: "Switch to light mode",
    darkMode: "Switch to dark mode",
  },

  footer: {
    services: "Services",
    clinic: "Clinic",
    hours: "Opening hours",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    terms: "Terms",
    /** Credit line for the free Lite edition. You may remove it (MIT license), a link is appreciated. */
    credit: "Built with Lumen Dental Lite",
    creditLink: "Get the full version",
  },

  home: {
    hero: {
      badge: (until: string, city: string) => `Open today until ${until} · ${city}`,
      rating: (value: string, count: string, source: string) => `from ${count} patient reviews on ${source}`,
      nextAvailable: "Next available",
      nextSlot: "Tomorrow, 10:30",
      nextNote: "Free consultation · 30 min",
      financeBadge: "0% interest · 12 months",
      photoAlt: (clinic: string) => `${clinic} treatment room`,
    },
    services: { kicker: "Services", title: "Everything your smile needs, in one place", link: (n: number) => `All ${n} services` },
    financing: { kicker: "Pricing & financing", howItWorks: "How it works" },
    team: { kicker: "Our team", title: "Specialists who take their time with you", link: "Meet the whole team" },
    reviews: { kicker: "Patient stories", title: (rating: string) => `Rated ${rating} by people who used to fear the dentist`, stars: "5 out of 5 stars" },
    gallery: { kicker: "Before & after", title: "Real results from real patients", link: "Open the gallery" },
  },

  services: {
    meta: { title: "Services", description: "From routine check-ups to full smile restorations. Every treatment starts with a free consultation and a clear, fixed price." },
    kicker: "Services",
    title: "Everything your smile needs, in one place",
    text: "From routine check-ups to full smile restorations. Every treatment starts with a free consultation and a clear, fixed price.",
    allFilter: "All services",
    infoCards: [
      { title: "Not sure what you need?", text: "Book a free consultation and we will build a plan together." },
      { title: "Clear, fixed prices", text: "Every price is final and includes materials, anaesthesia and follow-up visits.", linkLabel: "Contact us", linkHref: "/contact" },
    ],
  },


  team: {
    meta: { title: "Our team", description: "Specialists who take their time with you." },
    kicker: "Our team",
    title: "Specialists who take their time with you",
    text: "Six dentists, one hygienist and a front desk that remembers your name. Every doctor is a specialist in their field and trains abroad every year.",
    allFilter: "All",
    howWeWork: { kicker: "How we work", title: "Calm, honest and unhurried" },
    cta: { title: "Meet your dentist in person", text: "Book a free 30-minute consultation with any of our specialists." },
    years: (n: number) => `${n} years`,
  },




  contact: {
    meta: { title: "Contact", description: "We're easy to find and easy to reach." },
    kicker: "Contact",
    title: "We're easy to find and easy to reach",
    text: "In the centre, two minutes from the metro, with free parking for patients. Call, write or just come by.",
    labels: { address: "Address", phone: "Phone", email: "Email", hours: "Opening hours" },
    phoneNote: "also on WhatsApp and Viber",
    mapTitle: "Map",
    mapPlaceholder: "MAP — paste a Google Maps embed URL in config/clinic.ts",
    extras: [
      { title: "Free parking", text: "Reserved spaces for patients in the courtyard, entrance from [STREET]." },
      { title: "Accessible", text: "Step-free access, lift to every floor and a ground-floor treatment room." },
      { title: "Emergencies", text: "Same-day appointments for pain or trauma. Call before 18:00." },
    ],
  },


  legal: {
    kicker: "Legal",
    privacy: { title: "Privacy policy", text: "[Replace this text with your clinic's Privacy policy. Your lawyer or a generator such as termsfeed.com can provide a draft.]" },
    terms: { title: "Terms of service", text: "[Replace this text with your clinic's Terms of service. Your lawyer or a generator such as termsfeed.com can provide a draft.]" },
  },

  /** Highlights printed on the auto-generated social preview image (/opengraph-image). */
  ogHighlights: (rating: string, source: string) => ["Free first consultation", "0% instalments", `${rating}/5 on ${source}`],

  notFound: { kicker: "404", title: "This page doesn't exist", text: "The link may be old, or the page may have moved.", back: "Back to home" },
};
