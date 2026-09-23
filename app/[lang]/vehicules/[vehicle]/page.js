import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LANGS, t, VEHICLES, formatVehiclePrice, buildWhatsAppLink } from "@/lib/data";
import { Icon, WhatsAppIcon } from "@/components/Icons";

const SITE = "https://befreemarrakech.com";

export function generateStaticParams() {
  const params = [];
  for (const lang of LANGS) {
    for (const v of VEHICLES) params.push({ lang, vehicle: v.id });
  }
  return params;
}

export function generateMetadata({ params }) {
  const { lang, vehicle } = params;
  const v = VEHICLES.find((x) => x.id === vehicle);
  if (!v) return {};
  return {
    title: v.nameKey,
    description: v.desc[lang],
    alternates: { canonical: `/${lang}/vehicules/${v.id}/` },
    openGraph: { images: [`${SITE}${v.img}`] },
  };
}

function jsonLdProduct(v, lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: v.nameKey,
    description: v.desc[lang],
    image: `${SITE}${v.img}`,
    offers: {
      "@type": "Offer",
      priceCurrency: lang === "ar" ? "MAD" : lang === "en" ? "USD" : "EUR",
      price: v.priceEUR,
      availability: "https://schema.org/InStock",
      url: `${SITE}/${lang}/vehicules/${v.id}/`,
    },
  };
}

export default function VehicleDetailPage({ params }) {
  const { lang, vehicle } = params;
  const v = VEHICLES.find((x) => x.id === vehicle);
  if (!v) notFound();

  const others = VEHICLES.filter((x) => x.id !== v.id).slice(0, 3);

  return (
    <main className="max-w-5xl mx-auto px-5 md:px-8 pt-40 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct(v, lang)) }} />
      <nav className="text-sm text-black/50 mb-6 reveal">
        <Link href={`/${lang}/vehicules`} className="hover:text-brand-red">{t(lang, "vehiclesPage.title")}</Link>
        <span className="mx-1.5">/</span>
        <span className="text-black/80">{v.nameKey}</span>
      </nav>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="reveal bg-white rounded-2xl overflow-hidden shadow-sm">
          <Image src={v.img} alt={v.nameKey} width={900} height={700} className="w-full h-auto object-contain bg-white" priority />
        </div>
        <div className="reveal">
          <p className="text-xs text-brand-red font-semibold uppercase tracking-wide">{t(lang, `categories.${v.categoryKey}`)}</p>
          <h1 className="font-display text-3xl sm:text-4xl mt-1 mb-3">{v.nameKey}</h1>
          <p className="text-black/70 leading-relaxed mb-5">{v.desc[lang]}</p>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-brand-red font-bold text-2xl">{formatVehiclePrice(v, lang)}</span>
            <span className="text-xs text-black/50 flex items-center gap-1">
              <Icon name="gear" className="w-4 h-4" /> {t(lang, `tags.${v.tagKey}`)}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={`/${lang}/reservation?vehicle=${v.id}`} className="btn-magnetic text-center bg-brand-red text-white font-semibold px-6 py-3.5 rounded-full hover:bg-brand-reddark">
              {t(lang, "vehiclesPage.reserveThis")}
            </Link>
            <a href={buildWhatsAppLink(t(lang, "reservation.waIntro"))} target="_blank" rel="noopener noreferrer" className="btn-magnetic flex items-center justify-center gap-2 bg-brand-green text-white font-semibold px-6 py-3.5 rounded-full hover:bg-brand-greendark">
              <WhatsAppIcon className="w-5 h-5" /> {t(lang, "hero.book")}
            </a>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-2xl mb-6 reveal">{t(lang, "fleet.title")}</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {others.map((o) => (
            <Link key={o.id} href={`/${lang}/vehicules/${o.id}`} className="reveal card-hover bg-white rounded-2xl overflow-hidden shadow-sm block">
              <Image src={o.img} alt={o.nameKey} width={400} height={300} className="w-full h-auto object-contain bg-white" />
              <div className="p-4">
                <p className="font-semibold">{o.nameKey}</p>
                <p className="text-brand-red font-bold text-sm mt-1">{formatVehiclePrice(o, lang)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
