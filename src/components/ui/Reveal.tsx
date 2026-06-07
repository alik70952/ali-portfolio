"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { premiumEase } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.15,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === "left"
      ? { x: 20, y: 0 }
      : direction === "right"
        ? { x: -20, y: 0 }
        : { x: 0, y: 18 };

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.99, ...offset, filter: "blur(7px)" }
      }
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount, margin: "0px 0px -8%" }}
      transition={{
        duration: reduceMotion ? 0.24 : 0.72,
        delay: reduceMotion ? 0 : delay,
        ease: premiumEase,
      }}
    >
      {children}
    </motion.div>
  );
}
