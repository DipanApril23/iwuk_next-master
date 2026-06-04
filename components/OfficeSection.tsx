"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Phone,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface OfficeCardProps {
  title: string;
  address: string;
  badge?: string;
  mapEmbedUrl: string;
  mapLink: string;
  phones: string[];
}

const officeData: OfficeCardProps[] = [
  {
    title: "Clockwise Linley House",
    address: "Dickinson Street, Manchester. M1 4LF  United Kingdom.",
    badge: "WORKING OFFICE",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.3446051515915!2d-2.2415174!3d53.4748117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c206bb1a0f%3A0x6b840e6c6ffc259a!2sClockwise%20Linley%20House!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    mapLink:
      "https://www.google.com/maps?q=Clockwise+Linley+House,+Dickinson+Street,+Manchester+M1+4LF",
    phones: ["07941 485199", "0161 676 2361"],
  },
  {
    title: "Martin Burn House",
    address: "1 R.N. Mukherjee Rd, Gr Floor, Kolkata 700001",
    badge: "WORKING OFFICE",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.11674395679!2d88.3518335!3d22.5747443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a4ca6389f3%3A0x9c4f74d08b301b17!2sMartin%20Burn%20House!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    mapLink:
      "https://www.google.com/maps/place/Innerwork+Legal+Services/@22.5721802,88.3490724,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277fbfce91995:0xb2fec491ace6014!8m2!3d22.5721753!4d88.3516473!16s%2Fg%2F11x84szqlw?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D",
    phones: ["+91 98302 32051", "+91 90739 32051", "+91 90736 72051 "],
  },
  {
    title: "Innerwork Advisors LLP",
    address: "22, Sukeas Lane 5th Floor, Kolkata 700001",
    badge: "REGISTERED OFFICE",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.944256247926!2d88.3512874!3d22.5811634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b06b7bd4ab%3A0x2863795a2307ef05!2s22%2C%20Sukeas%20Ln%2C%20Kolkata%2C%20West%20Bengal%20700001!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Innerwork+Advisors+LLP%2C+5th+Floor%2C+22%2C+Sukeas+Ln%2C+Kolkata+700001",
    phones: ["+91 98302 32051", "+91 90739 32051", "+91 90736 72051"],
  },
  {
    title: "BJ-74, Salt Lake City",
    address: "Sector II, Kolkata - 700091 Near Araksha Bhawan",
    badge: "WORKING OFFICE",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2818968953106!2d88.4172551!3d22.5686008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ad67c2d829%3A0x82db0e73775ec0a5!2sBJ%20Block%2C%20Sector%20II%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700091!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    mapLink:
      "https://maps.google.com/?q=BJ-74+Salt+Lake+City+Sector+II+Kolkata+700091",
    phones: ["+91 98302 32051", "+91 90739 32051", "+91 90736 72051"],
  },
];

export default function PremiumOfficeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".main-office-box", {
        opacity: 0,
        y: 120,
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".main-office-box",
          start: "top 75%",
        },
      });

      gsap.from(".office-card", {
        opacity: 0,
        y: 60,
        scale: 0.9,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".office-grid",
          start: "top 80%",
        },
      });

      gsap.to(".floating-orb-1", {
        y: -180,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
        },
      });

      gsap.to(".floating-orb-2", {
        y: 160,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="offices"
      className="relative overflow-hidden bg-[#233554] py-24 md:py-28"
    >
      {/* BACKGROUND */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="floating-orb-1 absolute top-10 left-[-120px] w-[340px] h-[340px] rounded-full bg-[#E5A93C]/10 blur-[120px]" />
        <div className="floating-orb-2 absolute bottom-0 right-[-120px] w-[360px] h-[360px] rounded-full bg-[#E5A93C]/10 blur-[130px]" />
      </motion.div>

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
  initial={{
    opacity: 0,
    y: 30,
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
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative mb-14 text-center sm:mb-20"
>
  {/* Background Glow */}
  <div
    className="
      absolute
      left-1/2
      top-1/2
      h-40
      w-[28rem]
      -translate-x-1/2
      -translate-y-1/2
      bg-[#f2cf7b]/10
      blur-[120px]
    "
  />

  {/* Badge */}
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.9,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
    }}
    viewport={{
      once: false,
    }}
    transition={{
      duration: 0.5,
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
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#f2cf7b]/5
          via-[#ffe6aa]/10
          to-[#f2cf7b]/5
        "
      />

      <Sparkles className="relative h-4 w-4 text-[#f2cf7b]" />

      <span
        className="
          relative
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.22em]
          text-[#f2cf7b]
          sm:text-xs
        "
      >
      Offices
      </span>
    </div>
  </motion.div>

  {/* Heading */}
  <motion.h2
    initial={{
      opacity: 0,
      y: 30,
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
      duration: 0.7,
      delay: 0.08,
    }}
    className="
      relative
      mx-auto
      mt-6
      max-w-6xl
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
    Our{" "}
    <span className="relative inline-block">
      <span
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#f2cf7b]/20
          via-[#ffe6aa]/20
          to-[#f2cf7b]/20
          blur-2xl
        "
      />

      <span
        className="
          relative
          bg-gradient-to-r
          from-[#f2cf7b]
          via-[#ffe6aa]
          to-[#f2cf7b]
          bg-clip-text
          text-transparent
        "
      >
       Presence{" "}
      </span>
    </span>
  </motion.h2>

  {/* Description */}
  <motion.p
    initial={{
      opacity: 0,
      y: 18,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: false,
    }}
    transition={{
      duration: 0.6,
      delay: 0.15,
    }}
    className="
      mx-auto
      mt-6
      max-w-2xl
      text-sm
      leading-relaxed
      text-white/75
      sm:text-base
      md:text-lg
    "
  >
    Trusted legal and consultancy solutions for NRIs
    with excellence, transparency and global support.
  </motion.p>

  {/* Underline */}
  <motion.div
    initial={{
      width: 0,
      opacity: 0,
    }}
    whileInView={{
      width: "7rem",
      opacity: 1,
    }}
    viewport={{
      once: false,
    }}
    transition={{
      duration: 0.8,
      delay: 0.22,
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
    "
  >
    <div
      className="
        absolute
        inset-0
        rounded-full
        bg-[#f2cf7b]
        opacity-60
        blur-md
      "
    />
  </motion.div>

  {/* Soft Glow */}
  <motion.div
    animate={{
      scale: [1, 1.05, 1],
      opacity: [0.15, 0.3, 0.15],
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
</motion.div>


        {/* MAIN BOX */}
        <div className="main-office-box relative rounded-[34px] border border-white/10 bg-[rgba(23,42,69,0.72)] backdrop-blur-2xl p-4 md:p-7 lg:p-8 overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
          {/* Animated Shine */}
          <div className="absolute top-0 left-[-120%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-[shine_10s_linear_infinite]" />

          {/* GRID */}
          <div className="office-grid grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
            {officeData.map((office, idx) => (
              <OfficeCard key={idx} {...office} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficeCard({
  title,
  address,
  badge,
  mapEmbedUrl,
  mapLink,
  phones,
}: OfficeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]));
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]));

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.35 },
      }}
      className="office-card group relative"
    >
      {/* Glow */}
      <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-[#E5A93C]/40 via-transparent to-[#E5A93C]/20 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700" />

      {/* CARD */}
      <div className="relative h-full rounded-[28px] border border-white/10 bg-[#172A45]/90 backdrop-blur-xl overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
        {/* Hover Border */}
        <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-[#E5A93C]/30 transition-all duration-500" />

        {/* Top Line */}
        <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent transition-all duration-700" />

        {/* Background Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[radial-gradient(circle_at_top_right,rgba(229,169,60,0.12),transparent_45%)]" />

        <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#E5A93C] transition-colors duration-500">
                {title}
              </h3>
            </div>

            <ArrowUpRight className="w-5 h-5 text-[#E5A93C] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
          </div>

          {badge && (
            <div className="mb-5">
              <span className="inline-flex rounded-full border border-[#E5A93C]/20 bg-[#E5A93C]/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#E5A93C]">
                {badge}
              </span>
            </div>
          )}

          {/* ADDRESS */}
          <div className="flex items-start gap-3 mb-6">
            <div className="min-w-[38px] h-[38px] rounded-xl bg-[#E5A93C]/10 border border-[#E5A93C]/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-[#E5A93C]" />
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              {address}
            </p>
          </div>

          {/* MAP */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 h-[230px] sm:h-[250px] mb-6">
            <iframe
              src={mapEmbedUrl}
              loading="lazy"
              allowFullScreen
              className="w-full h-full border-0 grayscale group-hover:grayscale-0 scale-[1.02] group-hover:scale-110 transition-all duration-[1800ms]"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172A45]/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* PHONE */}
          <div className="space-y-3 mb-7">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Contact
            </span>

            {phones.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#E5A93C] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-[#E5A93C]/20 group-hover:bg-[#E5A93C]/10 transition-all duration-500">
                  <Phone className="w-3.5 h-3.5" />
                </div>

                {phone}
              </a>
            ))}
          </div>

          {/* BUTTON */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto relative overflow-hidden rounded-2xl bg-[#E5A93C] px-6 py-4 text-[#172A45] font-black uppercase tracking-[0.18em] text-[11px] flex items-center justify-center gap-3 group/button"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/button:translate-y-0 transition-transform duration-500" />

            <span className="relative z-10">Open Maps</span>

            <ExternalLink className="relative z-10 w-4 h-4 group-hover/button:rotate-45 transition-transform duration-500" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
