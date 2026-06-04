"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".hero-bg", {
        scale: 1.2,
        opacity: 0,
        duration: 1.6,
      })
        .from(
          ".hero-badge",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=1.1"
        )
        .from(
          ".hero-line",
          {
            yPercent: 120,
            opacity: 0,
            stagger: 0.18,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          ".hero-text",
          {
            y: 30,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
          },
          "-=0.7"
        )
        .from(
          ".hero-btn",
          {
            scale: 0.9,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(
          ".hero-pill",
          {
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
          },
          "-=0.4"
        );

      gsap.to(".hero-bg", {
        scale: 1.05,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden text-white"
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/contact-us.png"
          alt="background"
          className="hero-bg h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
      </div>

      {/* grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* content */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 min-h-screen flex items-center justify-center px-5"
      >
        <div className="max-w-5xl mx-auto text-center pt-28 pb-20">
          {/* badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md mb-7">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-gray-200">
              UK COMPANY REGISTRATION: 16609536
            </span>
          </div>

          {/* heading */}
          <h1 className="mb-7 overflow-hidden">
            <span className="hero-line block text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              NRI Legal &
            </span>

            <span className="hero-line block text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-400">
              Advisory Services
            </span>

            <span className="hero-line block text-4xl sm:text-5xl md:text-7xl font-bold">
              UK Office
            </span>
          </h1>

          {/* subtitle */}
          <p className="hero-text text-base sm:text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto mb-4 px-2">
            Your bridge between the UK and India’s legal, financial &
            property systems.
          </p>

          {/* desc */}
          <p className="hero-text text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed px-2">
            At Innerwork Advisors LLP (India) and Innerwork Advisors Limited
            (UK), we help{" "}
            <span className="text-yellow-400 font-medium">
              Non-Resident Indians (NRIs)
            </span>{" "}
            resolve India-based legal, financial, and property matters.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="hero-btn w-full sm:w-auto px-8 py-4 rounded-full bg-yellow-400 text-[#1b2c4d] font-semibold shadow-[0_10px_40px_rgba(250,204,21,0.25)]"
            >
              Book Consultation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="hero-btn w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md font-medium"
            >
              Call UK: +44 7941 485199
            </motion.button>
          </div>

          {/* pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Face-to-face consultations in UK",
              "On-ground representation in India",
              "Prompt & lawful solutions",
              "Private Investigation & Forensic Services",
            ].map((item) => (
              <div
                key={item}
                className="hero-pill px-4 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-xs sm:text-sm text-gray-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
