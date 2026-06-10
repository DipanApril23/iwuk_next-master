"use client";

import { memo, useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import {
  Award,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   DATA — add new certificates here, Learn More tagline and
   View Award link update automatically for whichever card
   is currently active in the slider.
========================================================= */

const certificates = [
  {
    id: "01",
    title: "UK Enterprise Awards 2026",
    category: "Leading NRIs Problem Solving Services",
    region: "North West England",
    // Shown under the Learn More expand panel
    tagline: "Leading NRIs Problem Solving Services 2026 – North West England",
    image: "/Cirtificate1.webp",
    year: "2026",
  },
  // ↓ Example of a future certificate — just uncomment & fill in:
  // {
  //   id: "02",
  //   title: "UK Business Awards 2027",
  //   category: "Best Advisory Services",
  //   region: "Greater Manchester",
  //   tagline: "Best Advisory Services 2027 – Greater Manchester",
  //   image: "/Certificate2.webp",
  //   year: "2027",
  // },
];

const features = [
  "Dedicated award & media recognition",
  "Trusted by thousands of NRIs globally",
  "Proven track record of excellence",
];

/* =========================================================
   CERTIFICATE CARD
   — glareEnable is OFF on the Tilt component intentionally.
     The default react-parallax-tilt glare injects a flat
     <div> that ignores border-radius and shows a hard
     rectangular golden outline.  We replace it with a CSS
     conic-gradient shimmer that is clipped to the card shape.
========================================================= */

const CertificateCard = memo(({ item }: { item: (typeof certificates)[0] }) => {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1000}
      scale={1.015}
      transitionSpeed={1200}
      // ← glareEnable intentionally false — see comment above
      glareEnable={false}
      className="h-full w-full"
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="
          cert-card
          group
          relative
          flex
          flex-col
          overflow-hidden
          rounded-[20px]
          border
          border-[#f2cf7b]/20
          bg-gradient-to-br
          from-[#14213a]/95
          via-[#10192b]/95
          to-[#0c1422]/95
          p-5
          backdrop-blur-xl
          shadow-[0_14px_40px_rgba(0,0,0,0.35)]
          transition-colors
          duration-500
          hover:border-[#f2cf7b]/45
        "
      >
        {/*
          ── Custom shimmer effect ──────────────────────────
          A conic-gradient pseudo-layer that rotates on hover.
          Because it lives inside overflow-hidden it is clipped
          to the card's border-radius — no rectangular bleed.
        */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -inset-px
            rounded-[20px]
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            z-0
          "
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(242,207,123,0.12) 60deg, rgba(242,207,123,0.22) 120deg, rgba(242,207,123,0.12) 180deg, transparent 240deg)",
          }}
        />

        {/* Soft top-right corner glow — fully inside overflow-hidden */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -top-10
            -right-10
            h-28
            w-28
            rounded-full
            bg-[#f2cf7b]/[0.07]
            blur-2xl
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            z-0
          "
        />

        {/* Image Container */}
        <div className="relative z-10 mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
          <div className="absolute inset-3">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1422]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 rounded-lg border border-[#f2cf7b]/30 bg-[#14213a]/85 px-3 py-1.5 backdrop-blur-md">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[#f2cf7b]">
              <Star className="h-3 w-3 fill-[#f2cf7b]" />
              Winner
            </span>
          </div>
        </div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col">
          <h3 className="mb-2 text-lg font-bold leading-snug tracking-tight text-white sm:text-xl">
            {item.title}
          </h3>
          <div className="mb-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-[#f2cf7b] to-transparent" />
          <p className="text-sm font-medium text-[#f2cf7b] mb-1">{item.category}</p>
          <p className="text-xs text-white/55">{item.region}</p>
        </div>
      </motion.div>
    </Tilt>
  );
});
CertificateCard.displayName = "CertificateCard";

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CirtificationsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);

  const total = certificates.length;
  const hasMultiple = total > 1;
  const currentCert = certificates[activeIndex];

  /* ── Auto-play ─────────────────────────────────────────── */
  const startAutoPlay = useCallback(() => {
    if (!hasMultiple) return;
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
      setLearnMoreOpen((open) => (open ? false : open));
    }, 4000);
  }, [hasMultiple, total]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const goTo = (index: number) => {
    stopAutoPlay();
    setActiveIndex((index + total) % total);
    // Close Learn More panel when user manually navigates
    setLearnMoreOpen(false);
    startAutoPlay();
  };

  /* ── Parallax ──────────────────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  /* ── GSAP entrance animations ──────────────────────────── */
  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".anim-text",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        ".anim-feature",
        { opacity: 0, x: -18 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.09,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".anim-features-container",
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        ".certs-showcase",
        { opacity: 0, scale: 0.92, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.1)",
          scrollTrigger: {
            trigger: ".certs-showcase",
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#33456d]
        via-[#2a3a5c]
        to-[#1a2642]
        px-4
        py-20
        text-white
        sm:px-6
        md:px-8
        lg:py-28
      "
    >
      {/* Parallax bg glows */}
      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute right-[8%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#f2cf7b]/[0.04] blur-[110px]" />
        <div className="absolute left-[4%] bottom-[8%] h-[350px] w-[350px] rounded-full bg-[#f2cf7b]/[0.03] blur-[90px]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl" ref={contentRef}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16 items-center">

          {/* ── LEFT: TEXT CONTENT ─────────────────────── */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <div className="anim-text mb-5 inline-flex items-center gap-2 rounded-full border border-[#f2cf7b]/20 bg-[#f2cf7b]/10 px-4 py-2 backdrop-blur-xl w-fit">
              <Award className="h-4 w-4 text-[#f2cf7b]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#f2cf7b]">
                Recognition & Trust
              </span>
            </div>

            {/* Heading */}
            <h2 className="anim-text mb-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Award-Winning{" "}
              <span className="relative mt-1 block">
                <span className="absolute inset-0 bg-gradient-to-r from-[#f2cf7b]/15 to-transparent blur-lg rounded-lg" />
                <span className="relative bg-gradient-to-r from-[#f2cf7b] via-[#ffe6aa] to-[#f2cf7b] bg-clip-text text-transparent">
                  Advisory Firm
                </span>
              </span>
            </h2>

            <div className="anim-text mb-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#f2cf7b] to-transparent" />

            <p className="anim-text mb-7 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Recognised as the{" "}
              <strong className="font-semibold text-white">
                Leading NRIs Problem Solving Services 2026
              </strong>{" "}
              in North West England. We build our foundation on trust, credibility, and an
              unwavering commitment to excellence for our global clients.
            </p>

            {/* Features */}
            <ul className="anim-features-container mb-9 flex flex-col gap-3.5">
              {features.map((feature, i) => (
                <li key={i} className="anim-feature flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f2cf7b]/15 border border-[#f2cf7b]/20">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#f2cf7b]" />
                  </div>
                  <span className="text-sm font-medium text-white/85 sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="anim-text flex flex-wrap items-center gap-3">

              {/* Learn More — toggles an inline tagline panel */}
              <div className="flex flex-col gap-2">
                <motion.button
                  onClick={() => setLearnMoreOpen((v) => !v)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-2
                    overflow-hidden
                    rounded-full
                    bg-gradient-to-r
                    from-[#f2cf7b]
                    to-[#e5bc5b]
                    px-7
                    py-3
                    text-sm
                    font-bold
                    text-[#14213a]
                    shadow-[0_0_18px_rgba(242,207,123,0.25)]
                    transition-shadow
                    hover:shadow-[0_0_28px_rgba(242,207,123,0.45)]
                    w-fit
                  "
                >
                  <span className="relative z-10">Learn More</span>
                  <motion.span
                    animate={{ rotate: learnMoreOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative z-10"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                  <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                </motion.button>

                {/*
                  Tagline panel — reads `tagline` from the active certificate's
                  JSON entry so it auto-updates whenever a new cert is added.
                */}
                <AnimatePresence>
                  {learnMoreOpen && (
                    <motion.div
                      key={currentCert.id}
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="
                        flex
                        items-start
                        gap-3
                        rounded-2xl
                        border
                        border-[#f2cf7b]/20
                        bg-[#f2cf7b]/[0.07]
                        px-4
                        py-3
                        backdrop-blur-md
                        max-w-sm
                      ">
                        <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#f2cf7b]" />
                        <p className="text-sm font-medium leading-relaxed text-white/90">
                          {currentCert.tagline}
                        </p>
                        <button
                          onClick={() => setLearnMoreOpen(false)}
                          aria-label="Close"
                          className="ml-auto shrink-0 text-white/40 hover:text-white/80 transition-colors"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* View Award — always links to the currently visible certificate */}
              <motion.a
                href={currentCert.image}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.06]
                  px-7
                  py-3
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:bg-white/10
                  hover:border-white/30
                  self-start
                "
              >
                View Award
                <ExternalLink className="h-4 w-4 text-white/60 transition-colors group-hover:text-white" />
              </motion.a>
            </div>
          </div>
          {/* ── END LEFT ───────────────────────────────── */}

          {/* ── RIGHT: CERTIFICATE SHOWCASE WITH SLIDER ── */}
          <div className="certs-showcase flex items-center justify-center lg:justify-end">
            {/*
              overflow-hidden on this wrapper hard-clips everything:
              - the card's custom shimmer glow
              - the year badge
              - any Tilt transforms
              Nothing bleeds outside the rounded box.
            */}
            <div
              className="
                relative
                w-full
                max-w-[420px]
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.06]
                bg-white/[0.02]
                p-4
                sm:p-6
                backdrop-blur-2xl
              "
            >
              {/* Slide area */}
              <div
                className="relative w-full overflow-hidden rounded-[20px]"
                onMouseEnter={stopAutoPlay}
                onMouseLeave={startAutoPlay}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.38, ease: "easeInOut" }}
                  >
                    <CertificateCard item={currentCert} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Year badge — positioned inside overflow-hidden wrapper */}
              <motion.div
                key={`badge-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.45 }}
                className="
                  absolute
                  bottom-[4.5rem]
                  right-5
                  z-20
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#f2cf7b]/35
                  bg-gradient-to-br
                  from-[#14213a]
                  to-[#0c1422]
                  shadow-xl
                  sm:h-20
                  sm:w-20
                "
              >
                <div className="absolute inset-0 rounded-full border border-[#f2cf7b]/50" />
                <div className="text-center">
                  <span className="block text-sm font-black text-[#f2cf7b] sm:text-base">
                    {currentCert.year}
                  </span>
                  <span className="block text-[7px] font-bold uppercase tracking-wider text-white/75 sm:text-[9px]">
                    Winner
                  </span>
                </div>
              </motion.div>

              {/* Slider controls — only when more than 1 certificate */}
              {hasMultiple && (
                <div className="mt-4 flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => goTo(activeIndex - 1)}
                      aria-label="Previous certificate"
                      className="
                        flex h-8 w-8 items-center justify-center
                        rounded-full border border-white/15 bg-white/[0.06]
                        text-white/70 transition-all
                        hover:border-[#f2cf7b]/40 hover:bg-[#f2cf7b]/10 hover:text-[#f2cf7b]
                      "
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => goTo(activeIndex + 1)}
                      aria-label="Next certificate"
                      className="
                        flex h-8 w-8 items-center justify-center
                        rounded-full border border-white/15 bg-white/[0.06]
                        text-white/70 transition-all
                        hover:border-[#f2cf7b]/40 hover:bg-[#f2cf7b]/10 hover:text-[#f2cf7b]
                      "
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {certificates.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to certificate ${i + 1}`}
                        className={`
                          rounded-full transition-all duration-300
                          ${i === activeIndex ? "w-5 h-2 bg-[#f2cf7b]" : "w-2 h-2 bg-white/25 hover:bg-white/50"}
                        `}
                      />
                    ))}
                  </div>

                  <span className="text-xs font-medium text-white/40">
                    {activeIndex + 1} / {total}
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* ── END RIGHT ──────────────────────────────── */}

        </div>
      </div>
    </section>
  );
}