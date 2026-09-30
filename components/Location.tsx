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
        <a
          href={phoneLink()}
          className="font-display text-3xl font-bold leading-none desk:text-fit-num underline decoration-brand-blue decoration-2 underline-offset-8 hover:text-brand-blue-light"
        >
          {CONTACT.phoneDisplay}
        </a>
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
    <section id="contacto" className="bg-brand-ink section-y screen text-white">
      <div className="container-x desk:h-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 desk:h-full">
          <div className="desk:flex desk:flex-col desk:justify-center">
            <h2 data-reveal className="display-title text-4xl sm:text-6xl desk:text-fit-h2">
              Estamos en Villa{" "}Crespo
            </h2>
            <p
              data-reveal
              style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
              className="mt-6 max-w-md text-lg leading-relaxed text-white/70 desk:mt-[3svh] desk:max-w-[30ch] desk:text-fit-lead"
            >
              Llamanos y te atiende directamente el técnico.
            </p>

            <dl className="mt-10 border-t border-white/15 desk:mt-[5svh]">
              {rows.map((r, i) => (
                <div
                  key={r.term}
                  data-reveal
                  style={{ "--reveal-delay": `${150 + i * 80}ms` } as React.CSSProperties}
                  className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-white/15 py-4 sm:grid-cols-[9rem_1fr] desk:grid-cols-[9em_1fr] desk:py-[2.6svh] desk:text-fit-body"
                >
                  <dt className="text-base font-semibold text-white/60 desk:text-fit-body">
                    {r.term}
                  </dt>
                  <dd className="text-lg font-medium desk:text-fit-lead">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            className="relative aspect-[4/3] overflow-hidden rounded-sm bg-brand-darker lg:aspect-auto lg:min-h-[30rem] desk:h-full desk:min-h-0">
            <iframe
              src={MAPS_EMBED_URL}
              title="Ubicación del taller GV Convertidores en Villa Crespo"
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
