"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, Calendar, ArrowUpRight } from "lucide-react";

export default function Footer() {
  // Hydration-Safe State Management
 const currentYear = new Date().getFullYear();

  // Premium Unique Scroll Trigger: Smooth Cinematic Lift & Tilt
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 8, // Creates a subtle 3D tilt as it rises
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom premium cubic-bezier ease
        staggerChildren: 0.08, // Staggers sequential child animations
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer id="about-us" className="relative w-full bg-[#131b2e] text-slate-200 overflow-hidden py-4 md:py-5 px-6 md:px-12 lg:px-24 border-t border-white/[0.05] [perspective:1000px]">
      {/* Background Ambient Depth */}
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-amber-500/[0.02] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-500/[0.02] rounded-full blur-[80px] pointer-events-none" />

      {/* Main Perspective/Scroll Wrapper */}
      <motion.div
        className="max-w-7xl mx-auto relative z-10 flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Top Section: Hook Statement */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl"
        >
          <p className="text-base md:text-lg font-normal leading-relaxed text-slate-200 tracking-wide">
            Whether you need to resolve a property dispute, draft a
            will, recover funds, or navigate tax compliance, our team
            ensures{" "}
            <span className="font-semibold text-amber-400 border-b border-amber-400/60 pb-0.5 inline">
              swift, confidential, and expert service.
            </span>
          </p>
        </motion.div>

        {/* Middle Section: Premium Interactive Glass Action Elements */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-2.5 w-full"
        >
          {/* Phone Link */}
          <motion.a
            href="tel:+4407941485199"
            whileHover={{
              y: -2,
              backgroundColor: "rgba(255,255,255,0.03)",
            }}
            className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-md transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                <Phone className="w-3.5 h-3.5" />
              </div>

              <div>
                <p className="text-[9px] text-slate-400 font-bold tracking-wider uppercase mb-0.5">
                  Call Us (UK)
                </p>

                <p className="text-xs font-medium text-white group-hover:text-amber-400 transition-colors">
                  +44 7941 485199 / +91 9830232051
                </p>
              </div>
            </div>

            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:text-amber-400 transition-all" />
          </motion.a>

          {/* Email Link */}
          <motion.a
            href="mailto:info@innerworkadvisors.co.uk"
            whileHover={{
              y: -2,
              backgroundColor: "rgba(255,255,255,0.03)",
            }}
            className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-md transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                <Mail className="w-3.5 h-3.5" />
              </div>

              <div>
                <p className="text-[9px] text-slate-400 font-bold tracking-wider uppercase mb-0.5">
                  Email Address
                </p>

                <p className="text-xs font-medium text-white group-hover:text-amber-400 transition-colors break-all">
                  info@innerworkadvisors.co.uk
                </p>
              </div>
            </div>

            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:text-amber-400 transition-all" />
          </motion.a>

          {/* Consultation Link */}
          <motion.a
            href="#contact"
            whileHover={{
              y: -2,
              backgroundColor: "rgba(255,255,255,0.03)",
            }}
            className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-md transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                <Calendar className="w-3.5 h-3.5" />
              </div>

              <div>
                <p className="text-[9px] text-slate-400 font-bold tracking-wider uppercase mb-0.5">
                  Consultation
                </p>

                <p className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
                  Book a Consultation
                </p>
              </div>
            </div>

            <span className="text-[9px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-md group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
              Click Here
            </span>
          </motion.a>
        </motion.div>

        {/* Minimal Divider */}
        <motion.div
          variants={itemVariants}
          className="w-full h-[1px] bg-white/[0.04]"
        />

        {/* Bottom Sub-Footer: Identity and Timeline Integrity */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-400"
        >
          {/* Logo Brand Frame */}
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* Safe arbitrary values for accurate, custom dimensions */}
            <div className="relative w-15 h-15 opacity-90 group-hover:opacity-100 transition-opacity">
              <Image
                src="/logo.png"
                alt="Innerwork Advisors Logo"
                fill
                className="object-contain"
                sizes="36px"
                priority
              />
            </div>

            <span className="font-medium tracking-wide text-slate-300 group-hover:text-white transition-colors text-xs">
              Innerwork Advisors Limited
            </span>
          </div>

          {/* Self-Correcting System Timestamp */}
          <p className="tracking-wide text-slate-500">
            © {currentYear} Innerwork Advisors Limited. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
