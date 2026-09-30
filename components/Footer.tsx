import Image from "next/image";
import { BUSINESS } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-ink pb-20 text-white/60 md:pb-0">
      <div className="container-x flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/gv-logo.png"
            alt=""
            width={256}
            height={256}
            className="h-12 w-12"
          />
          <div>
            <p className="font-display text-lg font-bold leading-none text-white">
              {BUSINESS.name}
            </p>
            <p className="mt-2 text-sm">
              Convertidores de torque · Villa Crespo, CABA
            </p>
          </div>
        </div>

        <div className="text-sm sm:text-right">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
