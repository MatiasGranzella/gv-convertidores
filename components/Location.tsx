import {
  ADDRESS,
  CONTACT,
  HOURS,
  MAPS_EMBED_URL,
  phoneLink,
} from "@/lib/contact";

export default function Location() {
  const rows = [
    {
      term: "Teléfono",
      value: (
        <span className="flex flex-col items-start gap-3 desk:gap-[1.5svh]">
          {[
            { href: phoneLink(), label: CONTACT.phoneDisplay },
            { href: phoneLink(CONTACT.mobile), label: CONTACT.mobileDisplay },
          ].map((p) => (
            <a
              key={p.label}
              href={p.href}
              className="font-display text-3xl leading-none tracking-wide text-brand-darker transition-colors hover:text-brand-blue desk:text-fit-h3"
            >
              {p.label}
            </a>
          ))}
        </span>
      ),
    },
    {
      term: "Horario",
      value: HOURS.display.map((h) => (
        <span key={h.days} className="block">
          {h.days}, <span className="whitespace-nowrap">{h.hours} hs</span>
        </span>
      )),
    },
    {
      term: "Dónde",
      value: (
        <>
          <span className="block">{ADDRESS.street}</span>
          <span className="block">Villa Crespo, CABA</span>
        </>
      ),
    },
  ];

  return (
    <section id="contacto" className="bg-brand-light section-y screen text-brand-darker">
      <div className="container-x desk:h-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 desk:h-full">
          <div className="desk:flex desk:flex-col desk:justify-center">
            <h2 data-reveal className="title-bar display-title text-4xl sm:text-6xl desk:text-fit-h2">
              Estamos en Villa{" "}Crespo
            </h2>
            <p
              data-reveal
              style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
              className="mt-6 max-w-md text-lg leading-relaxed text-brand-gray desk:mt-[3svh] desk:max-w-[30ch] desk:text-fit-lead"
            >
              Llamanos y te atiende directamente el técnico.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 desk:mt-[5svh] desk:gap-[4svh]">
              {rows.map((r, i) => (
                <div
                  key={r.term}
                  data-reveal
                  style={{ "--reveal-delay": `${150 + i * 80}ms` } as React.CSSProperties}
                  className={i === 0 ? "sm:col-span-2" : ""}
                >
                  <dt className="font-display text-2xl tracking-wide text-brand-blue desk:text-fit-h3">
                    {r.term}
                  </dt>
                  <dd className="mt-2 text-lg leading-relaxed desk:mt-[1.5svh] desk:text-fit-lead">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            className="relative aspect-[4/3] overflow-hidden bg-brand-gray-light lg:aspect-auto lg:min-h-[30rem] desk:h-full desk:min-h-0">
            <iframe
              src={MAPS_EMBED_URL}
              title="Ubicación del taller GV Convertidores de Par en Villa Crespo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
