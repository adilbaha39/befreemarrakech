import { t, buildWhatsAppLink } from "@/lib/data";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFab({ lang }) {
  return (
    <a
      href={buildWhatsAppLink(t(lang, "reservation.waIntro"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fab-whatsapp btn-magnetic animate-pulse-ring w-14 h-14 rounded-full text-white flex items-center justify-center shadow-xl xl:hidden"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
