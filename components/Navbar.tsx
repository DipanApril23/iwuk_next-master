"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Offices", href: "#offices" },
  { label: "About Us", href: "#about-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-animate", {
        opacity: 0,
        y: -35,
        duration: 0.9,
        stagger: 0.07,
        ease: "power4.out",
      });

      ScrollTrigger.create({
        start: "top -30",
        end: 99999,
        onUpdate: (self) => {
          setIsScrolled(self.scroll() > 40);
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(target);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled
            ? "w-[95%] md:w-[90%] lg:w-[86%]"
            : "w-[97%] md:w-[94%] lg:w-[90%]"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
            isScrolled
              ? "bg-[#18294c]/80 border-white/10 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] py-3"
              : "bg-[#304a7c]/75 border-white/15 backdrop-blur-xl py-4"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-yellow-400/5 pointer-events-none" />

          <div className="relative px-5 md:px-8 flex items-center justify-between">
            {/* LOGO */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="nav-animate flex items-center gap-3 cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={140}
                height={42}
                className="object-contain"
                priority
              />

              <div className="hidden md:block">
                <h2 className="text-[#f2cf7b] font-bold text-xl leading-none">
                  Innerwork Advisors Limited
                </h2>
              </div>
            </motion.div>

            {/* DESKTOP MENU - now only visible on xl+ */}
            <div className="hidden 2xl:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 14,
                  }}
                  className="nav-animate group relative text-white/90 text-[15px] font-semibold hover:text-[#f2cf7b] transition-colors duration-300"
                >
                  {item.label}

                  <motion.span
                    className="absolute left-0 -bottom-2 h-[2px] rounded-full bg-[#f2cf7b]"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{
                      width: "100%",
                      opacity: 1,
                      boxShadow: "0 0 10px rgba(242,207,123,0.8)",
                    }}
                    transition={{ duration: 0.25 }}
                  />

                  <motion.span
                    className="absolute inset-0 -z-10 rounded-lg bg-white/5 blur-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{
                      opacity: 1,
                      scale: 1.15,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA + MOBILE BUTTON */}
            <div className="flex items-center gap-4">
              {/* CTA now only visible on xl+ */}
              <motion.a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(242,207,123,0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                className="nav-animate hidden 2xl:block rounded-xl bg-[#f2cf7b] px-6 py-3 font-bold text-[#1b2c4d] shadow-lg text-center"
              >
                Consultation
              </motion.a>

              {/* Hamburger visible below xl */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="2xl:hidden relative z-50 flex h-10 w-10 items-center justify-center"
              >
                <div className="flex w-6 flex-col gap-1.5">
                  <span
                    className={`h-0.5 bg-white transition-all duration-300 ${
                      mobileOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 bg-white transition-all duration-300 ${
                      mobileOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 bg-white transition-all duration-300 ${
                      mobileOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0a1224]/95 backdrop-blur-2xl 2xl:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-2xl font-semibold text-white hover:text-[#f2cf7b]"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.04 }}
                className="mt-6 rounded-xl bg-[#f2cf7b] px-8 py-4 font-bold text-[#1b2c4d] text-center"
              >
                Book Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}