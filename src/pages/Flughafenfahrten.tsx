import React from "react";
import { motion } from "framer-motion";
import flughafenImg from "../assets/images/flughafenfahrten.png";
import BookingSection from "../components/BookingSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Flughafenfahrten: React.FC = () => {
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
            ✈️ Flughafentransfer Lübeck & Umgebung
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white text-center mt-4 leading-snug"
        >
          Zuverlässige Flughafenfahrten – pünktlich & komfortabel
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-300 text-center mt-3 max-w-xl mx-auto"
        >
          Wir bringen Sie sicher und stressfrei zum Flughafen.
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
              src={flughafenImg}
              alt="Flughafen Hamburg Transfer"
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
              Starten Sie entspannt in den Urlaub oder Ihre Geschäftsreise –
              wir holen Sie zuverlässig ab und bringen Sie pünktlich zum Terminal.
            </p>

            <p>
              Unsere Fahrer überwachen Flugzeiten, reagieren auf Verspätungen
              und sorgen für eine stressfreie Ankunft.
            </p>

            <p>
              Egal ob Einzelfahrt, Familienreise oder Geschäftsgruppe –
              wir bieten maximalen Komfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-neutral-950 border-t border-neutral-800 py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Warum unser Flughafentransfer?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
            Komfortabel, zuverlässig & stressfrei – genauso soll Ihr Flughafentransfer sein.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-14">

            {[
              {
                icon: "⏱️",
                title: "Pünktliche Abholung",
                text: "Wir sind rechtzeitig vor Ort – keine Hektik, kein Stress.",
              },
              {
                icon: "🧳",
                title: "Gepäckservice inklusive",
                text: "Wir helfen beim Verladen und Entladen Ihres Gepäcks.",
              },
              {
                icon: "🕒",
                title: "24/7 Buchbar",
                text: "Wir sind rund um die Uhr erreichbar – Tag & Nacht.",
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
            So läuft Ihr Flughafentransfer ab
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mt-2 mb-10 text-center max-w-xl mx-auto">
            Einfach, bequem und stressfrei – perfekt für jede Reise.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              { step: "1", title: "Anfrage senden", text: "Abholort, Terminal & Flugnummer angeben." },
              { step: "2", title: "Bestätigung erhalten", text: "Wir bestätigen Ihre Flughafenfahrt." },
              { step: "3", title: "Pünktliche Abholung", text: "Rechtzeitig zuhause oder im Hotel abgeholt." },
              { step: "4", title: "Komfortable Fahrt", text: "Ohne Stress & ohne Umsteigen zum Flughafen." },
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

export default Flughafenfahrten;
