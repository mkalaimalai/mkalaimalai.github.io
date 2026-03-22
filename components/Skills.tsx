import SectionHeader from "./SectionHeader";
import RevealOnScroll from "./RevealOnScroll";

function SkillLevel({ filled }: { filled: number }) {
  return (
    <div className="flex gap-[3px]">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`w-3 h-[3px] ${i < filled ? "bg-terra" : "bg-rule"}`}
        />
      ))}
    </div>
  );
}

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 5 },
      { name: "C / C++", level: 4 },
      { name: "Python", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "Scala / Ruby", level: 3 },
    ],
  },
  {
    title: "Data & Middleware",
    skills: [
      { name: "MySQL / Oracle / DB2", level: 5 },
      { name: "MongoDB / Cassandra / Redis", level: 4 },
      { name: "DynamoDB / DocumentDB", level: 4 },
      { name: "Kafka / RabbitMQ / Pulsar", level: 5 },
      { name: "Mulesoft Anypoint", level: 4 },
    ],
  },
  {
    title: "Frameworks & DevOps",
    skills: [
      { name: "Spring Boot / Java EE", level: 5 },
      { name: "Akka / Akka Streams", level: 4 },
      { name: "Docker / Kubernetes", level: 4 },
      { name: "AWS / Google Cloud", level: 5 },
      { name: "Jenkins / Maven / Git", level: 4 },
    ],
  },
  {
    title: "Architecture & Design",
    skills: [
      { name: "TOGAF", level: 5 },
      { name: "Domain-Driven Design", level: 5 },
      { name: "Microservices", level: 5 },
      { name: "Hexagonal / Clean Architecture", level: 5 },
      { name: "UML", level: 4 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 max-md:py-16 max-md:px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader number="03" title="Tech Stack" />
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-12 max-md:gap-8 max-sm:grid-cols-1">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h3 className="font-display text-[1.3rem] font-normal mb-6 pb-3 border-b-2 border-terra inline-block">
                  {cat.title}
                </h3>
                <ul className="list-none">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="py-2 text-[0.9rem] text-[#3a3632] border-b border-rule/50 flex justify-between items-center"
                    >
                      {skill.name}
                      <SkillLevel filled={skill.level} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
