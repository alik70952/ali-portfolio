"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  Braces,
  Cpu,
  Database,
  Download,
  Mail,
} from "lucide-react";
import {
  getRevealVariants,
  premiumEase,
  staggerContainer,
} from "@/lib/motion";

const metrics = [
  { value: "6+", label: "Projects built" },
  { value: "4", label: "Development areas" },
  { value: "1", label: "Automotive data tool" },
];

const techCards = [
  { icon: Braces, label: "Next.js / TypeScript", className: "-left-5 top-16" },
  { icon: Database, label: "Python / Data", className: "-right-5 top-28" },
  { icon: Cpu, label: "IoT / Automotive", className: "bottom-12 -left-7" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.975]);
  const heroReveal = getRevealVariants(reduceMotion);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-6 items-center overflow-hidden px-5 pb-24 pt-20 sm:px-8 lg:overflow-visible lg:px-12 lg:pt-24"
    >
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] xl:gap-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(reduceMotion ? 0.02 : 0.09, 0.08)}
          className="min-w-0 max-w-4xl"
        >
          <motion.div
            variants={heroReveal}
            className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-[#c8a96a]/25 bg-[#c8a96a]/[0.055] px-4 py-2.5 text-[10px] font-medium tracking-[0.08em] text-[#d8c18f] sm:text-xs"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8a96a] shadow-[0_0_14px_rgba(200,169,106,0.75)]" />
            Open to junior developer roles &amp; freelance projects
          </motion.div>

          <motion.div variants={heroReveal}>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.26em] text-[#827866]">
              Computer engineering · practical development
            </p>
            <h1 className="hero-name display-title whitespace-nowrap text-[clamp(2.85rem,12.5vw,8rem)] text-[#f5f2ea] sm:text-[clamp(4.5rem,9vw,8rem)]">
              Ali <span className="text-gold-gradient">Kazemi</span>
            </h1>
          </motion.div>

          <motion.p
            variants={heroReveal}
            lang="fa"
            dir="rtl"
            className="font-fa mt-6 w-fit text-2xl font-medium leading-relaxed text-[#c7c0b5] sm:text-3xl"
          >
            علی کاظمی
          </motion.p>

          <motion.div
            variants={heroReveal}
            className="relative mt-8 w-full max-w-md lg:hidden"
          >
            <div className="relative rounded-lg border border-white/[0.1] bg-[#0b0b0c]/85 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.48)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md sm:aspect-[4/3]">
                <Image
                  src="/images/ali-portrait-1.png"
                  alt="Portrait of Ali Kazemi"
                  fill
                  sizes="(max-width: 1023px) 90vw, 0px"
                  className="object-cover object-[52%_30%] saturate-[0.8] contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-60" />
                <p className="absolute bottom-5 left-5 right-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#d1bb8a]">
                  Iran · Available remotely
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={heroReveal}
            className="mt-8 min-w-0 max-w-3xl"
          >
            <p className="text-xl font-medium leading-8 text-[#eeeae2] sm:text-2xl">
              Computer Engineering Student &amp; Junior Developer
            </p>
            <p className="body-copy mt-4 max-w-full break-words text-base text-[#a7a29a] sm:max-w-2xl sm:text-lg">
              Building practical web, mobile, IoT, and automotive data tools with a
              focus on clean interfaces, real-world problem solving, and continuous
              improvement.
            </p>
            <p
              lang="fa"
              dir="rtl"
              className="font-fa mt-4 max-w-full break-words text-right text-sm leading-8 text-[#918b82] sm:max-w-2xl sm:text-base"
            >
              دانشجوی مهندسی کامپیوتر و توسعه‌دهنده جونیور، علاقه‌مند به ساخت
              پروژه‌های واقعی در حوزه وب، موبایل، اینترنت اشیا و تحلیل داده‌های
              خودرویی.
            </p>
          </motion.div>

          <motion.div
            variants={heroReveal}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <motion.a
              href="#projects"
              aria-label="View Ali Kazemi's projects"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c8a96a] px-6 py-3 text-sm font-semibold text-[#090807] shadow-[0_14px_40px_rgba(168,121,61,0.2)] transition-colors duration-200 hover:bg-[#d4ba83]"
            >
              View Projects
              <ArrowDownRight size={16} aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#contact"
              aria-label="Go to contact information"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-6 py-3 text-sm font-medium text-[#eeeae2] transition-colors duration-200 hover:border-[#c8a96a]/40 hover:bg-[#c8a96a]/[0.055]"
            >
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </motion.a>
            <motion.a
              href="/ali-kazemi-cv.txt"
              download
              aria-label="Download Ali Kazemi's CV as a text file"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-medium text-[#a7a29a] transition-colors duration-200 hover:border-white/[0.07] hover:text-[#d8c18f]"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.dl
            variants={heroReveal}
            className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/[0.07] pt-6"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="min-w-0">
                <dt className="text-xl font-semibold text-[#e9dfca] sm:text-2xl">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-[10px] leading-4 text-[#77726b] sm:text-xs">
                  {metric.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 28, scale: 0.965 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.24, ease: premiumEase }}
          style={{
            y: reduceMotion ? 0 : portraitY,
            scale: reduceMotion ? 1 : portraitScale,
          }}
          className="relative mx-auto hidden w-full min-w-0 max-w-[30rem] lg:block lg:max-w-none"
        >
          <div className="relative rounded-lg border border-white/[0.11] bg-[#0b0b0c]/85 p-2.5 shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <Image
                src="/images/ali-portrait-1.png"
                alt="Portrait of Ali Kazemi"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-[52%_30%] saturate-[0.8] contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-65" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.08]" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#c8a96a]">
                  Based in Iran · Available remotely
                </p>
                <p className="mt-2 text-sm text-[#e7e1d7]">
                  Building useful systems across software and hardware.
                </p>
              </div>
            </div>
          </div>

          {techCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.label}
                initial={
                  reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.1,
                  ease: premiumEase,
                }}
                className={`glass-panel absolute hidden items-center gap-3 rounded-xl px-3.5 py-3 text-xs text-[#c8c1b7] shadow-[0_18px_45px_rgba(0,0,0,0.45)] xl:flex ${card.className}`}
              >
                <Icon size={15} className="text-[#c8a96a]" aria-hidden="true" />
                {card.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
