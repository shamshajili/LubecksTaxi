import React from "react";
import { motion } from "framer-motion";
import krankenImg from "../assets/images/krankenfahrten.webp";
import BookingSection from "../components/BookingSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Krankenfahrten: React.FC = () => {
  return (
    <div className="w-full bg-black text-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 sm:py-16 md:py-20">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-3 py-1 text-xs sm:text-sm font-medium text-yellow-400 border border-yellow-500/40 shadow-sm">
            🏥 Krankenfahrten & Arzttermine
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white text-center mt-4 leading-snug"
        >
          Zuverlässige & sichere Krankenfahrten in Lübeck
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-300 text-center mt-3 max-w-xl mx-auto"
        >
          Wir begleiten Sie einfühlsam und sicher zu Arztterminen, Klinikbesuchen,
          Dialysefahrten, Reha & mehr – mit persönlicher Unterstützung.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center mt-10 sm:mt-16">

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={krankenImg}
              alt="Krankenfahrten Lübeck"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover max-h-[330px] sm:max-h-none"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            <p>
              Unsere Krankenfahrten bieten Ihnen eine sichere, bequeme und
              einfühlsame Beförderung zu allen medizinischen Einrichtungen.
            </p>

            <p>
              Wir holen Sie zuhause ab, helfen beim Ein- und Aussteigen
              und bringen Sie pünktlich zu Ihrem Termin – zuverlässig und freundlich.
            </p>

            <p>
              Auf Wunsch warten wir vor Ort und bringen Sie danach wieder sicher nach Hause.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-neutral-950 border-t border-neutral-800 py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Warum unsere Krankenfahrten?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
            Sicherheit, Komfort und Einfühlungsvermögen stehen bei uns an erster Stelle.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-14">

            {[
              {
                icon: "🤝",
                title: "Persönliche Unterstützung",
                text: "Wir helfen beim Einsteigen, Aussteigen und stehen bei Bedarf begleitend zur Seite.",
              },
              {
                icon: "⏱️",
                title: "Pünktlich & zuverlässig",
                text: "Wir bringen Sie sicher und termingerecht zu Kliniken, Arztpraxen und Therapien.",
              },
              {
                icon: "🩺",
                title: "Für alle medizinischen Fahrten",
                text: "Dialyse, Chemo, Reha, Physio, Kontrolltermine – wir fahren überall hin.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-neutral-900 p-6 sm:p-8 rounded-2xl shadow-md border border-neutral-700 text-center hover:-translate-y-1 hover:shadow-lg transition-transform"
              >
                <div className="text-3xl sm:text-4xl mb-3 text-yellow-400">
                  {f.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{f.title}</h3>
                <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base">{f.text}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 sm:py-16 md:py-20 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
            So laufen Krankenfahrten bei uns ab
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mt-2 mb-10 text-center max-w-xl mx-auto">
            Einfach, sicher und mit Herz – Schritt für Schritt.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              { step: "1", title: "Anfrage senden", text: "Sie teilen uns Abholort, Ziel und Termin mit." },
              { step: "2", title: "Bestätigung", text: "Wir bestätigen Ihre Krankenfahrt schnell und zuverlässig." },
              { step: "3", title: "Hilfe beim Einstieg", text: "Wir unterstützen Sie beim sicheren Ein- und Aussteigen." },
              { step: "4", title: "Fahrt & Rückfahrt", text: "Wir fahren Sie hin und holen Sie auf Wunsch wieder ab." },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-neutral-900 rounded-2xl shadow-md p-6 border border-neutral-700 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold mx-auto mb-3">
                  {s.step}
                </div>
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{s.text}</p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* BOOKING SECTION */}
      <div className="mt-0">
        <BookingSection />
      </div>
    </div>
  );
};

export default Krankenfahrten;
