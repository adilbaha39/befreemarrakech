import { LANGS, VEHICLES } from "@/lib/data";

const SITE = "https://befreemarrakech.com";

export default function sitemap() {
  const now = new Date();
  const entries = [];

  for (const lang of LANGS) {
    entries.push({ url: `${SITE}/${lang}/`, lastModified: now, changeFrequency: "weekly", priority: lang === "fr" ? 1 : 0.9 });
    entries.push({ url: `${SITE}/${lang}/vehicules/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 });
    entries.push({ url: `${SITE}/${lang}/agence/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
    entries.push({ url: `${SITE}/${lang}/reservation/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
    for (const v of VEHICLES) {
      entries.push({ url: `${SITE}/${lang}/vehicules/${v.id}/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 });
    }
  }
  return entries;
}
