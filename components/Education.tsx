import SectionHeader from "./SectionHeader";
import RevealOnScroll from "./RevealOnScroll";

export default function Education() {
  return (
    <section id="education" className="py-24 px-8 bg-cream max-md:py-16 max-md:px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader number="04" title="Education & Patents" />
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-16 items-start max-md:grid-cols-1">
            <div className="space-y-5 text-[var(--t-body-text)]">
              <h4 className="font-mono text-[0.72rem] tracking-[0.15em] uppercase text-warm-gray mb-4">
                Education
              </h4>
              <p>
                <strong>MBA (Systems)</strong> — School of Business Management, S V University
              </p>
              <p>
                <strong>Bachelor of Technology</strong> — SVU College of Engineering, SV University
              </p>
              <h4 className="font-mono text-[0.72rem] tracking-[0.15em] uppercase text-warm-gray mb-4 mt-8">
                Certifications
              </h4>
              <p>
                <strong>AWS Certified Solutions Architect</strong> — Associate
              </p>
            </div>
            <div className="space-y-5 text-[var(--t-body-text)]">
              <h4 className="font-mono text-[0.72rem] tracking-[0.15em] uppercase text-warm-gray mb-4">
                U.S. Patents
              </h4>
              <p>
                <a href="https://patents.google.com/patent/US20200117747A1/en" target="_blank" rel="noopener noreferrer" className="text-terra hover:text-terra-light transition-colors duration-300"><strong>US20200117747A1</strong></a> — &ldquo;Actor-based information system&rdquo;, ADP Inc
              </p>
              <p>
                <a href="https://patents.google.com/patent/US10812602B2/en" target="_blank" rel="noopener noreferrer" className="text-terra hover:text-terra-light transition-colors duration-300"><strong>US10812602B2</strong></a> — &ldquo;Devices and methods for enabling communication among multiple services having a different, incompatible client profile&rdquo;, ADP Inc
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
