import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check, Copy, Menu, X } from "lucide-react";
import { LexiProLogo } from "../components/Logo";

const CONTACT = "mailto:partnerships@lexipro.online?subject=LexiPro%20inquiry";
const HOLDFAST_BRIEFING = "mailto:partnerships@lexipro.online?subject=Holdfast%20private%20briefing";

const NAV = [
  { href: "#shiftedge", label: "ShiftEdge", id: "shiftedge" },
  { href: "#holdfast", label: "Holdfast", id: "holdfast" },
  { href: "#libraries", label: "Libraries", id: "libraries" },
  { href: "#services", label: "Services", id: "services" },
  { href: "/websites/", label: "Websites", id: "" },
  { href: "/ai-audit/", label: "AI Audit", id: "" },
] as const;

const RECORD = [
  "Live Consumer PWA (ShiftEdge)",
  "4 Published PyPI Packages",
  "Private Forensic Platform (Holdfast)",
  "Michigan-Built by Broken Arrow Entertainment LLC",
];

const SHIFTEDGE_POINTS = [
  {
    title: "Plan the week",
    body: "A calendar of shifts and paydays, kept with the worker's own log.",
  },
  {
    title: "2026 Michigan wage rules",
    body: "Understand pay from the figures entered under Michigan rules for 2026.",
  },
  {
    title: "Paystub check",
    body: "Compare a paystub with the shifts saved on the device.",
  },
  {
    title: "On-device records",
    body: "The ledger stays on the worker's device. It is not a shared account.",
  },
];

const HOLDFAST = [
  {
    title: "Evidence Vault",
    body: "Structured intake, Bates numbering, immutable storage.",
  },
  {
    title: "Hash-Linked Audit Chain",
    body: "Tamper-evident chronology and proof-packet export.",
  },
  {
    title: "PII Scanning & Release Gates",
    body: "Automated personal-information checks before export.",
  },
  {
    title: "Michigan Filing Workflows",
    body: "Procedural and filing packet preparation.",
  },
];

const LIBRARIES = [
  {
    name: "sovereign-vault",
    command: "pip install sovereign-vault",
    summary: "Reversible, RAM-only HMAC PII tokenization and MCP proxy for LLM pipelines.",
    links: [{ label: "PyPI", href: "https://pypi.org/project/sovereign-vault/" }],
  },
  {
    name: "writeguard",
    command: "pip install writeguard",
    summary: "Zero-dependency filesystem hash verifier for coding-agent claims.",
    links: [
      { label: "PyPI", href: "https://pypi.org/project/writeguard/" },
      { label: "GitHub", href: "https://github.com/brokenbartender/writeguard" },
    ],
  },
  {
    name: "causal-field",
    command: "pip install causal-field",
    summary: "Gaussian resource-contention field primitive for multi-agent coordination.",
    links: [{ label: "PyPI", href: "https://pypi.org/project/causal-field/" }],
  },
  {
    name: "impact-radius",
    command: "pip install impact-radius",
    summary: "AST impact-analysis CLI and pre-commit hook for mapping code blast radius.",
    links: [{ label: "PyPI", href: "https://pypi.org/project/impact-radius/" }],
  },
];

const SECTION_IDS = ["shiftedge", "holdfast", "libraries", "services"];

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (node): node is HTMLElement => Boolean(node),
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-32% 0px -52% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    elements.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return active;
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-white/10 bg-[#05070b]/80 backdrop-blur-xl"
          : "border-transparent bg-[#05070b]/45 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] rounded-md">
          <LexiProLogo className="h-8 w-8 text-[#22d3ee]" />
          <span className="font-display text-[1.05rem] font-bold tracking-[-0.03em] text-white">LexiPro</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {NAV.map((item) => {
            const current = item.id && item.id === active;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={current ? "true" : undefined}
                className={`text-[13px] font-medium tracking-[-0.01em] transition-colors outline-none focus-visible:text-white ${
                  current ? "text-white" : "text-[#94a3b8] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT}
            className="inline-flex h-9 items-center rounded-full bg-[#22d3ee] px-3.5 text-[13px] font-semibold text-[#041016] shadow-[0_0_0_1px_rgba(165,243,252,0.45)] transition hover:bg-[#67e8f9] outline-none focus-visible:ring-2 focus-visible:ring-[#a5f3fc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
          >
            Contact
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white lg:hidden outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full z-50 min-h-[calc(100dvh-4rem)] overflow-y-auto bg-[#05070b] px-5 py-2 lg:hidden"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/[0.06] py-4 text-[16px] font-medium text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function DeviceFrame({
  src,
  alt,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.85rem] border border-white/15 bg-gradient-to-b from-white/12 to-white/[0.03] p-[7px] shadow-[0_30px_70px_-28px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.28)] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.4rem] bg-black ring-1 ring-black">
        <img src={src} alt={alt} width={width} height={height} className="block h-auto w-full" />
      </div>
    </div>
  );
}

function InstallPill({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
      const area = document.createElement("textarea");
      area.value = command;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="group/pill flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-[#05070b] py-2 pl-3.5 pr-2 text-left transition hover:border-[#22d3ee]/40 outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]"
    >
      <span className="truncate font-mono text-[12px] text-[#e2e8f0]">{command}</span>
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#22d3ee]">
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

export default function Landing() {
  const reduce = useReducedMotion();

  return (
    <div id="top" className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-[-8rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_68%)] blur-2xl" />
        <div className="absolute right-[8%] top-[18rem] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.07),transparent_70%)] blur-3xl" />
      </div>

      <SiteHeader />

      <main>
        <section className="relative mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-6 sm:pt-24 lg:pb-12 lg:pt-28">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#22d3ee]">
              Broken Arrow Entertainment LLC
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.7rem,10.2vw,6.6rem)] font-bold leading-[0.9] tracking-[-0.045em] text-white">
              Proof,
              <br />
              <span className="bg-gradient-to-r from-[#ecfeff] via-[#22d3ee] to-[#67e8f9] bg-clip-text text-transparent">
                not guesses.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-[17px] leading-[1.65] text-[#cbd5e1] sm:text-lg">
              LexiPro is the engineering standard operated by Broken Arrow Entertainment LLC. Products under this name state only what the record supports, and withhold the rest.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://shiftedge.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#22d3ee] px-6 text-sm font-semibold text-[#041016] shadow-[0_0_0_1px_rgba(165,243,252,0.55),0_12px_40px_-16px_rgba(34,211,238,0.85)] transition hover:-translate-y-0.5 hover:bg-[#67e8f9] outline-none focus-visible:ring-2 focus-visible:ring-[#a5f3fc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
              >
                Open ShiftEdge
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06] outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]"
              >
                Work with us
              </a>
            </div>
          </motion.div>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-16 sm:grid-cols-2 xl:grid-cols-4">
            {RECORD.map((item) => (
              <div key={item} className="bg-[#080b11]/90 px-5 py-4 backdrop-blur-sm">
                <dt className="sr-only">Record</dt>
                <dd className="text-[13.5px] font-medium leading-snug tracking-[-0.01em] text-[#e2e8f0]">{item}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="shiftedge" className="scroll-mt-24 border-t border-white/[0.06]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-16 lg:py-28">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#22d3ee]">Live product</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">ShiftEdge</h2>
              <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-[#cbd5e1]">
                A standalone Michigan tipped-worker wage and shift ledger. Built as a Next.js and Capacitor PWA so a worker can plan the week, understand pay under 2026 Michigan wage rules, and check a paystub. Records stay on the worker&rsquo;s device.
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-[#94a3b8]">
                ShiftEdge is its own product, with its own codebase. It is a consumer tool for the person doing the work.
              </p>
              <div className="mt-6 max-w-xl rounded-xl border border-[#22d3ee]/20 bg-[#22d3ee]/[0.06] px-4 py-3 text-sm leading-relaxed text-[#d7f7fc]">
                Not legal advice. ShiftEdge organizes a worker&rsquo;s own record and withholds legal conclusions.
              </div>

              <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                {SHIFTEDGE_POINTS.map((point) => (
                  <li key={point.title} className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5">
                    <p className="text-sm font-semibold tracking-[-0.01em] text-white">{point.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#94a3b8]">{point.body}</p>
                  </li>
                ))}
              </ul>

              <a
                href="https://shiftedge.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#041016] transition hover:bg-[#ecfeff] outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]"
              >
                Open ShiftEdge
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-[#22d3ee]/10 blur-3xl" aria-hidden="true" />
              <div className="relative mx-auto h-[34rem] w-full max-w-[26rem] sm:h-[38rem]">
                <DeviceFrame
                  src="/images/shiftedge-ledger.png"
                  width={780}
                  height={1492}
                  alt="ShiftEdge sample workplace with a paystub check and recent fictional September shifts on the device."
                  className="absolute left-0 top-16 w-[62%] sm:top-20"
                />
                <DeviceFrame
                  src="/images/shiftedge-week.png"
                  width={780}
                  height={1688}
                  alt="ShiftEdge week view for the fictional September 2026 sample workplace, with logged shifts marked on the calendar."
                  className="absolute right-0 top-0 z-10 w-[70%]"
                />
              </div>
              <p className="mx-auto mt-2 max-w-sm text-center text-[12px] leading-relaxed text-[#64748b]">
                Live sample on shiftedge.app. Fictional September 2026 records. The week plan is in front. Pay and recent shifts sit behind it.
              </p>
            </div>
          </div>
        </section>

        <section id="holdfast" className="scroll-mt-24 border-t border-white/[0.06] bg-[#070a10]/70">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-28">
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#fbbf24]">Private development</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">Holdfast</h2>
              <p className="mt-5 text-[16.5px] leading-[1.7] text-[#cbd5e1]">
                Holdfast is a separate, private-development platform for Michigan forensic evidence and pro se case work. Holdfast and ShiftEdge each keep their own codebase.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {HOLDFAST.map((card, index) => (
                <article
                  key={card.title}
                  className="flex flex-col rounded-2xl border border-white/10 border-t-[#fbbf24]/40 bg-[#0b0f17]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[#fbbf24]/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">{card.body}</p>
                </article>
              ))}
            </div>

            <a
              href={HOLDFAST_BRIEFING}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#fbbf24] transition hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-[#fbbf24]"
            >
              Request private briefing
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="libraries" className="scroll-mt-24 border-t border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-28">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#22d3ee]">Published on PyPI</p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                  Open-source libraries
                </h2>
                <p className="mt-4 text-[16px] leading-[1.7] text-[#94a3b8]">
                  Four Python packages you can install today. A public source repository is linked only where one is published.
                </p>
              </div>
              <a
                href="https://github.com/brokenbartender"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04] outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]"
              >
                View GitHub profile
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {LIBRARIES.map((library) => (
                <article
                  key={library.name}
                  className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-mono text-[15px] font-medium tracking-[-0.02em] text-white">{library.name}</h3>
                    <div className="flex gap-3">
                      {library.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] font-medium text-[#22d3ee] transition hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#94a3b8]">{library.summary}</p>
                  <div className="mt-5">
                    <InstallPill command={library.command} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 border-t border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-28">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#22d3ee]">Work with us</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">Services</h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#94a3b8]">
              Two lanes for Broken Arrow Entertainment LLC. Each one opens the page that describes the work.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <a
                href="/websites/"
                className="group flex min-h-52 flex-col justify-between rounded-2xl border border-white/10 bg-[#0c111a] p-6 transition hover:-translate-y-0.5 hover:border-[#22d3ee]/40 outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#64748b]">Local businesses</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                    Local Business Websites
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#94a3b8]">
                    Clean, fast one-page sites for local businesses.
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#22d3ee]">
                  Open websites
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              <a
                href="/ai-audit/"
                className="group flex min-h-52 flex-col justify-between rounded-2xl border border-white/10 bg-[#0c111a] p-6 transition hover:-translate-y-0.5 hover:border-[#22d3ee]/40 outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#64748b]">Operators</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white">AI Audit Sprint</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#94a3b8]">
                    Practical AI workflow audits and implementation roadmaps.
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#22d3ee]">
                  Open the sprint
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-[#111827] to-[#0b1018] px-6 py-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#22d3ee]">Partnerships</p>
                <a href={CONTACT} className="mt-2 block font-display text-2xl font-semibold tracking-[-0.03em] text-white hover:text-[#a5f3fc]">
                  partnerships@lexipro.online
                </a>
              </div>
              <a
                href={CONTACT}
                className="inline-flex h-11 items-center rounded-full bg-[#22d3ee] px-5 text-sm font-semibold text-[#041016] transition hover:bg-[#67e8f9] outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Email us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <LexiProLogo className="h-7 w-7 text-[#22d3ee]" />
              <span className="font-display text-lg font-bold tracking-[-0.03em] text-white">LexiPro</span>
            </a>
            <p className="mt-3 text-sm text-[#94a3b8]">Proof, not guesses.</p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#64748b]">
              Operated by Broken Arrow Entertainment LLC
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#cbd5e1]">
            <a href="https://shiftedge.app" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">ShiftEdge</a>
            <a href="/websites/" className="transition hover:text-white">Websites</a>
            <a href="/ai-audit/" className="transition hover:text-white">AI Audit</a>
            <a href="https://github.com/brokenbartender" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
            <a href={CONTACT} className="transition hover:text-white">partnerships@lexipro.online</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
