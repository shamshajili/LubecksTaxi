import React from "react";
import { motion } from "framer-motion";
import personenImg from "../assets/images/personenfahrten.webp";
import BookingSection from "../components/BookingSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Personenfahrten: React.FC = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-4 py-1 text-sm font-medium text-yellow-400 border border-yellow-500/40 shadow-sm">
            🚗 Personenfahrten in Lübeck & Umgebung
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-white text-center mt-4"
        >
          Personenbeförderung in Lübeck & Umgebung
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 text-center mt-3 max-w-2xl mx-auto"
        >
          Ihre beste Wahl für sichere & komfortable Fahrten in Lübeck, Bad
          Schwartau & Umgebung.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <a
            href="tel:+49 1521 3491000"
            className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-3 text-black font-semibold shadow-lg hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-xl transition"
          >
            Jetzt anrufen
          </a>
          <a
            href="#anfrage"
            className="inline-flex items-center justify-center rounded-full bg-transparent px-8 py-3 text-white font-semibold border border-gray-500 shadow-sm hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-md transition"
          >
            Fahrt anfragen
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          {/* Left Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={personenImg}
              alt="Personenbeförderung Lübeck"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-gray-200 text-lg leading-relaxed"
          >
            <p>
              Ob Alltag, Arzttermin oder besondere Anlässe – wir bieten Ihnen
              sichere, angenehme und zuverlässige Personenfahrten durch Lübeck
              und Umgebung. Unsere erfahrenen Fahrer bringen Sie pünktlich und
              entspannt an jedes Ziel.
            </p>

            <p>
              Egal ob kurze Wege, längere Fahrten oder regelmäßige
              Termintransfers – wir passen uns Ihren Wünschen flexibel an und
              garantieren faire Preise, höchste Qualität und moderne Fahrzeuge.
            </p>

            <p>
              Mit unserer Ortskenntnis, Freundlichkeit und Zuverlässigkeit
              genießen Sie jederzeit eine angenehme Fahrt – privat oder
              geschäftlich.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-black border-t border-neutral-800 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Warum unsere Personenfahrten?
          </h2>

          <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
            Für Ihr optimales Fahrerlebnis legen wir höchsten Wert auf folgende
            Aspekte:
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {/* Item 1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-neutral-900 p-8 rounded-2xl shadow-md border border-neutral-700 hover:-translate-y-1 hover:shadow-lg transition-transform"
            >
              <div className="text-4xl mb-4 text-yellow-400">⏱️</div>
              <h3 className="text-xl font-bold text-white">
                Pünktlichkeit & Zuverlässigkeit
              </h3>
              <p className="text-gray-300 mt-3">
                Unsere Fahrer bringen Sie stets pünktlich und sicher an Ihr Ziel
                – egal ob früh morgens oder spät abends.
              </p>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-neutral-900 p-8 rounded-2xl shadow-md border border-neutral-700 hover:-translate-y-1 hover:shadow-lg transition-transform"
            >
              <div className="text-4xl mb-4 text-yellow-400">📞</div>
              <h3 className="text-xl font-bold text-white">
                Flexibilität & Erreichbarkeit
              </h3>
              <p className="text-gray-300 mt-3">
                Ob spontan oder geplant – wir sind jederzeit für Sie erreichbar
                und passen die Fahrt Ihren Wünschen an.
              </p>
            </motion.div>

            {/* Item 3 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-neutral-900 p-8 rounded-2xl shadow-md border border-neutral-700 hover:-translate-y-1 hover:shadow-lg transition-transform"
            >
              <div className="text-4xl mb-4 text-yellow-400">💶</div>
              <h3 className="text-xl font-bold text-white">
                Transparente Preise
              </h3>
              <p className="text-gray-300 mt-3">
                Keine versteckten Kosten – unsere Fahrer informieren Sie gerne
                vorab über den Fahrpreis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ZAHLEN & FAKTEN */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Fahrten pro Jahr", value: "8.000+" },
            { label: "Zufriedene Kunden", value: "5.000+" },
            { label: "Jahre Erfahrung", value: "10+" },
            { label: "24/7 erreichbar", value: "365 Tage" },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-3xl md:text-4xl font-extrabold text-yellow-400">
                {item.value}
              </p>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* KUNDENSTIMMEN */}
      <section className="py-16 md:py-20 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Kundenstimmen
          </h2>
          <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto text-center">
            Was unsere Fahrgäste über uns sagen.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Michael K.",
                text: "Sehr zuverlässig und freundlich. Ich nutze den Service regelmäßig für meine Geschäftsreisen.",
                rating: "★★★★★",
              },
              {
                name: "Sabine L.",
                text: "Pünktlich, höflich und sehr hilfsbereit – besonders bei Fahrten zum Arzttermin.",
                rating: "★★★★★",
              },
              {
                name: "Familie H.",
                text: "Wir sind mit der ganzen Familie zum Flughafen gefahren – super organisiert und entspannt.",
                rating: "★★★★★",
              },
            ].map((review) => (
              <motion.div
                key={review.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-sm"
              >
                <div className="text-yellow-400 text-xl mb-2">
                  {review.rating}
                </div>
                <p className="text-gray-200 text-sm mb-4">“{review.text}”</p>
                <p className="text-sm font-semibold text-white">
                  {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-20 bg-black border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Häufige Fragen (FAQ)
          </h2>
          <p className="text-lg text-gray-300 mt-2 text-center mb-8">
            Antworten auf die wichtigsten Fragen rund um unsere Personenfahrten.
          </p>

          <div className="space-y-4">
            {[
              {
                q: "Wie kurzfristig kann ich eine Fahrt buchen?",
                a: "In der Regel können wir auch kurzfristige Anfragen annehmen. Am besten rufen Sie uns direkt an, wenn Sie eine spontane Fahrt benötigen.",
              },
              {
                q: "Welche Zahlungsmöglichkeiten gibt es?",
                a: "Sie können in der Regel bar zahlen. Auf Wunsch sind weitere Zahlungsmöglichkeiten nach Absprache möglich.",
              },
              {
                q: "Fahren Sie auch am Wochenende und an Feiertagen?",
                a: "Ja, wir sind – nach Verfügbarkeit – auch an Wochenenden und Feiertagen für Sie im Einsatz.",
              },
              {
                q: "Bieten Sie auch Krankenfahrten an?",
                a: "Ja, wir unterstützen Sie gerne bei Fahrten zu Arztterminen, Kliniken und Reha-Einrichtungen. Sprechen Sie uns einfach an.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-neutral-900 rounded-2xl border border-neutral-700 p-4 md:p-5 shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="font-semibold text-white text-sm md:text-base">
                    {item.q}
                  </span>
                  <span className="ml-3 text-yellow-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-200 mt-3 text-sm md:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION – FORM */}
      <div className="mt-0">
        <BookingSection />
      </div>
    </div>
  );
};

export default Personenfahrten;
