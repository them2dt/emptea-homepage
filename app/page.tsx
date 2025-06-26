'use client';
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Divider from "./components/Divider";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Reveal animation (1.2s) + brief pause (0.3s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Services />
          <Divider />
          <Features />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
          <Divider />
          <CallToAction />
          <Divider />
          <Footer />
        </>
      )}
    </main>
  );
}
