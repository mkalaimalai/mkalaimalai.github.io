"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const onScroll = () => {
      const current = window.pageYOffset;
      setHidden(current > lastScroll && current > 120);
      lastScroll = current;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 bg-paper/92 backdrop-blur-[12px] border-b border-rule transition-transform duration-350 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-8 flex justify-between items-center h-16">
        <a href="#" className="font-display text-[1.35rem] text-ink no-underline tracking-tight">
          madhu<span className="text-terra">.</span>kalaimalai
        </a>

        {/* Mobile toggle */}
        <button
          className="md-nav:hidden relative w-7 h-5 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block absolute left-0 w-full h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "top-[9px] rotate-45" : "top-0"}`} />
          <span className={`block absolute left-0 w-full h-0.5 bg-ink transition-all duration-300 top-[9px] ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block absolute left-0 w-full h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "top-[9px] -rotate-45" : "top-[18px]"}`} />
        </button>

        {/* Desktop links */}
        <ul className="hidden md-nav:flex list-none gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="no-underline text-warm-gray text-[0.82rem] font-medium tracking-widest uppercase transition-colors duration-250 hover:text-terra"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="md-nav:hidden absolute top-16 left-0 right-0 bg-paper/98 flex flex-col gap-4 px-8 py-6 border-b border-rule list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="no-underline text-warm-gray text-[0.82rem] font-medium tracking-widest uppercase transition-colors duration-250 hover:text-terra"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
