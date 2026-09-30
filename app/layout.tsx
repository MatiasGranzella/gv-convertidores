import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { BUSINESS } from "@/lib/contact";
import { localBusinessJsonLd } from "@/lib/seo";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

const body = Barlow({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const display = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `Reparación de convertidores de torque en Buenos Aires | ${BUSINESS.name}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Reparación de convertidores de torque (convertidores de par) de cajas automáticas para talleres y mecánicos, en Villa Crespo, CABA. Más de 40 años haciendo solo convertidores.",
  keywords: [
    "convertidor de torque",
    "reparación convertidor de torque",
    "convertidor de par",
    "reparación convertidor de par",
    "convertidor caja automática",
    "caja automática",
    "reparación caja automática",
    "taller cajas automáticas",
    "convertidor de torque Villa Crespo",
    "convertidor de torque CABA",
    "Buenos Aires",
    "GV Convertidores",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    title: `Reparación de convertidores de torque en Buenos Aires | ${BUSINESS.name}`,
    description:
      "Solo convertidores de torque, desde hace más de 40 años. Taller propio en Villa Crespo, CABA.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Convertidor de torque sobre el banco de trabajo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Reparación de convertidores de torque | ${BUSINESS.name}`,
    description:
      "Especialistas en convertidores de torque para cajas automáticas en Buenos Aires.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#061A45",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`${body.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Activa las animaciones de entrada solo si hay JS (sin JS, todo visible). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <FloatingWhatsApp />
        <RevealObserver />
      </body>
    </html>
  );
}
