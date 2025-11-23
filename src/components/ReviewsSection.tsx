import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  // 🔹 Firestore-dan real-time oxuma (yalnız read clientdən)
  useEffect(() => {
    const q = query(
      collection(db, "reviews"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Review[] = snapshot.docs.map((doc) => {
        const d = doc.data() as any;

        let dateStr = "—";
        if (d.createdAt?.seconds) {
          dateStr = new Date(d.createdAt.seconds * 1000)
            .toISOString()
            .slice(0, 10);
        }

        return {
          id: doc.id,
          name: d.name ?? "Gast",
          rating: Number(d.rating ?? 0),
          comment: d.comment ?? "",
          createdAt: dateStr,
        };
      });

      setReviews(data);
    });

    return () => unsubscribe();
  }, []);

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setSuccess(null);
  setSubmitting(true); 

  if (!executeRecaptcha) {
    setError("reCAPTCHA hazır deyil.");
    return;
  }

  // **Token al**
  const token = await executeRecaptcha("submit_review");

  try {
    const res = await fetch("https://us-central1-lubecks-taxi.cloudfunctions.net/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        rating,
        comment: comment.trim(),
        token,
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    setSuccess("Vielen Dank für Ihr Feedback!");
    setName("");
    setEmail("");
    setRating(0);
    setComment("");

  } catch (error: any) {
    setError(error.message || "Bir xəta baş verdi.");
  }finally {
    setSubmitting(false);
  }
};

  const renderStars = (value: number) => (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < value ? "text-yellow-400 text-lg" : "text-neutral-600 text-lg"
          }
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <section
      className="w-full bg-black border-t border-neutral-800 py-16 md:py-20"
      id="bewertungen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* LEFT: Summary + List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Bewertungen unserer Fahrgäste
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl">
            Lesen Sie, was andere Fahrgäste über Lübecks Taxi sagen – und teilen Sie
            gern auch Ihre eigene Erfahrung.
          </p>

          {/* Average rating box */}
          <div className="inline-flex items-center gap-4 rounded-2xl border border-neutral-700 bg-neutral-900/80 px-5 py-4 mb-8">
            <div>
              <p className="text-3xl font-extrabold text-yellow-400">
                {avgRating.toFixed(1)}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Durchschnitt
              </p>
            </div>
            <div className="h-10 w-px bg-neutral-700" />
            <div>
              {renderStars(Math.round(avgRating))}
              <p className="text-xs text-gray-400 mt-1">
                auf Basis von {reviews.length} Bewertungen
              </p>
            </div>
          </div>

          {/* Review list */}
          <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900/40">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-neutral-900/80 border border-neutral-700 rounded-2xl px-4 py-4"
              >
                <div className="flex items-center justify-between gap-3 mb-1">
                  <p className="font-semibold text-sm text-white">
                    {review.name}
                  </p>
                  <span className="text-xs text-gray-500">
                    {review.createdAt}
                  </span>
                </div>
                <div className="mb-2">{renderStars(review.rating)}</div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  “{review.comment}”
                </p>
              </div>
            ))}

            {reviews.length === 0 && (
              <p className="text-sm text-gray-500">
                Noch keine Bewertungen vorhanden. Seien Sie die erste Person, die
                eine Bewertung abgibt.
              </p>
            )}
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            Eigene Bewertung abgeben
          </h3>
          <p className="text-sm text-gray-300 mb-5">
            Teilen Sie Ihre Erfahrung mit Lübecks Taxi. Ihre Rückmeldung hilft uns,
            unseren Service weiter zu verbessern.
          </p>

          {error && (
            <div className="mb-4 text-sm text-red-300 bg-red-900/30 border border-red-500/60 rounded-lg px-3 py-2">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 text-sm text-emerald-200 bg-emerald-900/30 border border-emerald-500/60 rounded-lg px-3 py-2">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Ihr Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-neutral-950 border border-neutral-700 text-sm text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Max Mustermann"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                E-Mail (wird nicht veröffentlicht)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-neutral-950 border border-neutral-700 text-sm text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="muster@mail.de"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Ihre Bewertung *
              </label>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  const value = i + 1;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      className="focus:outline-none"
                    >
                      <span
                        className={
                          value <= rating
                            ? "text-yellow-400 text-2xl"
                            : "text-neutral-600 text-2xl"
                        }
                      >
                        ★
                      </span>
                    </button>
                  );
                })}
                {rating > 0 && (
                  <span className="ml-2 text-xs text-gray-400">
                    {rating} von 5
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Ihr Kommentar *
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full rounded-lg bg-neutral-950 border border-neutral-700 text-sm text-white px-3 py-2 min-h-[90px] focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Wie war Ihre Fahrt mit Lübecks Taxi?"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 rounded-full bg-yellow-400 text-black font-semibold text-sm py-2.5 hover:bg-yellow-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Wird gesendet…" : "Bewertung abschicken"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
