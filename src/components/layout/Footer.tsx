import { GitBranch, Mail, MessageCircle, Send } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const contactLinks = [
  {
    label: "Email Ali Kazemi",
    href: "mailto:alik70952@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "Open Ali Kazemi's GitHub profile",
    href: "https://github.com/alik70952",
    icon: GitBranch,
    external: true,
  },
  {
    label: "Message Ali Kazemi on Telegram",
    href: "https://t.me/isthisjustice",
    icon: Send,
    external: true,
  },
  {
    label: "Message Ali Kazemi on WhatsApp",
    href: "https://wa.me/989015092674",
    icon: MessageCircle,
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-8 sm:px-8 lg:px-12">
      <div className="grid gap-7 border-t border-white/[0.07] py-8 text-sm text-[#77726a] md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div>
          <a
            href="#hero"
            aria-label="Return to the top of Ali Kazemi's portfolio"
            className="inline-block font-medium text-[#c9c2b6] transition-colors duration-200 hover:text-[#d6bf8d]"
          >
            Ali Kazemi
          </a>
          <p
            lang="fa"
            dir="rtl"
            className="font-persian mt-1 w-fit text-xs text-[#77726a]"
          >
            علی کاظمی
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-10 items-center text-[13px] text-[#918b82] transition-colors duration-200 hover:text-[#c8a96a]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:text-right">
          <div className="flex flex-wrap items-center gap-2 md:justify-end">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-[#8f887d] transition-[border-color,background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#c8a96a]/35 hover:bg-[#c8a96a]/[0.06] hover:text-[#d8c18f]"
                >
                  <Icon
                    size={16}
                    strokeWidth={1.6}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:scale-105"
                  />
                </a>
              );
            })}
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em]">
            Learning, building, improving
          </p>
        </div>
      </div>
    </footer>
  );
}
