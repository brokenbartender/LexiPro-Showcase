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

      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-3">
          <LexiProLogo className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight text-white">LexiPro</span>
        </div>
      </header>

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/[0.03] px-3 py-1 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-secondary">In private development</span>
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white md:text-7xl">
            Proof,<br />not guesses.
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[#8f8fa6]">
            LexiPro builds AI that states only what the evidence proves, and withholds the
            rest. For work where being right isn&rsquo;t enough. It has to be provable.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="mailto:partnerships@lexipro.online?subject=LexiPro%20early%20access"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-[#05080c] transition hover:opacity-90"
            >
              Request early access
              <span className="transition group-hover:translate-x-0.5">&rarr;</span>
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 px-6 py-8 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#55556a]">
          A product of Broken Arrow Entertainment LLC
        </p>
      </footer>
    </main>
  );
}
