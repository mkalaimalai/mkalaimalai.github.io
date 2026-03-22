export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-8 relative overflow-hidden">
      <div className="hero-orb-terra" />
      <div className="hero-orb-sage" />

      <div className="max-w-[780px] text-center relative z-1">
        <p className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-terra mb-8 animate-fade-up-1">
          Principal Architect &middot; Technology Leader
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-normal leading-[1.1] tracking-tight mb-6 animate-fade-up-2">
          Building <em className="italic text-terra">complex</em>
          <br />
          large-scale
          <br />
          distributed systems
        </h1>
        <p className="text-[1.15rem] text-warm-gray leading-[1.8] max-w-[560px] mx-auto mb-10 animate-fade-up-3">
          Accomplished technology leader with a proven track record at Intuit, ADP, Warner Bros., and more. Passionate about architecture, engineering leadership, and building systems that scale.
        </p>
        <div className="inline-flex gap-4 animate-fade-up-4 max-sm:flex-col max-sm:gap-3">
          <a
            href="#experience"
            className="inline-block px-8 py-3.5 font-body text-[0.82rem] font-medium tracking-wide uppercase no-underline rounded-sm transition-all duration-300 bg-ink text-paper border-[1.5px] border-ink hover:bg-terra hover:border-terra max-sm:text-center"
          >
            View experience
          </a>
          <a
            href="#skills"
            className="inline-block px-8 py-3.5 font-body text-[0.82rem] font-medium tracking-wide uppercase no-underline rounded-sm transition-all duration-300 bg-transparent text-ink border-[1.5px] border-rule hover:border-ink max-sm:text-center"
          >
            Tech stack
          </a>
        </div>
      </div>

      <div className="scroll-line absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-12 bg-rule animate-fade-in-late" />
    </section>
  );
}
