import Image from "next/image";
import { BUSINESS } from "@/lib/contact";

// Las descripciones son generales a propósito: si el taller quiere agregar
// detalle técnico (qué se cambia, cómo se prueba), editar acá.
const STEPS = [
  {
    title: "Apertura",
    description: "Abrimos la carcasa para llegar a todo lo que hay adentro.",
  },
  {
    title: "Control",
    description: "Revisamos pieza por pieza y vemos qué está gastado o roto.",
  },
  {
    title: "Reparación",
    description: "Reemplazamos y reparamos lo que haga falta.",
  },
  {
    title: "Soldadura",
    description: "Volvemos a cerrar el convertidor en el taller.",
  },
  {
    title: "Prueba hidráulica",
    description: "Lo probamos antes de entregarlo.",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative isolate overflow-hidden bg-brand-darker section-y screen text-white"
    >
      <Image
        src="/convertidor.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-brand-darker/85" aria-hidden />

      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <h2 data-reveal className="display-title text-4xl sm:text-6xl desk:text-fit-h2">
              Cómo reparamos un convertidor
            </h2>
            <p
              data-reveal
              style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
              className="mt-6 max-w-md text-lg leading-relaxed text-white/80 desk:mt-[3svh] desk:text-fit-lead"
            >
              Todo el proceso se hace en nuestro taller.
            </p>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
            className="bg-brand-ink px-6 py-8 sm:px-16 sm:py-12 lg:col-span-7 desk:px-[7svh] desk:py-[5svh]"
          >
            <p className="flex items-baseline gap-4">
              <span className="font-display text-6xl leading-none desk:text-fit-num">
                +{BUSINESS.yearsExperience}
              </span>
              <span className="text-base text-white/70 desk:text-fit-body">
                años reparando convertidores
              </span>
            </p>

            <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 desk:mt-[4svh] desk:gap-x-[4svh] desk:gap-y-[3svh]">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  data-reveal
                  style={{ "--reveal-delay": `${200 + i * 90}ms` } as React.CSSProperties}
                  className="border-l-[3px] border-brand-blue pl-6 desk:pl-[2.5svh]"
                >
                  <h3 className="font-display text-xl tracking-wide sm:text-2xl desk:text-fit-h3">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/70 desk:mt-[1svh] desk:text-fit-body">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
