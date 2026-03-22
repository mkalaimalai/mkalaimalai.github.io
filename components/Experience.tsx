import SectionHeader from "./SectionHeader";
import RevealOnScroll from "./RevealOnScroll";

interface Role {
  dates: string;
  title: string;
  description: string;
  location: string;
}

const roles: Role[] = [
  {
    dates: "2025 —\nPresent",
    title: "Senior Principal Architect — JPMorganChase",
    description: "Building and leading the Architecture & Engineering team in Asset & Wealth Management from the ground up. Driving AI-native SDLC adoption, integrating AI into the technology stack, and modernizing CI/CD pipelines using the Harness platform.",
    location: "Bangalore, India",
  },
  {
    dates: "Nov 2018 —\n2025",
    title: "Principal Architect — Intuit",
    description:"Led large engineering across multipe geographies, owning two of four capability pillars in the GTM Tech Org driving $1.5B revenue. Built the Global Web Platform powering 100% of marketing, help, and in-product content. Drove GTM Tech Gen AI initiatives. Delivered the notification platform serving 3.5B+ notifications annually.",
    location: "Bangalore, India",
  },
  {
    dates: "Aug 2015 —\nOct 2018",
    title: "Principal Architect — ADP",
    description:
      "Led SmartConnect integration platform connecting cloud payroll systems (Workday, Oracle Fusion) with compliance products driving $2.5B revenue. Introduced Mule Anypoint, Akka, and Akka Streams for fast data streaming.",
    location: "Pasadena, California, USA",
  },
  {
    dates: "Sep 2008 —\nAug 2015",
    title: "Senior Architect — Warner Bros.",
    description:
      "Led and delivered key applications in WB Advanced Digital Services including Flixster, International Digital Copy DC2.0, OutMyWindow, WarnerBrosID, Dexter, NonTheatrical System, and Journalist Portal.",
    location: "Burbank, California, USA",
  },
  {
    dates: "Feb 2007 —\nSep 2008",
    title: "Senior Architect — Mercury Insurance",
    description: "Architecture and engineering leadership for insurance technology systems.",
    location: "Brea, California, USA",
  },
  {
    dates: "Apr 2004 —\nJan 2007",
    title: "Technical Architect — Tavant Technologies",
    description: "Technical architecture and solution design for enterprise software.",
    location: "Orange, California, USA",
  },
  {
    dates: "Sep 2002 —\nMar 2004",
    title: "Technical Lead — Hewlett-Packard",
    description: "Technical leadership for enterprise projects.",
    location: "Bangalore, India",
  },
  {
    dates: "Aug 2001 —\nSep 2002",
    title: "Technical Lead — Birlasoft",
    description: "Technical leadership for software delivery.",
    location: "Noida, India",
  },
  {
    dates: "Jul 1997 —\nJul 2001",
    title: "Sr. Software Engineer — InfoGain",
    description: "Software engineering and development.",
    location: "Noida, India",
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
                className={`experience-row grid grid-cols-[120px_1fr_auto] gap-8 py-8 border-b border-rule items-baseline transition-colors duration-300 hover:px-6 max-md:grid-cols-1 max-md:gap-1 ${
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
