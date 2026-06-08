"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { DottedSurface } from "@/components/ui/dotted-surface";

export function InteractiveBackground() {
  const reduceMotion = useReducedMotion();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(640);
  const pointerY = useMotionValue(180);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.35 });
  const spotlight = useMotionTemplate`radial-gradient(circle 540px at ${smoothX}px ${smoothY}px, rgba(200, 169, 106, 0.1), transparent 72%)`;

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const updateSpotlight = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };
    const updateSpotlightDepth = () => {
      const scrollDepth = Math.min(
        1,
        window.scrollY / Math.max(window.innerHeight * 2.4, 1),
      );
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = String(
          0.78 - scrollDepth * 0.48,
        );
      }
    };

    updateSpotlightDepth();
    window.addEventListener("scroll", updateSpotlightDepth, { passive: true });
    if (hasFinePointer) {
      window.addEventListener("pointermove", updateSpotlight, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", updateSpotlightDepth);
      window.removeEventListener("pointermove", updateSpotlight);
    };
  }, [pointerX, pointerY, reduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-x-0 top-0 h-[115vh] opacity-60 [mask-image:linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)] sm:opacity-100">
        <DottedSurface />
      </div>
      <motion.div
        ref={spotlightRef}
        className="absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: spotlight,
          opacity: reduceMotion ? 0.48 : 0.78,
        }}
      />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_8%,rgba(0,0,0,0.86)_100%)] sm:bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.78)_100%)]" />
      <div className="absolute -left-36 top-20 z-20 h-[34rem] w-[34rem] rounded-full bg-[#a8793d]/[0.06] blur-[120px]" />
      <div className="absolute right-[-12rem] top-[-8rem] z-20 h-[38rem] w-[38rem] rounded-full bg-[#c8a96a]/[0.08] blur-[130px]" />
    </div>
  );
}
