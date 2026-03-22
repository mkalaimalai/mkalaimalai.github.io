"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

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
  const { theme, toggle } = useTheme();

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
      className={`fixed top-0 left-0 right-0 z-100 backdrop-blur-[12px] border-b border-rule transition-transform duration-350 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ background: "var(--t-nav-bg)" }}
    >
      <div className="max-w-[1100px] mx-auto px-8 flex justify-between items-center h-16">
        <a href="#" className="font-display text-[1.35rem] text-ink no-underline tracking-tight">
          madhu<span className="text-terra">.</span>kalaimalai
        </a>

        <div className="flex items-center gap-6">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-rule bg-transparent cursor-pointer transition-colors hover:border-terra text-warm-gray hover:text-terra"
          >
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

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
        </div>

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
          <ul
            className="md-nav:hidden absolute top-16 left-0 right-0 flex flex-col gap-4 px-8 py-6 border-b border-rule list-none"
            style={{ background: "var(--t-nav-mobile-bg)" }}
          >
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
