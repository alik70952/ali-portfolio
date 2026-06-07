const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
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
                  className="inline-flex min-h-10 items-center text-xs text-[#918b82] transition-colors duration-200 hover:text-[#c8a96a]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-mono text-[10px] uppercase tracking-[0.18em] md:text-right">
          Learning, building, improving
        </p>
      </div>
    </footer>
  );
}
