import { Suspense } from "react";
import { LANGS, t } from "@/lib/data";
import ReservationForm from "./ReservationForm";
import { WhatsAppIcon } from "@/components/Icons";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }) {
  const { lang } = params;
  return {
    title: t(lang, "reservation.title"),
    description: t(lang, "reservation.desc"),
    alternates: { canonical: `/${lang}/reservation/` },
  };
}

export default function ReservationPage({ params }) {
  const { lang } = params;
  return (
    <main className="max-w-3xl mx-auto px-5 md:px-8 pt-40 pb-24">
      <div className="flex items-center gap-2 text-brand-red font-semibold text-sm mb-2 reveal">
        <WhatsAppIcon className="w-4 h-4" /> {t(lang, "reservation.tag")}
      </div>
      <h1 className="font-display text-4xl sm:text-5xl mb-3 reveal">{t(lang, "reservation.title")}</h1>
      <p className="text-black/60 mb-10 reveal">{t(lang, "reservation.desc")}</p>
      <Suspense fallback={<div className="bg-white rounded-2xl shadow-sm p-8 text-center text-black/40">…</div>}>
        <ReservationForm lang={lang} />
      </Suspense>
    </main>
  );
}
