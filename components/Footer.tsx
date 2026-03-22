export default function Footer() {
  return (
    <footer
      className="py-8 px-8 text-center"
      style={{ background: "var(--t-footer-bg)", borderTop: "1px solid var(--t-footer-border)" }}
    >
      <p
        className="font-mono text-[0.7rem] tracking-widest"
        style={{ color: "var(--t-footer-text)" }}
      >
        &copy; 2026 Madhu Kalaimalai. Crafted with intention.
      </p>
    </footer>
  );
}
