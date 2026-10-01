import Image from "next/image";
import { BUSINESS } from "@/lib/contact";

const SPECS = [
  { term: "Especialidad", value: "Solo convertidores de torque" },
  {
    term: "Trayectoria",
    value: `Más de ${BUSINESS.yearsExperience} años, el mismo taller`,
  },
  {
    term: "Proceso",
    value: "Apertura, control, reparación, soldadura y prueba hidráulica. Todo en taller propio.",
  },
  {
    term: "Trabajamos",
    value: "Autos, camionetas, autoelevadores y equipos viales",
  },
  { term: "Trato", value: "Directo con el técnico que hace el trabajo" },
];

export default function ForShops() {
  return (
    <section id="talleres" className="bg-brand-light section-y screen">
      <div className="container-x desk:h-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16 desk:h-full desk:items-stretch">
          <div className="lg:col-span-5 desk:flex desk:min-h-0 desk:flex-col">
            <h2 data-reveal className="title-bar display-title text-4xl text-brand-darker sm:text-6xl desk:text-fit-h2">
              Trabajamos para talleres y mecánicos
            </h2>
            <p
              data-reveal
              style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
              className="mt-6 text-lg leading-relaxed text-brand-gray desk:mt-[3svh] desk:text-fit-lead"
            >
              Nos mandás el convertidor y hacemos todo el trabajo en nuestro
              taller, sin tercerizar.
            </p>

            <div
              data-reveal="scale"
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
              className="offset-frame mt-8 md:mt-10 desk:mt-[4svh] desk:flex desk:min-h-0 desk:flex-1 desk:flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink md:aspect-[3/2] desk:aspect-auto desk:min-h-0 desk:flex-1">
                <Image
                  src="/convertidor.jpg"
                  alt="Convertidor de torque sobre el banco de trabajo del taller"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 desk:flex desk:flex-col desk:justify-center">
            <dl className="border-t-2 border-brand-darker">
              {SPECS.map((s, i) => (
                <div
                  key={s.term}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                  className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 border-b border-brand-darker/15 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:py-6 desk:grid-cols-[11em_1fr] desk:py-[2.6svh] desk:text-fit-body"
                >
                  <dt className="font-display text-lg tracking-wide text-brand-blue desk:text-fit-lead">
                    {s.term}
                  </dt>
                  <dd className="text-base font-medium leading-snug text-brand-darker sm:text-xl desk:text-fit-lead desk:leading-snug">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
