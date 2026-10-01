import { Star } from "lucide-react";
import { GOOGLE, REVIEWS } from "@/lib/contact";

function Stars({ className }: { className?: string }) {
  return (
    <span className={`flex gap-1 ${className ?? ""}`} aria-label="5 de 5 estrellas" role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand-blue text-brand-blue desk:h-[2svh] desk:w-[2svh]" aria-hidden />
      ))}
    </span>
  );
}

// Las dos primeras reseñas van más anchas; las otras tres, en fila debajo.
const SPANS = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export default function Reviews() {
  return (
    <section id="opiniones" className="bg-white section-y screen">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2
            data-reveal
            className="title-bar display-title text-4xl text-brand-darker sm:text-6xl desk:text-fit-h2"
          >
            Lo que dicen en Google
          </h2>

          <a
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            href={GOOGLE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-4 text-brand-darker"
          >
            <span className="font-display text-5xl leading-none desk:text-fit-num">
              {GOOGLE.rating}
            </span>
            <span className="flex flex-col gap-1">
              <Stars />
              <span className="text-sm text-brand-gray underline decoration-brand-blue underline-offset-4 group-hover:text-brand-blue desk:text-fit-body">
                {GOOGLE.reviewCount} reseñas en Google Maps
              </span>
            </span>
          </a>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-6 desk:mt-[6svh] desk:gap-[2svh]">
          {REVIEWS.map((r, i) => (
            <li
              key={r.author}
              data-reveal
              style={{ "--reveal-delay": `${100 + i * 80}ms` } as React.CSSProperties}
              className={`${SPANS[i]} ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <figure className="flex h-full flex-col bg-brand-light p-6 sm:p-8 desk:p-[3.5svh]">
                <Stars />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-brand-darker desk:mt-[2svh] desk:text-fit-body">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 desk:mt-[3svh]">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue font-display text-lg uppercase text-white desk:h-[5svh] desk:w-[5svh] desk:text-fit-body"
                    aria-hidden
                  >
                    {r.author.charAt(0)}
                  </span>
                  <span className="font-display text-lg capitalize tracking-wide text-brand-darker desk:text-fit-body">
                    {r.author}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
