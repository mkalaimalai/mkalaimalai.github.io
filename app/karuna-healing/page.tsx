/* eslint-disable @next/next/no-img-element */

import ChakraMap from "@/components/ChakraMap";

const chakras = [
  {
    sanskrit: "ॐ", english: "Sahasrara · Crown",
    gradient: "from-[#7B2D8E] to-[#5a1d6b]",
    details: [
      { label: "Planet", value: "Sun (Surya)" },
      { label: "Element", value: "Cosmic Energy" },
      { label: "Mantra", value: "Om / Silence" },
      { label: "System", value: "Consciousness" },
      { label: "Karmic Issue", value: "Spiritual — Liberation" },
      { label: "+ Emotion", value: "Cosmic Energy" },
      { label: "− Emotion", value: "Ego Attachment" },
    ],
  },
  {
    sanskrit: "ॐ", english: "Ajna · Third Eye",
    gradient: "from-[#2E3192] to-[#1a1d5e]",
    details: [
      { label: "Planet", value: "Moon (Chandra)" },
      { label: "Element", value: "Mind / Light" },
      { label: "Mantra", value: "Om" },
      { label: "System", value: "Nervous" },
      { label: "Karmic Issue", value: "Mind — Vision & Clarity" },
      { label: "+ Emotion", value: "Insight" },
      { label: "− Emotion", value: "Illusion" },
    ],
  },
  {
    sanskrit: "हं", english: "Vishuddha · Throat",
    gradient: "from-[#29ABE2] to-[#1d7fa8]",
    details: [
      { label: "Planet", value: "Mercury (Buddh)" },
      { label: "Element", value: "Ether / Space" },
      { label: "Mantra", value: "Ham" },
      { label: "System", value: "Respiratory" },
      { label: "Karmic Issue", value: "Emotional — Dharmic Duty" },
      { label: "+ Emotion", value: "Truth" },
      { label: "− Emotion", value: "Lies" },
    ],
  },
  {
    sanskrit: "यं", english: "Anahata · Heart",
    gradient: "from-[#39B54A] to-[#2a8537]",
    details: [
      { label: "Planet", value: "Venus (Shukra)" },
      { label: "Element", value: "Air" },
      { label: "Mantra", value: "Yam" },
      { label: "System", value: "Cardiovascular" },
      { label: "Karmic Issue", value: "Love — Soul Karma" },
      { label: "+ Emotion", value: "Love" },
      { label: "− Emotion", value: "Grief" },
    ],
  },
  {
    sanskrit: "रं", english: "Manipura · Solar Plexus",
    gradient: "from-[#FBB03B] to-[#c88a1e]",
    details: [
      { label: "Planet", value: "Jupiter (Guru)" },
      { label: "Element", value: "Fire" },
      { label: "Mantra", value: "Ram" },
      { label: "System", value: "Digestive" },
      { label: "Karmic Issue", value: "Ancestor — Parents' Karma" },
      { label: "+ Emotion", value: "Willpower" },
      { label: "− Emotion", value: "Shame / Ego" },
    ],
  },
  {
    sanskrit: "वं", english: "Swadhisthana · Sacral",
    gradient: "from-[#F7931E] to-[#c47216]",
    details: [
      { label: "Planet", value: "Saturn (Shani)" },
      { label: "Element", value: "Water" },
      { label: "Mantra", value: "Vam" },
      { label: "System", value: "Lymphatic" },
      { label: "Karmic Issue", value: "Present Life Karma" },
      { label: "+ Emotion", value: "Pleasure" },
      { label: "− Emotion", value: "Guilt / Insecurity" },
    ],
  },
  {
    sanskrit: "लं", english: "Muladhara · Root",
    gradient: "from-[#ED1C24] to-[#b0161c]",
    details: [
      { label: "Planet", value: "Mars (Mangal)" },
      { label: "Element", value: "Earth" },
      { label: "Mantra", value: "Lam" },
      { label: "System", value: "Physical Body" },
      { label: "Karmic Issue", value: "Past Life Karma" },
      { label: "+ Emotion", value: "Survival" },
      { label: "− Emotion", value: "Fear" },
    ],
  },
];

const symbols = [
  {
    name: "1. Zonar", subtitle: "General Karma Deleting", img: "Zonar.jpeg",
    desc: "Works with past lives, karmic issues, and undefined patterns. Acts as a spiritual anesthetic — its energy penetrates deep to eliminate physical, mental, and emotional discomforts at the cellular level.",
    keywords: ["Past Lives", "Cellular Healing", "Anesthetic", "Abuse", "Preparation"],
  },
  {
    name: "2. Harth", subtitle: "Relationship & Soul Level Healing", img: "Harth.jpeg",
    desc: "Heals heart issues, develops compassion, restores love of life. Excellent for addictions of all kinds. Inspires and guides to right action through spiritual communication and unity.",
    keywords: ["Compassion", "Heart", "Relationships", "Addictions", "Healthy Habits"],
  },
  {
    name: "3. Halu", subtitle: "Physical Level Healing", img: "Halu.jpeg",
    desc: "Works in higher dimensions and deeper levels. Restores balance on the physical plane, breaks negative patterns in the unconscious mind. Addresses abuse issues, shadow self, and psychic/psychological attacks.",
    keywords: ["Self-Acceptance", "Shadow Self", "Physical Healing", "Psychic Attack"],
  },
  {
    name: "4. Rama", subtitle: "Chakra Level Healing", img: "Rama.jpeg",
    desc: "Heals and harmonizes all chakras. Cleanses crystals, rooms, and spaces of negative energies. Empowers material goals, creates determination, and clears dense blockages in the etheric field.",
    keywords: ["Chakras", "Grounding", "Manifestation", "Space Clearing", "Goals"],
  },
  {
    name: "5. Gnosa", subtitle: "Mind Level Healing", img: "Gnosa.jpeg",
    desc: "Links strongly with the higher self, bringing higher consciousness into the physical body. Increases awareness, communication, and learning abilities. Apply before meditation for best experience.",
    keywords: ["Higher Self", "Learning", "Communication", "Concentration", "Memory"],
  },
  {
    name: "6. Kriya", subtitle: "Aura Cleansing", img: "Kriya.jpeg",
    desc: "Used for physical manifestation and healing humanity. Helps put goals, dreams, and vision into action. Connects chakras, cleanses and energizes the aura, and purifies spaces.",
    keywords: ["Aura Cleansing", "Manifestation", "Chakra Connection", "Room Cleansing"],
  },
  {
    name: "7. Om", subtitle: "Welcoming God", img: "Om.jpeg",
    desc: "The primordial Sanskrit symbol of oneness. Opens the crown chakra, purifies, protects, and stabilizes the aura. Used across many eastern spiritual practices — the frequency of earth's rotation.",
    keywords: ["Oneness", "Crown Chakra", "Protection", "Purification", "Aura"],
  },
  {
    name: "8. Iava (Ee-Ah-Vah)", subtitle: "Wish Manifestation", img: "E-Ava.jpeg",
    desc: "Helps manifest wishes and recreate your reality. Empowers personal Divine power, releases codependence, keeps the etheric heart clear, and helps live more consciously. Heals the earth.",
    keywords: ["Wishes", "Reality Creation", "Empowerment", "Earth Healing"],
  },
  {
    name: "9. Shanti", subtitle: "For Peace", img: "Shanti.jpeg",
    desc: "Releases fear, nightmares, and worries. Soothes the aura, heals the past, creates harmony in the present, and releases the future. Transforms situations into positive experiences. Aids trust in life and clairvoyance.",
    keywords: ["Peace", "Fear Release", "Trust", "Insomnia", "Clairvoyance"],
  },
];

const steps = [
  { title: "Invocation", desc: "Call upon all Gods, masters, healing angels, and spiritual helpers. Ask to be blessed with energy to perform the healing. Set your intention clearly." },
  { title: "Self-Charging", desc: "Charge all 9 major energy centers: Crown (Sahasrara), Third Eye (Ajna), Throat (Vishuddha), Heart (Anahata), Solar Plexus (Manipura), Sacral (Swadhisthana), Root (Muladhara), plus the Left Hand (Rahu) and Right Hand (Ketu) chakras." },
  { title: "Room Charging", desc: "Purify the four corners of the room using the Kriya symbol. At the center, visualize all 9 Karuna symbols activating the space with healing energy." },
  { title: "Healing — Apply All 9 Symbols", desc: "Place all 9 Karuna symbols on yourself, others, pitrus (ancestors), kundali, or deities. This addresses karmic issues across past, present, and future. Apply symbols to increase spiritual power by placing them on self, God, gurus, and parents." },
  { title: "Positive Visualization & Affirmations", desc: "Visualize your wishes as completely manifested. Feel the joy and happiness with deep emotion. Apply positive affirmations repeatedly while holding the vision." },
  { title: "Thanksgiving Prayer", desc: "Express gratitude to Masters, Gurus, Gods and Goddesses, universal energy, all spiritual souls, and universal masters. Thank the patient's soul for accepting healing. Thank your own soul for being an instrument. Cut the cords three times from your navel/solar region." },
];

const applications = [
  { icon: "🧘", text: "Self, chakras, and daily meditation" },
  { icon: "🙏", text: "Pitrus (ancestors), kundali, gods/deities" },
  { icon: "💧", text: "Water, food, and medicine (reduce side effects)" },
  { icon: "📄", text: "Documents — exams, legal papers, bank passbooks" },
  { icon: "💼", text: "Business — visiting cards, brochures, staff, clients" },
  { icon: "🏠", text: "Room and property purification" },
  { icon: "💎", text: "Crystal charging and programming" },
  { icon: "💻", text: "Equipment — computers, machines, devices" },
  { icon: "🌍", text: "Natural calamities, disasters, and global events" },
  { icon: "⏳", text: "Events of past, present, or future" },
  { icon: "📦", text: "Products you are selling" },
  { icon: "📚", text: "School and college books" },
];

const chakraImages = [
  { src: "Chakras-Colors_Planets_Karmic.jpeg", caption: "Chakra – Color – Planet – Karmic Overview" },
  { src: "Chakras-Planets.jpeg", caption: "Chakra & Graha (Planet) Mapping" },
  { src: "Chakras-Sanskrit_English.jpeg", caption: "Chakra Names — Sanskrit & English" },
  { src: "Chakras-Spirituality.jpeg", caption: "Chakra – Spirituality – Elements – Karmic Layers" },
];

const navLinks = [
  { href: "#audio", label: "Guided Healing" },
  { href: "#video", label: "Visualization" },
  { href: "#chakras", label: "Chakra Map" },
  { href: "#symbols", label: "9 Symbols" },
  { href: "#steps", label: "Healing Steps" },
  { href: "#applications", label: "Applications" },
  { href: "#downloads", label: "Downloads" },
];

function Divider() {
  return (
    <div className="w-15 h-px mx-auto mb-12 bg-gradient-to-r from-transparent via-k-gold to-transparent" />
  );
}

export default function KarunaHealingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center relative p-8"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(123,45,142,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(201,168,76,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(46,49,146,0.06) 0%, transparent 60%), var(--color-k-bg)",
        }}
      >
        <div className="font-devanagari text-[5rem] text-k-gold opacity-70 mb-4 animate-[pulse-glow_4s_ease-in-out_infinite]">
          ॐ
        </div>
        <h1 className="font-garamond text-[clamp(2.2rem,5vw,4rem)] font-light tracking-wider text-k-gold-light mb-2">
          Karuna Karma Soul &amp; DNA Healing
          <span className="block text-[0.45em] tracking-[0.25em] uppercase text-k-muted mt-2 font-philosopher">
            Daily Practice Guide
          </span>
        </h1>
        <p className="max-w-[600px] text-k-muted text-[1.05rem] mx-auto mt-6 mb-10 italic">
          Awakening Universal Compassion through the sacred Karuna symbols,
          chakra alignment, and karmic healing — a complete reference for your daily sadhana.
        </p>
        <div className="absolute bottom-8 animate-[bob_2s_ease-in-out_infinite] text-k-gold opacity-50 text-2xl">
          ▾
        </div>
      </section>

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-100 bg-k-bg/92 backdrop-blur-[16px] border-b border-k-border py-3 px-4 overflow-x-auto">
        <div className="flex gap-1.5 max-w-[1200px] mx-auto justify-center flex-wrap">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-k-muted no-underline text-[0.82rem] px-3.5 py-1.5 rounded-full border border-transparent transition-all whitespace-nowrap tracking-wide hover:text-k-gold hover:border-k-border hover:bg-[rgba(201,168,76,0.08)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/"
            className="text-k-muted no-underline text-[0.82rem] px-3.5 py-1.5 rounded-full border border-transparent transition-all whitespace-nowrap tracking-wide hover:text-k-gold hover:border-k-border hover:bg-[rgba(201,168,76,0.08)]"
          >
            ← Home
          </a>
        </div>
      </nav>

      {/* Audio */}
      <section
        id="audio"
        className="py-20 border-t border-b border-k-border"
        style={{ background: "linear-gradient(180deg, rgba(201,168,76,0.04) 0%, transparent 100%)" }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-garamond text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-k-gold-light text-center mb-2 tracking-wider">
            Guided Healing Session
          </h2>
          <p className="text-center text-k-muted text-[0.95rem] mb-12 italic">
            Listen to Simran&apos;s Karuna Healing guided meditation
          </p>
          <Divider />
          <div className="max-w-[600px] mx-auto bg-k-card border border-k-border rounded-2xl p-8 text-center">
            <h3 className="font-garamond text-[1.4rem] text-k-gold-light mb-2">
              Karuna Healing by Simran
            </h3>
            <p className="text-k-muted text-[0.9rem] mb-6">
              Play this during your daily healing practice for guided support.
            </p>
            <audio controls preload="metadata" className="w-full rounded-lg">
              <source src="/karuna-assets/Kruna_Healing_by_Simran_.m4a" type="audio/mp4" />
              Your browser does not support audio.
            </audio>
          </div>
        </div>
      </section>

      {/* Video */}
      <section
        id="video"
        className="py-20 border-t border-b border-k-border"
        style={{ background: "linear-gradient(180deg, rgba(46,49,146,0.04) 0%, transparent 100%)" }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-garamond text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-k-gold-light text-center mb-2 tracking-wider">
            Healing Visualization
          </h2>
          <p className="text-center text-k-muted text-[0.95rem] mb-12 italic">
            Watch the Karuna Healing visualization practice
          </p>
          <Divider />
          <div className="max-w-[800px] mx-auto bg-k-card border border-k-border rounded-2xl overflow-hidden">
            <h3 className="font-garamond text-[1.4rem] text-k-gold-light mb-2 px-8 pt-6 text-center">
              Karuna Healing Visualization
            </h3>
            <p className="text-k-muted text-[0.9rem] mb-6 px-8 text-center">
              A guided visual journey through the Karuna healing process. Watch to deepen your practice.
            </p>
            <video controls preload="metadata" className="w-full block rounded-b-2xl">
              <source src="/karuna-assets/Karuna_Healing_Visualization.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
      </section>

      {/* Chakras */}
      <section id="chakras" className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-garamond text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-k-gold-light text-center mb-2 tracking-wider">
            Chakra – Planet – Karmic Map
          </h2>
          <p className="text-center text-k-muted text-[0.95rem] mb-12 italic">
            Each chakra corresponds to a planet (graha), element, and karmic layer
          </p>
          <Divider />

          <ChakraMap />
        </div>
      </section>

      {/* 9 Symbols */}
      <section
        id="symbols"
        className="py-20"
        style={{ background: "linear-gradient(180deg, rgba(201,168,76,0.03) 0%, transparent 100%)" }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-garamond text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-k-gold-light text-center mb-2 tracking-wider">
            The 9 Karuna Healing Symbols
          </h2>
          <p className="text-center text-k-muted text-[0.95rem] mb-12 italic">
            Sacred symbols used to channel Karuna energy across body, mind, and soul levels
          </p>
          <Divider />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {symbols.map((s) => (
              <div
                key={s.name}
                className="bg-k-card border border-k-border rounded-xl overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="flex gap-4 p-4">
                  {/* Small symbol image */}
                  <div className="w-[100px] h-[100px] shrink-0 rounded-lg bg-white/[0.05] flex items-center justify-center overflow-hidden">
                    <img src={`/karuna-assets/${s.img}`} alt={`${s.name} symbol`} loading="lazy" className="w-full h-full object-contain p-1.5" />
                  </div>
                  {/* Text content */}
                  <div className="min-w-0">
                    <h3 className="font-garamond text-[1.4rem] text-k-gold-light mb-0.5 leading-tight">{s.name}</h3>
                    <div className="text-k-gold text-[0.68rem] uppercase tracking-[0.1em] mb-2">{s.subtitle}</div>
                    <p className="text-k-muted text-[0.82rem] leading-relaxed">{s.desc}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {s.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="bg-[rgba(201,168,76,0.08)] border border-k-border text-k-gold text-[0.65rem] px-2 py-0.5 rounded-full tracking-wide"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Steps */}
      <section id="steps" className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-garamond text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-k-gold-light text-center mb-2 tracking-wider">
            Daily Healing Practice — Steps
          </h2>
          <p className="text-center text-k-muted text-[0.95rem] mb-12 italic">
            Follow these steps each session for self-healing or healing others
          </p>
          <Divider />

          <div className="max-w-[750px] mx-auto" style={{ counterReset: "step" }}>
            {steps.map((s) => (
              <div key={s.title} className="karuna-step relative pl-16 mb-10">
                <h3 className="font-garamond text-[1.3rem] text-k-gold-light mb-1.5">{s.title}</h3>
                <p className="text-k-muted text-[0.92rem]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section
        id="applications"
        className="py-20"
        style={{ background: "linear-gradient(180deg, rgba(201,168,76,0.03) 0%, transparent 100%)" }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-garamond text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-k-gold-light text-center mb-2 tracking-wider">
            Where to Apply Karuna Healing
          </h2>
          <p className="text-center text-k-muted text-[0.95rem] mb-12 italic">
            Place all 9 symbols with positive affirmation on any of these
          </p>
          <Divider />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {applications.map((a) => (
              <div
                key={a.text}
                className="bg-k-card border border-k-border rounded-xl px-5 py-4 transition-colors text-[0.9rem] text-k-muted hover:bg-k-card-hover"
              >
                <span className="text-2xl mb-2 block">{a.icon}</span>
                {a.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-garamond text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-k-gold-light text-center mb-2 tracking-wider">
            Reference Materials
          </h2>
          <p className="text-center text-k-muted text-[0.95rem] mb-12 italic">
            Download PDFs for offline study and practice
          </p>
          <Divider />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 max-w-[700px] mx-auto">
            <a
              href="/karuna-assets/Karuna_Healing_Notes__English_.pdf"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 bg-k-card border border-k-border rounded-xl px-6 py-5 no-underline text-k-text transition-all hover:bg-k-card-hover hover:border-k-gold hover:-translate-y-0.5"
            >
              <div className="text-[2rem] shrink-0">📘</div>
              <div>
                <h4 className="text-k-gold-light text-[1rem] font-garamond mb-0.5">Karuna Healing Notes (English)</h4>
                <p className="text-k-muted text-[0.78rem]">Complete guide with all symbols, steps, and applications</p>
              </div>
            </a>
            <a
              href="/karuna-assets/Chakra_Karmic_Mapping.pdf"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 bg-k-card border border-k-border rounded-xl px-6 py-5 no-underline text-k-text transition-all hover:bg-k-card-hover hover:border-k-gold hover:-translate-y-0.5"
            >
              <div className="text-[2rem] shrink-0">📙</div>
              <div>
                <h4 className="text-k-gold-light text-[1rem] font-garamond mb-0.5">Chakra – Karmic Mapping</h4>
                <p className="text-k-muted text-[0.78rem]">Quick-reference chart of chakra–planet–karma correspondences</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 px-6 border-t border-k-border text-k-muted text-[0.82rem]">
        <div className="font-devanagari text-[2rem] text-k-gold opacity-50 mb-2">ॐ</div>
        <p>Karuna Karma Soul &amp; DNA Healing — Sai Karuna Mission</p>
        <p className="mt-1 text-[0.75rem]">
          Compiled for daily practice reference. Source material by Dr. Uday Shah &amp; Sai Karuna Mission.
        </p>
      </footer>
    </>
  );
}
