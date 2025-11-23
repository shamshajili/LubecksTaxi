import React, { useState } from "react";
import car from "../assets/images/car.avif";
import taxivideo from "../assets/videos/holstentor.mp4";
import { Car, Headphones, CreditCard } from "lucide-react";
import InfoPopup from "../components/InfoPopup";

const HeroSection: React.FC = () => {
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  return (
    <section className="bg-black text-white pt-32 pb-20 px-6 md:px-14 lg:px-20">
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-14">

        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE – VIDEO + CARD */}
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black rounded-2xl shadow-xl p-4 w-[80%] sm:w-[65%] md:w-[55%]">

            <h2 className="text-lg font-semibold mb-2">Deine Fahrt, genau dann.</h2>
            <p className="text-gray-700 mb-3 text-sm">
              Lübecks Taxi – schnell, zuverlässig und professionell. Wir bringen dich sicher ans Ziel.
            </p>

            {/* Feature Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setOpenPopup("buchen")}
                className="bg-yellow-400 text-black px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-300 transition"
              >
                <Car className="w-4 h-4" />
                Buchen
              </button>

              <button
                onClick={() => setOpenPopup("service")}
                className="bg-neutral-900 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-neutral-800 transition border border-neutral-700"
              >
                <Headphones className="w-4 h-4 text-yellow-300" />
                24/7 Service
              </button>

              <button
                onClick={() => setOpenPopup("payment")}
                className="bg-white text-black px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition border border-gray-300"
              >
                <CreditCard className="w-4 h-4 text-yellow-500" />
                Bezahlung
              </button>
            </div>
          </div>

          {/* POPUPS */}

          {/* Booking Popup */}
          <InfoPopup open={openPopup === "buchen"} onClose={() => setOpenPopup(null)}>
            <h3 className="text-xl font-bold mb-2">Buchung</h3>

            <p className="text-gray-700 mb-3 text-sm">
              Buche deine Fahrt in wenigen Minuten. Wir holen dich überall ab.
            </p>

            <p className="text-gray-500 text-sm mb-4">
              Bitte füllen Sie das Formular aus – wir melden uns sofort.
            </p>

            <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 flex items-center gap-2">
              <span className="text-pink-500 text-lg">📍</span>
              <input
                type="text"
                placeholder="Abholadresse eingeben"
                className="bg-transparent w-full outline-none text-sm text-gray-700"
              />
            </div>
          </InfoPopup>

          {/* Service Popup */}
          <InfoPopup open={openPopup === "service"} onClose={() => setOpenPopup(null)}>
            <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
            <p className="text-gray-700 text-sm">
              Unser Team ist rund um die Uhr erreichbar – Bestellungen jederzeit möglich.
            </p>
          </InfoPopup>

          {/* Payment Popup */}
          <InfoPopup open={openPopup === "payment"} onClose={() => setOpenPopup(null)}>
            <h3 className="text-xl font-bold mb-3">Bezahlung</h3>
            <p className="text-gray-700 text-sm mb-3">
              Wir akzeptieren sichere und moderne Zahlungsmethoden.
            </p>

            <div className="flex gap-5 items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                className="w-14"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                className="w-12"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                className="w-12"
              />
            </div>
          </InfoPopup>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
