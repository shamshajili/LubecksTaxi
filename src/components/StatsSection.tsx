import React from "react";
import { motion } from "framer-motion";
import holstentor from "../assets/images/holstentor.jpg";

const StatsSection: React.FC = () => {
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

        {/* Main Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(255,215,0,0.25)] transition-shadow duration-300 border border-yellow-500/20"
        >
          <img
            src={holstentor}
            alt="Lübeck"
            className="w-full object-cover max-h-[520px] md:hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 mt-16"
        >
          {[
            { value: "60K+", label: "Fahrten monatlich" },
            { value: "98%", label: "Kundenzufriedenheit" },
            { value: "15+", label: "Städte im Einsatz" },
            { value: "4K+", label: "Aktive Fahrer" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-neutral-900 rounded-2xl py-6 px-4 w-full text-center shadow-md hover:shadow-xl border border-yellow-500/25 transition-all duration-300"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-2 tracking-tight">
                {item.value}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium break-words">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
