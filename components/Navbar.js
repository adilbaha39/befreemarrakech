"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LANGS, LANG_LABEL, LANG_SHORT, t, buildWhatsAppLink } from "@/lib/data";
import { WhatsAppIcon } from "./Icons";

function LangSwitcher({ lang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function switchTo(l) {
    setOpen(false);
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${l}${rest ? `/${rest}` : ""}`);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-md border border-black/10 text-[10px] sm:text-xs font-semibold text-black/70 hover:border-brand-red hover:text-brand-red transition-colors"
      >
        🌐 {LANG_SHORT[lang]}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute lang-dropdown mt-2 w-36 sm:w-40 bg-white rounded-xl shadow-lg border border-black/10 overflow-hidden z-50 py-1">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => switchTo(l)}
              className={`w-full px-4 py-2 text-sm transition-colors text-left ${lang === l ? "bg-brand-red text-white font-semibold" : "text-black/75 hover:bg-black/5"}`}
            >
              {LANG_LABEL[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar({ lang }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const NAV_LINKS = [
    { label: t(lang, "nav.accueil"), href: `/${lang}` },
    { label: t(lang, "nav.vehicules"), href: `/${lang}/vehicules` },
    { label: t(lang, "nav.agence"), href: `/${lang}/agence` },
  ];
  const marquee = t(lang, "marquee.items") || [];
  const doubled = [...marquee, ...marquee];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {marquee.length > 0 && (
        <div className="marquee-bar" aria-hidden="true">
          <div className="marquee-track animate-marquee">
            {doubled.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {item}
                <span className="text-brand-red">•</span>
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="pt-3 sm:pt-[18px] px-3 sm:px-[18px]">
        <nav className="max-w-[1180px] mx-auto h-[54px] sm:h-[62px] px-3 sm:px-5 flex items-center justify-between bg-white/95 backdrop-blur-md rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.18)] gap-3">
          <Link href={`/${lang}`} className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <Image src="/logo.png" alt="BE FREE Marrakech" width={160} height={64} className="h-9 sm:h-12 w-auto object-contain shrink-0" priority />
            <span className="hidden md:block w-px h-8 bg-black/15 shrink-0"></span>
            <span className="hidden md:block text-[9px] lg:text-[10px] leading-tight font-medium text-black/65 max-w-[140px] lg:max-w-[220px]">
              {t(lang, "nav.tagline")}
            </span>
          </Link>
          <div className="hidden xl:flex items-center gap-7 shrink-0">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || pathname === `${l.href}/`;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative text-[13px] font-semibold transition-colors whitespace-nowrap ${active ? "text-brand-red" : "text-black/75 hover:text-brand-red"}`}
                >
                  {l.label}
                  {active && <span className="absolute left-0 -bottom-1.5 w-full h-0.5 bg-brand-red rounded-full"></span>}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <LangSwitcher lang={lang} />
            <a
              href={buildWhatsAppLink(t(lang, "reservation.waIntro"))}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 h-8 sm:h-10 px-3 sm:px-[18px] bg-brand-green text-white text-[10px] sm:text-xs font-bold rounded-md whitespace-nowrap hover:bg-brand-greendark transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" /> {t(lang, "nav.reserver")}
            </a>
            <button className="xl:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]" aria-label="menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <span className={`block w-5 h-0.5 bg-black rounded-full transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`}></span>
              <span className={`block w-5 h-0.5 bg-black rounded-full transition-all ${open ? "opacity-0" : ""}`}></span>
              <span className={`block w-5 h-0.5 bg-black rounded-full transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
            </button>
          </div>
        </nav>
        {open && (
          <div className="xl:hidden mt-2 max-w-[1180px] mx-auto bg-white rounded-lg shadow-lg p-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-black/80 hover:text-brand-red transition-colors py-1">
                {l.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppLink(t(lang, "reservation.waIntro"))}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-green text-white text-sm font-semibold px-5 py-2.5 rounded-md mt-1 hover:bg-brand-greendark"
            >
              <WhatsAppIcon className="w-4 h-4" /> {t(lang, "nav.reserver")}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
