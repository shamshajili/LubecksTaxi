import React, { useEffect, useState } from "react";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11 19a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-2.88-8.82A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 19l1-3a7 7 0 1 1 2.6 2.6L5 19z" />
      <path d="M10.5 9.5c.3-.3.4-.3.7 0l1 1c.2.2.3.4.2.7l-.1.3a1.2 1.2 0 0 1-.3.5c-.2.2-.2.4 0 .6l.3.4c.3.3.5.5.8.7.3.2.5.3.7.1l.4-.3c.3-.2.5-.2.8 0l1 .6c.3.2.4.4.3.7-.1.4-.5 1-1.2 1.3-.6.3-1.4.3-2.3 0-1-.3-1.9-.9-2.8-1.7-.8-.8-1.4-1.7-1.7-2.6-.3-.9-.3-1.7 0-2.3.3-.7.9-1.1 1.3-1.2.3 0 .6.1.8.3l.6 1z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

export default function FloatingContacts() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">

      <a
        href="tel:+4915563293339"
        className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-orange-600 transition"
      >
        <PhoneIcon />
      </a>

      <a
        href="https://wa.me/4915563293339"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-green-600 transition"
      >
        <WhatsappIcon />
      </a>

      <a
        href="mailto:azerhacili@luebecks-taxi.de"
        className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
      >
        <MailIcon />
      </a>

    </div>
  );
}
