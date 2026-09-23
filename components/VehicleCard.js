import Image from "next/image";
import Link from "next/link";
import { t, formatVehiclePrice } from "@/lib/data";
import { Icon } from "./Icons";

export default function VehicleCard({ v, lang, showNewBadge = true }) {
  return (
    <article className="reveal card-hover bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
      <div className="relative overflow-hidden bg-white">
        <Image src={v.img} alt={v.nameKey} width={800} height={600} className="w-full h-auto object-contain bg-white card-img" />
        {showNewBadge && v.isNew && (
          <span className="absolute top-3 right-3 bg-brand-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide z-10">
            {t(lang, "tags.new")}
          </span>
        )}
        <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-green-50 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full z-10">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          {t(lang, "fleet.available")}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-brand-red font-semibold uppercase tracking-wide">{t(lang, `categories.${v.categoryKey}`)}</p>
        <Link href={`/${lang}/vehicules/${v.id}`} className="font-semibold text-lg mt-1 hover:text-brand-red transition-colors">
          {v.nameKey}
        </Link>
        <p className="text-sm text-black/55 mt-2 flex-1">{v.desc[lang]}</p>
        <div className="flex items-center justify-between mt-4 gap-2">
          <span className="text-brand-red font-bold text-base">{formatVehiclePrice(v, lang)}</span>
          <span className="text-xs text-black/50 flex items-center gap-1 shrink-0">
            <Icon name="gear" className="w-3.5 h-3.5" /> {t(lang, `tags.${v.tagKey}`)}
          </span>
        </div>
        <Link
          href={`/${lang}/reservation?vehicle=${v.id}`}
          className="btn-magnetic mt-4 text-center bg-brand-red text-white font-semibold py-2.5 rounded-full text-sm hover:bg-brand-reddark"
        >
          {t(lang, "vehiclesPage.reserveThis")}
        </Link>
      </div>
    </article>
  );
}
