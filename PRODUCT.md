# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Mechanics and automatic-transmission shops that send torque converters out for repair. They know the part and want a specialist they can trust with a customer's car. Confirmed 2026-09-29: all the work comes from mechanics and shops; private owners don't come. The page speaks only to mechanics, with a single line pointing a stray private owner to their mechanic.

## Product Purpose
Landing page for GV Convertidores de Par, a real family-run workshop in Villa Crespo (CABA, Buenos Aires) that only repairs torque converters. Success means a visitor sends a WhatsApp or calls the shop. Local search visibility in Buenos Aires is critical.

## Positioning
Single-specialty shop: they don't do general mechanics, only torque converters. Same shop and same hands for more than 40 years. The whole process (opening, inspection, repair, welding, hydraulic test) is done in-house. The customer talks directly with the technician.

## Operating Context
Contact happens through WhatsApp (prefilled message) and phone. Hours: Monday to Friday, 8:00 to 16:00. Covers converters for cars, pickups, forklifts and road equipment. Confirmed 2026-10-01: there IS a warranty (if the converter fails or there is a problem, the shop covers shipping and the repair). Turnaround: 48 to 72 hours. They receive and ship converters to the rest of the country via Vía Cargo or regular parcel services. Only original parts, imported from the United States. The converter is always repaired, never swapped for a whole unit. All car brands. Never publish prices.

## Capabilities and Constraints
- Next.js 15 App Router + Tailwind 3; contact data centralized in `lib/contact.ts`.
- Address: Cnel. Antonio Susini 2335, Villa Crespo (C1414CXH). Google Maps listing already exists as "GV Convertidores de Par". Domain gvconvertidores.com.ar is bought; the site deploys to GitHub Pages from MatiasGranzella/gv-convertidores (Actions workflow). Email still TODO.
- JSON-LD `AutoRepair`, sitemap, robots and `es_AR` metadata must be kept.
- Only one `<h1>`; one `<h2>` per section.

## Brand Commitments
- Name: GV Convertidores de Par (same as the Google Maps listing). Official logo: `public/gv-logo.png` (round metallic badge: navy "GV", electric-blue glow, brushed steel, a torque converter illustration, text "Especialistas en convertidores de par").
- Voice: Rioplatense Spanish using "vos", plain and direct, technician to technician. Trustworthy workshop, not a tech startup.
- Experience claim: "más de 40 años".

## Evidence on Hand
- Logo: `public/gv-logo.png`.
- Images: `public/convertidor.png` (converter); `public/hero-mechanic.jpg` (stock photo, the user likes it).
- No real photos of the workshop yet. The user will add AI-generated converter images. Don't invent testimonials, customer counts, prices or turnaround times.

## Product Principles
1. Contact first: WhatsApp and phone are always within reach.
2. Specialty is the argument: everything reinforces "only converters, for 40 years".
3. Speak mechanic to mechanic: technical where it helps, no consumer-facing explanations.
4. Real, local and verifiable: Villa Crespo, hours and a real phone number, no marketing filler.
