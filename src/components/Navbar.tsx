import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import mainlogo from "../assets/images/lubeckslogo.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* DESKTOP NAV */}
      <nav
        className="
          fixed top-0 left-0 w-full z-50 
          bg-white text-slate-900 
          px-6 md:px-10 py-4 
          shadow-md border-b border-yellow-400
        "
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO LEFT */}
          <div className="flex items-center gap-3">
            <Link to="/" onClick={handleLinkClick}>
              <img
                src={mainlogo}
                alt="Lübecks Taxi"
                className="w-24 h-24 md:w-28 md:h-28 object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            <li>
              <Link
                to="/personenfahrten"
                className="text-slate-800 hover:text-yellow-500 transition"
                onClick={handleLinkClick}
              >
                Personenfahrten
              </Link>
            </li>
            <li>
              <Link
                to="/kurierfahrten"
                className="text-slate-800 hover:text-yellow-500 transition"
                onClick={handleLinkClick}
              >
                Kurierfahrten
              </Link>
            </li>
            <li>
              <Link
                to="/flughafenfahrten"
                className="text-slate-800 hover:text-yellow-500 transition"
                onClick={handleLinkClick}
              >
                Flughafenfahrten
              </Link>
            </li>
            <li>
              <Link
                to="/krankenfahrten"
                className="text-slate-800 hover:text-yellow-500 transition"
                onClick={handleLinkClick}
              >
                Krankenfahrten
              </Link>
            </li>
            <li>
              <Link
                to="/kinderfahrten"
                className="text-slate-800 hover:text-yellow-500 transition"
                onClick={handleLinkClick}
              >
                Kinderfahrten
              </Link>
            </li>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setOpen(true)}
          >
            <Bars3Icon className="w-8 h-8 mr-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 bg-white text-slate-900 z-50 
          transform transition-all duration-300 
          ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        {/* HEADER WITH LOGO */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-yellow-400">
          <div className="flex-1 flex justify-center">
            <img
              src={mainlogo}
              alt="logo"
              className="w-28 h-28 object-contain"
            />
          </div>

          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="w-8 h-8 mr-4 text-slate-900" />
          </button>
        </div>

        {/* MENU ITEMS */}
        <ul className="flex flex-col items-center mt-10 gap-6 text-xl font-medium">
          <li>
            <Link
              to="/personenfahrten"
              className="hover:text-yellow-500 transition"
              onClick={handleLinkClick}
            >
              Personenfahrten
            </Link>
          </li>
          <li>
            <Link
              to="/kurierfahrten"
              className="hover:text-yellow-500 transition"
              onClick={handleLinkClick}
            >
              Kurierfahrten
            </Link>
          </li>
          <li>
            <Link
              to="/flughafenfahrten"
              className="hover:text-yellow-500 transition"
              onClick={handleLinkClick}
            >
              Flughafenfahrten
            </Link>
          </li>
          <li>
            <Link
              to="/krankenfahrten"
              className="hover:text-yellow-500 transition"
              onClick={handleLinkClick}
            >
              Krankenfahrten
            </Link>
          </li>
          <li>
            <Link
              to="/kinderfahrten"
              className="hover:text-yellow-500 transition"
              onClick={handleLinkClick}
            >
              Kinderfahrten
            </Link>
          </li>
        </ul>

        {/* CONTACT BOX */}
        <div className="mt-12 px-8">
          <div className="bg-slate-100 p-5 rounded-2xl shadow-md border border-yellow-400/60">
            <div className="flex flex-col gap-3 text-slate-900">

              <a
                href="tel:+4915213491000"
                className="flex items-center gap-3 hover:text-yellow-600"
              >
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.1.83.32 1.64.65 2.41a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +49 1521 3491000
              </a>

              <a
                href="mailto:azerhacili@yahoo.com"
                className="flex items-center gap-3 hover:text-yellow-600"
              >
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
                azerhacili@yahoo.com
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
