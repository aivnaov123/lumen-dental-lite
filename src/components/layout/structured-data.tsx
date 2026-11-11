import { clinic } from "@/config/site";
import { getContent } from "@/content/server";

/** JSON-LD for a dental clinic — helps Google show hours, rating and address in local results. */
export async function StructuredData() {
  const { hours, doctors, clinicText } = await getContent();
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    url: clinic.url,
    telephone: clinic.phone,
    email: clinic.email,
    description: clinicText.description,
    priceRange: clinic.priceRange,
    image: `${clinic.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      postalCode: clinic.address.postcode,
      addressCountry: clinicText.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: clinic.geo.lat, longitude: clinic.geo.lng },
    openingHours: hours.map((h) => h.schema).filter(Boolean),
    aggregateRating: { "@type": "AggregateRating", ratingValue: clinic.rating.numeric, reviewCount: clinic.rating.reviewCount },
    employee: doctors.map((d) => ({ "@type": "Person", name: d.name, jobTitle: d.specialty })),
    sameAs: Object.values(clinic.social),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
