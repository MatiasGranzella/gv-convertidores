// Single source of truth de los datos de contacto del negocio.
// Editar acá → cambia en header, hero, location, footer, JSON-LD y CTAs.

export const BUSINESS = {
  name: "GV Convertidores",
  legalName: "GV Convertidores",
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
  // Mensaje pre-llenado al abrir WhatsApp.
  whatsappPrefilledMessage:
    "Hola GV Convertidores, quería consultar por un convertidor de torque.",
  email: "contacto@gvconvertidores.com.ar", // TODO: opcional
} as const;

export const ADDRESS = {
  street: "Calle del taller 1234", // TODO: dirección real
  locality: "Buenos Aires",
  region: "CABA",
  country: "AR",
  postalCode: "C1000AAA", // TODO: código postal real
  // Coordenadas para JSON-LD geo (estimadas — actualizar con las reales).
  latitude: -34.6037,
  longitude: -58.3816,
} as const;

export const HOURS = {
  // Formato para mostrar al usuario.
  display: [
    { days: "Lunes a viernes", hours: "8:00 a 16:30" },
  ],
  // Formato schema.org para JSON-LD.
  schema: ["Mo-Fr 08:00-16:30"],
} as const;

// URL del embed de Google Maps (sacar de Maps → Compartir → Insertar mapa → copiar src del iframe).
// Mientras no tengamos la dirección exacta, mostramos el barrio de Villa Crespo.
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Villa%20Crespo%2C%20CABA&output=embed";

// Helper para construir el link de WhatsApp con mensaje pre-llenado.
export function whatsappLink(message: string = CONTACT.whatsappPrefilledMessage): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;
}

// Helper para link de teléfono.
export function phoneLink(): string {
  return `tel:${CONTACT.phone.replace(/\s|-|\(|\)/g, "")}`;
}
