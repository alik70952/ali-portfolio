"use client";

import Image from "next/image";
import { useRef, type ComponentType } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  Check,
  CircuitBoard,
  Code2,
  FileCode2,
  FileJson,
  Gauge,
  Monitor,
  Radio,
  Sheet,
  Smartphone,
  Utensils,
  Wifi,
} from "lucide-react";
import { projects, type Project } from "@/data/projects";
import {
  getRevealVariants,
  premiumEase,
  staggerContainer,
  viewport,
} from "@/lib/motion";

type IconType = ComponentType<{ size?: number; className?: string }>;

const terminalLines = [
  { command: "read_dat()", detail: "Loading automotive signal logs" },
  { command: "parse_excel()", detail: "Reading regression checklist" },
  { command: "validate()", detail: "Checking acceptance criteria" },
  { command: "score()", detail: "Calculating PASS / FAIL" },
  { command: "export()", detail: "Writing JSON / CSV / HTML" },
];

const reportStats = [
  { icon: Sheet, label: "Inputs", value: ".DAT + XLSX" },
  { icon: CircuitBoard, label: "Signals", value: "Validated" },
  { icon: FileJson, label: "Reports", value: "3 formats" },
  { icon: Gauge, label: "Result", value: "PASS / FAIL" },
];

function PreviewHeader({
  icon: Icon,
  label,
  meta,
}: {
  icon: IconType;
  label: string;
  meta: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-3.5 py-3 sm:px-4 sm:py-3.5">
      <div className="flex min-w-0 items-center gap-2.5">
        <Icon size={14} className="text-[#c8a96a]" />
        <span className="truncate font-mono text-[9px] uppercase tracking-[0.1em] text-[#a49d92] sm:tracking-[0.14em]">
          {label}
        </span>
      </div>
      <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.1em] text-[#5f5a53] sm:tracking-[0.14em]">
        {meta}
      </span>
    </div>
  );
}

function TcmPreview() {
  return (
    <div className="overflow-hidden rounded-md border border-white/[0.09] bg-[#050506]/95">
      <PreviewHeader
        icon={Code2}
        label="TCM validation pipeline"
        meta="report.py"
      />
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border-b border-white/[0.07] p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <div className="space-y-2.5 sm:space-y-4">
            {terminalLines.map((line, index) => (
              <div key={line.command} className="flex gap-3 font-mono">
                <span className="text-[9px] leading-5 text-[#5e594f]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] leading-5 text-[#d5bd88]">
                    {line.command}
                  </p>
                  <p className="text-[10px] leading-4 text-[#817b72] sm:mt-1 sm:text-[9px] sm:leading-5">
                    {line.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 border-t border-white/[0.07] pt-3 font-mono text-[9px] sm:mt-5 sm:pt-4 sm:text-[8px] uppercase tracking-[0.12em]">
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-2.5 py-1 text-emerald-300">
              42 pass
            </span>
            <span className="rounded-full border border-rose-400/20 bg-rose-400/[0.06] px-2.5 py-1 text-rose-300/80">
              3 flagged
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
          {reportStats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="bg-[#09090a] p-3 sm:p-4">
                <Icon size={15} className="text-[#c8a96a]" />
                <p className="mt-3 font-mono text-[8px] sm:mt-4 uppercase tracking-[0.13em] text-[#6f6a62]">
                  {item.label}
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#d0c9be]">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function RestaurantPreview() {
  return (
    <div className="relative mx-auto max-w-[29rem] overflow-hidden rounded-md border border-white/[0.09] bg-[#09090a] p-3.5 sm:p-5">
      <div className="absolute right-0 top-0 h-28 w-28 bg-[#c8a96a]/[0.06] blur-3xl" />
      <div className="grid grid-cols-[0.82fr_1.18fr] gap-2.5 sm:grid-cols-[0.76fr_1.24fr] sm:gap-4">
        <div className="rounded-[1.4rem] border border-white/[0.1] bg-[#050506] p-2 shadow-2xl">
          <div className="overflow-hidden rounded-[1rem] border border-white/[0.06] bg-[#101011]">
            <div className="flex items-center justify-between px-3 py-3">
              <Utensils size={13} className="text-[#c8a96a]" />
              <span className="font-mono text-[7px] text-[#68625a]">19:24</span>
            </div>
            <div className="bg-[linear-gradient(145deg,#33291d,#12100d)] px-3 py-4">
              <p className="text-[8px] text-[#c8a96a]">Chef selection</p>
              <p className="mt-1 text-sm font-semibold text-[#f0ebe2]">
                Dinner, refined.
              </p>
            </div>
            <div className="space-y-2 p-3">
              {["Starters", "Main course", "Dessert"].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.025] p-2"
                >
                  <span
                    className={`h-7 w-7 rounded bg-gradient-to-br ${
                      index === 0
                        ? "from-amber-200/30 to-orange-950/30"
                        : index === 1
                          ? "from-emerald-200/25 to-emerald-950/30"
                          : "from-rose-200/25 to-rose-950/30"
                    }`}
                  />
                  <span className="text-[8px] text-[#bdb6ac]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#736d64]">
            Reservation flow
          </p>
          <div className="mt-3 space-y-2.5">
            {[
              { icon: CalendarDays, label: "Friday, 20:00" },
              { icon: Utensils, label: "Table for two" },
              { icon: Smartphone, label: "Mobile app shell" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-md border border-white/[0.07] bg-white/[0.025] px-3 py-3"
                >
                  <Icon size={13} className="text-[#c8a96a]" />
                  <span className="text-[10px] text-[#a9a298]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 rounded-md bg-[#c8a96a] px-3 py-2.5 text-center text-[9px] font-semibold text-[#0a0908]">
            Confirm reservation
          </div>
        </div>
      </div>
    </div>
  );
}

function GameClubPreview() {
  const sessions = [
    ["PS5 - 04", "01:42", "$12.50"],
    ["PC - 11", "00:38", "$5.20"],
    ["Xbox - 02", "02:10", "$15.80"],
  ];

  return (
    <div className="overflow-hidden rounded-md border border-white/[0.09] bg-[#080809]">
      <PreviewHeader
        icon={Monitor}
        label="Club operations"
        meta="Live sessions"
      />
      <div className="grid grid-cols-3 gap-px bg-white/[0.06]">
        {[
          ["Active", "08"],
          ["Revenue", "$284"],
          ["Inventory", "96%"],
        ].map(([label, value]) => (
          <div key={label} className="bg-[#0b0b0c] px-3 py-4">
            <p className="font-mono text-[7px] uppercase tracking-[0.12em] text-[#68635c]">
              {label}
            </p>
            <p className="mt-1 text-base font-semibold text-[#e6dfd4]">
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="mb-2 grid grid-cols-[1fr_0.65fr_0.65fr] px-2 font-mono text-[7px] uppercase tracking-[0.12em] text-[#5f5a53]">
          <span>Station</span>
          <span>Time</span>
          <span className="text-right">Cost</span>
        </div>
        <div className="space-y-1.5">
          {sessions.map((session, index) => (
            <div
              key={session[0]}
              className="grid grid-cols-[1fr_0.65fr_0.65fr] items-center rounded-md border border-white/[0.06] bg-white/[0.025] px-2 py-3 text-[9px] text-[#a9a298]"
            >
              <span className="flex items-center gap-2 text-[#d6d0c6]">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index === 1 ? "bg-amber-300" : "bg-emerald-300"
                  }`}
                />
                {session[0]}
              </span>
              <span>{session[1]}</span>
              <span className="text-right text-[#c8a96a]">{session[2]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IotPreview() {
  const controls = [
    { icon: Wifi, label: "Local server", status: "192.168.4.1", active: true },
    { icon: Radio, label: "RF433 receiver", status: "Listening", active: true },
    {
      icon: CircuitBoard,
      label: "Relay channel 01",
      status: "OFF",
      active: false,
    },
  ];

  return (
    <div className="overflow-hidden rounded-md border border-white/[0.09] bg-[#070808]">
      <PreviewHeader
        icon={CircuitBoard}
        label="ESP32 control panel"
        meta="Online"
      />
      <div className="grid gap-3 p-4 sm:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-md border border-emerald-300/[0.12] bg-emerald-300/[0.025] p-4 font-mono">
          <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.12em] text-[#657269]">
            <span>OLED</span>
            <span>128 x 64</span>
          </div>
          <div className="mt-8">
            <p className="text-[9px] text-emerald-300/70">SYSTEM READY</p>
            <p className="mt-2 text-2xl text-emerald-200">24.6 C</p>
            <div className="mt-4 flex gap-1">
              {[45, 62, 36, 78, 54, 82, 68].map((height, index) => (
                <span
                  key={index}
                  className="w-full bg-emerald-300/45"
                  style={{ height: `${height / 3}px` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {controls.map((control) => {
            const Icon = control.icon;
            return (
              <div
                key={control.label}
                className="flex items-center gap-3 rounded-md border border-white/[0.06] bg-white/[0.025] p-3"
              >
                <Icon size={14} className="text-[#c8a96a]" />
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] text-[#c6bfb5]">{control.label}</p>
                  <p className="mt-0.5 font-mono text-[7px] text-[#69645d]">
                    {control.status}
                  </p>
                </div>
                <span
                  className={`h-2 w-2 rounded-full ${
                    control.active
                      ? "bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.55)]"
                      : "bg-[#514d48]"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AcademicPreview() {
  const studies = [
    { icon: BarChart3, label: "Business intelligence", meta: "Presentation" },
    { icon: FileCode2, label: "Compiler exercises", meta: "Grammar" },
    { icon: CircuitBoard, label: "IoT in commerce", meta: "Research" },
  ];

  return (
    <div className="relative min-h-[19rem] overflow-hidden rounded-md border border-white/[0.09] bg-[#080809] p-5">
      <div className="absolute bottom-6 right-5 top-9 w-[72%] rotate-2 rounded-md border border-white/[0.06] bg-[#0d0d0e]" />
      <div className="absolute bottom-9 right-9 top-6 w-[72%] -rotate-2 rounded-md border border-[#c8a96a]/10 bg-[#0b0b0c]" />
      <div className="relative flex min-h-[16rem] flex-col rounded-md border border-white/[0.08] bg-[#101011] p-4 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
          <div className="flex items-center gap-2">
            <BookOpen size={14} className="text-[#c8a96a]" />
            <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#9e978d]">
              Engineering notebook
            </span>
          </div>
          <span className="font-mono text-[7px] text-[#5f5a53]">2024 / 25</span>
        </div>
        <div className="mt-4 space-y-2">
          {studies.map((study) => {
            const Icon = study.icon;
            return (
              <div
                key={study.label}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md border border-white/[0.055] bg-white/[0.02] p-3"
              >
                <Icon size={13} className="text-[#a8793d]" />
                <span className="text-[9px] text-[#beb7ad]">{study.label}</span>
                <span className="font-mono text-[7px] uppercase text-[#666159]">
                  {study.meta}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-4 pt-4">
          <div className="space-y-1.5">
            <span className="block h-px w-full bg-white/[0.08]" />
            <span className="block h-px w-4/5 bg-white/[0.06]" />
            <span className="block h-px w-3/5 bg-white/[0.05]" />
          </div>
          <span className="font-mono text-[8px] text-[#c8a96a]">MATLAB</span>
        </div>
      </div>
    </div>
  );
}

function ScreenshotPreview({ project }: { project: Project }) {
  if (!project.previewImage) {
    return null;
  }

  return (
    <div className="relative h-[15rem] w-full overflow-hidden rounded-md border border-white/[0.09] bg-[#070808] min-[390px]:h-[17rem] sm:h-[22rem] lg:h-[24rem]">
      <Image
        src={project.previewImage}
        alt={`${project.title} website preview`}
        fill
        sizes="(max-width: 1024px) calc(100vw - 3.5rem), 50vw"
        className="object-cover"
        style={{ objectPosition: project.previewPosition ?? "center top" }}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
    </div>
  );
}

function ProjectPreview({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  if (project.previewImage) {
    return <ScreenshotPreview project={project} />;
  }

  const legacyIndex = index > 0 ? index - 1 : index;

  switch (legacyIndex) {
    case 0:
      return <TcmPreview />;
    case 1:
      return <RestaurantPreview />;
    case 2:
      return <GameClubPreview />;
    case 4:
      return <IotPreview />;
    default:
      return <AcademicPreview />;
  }
}

function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const rowRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isPreviewLeft = index % 2 === 0;
  const reveal = getRevealVariants(reduceMotion);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const previewY = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const stableY: number | MotionValue<number> = reduceMotion ? 0 : previewY;
  const previewInitial = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, x: isPreviewLeft ? -28 : 28, y: 18 };
  const copyInitial = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, x: isPreviewLeft ? 28 : -28, y: 18 };

  return (
    <motion.article
      ref={rowRef}
      initial="rest"
      whileHover={reduceMotion ? undefined : "hover"}
      className={`group relative grid min-w-0 gap-6 rounded-lg border bg-[#09090a]/90 p-4 transition-[border-color,box-shadow] duration-300 sm:p-5 lg:grid-cols-2 lg:gap-7 lg:p-7 ${
        index === 0
          ? "border-[#c8a96a]/25 shadow-[0_30px_100px_rgba(66,43,20,0.16)] hover:border-[#d6bc82]/42 hover:shadow-[0_36px_110px_rgba(88,58,25,0.22)]"
          : "border-white/[0.08] hover:border-[#c8a96a]/28 hover:shadow-[0_30px_90px_rgba(0,0,0,0.34)]"
      }`}
      variants={{
        rest: { y: 0 },
        hover: { y: -5 },
      }}
      transition={{ duration: 0.24, ease: premiumEase }}
    >
      <motion.div
        initial={previewInitial}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={viewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.66,
          ease: premiumEase,
        }}
        className={`min-w-0 self-start lg:self-center ${
          isPreviewLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <motion.div
          style={{ y: stableY }}
          className="overflow-hidden rounded-md border border-white/[0.045] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-3"
        >
          <ProjectPreview project={project} index={index} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={copyInitial}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={viewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.66,
          delay: reduceMotion ? 0 : 0.06,
          ease: premiumEase,
        }}
        className={`flex min-w-0 flex-col justify-center px-2 py-4 sm:px-3 lg:py-7 ${
          isPreviewLeft ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[9px] text-[#625d56]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-8 bg-[#c8a96a]/45" />
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#b48d51]">
            {project.category}
          </span>
          {project.featured && (
            <span className="rounded-full border border-[#c8a96a]/20 bg-[#c8a96a]/[0.055] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#d4ba83]">
              Featured
            </span>
          )}
        </div>

        <h3 className="section-title mt-5 text-[clamp(1.75rem,7.5vw,2.1rem)] text-[#f1ede5] sm:text-[clamp(1.65rem,3vw,2.6rem)]">
          {project.title}
        </h3>
        <p className="body-copy mt-4 text-[15px] leading-7 text-[#aaa49b] sm:text-[15px]">
          {project.description}
        </p>

        <div className="mt-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#777169]">
            What I built / worked on
          </p>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            variants={staggerContainer(reduceMotion ? 0.01 : 0.055)}
            className="mt-3 grid gap-2.5"
          >
            {project.highlights
              .slice(0, index === 0 ? 6 : 4)
              .map((highlight) => (
                <motion.li
                  key={highlight}
                  variants={reveal}
                  className="flex items-start gap-2.5 text-[13px] leading-6 text-[#a29c93]"
                >
                  <Check
                    size={13}
                    className="mt-0.5 shrink-0 text-[#c8a96a]"
                    aria-hidden="true"
                  />
                  {highlight}
                </motion.li>
              ))}
          </motion.ul>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer(reduceMotion ? 0.01 : 0.045, 0.04)}
          className="mt-6 flex flex-wrap gap-2.5"
        >
          {project.technologies.map((technology) => (
            <motion.li
              key={technology}
              variants={reveal}
              className="rounded-full border border-white/[0.075] bg-black/30 px-3 py-1.5 font-mono text-[9px] leading-4 text-[#a49d94]"
            >
              {technology}
            </motion.li>
          ))}
        </motion.ul>

        <p
          lang="fa"
          dir="rtl"
          className="font-fa mt-6 border-r border-[#c8a96a]/22 pr-3 text-right text-sm leading-8 text-[#918b83]"
        >
          {project.persianSummary}
        </p>
      </motion.div>
    </motion.article>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progress = useTransform(scrollYProgress, [0.08, 0.9], [0, 1]);
  const accentY = useTransform(scrollYProgress, [0, 1], [70, -80]);
  const reveal = getRevealVariants(reduceMotion);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative scroll-mt-16 overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? 0 : accentY }}
        className="project-grid-glow pointer-events-none absolute right-0 top-24 h-[46rem] w-[46rem] max-w-full opacity-55"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(reduceMotion ? 0.02 : 0.08)}
          className="grid gap-6 border-b border-white/[0.07] pb-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-end lg:pb-14"
        >
          <div>
            <motion.div variants={reveal} className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-[#c8a96a]">
                03
              </span>
              <div className="gold-line h-px w-16" />
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#817c74]">
                Projects
              </p>
            </motion.div>
            <motion.h2
              variants={reveal}
              className="section-title mt-7 max-w-3xl text-4xl text-[#f5f2ea] sm:text-5xl lg:text-6xl"
            >
              Practical systems, explained through the work.
            </motion.h2>
          </div>
          <motion.div variants={reveal} className="lg:pb-1">
            <p className="body-copy max-w-md text-[15px] leading-7 text-[#9b958c]">
              Seven case studies spanning automotive validation, product
              interfaces, desktop operations, commerce, embedded systems, and
              engineering work.
            </p>
          </motion.div>
        </motion.div>

        <div className="relative mt-12 lg:mt-14">
          <div className="absolute bottom-0 left-[5px] top-0 hidden w-px bg-white/[0.07] xl:block" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? 1 : progress }}
            className="absolute bottom-0 left-[5px] top-0 hidden w-px origin-top bg-[#c8a96a] xl:block"
          />
          <div className="space-y-12 sm:space-y-10 lg:space-y-12 xl:pl-10">
            {projects.map((project, index) => (
              <div key={project.title} className="relative min-w-0">
                <span className="absolute -left-[2.38rem] top-10 hidden h-[11px] w-[11px] rounded-full border border-[#c8a96a]/60 bg-[#090909] xl:block" />
                <ProjectShowcase project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
