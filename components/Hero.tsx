import Image from "next/image";
import { BUSINESS, HOURS } from "@/lib/contact";

export default function Hero() {
  return (
    <section id="top" className="bg-brand-ink text-white">
      <div className="relative isolate flex min-h-[100svh] items-center overflow-hidden md:min-h-screen desk:h-[100svh] desk:min-h-0 desk:pt-[var(--nav-h)]">
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
          className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-ink/70 via-brand-ink/85 to-brand-ink md:bg-gradient-to-r md:from-brand-ink/95 md:via-brand-ink/80 md:to-brand-ink/25"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-brand-ink to-transparent"
          aria-hidden
        />

        <div className="container-x pb-16 pt-24 md:pb-20 md:pt-28 desk:py-0">
          <h1 className="hero-in display-title max-w-4xl text-5xl sm:text-7xl lg:text-8xl desk:max-w-[14ch] desk:text-fit-h1">
            Reparación de convertidores de torque
          </h1>

          <p
            className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl desk:mt-[4svh] desk:max-w-[36ch] desk:text-fit-lead"
            style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
          >
            No hacemos mecánica general: solo convertidores, para cajas
            automáticas. El mismo taller y las mismas manos desde hace más de{" "}
            {BUSINESS.yearsExperience} años.
          </p>

          <p
            className="hero-in mt-8 text-base text-white/60 desk:mt-[5svh] desk:text-fit-body"
            style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
          >
            Villa Crespo, CABA
            {HOURS.display.map((h) => (
              <span key={h.days}>
                {" · "}
                {h.days}, <span className="whitespace-nowrap">{h.hours} hs</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
