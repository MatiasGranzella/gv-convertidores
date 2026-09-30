import { BUSINESS, CONTACT, ADDRESS, HOURS } from "./contact";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Taller especializado en reparación de convertidores de torque para cajas automáticas. Más de 40 años de experiencia en mecánica de precisión.",
    url: BUSINESS.siteUrl,
    telephone: CONTACT.phone,
    image: `${BUSINESS.siteUrl}/og-image.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ADDRESS.latitude,
      longitude: ADDRESS.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:30",
      },
    ],
    openingHours: HOURS.schema,
    areaServed: {
      "@type": "City",
      name: "Buenos Aires",
    },
    sameAs: [],
  };
}
