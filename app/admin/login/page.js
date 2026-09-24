"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Erreur de connexion");
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-24 p-6 font-sans">
      <h1 className="text-xl font-bold mb-5">Admin — BE FREE Marrakech</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="w-full px-3 py-2.5 mb-3 border border-gray-300 rounded-lg text-sm"
          autoFocus
        />
        {error && <p className="text-red-600 text-xs mb-3">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 bg-brand-red text-white rounded-lg font-semibold text-sm disabled:opacity-60"
        >
          {loading ? "…" : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
