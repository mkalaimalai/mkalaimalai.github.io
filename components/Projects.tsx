import SectionHeader from "./SectionHeader";
import RevealOnScroll from "./RevealOnScroll";

const projects = [
  {
    title: "Karuna Karma Soul & DNA Healing",
    description:
      "An interactive daily practice guide for Karuna Reiki healing — featuring chakra mappings, symbol references, guided meditation audio, and visualization video.",
    href: "/karuna-healing",
    tags: ["Healing", "Meditation", "Chakras", "Karuna Reiki"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 bg-cream max-md:py-16 max-md:px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader number="05" title="Projects" />
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group relative bg-paper border border-rule p-10 no-underline text-inherit transition-all duration-350 overflow-hidden hover:-translate-y-1 project-card"
              >
                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-terra scale-x-0 transition-transform duration-350 group-hover:scale-x-100" />

                <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase inline-flex items-center gap-2 mb-4 text-sage">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                  Live
                </div>
                <h3 className="font-display text-[1.6rem] font-normal mb-3">
                  {project.title}
                </h3>
                <p className="text-[0.9rem] text-warm-gray leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.68rem] px-2.5 py-1 bg-cream text-warm-gray"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
