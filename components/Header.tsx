"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { CONTACT, phoneLink } from "@/lib/contact";

const NAV = [
  { label: "Talleres", href: "#talleres", id: "talleres" },
  { label: "Síntomas", href: "#sintomas", id: "sintomas" },
  { label: "Proceso", href: "#proceso", id: "proceso" },
  { label: "Opiniones", href: "#opiniones", id: "opiniones" },
  { label: "Contacto", href: "#contacto", id: "contacto" },
];

export default function Header() {
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  // Transparente sobre el hero; con fondo en cuanto se scrollea.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["top", ...NAV.map((n) => n.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      {
        // Una línea fina al 35% del viewport: la sección que la cruza es la activa.
        // (Con umbrales de ratio, las secciones altas nunca llegaban a marcarse.)
        rootMargin: "-35% 0px -64% 0px",
        threshold: 0,
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-brand-ink/95 backdrop-blur"
          : "border-white/20 bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 sm:h-20 desk:h-[var(--nav-h)]">
        <a
          href="#top"
          className="flex items-center"
          aria-label="GV Convertidores de Par — Inicio"
        >
          <Image
            src="/gv-logo-256.png"
            alt=""
            width={256}
            height={256}
            priority
            className="h-12 w-12 sm:h-16 sm:w-16 desk:h-[calc(var(--nav-h)*0.8)] desk:w-[calc(var(--nav-h)*0.8)]"
          />
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex desk:gap-[4svh]"
          aria-label="Navegación principal"
        >
          {NAV.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative py-2 text-base font-medium desk:text-fit-body transition-colors hover:text-white ${
                  isActive ? "text-white" : "text-white/70"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue desk:h-[0.25svh]"
                    aria-hidden
                  />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href={phoneLink()}
          aria-label={`Llamar al taller: ${CONTACT.phoneDisplay}`}
          className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-2 font-display text-lg tracking-wide text-white shadow-lg shadow-brand-ink/40 transition-colors hover:bg-brand-blue-dark desk:gap-[1svh] desk:px-[3svh] desk:py-[1.2svh] desk:text-fit-nav"
        >
          <Phone className="h-4 w-4 desk:h-[2svh] desk:w-[2svh]" aria-hidden />
          <span className="sm:hidden">Llamar</span>
          <span className="hidden sm:inline">{CONTACT.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
