import React, { useState } from "react";

export default function AdminLogin({ onLogin }: { onLogin: (t: string) => void }) {
  const [email, setEmail] = useState("admin@taxi.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5001/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login fehlgeschlagen.");

      localStorage.setItem("admin_token", data.token);
      onLogin(data.token);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-neutral-900 border border-neutral-700 rounded-3xl p-6 shadow-xl"
      >
        <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
        <p className="text-sm text-gray-400 mb-6">
          Bitte melden Sie sich an, um Bewertungen zu verwalten.
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-200 bg-red-900/30 border border-red-500/60 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        <label className="block text-xs text-gray-300 mb-1">E-Mail</label>
        <input
          className="w-full mb-4 rounded-lg bg-neutral-950 border border-neutral-700 text-sm text-white px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-xs text-gray-300 mb-1">Passwort</label>
        <input
          type="password"
          className="w-full mb-6 rounded-lg bg-neutral-950 border border-neutral-700 text-sm text-white px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="shamsAdmin2305"
        />

        <button
          disabled={loading}
          className="w-full rounded-full bg-yellow-400 text-black font-semibold text-sm py-2.5 hover:bg-yellow-300 transition disabled:opacity-60"
        >
          {loading ? "Anmelden…" : "Anmelden"}
        </button>
      </form>
    </div>
  );
}
