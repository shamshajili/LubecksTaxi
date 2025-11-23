import React, { useEffect, useState } from "react";

function getToken() {
  return localStorage.getItem("admin_token") || "";
}

export default function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [banEmail, setBanEmail] = useState("");
  const [banIp, setBanIp] = useState("");

  // NEW: banned users state
  const [banned, setBanned] = useState<any[]>([]);

  const token = getToken();

  // ==========================
  // LOAD REVIEWS
  // ==========================
  useEffect(() => {
    fetch("https://api-rw1jeucb4a-uc.a.run.app/admin/reviews", {
      headers: { "x-admin-token": token },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [token]);

  // LOAD BANNED USERS
    const loadBanned = async () => {
      try {
        const res = await fetch("https://api-rw1jeucb4a-uc.a.run.app/admin/banned", {
          headers: { "x-admin-token": token }
        });
    
        const data = await res.json();
        setBanned(data);
      } catch (error) {
        console.log("Error loading banned users", error);
      }
    };

  useEffect(() => {
    loadBanned();
  }, []);

  // DELETE REVIEW
  const deleteReview = async (id: string) => {
    await fetch(`https://api-rw1jeucb4a-uc.a.run.app/admin/review/${id}`, {
      method: "DELETE",
      headers: { "x-admin-token": token },
    });

    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  // BAN USER
  const banUser = async () => {
    await fetch("https://api-rw1jeucb4a-uc.a.run.app/admin/ban", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": token,
      },
      body: JSON.stringify({
        email: banEmail.trim(),
        ip: banIp.trim(),
      }),
    });

    alert("Benutzer wurde gesperrt!");
    setBanEmail("");
    setBanIp("");

    loadBanned(); // refresh banned list
  };

  // UNBAN USER
  const unban = async (id: string) => {
    await fetch(`https://api-rw1jeucb4a-uc.a.run.app/admin/unban/${id}`, {
      method: "DELETE",
      headers: { "x-admin-token": token },
    });

    loadBanned();
  };

  if (loading) return <p className="p-4 text-white">Loading…</p>;

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Panel – Bewertungen</h1>
        <button
          onClick={onLogout}
          className="px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-sm"
        >
          Logout
        </button>
      </div>

      {/* BAN USER */}
      <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-4 mb-6">
        <h2 className="font-semibold mb-3">Benutzer sperren</h2>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            placeholder="E-Mail"
            value={banEmail}
            onChange={(e) => setBanEmail(e.target.value)}
            className="flex-1 rounded-lg bg-neutral-950 border border-neutral-700 px-3 py-2 text-sm"
          />
          <input
            placeholder="IP"
            value={banIp}
            onChange={(e) => setBanIp(e.target.value)}
            className="flex-1 rounded-lg bg-neutral-950 border border-neutral-700 px-3 py-2 text-sm"
          />
          <button
            onClick={banUser}
            className="rounded-lg bg-yellow-400 text-black font-semibold px-4 py-2 text-sm"
          >
            Sperren
          </button>
        </div>
      </div>

      {/* BANNED USERS LIST */}
      <div className="mb-6">
        <h2 className="font-semibold mb-3">Gesperrte Benutzer</h2>

        {banned.length === 0 && <p className="text-gray-400">Keine gesperrten Benutzer.</p>}

        {banned.map((b) => (
          <div
            key={b.id}
            className="bg-neutral-900 border border-neutral-700 rounded-xl p-4 flex justify-between items-center mb-2"
          >
            <div>
              <p><b>Email:</b> {b.email || "-"}</p>
              <p><b>IP:</b> {b.ip || "-"}</p>
            </div>
            <button
              onClick={() => unban(b.id)}
              className="px-3 py-1 rounded-lg bg-orange-500 hover:bg-orange-400 text-black text-sm"
            >
              Entsperren
            </button>
          </div>
        ))}
      </div>

      {/* REVIEWS */}
      <div className="space-y-3">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-neutral-900 border border-neutral-700 rounded-2xl p-4"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">
                {r.name}{" "}
                <span className="text-xs text-gray-400">({r.email || "—"})</span>
              </p>
              <button
                onClick={() => deleteReview(r.id)}
                className="text-xs px-3 py-1 rounded-full bg-red-600 hover:bg-red-500"
              >
                Löschen
              </button>
            </div>
            <p className="text-sm mt-1">⭐ {r.rating}</p>
            <p className="text-sm text-gray-200 mt-2">{r.comment}</p>
            {r.ip && <p className="text-xs text-gray-500 mt-2">IP: {r.ip}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
