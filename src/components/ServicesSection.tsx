import React from "react";
import { Rocket, Headphones, Shield } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-left mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
            Wir gestalten Mobilität neu – <br className="hidden md:block" /> 
            <span className="text-yellow-400">mit jeder Fahrt.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl">
            Entwickelt für Schnelligkeit, Sicherheit und Einfachheit – wir
            verbinden Fahrgäste mit zuverlässigen Fahrern in nur wenigen
            Sekunden.
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">

          {/* CARD 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="bg-neutral-900 rounded-2xl shadow-md hover:shadow-xl 
                       p-6 md:p-8 transition transform hover:-translate-y-2 
                       border border-yellow-500/25"
          >
            <div className="bg-yellow-400/10 border border-yellow-400/70 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg mb-5 md:mb-6">
              <Rocket className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
              Schnelle & einfache Buchung
            </h3>

            <p className="text-gray-300 text-sm sm:text-base">
              Reserviere deine Fahrt in wenigen Sekunden – einfach, schnell und stressfrei.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="bg-neutral-900 rounded-2xl shadow-md hover:shadow-xl 
                       p-6 md:p-8 transition transform hover:-translate-y-2 
                       border border-yellow-500/25"
          >
            <div className="bg-yellow-400/10 border border-yellow-400/70 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg mb-5 md:mb-6">
              <Headphones className="w-6 h-6 md:w-8 md:h-8 text-yellow-300" />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
              24/7 Service
            </h3>

            <p className="text-gray-300 text-sm sm:text-base">
              Wir sind rund um die Uhr für dich da – zuverlässig, freundlich und nah.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.5 }}
            className="bg-neutral-900 rounded-2xl shadow-md hover:shadow-xl 
                       p-6 md:p-8 transition transform hover:-translate-y-2 
                       border border-yellow-500/25"
          >
            <div className="bg-yellow-400/10 border border-yellow-400/70 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg mb-5 md:mb-6">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
              Vertrauenswürdige Fahrer
            </h3>

            <p className="text-gray-300 text-sm sm:text-base">
              Geprüft, erfahren und freundlich – für deine sichere und angenehme Fahrt.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
