import SectionHeader from "./SectionHeader";
import RevealOnScroll from "./RevealOnScroll";

const roles = [
  {
    dates: "Nov 2018 —\nPresent",
    title: "Principal Architect — Intuit",
    description:
      "Technology leader for ~70 engineers across 5 geographies. Responsible for two of four capability pillars of GTM Tech Org driving $1.5B revenue. Built Global Web Platform powering 100% of marketing, help, and in-product content. Led GTM Tech Gen AI initiatives. Built notification platform delivering 3.5B+ notifications annually.",
    location: "Bangalore",
  },
  {
    dates: "Aug 2015 —\nOct 2018",
    title: "Principal Architect — ADP",
    description:
      "Led SmartConnect integration platform connecting cloud payroll systems (Workday, Oracle Fusion) with compliance products driving $2.5B revenue. Introduced Mule Anypoint, Akka, and Akka Streams for fast data streaming.",
    location: "Pasadena, CA",
  },
  {
    dates: "Sep 2008 —\nAug 2015",
    title: "Senior Architect — Warner Bros.",
    description:
      "Led and delivered key applications in WB Advanced Digital Services including Flixster, International Digital Copy DC2.0, OutMyWindow, WarnerBrosID, Dexter, NonTheatrical System, and Journalist Portal.",
    location: "Burbank, CA",
  },
  {
    dates: "Feb 2007 —\nSep 2008",
    title: "Senior Architect — Mercury Insurance",
    description: "Architecture and engineering leadership for insurance technology systems.",
    location: "Brea, CA",
  },
  {
    dates: "Apr 2004 —\nJan 2007",
    title: "Technical Architect — Tavant Technologies",
    description: "Technical architecture and solution design for enterprise software.",
    location: "Orange, CA",
  },
  {
    dates: "Sep 2002 —\nMar 2004",
    title: "Technical Lead — Hewlett-Packard",
    description: "Technical leadership for enterprise projects.",
    location: "Bangalore",
  },
  {
    dates: "Aug 2001 —\nSep 2002",
    title: "Technical Lead — Birlasoft",
    description: "Technical leadership for software delivery.",
    location: "Noida",
  },
  {
    dates: "Jul 1997 —\nJul 2001",
    title: "Sr. Software Engineer — InfoGain",
    description: "Software engineering and development.",
    location: "Noida",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 max-md:py-16 max-md:px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader number="02" title="Experience" />
        <RevealOnScroll>
          <div className="grid gap-0">
            {roles.map((role, i) => (
              <div
                key={role.title}
                className={`grid grid-cols-[120px_1fr_auto] gap-8 py-8 border-b border-rule items-baseline transition-colors duration-300 hover:bg-terra/[0.03] hover:px-6 max-md:grid-cols-1 max-md:gap-1 ${
                  i === 0 ? "border-t border-rule" : ""
                }`}
              >
                <span className="font-mono text-[0.75rem] text-warm-gray pt-1 whitespace-pre-line">
                  {role.dates}
                </span>
                <div>
                  <h3 className="font-display text-[1.45rem] font-normal mb-1.5 tracking-tight">
                    {role.title}
                  </h3>
                  <p className="text-[0.92rem] text-warm-gray leading-relaxed">{role.description}</p>
                </div>
                <span className="font-mono text-[0.68rem] tracking-widest uppercase text-sage whitespace-nowrap pt-1 max-md:hidden">
                  {role.location}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
