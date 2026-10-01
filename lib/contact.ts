// Single source of truth de los datos de contacto del negocio.
// Editar acá → cambia en header, hero, location, footer, JSON-LD y CTAs.

export const BUSINESS = {
  name: "GV Convertidores de Par",
  legalName: "GV Convertidores de Par",
  tagline: "Especialistas en convertidores de torque",
  yearsExperience: 40,
  siteUrl: "https://gvconvertidores.com.ar", // TODO: confirmar dominio final
} as const;

export const CONTACT = {
  // Número de WhatsApp en formato internacional sin '+', espacios ni guiones.
  // Ej: Argentina => 54 9 11 12345678 => "5491112345678"
  whatsappNumber: "5491149724829",
  // Versión legible para mostrar en pantalla.
  whatsappDisplay: "+54 9 11 4972-4829",
  // Teléfono fijo del taller (formato internacional para tel: y formato local para mostrar).
  phone: "+541149724829",
  phoneDisplay: "11 4972 4829",
  // Celular del taller (también tiene WhatsApp).
  mobile: "+5491158048482",
  mobileDisplay: "11 5804 8482",
  // Mensaje pre-llenado al abrir WhatsApp.
  whatsappPrefilledMessage:
    "Hola GV Convertidores de Par, quería consultar por un convertidor de torque.",
  email: "contacto@gvconvertidores.com.ar", // TODO: opcional
} as const;

export const ADDRESS = {
  // Mientras sean null no se publican en el JSON-LD: una dirección inventada
  // choca con la de Google Maps y perjudica el SEO local.
  street: "Cnel. Antonio Susini 2335" as string | null,
  neighborhood: "Villa Crespo",
  locality: "Ciudad Autónoma de Buenos Aires",
  region: "CABA",
  country: "AR",
  postalCode: "C1414CXH" as string | null,
  // Coordenadas del taller (OpenStreetMap, Susini 2335).
  latitude: -34.5959867 as number | null,
  longitude: -58.4520678 as number | null,
};

export const HOURS = {
  // Formato para mostrar al usuario.
  display: [
    { days: "Lunes a viernes", hours: "8:00 a 16:00" },
  ],
  // Formato schema.org para JSON-LD.
  schema: ["Mo-Fr 08:00-16:00"],
} as const;

// Ficha de Google Maps del taller (por CID, abre directo el perfil con las reseñas).
export const GOOGLE = {
  mapsUrl: "https://maps.google.com/?cid=4139739064758980599",
  // Actualizar a mano cuando lleguen reseñas nuevas.
  rating: "5,0",
  reviewCount: 12,
} as const;

// Reseñas copiadas textuales de la ficha de Google Maps (octubre 2026).
// No corregir ni inventar: si se agrega una, que sea real y tal cual está en Google.
export const REVIEWS = [
  {
    author: "Adrian grandoso",
    text: "Excelente atención y trabajo.. muy atento,serio y responsable ayudando y aconsejando... 5 ⭐ por eso.. muy recomendable..",
  },
  {
    author: "Ra Lopez",
    text: "Excelente servicio, me consiguieron todos los materiales en tiempo record y la mano de obra rapidisimo, nada como ellos, muy recomendado.",
  },
  {
    author: "sebastian perez del rio",
    text: "Siempre responsables, nunca un problema, excelente la atención personal muy calificado.",
  },
  {
    author: "Mariano zanese",
    text: "Exelente atención y trabajos de primera calidad.",
  },
  {
    author: "Sebastian Tejerina",
    text: "De absoluta confianza y amabilidad",
  },
] as const;

// URL del embed de Google Maps: muestra la ficha del taller (nombre, estrellas y reseñas).
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?cid=4139739064758980599&output=embed";

// Helper para construir el link de WhatsApp con mensaje pre-llenado.
export function whatsappLink(message: string = CONTACT.whatsappPrefilledMessage): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;
}

// Helper para link de teléfono.
export function phoneLink(number: string = CONTACT.phone): string {
  return `tel:${number.replace(/\s|-|\(|\)/g, "")}`;
}
