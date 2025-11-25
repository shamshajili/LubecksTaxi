import React, { useState } from "react";
import { motion } from "framer-motion";
import { Car, Headphones, CreditCard } from "lucide-react";
import InfoPopup from "../components/InfoPopup";

const StatsSection: React.FC = () => {
  const [openStatsPopup, setOpenStatsPopup] = useState<string | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full bg-black py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 tracking-tight">
            Taxi in Lübeck
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Taxiservice für Sie vor Ort
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="relative w-full flex justify-center"
        >
          {/* CARD */}
          <div className="bg-white text-black rounded-2xl shadow-xl p-6 w-[90%] sm:w-[70%] md:w-[50%] z-10">
            <h2 className="text-lg font-semibold mb-2">Deine Fahrt, genau dann.</h2>
            <p className="text-gray-700 mb-3 text-sm">
              Lübecks Taxi – schnell, zuverlässig und professionell. Wir bringen dich sicher ans Ziel.
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => setOpenStatsPopup("buchen")}
                className="bg-yellow-400 text-black px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-300 transition"
              >
                <Car className="w-4 h-4" />
                Buchen
              </button>

              <button
                onClick={() => setOpenStatsPopup("service")}
                className="bg-neutral-900 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-neutral-800 transition border border-neutral-700"
              >
                <Headphones className="w-4 h-4 text-yellow-300" />
                24/7 Service
              </button>

              <button
                onClick={() => setOpenStatsPopup("payment")}
                className="bg-white text-black px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition border border-gray-300"
              >
                <CreditCard className="w-4 h-4 text-yellow-500" />
                Bezahlung
              </button>
            </div>
          </div>


          <InfoPopup
            open={openStatsPopup === "buchen"}
            onClose={() => setOpenStatsPopup(null)}
          >
            <h3 className="text-xl font-bold mb-2">Buchung</h3>
            <p className="text-gray-700 mb-3 text-sm">
              Buche deine Fahrt in wenigen Minuten. Wir holen dich überall ab.
            </p>

            <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 flex items-center gap-2">
              📍
              <input
                type="text"
                placeholder="Abholadresse eingeben"
                className="bg-transparent w-full outline-none text-sm text-gray-700"
              />
            </div>
          </InfoPopup>

          <InfoPopup
            open={openStatsPopup === "service"}
            onClose={() => setOpenStatsPopup(null)}
          >
            <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
            <p className="text-gray-700 text-sm">
              Unser Team ist rund um die Uhr erreichbar – Bestellungen jederzeit möglich.
            </p>
          </InfoPopup>
          <InfoPopup
            open={openStatsPopup === "payment"}
            onClose={() => setOpenStatsPopup(null)}
          >
            <h3 className="text-xl font-bold mb-3">Bezahlung</h3>
            <p className="text-gray-700 text-sm mb-3">
              Wir akzeptieren sichere und moderne Zahlungsmethoden.
            </p>

            <div className="flex gap-5 items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                className="w-14"
                alt="PayPal"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                className="w-12"
                alt="Visa"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                className="w-12"
                alt="Mastercard"
              />
              <div className="flex items-center gap-1">
      <div className="flex items-center justify-center ">
        <CreditCard className="w-10 h-10 text-orange-600" />
      </div>
      <span className="text-xs font-semibold text-gray-800">EC-Karte</span>
    </div>
            </div>
          </InfoPopup>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
