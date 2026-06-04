"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  loading: boolean;
};

export default function PageLoader({ loading }: Props) {
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 w-screen h-screen overflow-hidden z-[999999] flex items-center justify-center bg-[#08111f]"
        >
          {/* subtle background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(242,207,123,0.08),_transparent_55%)]" />

          <div className="relative flex flex-col items-center gap-6">
            {/* logo */}
            <motion.img
              src="/logo.png"
              alt="logo"
              className="h-auto w-40 object-contain"
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
            />

            {/* loading line */}
            <div className="relative h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.3,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-0 h-full w-24 rounded-full bg-[#f2cf7b] shadow-[0_0_20px_rgba(242,207,123,0.8)]"
              />
            </div>

            {/* text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
              className="text-xs tracking-[0.35em] uppercase text-white/70"
            >
              Loading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}