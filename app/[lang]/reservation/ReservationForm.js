"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { t, VEHICLES, formatVehiclePrice, buildWhatsAppLink } from "@/lib/data";
import { WhatsAppIcon } from "@/components/Icons";

const inputClass = "w-full px-4 py-3 rounded-xl border border-black/15 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-sm";

function Field({ label, error, children }) {
  return (
    <label className="block mb-5">
      <span className="text-sm font-medium text-black/80">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="text-xs text-brand-red mt-1 block">{error}</span>}
    </label>
  );
}

export default function ReservationForm({ lang }) {
  const searchParams = useSearchParams();
  const preselected = VEHICLES.find((v) => v.id === searchParams.get("vehicle"));
  const [form, setForm] = useState({ name: "", phone: "", vehicleId: preselected ? preselected.id : "", departDate: "", returnDate: "", notes: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const v = VEHICLES.find((veh) => veh.id === searchParams.get("vehicle"));
    if (v) setForm((f) => ({ ...f, vehicleId: v.id }));
  }, [searchParams]);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = t(lang, "reservation.errName");
    if (!form.phone.trim()) errs.phone = t(lang, "reservation.errPhone");
    else if (!/^\+?[0-9][0-9\s\-().]{7,}$/.test(form.phone.trim())) errs.phone = t(lang, "reservation.errPhoneInvalid");
    if (!form.vehicleId) errs.vehicleId = t(lang, "reservation.errVehicle");
    if (!form.departDate) errs.departDate = t(lang, "reservation.errDepart");
    else if (form.departDate < new Date().toISOString().split("T")[0]) errs.departDate = t(lang, "reservation.errDatePast");
    if (!form.returnDate) errs.returnDate = t(lang, "reservation.errReturn");
    else if (form.returnDate < form.departDate) errs.returnDate = t(lang, "reservation.errReturnBefore");
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    const vehicle = VEHICLES.find((v) => v.id === form.vehicleId);
    const lines = [
      t(lang, "reservation.waIntro"),
      ``,
      `👤 ${t(lang, "reservation.waName")} : ${form.name}`,
      `📞 ${t(lang, "reservation.waPhone")} : ${form.phone}`,
      `🛵 ${t(lang, "reservation.waVehicle")} : ${vehicle ? vehicle.nameKey : form.vehicleId}`,
      `📅 ${t(lang, "reservation.waDepart")} : ${form.departDate}`,
      `📅 ${t(lang, "reservation.waReturn")} : ${form.returnDate}`,
    ];
    if (form.notes.trim()) lines.push(`📝 ${t(lang, "reservation.waNote")} : ${form.notes.trim()}`);
    lines.push(``, `📍 ${t(lang, "agence.addressFull")}`);
    setSent(true);
    window.location.href = buildWhatsAppLink(lines.join("\n"));
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <form onSubmit={handleSubmit} className="reveal bg-white rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="grid sm:grid-cols-2 gap-x-6">
        <Field label={t(lang, "reservation.name")} error={errors.name}>
          <input type="text" value={form.name} onChange={set("name")} placeholder={t(lang, "reservation.namePh")} className={inputClass} />
        </Field>
        <Field label={t(lang, "reservation.phone")} error={errors.phone}>
          <input type="tel" value={form.phone} onChange={set("phone")} placeholder={t(lang, "reservation.phonePh")} className={inputClass} />
        </Field>
      </div>
      <Field label={t(lang, "reservation.vehicle")} error={errors.vehicleId}>
        <select value={form.vehicleId} onChange={set("vehicleId")} className={inputClass}>
          <option value="">{t(lang, "reservation.vehicleChoose")}</option>
          {VEHICLES.map((v) => (
            <option key={v.id} value={v.id}>
              {v.nameKey} — {formatVehiclePrice(v, lang)}
            </option>
          ))}
        </select>
      </Field>
      <div className="grid sm:grid-cols-2 gap-x-6">
        <Field label={t(lang, "reservation.startDate")} error={errors.departDate}>
          <input type="date" value={form.departDate} min={new Date().toISOString().split("T")[0]} onChange={set("departDate")} className={inputClass} />
        </Field>
        <Field label={t(lang, "reservation.returnDate")} error={errors.returnDate}>
          <input type="date" value={form.returnDate} min={form.departDate || new Date().toISOString().split("T")[0]} onChange={set("returnDate")} className={inputClass} />
        </Field>
      </div>
      <Field label={t(lang, "reservation.notes")}>
        <textarea value={form.notes} onChange={set("notes")} rows="3" placeholder={t(lang, "reservation.notesPh")} className={inputClass}></textarea>
      </Field>
      <button type="submit" className="btn-magnetic w-full flex items-center justify-center gap-2 bg-brand-green text-white font-semibold py-3.5 rounded-full shadow-lg mt-2 hover:bg-brand-greendark">
        <WhatsAppIcon className="w-5 h-5" /> {sent ? t(lang, "reservation.sending") : t(lang, "reservation.submit")}
      </button>
      <p className="text-xs text-black/40 text-center mt-4">{t(lang, "reservation.hint")}</p>
    </form>
  );
}
