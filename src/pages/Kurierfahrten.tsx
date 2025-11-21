import React from "react";
import { motion } from "framer-motion";
import kurierImg from "../assets/images/kurierfahrten.webp";
import BookingSection from "../components/BookingSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Kurierfahrten: React.FC = () => {
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
            📦 Kurierfahrten & Expresslieferungen
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white text-center mt-4 leading-snug"
        >
          Zuverlässige Kurierdienste in Lübeck & Umgebung
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-300 text-center mt-3 max-w-xl mx-auto"
        >
          Dokumente, Pakete, eilige Sendungen – wir liefern schnell, direkt und
          sicher.
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
              src={kurierImg}
              alt="Kurierfahrten Lübeck"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover max-h-[320px] sm:max-h-none"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed"
          >
            <p>
              Unser Kurierdienst bietet schnelle und sichere Expresslieferungen
              für Geschäftskunden und Privatpersonen. Ob wichtige Dokumente,
              vertrauliche Unterlagen oder Pakete – wir liefern zuverlässig.
            </p>

            <p>
              Ihre Sendung wird direkt und ohne Zwischenstopp transportiert –
              schnell, diskret und pünktlich. Perfekt für zeitkritische und
              empfindliche Lieferungen.
            </p>

            <p>
              Wir holen die Sendung bei Ihnen ab und liefern sie direkt zum
              Zielort – egal ob innerhalb Lübecks oder in die umliegenden
              Regionen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-black border-t border-neutral-800 py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Warum unser Kurierdienst?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
            Wir bieten professionelle, direkte und sichere Transportlösungen.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-14">
            {[
              {
                icon: "⚡",
                title: "Expresszustellung",
                text: "Direktfahrten ohne Zwischenstopp – ideal für eilige Sendungen.",
              },
              {
                icon: "🔒",
                title: "Sicher & Diskret",
                text: "Vertrauliche Dokumente und sensible Waren werden sicher transportiert.",
              },
              {
                icon: "📍",
                title: "Flexible Abholung",
                text: "Wir holen Ihre Sendung schnell und flexibel an jedem Ort ab.",
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
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {f.title}
                </h3>
                <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base">
                  {f.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE TRANSPORT */}
      <section className="py-14 sm:py-16 md:py-20 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
            Was transportieren wir?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mt-2 text-center max-w-xl mx-auto">
            Unser Kurierdienst ist vielseitig einsetzbar – sicher, schnell und
            zuverlässig.
          </p>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-8 mt-10">
            {[
              "Wichtige Dokumente",
              "Pakete & Sendungen",
              "Vertrauliche Unterlagen",
              "Eilige Ersatzteile",
              "Kleinware für Unternehmen",
              "Medizinische Transporte",
              "Kleinmöbel & Spezialartikel",
              "Privat- & Geschäftslieferungen",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-neutral-900 p-5 rounded-xl border border-neutral-700 text-center text-sm sm:text-base text-gray-100"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 sm:py-16 md:py-20 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
            So funktioniert unsere Kurierfahrt
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mt-2 mb-10 text-center max-w-xl mx-auto">
            Einfach, schnell und zuverlässig – in wenigen Schritten.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Anfrage senden",
                text: "Geben Sie Abholort, Ziel und Sendungsart an.",
              },
              {
                step: "2",
                title: "Bestätigung erhalten",
                text: "Wir bestätigen die Kurierfahrt schnellstmöglich.",
              },
              {
                step: "3",
                title: "Abholung",
                text: "Wir holen die Sendung zügig und flexibel ab.",
              },
              {
                step: "4",
                title: "Direktlieferung",
                text: "Ihre Sendung wird sicher & ohne Umwege zugestellt.",
              },
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

      {/* BOOKING FORM */}
      <div className="mt-0">
        <BookingSection />
      </div>
    </div>
  );
};

export default Kurierfahrten;
