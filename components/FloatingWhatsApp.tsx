import { whatsappLink } from "@/lib/contact";
import WhatsappIcon from "./WhatsappIcon";

// Único acceso a WhatsApp de la página, igual en mobile y desktop.
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp de GV Convertidores"
      className="fab-in fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/25 transition-colors hover:bg-whatsapp-dark sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <WhatsappIcon className="h-7 w-7 sm:h-9 sm:w-9" />
    </a>
  );
}
