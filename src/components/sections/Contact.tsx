"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "alik70952@gmail.com",
    href: "mailto:alik70952@gmail.com",
    ariaLabel: "Send an email to Ali Kazemi at alik70952@gmail.com",
    external: false,
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/alik70952",
    href: "https://github.com/alik70952",
    ariaLabel: "Open Ali Kazemi's GitHub profile",
    external: true,
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@isthisjustice",
    href: "https://t.me/isthisjustice",
    ariaLabel: "Message Ali Kazemi on Telegram",
    external: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+989015092674",
    href: "https://wa.me/989015092674",
    ariaLabel: "Message Ali Kazemi on WhatsApp",
    external: true,
  },
];

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl scroll-mt-16 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-lg border border-white/[0.09] bg-[linear-gradient(135deg,rgba(200,169,106,0.08),rgba(11,11,12,0.96)_35%,rgba(8,8,8,0.98))] px-5 py-14 shadow-[0_35px_100px_rgba(0,0,0,0.4)] sm:px-10 sm:py-20 lg:px-14">
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c8a96a]/35 to-transparent" />

          <div className="relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="flex w-fit items-center gap-3 rounded-full border border-[#c8a96a]/22 bg-[#c8a96a]/[0.05] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#cdb57f]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c8a96a]" />
                Available for the right opportunity
              </div>
              <h2 className="section-title mt-7 max-w-3xl text-4xl text-[#f5f2ea] sm:text-6xl">
                Let&apos;s turn a useful idea into something real.
              </h2>
              <p className="body-copy mt-6 max-w-2xl text-base text-[#9f998f]">
                I am interested in junior development opportunities, technical
                collaborations, and projects where I can contribute while continuing
                to grow.
              </p>
              <p
                lang="fa"
                dir="rtl"
                className="font-fa mt-3 max-w-2xl text-right text-[15px] leading-8 text-[#99938a]"
              >
                برای همکاری، فرصت‌های توسعه جونیور و پروژه‌های فنی می‌توانید با من در
                ارتباط باشید.
              </p>
              <motion.a
                href="mailto:alik70952@gmail.com"
                aria-label="Email Ali Kazemi at alik70952@gmail.com"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#c8a96a] px-6 py-3 text-sm font-semibold text-[#090807] shadow-[0_14px_40px_rgba(168,121,61,0.2)] transition-colors duration-200 hover:bg-[#d4ba83]"
              >
                Start a conversation
                <ArrowUpRight size={17} aria-hidden="true" />
              </motion.a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: reduceMotion ? 0 : 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      aria-label={item.ariaLabel}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="group flex min-h-[4.8rem] items-center gap-4 rounded-2xl border border-white/[0.075] bg-black/25 p-4 transition-[border-color,background-color,transform] duration-200 hover:border-[#c8a96a]/28 hover:bg-[#c8a96a]/[0.035]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#c8a96a]/18 bg-[#c8a96a]/[0.045] text-[#c8a96a]">
                        <Icon size={17} strokeWidth={1.55} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#6f6a63]">
                          {item.label}
                        </p>
                        <p className="mt-1 break-all text-sm text-[#c6bfb5]">
                          {item.value}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                        className="ml-auto shrink-0 text-[#625e58] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8a96a]"
                      />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
