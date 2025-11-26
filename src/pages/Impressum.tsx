import React from "react";
import CarCarousel from "../components/CarCarousel"; 

const Impressum: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <header className="mb-10">
          <p className="text-xs tracking-[0.25em] uppercase text-yellow-400">
            Rechtliches
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">
            Impressum
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-400">
            Angaben gemäß Informationspflicht laut § 5 Telemediengesetz (TMG).
          </p>
        </header>

        {/* Impressum Content */}
        <section className="bg-[#111111] border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.7)] mb-12">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left block – address & tax */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-white">
                Verantwortlich für den Inhalt
              </h2>

              <div className="text-sm leading-relaxed text-gray-300">
                <p className="font-medium text-white">Lübecks Taxi</p>
                <p>Brahmsstraße 20j</p>
                <p>23556 Lübeck</p>
                <p>Deutschland</p>
              </div>

              <div className="pt-2 text-sm leading-relaxed text-gray-300 space-y-1">
                <p>
                  <span className="font-medium text-white">Steuernummer:</span>{" "}
                  96082831456
                </p>
                <p>
                  <span className="font-medium text-white">Berufsbezeichnung:</span>{" "}
                  Taxiunternehmen
                </p>
              </div>
            </div>

            {/* Right block – contact & legal note */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-white">Kontakt</h2>

              <div className="text-sm leading-relaxed text-gray-300 space-y-1">
                <p>
                  <span className="font-medium text-white">Telefon:</span>{" "}
                  <a
                    href="tel:+4915563293339"
                    className="text-yellow-400 hover:text-yellow-300 underline-offset-2 hover:underline"
                  >
                    +4915563293339 
                  </a>
                </p>
                <p>
                  <span className="font-medium text-white">E-Mail:</span>{" "}
                  <a
                    href="mailto:azerhacili@yahoo.com"
                    className="text-yellow-400 hover:text-yellow-300 underline-offset-2 hover:underline"
                  >
                    azerhacili@yahoo.com
                  </a>
                </p>
              </div>

              <div className="pt-2 text-xs md:text-[13px] text-gray-500 space-y-2">
                <p>
                  Inhalt und Angebote dieser Seite richten sich ausschließlich
                  an Nutzer in Deutschland. Alle Angaben ohne Gewähr auf
                  Vollständigkeit, Richtigkeit und Aktualität.
                </p>
                <p>
                  Urheberrechte bleiben beim Betreiber der Seite. Eine
                  Vervielfältigung oder Verwendung von Texten und Bildern ist
                  ohne ausdrückliche Zustimmung nicht gestattet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Car carousel section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4 mb-2">
            <p className="hidden md:block text-xs tracking-[0.25em] uppercase text-yellow-400">
              Lübecks Taxi
            </p>
          </div>
          <CarCarousel />
        </section>
      </div>
    </main>
  );
};

export default Impressum;
