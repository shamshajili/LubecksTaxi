import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const container = document.getElementById("root");
if (!container) throw new Error("Root element #root not found");

// ENV-dən site key-i oxu
const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

if (!siteKey) {
  console.error("❌ RECAPTCHA SITE KEY tapılmadı! .env.local faylını yoxla.");
}

createRoot(container).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey!}
      scriptProps={{ async: true, defer: true }}
    >
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
