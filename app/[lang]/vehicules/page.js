import { LANGS, t, VEHICLES } from "@/lib/data";
import { Icon } from "@/components/Icons";
import VehicleCard from "@/components/VehicleCard";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }) {
  const { lang } = params;
  return {
    title: t(lang, "vehiclesPage.title"),
    description: t(lang, "vehiclesPage.desc"),
    alternates: { canonical: `/${lang}/vehicules/` },
  };
}

export default function VehiclesPage({ params }) {
  const { lang } = params;
  return (
    <main className="max-w-7xl mx-auto px-5 md:px-8 pt-40 pb-24">
      <div className="flex items-center gap-2 text-brand-red font-semibold text-sm mb-2 reveal">
        <Icon name="flag" className="w-4 h-4" /> {t(lang, "vehiclesPage.tag")}
      </div>
      <h1 className="font-display text-4xl sm:text-5xl mb-3 reveal">{t(lang, "vehiclesPage.title")}</h1>
      <p className="text-black/60 max-w-lg mb-8 reveal">{t(lang, "vehiclesPage.desc")}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {VEHICLES.map((v) => (
          <VehicleCard key={v.id} v={v} lang={lang} />
        ))}
      </div>
    </main>
  );
}
