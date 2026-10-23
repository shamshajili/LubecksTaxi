import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import car1 from "../assets/images/taxi.jpeg";
import car2 from "../assets/images/taxi2.jpeg";
import car3 from "../assets/images/taxi3.jpeg";


const SERVICE_ID = "service_hrv7nxp";
const TEMPLATE_ID = "template_knnfbg8";
const PUBLIC_KEY = "NHO839Ip6oyWfB8nP";

declare global {
  interface Window {
    google?: any;
  }
}

const BookingSection: React.FC = () => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    persons: "",
    notes: "",
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeCar, setActiveCar] = useState(0);

  // Automatically switch the carousel image every 3 seconds.
  useEffect(() => {
    const carouselTimer = window.setInterval(() => {
      setActiveCar((current) => (current + 1) % 3);
    }, 3000);

    return () => window.clearInterval(carouselTimer);
  }, []);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});

  const fromRef = useRef<HTMLInputElement | null>(null);
  const toRef = useRef<HTMLInputElement | null>(null);

  /* GOOGLE AUTOCOMPLETE */
  useEffect(() => {
    let intervalId: number | undefined;

    const initAutocomplete = () => {
      if (!window.google?.maps?.places) return false;

      if (fromRef.current) {
        const acFrom = new window.google.maps.places.Autocomplete(fromRef.current, {
          types: ["geocode"],
          componentRestrictions: { country: "de" },
        });

        acFrom.addListener("place_changed", () => {
          const place = acFrom.getPlace();
          setForm((p) => ({ ...p, from: place.formatted_address || place.name }));
        });
      }

      if (toRef.current) {
        const acTo = new window.google.maps.places.Autocomplete(toRef.current, {
          types: ["geocode"],
          componentRestrictions: { country: "de" },
        });

        acTo.addListener("place_changed", () => {
          const place = acTo.getPlace();
          setForm((p) => ({ ...p, to: place.formatted_address || place.name }));
        });
      }

      return true;
    };

    if (!initAutocomplete()) {
      intervalId = window.setInterval(() => {
        if (initAutocomplete() && intervalId) clearInterval(intervalId);
      }, 500);
    }

    return () => intervalId && clearInterval(intervalId);
  }, []);

    useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");

    const hh = String(today.getHours()).padStart(2, "0");
    const min = String(today.getMinutes()).padStart(2, "0");

    setForm((prev) => ({
      ...prev,
      date: `${yyyy}-${mm}-${dd}`,
      time: `${hh}:${min}`,
    }));
  }, []);
  /* HANDLE CHANGE */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  };

  /* VALIDATION */
  const validateForm = () => {
    const newErrors: any = {};
    if (!form.to.trim()) newErrors.to = "Bitte Reiseziel angeben.";
    if (!form.from.trim()) newErrors.from = "Bitte Abholort angeben.";
    if (!form.name.trim() || form.name.length < 3) newErrors.name = "Name muss mindestens 3 Zeichen lang sein.";
    if (!/^\+?[0-9\-() ]{7,20}$/.test(form.phone)) newErrors.phone = "Bitte gültige Telefonnummer.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Bitte gültige E-Mail.";
    if (!form.date) newErrors.date = "Bitte Datum wählen.";
    if (!form.time) newErrors.time = "Bitte Uhrzeit auswählen.";
    if (!Number(form.persons) || Number(form.persons) < 1) newErrors.persons = "Mindestens 1 Person.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* SEND WHATSAPP */
  const sendWhatsApp = () => {
    const msg = `
🚕 *Neue Taxi-Anfrage*
────────────────────────

📍 *Reiseziel:* ${form.to}
📍 *Abholung:* ${form.from}

👤 *Name:* ${form.name}
📞 *Telefon:* ${form.phone}
📧 *Email:* ${form.email}

📅 *Datum:* ${form.date}
⏰ *Zeit:* ${form.time}
👥 *Personen:* ${form.persons}

📝 Hinweise:
${form.notes || "-"}
`;
    window.open(
      `https://wa.me/4915563293339?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  /* SUBMIT HANDLER */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitting(true);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      sendWhatsApp();
      setShowModal(true);
      setForm({
        from: "",
        to: "",
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        persons: "",
        notes: "",
      });
    } catch (e) {
      console.error(e);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full py-20 bg-black">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Pünktlich. <span className="text-yellow-400">Zuverlässig.</span>
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Komfortabel von A nach B mit dem Lübecks Taxi Service.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6">
        
        {/* MODERN AUTO CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[540px]"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-yellow-400/10 blur-2xl" />

          <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-900 shadow-2xl">
            <div className="relative h-[300px] overflow-hidden sm:h-[390px] md:h-[440px] lg:h-[500px]">
              {[
                { src: car1, alt: "Lübecks Taxi Fahrzeug" },
                { src: car2, alt: "Lübecks Taxi Fahrer" },
                { src: car3, alt: "Lübecks Taxi Fahrzeug" },
              ].map((car, index) => (
                <img
                  key={car.src}
                  src={car.src}
                  alt={car.alt}
                  aria-hidden={activeCar !== index}
                  className={`absolute inset-0 h-full w-full object-cover object-center transition-[opacity,transform] duration-1000 ease-in-out ${
                    activeCar === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/5" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-md sm:left-5 sm:top-5">
                <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
                LÜBECKS TAXI
              </div>

              <div className="absolute bottom-14 left-4 right-4 text-white sm:bottom-16 sm:left-6 sm:right-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-sm">
                  Immer für Sie unterwegs
                </p>
                <p className="max-w-sm text-xl font-bold leading-tight sm:text-2xl">
                  Komfortabel ans Ziel. Zuverlässig unterwegs.
                </p>
              </div>

              <button
                type="button"
                aria-label="Vorheriges Bild"
                onClick={() => setActiveCar((current) => (current - 1 + 3) % 3)}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-xl text-white backdrop-blur-md transition hover:border-yellow-300/70 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 sm:left-4"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Nächstes Bild"
                onClick={() => setActiveCar((current) => (current + 1) % 3)}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-xl text-white backdrop-blur-md transition hover:border-yellow-300/70 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 sm:right-4"
              >
                ›
              </button>

              <div className="absolute bottom-5 left-4 flex items-center gap-2 sm:left-6">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Bild ${index + 1} anzeigen`}
                    aria-pressed={activeCar === index}
                    onClick={() => setActiveCar(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                      activeCar === index
                        ? "w-8 bg-yellow-400"
                        : "w-3 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>

              <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md sm:right-6">
                0{activeCar + 1} <span className="text-white/50">/ 03</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-t border-white/10 bg-neutral-950/95 px-3 py-4 text-center text-[11px] font-medium tracking-wide text-neutral-300 sm:gap-x-4 sm:text-xs">
              <span>24/7 Flughafentransfer</span>
              <span className="hidden text-yellow-400 sm:inline">•</span>
              <span>Stadtfahrten</span>
              <span className="hidden text-yellow-400 sm:inline">•</span>
              <span>Business Service</span>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#111111] p-7 rounded-3xl text-white shadow-2xl border border-neutral-800"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-yellow-400">
            Jetzt Fahrt buchen
          </h2>
          <p className="text-sm text-gray-400 mb-6">Anfrage in weniger als 1 Minute.</p>

          {/* DESTINATION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                ref={toRef}
                name="to"
                placeholder="Reiseziel *"
                value={form.to}
                onChange={handleChange}
                className="p-3 rounded-lg text-black w-full text-sm bg-white border border-gray-300"
              />
              {errors.to && <p className="text-xs text-red-400 mt-1">{errors.to}</p>}
            </div>

            <div>
              <input
                ref={fromRef}
                name="from"
                placeholder="Abholung *"
                value={form.from}
                onChange={handleChange}
                className="p-3 rounded-lg text-black w-full text-sm bg-white border border-gray-300"
              />
              {errors.from && <p className="text-xs text-red-400 mt-1">{errors.from}</p>}
            </div>
          </div>

          {/* NAME */}
          <div className="mb-4">
            <input
              name="name"
              placeholder="Ihr Name *"
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded-lg text-black w-full text-sm bg-white border border-gray-300"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          {/* PHONE + EMAIL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                name="phone"
                placeholder="Telefonnummer *"
                value={form.phone}
                onChange={handleChange}
                className="p-3 rounded-lg text-black w-full text-sm bg-white border border-gray-300"
              />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <input
                name="email"
                placeholder="E-Mail *"
                value={form.email}
                onChange={handleChange}
                className="p-3 rounded-lg text-black w-full text-sm bg-white border border-gray-300"
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* DATE + TIME + PERSONS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              type="date"
              name="date"
              value={form.date}
              min={form.date}
              onChange={handleChange}
              className="p-3 rounded-lg text-black w-full text-sm bg-white border border-gray-300 appearance-none"
            />
            <input
              type="time"
              name="time"
              value={form.time}
              min={form.time}
              onChange={handleChange}
              className="p-3 rounded-lg text-black w-full text-sm bg-white border border-gray-300 appearance-none"
            />
            <div>
              <input
                type="number"
                name="persons"
                placeholder="Personen *"
                value={form.persons}
                onChange={handleChange}
                className="p-3 rounded-lg text-black w-full text-sm bg-white border border-gray-300"
              />
              {errors.persons && <p className="text-xs text-red-400 mt-1">{errors.persons}</p>}
            </div>
          </div>

          {/* NOTES */}
          <textarea
            name="notes"
            placeholder="Hinweise"
            value={form.notes}
            onChange={handleChange}
            className="p-3 rounded-lg text-black w-full text-sm bg-white border border-gray-300 min-h-[70px] mb-4"
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={submitting}
            className="bg-yellow-400 text-black font-semibold w-full py-3 rounded-xl text-sm hover:bg-yellow-300 transition shadow-lg"
          >
            {submitting ? "Wird gesendet…" : "Anfrage absenden"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
