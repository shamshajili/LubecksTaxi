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
        
        {/* IMAGE */}
{/* IMAGE */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative w-full max-w-[540px] mx-auto"
>
  {/* Yumşaq sarı fon effekti */}
  <div className="absolute -inset-2 rounded-2xl bg-yellow-400/10 blur-xl" />

  {/* Şəkillər */}
  <div className="relative flex flex-col gap-4">

    {/* CAR 1 */}
    <div className="w-full h-[190px] sm:h-[230px] md:h-[220px] lg:h-[240px] overflow-hidden rounded-2xl">
      <img
        src={car1}
        alt="Lübecks Taxi Fahrzeug"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* CAR 2 */}
    <div className="w-full h-[190px] sm:h-[230px] md:h-[220px] lg:h-[240px] overflow-hidden rounded-2xl">
      <img
        src={car2}
        alt="Lübecks Taxi Fahrer"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* CAR 3 */}
    <div className="w-full h-auto overflow-hidden rounded-2xl">
      <img
        src={car3}
        alt="Lübecks Taxi Fahrzeug"
        className="block w-full h-auto object-contain rounded-2xl"
      />
    </div>

  </div>

  {/* Aşağıda məlumat etiketi */}
  <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-black/75 backdrop-blur-sm text-white px-3 py-2 rounded-xl text-xs sm:text-sm border border-white/10">
    24/7 Flughafentransfer · Stadtfahrten · Business Service
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
