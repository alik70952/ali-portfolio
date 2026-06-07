import { GraduationCap, Hammer, Network, Wrench } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const timeline = [
  {
    period: "Present",
    title: "Computer Engineering Student",
    subtitle: "Education",
    description:
      "Developing an academic foundation in programming, computer systems, data, networks, and engineering problem solving.",
    icon: GraduationCap,
  },
  {
    period: "Ongoing",
    title: "Junior Developer / Project Builder",
    subtitle: "Software practice",
    description:
      "Building practical web, mobile, desktop, and data-focused projects while improving code quality and product thinking.",
    icon: Wrench,
  },
  {
    period: "Practice",
    title: "IT & Network Support",
    subtitle: "Technical support",
    description:
      "Practicing system setup, software troubleshooting, network fundamentals, and structured technical diagnosis.",
    icon: Network,
  },
  {
    period: "Self-directed",
    title: "Software & Hardware Experiments",
    subtitle: "Independent learning",
    description:
      "Exploring ESP32, Arduino, automotive logs, Python automation, and the connection between hardware signals and software tools.",
    icon: Hammer,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-7xl scroll-mt-16 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-[#c8a96a]">
                04
              </span>
              <div className="gold-line h-px w-16" />
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#817c74]">
                Journey
              </p>
            </div>
            <h2 className="section-title mt-7 text-3xl text-[#f5f2ea] sm:text-5xl">
              Experience &amp; education
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#918c84]">
              An early-career path shaped by formal study, technical support
              practice, and consistent hands-on experimentation.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-8 left-[1.15rem] top-8 w-px bg-gradient-to-b from-[#c8a96a]/55 via-[#a8793d]/20 to-transparent sm:left-[1.4rem]" />
          <div className="space-y-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.07} direction="left">
                  <article className="group relative ml-12 rounded-lg border border-white/[0.08] bg-[#0b0b0c]/82 p-6 transition-[border-color,background-color,transform] duration-300 hover:border-[#c8a96a]/22 hover:bg-[#0d0c0b] sm:ml-16 sm:p-8">
                    <div className="absolute -left-[3.55rem] top-7 flex h-9 w-9 items-center justify-center rounded-full border border-[#c8a96a]/30 bg-[#080808] text-[#c8a96a] shadow-[0_0_0_6px_rgba(5,5,5,0.95),0_0_26px_rgba(168,121,61,0.12)] sm:-left-[4.7rem] sm:h-11 sm:w-11">
                      <Icon size={17} strokeWidth={1.55} aria-hidden="true" />
                    </div>
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#a8793d]">
                          {item.subtitle}
                        </p>
                        <h3 className="mt-3 text-xl font-semibold text-[#eeeae2] sm:text-2xl">
                          {item.title}
                        </h3>
                      </div>
                      <span className="w-fit rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#817b73]">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#9d978e] sm:text-base">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
