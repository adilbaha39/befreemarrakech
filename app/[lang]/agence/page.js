import Image from "next/image";
import { LANGS, T, t, AGENCY, GOOGLE_REVIEWS_URL, buildWhatsAppLink } from "@/lib/data";
import { Icon, WhatsAppIcon } from "@/components/Icons";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }) {
  const { lang } = params;
  return {
    title: t(lang, "agence.title"),
    description: t(lang, "agence.intro").slice(0, 155),
    alternates: { canonical: `/${lang}/agence/` },
  };
}

function Highlight({ text, keywords }) {
  if (!text) return null;
  if (!Array.isArray(keywords) || !keywords.length) return <>{text}</>;
  const escaped = keywords.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = String(text).split(regex);
  const lowerSet = new Set(keywords.map((w) => w.toLowerCase()));
  return (
    <>
      {parts.map((p, i) => (p && lowerSet.has(p.toLowerCase()) ? <strong key={i} className="hl-key">{p}</strong> : <span key={i}>{p}</span>))}
    </>
  );
}

export default function AgencePage({ params }) {
  const { lang } = params;
  const kw = t(lang, "agence.keywords") || [];
  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-40 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex items-center gap-2 text-brand-red font-semibold text-sm mb-3 reveal">
            <Icon name="pin" className="w-4 h-4" /> {t(lang, "agence.tag")}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl mb-5 reveal">{t(lang, "agence.title")}</h1>
          <p className="text-black/70 leading-relaxed reveal">
            <Highlight text={t(lang, "agence.intro")} keywords={kw} />
          </p>
          <a href={buildWhatsAppLink(t(lang, "reservation.waInfoIntro"))} target="_blank" rel="noopener noreferrer" className="btn-magnetic reveal inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-6 py-3.5 rounded-full shadow-lg mt-6 hover:bg-brand-greendark">
            <WhatsAppIcon className="w-5 h-5" /> {t(lang, "agence.chat")}
          </a>
        </div>
        <Image src="/hero.jpeg" alt="BE FREE Marrakech" width={2400} height={1500} className="reveal rounded-2xl shadow-xl w-full h-auto md:h-96 object-cover" />
      </section>

      <section className="max-w-4xl mx-auto px-5 md:px-8 mt-4">
        <article className="about-block reveal">
          <h2 className="font-display text-2xl sm:text-3xl text-brand-red mb-3">{t(lang, "agence.s1Title")}</h2>
          <p className="text-black/70 leading-relaxed"><Highlight text={t(lang, "agence.s1Text")} keywords={kw} /></p>
        </article>
        <article className="about-block reveal">
          <h2 className="font-display text-2xl sm:text-3xl text-brand-red mb-3">{t(lang, "agence.s2Title")}</h2>
          <p className="text-black/70 leading-relaxed"><Highlight text={t(lang, "agence.s2Text")} keywords={kw} /></p>
        </article>
        <article className="about-block reveal">
          <h2 className="font-display text-2xl sm:text-3xl text-brand-red mb-3">{t(lang, "agence.s3Title")}</h2>
          <p className="text-black/70 leading-relaxed"><Highlight text={t(lang, "agence.s3Text")} keywords={kw} /></p>
        </article>
        <p className="reveal font-brush text-brand-red text-3xl sm:text-4xl leading-tight text-center mt-10 mb-4">{t(lang, "agence.tagline")}</p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {T[lang].whyus.items.map((it) => (
          <div key={it.title} className="reveal text-center card-hover">
            <div className="w-12 h-12 mx-auto rounded-full bg-brand-red/10 flex items-center justify-center mb-3">
              <Icon name={it.icon} className="w-6 h-6 text-brand-red" />
            </div>
            <p className="font-semibold">{it.title}</p>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 my-16 text-center reveal">
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl text-brand-red mb-3">{t(lang, "agence.ctaTitle")}</h2>
          <p className="text-black/65 leading-relaxed mb-6"><Highlight text={t(lang, "agence.ctaText")} keywords={kw} /></p>
          <a href={buildWhatsAppLink(t(lang, "reservation.waInfoIntro"))} target="_blank" rel="noopener noreferrer" className="btn-magnetic inline-flex items-center gap-2 bg-brand-green text-white font-bold px-7 py-4 rounded-full shadow-lg hover:bg-brand-greendark">
            <WhatsAppIcon className="w-5 h-5" /> {t(lang, "agence.chat")}
          </a>
        </div>
      </section>

      <section id="contact" className="bg-black text-white mt-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid sm:grid-cols-3 gap-10">
          <div className="reveal">
            <p className="text-brand-red font-semibold text-sm mb-2 flex items-center gap-2"><Icon name="pin" className="w-4 h-4" /> {t(lang, "agence.address")}</p>
            <p className="text-white/80">{t(lang, "agence.addressFull")}</p>
          </div>
          <div className="reveal">
            <p className="text-brand-red font-semibold text-sm mb-2 flex items-center gap-2"><Icon name="phone" className="w-4 h-4" /> {t(lang, "agence.phone")}</p>
            <p className="text-white/80">{AGENCY.phones[0]} <span className="text-white/40 text-sm">{t(lang, "agence.whatsappTag")}</span></p>
            <p className="text-white/80">{AGENCY.phones[1]}</p>
          </div>
          <div className="reveal">
            <p className="text-brand-red font-semibold text-sm mb-2 flex items-center gap-2"><WhatsAppIcon className="w-4 h-4" /> {t(lang, "agence.whatsappLabel")}</p>
            <a href={buildWhatsAppLink(t(lang, "reservation.waInfoIntro"))} target="_blank" rel="noopener noreferrer" className="btn-magnetic inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-5 py-2.5 rounded-full mt-1 hover:bg-brand-greendark">
              <WhatsAppIcon className="w-4 h-4" /> {t(lang, "agence.sendMsg")}
            </a>
          </div>
        </div>
        <div className="reveal">
          <iframe title="BE FREE Marrakech" src="https://www.google.com/maps?cid=8870293259082616174&output=embed" width="100%" height="320" style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="block text-center text-sm text-white/60 hover:text-brand-red py-3 transition-colors">
            {t(lang, "agence.addressFull")} — Google Maps ↗
          </a>
        </div>
      </section>
    </main>
  );
}
