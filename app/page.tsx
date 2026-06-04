"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";
import PageLoader from "@/components/PageLoader";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import OfficeSection from "@/components/OfficeSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2700); // wait until loader fade finishes

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <>
      <PageLoader loading={loading} />

      {showContent && (
        <motion.main
          initial={{ opacity: 0, y: 20, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <CustomCursor />
          <Navbar />
          <Hero />
          <TeamSection />
          <Services />
          <WhyChooseUs />
          <Testimonials />
          <OfficeSection />
          <ContactSection />
          <Footer />
        </motion.main>
      )}
    </>
  );
}