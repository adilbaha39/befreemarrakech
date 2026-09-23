import Image from "next/image";
import Link from "next/link";
import { t, AGENCY, FACEBOOK_URL, INSTAGRAM_URL, buildWhatsAppLink } from "@/lib/data";
import { Icon, WhatsAppIcon } from "./Icons";

export default function Footer({ lang }) {
  const NAV_LINKS = [
    { label: t(lang, "nav.accueil"), href: `/${lang}` },
    { label: t(lang, "nav.vehicules"), href: `/${lang}/vehicules` },
    { label: t(lang, "nav.agence"), href: `/${lang}/agence` },
  ];
  return (
    <footer className="bg-[#121212] text-white pt-14 pb-6 mt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Image src="/logo.png" alt="BE FREE Marrakech" width={200} height={80} className="h-16 w-auto mb-4" />
          <p className="text-white/60 text-sm max-w-xs">{t(lang, "footer.tagline")}</p>
          <p className="font-brush text-brand-red text-2xl mt-1">{t(lang, "footer.brush")}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white/50 mb-4 tracking-wide">{t(lang, "footer.nav")}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-red transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white/50 mb-4 tracking-wide">{t(lang, "footer.contact")}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2"><Icon name="pin" className="w-4 h-4 text-brand-red shrink-0 mt-0.5" /> <span>{t(lang, "agence.addressFull")}</span></li>
            <li className="flex items-center gap-2"><Icon name="phone" className="w-4 h-4 text-brand-red shrink-0" /> {AGENCY.phones[0]} <span className="text-white/40">{t(lang, "agence.whatsappTag")}</span></li>
            <li className="flex items-center gap-2"><Icon name="phone" className="w-4 h-4 text-brand-red shrink-0" /> {AGENCY.phones[1]}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white/50 mb-4 tracking-wide">{t(lang, "footer.follow")}</h4>
          <div className="flex gap-3">
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors">
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors">
              <Icon name="facebook" className="w-4 h-4" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram-hover w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <Icon name="instagram" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-white/40 gap-2">
        <span>{t(lang, "footer.rights")}</span>
        <span>{AGENCY.site}</span>
      </div>
    </footer>
  );
}
