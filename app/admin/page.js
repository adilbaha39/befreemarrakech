"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = ["scooters", "vespa", "velosElectriques", "velos", "quads", "trottinettes"];
const UNITS = ["perDay", "perHour", "per15min", "circuit130"];
const TAGS = ["automatic", "electric", "manual"];
const LANGS = ["fr", "ar", "en", "es"];

const emptyForm = {
  id: "",
  nameKey: "",
  categoryKey: CATEGORIES[0],
  priceEUR: "",
  unitKey: UNITS[0],
  price2EUR: "",
  unit2Key: "",
  tagKey: TAGS[0],
  img: "",
  isNew: false,
  desc: { fr: "", ar: "", en: "", es: "" },
};

function VehicleForm({ initial, onSubmit, onCancel, submitLabel }) {
  const [form, setForm] = useState(initial || emptyForm);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }
  function setDesc(lang, value) {
    setForm((f) => ({ ...f, desc: { ...f.desc, [lang]: value } }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const payload = {
      ...form,
      priceEUR: Number(form.priceEUR),
      price2EUR: form.price2EUR ? Number(form.price2EUR) : undefined,
      unit2Key: form.price2EUR ? form.unit2Key : undefined,
    };
    try {
      await onSubmit(payload);
    } catch (err) {
      setError(err.message);
    }
    setBusy(false);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-4 sm:p-5 space-y-3 text-sm">
      {error && <p className="text-red-600 text-xs">{error}</p>}
      <div className="grid sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="text-xs text-black/60">id (unique, sans espaces)</span>
          <input
            value={form.id}
            onChange={(e) => set("id", e.target.value)}
            disabled={!!initial}
            className="w-full mt-1 px-2.5 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100"
            placeholder="kymco-50"
            required
          />
        </label>
        <label className="block">
          <span className="text-xs text-black/60">Nom affiché</span>
          <input value={form.nameKey} onChange={(e) => set("nameKey", e.target.value)} className="w-full mt-1 px-2.5 py-2 border border-gray-300 rounded-lg" required />
        </label>
        <label className="block">
          <span className="text-xs text-black/60">Catégorie</span>
          <select value={form.categoryKey} onChange={(e) => set("categoryKey", e.target.value)} className="w-full mt-1 px-2.5 py-2 border border-gray-300 rounded-lg">
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs text-black/60">Tag (transmission)</span>
          <select value={form.tagKey} onChange={(e) => set("tagKey", e.target.value)} className="w-full mt-1 px-2.5 py-2 border border-gray-300 rounded-lg">
            {TAGS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs text-black/60">Prix (EUR)</span>
          <input type="number" step="0.01" value={form.priceEUR} onChange={(e) => set("priceEUR", e.target.value)} className="w-full mt-1 px-2.5 py-2 border border-gray-300 rounded-lg" required />
        </label>
        <label className="block">
          <span className="text-xs text-black/60">Unité</span>
          <select value={form.unitKey} onChange={(e) => set("unitKey", e.target.value)} className="w-full mt-1 px-2.5 py-2 border border-gray-300 rounded-lg">
            {UNITS.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs text-black/60">2e prix (optionnel, ex: tarif horaire)</span>
          <input type="number" step="0.01" value={form.price2EUR} onChange={(e) => set("price2EUR", e.target.value)} className="w-full mt-1 px-2.5 py-2 border border-gray-300 rounded-lg" />
        </label>
        <label className="block">
          <span className="text-xs text-black/60">Unité du 2e prix</span>
          <select value={form.unit2Key || ""} onChange={(e) => set("unit2Key", e.target.value)} className="w-full mt-1 px-2.5 py-2 border border-gray-300 rounded-lg">
            <option value="">—</option>
            {UNITS.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs text-black/60">Chemin de l'image (dans /public, ex: /sora9.jpeg)</span>
          <input value={form.img} onChange={(e) => set("img", e.target.value)} className="w-full mt-1 px-2.5 py-2 border border-gray-300 rounded-lg" placeholder="/sora9.jpeg" required />
        </label>
        <label className="flex items-center gap-2 sm:col-span-2">
          <input type="checkbox" checked={!!form.isNew} onChange={(e) => set("isNew", e.target.checked)} />
          <span className="text-xs text-black/60">Badge "Nouveau"</span>
        </label>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold text-black/70">Description (4 langues)</p>
        {LANGS.map((l) => (
          <label key={l} className="block">
            <span className="text-xs text-black/50 uppercase">{l}</span>
            <textarea value={form.desc[l]} onChange={(e) => setDesc(l, e.target.value)} rows={2} className="w-full mt-1 px-2.5 py-2 border border-gray-300 rounded-lg" required />
          </label>
        ))}
      </div>

      <div className="flex gap-2 pt-1">
        <button type="submit" disabled={busy} className="flex-1 py-2.5 bg-brand-red text-white rounded-lg font-semibold disabled:opacity-60">
          {busy ? "…" : submitLabel}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="px-4 py-2.5 border border-gray-300 rounded-lg">
            Annuler
          </button>
        )}
      </div>
    </form>
  );
}

export default function AdminDashboard() {
  const [vehicles, setVehicles] = useState(null);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const router = useRouter();

  async function load() {
    setError("");
    const res = await fetch("/api/admin/vehicles");
    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Erreur de chargement");
      return;
    }
    setVehicles(data.vehicles);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  async function handleAdd(payload) {
    const res = await fetch("/api/admin/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Erreur");
    setShowAddForm(false);
    await load();
  }

  async function handleUpdate(id, payload) {
    const res = await fetch(`/api/admin/vehicles/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Erreur");
    setEditingId(null);
    await load();
  }

  async function handleDelete(id) {
    if (!confirm(`Supprimer "${id}" ? Cette action est immédiate côté GitHub.`)) return;
    const res = await fetch(`/api/admin/vehicles/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error || "Erreur");
      return;
    }
    await load();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Véhicules — BE FREE Marrakech</h1>
        <button onClick={handleLogout} className="text-xs text-black/50 underline">
          Déconnexion
        </button>
      </div>

      <p className="text-xs text-black/50 mb-6">
        Chaque changement crée un commit sur GitHub et redéploie le site automatiquement (~30-60s).
      </p>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      {!showAddForm && (
        <button onClick={() => setShowAddForm(true)} className="mb-6 px-4 py-2.5 bg-brand-green text-white rounded-lg font-semibold text-sm">
          + Ajouter un véhicule
        </button>
      )}
      {showAddForm && (
        <div className="mb-6">
          <VehicleForm onSubmit={handleAdd} onCancel={() => setShowAddForm(false)} submitLabel="Ajouter" />
        </div>
      )}

      {vehicles === null && <p className="text-sm text-black/50">Chargement…</p>}

      <div className="space-y-3">
        {vehicles?.map((v) =>
          editingId === v.id ? (
            <VehicleForm
              key={v.id}
              initial={{ ...v, price2EUR: v.price2EUR || "", unit2Key: v.unit2Key || "" }}
              onSubmit={(payload) => handleUpdate(v.id, payload)}
              onCancel={() => setEditingId(null)}
              submitLabel="Enregistrer"
            />
          ) : (
            <div key={v.id} className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">{v.nameKey}</p>
                <p className="text-xs text-black/50">
                  {v.id} · {v.categoryKey} · {v.priceEUR}€ {v.unitKey}
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => setEditingId(v.id)} className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium">
                  Modifier
                </button>
                <button onClick={() => handleDelete(v.id)} className="px-3 py-1.5 border border-red-300 text-red-600 rounded-lg text-xs font-medium">
                  Supprimer
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
