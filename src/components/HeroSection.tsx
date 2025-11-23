import React from "react";
import car from "../assets/images/car.avif";
import taxivideo from "../assets/videos/holstentor.mp4";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white pt-32 pb-20 px-6 md:px-14 lg:px-20">
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-14">

        {/* LEFT */}
        <div className="max-w-xl text-left lg:pr-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Hol dir eine{" "}
            <span className="inline-flex items-center text-yellow-400">
              <img src={car} alt="car" className="w-14 h-14 mx-2" />
            </span>
            zuverlässige Fahrt in Minuten.
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Komfortabel, sicher und pünktlich – jede Fahrt wird zu deinem besten Erlebnis.
          </p>

          <div className="mt-10 flex flex-col xs:flex-row items-center gap-4">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition w-full xs:w-auto shadow-md">
              Brauchst du eine Fahrt?
            </button>

            <a
              href="https://wa.me/49015563293339"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition w-full xs:w-auto shadow-md"
            >
              +49015563293339
            </a>
          </div>

          <div className="mt-8 text-gray-400 text-base sm:text-lg">
            ⭐⭐⭐⭐⭐ <br />
            Mehr als 5 Mio. zufriedene Kunden
          </div>
        </div>

        {/* RIGHT – VIDEO */}
        <div className="relative w-full lg:w-1/2 h-[420px] sm:h-[500px] lg:h-[640px] rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(255,215,0,0.2)] bg-neutral-900">
          <video
            src={taxivideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
