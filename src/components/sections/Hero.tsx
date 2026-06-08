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
      className="relative mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-6 items-center overflow-hidden px-5 pb-24 pt-16 sm:px-8 sm:pt-20 lg:overflow-visible lg:px-12 lg:pt-24"
    >
      <div className="grid w-full items-center gap-12 sm:gap-14 lg:grid-cols-[1.08fr_0.92fr] xl:gap-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(reduceMotion ? 0.02 : 0.09, 0.08)}
          className="min-w-0 max-w-4xl"
        >
          <motion.div
            variants={heroReveal}
            className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#c8a96a]/25 bg-[#c8a96a]/[0.055] px-3.5 py-2.5 text-[11px] font-medium leading-4 tracking-[0.04em] text-[#d8c18f] sm:mb-7 sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.08em]"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8a96a] shadow-[0_0_14px_rgba(200,169,106,0.75)]" />
            Open to junior developer roles &amp; freelance projects
          </motion.div>

          <motion.div variants={heroReveal}>
            <p className="mb-4 font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-[#827866] sm:tracking-[0.26em]">
              Computer engineering · practical development
            </p>
            <h1 className="hero-name display-title whitespace-nowrap text-[clamp(2.75rem,12vw,4rem)] text-[#f5f2ea] sm:text-[clamp(4.5rem,9vw,8rem)]">
              Ali <span className="text-gold-gradient">Kazemi</span>
            </h1>
          </motion.div>

          <motion.p
            variants={heroReveal}
            lang="fa"
            dir="rtl"
            className="font-fa mt-5 w-fit text-2xl font-medium leading-relaxed text-[#c7c0b5] sm:mt-6 sm:text-3xl"
          >
            علی کاظمی
          </motion.p>

          <motion.div
            variants={heroReveal}
            className="relative mt-7 w-full max-w-[25rem] sm:mt-8 lg:hidden"
          >
            <div className="relative rounded-lg border border-white/[0.1] bg-[#0b0b0c]/85 p-2 shadow-[0_24px_65px_rgba(0,0,0,0.42)]">
              <div className="relative h-[clamp(12rem,56vw,15.5rem)] max-h-[15.5rem] min-h-[12rem] overflow-hidden rounded-md sm:h-[18rem] sm:max-h-[18rem]">
                <Image
                  src="/images/ali-portrait-1.png"
                  alt="Portrait of Ali Kazemi"
                  fill
                  sizes="(max-width: 1023px) 90vw, 0px"
                  className="object-cover object-[52%_27%] saturate-[0.8] contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-60" />
                <p className="absolute bottom-4 left-4 right-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#d1bb8a] sm:bottom-5 sm:left-5 sm:right-5 sm:tracking-[0.18em]">
                  Iran · Available remotely
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={heroReveal}
            className="mt-7 min-w-0 max-w-3xl sm:mt-8"
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
              className="font-fa mt-4 max-w-full break-words text-right text-[15px] leading-8 text-[#9d978e] sm:max-w-2xl sm:text-base"
            >
              دانشجوی مهندسی کامپیوتر و توسعه‌دهنده جونیور، علاقه‌مند به ساخت
              پروژه‌های واقعی در حوزه وب، موبایل، اینترنت اشیا و تحلیل داده‌های
              خودرویی.
            </p>
          </motion.div>

          <motion.div
            variants={heroReveal}
            className="mt-8 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 sm:mt-9 sm:flex sm:flex-row sm:flex-wrap"
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
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-medium text-[#a7a29a] transition-colors duration-200 hover:border-white/[0.07] hover:text-[#d8c18f] min-[390px]:col-span-2 sm:col-span-1"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.dl
            variants={heroReveal}
            className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/[0.07] pt-6"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="min-w-0">
                <dt className="text-xl font-semibold text-[#e9dfca] sm:text-2xl">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-[11px] leading-[1.45] text-[#817b73] sm:text-xs">
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
