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
    <section id="proceso" className="brushed bg-brand-darker section-y screen text-white">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <h2 data-reveal className="display-title text-4xl sm:text-6xl lg:col-span-7 desk:text-fit-h2">
            Cómo reparamos un convertidor
          </h2>
          <p
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            className="text-lg leading-relaxed text-white/70 lg:col-span-5 desk:text-fit-lead"
          >
            Todo el proceso se hace en nuestro taller.
          </p>
        </div>

        <ol className="mt-10 grid sm:mt-14 desk:mt-[8svh] grid-cols-1 border-t border-white/15 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
              className="relative grid grid-cols-[3rem_1fr] gap-x-4 border-b border-white/15 py-6 sm:py-8 sm:pr-8 lg:block lg:border-b-0 lg:border-r lg:px-6 lg:py-10 lg:first:pl-0 lg:last:border-r-0 desk:py-[5svh]"
            >
              <span
                className={`step-bar absolute -top-px left-0 h-0.5 w-12 bg-brand-blue ${i === 0 ? "" : "lg:left-6"}`}
                aria-hidden
              />
              <span className="row-span-2 font-display text-3xl font-bold leading-none text-white/40 lg:text-6xl desk:text-fit-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-bold sm:text-2xl lg:mt-4 desk:mt-[3svh] desk:text-fit-h3">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-white/65 desk:mt-[1.5svh] desk:text-fit-body">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
