import { motion } from "motion/react";
import { LexiProLogo } from "../components/Logo";

// Public showcase for LexiPro, the engineering standard of Broken Arrow Entertainment LLC.
// ShiftEdge is a standalone Michigan tipped-worker wage and shift ledger (shiftedge.app).
// Holdfast is a separate private-development forensic platform. The two do not share code.

const CONTACT = "mailto:partnerships@lexipro.online?subject=LexiPro%20inquiry";

export default function Landing() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-12%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.10),transparent_70%)] blur-2xl" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-12">
        <a href="#top" className="flex items-center gap-3">
          <LexiProLogo className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight text-white">LexiPro</span>
        </a>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#94a3b8]">
          <a href="#shiftedge" className="transition-colors hover:text-white">
            ShiftEdge
          </a>
          <a href="#holdfast" className="transition-colors hover:text-white">
            Holdfast
          </a>
          <a href="/websites" className="transition-colors hover:text-white">
            Websites
          </a>
          <a
            href={CONTACT}
            className="font-mono text-xs uppercase tracking-[0.18em] text-[#22d3ee] transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-12 pb-10 text-center md:pt-20 md:pb-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 border-t-white/20 bg-white/[0.04] px-3.5 py-1.5 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-secondary">
              Broken Arrow Entertainment LLC
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-[-0.035em] text-white md:text-7xl">
            Proof,
            <br />
            <span className="bg-gradient-to-br from-[#22d3ee] via-[#38bdf8] to-[#a5f3fc] bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(34,211,238,0.22)]">
              not guesses.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-[17.5px] leading-[1.65] text-[#94a3b8]">
            LexiPro is the engineering standard operated by Broken Arrow Entertainment LLC.
            Products under this name state only what the record supports, and withhold the rest.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://shiftedge.app"
              className="group inline-flex items-center gap-2 rounded-full border border-[#a5f3fc] bg-gradient-to-b from-[#22f4ff] to-[#06b6d4] px-7 py-3.5 font-semibold tracking-[-0.01em] text-[#030712] shadow-[0_0_24px_rgba(34,211,238,0.32),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(34,211,238,0.5),inset_0_1px_0_rgba(255,255,255,0.85)]"
            >
              Visit ShiftEdge
              <span className="transition group-hover:translate-x-0.5">&rarr;</span>
            </a>
            <a
              href="#holdfast"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-[#f8fafc] transition-colors hover:border-[#22d3ee]/40 hover:bg-white/[0.08]"
            >
              Holdfast, in private development
            </a>
          </div>
        </motion.div>
      </section>

      <section aria-label="How the names fit together" className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-4 md:px-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#22d3ee]">LexiPro</div>
            <div className="mt-2 font-display text-lg font-bold text-white">Umbrella standard</div>
            <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
              The engineering standard for this work, operated by Broken Arrow Entertainment LLC. This site is its public home.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#22d3ee]">ShiftEdge</div>
            <div className="mt-2 font-display text-lg font-bold text-white">Wage and shift ledger</div>
            <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
              A Michigan tipped-worker progressive web app, live at shiftedge.app. It is its own application.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#fbbf24]">Holdfast</div>
            <div className="mt-2 font-display text-lg font-bold text-white">Forensic case platform</div>
            <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
              A private-development Michigan platform for forensic evidence and pro se case work. Separate from ShiftEdge.
            </p>
          </div>
        </div>
      </section>

      <section
        id="shiftedge"
        aria-labelledby="shiftedge-heading"
        className="relative z-10 mx-auto w-full max-w-5xl px-6 py-16 md:px-12 md:py-20"
      >
        <div className="rounded-2xl border border-white/10 border-t-white/20 bg-gradient-to-b from-[#111827]/85 to-[#090d16]/95 p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#22d3ee]">
                Live application
              </span>
              <h2
                id="shiftedge-heading"
                className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl"
              >
                ShiftEdge
              </h2>
            </div>
            <a
              href="https://shiftedge.app"
              className="inline-flex items-center gap-2 rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#22d3ee] transition-colors hover:bg-[#22d3ee]/20"
            >
              shiftedge.app
            </a>
          </div>

          <p className="mt-6 max-w-3xl text-[16.5px] leading-[1.65] text-[#f8fafc]">
            ShiftEdge is a Michigan tipped-worker wage and shift-tracking ledger. It is a standalone
            progressive web app (Next.js and Capacitor) for planning the week, understanding pay, and
            checking a paystub. The record stays on the worker&rsquo;s device.
          </p>
          <p className="mt-3 max-w-3xl text-[15px] leading-[1.65] text-[#94a3b8]">
            Wage tracking follows Michigan rules for tipped work. ShiftEdge is a record the worker can
            review. It is not legal advice. Holdfast is a different product, and the two codebases do not
            share a dependency.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748b]">
                Shift ledger
              </div>
              <div className="mt-2 font-display text-lg font-bold text-white">Week, pay, paystub</div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
                Plan the week, understand pay, and check a paystub against the shifts that were logged.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748b]">
                Michigan rules
              </div>
              <div className="mt-2 font-display text-lg font-bold text-white">Tipped-worker wages</div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
                Built for tipped workers tracking wages under Michigan rules. The worker reviews the record.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748b]">
                Standalone PWA
              </div>
              <div className="mt-2 font-display text-lg font-bold text-white">Its own application</div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
                Next.js and Capacitor, published at shiftedge.app. It is not a module of another product.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://shiftedge.app"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-[#f8fafc] transition-colors hover:border-[#22d3ee]/40 hover:bg-white/[0.08]"
            >
              Open shiftedge.app
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="holdfast"
        aria-labelledby="holdfast-heading"
        className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 md:px-12 md:pb-20"
      >
        <div className="rounded-2xl border border-white/10 border-t-white/20 bg-gradient-to-b from-[#111827]/85 to-[#090d16]/95 p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#fbbf24]">
                Private development
              </span>
              <h2
                id="holdfast-heading"
                className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl"
              >
                Holdfast
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#fbbf24]/30 bg-[#fbbf24]/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#fbbf24]">
              Separate full-stack platform
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-[16.5px] leading-[1.65] text-[#f8fafc]">
            Holdfast is a private-development Michigan platform for forensic evidence and pro se case work.
            It is one full-stack application, not a catalog of standalone public packages, and it is not part
            of the ShiftEdge codebase.
          </p>
          <p className="mt-3 max-w-3xl text-[15px] leading-[1.65] text-[#94a3b8]">
            The work underway includes an evidence vault, a hash-linked audit chain, chronology,
            proof-packet export, and PII scanning.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748b]">
                Evidence vault
              </div>
              <div className="mt-2 font-display text-lg font-bold text-white">Case records</div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
                A vault for forensic evidence and pro se case material, still in private development.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748b]">
                Audit chain
              </div>
              <div className="mt-2 font-display text-lg font-bold text-white">Hash-linked record</div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
                A hash-linked audit chain, with chronology and proof-packet export around the stored record.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#05070b]/80 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748b]">
                PII scanning
              </div>
              <div className="mt-2 font-display text-lg font-bold text-white">Personal information</div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
                Scanning for personal information inside the case file, as part of the private-development platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 py-8 text-center">
        <nav className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#94a3b8]">
          <a href="/websites" className="transition-colors hover:text-white">
            Websites
          </a>
          <a href="/ai-audit" className="transition-colors hover:text-white">
            AI Audit Sprint
          </a>
          <a href={CONTACT} className="transition-colors hover:text-white">
            partnerships@lexipro.online
          </a>
        </nav>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#55556a]">
          Operated by Broken Arrow Entertainment LLC
        </p>
      </footer>
    </main>
  );
}
