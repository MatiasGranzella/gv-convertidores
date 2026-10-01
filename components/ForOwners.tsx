import { Activity, AlertTriangle, Gauge, Volume2, Waves } from "lucide-react";

// Textos tomados de la web original del taller.
const SYMPTOMS = [
  {
    icon: Activity,
    title: "Tirones al manejar",
    description: "Se siente brusco al acelerar o al cambiar de marcha.",
  },
  {
    icon: Gauge,
    title: "Pérdida de potencia",
    description: "El motor pierde fuerza al subir pendientes.",
  },
  {
    icon: AlertTriangle,
    title: "Caja que patina",
    description: "El motor revoluciona pero el auto no acompaña.",
  },
  {
    icon: Volume2,
    title: "Vibraciones o ruidos",
    description: "Ruidos o vibraciones andando a baja velocidad.",
  },
  {
    icon: Waves,
    title: "Trepidación",
    description: "Vibración entre cambios al acelerar o desacelerar.",
  },
];

export default function ForOwners() {
  return (
    <section
      id="sintomas"
      className="bg-white section-y screen"
    >
      <div className="container-x">
        <h2
          data-reveal
          className="title-bar display-title text-4xl text-brand-darker sm:text-6xl desk:text-fit-h2"
        >
          Síntomas de un convertidor con falla
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5 desk:mt-[7svh] desk:gap-[1.5svh]">
          {SYMPTOMS.map(({ icon: Icon, title, description }, i) => (
            <li
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${100 + i * 80}ms` } as React.CSSProperties}
            >
              <div className="lift group flex h-full gap-4 bg-brand-light p-6 transition-colors duration-300 hover:bg-brand-blue sm:block sm:p-8 desk:px-[3svh] desk:py-[4.5svh]">
                <Icon
                  className="h-7 w-7 shrink-0 text-brand-blue transition-colors group-hover:text-white sm:h-8 sm:w-8 desk:h-[4.5svh] desk:w-[4.5svh]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <div>
                  <h3 className="font-display text-xl leading-tight text-brand-darker transition-colors group-hover:text-white sm:mt-6 sm:text-2xl desk:mt-[4svh] desk:text-fit-h3">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-brand-gray transition-colors group-hover:text-white/85 desk:mt-[1.5svh] desk:text-fit-body">
                    {description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
