import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 max-md:py-16 max-md:px-6" style={{ background: "var(--t-contact-bg)" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-baseline gap-6 mb-14">
          <span className="font-display text-[3.5rem] italic text-terra opacity-30 leading-none">
            06
          </span>
          <h2 className="font-display text-[2.4rem] font-normal tracking-tight" style={{ color: "var(--t-contact-heading)" }}>
            Get in Touch
          </h2>
          <div className="flex-1 h-px ml-4" style={{ background: "var(--t-contact-rule)" }} />
        </div>
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1">
            <div>
              <p className="text-[1.05rem] leading-[1.8] mb-8" style={{ color: "var(--t-contact-text)" }}>
                Whether you want to discuss architecture patterns, explore collaboration opportunities, or talk about distributed systems and technology leadership — I&apos;d love to hear from you.
              </p>
              <a
                href="mailto:madhu.kalaimalai@gmail.com"
                className="font-display text-[1.8rem] no-underline border-b border-terra pb-0.5 transition-colors duration-300 hover:text-terra-light"
                style={{ color: "var(--t-contact-email)" }}
              >
                madhu.kalaimalai@gmail.com
              </a>
            </div>
            <div className="flex flex-col">
              {[
                { label: "GitHub", href: "https://github.com/in/madhukalaimalai" },
                { label: "LinkedIn", href: "https://linkedin.com/in/mkalaimalai" },
              ].map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex justify-between items-center py-5 no-underline text-[0.9rem] transition-all duration-300 hover:text-paper hover:pl-3 ${i === 0 ? "border-t" : ""}`}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "var(--t-contact-border)",
                    color: "var(--t-contact-text)",
                  }}
                >
                  <span>{link.label}</span>
                  <span className="text-[1.2rem] transition-transform duration-300" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
