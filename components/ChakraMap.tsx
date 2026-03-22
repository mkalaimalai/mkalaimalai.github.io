"use client";

import { useState, useCallback, useRef } from "react";

const chakraData = [
  {
    id: 6, sanskrit: "Ajna", devanagari: "ॐ", english: "Third Eye",
    mantra: "Om", color: "#3f51b5",
    planet: "Moon (Chandra)", element: "Mind / Light",
    karmicIssue: "Mind — Vision & Clarity",
    negEmotion: "Illusion", posEmotion: "Insight",
    system: "Nervous", topPct: 7, freq: 426,
  },
  {
    id: 5, sanskrit: "Vishuddha", devanagari: "हं", english: "Throat",
    mantra: "Ham", color: "#29ABE2",
    planet: "Mercury (Buddh)", element: "Ether / Space",
    karmicIssue: "Emotional — Dharmic Duty",
    negEmotion: "Lies", posEmotion: "Truth",
    system: "Respiratory", topPct: 15, freq: 384,
  },
  {
    id: 4, sanskrit: "Anahata", devanagari: "यं", english: "Heart",
    mantra: "Yam", color: "#39B54A",
    planet: "Venus (Shukra)", element: "Air",
    karmicIssue: "Love — Soul Karma",
    negEmotion: "Grief", posEmotion: "Love",
    system: "Cardiovascular", topPct: 25, freq: 341,
  },
  {
    id: 3, sanskrit: "Manipura", devanagari: "रं", english: "Solar Plexus",
    mantra: "Ram", color: "#FBB03B",
    planet: "Jupiter (Guru)", element: "Fire",
    karmicIssue: "Ancestor — Parents' Karma",
    negEmotion: "Shame / Ego", posEmotion: "Willpower",
    system: "Digestive", topPct: 39, freq: 320,
  },
  {
    id: 2, sanskrit: "Svadhisthana", devanagari: "वं", english: "Sacral",
    mantra: "Vam", color: "#F7931E",
    planet: "Saturn (Shani)", element: "Water",
    karmicIssue: "Present Life Karma",
    negEmotion: "Guilt / Insecurity", posEmotion: "Pleasure",
    system: "Lymphatic", topPct: 47, freq: 288,
  },
  {
    id: 1, sanskrit: "Muladhara", devanagari: "लं", english: "Root",
    mantra: "Lam", color: "#ED1C24",
    planet: "Mars (Mangal)", element: "Earth",
    karmicIssue: "Past Life Karma",
    negEmotion: "Fear", posEmotion: "Survival",
    system: "Physical Body", topPct: 54, freq: 256,
  },
];

function playChakraTone(freq: number) {
  const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  const now = ctx.currentTime;
  const duration = 2.5;

  // Main tone
  const osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, now);

  // Gentle vibrato
  const vibrato = ctx.createOscillator();
  vibrato.frequency.setValueAtTime(5, now);
  const vibratoGain = ctx.createGain();
  vibratoGain.gain.setValueAtTime(2, now);
  vibrato.connect(vibratoGain);
  vibratoGain.connect(osc.frequency);

  // Soft harmonic overtone
  const osc2 = ctx.createOscillator();
  osc2.type = "sine";
  osc2.frequency.setValueAtTime(freq * 2, now);

  // Envelope — gentle fade in and out
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.25, now + 0.3);
  gain.gain.setValueAtTime(0.25, now + duration - 1);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  const gain2 = ctx.createGain();
  gain2.gain.setValueAtTime(0, now);
  gain2.gain.linearRampToValueAtTime(0.06, now + 0.3);
  gain2.gain.setValueAtTime(0.06, now + duration - 1);
  gain2.gain.exponentialRampToValueAtTime(0.001, now + duration);

  osc.connect(gain).connect(ctx.destination);
  osc2.connect(gain2).connect(ctx.destination);
  vibrato.start(now);
  osc.start(now);
  osc2.start(now);
  osc.stop(now + duration);
  osc2.stop(now + duration);
  vibrato.stop(now + duration);

  setTimeout(() => ctx.close(), (duration + 0.5) * 1000);
}

export default function ChakraMap() {
  const [active, setActive] = useState<number | null>(null);

  const selectChakra = useCallback((id: number) => {
    const chakra = chakraData.find((c) => c.id === id);
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
      if (chakra) playChakraTone(chakra.freq);
    }
  }, [active]);

  return (
    <>
      {/* Desktop: body + aligned rows */}
      <div className="hidden md:flex gap-0 items-start justify-center">
        {/* Human silhouette column */}
        <div className="relative shrink-0" style={{ width: 320, height: 750 }}>
          {/* SVG meditation silhouette */}
          <svg viewBox="0 0 200 380" className="w-full h-auto opacity-15" aria-hidden="true">
            <ellipse cx="100" cy="30" rx="22" ry="26" fill="var(--color-k-text)" />
            <rect x="92" y="54" width="16" height="16" rx="4" fill="var(--color-k-text)" />
            <path d="M65 70 Q60 70 55 90 Q48 130 55 180 Q60 210 70 240 L130 240 Q140 210 145 180 Q152 130 145 90 Q140 70 135 70 Z" fill="var(--color-k-text)" />
            <path d="M55 90 Q30 110 20 150 Q15 170 30 200 Q45 220 70 235" fill="none" stroke="var(--color-k-text)" strokeWidth="14" strokeLinecap="round" />
            <path d="M145 90 Q170 110 180 150 Q185 170 170 200 Q155 220 130 235" fill="none" stroke="var(--color-k-text)" strokeWidth="14" strokeLinecap="round" />
            <path d="M75 240 Q50 260 35 290 Q25 310 40 320 Q60 330 85 310 Q95 300 100 280" fill="var(--color-k-text)" />
            <path d="M125 240 Q150 260 165 290 Q175 310 160 320 Q140 330 115 310 Q105 300 100 280" fill="var(--color-k-text)" />
          </svg>

          {/* Rainbow spine */}
          <div
            className="absolute z-[5] pointer-events-none"
            style={{
              left: "50%", transform: "translateX(-50%)", width: 2,
              top: `${chakraData[0].topPct}%`,
              bottom: `${100 - chakraData[chakraData.length - 1].topPct}%`,
              background: "linear-gradient(to bottom, #3f51b5, #29ABE2, #39B54A, #FBB03B, #F7931E, #ED1C24)",
              opacity: 0.4,
            }}
          />

          {/* Chakra orbs */}
          {chakraData.map((c) => (
            <button
              key={c.id}
              onClick={() => selectChakra(c.id)}
              className="absolute z-10 flex items-center justify-center cursor-pointer border-none p-0"
              style={{
                left: "50%", top: `${c.topPct}%`,
                transform: "translate(-50%, -50%)",
                width: active === c.id ? 48 : 36,
                height: active === c.id ? 48 : 36,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${c.color}ee, ${c.color}77)`,
                border: active === c.id ? `3px solid var(--color-k-gold)` : `2px solid ${c.color}aa`,
                boxShadow: active === c.id
                  ? `0 0 28px ${c.color}bb, 0 0 56px ${c.color}44`
                  : `0 0 14px ${c.color}55`,
                transition: "all 0.3s ease",
              }}
            >
              <span className="text-white text-[0.8rem] font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                {c.devanagari}
              </span>
            </button>
          ))}

          {/* Left labels — Sanskrit name */}
          {chakraData.map((c) => (
            <div
              key={`lbl-${c.id}`}
              className="absolute text-right pointer-events-none"
              style={{
                right: "calc(50% + 34px)", top: `${c.topPct}%`, transform: "translateY(-50%)",
                fontSize: "0.82rem", whiteSpace: "nowrap",
                color: active === c.id ? c.color : "var(--color-k-muted)",
                fontWeight: active === c.id ? 700 : 400,
                fontFamily: "var(--font-garamond)",
                transition: "all 0.3s",
              }}
            >
              {c.sanskrit}
            </div>
          ))}
        </div>

        {/* Connecting lines + detail rows — positioned to align with each chakra */}
        <div className="relative flex-1 max-w-[700px]" style={{ height: 750 }}>
          {chakraData.map((c) => {
            const isActive = active === c.id;
            return (
              <div
                key={c.id}
                className="absolute left-0 right-0 flex items-center gap-0 cursor-pointer"
                style={{ top: `${c.topPct}%`, transform: "translateY(-50%)" }}
                onClick={() => selectChakra(c.id)}
              >
                {/* Horizontal connector line */}
                <div
                  className="shrink-0 transition-all duration-300"
                  style={{
                    width: 40, height: 1,
                    background: isActive
                      ? `linear-gradient(90deg, ${c.color}, ${c.color}44)`
                      : "var(--color-k-border)",
                  }}
                />

                {/* Compact info row */}
                <div
                  className="flex-1 rounded-lg px-4 py-2 transition-all duration-300 flex items-center gap-4 min-w-0"
                  style={{
                    background: isActive ? `${c.color}15` : "var(--color-k-card)",
                    border: `1px solid ${isActive ? `${c.color}55` : "var(--color-k-border)"}`,
                    boxShadow: isActive ? `0 0 20px ${c.color}15` : "none",
                  }}
                >
                  {/* Color dot + chakra name */}
                  <div className="flex items-center gap-2 shrink-0 min-w-[110px]">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ background: c.color, boxShadow: `0 0 6px ${c.color}88` }}
                    />
                    <span className="text-[0.82rem] font-semibold whitespace-nowrap" style={{ color: c.color }}>
                      {c.english}
                    </span>
                  </div>

                  {/* Key attributes */}
                  <div className="flex gap-4 text-[0.72rem] text-k-muted min-w-0 overflow-hidden">
                    <div className="shrink-0">
                      <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Planet</span>
                      <div className="text-k-text text-[0.76rem]">{c.planet}</div>
                    </div>
                    <div className="shrink-0">
                      <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Element</span>
                      <div className="text-k-text text-[0.76rem]">{c.element}</div>
                    </div>
                    <div className="shrink-0">
                      <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Mantra</span>
                      <div className="text-k-text text-[0.76rem]">{c.mantra}</div>
                    </div>
                    <div className="shrink-0 hidden lg:block">
                      <span className="text-[0.6rem] uppercase tracking-wider opacity-70">Karmic</span>
                      <div className="text-k-text text-[0.76rem]">{c.karmicIssue}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded detail panel — appears below when a chakra is clicked */}
      {active !== null && (() => {
        const sel = chakraData.find((c) => c.id === active)!;
        return (
          <div
            className="hidden md:block max-w-[700px] mt-8 rounded-2xl p-6 animate-[chakra-fade_0.3s_ease]"
            style={{
              background: "var(--color-k-card)",
              border: `1px solid ${sel.color}44`,
              boxShadow: `0 0 40px ${sel.color}12`,
              marginLeft: 360,
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0"
                style={{ background: `radial-gradient(circle, ${sel.color}, ${sel.color}88)`, boxShadow: `0 0 24px ${sel.color}66` }}
              >
                {sel.devanagari}
              </div>
              <div>
                <h3 className="text-[1.4rem] font-semibold m-0" style={{ color: sel.color, fontFamily: "var(--font-garamond)" }}>
                  {sel.sanskrit} · {sel.english}
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 text-[0.82rem]">
              <div className="bg-k-bg rounded-lg px-3 py-2">
                <div className="text-[0.6rem] text-k-muted uppercase tracking-wider mb-0.5">Planet</div>
                <div className="text-k-text font-medium">{sel.planet}</div>
              </div>
              <div className="bg-k-bg rounded-lg px-3 py-2">
                <div className="text-[0.6rem] text-k-muted uppercase tracking-wider mb-0.5">Element</div>
                <div className="text-k-text font-medium">{sel.element}</div>
              </div>
              <div className="bg-k-bg rounded-lg px-3 py-2">
                <div className="text-[0.6rem] text-k-muted uppercase tracking-wider mb-0.5">Mantra</div>
                <div className="text-k-text font-medium">{sel.mantra}</div>
              </div>
              <div className="bg-k-bg rounded-lg px-3 py-2">
                <div className="text-[0.6rem] text-k-muted uppercase tracking-wider mb-0.5">System</div>
                <div className="text-k-text font-medium">{sel.system}</div>
              </div>
              <div className="bg-k-bg rounded-lg px-3 py-2 col-span-2">
                <div className="text-[0.6rem] text-k-muted uppercase tracking-wider mb-0.5">Karmic Issue</div>
                <div className="text-k-text font-medium">{sel.karmicIssue}</div>
              </div>
              <div className="bg-k-bg rounded-lg px-3 py-2">
                <div className="text-[0.6rem] text-k-muted uppercase tracking-wider mb-0.5">(+) Positive</div>
                <div className="font-medium" style={{ color: sel.color }}>{sel.posEmotion}</div>
              </div>
              <div className="bg-k-bg rounded-lg px-3 py-2">
                <div className="text-[0.6rem] text-k-muted uppercase tracking-wider mb-0.5">(-) Negative</div>
                <div className="text-k-text font-medium">{sel.negEmotion}</div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Mobile: stacked accordion cards */}
      <div className="md:hidden grid gap-3">
        {chakraData.map((c) => (
          <div
            key={c.id}
            className="rounded-xl overflow-hidden border border-k-border bg-k-card"
            onClick={() => selectChakra(c.id)}
          >
            <div className="flex items-center gap-3 px-4 py-3 cursor-pointer">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ background: `radial-gradient(circle, ${c.color}ee, ${c.color}77)` }}
              >
                {c.devanagari}
              </div>
              <div className="flex-1">
                <div className="text-[0.9rem] font-semibold" style={{ color: c.color }}>{c.sanskrit} · {c.english}</div>
                <div className="text-[0.72rem] text-k-muted">{c.planet} · {c.element}</div>
              </div>
              <span className="text-k-muted text-xs">{active === c.id ? "▲" : "▼"}</span>
            </div>
            {active === c.id && (
              <div className="px-4 pb-4 grid grid-cols-2 gap-2 text-[0.78rem] animate-[chakra-fade_0.2s_ease]">
                <div className="bg-k-bg rounded-lg px-3 py-2">
                  <div className="text-[0.6rem] text-k-muted uppercase tracking-wider">Mantra</div>
                  <div className="text-k-text">{c.mantra}</div>
                </div>
                <div className="bg-k-bg rounded-lg px-3 py-2">
                  <div className="text-[0.6rem] text-k-muted uppercase tracking-wider">System</div>
                  <div className="text-k-text">{c.system}</div>
                </div>
                <div className="bg-k-bg rounded-lg px-3 py-2 col-span-2">
                  <div className="text-[0.6rem] text-k-muted uppercase tracking-wider">Karmic Issue</div>
                  <div className="text-k-text">{c.karmicIssue}</div>
                </div>
                <div className="bg-k-bg rounded-lg px-3 py-2">
                  <div className="text-[0.6rem] text-k-muted uppercase tracking-wider">(+) Positive</div>
                  <div style={{ color: c.color }}>{c.posEmotion}</div>
                </div>
                <div className="bg-k-bg rounded-lg px-3 py-2">
                  <div className="text-[0.6rem] text-k-muted uppercase tracking-wider">(-) Negative</div>
                  <div className="text-k-text">{c.negEmotion}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Hand Chakras */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mt-8 max-w-[500px] mx-auto">
        <div className="bg-k-card border border-k-border rounded-xl p-4 text-center">
          <div className="text-[1.2rem] mb-1">🤚</div>
          <div className="text-k-gold-light text-[0.9rem]" style={{ fontFamily: "var(--font-garamond)" }}>Left Hand — Rahu</div>
          <div className="text-k-muted text-[0.75rem] mt-1">Receiving — past life karmic influences</div>
        </div>
        <div className="bg-k-card border border-k-border rounded-xl p-4 text-center">
          <div className="text-[1.2rem] mb-1">✋</div>
          <div className="text-k-gold-light text-[0.9rem]" style={{ fontFamily: "var(--font-garamond)" }}>Right Hand — Ketu</div>
          <div className="text-k-muted text-[0.75rem] mt-1">Giving — releases karma, spiritual letting go</div>
        </div>
      </div>

      <style>{`
        @keyframes chakra-fade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
