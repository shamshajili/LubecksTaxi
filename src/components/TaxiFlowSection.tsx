import { motion } from "framer-motion";

const services = [
  {
    title: "Personenbeförderung",
    desc: "Wir fahren Sie sicher und pünktlich an jedes gewünschte Ziel – in und um Lübeck.",
    link: "/personenfahrten",
    icon: "🚖",
  },
  {
    title: "Flughafentransfer",
    desc: "Stressfreier Transfer zum und vom Flughafen – mit zuverlässigen Abholzeiten.",
    link: "/flughafenfahrten",
    icon: "✈️",
  },
  {
    title: "Krankentransport",
    desc: "Sichere Fahrten zu Arztterminen oder ins Krankenhaus – wir bringen Sie pünktlich hin und wieder zurück.",
    link: "/krankenfahrten",
    icon: "🚑",
  },
  {
    title: "Kurierfahrten",
    desc: "Schnelle und zuverlässige Lieferung wichtiger Dokumente und Pakete.",
    link: "/kurierfahrten",
    icon: "📦",
  },
  {
    title: "Kinderfahrten",
    desc: "Sichere Fahrten für Kinder – mit Vertrauen, Fürsorge und Pünktlichkeit.",
    link: "/kinderfahrten",
    icon: "👧👦",
  },
];

export default function TaxiFlowSection() {
  return (
    <section id="services" className="w-full bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-yellow-400/80">
            Unser Service
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Fahrten, die zu dir passen.
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Ob Stadtfahrt, Flughafen, Kurier oder Kindertransport – Lübecks Taxi
            bringt dich sicher, bequem und zuverlässig ans Ziel.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="h-full rounded-3xl bg-neutral-900 border border-yellow-500/25 shadow-lg shadow-black/40 p-6 md:p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-yellow-400/10 border border-yellow-400/70 text-2xl">
                    <span>{s.icon}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {s.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed flex-1">
                  {s.desc}
                </p>

                <a
                  href={s.link}
                  className="mt-6 inline-flex items-center justify-center rounded-full 
                             bg-yellow-400 text-black text-sm font-semibold 
                             px-4 py-2 hover:bg-yellow-300 transition shadow-md"
                >
                  Mehr erfahren
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
