# GV Convertidores — Landing page

Landing page para **GV Convertidores**, taller en Buenos Aires especializado en reparación de convertidores de torque para cajas automáticas.

Stack: **Next.js 15 (App Router) + TypeScript + Tailwind CSS**.

---

## Setup local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm run start   # servir el build
npm run lint
```

---

## Editar los datos del negocio

**Todo está centralizado en un solo lugar**: `lib/contact.ts`

Cambiá ahí:

- **WhatsApp**: `CONTACT.whatsappNumber` (formato internacional sin `+`, ej. `5491112345678`) y `CONTACT.whatsappDisplay`.
- **Teléfono**: `CONTACT.phone` y `CONTACT.phoneDisplay`.
- **Dirección**: `ADDRESS.street`, `ADDRESS.postalCode`, `ADDRESS.latitude`, `ADDRESS.longitude`.
- **Horarios**: `HOURS.display` (lo que ve el usuario) y `HOURS.schema` (lo que usa Google).
- **URL de Google Maps**: `MAPS_EMBED_URL`. Para conseguirla:
  1. Buscar la dirección en [Google Maps](https://www.google.com/maps).
  2. Compartir → Insertar mapa → copiar el atributo `src` del iframe.
- **Mensaje pre-llenado de WhatsApp**: `CONTACT.whatsappPrefilledMessage`.
- **Dominio del sitio**: `BUSINESS.siteUrl` (afecta SEO/sitemap/canonical/JSON-LD).

Después de cambiar `lib/contact.ts`, los nuevos datos se ven en: header, hero, sección de ubicación, footer, botones flotantes y JSON-LD de SEO local.

---

## Reemplazar imágenes placeholder

Hay placeholders marcados con `TODO` en:

1. **Hero** (`components/Hero.tsx`): foto de fondo. Actualmente usa `public/hero-mechanic.jpg` (stock temporal de [Unsplash](https://unsplash.com), libre de derechos). **Reemplazar** por foto real del taller del papá (mecánico trabajando en un convertidor de torque, idealmente paisaje ~1920×1080, ambiente oscuro para que el overlay del texto funcione).
2. **Servicios** (`components/Services.tsx`): foto del trabajo de reparación (4:3).
3. **El Taller** (`components/Workshop.tsx`): galería de 6 fotos del taller.
4. **`public/og-image.jpg`**: imagen para redes sociales (1200×630, JPG o PNG).
5. **`public/favicon.ico`**: favicon del sitio.

**Cómo agregar fotos del taller**:

1. Crear carpeta `public/workshop/`.
2. Poner `foto-1.jpg`, `foto-2.jpg`, …, `foto-6.jpg`.
3. En `components/Workshop.tsx`, reemplazar los `<li>` placeholder por:
   ```tsx
   import Image from "next/image";
   // ...
   <Image src={`/workshop/foto-${i + 1}.jpg`} alt="..." fill className="object-cover" />
   ```

---

## Logo

Por ahora se usa `public/logo.png` (PNG). Cuando tengas el SVG:

1. Guardarlo como `public/logo.svg`.
2. En `components/Header.tsx` y `components/Footer.tsx`, cambiar `src="/logo.png"` → `src="/logo.svg"`.

---

## SEO incluido

- **Metadata API** (title, description, keywords, OG, Twitter) en `app/layout.tsx`.
- **JSON-LD `LocalBusiness` / `AutoRepair`** en `app/layout.tsx` (helper en `lib/seo.ts`). Crítico para SEO local.
- **Sitemap** dinámico en `/sitemap.xml` (`app/sitemap.ts`).
- **robots.txt** en `/robots.txt` (`app/robots.ts`).
- **Headings semánticos**: un solo `<h1>` (Hero), `<h2>` por sección.
- **`next/font/google`** para Inter (cero layout shift).
- **`next/image`** para todas las imágenes optimizadas (AVIF/WebP automático).

### Checklist post-deploy

1. Confirmar el dominio en `BUSINESS.siteUrl` (`lib/contact.ts`).
2. Generar y subir `og-image.jpg` (1200×630) y `favicon.ico` a `public/`.
3. Dar de alta el negocio en [Google Business Profile](https://business.google.com/) — clave para SEO local.
4. Verificar el sitio en [Google Search Console](https://search.google.com/search-console).
5. Validar el JSON-LD con [Rich Results Test](https://search.google.com/test/rich-results).
6. Correr Lighthouse → apuntar a SEO ≥ 95, Performance ≥ 90, Accessibility ≥ 95.

---

## Deploy en Vercel

**Opción A — Dashboard (recomendado):**

1. Subir este repo a GitHub.
2. Ir a [vercel.com/new](https://vercel.com/new), conectar GitHub, importar el repo.
3. Vercel detecta Next.js automáticamente — no hace falta config extra.
4. Click en "Deploy".

**Opción B — CLI:**

```bash
npm i -g vercel
vercel           # primer deploy (preview)
vercel --prod    # deploy a producción
```

### Dominio custom

En Vercel → Project → Settings → Domains → agregar `gvconvertidores.com.ar` (o el que corresponda) y configurar los DNS según las instrucciones.

Después, actualizar `BUSINESS.siteUrl` en `lib/contact.ts` para que el SEO apunte al dominio real.

---

## Estructura del proyecto

```
app/
  layout.tsx        # Metadata global, JSON-LD, fuente Inter, FloatingWhatsApp
  page.tsx          # Composición de las secciones
  globals.css       # Tailwind + variables CSS
  sitemap.ts        # /sitemap.xml
  robots.ts         # /robots.txt
components/
  Header.tsx
  Hero.tsx
  Problems.tsx
  Services.tsx
  Differentials.tsx
  Workshop.tsx
  Location.tsx
  FinalCTA.tsx
  Footer.tsx
  WhatsAppButton.tsx
  FloatingWhatsApp.tsx
lib/
  contact.ts        # SINGLE SOURCE OF TRUTH de datos de contacto
  seo.ts            # Helper JSON-LD LocalBusiness
public/
  logo.png          # Logo PNG (reemplazable por SVG)
```
