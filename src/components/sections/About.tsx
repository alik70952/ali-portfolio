import Image from "next/image";
import { ArrowUpRight, Braces, Cpu, Database, Smartphone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const focusItems = [
  { icon: Braces, title: "Next.js interfaces" },
  { icon: Database, title: "Python data tools" },
  { icon: Cpu, title: "IoT experiments" },
  { icon: Smartphone, title: "Automotive diagnostics" },
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl scroll-mt-16 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <Reveal>
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.2em] text-[#c8a96a]">
            01
          </span>
          <div className="gold-line h-px w-16" />
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#817c74]">
            About
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal direction="right" amount={0.25} className="relative min-h-[28rem]">
          <div className="relative h-full min-h-[28rem] overflow-hidden rounded-lg border border-white/[0.09] bg-[#0b0b0c]">
            <Image
              src="/images/ali-portrait-2.png"
              alt="Ali Kazemi outdoors"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-[61%_35%] saturate-[0.7] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#c8a96a]">
                Personal approach
              </p>
              <p className="mt-3 max-w-sm text-lg font-medium leading-7 text-[#f0ece4]">
                Learn by building, testing, and improving real ideas.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal direction="left" amount={0.25} className="glass-panel rounded-lg p-7 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#c8a96a]">
                More than a template
              </p>
              <ArrowUpRight size={18} className="text-[#766b58]" aria-hidden="true" />
            </div>
            <h2 className="section-title mt-5 max-w-3xl text-3xl text-[#f5f2ea] sm:text-5xl">
              I use projects to connect software thinking with practical systems.
            </h2>
            <p className="body-copy mt-7 max-w-3xl text-base text-[#a7a29a]">
              I am a Computer Engineering student and junior developer who enjoys
              building practical software projects, experimenting with new
              technologies, and turning ideas into working products. My work includes
              web interfaces, mobile app concepts, Python tools, WordPress and
              WooCommerce websites, IoT experiments, and automotive data analysis
              utilities.
            </p>
            <div className="mt-8 border-r border-[#c8a96a]/35 pr-5">
              <p
                lang="fa"
                dir="rtl"
                className="font-fa text-right text-base leading-9 text-[#c5beb3]"
              >
                من روی پروژه‌های واقعی کار می‌کنم تا مهارت‌هایم را در طراحی رابط
                کاربری، توسعه نرم‌افزار، تحلیل داده و اتصال سخت‌افزار به نرم‌افزار
                بهتر کنم.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-lg border border-white/[0.08] bg-[#0b0b0c]/80 p-6 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#817c74]">
              Currently exploring
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {focusItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5"
                  >
                    <Icon size={16} className="text-[#c8a96a]" aria-hidden="true" />
                    <span className="text-sm text-[#bcb5aa]">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
