import MsclStack from "../components/elements/MsclStack";
import PreEditGate from "../components/elements/PreEditGate";
import PermissionTiers from "../components/elements/PermissionTiers";
import { motion } from "motion/react";
import { SYSTEM } from "../data/system";

const AUDITS = [
  { name: "Self-Lobotomy",   risk: "Agent disables its own gate", outcome: "BLOCKED · L1 path guard" },
  { name: "Shadow Python",    risk: "Subprocess bypasses MSCL",    outcome: "BLOCKED · pre_tool_gate.py" },
  { name: "Logic Drift",      risk: "AST-level decorator loss",    outcome: "BLOCKED · L3 ast_guardian" },
  { name: "Egress Smuggle",   risk: "PII inside semantic vector",  outcome: "BLOCKED · suite-10 + inline" },
  { name: "Token Replay",     risk: "Reuse expired HMAC mutex",    outcome: "BLOCKED · 24h day-key rotation" },
];

export default function Security() {
  return (
    <>
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">SECURITY · DOCS</span>
            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-white uppercase leading-none">
              No model<br/><span className="text-primary">escapes the gate</span>
            </h1>
            <p className="text-tertiary mt-6 text-lg max-w-xl">
              Every output from Claude, Gemini, and local models passes the same
              SL5 8-hook pipeline. HMAC-mutex on every write. No exceptions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-8"><div className="max-w-7xl mx-auto"><MsclStack /></div></section>
      <section className="py-16 px-8 bg-surface-container-lowest/30"><div className="max-w-7xl mx-auto"><PreEditGate /></div></section>
      <section className="py-16 px-8"><div className="max-w-7xl mx-auto"><PermissionTiers /></div></section>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">RED-TEAM AUDIT</span>
            <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">5 Failure Modes · 5 Blocks</h3>
          </div>
          <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 bg-white/[0.02] font-mono text-[9px] text-tertiary uppercase tracking-[0.2em]">
              <div className="col-span-3">VECTOR</div>
              <div className="col-span-5">RISK</div>
              <div className="col-span-3">OUTCOME</div>
              <div className="col-span-1 text-right">STATUS</div>
            </div>
            {AUDITS.map((a, i) => (
              <div key={a.name} className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 items-center">
                <div className="col-span-3 font-display font-black text-white text-xs uppercase tracking-widest">{a.name}</div>
                <div className="col-span-5 text-tertiary text-sm">{a.risk}</div>
                <div className="col-span-3 font-mono text-[10px] text-secondary">{a.outcome}</div>
                <div className="col-span-1 text-right font-mono text-[10px] text-secondary">PASS</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-surface-container-lowest/30">
        <div className="max-w-7xl mx-auto glass-panel rounded-3xl border border-white/5 p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.3em]">HMAC CONTRACT</div>
            <div className="font-display font-black text-white text-xl uppercase mt-2">{SYSTEM.hmacTtlSec}s TTL</div>
            <div className="text-tertiary text-xs mt-2">24h day-key rotation. Position 4 in pre-hook chain. Absence on a mutating tool = EXIT_99.</div>
          </div>
          <div>
            <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.3em]">PROTECTED MANIFEST</div>
            <div className="font-mono text-primary text-xs mt-2">config/protected_manifest.json</div>
            <div className="text-tertiary text-xs mt-2">L1 path guardian reads this on every Write. Blocking = file existed in manifest before edit.</div>
          </div>
          <div>
            <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.3em]">EGRESS POLICY</div>
            <div className="font-display font-black text-secondary text-xl uppercase mt-2">SL5 · 0.00%</div>
            <div className="text-tertiary text-xs mt-2">Hestia inline scrub → suite-10 semantic redaction → whitelisted-domain check. 1,847 blocks in 24h.</div>
          </div>
        </div>
      </section>
    </>
  );
}
