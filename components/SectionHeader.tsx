import RevealOnScroll from "./RevealOnScroll";

export default function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <RevealOnScroll>
      <div className="flex items-baseline gap-6 mb-14">
        <span className="font-display text-[3.5rem] italic text-terra-light opacity-50 leading-none">
          {number}
        </span>
        <h2 className="font-display text-[2.4rem] font-normal tracking-tight">
          {title}
        </h2>
        <div className="flex-1 h-px bg-rule ml-4" />
      </div>
    </RevealOnScroll>
  );
}
