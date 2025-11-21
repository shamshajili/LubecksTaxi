import React from "react";
import car from "../assets/images/car.avif";
import taxivideo from "../assets/videos/taxivideo.mp4";
import { Car, Headphones, CreditCard } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white pt-32 pb-20 px-6 md:px-14 lg:px-20">
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-14">

        {/* LEFT TEXT SECTION */}
        <div className="max-w-xl text-left lg:pr-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Hol dir eine{" "}
            <span className="inline-flex items-center text-yellow-400">
              <img src={car} alt="Auto" className="w-14 h-14 sm:w-16 sm:h-16 mx-2" />
            </span>
            zuverlässige Fahrt in Minuten.
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Komfortabel, sicher und pünktlich – jede Fahrt wird zu deinem besten Erlebnis.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col xs:flex-row items-center gap-4">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition w-full xs:w-auto shadow-md">
              Brauchst du eine Fahrt?
            </button>

            <a
              href="tel:+4915213491000"
              className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition w-full xs:w-auto shadow-md"
            >
              +49 1521 3491000
            </a>
          </div>

          <div className="mt-8 text-gray-400 text-base sm:text-lg">
            ⭐⭐⭐⭐⭐ <br />
            Mehr als 5 Mio. zufriedene Kunden
          </div>
        </div>

        {/* VIDEO + CARD SECTION */}
        <div className="relative w-full lg:w-1/2 h-[420px] sm:h-[500px] lg:h-[640px] rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(255,215,0,0.2)] bg-neutral-900">
          <video
            src={taxivideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80"
          />

          {/* FLOATING CARD */}
          <div
            className="
              absolute bottom-4 left-1/2 -translate-x-1/2
              bg-white text-black rounded-2xl shadow-xl
              p-3 sm:p-4 md:p-5
              w-[80%] sm:w-[65%] md:w-[55%]
            "
          >
            <h2 className="text-base sm:text-lg font-semibold mb-2 leading-snug text-black">
              Deine Fahrt, genau dann, wenn du sie wirklich brauchst.
            </h2>

            <p className="text-gray-700 mb-3 text-xs sm:text-sm leading-relaxed">
              Lübecks Taxi – schnell, zuverlässig und professionell. Egal wohin du fährst, wir bringen dich sicher ans Ziel.
            </p>

            {/* Feature Buttons */}
            <div className="flex flex-col gap-2">
              <button
                className="
                  bg-yellow-400 text-black font-medium
                  px-3 py-2 rounded-lg flex items-center justify-center gap-2
                  hover:bg-yellow-300 transition
                  text-xs sm:text-sm shadow-sm
                "
              >
                <Car className="w-4 h-4" />
                Buchen
              </button>

              <button
                className="
                  bg-neutral-900 text-white font-medium
                  px-3 py-2 rounded-lg flex items-center justify-center gap-2
                  hover:bg-neutral-800 transition
                  text-xs sm:text-sm border border-neutral-700
                "
              >
                <Headphones className="w-4 h-4 text-yellow-300" />
                24/7 Service
              </button>

              <button
                className="
                  bg-white text-black font-medium
                  px-3 py-2 rounded-lg flex items-center justify-center gap-2
                  hover:bg-gray-100 transition
                  text-xs sm:text-sm border border-gray-300
                "
              >
                <CreditCard className="w-4 h-4 text-yellow-500" />
                Bezahlung
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
