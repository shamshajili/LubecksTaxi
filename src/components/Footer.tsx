import React from "react";
import {
  MapPinIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import mainlogo from "../assets/images/logo1.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-900 border-t border-yellow-400">
      {/* MAIN GRID */}
      <div
        className="max-w-7xl mx-auto px-6 sm:px-10 py-14 
        grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12"
      >
        {/* LOGO SECTION */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/">
            <img
              src={mainlogo}
              alt="Lübecks Taxi"
              className="w-28 h-28 object-contain mb-4"
            />
          </Link>
          <p className="text-white text-base sm:text-lg font-light font-semibold">
            Sicher. Pünktlich. Komfortabel.
          </p>
        </div>

        {/* SERVICE */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            Service
          </h3>
          <ul className="space-y-2 text-white text-base ">
            <li>
              <Link
                to="/personenfahrten"
                className="hover:text-yellow-500 transition font-semibold"
              >
                Personenfahrten
              </Link>
            </li>
            <li>
              <Link
                to="/kurierfahrten"
                className="hover:text-yellow-500 transition font-semibold"
              >
                Kurierfahrten
              </Link>
            </li>
            <li>
              <Link
                to="/flughafenfahrten"
                className="hover:text-yellow-500 transition font-semibold"
              >
                Flughafenfahrten
              </Link>
            </li>
            <li>
              <Link
                to="/krankenfahrten"
                className="hover:text-yellow-500 transition font-semibold"
              >
                Krankenfahrten
              </Link>
            </li>
            <li>
              <Link
                to="/kinderfahrten"
                className="hover:text-yellow-500 transition font-semibold"
              >
                Kinderfahrten
              </Link>
            </li>
          </ul>
        </div>

        {/* KONTAKT */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-yellow-500 font-semibold">
            Kontakt
          </h3>

          <ul className="space-y-4 text-white text-base">
            <li className="flex justify-center md:justify-start items-start gap-3">
              <MapPinIcon className="h-6 w-6 text-yellow-500" />
              <span className="font-semibold">Brahmsstraße 20j, 23556 Lübeck</span>
            </li>

            <li className="flex justify-center md:justify-start items-center gap-3">
              <EnvelopeIcon className="h-6 w-6 text-yellow-500" />
              <a
                href="mailto:azerhacili@yahoo.com"
                className="hover:text-yellow-500 underline-offset-4 hover:underline transition"
              >
                <span className="font-semibold">azerhacili@yahoo.com</span>
              </a>
            </li>

            <li className="flex justify-center md:justify-start items-center gap-3">
              <DevicePhoneMobileIcon className="h-6 w-6 text-yellow-500" />
              <a
                href="tel:+4915213491000"
                className="hover:text-yellow-500 underline-offset-4 hover:underline transition"
              >
                <span className="font-semibold">+49 15563293339</span>
              </a>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-yellow-500 font-semibold">
            Rechtliches
          </h3>
          <ul className="space-y-2 text-white text-base">
            <Link
                to="/impressum"
                className="hover:text-yellow-500 transition font-semibold"
              >
                Impressum
              </Link>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-yellow-400/60 bg-black py-4">
        <a
          href="https://www.instagram.com/shamshajili"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-white text-xs sm:text-sm hover:text-yellow-600 transition"
        >
          © {new Date().getFullYear()} Lübecks Taxi — Design & Entwicklung:{" "}
          <span className="font-semibold text-white">Shams Hajili</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
