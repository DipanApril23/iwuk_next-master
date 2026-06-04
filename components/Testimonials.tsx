"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Sparkles,
  X,
  ArrowRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Dr Sriparna Datta",
    location: "London, UK",
    initials: "SD",
    review:
      "It has been a pleasure to be associated with Innerwork Advisors. Your professionalism, kindness and efforts to provide the highest level of customer services beyond comparison. I wish the entire team a successful future ahead.",
  },
  {
    name: "Dr Sonali Guha",
    location: "London, UK",
    initials: "SG",
    review:
      "Innerworks stands out for its honesty, professionalism, and strong customer focus. As an NRI with limited time, I was initially hesitant to start due to past experiences with other lawyers. However, the Innerworks team handled my legal matter efficiently, prioritized my case, and completed everything on time—saving me an expensive second trip from the UK. Highly recommended for NRIs and locals needing reliable support.",
  },
  {
    name: "Sagar Nandi",
    initials: "SN",
    review:
      "I engaged Innerwork Advisors regarding a matter involving multiple citizens from different countries. I had tried to address that case with other organizations earlier. But it was not successful. Innerwork engaged professionally, gathered all the details, processed the information, advised me, and was able to conclude the case successfully for me. It was not an easy matter, but their professional, all-encompassing services helped me to resolve the case.",
  },
  {
    name: "Sriparna Dutta",
    initials: "SD",
    review:
      "I have had a 5 star experience with Innerwork Advisors. The professionalism and excellent customer service provided by the team is beyond comparison. Thank You for helping and being there for me during challenging times. Heartiest Congratulations on your success in India and the UK💐💐",
  },
  {
    name: "Sonali Guha",
    initials: "SG",
    review:
      "Innerworks stands out for its honesty, professionalism, and strong customer focus. As an NRI with limited time, I was initially hesitant to start due to past experiences with other lawyers. However, the Innerworks team handled my legal matter efficiently, prioritized my case, and completed everything on time—saving me an expensive second trip from the UK. Highly recommended for NRIs and locals needing reliable support.",
  },
  {
    name: "Angela Nandi Dutta",
    initials: "AND",
    review:
      "Very detailed work carried out with extreme diligence. Was very helpful and approachable.",
  },
  {
    name: "Tapas Dasgupta",
    initials: "TD",
    review:
      "Excellent services… I had issue with the taxation for property sale in India what they’ve resolved in proper way and showed their expertise on that. I am really very happy with their service and will recommend for all. Thanks.",
  },
  {
    name: "Sharmila Roy Chowdhury",
    initials: "SRC",
    review:
      "We had a very positive experience working with Innerwork Advisors Ltd for our NRI services. The entire team was professional, organized, and very supportive throughout the process. I would especially like to thank respected Mr. Sujit Chakraborty, Ms. Bidisha Chatterjee, and Mr. Sambhab Bothra, who worked together as a team and helped us immensely in successfully completing our matter. They were responsive, guided us at every step, and ensured everything moved forward smoothly. Their dedication, clear communication, and support made what could have been a complicated process much easier for our family. We truly appreciate their efforts and would highly recommend Innerwork Advisors Ltd to anyone seeking reliable NRI services.",
  },
];

interface Testimonial {
  name: string;
  location?: string;
  initials: string;
  review: string;
}

export default function PremiumTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeModalReview, setActiveModalReview] =
    useState<Testimonial | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".heading-anim", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".heading-anim",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden bg-[#0f152e] py-16 md:py-20"
    >
      {/* LOCALIZED COMPACT BACKGROUND GLOWS */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#f5c76b]/5 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#4f46e5]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* HEADING SECTION */}
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
                Client Testimonials
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
            What our{" "}
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
                UK clients{" "}
              </span>
              <span>say</span>
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
            Real experiences from global professionals. Crafted with total
            transparency, regulatory excellence, and premium partner support.
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
        {/* CAROUSEL COMPONENT WITH HIGHLIGHTER */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="swiper-viewport-container relative lg:[clip-path:inset(-100px_0px_-100px_0px)]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              centeredSlides
              grabCursor
              loop
              speed={800}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".custom-swiper-pagination",
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: -12,
                depth: 140,
                modifier: 1.2,
                slideShadows: false,
                scale: 0.88,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 18,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 28,
                  centeredSlides: true,
                },
              }}
              className="!overflow-visible"
            >
              {testimonials.map((item, i) => {
                const isLongReview = item.review.length > 160;
                return (
                  <SwiperSlide key={i} className="py-4">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="testimonial-card group relative flex flex-col justify-between min-h-[340px] h-full overflow-hidden rounded-2xl p-6 backdrop-blur-md will-change-transform"
                    >
                      {/* Active Radial Glow Highlighter Layer */}
                      <div className="active-glow-layer absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-500 bg-[radial-gradient(60%_60%_at_70%_80%,rgba(245,199,107,0.08),transparent)]" />

                      <div>
                        {/* CARD TOPBAR */}
                        <div className="mb-5 flex items-center justify-between">
                          <div className="quote-badge flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500">
                            <Quote className="quote-icon h-4 w-4 text-slate-400 transform rotate-180 transition-colors duration-500" />
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, idx) => (
                              <Star
                                key={idx}
                                className="h-3.5 w-3.5 fill-[#f5c76b] text-[#f5c76b]"
                              />
                            ))}
                          </div>
                        </div>

                        {/* TESTIMONIAL REVIEW (CLAMPED) */}
                        <div className="relative">
                          <blockquote className="review-text text-sm font-medium leading-relaxed text-slate-400 line-clamp-4 transition-colors duration-500">
                            “{item.review}”
                          </blockquote>

                          {isLongReview && (
                            <button
                              onClick={() => setActiveModalReview(item)}
                              className="read-more-btn mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#f5c76b]/80 hover:text-[#f5c76b] transition-colors"
                            >
                              Read full story
                              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* USER BRAND FOOTER */}
                      <div className="mt-5 relative z-10">
                        <div className="mb-4 h-px bg-white/[0.06]" />

                        <div className="flex items-center gap-3">
                          <div className="avatar-badge flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-xs font-bold tracking-wider text-slate-300 transition-all duration-500">
                            {item.initials}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-slate-200 tracking-wide truncate group-hover:text-white transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-[11px] font-medium text-slate-400">
                              {item.location || "Verified Client"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* INTERFACE CONTROLS */}
          <div className="mt-8 flex items-center justify-between border-t border-white/[0.05] pt-5">
            <div className="custom-swiper-pagination flex items-center gap-2" />

            <div className="flex items-center gap-2">
              <button className="custom-prev group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-[#f5c76b]/30 hover:bg-[#f5c76b]/5 active:scale-95">
                <ChevronLeft className="h-4 w-4 text-slate-400 transition group-hover:text-[#f5c76b]" />
              </button>

              <button className="custom-next group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-[#f5c76b]/30 hover:bg-[#f5c76b]/5 active:scale-95">
                <ChevronRight className="h-4 w-4 text-slate-400 transition group-hover:text-[#f5c76b]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* EXPANDABLE STORIES IMMERSIVE MODAL PORTAL */}
      <AnimatePresence>
        {activeModalReview && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop Glass Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalReview(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#131a3a] p-6 shadow-2xl sm:p-8"
            >
              {/* Decorative internal glow */}
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#f5c76b]/10 blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setActiveModalReview(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header inside Modal */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5c76b]/10 border border-[#f5c76b]/20 text-sm font-bold tracking-wider text-[#f5c76b]">
                  {activeModalReview.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {activeModalReview.name}
                  </h3>
                  <p className="text-xs font-medium text-[#f5c76b]">
                    {activeModalReview.location || "Verified Client"}
                  </p>
                </div>
              </div>

              {/* Star Rating & Quote Visual Details */}
              <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-[#f5c76b] text-[#f5c76b]"
                    />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-slate-600 transform rotate-180" />
              </div>

              {/* Full Uncut Scrollable Text Body */}
              <div className="max-h-[240px] overflow-y-auto pr-2 scrollbar-thin text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                “{activeModalReview.review}”
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
