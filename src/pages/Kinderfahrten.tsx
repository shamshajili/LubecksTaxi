import React from "react";
import { motion } from "framer-motion";
import kinderImg from "../assets/images/kinderfahrten.webp";
import BookingSection from "../components/BookingSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Kinderfahrten: React.FC = () => {
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
            🎒 Kinderfahrten & Schultransporte
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white text-center mt-4 leading-snug"
        >
          Sichere & zuverlässige Kinderfahrten in Lübeck
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-300 text-center mt-3 max-w-xl mx-auto"
        >
          Wir bringen Ihre Kinder sicher zur Schule, Kita, Sport, Musikunterricht
          oder anderen Terminen – pünktlich, freundlich und verantwortungsvoll.
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
              src={kinderImg}
              alt="Kinderfahrten Lübeck"
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
              Für Eltern ist die Sicherheit ihrer Kinder das Wichtigste – und genau
              darauf legen wir höchsten Wert. Unser Team fährt Ihre Kinder sicher
              und verlässlich zu allen Terminen.
            </p>

            <p>
              Unsere Fahrer sind erfahren, geduldig und kinderfreundlich. Wir sorgen für
              ruhige und angenehme Fahrten – perfekt für den täglichen Schulweg.
            </p>

            <p>
              Auf Wunsch informieren wir Sie über die erfolgreiche Ankunft und übernehmen
              auch regelmäßige, planbare Fahrten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-neutral-950 border-t border-neutral-800 py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Warum unsere Kinderfahrten?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
            Sicherheit, Vertrauen und Zuverlässigkeit – dafür stehen wir.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-14">

            {[
              {
                icon: "🛡️",
                title: "Höchste Sicherheit",
                text: "Kindersitze, Gurtsysteme & erfahrene Fahrer – für maximalen Schutz.",
              },
              {
                icon: "👨‍👧",
                title: "Kindgerechter Service",
                text: "Geduldig, freundlich und verantwortungsvoll im Umgang mit Kindern.",
              },
              {
                icon: "📆",
                title: "Planbare feste Fahrten",
                text: "Perfekt für regelmäßige Schul- und Kita-Fahrten.",
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
                <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base">
                  {f.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 sm:py-16 md:py-20 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
            So funktionieren Kinderfahrten bei uns
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mt-2 mb-10 text-center max-w-xl mx-auto">
            Sicher, liebevoll und zuverlässig – Schritt für Schritt.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              { step: "1", title: "Anfrage senden", text: "Sie nennen uns Abholort, Ziel und Uhrzeit." },
              { step: "2", title: "Bestätigung", text: "Wir bestätigen die Fahrt schnell & zuverlässig." },
              { step: "3", title: "Abholung", text: "Wir holen Ihr Kind sicher ab und begleiten es freundlich." },
              { step: "4", title: "Ankunft & Rückfahrt", text: "Auf Wunsch Rückfahrt & Ankunftsinfo für Eltern." },
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

export default Kinderfahrten;
