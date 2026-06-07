import type { Variants } from "framer-motion";

export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const viewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -8% 0px",
} as const;

export const staggerContainer = (stagger = 0.08, delayChildren = 0) =>
  ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  }) satisfies Variants;

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: premiumEase,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: premiumEase },
  },
};

export const reducedFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.24, ease: "easeOut" },
  },
};

export const getRevealVariants = (reduceMotion: boolean | null) =>
  reduceMotion ? reducedFade : fadeUp;
