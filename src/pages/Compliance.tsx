import { Gavel, ShieldCheck, Lock, FileText, AlertTriangle, Activity } from "lucide-react";
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
    desc: "All PHI (Protected Health Information) is processed exclusively on local hardware. The Hestia Egress Guard enforces zero cloud exposure at the kernel level — no PHI can exit the local substrate.",
  },
  {
    icon: Lock,
    title: "FIPS 140-3 Aligned",
    status: "TARGET",
    statusColor: "text-[#8888a0]",
    desc: "Sovereign OS is architecturally designed for FIPS 140-3 alignment, using AES-256-GCM with hardware-bound keys. Formal CMVP certification is on the product roadmap.",
  },
  {
    icon: FileText,
    title: "Zero-Trust Architecture",
    status: "IMPLEMENTED",
    statusColor: "text-secondary",
    desc: "Every inter-agent communication is treated as untrusted by default. The Mission State Engine (MSE) requires cryptographic proof of agent identity and SL5 compliance.",
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
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="font-mono text-[10px] tracking-[0.3em] text-secondary uppercase block mb-4">
            LEGAL & REGULATORY
          </span>
          <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-white uppercase leading-none">
            Integrity Standards
          </h2>
          <p className="text-[#8888a0] mt-8 text-lg leading-relaxed font-sans">
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
              className="glass-panel p-10 rounded-3xl border border-white/5 space-y-6 hover:border-white/10 transition-all duration-500 shadow-2xl group"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-secondary/20 transition-all">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <span className={`font-mono text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                  item.status === "IMPLEMENTED"
                    ? "border-secondary/20 bg-secondary/10 text-secondary"
                    : "border-white/10 bg-white/5 text-[#8888a0]"
                }`}>
                  {item.status}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-black text-white uppercase font-display tracking-tight">{item.title}</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed font-sans">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FIPS Clarification Notice */}
        <div className="glass-panel rounded-3xl p-8 border border-amber-500/20 bg-amber-500/5 flex items-start space-x-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5"><Activity className="w-12 h-12 text-amber-500" /></div>
          <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
          <div className="text-sm text-[#8888a0] leading-relaxed font-sans">
            <span className="text-white font-black uppercase tracking-widest text-[10px] block mb-2 font-mono">FIPS 140-3 Disclosure</span>
            LexiPro uses cryptographic modules architecturally aligned with FIPS 140-3 requirements.
            Formal CMVP validation through NIST is a planned milestone. Until a CMVP certificate
            number is issued, this product should be described as <span className="text-white font-bold">"FIPS 140-3 Aligned"</span> — not
            "FIPS 140-3 Validated" — in any government procurement context.
          </div>
        </div>

        {/* Egress Control Matrix */}
        <div className="space-y-8">
          <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.4em] font-mono ml-2">
            Egress Control Matrix
          </h3>
          <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
            <table className="w-full font-mono text-[10px]">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="text-left px-8 py-5 text-[#8888a0] uppercase tracking-[0.2em] font-black">Data Type / Scenario</th> 
                  <th className="text-right px-8 py-5 text-[#8888a0] uppercase tracking-[0.2em] font-black">Disposition</th>
                </tr>
              </thead>
              <tbody>
                {EGRESS_CONTROLS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-white/[0.02] ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}    
                  >
                    <td className="px-8 py-5 text-[#8888a0] uppercase tracking-widest font-bold">{row.label}</td>
                    <td className="px-8 py-5 text-right">
                      <span className={`${row.pass ? "text-secondary" : "text-red-400"} font-black tracking-tighter`}>
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