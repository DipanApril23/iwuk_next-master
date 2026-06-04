"use client";

import { memo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";

import {
  Home,
  Landmark,
  BadgeDollarSign,
  FileText,
  Shield,
  Scale,
  ShieldCheck,
  ScrollText,
  FileSearch,
  Search,
  Sparkles,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TYPES
========================================================= */

type ServiceItemType = {
  icon: LucideIcon;
  title: string;
  points: string[];
};

type ServiceSectionType = {
  category: string;
  items: ServiceItemType[];
};

/* =========================================================
   DATA
========================================================= */

const services: ServiceSectionType[] = [
  {
    category: "Property & Finance",
    items: [
      {
        icon: Home,
        title: "Property & Real Estate Solutions",
        points: [
          "Buy, sell, or lease property in India without leaving the UK.",
          "Resolve property disputes: ownership, inheritance, tenancy issues.",
          "Navigate property taxes, registration, and legal compliance.",
        ],
      },
      {
        icon: Landmark,
        title: "Banking & Financial Dispute Resolution",
        points: [
          "Assistance in fund recovery under FEMA.",
          "Support for loan, investment, or transaction disputes.",
        ],
      },
      {
        icon: BadgeDollarSign,
        title: "NRI Taxation Services",
        points: [
          "Advice on income and wealth tax in India & UK.",
          "Double Taxation Avoidance (DTAA) strategies.",
        ],
      },
    ],
  },
  {
    category: "Legal & Disputes",
    items: [
      {
        icon: FileText,
        title: "Inheritance & Succession Planning",
        points: [
          "Guidance on wills, probate, and smooth transfer of assets.",
          "Legal support for succession of family property in India.",
        ],
      },
      {
        icon: Scale,
        title: "Criminal & Civil Litigation for NRIs",
        points: ["Legal defense or representation in Indian courts."],
      },
      {
        icon: Shield,
        title: "Consumer Protection Cases",
        points: [
          "Representation in consumer disputes against Indian companies.",
        ],
      },
      {
        icon: ScrollText,
        title: "Legal Documentation & Verification",
        points: [
          "Drafting and validating Power of Attorney, contracts, affidavits, and more.",
        ],
      },
    ],
  },
  {
  category: "Private Investigation & Forensic Services",
  items: [
    {
      icon: Search,
      title: "Investigation Services",
      points: [
        "Uncover facts through professional and discreet investigations.",
        "Gather and verify evidence for legal and personal matters.",
        "Conduct detailed background and due diligence checks.",
      ],
    },
    {
      icon: FileSearch,
      title: "Forensic & Evidence Analysis",
      points: [
        "Analyze documents and records for authenticity.",
        "Support legal cases with evidence-based findings.",
        "Provide detailed forensic reports and assessments.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Personal Security Services",
      points: [
        "Protect individuals, families, and valuable assets.",
        "Assess security risks and recommend safeguards.",
        "Deliver customized protection solutions.",
      ],
    },
    {
      icon: Scale,
      title: "Risk & Compliance Advisory",
      points: [
        "Identify potential threats and vulnerabilities.",
        "Support accountability and regulatory compliance.",
        "Provide strategic guidance for risk mitigation.",
      ],
    },
  ],
},
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = memo(({ item }: { item: ServiceItemType }) => {
  const Icon = item.icon;

  return (
    <Tilt
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      perspective={1200}
      transitionSpeed={1200}
      scale={1.015}
      glareEnable={false}
      gyroscope
      className="h-full"
    >
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.25,
        }}
        whileHover={{
          y: -6,
          transition: {
            duration: 0.25,
          },
        }}
        className="
          service-card-gsap
          group
          relative
          h-full
          overflow-hidden
          rounded-2xl
          border
          border-yellow-400/15
          bg-[#2d3650]/95
          p-5
          sm:p-6
          lg:p-7
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
          transition-all
          duration-500
          hover:border-yellow-400/35
          hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]
          will-change-transform
          backdrop-blur-xl
        "
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {/* Premium Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute -top-24 right-0 w-44 h-44 bg-yellow-400/10 rounded-full blur-3xl" />
        </div>

        {/* Border Shine */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            variants={textVariants}
            custom={0.05}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="flex items-start gap-4 mb-5"
          >
            <div
              className="
                flex-shrink-0
                rounded-xl
                border
                border-yellow-400/20
                bg-yellow-400/10
                p-2.5
                sm:p-3
                transition-all
                duration-300
                group-hover:bg-yellow-400/15
                group-hover:border-yellow-400/35
              "
            >
              <Icon className="w-5 h-5 text-yellow-400 sm:w-6 sm:h-6" />
            </div>

            <div className="flex-1 min-w-0">
              <h4
                className="
                  text-[17px]
                  sm:text-[18px]
                  lg:text-[20px]
                  font-semibold
                  leading-snug
                  tracking-tight
                  text-white
                "
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                {item.title}
              </h4>
            </div>

            <ArrowUpRight
              size={16}
              className="
                flex-shrink-0
                text-white/30
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-yellow-400
              "
            />
          </motion.div>

          {/* Points */}
          <ul className="space-y-3">
            {item.points.map((point, index) => (
              <motion.li
                key={`${item.title}-${index}`}
                variants={textVariants}
                custom={0.12 + index * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  sm:text-[15px]
                  leading-relaxed
                  text-white/78
                  transition-colors
                  duration-300
                  group-hover:text-white/90
                "
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-yellow-400 flex-shrink-0" />

                <span>{point}</span>
              </motion.li>
            ))}
          </ul>

          {/* Bottom Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="
              mt-6
              h-px
              origin-left
              bg-gradient-to-r
              from-yellow-400/30
              via-yellow-400/10
              to-transparent
            "
          />
        </div>
      </motion.div>
    </Tilt>
  );
});

ServiceCard.displayName = "ServiceCard";

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* ========================================
         HEADING ANIMATION
      ======================================== */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        ".heading-line",
        {
          width: 0,
        },
        {
          width: "8rem",
          duration: 1,
          ease: "power3.out",
        },
      ).fromTo(
        ".heading-glow",
        {
          opacity: 0,
          scale: 0.7,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
        },
        "-=0.4",
      );

      /* ========================================
         CATEGORY ANIMATION
      ======================================== */

      gsap.fromTo(
        ".category-card",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#37425d]
        px-4
        py-16
        text-white
        sm:px-6
        sm:py-20
        md:px-8
        md:py-24
      "
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-[100px]" />

        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-400/5 rounded-full blur-[90px]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
    PREMIUM HEADING
===================================================== */}

        <motion.div
          ref={headingRef}
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
          className="relative mb-16 text-center sm:mb-20"
        >
          {/* Background Glow */}
          <div className="absolute left-1/2 top-1/2 h-40 w-[28rem] -translate-x-1/2 -translate-y-1/2 bg-[#f2cf7b]/10 blur-[120px]" />

          {/* Top Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
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
      "
            >
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f2cf7b]/5 via-[#ffe6aa]/10 to-[#f2cf7b]/5" />

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
                Our Services
              </span>
            </div>
          </motion.div>

          {/* Heading */}
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
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-6"
          >
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
              Our{" "}
              <span className="relative inline-block">
                {/* Text Glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#f2cf7b]/20 via-[#ffe6aa]/20 to-[#f2cf7b]/20 blur-2xl" />

                {/* Gradient Text */}
                <span className="relative bg-gradient-to-r from-[#f2cf7b] via-[#ffe6aa] to-[#f2cf7b] bg-clip-text text-transparent">
                  Specialized Services
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
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
      mx-auto
      mt-6
      max-w-2xl
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
            End‑to‑end legal, financial, and property solutions for NRIs in the
            UK.
          </motion.p>

          {/* Premium Underline */}
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
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
      heading-line
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

          {/* Bottom Floating Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
      heading-glow
      mx-auto
      mt-4
      h-24
      w-24
      rounded-full
      bg-[#f2cf7b]/10
      blur-3xl
    "
          />
        </motion.div>

        {/* =====================================================
            SERVICE SECTIONS
        ===================================================== */}

        {services.map((section, index) => (
          <motion.div
            key={section.category}
            className="category-card mb-10 sm:mb-14"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-5
                shadow-[0_20px_80px_rgba(0,0,0,0.28)]
                backdrop-blur-xl
                sm:p-7
                md:p-9
                lg:p-10
              "
            >
              {/* Top Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />

              {/* Category Heading */}
              <div className="relative mb-7 sm:mb-9">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-yellow-400/20
                      bg-yellow-400/10
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <span className="text-base font-bold text-yellow-400">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-yellow-400
                      sm:text-3xl
                    "
                  >
                    {section.category}
                  </h3>
                </div>

                <div className="mt-5 h-px w-16 bg-yellow-400/30" />
              </div>

              {/* Grid */}
              <div
                className={`grid gap-5 sm:gap-6 ${
                  index === 0
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2"
                }`}
              >
                {section.items.map((item) => (
                  <ServiceCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* =====================================================
            CTA
        ===================================================== */}

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
            duration: 0.7,
          }}
          className="mt-12 text-center"
        >
          <div
            className="
              inline-flex
              flex-col
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              px-5
              py-4
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              backdrop-blur-xl
              sm:flex-row
              sm:px-6
            "
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10">
              <Sparkles className="w-[18px] h-[18px] text-yellow-400" />
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-white/80">
                Need personalized assistance?
              </p>

              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-1
                  text-xs
                  font-medium
                  text-yellow-400
                  transition-colors
                  hover:text-yellow-300
                  sm:text-sm
                "
              >
                Schedule a Consultation
                <ArrowUpRight
                  size={13}
                  className="
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
