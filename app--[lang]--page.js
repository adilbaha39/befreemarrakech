import Image from "next/image";
import Link from "next/link";
import { LANGS, T, t, VEHICLES, REVIEWS, GOOGLE_REVIEWS_URL, GOOGLE_REVIEWS_RATING, buildWhatsAppLink } from "@/lib/data";
import { Icon, WhatsAppIcon, Stars } from "@/components/Icons";
import { Counter } from "@/components/ScrollEffects";
import VehicleCard from "@/components/VehicleCard";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// No generateMetadata override here — the [lang]/layout.js "default"
// title and description already describe the homepage correctly.

function StatsSection({ lang }) {
  const stats = [
    { end: 500, suffix: "+", label: t(lang, "stats.clients") },
    { end: 5, suffix: ".0", label: t(lang, "stats.rating") },
    { end: 8, suffix: "", label: t(lang, "stats.vehicles") },
    { end: 12, suffix: "+", label: t(lang, "stats.years") },
  ];
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 mt-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <div key={i} className="reveal bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow card-hover" style={{ transitionDelay: `${i * 80}ms` }}>
            <p className="font-display text-3xl sm:text-4xl text-brand-red">
              <Counter end={s.end} suffix={s.suffix} />
            </p>
            <p className="text-xs sm:text-sm text-black/60 mt-2 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DestinationsSection({ lang }) {
  const items = t(lang, "destinations.items") || [];
  const emojis = ["🕌", "🎭", "🌿", "🌴", "🏙️", "🏜️"];
  const colors = ["#E0122B", "#B80E22", "#1B7E5C", "#128C7E", "#6B21A8", "#D97706"];
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 mt-24">
      <div className="text-center mb-10">
        <div className="flex items-center gap-2 text-brand-red font-semibold text-sm mb-3 reveal justify-center">
          <Icon name="pin" className="w-4 h-4" /> {t(lang, "destinations.tag")}
        </div>
        <h2 className="font-display text-3xl sm:text-4xl mb-3 reveal">{t(lang, "destinations.title")}</h2>
        <p className="text-black/60 max-w-lg mx-auto reveal">{t(lang, "destinations.desc")}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((d, i) => (
          <div key={d.name} className="reveal card-hover bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4" style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: `${colors[i]}15`, color: colors[i] }}>
              {emojis[i]}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold truncate">{d.name}</p>
              <p className="text-xs text-black/55 truncate">{d.desc}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs text-brand-red font-bold">🛵 {d.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewsSection({ lang }) {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 mt-24">
      <div className="text-center mb-10">
        <div className="flex items-center gap-2 text-brand-red font-semibold text-sm mb-3 reveal justify-center">
          <Icon name="google" className="w-4 h-4" /> {t(lang, "reviews.tag")}
        </div>
        <h2 className="font-display text-3xl sm:text-4xl mb-3 reveal">{t(lang, "reviews.title")}</h2>
        <p className="text-black/60 max-w-lg mx-auto mb-4 reveal">{t(lang, "reviews.desc")}</p>
        <div className="flex items-center justify-center gap-3 reveal">
          <span className="font-display text-4xl text-brand-red">{GOOGLE_REVIEWS_RATING.toFixed(1)}</span>
          <div className="text-left">
            <Stars rating={5} size="w-5 h-5" />
            <p className="text-xs text-black/50 mt-0.5">{t(lang, "reviews.basedOn")}</p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {REVIEWS.map((r, i) => (
          <article key={r.id} className="reveal card-hover bg-white rounded-2xl p-5 shadow-sm flex flex-col" style={{ transitionDelay: `${i * 90}ms` }} itemScope itemProp="review" itemType="https://schema.org/Review">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0" style={{ background: r.color }} aria-hidden="true">
                {r.initial}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm truncate" itemProp="author">{r.name}</p>
                <p className="text-xs text-black/45">{r.date[lang]}</p>
              </div>
              <Icon name="google" className="w-5 h-5 shrink-0" />
            </div>
            <div className="mb-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <meta itemProp="ratingValue" content={r.rating} />
              <meta itemProp="bestRating" content="5" />
              <Stars rating={r.rating} />
            </div>
            <p className="text-sm text-black/75 leading-relaxed flex-1" itemProp="reviewBody">{r.text[lang]}</p>
          </article>
        ))}
      </div>
      <div className="text-center mt-10 reveal">
        <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-magnetic inline-flex items-center gap-2 border-2 border-brand-black/15 text-brand-black font-semibold px-6 py-3 rounded-full hover:border-brand-red hover:text-brand-red transition-colors text-sm">
          <Icon name="google" className="w-5 h-5" />
          {t(lang, "reviews.seeAll")} <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default function HomePage({ params }) {
  const { lang } = params;
  const featured = [VEHICLES[0], VEHICLES[2], VEHICLES[1], VEHICLES[6]];
  return (
    <>
      <section className="w-full pt-28 sm:pt-36">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6">
          <Image src="/hero.jpeg" alt="BE FREE Marrakech" width={2400} height={1500} className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl block" priority />
        </div>
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 mt-4 sm:mt-6 flex flex-row gap-2.5 sm:gap-4">
          <a href={buildWhatsAppLink(t(lang, "reservation.waIntro"))} target="_blank" rel="noopener noreferrer" className="btn-magnetic flex-1 flex items-center justify-center gap-2 bg-brand-green text-white font-bold px-3 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg text-xs sm:text-base whitespace-nowrap hover:bg-brand-greendark">
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /> {t(lang, "hero.book")}
          </a>
          <Link href={`/${lang}/vehicules`} className="btn-magnetic flex-1 flex items-center justify-center gap-2 border-2 border-brand-black/80 text-brand-black font-bold px-3 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-brand-black hover:text-white transition-colors text-xs sm:text-base whitespace-nowrap">
            {t(lang, "hero.seeVehicles")} <span>{lang === "ar" ? "←" : "→"}</span>
          </Link>
        </div>
      </section>

      <StatsSection lang={lang} />

      <section className="max-w-7xl mx-auto px-5 md:px-8 mt-20">
        <div className="flex items-center gap-2 text-brand-red font-semibold text-sm mb-2 reveal">
          <Icon name="flag" className="w-4 h-4" /> {t(lang, "fleet.tag")}
        </div>
        <h2 className="font-display text-3xl sm:text-4xl brush-underline reveal mb-4">{t(lang, "fleet.title")}</h2>
        <p className="text-black/60 max-w-lg mb-8 reveal">{t(lang, "fleet.desc")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((v) => (
            <VehicleCard key={v.id} v={v} lang={lang} />
          ))}
        </div>
        <div className="text-center mt-8 reveal">
          <Link href={`/${lang}/vehicules`} className="inline-block border border-brand-red text-brand-red font-semibold px-6 py-3 rounded-full hover:bg-brand-red hover:text-white transition-colors text-sm">
            {t(lang, "fleet.seeAll")}
          </Link>
        </div>
      </section>

      <DestinationsSection lang={lang} />

      <section className="max-w-3xl mx-auto px-5 md:px-8 mt-24 text-center">
        <div className="flex items-center gap-2 text-brand-red font-semibold text-sm mb-3 reveal justify-center">
          <Icon name="flagCheckered" className="w-4 h-4" /> {t(lang, "how.tag")}
        </div>
        <h2 className="font-display text-3xl mb-10 reveal">{t(lang, "how.title")}</h2>
        <div className="space-y-6 text-left max-w-md mx-auto">
          {T[lang].how.steps.map((s, i) => (
            <div key={s.title} className="reveal flex gap-4 items-start" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="step-badge w-9 h-9 rounded-full flex items-center justify-center text-sm shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-semibold flex items-center gap-2">
                  <Icon name={s.icon} className="w-4 h-4 text-brand-red" /> {s.title}
                </p>
                <p className="text-sm text-black/60 mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a href={buildWhatsAppLink(t(lang, "reservation.waIntro"))} target="_blank" rel="noopener noreferrer" className="btn-magnetic reveal inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-6 py-3.5 rounded-full shadow-lg mt-10 hover:bg-brand-greendark">
          <WhatsAppIcon className="w-5 h-5" /> {t(lang, "hero.book")}
        </a>
        <p className="font-brush text-brand-red text-3xl leading-tight mt-10 reveal">
          {t(lang, "how.explore1")} {t(lang, "how.explore2")}
        </p>
      </section>

      <ReviewsSection lang={lang} />
    </>
  );
}
