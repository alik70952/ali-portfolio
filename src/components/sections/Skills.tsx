"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Blocks,
  Braces,
  Cpu,
  Database,
  Settings2,
  Smartphone,
} from "lucide-react";
import { skillGroups } from "@/data/skills";
import {
  getRevealVariants,
  premiumEase,
  staggerContainer,
  viewport,
} from "@/lib/motion";
const icons = [Braces, Smartphone, Database, Blocks, Cpu, Settings2];

export function Skills() {
  const reduceMotion = useReducedMotion();
  const reveal = getRevealVariants(reduceMotion);

  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-7xl scroll-mt-16 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer(reduceMotion ? 0.02 : 0.09)}
      >
        <motion.div
          variants={reveal}
          className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-[#c8a96a]">
                02
              </span>
              <div className="gold-line h-px w-16" />
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#817c74]">
                Skills
              </p>
            </div>
            <h2 className="section-title mt-7 text-3xl text-[#f5f2ea] sm:text-5xl">
              Tools for building across layers.
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-7 text-[#9b958c] lg:justify-self-end">
            A practical toolkit developed through coursework, experiments, and
            project-based learning, from interface work to data and embedded systems.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const Icon = icons[groupIndex];

            return (
              <motion.article
                key={group.title}
                variants={reveal}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className={`group relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#0b0b0c]/85 p-6 transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#c8a96a]/25 hover:bg-[#0d0c0b] hover:shadow-[0_24px_65px_rgba(0,0,0,0.28)] ${
                  groupIndex === 0 || groupIndex === 2 ? "lg:row-span-1" : ""
                }`}
              >
                <div className="relative flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c8a96a]/20 bg-[#c8a96a]/[0.055] text-[#c8a96a]">
                    <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.18em] text-[#5f5a53]">
                    0{groupIndex + 1}
                  </span>
                </div>
                <h3 className="relative mt-6 text-lg font-medium text-[#ece7df]">
                  {group.title}
                </h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={staggerContainer(reduceMotion ? 0.01 : 0.035, 0.08)}
                  className="relative mt-4 flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={reduceMotion ? {
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { duration: 0.24, ease: "easeOut" },
                        },
                      } : {
                        hidden: { opacity: 0, y: 7 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.42,
                            ease: premiumEase,
                          },
                        },
                      }}
                      whileHover={reduceMotion ? undefined : { y: -2 }}
                      className="rounded-lg border border-white/[0.065] bg-white/[0.025] px-3 py-2 text-xs leading-5 text-[#aaa49b] transition-[border-color,background-color,color] duration-200 hover:border-[#c8a96a]/30 hover:bg-[#c8a96a]/[0.05] hover:text-[#d9c395]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
