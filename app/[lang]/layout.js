import { LANGS, t } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import HtmlLangSetter from "@/components/HtmlLangSetter";
import { ScrollProgress, RevealObserver } from "@/components/ScrollEffects";

const SITE = "https://befreemarrakech.com";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }) {
  const { lang } = params;
  const languages = Object.fromEntries(LANGS.map((l) => [l, `${SITE}/${l}/`]));
  languages["x-default"] = `${SITE}/fr/`;

  return {
    title: {
      template: `%s — BE FREE Marrakech`,
      default: `BE FREE Marrakech — ${t(lang, "nav.tagline")}`,
    },
    description: t(lang, "agence.intro").slice(0, 155),
    alternates: {
      canonical: `${SITE}/${lang}/`,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "BE FREE Marrakech",
      title: `BE FREE Marrakech — ${t(lang, "nav.tagline")}`,
      description: t(lang, "agence.intro").slice(0, 155),
      images: [`${SITE}/hero.jpeg`],
      url: `${SITE}/${lang}/`,
      locale: lang,
    },
    twitter: { card: "summary_large_image" },
    icons: {
      icon:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='18' fill='%23E0122B'/%3E%3Ctext x='50' y='68' font-family='Arial, sans-serif' font-weight='900' font-size='58' fill='white' text-anchor='middle'%3EB%3C/text%3E%3C/svg%3E",
    },
  };
}

function jsonLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "BE FREE Marrakech",
    url: `${SITE}/${lang}/`,
    image: `${SITE}/hero.jpeg`,
    telephone: "+212665438895",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenue Mohamed V, à côté de McDonald's",
      addressLocality: "Marrakech",
      addressCountry: "MA",
    },
    openingHours: "Mo-Su 08:00-20:00",
    priceRange: "3€ - 30€",
    sameAs: [
      "https://www.facebook.com/profile.php?id=100066729303764",
      "https://www.instagram.com/locationvespa_marrakech",
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "6", bestRating: "5" },
    review: [
      { "@type": "Review", itemReviewed: { "@type": "LocalBusiness", name: "BE FREE Marrakech" }, author: { "@type": "Person", name: "Mécanique Machhor" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Everything is fine, thank you Yassin" },
      { "@type": "Review", itemReviewed: { "@type": "LocalBusiness", name: "BE FREE Marrakech" }, author: { "@type": "Person", name: "outman el_wechki" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Good service" },
      { "@type": "Review", itemReviewed: { "@type": "LocalBusiness", name: "BE FREE Marrakech" }, author: { "@type": "Person", name: "karim elbrihi" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Top" },
    ],
  };
}

export default function LangLayout({ children, params }) {
  const { lang } = params;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }} />
      <HtmlLangSetter lang={lang} />
      <ScrollProgress />
      <RevealObserver />
      <Navbar lang={lang} />
      <div className="page-enter">{children}</div>
      <Footer lang={lang} />
      <WhatsAppFab lang={lang} />
    </>
  );
}
