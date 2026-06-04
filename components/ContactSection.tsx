'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import Script from 'next/script';

export default function ContactSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section 
      id='contact'
      className="relative min-h-screen w-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.6)), url('/contact-bg.webp')`,
      }}
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Left Side: Content & Branding - Fully Responsive Layout & Centralized Alignments */}
        <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left space-y-8 text-white w-full">
          <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight w-full"
            >
              Let us resolve your matters<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                quickly, lawfully, confidently
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Meet us in Manchester or book a remote consultation from anywhere in the UK. We handle property, legal, banking, taxation, and documentation cases with our sole responsibility.
            </motion.p>
          </div>

          {/* Premium Bullet points with smooth hover offsets */}
          <motion.ul 
            variants={itemVariants} 
            className="space-y-4 text-sm sm:text-base text-gray-200 text-left w-full max-w-xl lg:max-w-none"
          >
            {[
              "UK based consultation, India-side representation",
              "Clear timelines, transparent communication, lawful resolution",
              "Secure handling of documents and confidential information"
            ].map((text, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start space-x-3 group"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-500 ring-4 ring-amber-500/20 shrink-0" />
                <span className="group-hover:text-amber-400 transition-colors duration-200">{text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Contact Actions (Buttons) */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center lg:justify-start max-w-md sm:max-w-xl lg:max-w-none"
          >
            <a 
              href="tel:07941485199" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 mr-2 stroke-[2.5]" />
              Call UK: +44 7941 485199
            </a>
            <a 
              href="mailto:info@innerworkadvisors.co.uk" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-600/50 bg-white/5 hover:bg-white/10 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@innerworkadvisors.co.uk
            </a>
          </motion.div>
        </div>

        {/* Right Side: GHL Embedded Form */}
        <motion.div
          className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto"
          variants={itemVariants}
        >
          <div className="relative h-[680px] md:h-[720px] mb-22">
            <iframe
              src="https://link.youngarchitects.in/widget/form/2Q7m2pGvNh0mXRUMWFnB"
              title="Contact Us Innerwork Advisors Limited"
              id="inline-2Q7m2pGvNh0mXRUMWFnB"
              className="absolute inset-0 h-full w-full rounded-xl border-0"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contact Us Innerwork Advisors Limited"
              data-height="643"
              data-layout-iframe-id="inline-2Q7m2pGvNh0mXRUMWFnB"
              data-form-id="2Q7m2pGvNh0mXRUMWFnB"
              allowFullScreen
            />
          </div>
        </motion.div>

      </motion.div>
      <Script src="https://link.youngarchitects.in/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}
