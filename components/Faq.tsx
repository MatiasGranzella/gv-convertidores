// Respuestas confirmadas por el taller (octubre 2026). No agregar precios.
const FAQS = [
  {
    q: "¿Cuánto tarda la reparación?",
    a: "Entre 48 y 72 horas.",
  },
  {
    q: "¿Tiene garantía?",
    a: "Sí. Si el convertidor falla o hay algún problema, nos hacemos cargo del envío y del arreglo.",
  },
  {
    q: "¿Reparan o cambian el convertidor?",
    a: "Lo reparamos. Nunca lo cambiamos por uno completo.",
  },
  {
    q: "¿Qué repuestos usan?",
    a: "Solo repuestos originales, con piezas traídas de Estados Unidos.",
  },
  {
    q: "¿Reciben convertidores del interior?",
    a: "Sí. Recibimos y enviamos al interior por Vía Cargo o la paquetería que te quede cómoda.",
  },
  {
    q: "¿Con qué marcas trabajan?",
    a: "Con todas las marcas: autos, camionetas, autoelevadores y equipos viales.",
  },
];

export default function Faq() {
  return (
    <section id="preguntas" className="bg-brand-ink section-y screen text-white">
      <div className="container-x">
        <h2 data-reveal className="display-title text-4xl sm:text-6xl desk:text-fit-h2">
          Preguntas frecuentes
        </h2>

        <dl className="mt-8 grid grid-cols-1 gap-x-16 border-t border-white/15 sm:mt-12 md:grid-cols-2 desk:mt-[6svh] desk:gap-x-[8svh]">
          {FAQS.map((f, i) => (
            <div
              key={f.q}
              data-reveal
              style={{ "--reveal-delay": `${100 + i * 70}ms` } as React.CSSProperties}
              className="border-b border-white/15 py-6 desk:py-[3.5svh]"
            >
              <dt className="border-l-[3px] border-brand-blue pl-4 font-display text-xl tracking-wide sm:text-2xl desk:pl-[2svh] desk:text-fit-h3">
                {f.q}
              </dt>
              <dd className="mt-2 pl-4 text-base leading-relaxed text-white/75 sm:text-lg desk:mt-[1.5svh] desk:pl-[2svh] desk:text-fit-body">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
