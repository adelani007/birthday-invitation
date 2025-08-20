// src/App.jsx
import {   Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ScrollToTopButton from "./components/ScrollToTopButton";
import PageWrapper from "./components/PageWrapper";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Rsvp from "./pages/Rsvp";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/details" element={<PageWrapper><Details /></PageWrapper>} />
        <Route path="/rsvp" element={<PageWrapper><Rsvp /></PageWrapper>} />
        
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes /> {/* ✅ smooth animated page transitions */}
        </main>
        <Footer />
        {/* <ScrollToTopButton /> */}
      </div>
    
  );
}
