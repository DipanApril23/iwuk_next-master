"use client";

import { memo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import {
  Sparkles,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   DATA
========================================================= */

const advantages = [
  {
    id: "01",
    title: "Local UK Office",
    description:
      "Consult with us in person, in your time zone.",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "Dual Jurisdiction Expertise",
    description:
      "Navigating both Indian and UK legal landscapes with confidence.",
    icon: Star,
  },
  {
    id: "03",
    title: "End-to-End Service",
    description:
      "From consultation to execution with complete transparency.",
    icon: Zap,
  },
];

/* =========================================================
   CARD COMPONENT
========================================================= */

const PremiumCard = memo(
  ({
    item,
    isCenter,
  }: {
    item: (typeof advantages)[0];
    isCenter?: boolean;
  }) => {
    const Icon = item.icon;

    return (
      <Tilt
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        perspective={1200}
        scale={1.01}
        transitionSpeed={1200}
        glareEnable={false}
        gyroscope={false}
        className="h-full"
      >
        <motion.div
          whileHover={{
            y: -6,
          }}
          transition={{
            duration: 0.22,
          }}
          className={`
            premium-card
            group
            relative
            h-full
            min-h-[250px]
            overflow-hidden
            rounded-[24px]
            border
            border-white/8
            bg-gradient-to-br
            from-[#14213a]/95
            via-[#10192b]/95
            to-[#0c1422]/95
            p-5
            sm:min-h-[280px]
            sm:p-6
            lg:min-h-[320px]
            lg:p-8
            backdrop-blur-xl
            shadow-[0_14px_40px_rgba(0,0,0,0.28)]
            transition-all
            duration-300
            hover:border-[#f2cf7b]/20
            hover:shadow-[0_18px_55px_rgba(0,0,0,0.35)]
            will-change-transform
            ${isCenter ? "lg:z-20" : ""}
          `}
          style={{
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {/* Soft Border Glow */}
          <div
            className="
              absolute
              inset-0
              rounded-[24px]
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          >
            <div
              className="
                absolute
                -inset-[1px]
                rounded-[24px]
                bg-gradient-to-r
                from-[#f2cf7b]/0
                via-[#f2cf7b]/15
                to-[#f2cf7b]/0
                blur-sm
              "
            />
          </div>

          {/* Reduced Glow */}
          <div
            className="
              absolute
              -top-20
              -right-20
              h-40
              w-40
              rounded-full
              bg-[#f2cf7b]/[0.04]
              blur-3xl
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* Shine */}
          <div
            className="
              absolute
              inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/[0.03]
              to-transparent
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />

          {/* Background Number */}
          <span
            className="
              absolute
              bottom-3
              right-4
              text-6xl
              font-black
              tracking-tighter
              text-white/[0.025]
              transition-all
              duration-300
              group-hover:scale-105
              sm:text-7xl
            "
          >
            {item.id}
          </span>

          <div className="relative z-10 flex h-full flex-col">
            {/* Icon */}
            <div
              className="
                card-icon
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-[#f2cf7b]/15
                bg-[#f2cf7b]/8
                transition-all
                duration-300
                group-hover:border-[#f2cf7b]/25
                group-hover:bg-[#f2cf7b]/10
                sm:h-16
                sm:w-16
              "
            >
              <Icon className="h-7 w-7 text-[#f2cf7b]" />
            </div>

            {/* Title */}
            <h3
              className="
                card-title
                text-xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-2xl
              "
            >
              {item.title}
            </h3>

            {/* Divider */}
            <div
              className="
                card-divider
                mt-4
                h-[2px]
                w-0
                rounded-full
                bg-gradient-to-r
                from-[#f2cf7b]
                to-transparent
              "
            />

            {/* Description */}
            <p
              className="
                card-description
                mt-4
                max-w-[95%]
                text-sm
                leading-relaxed
                text-white/72
                sm:text-[15px]
              "
            >
              {item.description}
            </p>
          </div>
        </motion.div>
      </Tilt>
    );
  }
);

PremiumCard.displayName = "PremiumCard";

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"]
  );

  /* =========================================================
     GSAP ANIMATION
  ========================================================= */

  useEffect(() => {
    if (!cardsRef.current) return;

    const ctx = gsap.context(() => {
      const cards =
        gsap.utils.toArray<HTMLElement>(".premium-card");

      if (window.innerWidth >= 1024) {
        const centerCard = cards[1];
        const leftCard = cards[0];
        const rightCard = cards[2];

        /* CENTER CARD */

        gsap.fromTo(
          centerCard,
          {
            opacity: 0,
            scale: 0.82,
            y: 90,
          },
          {
            opacity: 1,
            scale: 1,
            y: -14,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 78%",
              toggleActions:
                "play reverse play reverse",
            },
          }
        );

        /* CENTER BOUNCE */

        gsap.to(centerCard, {
          y: 0,
          duration: 0.32,
          delay: 0.72,
          ease: "back.out(2.2)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 78%",
            toggleActions:
              "play reverse play reverse",
          },
        });

        /* LEFT CARD */

        gsap.fromTo(
          leftCard,
          {
            opacity: 0,
            x: 80,
            scale: 0.92,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.65,
            delay: 0.28,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 78%",
              toggleActions:
                "play reverse play reverse",
            },
          }
        );

        /* RIGHT CARD */

        gsap.fromTo(
          rightCard,
          {
            opacity: 0,
            x: -80,
            scale: 0.92,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.65,
            delay: 0.28,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 78%",
              toggleActions:
                "play reverse play reverse",
            },
          }
        );
      } else {
        /* MOBILE */

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 45,
              scale: 0.97,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.55,
              delay: index * 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                toggleActions:
                  "play reverse play reverse",
              },
            }
          );
        });
      }

      /* INNER ANIMATIONS */

      gsap.fromTo(
        ".card-icon",
        {
          opacity: 0,
          scale: 0.7,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".card-title",
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      gsap.to(".card-divider", {
        width: "70px",
        duration: 0.45,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 82%",
          toggleActions:
            "play reverse play reverse",
        },
      });

      gsap.fromTo(
        ".card-description",
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) =>
        trigger.kill()
      );
    };
  }, []);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#2a3a5c]
        via-[#33456d]
        to-[#2a3a5c]
        px-4
        py-20
        text-white
        sm:px-6
        md:px-8
        md:py-24
        lg:py-28
      "
    >
      {/* Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[380px]
            w-[380px]
            -translate-x-1/2
            rounded-full
            bg-[#f2cf7b]/[0.07]
            blur-[130px]
          "
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
       {/* =====================================================
    HEADING
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
        Why Choose Us
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
    Why{" "}
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
        UK-based NRIs{" "}
      </span>
      <span>Choose Us</span>
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

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div
          ref={cardsRef}
          className="
            relative
            grid
            grid-cols-1
            gap-5
            sm:gap-6
            lg:grid-cols-3
            lg:items-center
            lg:gap-7
          "
        >
          {advantages.map((item, index) => (
            <div
              key={item.id}
              className={`
                w-full
                ${index === 1 ? "lg:-mt-8" : ""}
              `}
            >
              <PremiumCard
                item={item}
                isCenter={index === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}