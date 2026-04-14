import { Gavel, ShieldCheck, Lock, FileText, AlertTriangle, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const STANDARDS = [
  {
    icon: Gavel,
    title: "FRE 902(13)",
    status: "IMPLEMENTED",
    statusColor: "text-secondary",
    desc: "Cryptographic receipts for all AI outputs. Every finding produced by the Serial Swarm is accompanied by a tamper-evident hash log, agent consensus record, and hardware node ID — providing legal admissibility under the Federal Rules of Evidence.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA Sovereign",
    status: "IMPLEMENTED",
    statusColor: "text-secondary",
    desc: "All PHI (Protected Health Information) is processed exclusively on local hardware. The Hestia Egress Guard enforces zero cloud exposure at the kernel level — no PHI can exit the local substrate, even if an agent attempts an unauthorized outbound call.",
  },
  {
    icon: Lock,
    title: "FIPS 140-3 Aligned",
    status: "TARGET",
    statusColor: "text-tertiary",
    desc: "Sovereign OS is architecturally designed for FIPS 140-3 alignment, using AES-256-GCM with hardware-bound keys. Formal CMVP certification is on the product roadmap. Current designation: FIPS 140-3 Aligned (not yet CMVP-validated).",
  },
  {
    icon: FileText,
    title: "Zero-Trust Architecture",
    status: "IMPLEMENTED",
    statusColor: "text-secondary",
    desc: "Every inter-agent communication is treated as untrusted by default. The Mission State Engine (MSE) requires cryptographic proof of agent identity and SL5 compliance before any state mutation is permitted.",
  },
];

const EGRESS_CONTROLS = [
  { label: "Internal workflows (OMEGA, Swarm, Thermal)", value: "0.00ms egress", pass: true },
  { label: "PHI / PII in any payload", value: "BLOCKED — Hestia Guard", pass: true },
  { label: "API credentials / secrets", value: "STRIPPED before egress", pass: true },
  { label: "Outbound to approved public sources", value: "SANITIZED + LOGGED", pass: true },
  { label: "Unauthorized cloud LLM calls", value: "KERNEL-BLOCKED", pass: true },
];

export default function Compliance() {
  return (
    <section className="py-32 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-display text-[10px] tracking-[0.3em] text-secondary uppercase block mb-4">
            LEGAL & REGULATORY
          </span>
          <h2 className="text-5xl md:text-7xl font-black font-sans tracking-tighter text-white uppercase">
            Integrity Standards
          </h2>
          <p className="text-tertiary mt-6 max-w-2xl text-lg leading-relaxed">
            Compliance is not a checkbox. It is enforced at every layer of the
            Sovereign OS stack — from kernel egress controls to cryptographic
            audit receipts on every AI output.
          </p>
        </motion.div>

        {/* Standards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STANDARDS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel p-8 rounded-xl border border-outline-variant/20 space-y-4"
            >
              <div className="flex items-start justify-between">
                <item.icon className="w-10 h-10 text-secondary" />
                <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded border ${
                  item.statusColor === "text-secondary"
                    ? "border-secondary/30 bg-secondary/10 text-secondary"
                    : "border-outline-variant/30 bg-surface-container text-tertiary"
                }`}>
                  {item.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white uppercase">{item.title}</h3>
              <p className="text-tertiary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FIPS Clarification Notice */}
        <div className="glass-panel rounded-xl p-6 border border-yellow-500/20 bg-yellow-500/5 flex items-start space-x-4">
          <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-tertiary leading-relaxed">
            <span className="text-white font-bold">FIPS 140-3 Disclosure: </span>
            LexiPro uses cryptographic modules architecturally aligned with FIPS 140-3 requirements.
            Formal CMVP validation through NIST is a planned milestone. Until a CMVP certificate
            number is issued, this product should be described as "FIPS 140-3 Aligned" — not
            "FIPS 140-3 Validated" — in any government procurement context.
          </div>
        </div>

        {/* Egress Control Matrix */}
        <div>
          <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-6">
            Egress Control Matrix
          </h3>
          <div className="glass-panel rounded-xl border border-outline-variant/20 overflow-hidden">
            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="border-b border-outline-variant/20 bg-surface-container">
                  <th className="text-left px-6 py-4 text-tertiary uppercase tracking-widest">Data Type / Scenario</th>
                  <th className="text-right px-6 py-4 text-tertiary uppercase tracking-widest">Disposition</th>
                </tr>
              </thead>
              <tbody>
                {EGRESS_CONTROLS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-outline-variant/10 ${i % 2 === 0 ? "" : "bg-surface-container/30"}`}
                  >
                    <td className="px-6 py-4 text-tertiary">{row.label}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`${row.pass ? "text-secondary" : "text-red-400"} font-bold`}>
                        {row.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
