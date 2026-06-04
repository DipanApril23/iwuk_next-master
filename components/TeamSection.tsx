"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Optimized Counter Component with intersection observer
function Counter({
  from = 0,
  to,
  suffix = "",
  duration = 2,
}: {
  from?: number;
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const count = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [count]);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const controls = animate(count, to, {
              duration,
              ease: [0.32, 0.72, 0, 1],
            });
            return () => controls.stop();
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, to, duration, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

// Premium Stat Card Component
function StatCard({
  number,
  suffix,
  label,
  delay,
}: {
  number: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 text-center backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-[#f2cf7b]/30 hover:shadow-2xl"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f2cf7b]/0 to-[#f2cf7b]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <h3 className="relative text-4xl font-bold text-[#f2cf7b] md:text-5xl">
        <Counter to={number} suffix={suffix} duration={2.5} />
      </h3>
      <p className="relative mt-3 text-sm font-medium uppercase tracking-wide text-white/70 md:text-base">
        {label}
      </p>
    </motion.div>
  );
}

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile devices
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Optimized reveal animations
      const revealElements = document.querySelectorAll(".team-reveal");

      revealElements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Enhanced image animation
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.1, opacity: 0, filter: "blur(10px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = useMemo(
    () => [
      { number: 100, suffix: "+", label: "Clients Served", delay: 0 },
      { number: 98, suffix: "%", label: "Success Rate", delay: 0.1 },
      { number: 24, suffix: "/7", label: "Client Support", delay: 0.2 },
    ],
    [],
  );

  return (
    <motion.section
      id="team"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#2a3a5c] via-[#33456d] to-[#2a3a5c] px-4 py-16 md:px-8 md:py-24 lg:py-32"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#f2cf7b]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}

        <div className="relative text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            <div
              className="
        relative
        inline-flex
        items-center
        gap-2
        overflow-hidden
        rounded-full
        border
        border-[#f2cf7b]/20
        bg-[#f2cf7b]/10
        px-4
        py-2
        backdrop-blur-xl
        sm:px-5
      "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f2cf7b]/5 via-[#ffe6aa]/10 to-[#f2cf7b]/5" />

              <span
                className="
          relative
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#f2cf7b]
          sm:text-xs
        "
              >
                Our Excellence
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-6"
          >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-32 w-72 -translate-x-1/2 -translate-y-1/2 bg-[#f2cf7b]/10 blur-[100px]" />

            <h2
              className="
        relative
        mx-auto
        max-w-6xl
        px-2
        text-4xl
        font-bold
        leading-[1.1]
        tracking-tight
        text-white
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
      "
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Meet{" "}
              <span className="relative inline-block">
                {/* Premium Glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#f2cf7b]/20 to-[#ffe6aa]/20 blur-2xl" />

                {/* Gradient Text */}
                <span className="relative bg-gradient-to-r from-[#f2cf7b] via-[#ffe6aa] to-[#f2cf7b] bg-clip-text text-transparent">
                  Our Team
                </span>
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
      mx-auto
      mt-6
      max-w-3xl
      px-4
      text-sm
      leading-relaxed
      text-white/75
      sm:text-base
      md:text-lg
      lg:text-xl
    "
            style={{
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            For years, we have built a legacy of success based on integrity,
            dedication, and relentless advocacy. Our proven track record
            demonstrates our ability to navigate complex legal challenges and
            achieve favorable results.
          </motion.p>

          {/* Animated Underline */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: "8rem",
              opacity: 1,
            }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
      relative
      mx-auto
      mt-8
      h-[3px]
      rounded-full
      bg-gradient-to-r
      from-[#f2cf7b]
      via-[#ffe6aa]
      to-[#f2cf7b]
      sm:w-28
      md:w-32
    "
          >
            {/* Underline Glow */}
            <div className="absolute inset-0 rounded-full bg-[#f2cf7b] blur-md opacity-70" />
          </motion.div>

          {/* Floating Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
      mx-auto
      mt-4
      h-20
      w-20
      rounded-full
      bg-[#f2cf7b]/10
      blur-3xl
    "
          />
        </div>

        {/* Premium Image Section with Parallax */}
        <motion.div
          ref={imageRef}
          className="team-image group relative mx-auto mt-12 max-w-5xl md:mt-16 lg:mt-20"
        >
          {/* Animated Border Gradient */}
          <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-[#f2cf7b]/0 via-[#f2cf7b]/50 to-[#f2cf7b]/0 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#f2cf7b]/30 via-white/20 to-[#f2cf7b]/30" />

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] p-1 backdrop-blur-xl">
            <motion.div
              initial={false}
              animate={{}}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
              }}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                src="/team.png"
                alt="Professional legal team showcasing expertise and dedication"
                width={1920}
                height={1080}
                quality={75}
                priority
                placeholder="blur"
                blurDataURL="/team.png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="h-auto w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-105"
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                }}
              />

              {/* Gradient Overlay for Better Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          </div>

          {/* Premium Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, x: 0 }}
            className="absolute -bottom-6 left-4 rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 to-white/10 p-3 backdrop-blur-2xl shadow-2xl md:-bottom-6 md:left-6 md:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#f2cf7b]/20 flex items-center justify-center md:h-12 md:w-12">
                <svg
                  className="h-5   w-5 text-[#f2cf7b] md:h-6 md:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 md:text-xs">
                  Trusted Since
                </p>
                <h3 className="text-xl font-bold text-[#f2cf7b] md:text-2xl">
                  2016
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Top Right Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
            viewport={{ once: true }}
            className="absolute -top-4 right-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-xl md:-top-6 md:right-6 md:px-4 md:py-2"
          >
            <span className="text-xs font-semibold text-white/90 md:text-sm">
              ⭐ 4.9 ★ Rating
            </span>
          </motion.div>
        </motion.div>

        {/* Statistics Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 sm:gap-6 md:mt-20 md:grid-cols-3 lg:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center md:mt-20"
        >
          <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#f2cf7b] to-[#ffe6aa] px-8 py-3 text-sm font-semibold text-[#2a3a5c] transition-all duration-300 hover:shadow-2xl hover:shadow-[#f2cf7b]/25 md:px-10 md:py-4 md:text-base">
            <span className="relative z-10">Meet Our Experts</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#ffe6aa] to-[#f2cf7b] transition-transform duration-300 group-hover:translate-x-0" />
          </button>
        </motion.div> */}
      </div>
    </motion.section>
  );
}
