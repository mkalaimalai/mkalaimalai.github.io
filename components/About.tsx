import SectionHeader from "./SectionHeader";
import RevealOnScroll from "./RevealOnScroll";

const strengths = [
  "Architecture",
  "Engineering Management",
  "Hiring & Engagement",
  "Mentoring & Coaching",
  "Team Building",
  "Gen AI Initiatives",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-cream max-md:py-16 max-md:px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader number="01" title="About" />
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            <div className="space-y-5 text-[var(--t-body-text)]">
              <p className="about-drop-cap">
                Senior Principal Architect at JPMorganChase, based in Bangalore, India, with over 27 years of experience building complex, large-scale distributed systems. I&apos;ve led engineering teams of ~70 engineers across 5 geographies, driving platforms that power billions of notifications and billions in revenue.
              </p>
              <p>
                My career spans leadership roles at JPMorganChase, Intuit, ADP, Warner Bros., Mercury Insurance, Tavant Technologies, Hewlett-Packard, Birlasoft, and Infogain — from architecting global web platforms and notification systems to building integration platforms and digital services.
              </p>
              <p>
                I hold an MBA in Systems and a B.Tech in Engineering, am an AWS Certified Solutions Architect, and hold two U.S. patents in distributed systems design.
              </p>
            </div>
            <div className="quote-aside relative p-10 border border-rule bg-paper">
              <blockquote className="font-display text-[1.35rem] italic leading-relaxed text-ink mb-4">
                The best architectures emerge from a deep understanding of the problem domain, not from the blind application of patterns.
              </blockquote>
              <cite className="font-mono text-[0.72rem] tracking-widest uppercase text-warm-gray not-italic">
                — A principle I build by
              </cite>
              <div className="mt-8 pt-8 border-t border-rule">
                <h4 className="font-mono text-[0.72rem] tracking-[0.15em] uppercase text-warm-gray mb-3">
                  Core Strengths
                </h4>
                <div className="flex flex-wrap gap-2">
                  {strengths.map((s) => (
                    <span
                      key={s}
                      className="px-3.5 py-1.5 bg-cream text-[0.82rem] text-ink border border-rule"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
