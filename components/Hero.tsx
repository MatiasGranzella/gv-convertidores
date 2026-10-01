import Image from "next/image";
import { Clock, MapPin, Star } from "lucide-react";
import { ADDRESS, BUSINESS, GOOGLE, HOURS } from "@/lib/contact";

export default function Hero() {
  return (
    <section id="top" className="relative bg-brand-ink text-white">
      <div className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-16 sm:pt-20 desk:h-[100svh] desk:min-h-0 desk:pt-[var(--nav-h)]">
        {/* TODO: reemplazar por foto real del taller. Actual: foto de stock. */}
        <Image
          src="/hero-mechanic.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-zoom -z-20 object-cover object-center"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-ink/80 via-brand-ink/85 to-brand-ink md:bg-gradient-to-r md:from-brand-ink/95 md:via-brand-ink/80 md:to-brand-ink/30"
          aria-hidden
        />

        {/* Datos del taller debajo del menú, separados por una línea. */}
        <div className="container-x">
          <ul className="hero-in flex flex-wrap gap-x-8 gap-y-2 border-b border-white/20 py-4 text-sm text-white/80 sm:text-base desk:gap-x-[5svh] desk:py-[2.5svh] desk:text-fit-body">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-brand-blue-light desk:h-[2.2svh] desk:w-[2.2svh]" aria-hidden />
              {ADDRESS.street}, Villa Crespo
            </li>
            {HOURS.display.map((h) => (
              <li key={h.days} className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-brand-blue-light desk:h-[2.2svh] desk:w-[2.2svh]" aria-hidden />
                {h.days}, <span className="whitespace-nowrap">{h.hours} hs</span>
              </li>
            ))}
            <li>
              <a
                href={GOOGLE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Star className="h-4 w-4 shrink-0 fill-brand-blue-light text-brand-blue-light desk:h-[2.2svh] desk:w-[2.2svh]" aria-hidden />
                {GOOGLE.rating} en Google · {GOOGLE.reviewCount} reseñas
              </a>
            </li>
          </ul>
        </div>

        <div className="container-x flex flex-1 items-center pb-24 pt-16 sm:pb-32 lg:pb-40 desk:pb-[16svh] desk:pt-0">
          <div>
            <h1
              className="hero-in display-title max-w-4xl text-5xl sm:text-7xl lg:text-8xl desk:max-w-[16ch] desk:text-fit-h1"
              style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            >
              Reparación de convertidores de torque
            </h1>

            <p
              className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl desk:mt-[4svh] desk:max-w-[40ch] desk:text-fit-lead"
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            >
              No hacemos mecánica general: solo convertidores, para cajas
              automáticas. El mismo taller y las mismas manos desde hace más de{" "}
              {BUSINESS.yearsExperience} años.
            </p>
          </div>
        </div>
      </div>

      {/* Corte diagonal hacia la sección siguiente, con dos franjas azules. */}
      <svg
        className="absolute inset-x-0 bottom-0 h-16 w-full sm:h-24 lg:h-32"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden
      >
        <polygon points="0,160 1440,0 1440,160" className="fill-brand-light" />
        <polygon points="640,88.9 1440,0 1440,32 640,120.9" className="fill-brand-blue-dark" />
        <polygon points="980,83.1 1440,32 1440,72 980,123.1" className="fill-brand-blue" />
      </svg>
    </section>
  );
}
