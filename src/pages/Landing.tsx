import { motion } from "motion/react";
import { LexiProLogo } from "../components/Logo";

// Honest holding page. No fabricated metrics, no method disclosure, no claim of a
// live/available product. States only what is true: a positioning line + "in
// private development." The full showcase ships once the products are real.
export default function Landing() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      {/* soft accent glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-12%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.10),transparent_70%)] blur-2xl" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-3">
          <LexiProLogo className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight text-white">LexiPro</span>
        </div>
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm text-[#94a3b8]">
          <a href="#shiftedge" className="transition-colors hover:text-white">
            ShiftEdge
          </a>
          <a href="/websites" className="transition-colors hover:text-white">
            Websites
          </a>
          <a
            href="mailto:partnerships@lexipro.online?subject=LexiPro%20early%20access"
            className="font-mono text-xs uppercase tracking-[0.18em] text-[#22d3ee] transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>
      </header>

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-12 pb-16 text-center md:pt-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 border-t-white/20 bg-white/[0.04] px-3.5 py-1.5 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-secondary">In private development</span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-[-0.035em] text-white md:text-7xl">
            Proof,<br />
            <span className="bg-gradient-to-br from-[#22d3ee] via-[#38bdf8] to-[#a5f3fc] bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(34,211,238,0.22)]">
              not guesses.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-[17.5px] leading-[1.65] text-[#94a3b8]">
            LexiPro builds AI that states only what the evidence proves, and withholds the
            rest. For work where being right isn&rsquo;t enough. It has to be provable.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:partnerships@lexipro.online?subject=LexiPro%20early%20access"
              className="group inline-flex items-center gap-2 rounded-full border border-[#a5f3fc] bg-gradient-to-b from-[#22f4ff] to-[#06b6d4] px-7 py-3.5 font-semibold tracking-[-0.01em] text-[#030712] shadow-[0_0_24px_rgba(34,211,238,0.32),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(34,211,238,0.5),inset_0_1px_0_rgba(255,255,255,0.85)]"
            >
              Request early access
              <span className="transition group-hover:translate-x-0.5">&rarr;</span>
            </a>
            <a
              href="#shiftedge"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-[#f8fafc] transition-colors hover:border-[#22d3ee]/40 hover:bg-white/[0.08]"
            >
              Explore ShiftEdge &darr;
            </a>
          </div>
        </motion.div>
      </section>

      {/* Featured Application: ShiftEdge, powered by Holdfast */}
      <section
        id="shiftedge"
        aria-labelledby="shiftedge-heading"
        className="relative z-10 mx-auto w-full max-w-5xl px-6 py-16 md:px-12 md:py-20"
      >
        <div className="rounded-2xl border border-white/10 border-t-white/20 bg-gradient-to-b from-[#111827]/85 to-[#090d16]/95 p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#22d3ee]">
                Featured Application
              </span>
              <h2
                id="shiftedge-heading"
                className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl"
              >
                ShiftEdge
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#22d3ee]">
              Powered by Holdfast
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-[16.5px] leading-[1.65] text-[#f8fafc]">
            ShiftEdge is a local-first shift and pay-record ledger for tipped workers, powered by{" "}
            <strong className="font-semibold text-white">Holdfast</strong> — LexiPro&rsquo;s
            evidence and verification engine underneath.
          </p>
          <p className="mt-3 max-w-3xl text-[15px] leading-[1.65] text-[#94a3b8]">
            Workers log shifts and compare pay records against published state wage rules to
            calculate true hourly earnings and flag potential tip-credit shortfalls, off-the-clock
            work, dual-jobs side work, card-fee or walkout deductions, and tip-pool discrepancies.
            Holdfast packages the underlying records into hash-manifested review bundles for
            change detection and human or attorney evaluation.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748b]">
                Wage-Rule Ledger
              </div>
              <div className="mt-2 font-display text-lg font-bold text-white">
                Discrepancy detection
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
                Evaluates shift logs and paystub inputs against state tip-credit, deduction, and
                side-work rules (Michigan reference profile), reporting mathematical estimates and
                citations rather than legal conclusions.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748b]">
                Holdfast Proof Engine
              </div>
              <div className="mt-2 font-display text-lg font-bold text-white">
                19 verification modules
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
                Standalone TypeScript cores covering SHA-256 audit hashing, evidence manifests,
                chronology assembly, Bates numbering, semantic diffing, and grounding checks (620
                passing unit tests in the adaptation suite).
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748b]">
                Scope &amp; Boundaries
              </div>
              <div className="mt-2 font-display text-lg font-bold text-white">
                Change detection, not legal advice
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
                Built as a mathematical ledger and document-organization tool. Manifests verify
                whether exported records changed after capture; they do not claim court
                admissibility or replace counsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 py-8 text-center">
        <nav className="mb-4 flex justify-center gap-6 text-sm text-[#94a3b8]">
          <a href="/websites" className="transition-colors hover:text-white">Websites</a>
          <a href="/ai-audit" className="transition-colors hover:text-white">AI Audit Sprint</a>
        </nav>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#55556a]">
          A product of Broken Arrow Entertainment LLC
        </p>
      </footer>
    </main>
  );
}
