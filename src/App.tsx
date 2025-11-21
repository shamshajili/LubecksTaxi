import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import TaxiFlowSection from "./components/TaxiFlowSection";
import FloatingContacts from "./components/FloatingContacts";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ReviewsSection from "./components/ReviewsSection";
import AdminPage from "./admin/AdminPage";

// Pages
import Personenfahrten from "./pages/Personenfahrten";
import Kurierfahrten from "./pages/Kurierfahrten";
import Flughafenfahrten from "./pages/Flughafenfahrten";
import Krankenfahrten from "./pages/Krankenfahrten";
import Kinderfahrten from "./pages/Kinderfahrten";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-green-900 flex flex-col">

      {/* Navbar */}
      <Navbar />

      <FloatingContacts />

      {/* Content */}
      <main className="flex-1 pt-24 md:pt-28 bg-white">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TaxiFlowSection />
      <ReviewsSection />
      <BookingSection />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        {/* PERSONENFAHRTEN */}
        <Route
          path="/personenfahrten"
          element={
            <Layout>
              <Personenfahrten />
            </Layout>
          }
        />

        {/* KURIERFAHRTEN */}
        <Route
          path="/kurierfahrten"
          element={
            <Layout>
              <Kurierfahrten />
            </Layout>
          }
        />

        {/* FLUGHAFENFAHRTEN */}
        <Route
          path="/flughafenfahrten"
          element={
            <Layout>
              <Flughafenfahrten />
            </Layout>
          }
        />

        {/* KRANKENFAHRTEN */}
        <Route
          path="/krankenfahrten"
          element={
            <Layout>
              <Krankenfahrten />
            </Layout>
          }
        />

        {/* KINDERFAHRTEN */}
        <Route
          path="/kinderfahrten"
          element={
            <Layout>
              <Kinderfahrten />
            </Layout>
          }
        />

        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
