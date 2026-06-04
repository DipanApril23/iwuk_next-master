"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = {
    damping: 30,
    stiffness: 350,
    mass: 0.35,
  };

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const rotate = useTransform(
    [velocityX, velocityY],
    ([vx, vy]) =>
      `${Math.atan2(Number(vy), Number(vx)) * (180 / Math.PI)}deg`
  );

  const scaleX = useTransform(velocityX, [-1200, 0, 1200], [1.5, 1, 1.5]);
  const scaleY = useTransform(velocityY, [-1200, 0, 1200], [0.7, 1, 0.7]);

  useEffect(() => {
    setMounted(true);

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const hideCursor = () => setVisible(false);

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", hideCursor);

    const interactive = document.querySelectorAll(
      "a, button, input, textarea, .interactive"
    );

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", hideCursor);

      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
  <motion.div
    className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-yellow-400/70 bg-yellow-400/15 backdrop-blur-md"
    style={{
      x,
      y,
      rotate,
      scaleX,
      scaleY,
      translateX: "-50%",
      translateY: "-50%",
      boxShadow: "0 0 20px rgba(250,204,21,0.25)",
    }}
    animate={{
      width: hovering ? 24 : 14,
      height: hovering ? 24 : 14,
      opacity: visible ? 1 : 0,
    }}
    transition={{
      type: "spring",
      stiffness: 450,
      damping: 24,
      mass: 0.3,
    }}
  />
);
}