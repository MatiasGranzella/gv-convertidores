import { BUSINESS, CONTACT, ADDRESS, HOURS, GOOGLE } from "./contact";

export function localBusinessJsonLd() {
  const hasGeo = ADDRESS.latitude !== null && ADDRESS.longitude !== null;

  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${BUSINESS.siteUrl}/#taller`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Taller de Villa Crespo, CABA, dedicado solo a la reparación de convertidores de torque (convertidores de par) de cajas automáticas. Trabaja para talleres y mecánicos desde hace más de 40 años.",
    url: BUSINESS.siteUrl,
    telephone: CONTACT.phone,
    image: `${BUSINESS.siteUrl}/og-image.jpg`,
    logo: `${BUSINESS.siteUrl}/gv-logo-256.png`,
    address: {
      "@type": "PostalAddress",
      ...(ADDRESS.street && { streetAddress: ADDRESS.street }),
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      ...(ADDRESS.postalCode && { postalCode: ADDRESS.postalCode }),
      addressCountry: ADDRESS.country,
    },
    ...(hasGeo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: ADDRESS.latitude,
        longitude: ADDRESS.longitude,
      },
    }),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    openingHours: HOURS.schema,
    areaServed: [
      { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
      { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
    ],
    knowsAbout: [
      "Convertidores de torque",
      "Convertidores de par",
      "Cajas automáticas",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Reparación de convertidores de torque",
        serviceType: "Reparación de convertidores de torque para cajas automáticas",
        description:
          "Apertura, control, reparación, soldadura y prueba hidráulica, todo en taller propio. Autos, camionetas, autoelevadores y equipos viales.",
      },
    },
    hasMap: GOOGLE.mapsUrl,
    sameAs: [GOOGLE.mapsUrl],
  };
}
