import { motion } from "motion/react";

const WORKFLOWS = [
  { code: "A", name: "Standard Mission",         tone: "primary",   trigger: "default · general" },
  { code: "B", name: "Offensive / Security",     tone: "red-500",   trigger: "destructive:true · security:offensive" },
  { code: "C", name: "OSINT / Intelligence",     tone: "primary",   trigger: "mission:intelligence · osint:true" },
  { code: "D", name: "Creative / Media",          tone: "secondary", trigger: "mission:creative · media-sovereign" },
  { code: "E", name: "Code / Substrate",          tone: "primary",   trigger: "mission:code · file_edits:true" },
  { code: "F", name: "Self-Evolution",            tone: "secondary", trigger: "performance_degraded:true" },
  { code: "G", name: "Thermal Emergency",         tone: "red-500",   trigger: "temp ≥ 70°C · t_velocity ≥ 2/s" },
  { code: "H", name: "Compliance / Legal Audit",  tone: "primary",   trigger: "data_egress:true · legal_review:true" },
  { code: "I", name: "Git / PR Mission",          tone: "primary",   trigger: "git_push · pull_request" },
  { code: "J", name: "Parallel Multi-Agent",      tone: "secondary", trigger: "parallel:true · agents ≥ 2" },
  { code: "K", name: "Session Handoff",           tone: "primary",   trigger: "platform_switch:true" },
  { code: "L", name: "Partial Failure Recovery",  tone: "red-500",   trigger: "directorate:BLOCKED|ERROR|TIMEOUT" },
  { code: "M", name: "Audit → Heal → Verify",     tone: "secondary", trigger: "pre_release · run_security_audit" },
  { code: "N", name: "Session Memory Commit",     tone: "primary",   trigger: "session_end · on_stop" },
];

export default function WorkflowPatterns() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">.antigravity / workflows.json</span>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">14 Workflow Patterns</h3>
          <p className="text-tertiary mt-3 max-w-xl text-sm">Every mission resolves to one workflow letter. Each has gated steps, council vetoes, and a deterministic on-failure escalation.</p>
        </div>
        <div className="font-mono text-[10px] text-tertiary uppercase tracking-[0.2em] text-right">
          <div>DEFAULT: <span className="text-primary">A</span></div>
          <div>ON_FAILURE: <span className="text-red-400">L</span></div>
          <div>ON_CORRUPT: <span className="text-primary">A</span></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {WORKFLOWS.map((w, i) => (
          <motion.div
            key={w.code}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className={`glass-panel rounded-xl border border-white/5 p-4 hover:border-${w.tone}/40 transition-colors group cursor-default`}
          >
            <div className={`font-display font-black text-3xl text-${w.tone} leading-none`}>{w.code}</div>
            <div className="font-display font-black text-white text-[10px] uppercase tracking-widest mt-2 leading-tight">{w.name}</div>
            <div className="font-mono text-[8px] text-tertiary mt-2 leading-snug opacity-0 group-hover:opacity-100 transition-opacity">{w.trigger}</div>
          </motion.div>
        ))}
      </div>

      <div className="glass-panel rounded-2xl border border-white/5 p-5">
        <div className="font-mono text-[10px] text-secondary uppercase tracking-[0.3em] mb-3">SPOTLIGHT · WORKFLOW M</div>
        <div className="font-display font-black text-white text-xl uppercase tracking-tight mb-2">Audit → Heal → Verify</div>
        <div className="text-tertiary text-sm mb-3">Pre-release pattern. Triggered automatically before any external commit or production push.</div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px]">
          <span className="text-primary">run_security_audit</span>
          <span className="text-tertiary">→</span>
          <span className="text-primary">verify_dna_integrity</span>
          <span className="text-tertiary">→</span>
          <span className="text-primary">forge_guard.scan_ast</span>
          <span className="text-tertiary">→</span>
          <span className="text-primary">heal_or_quarantine</span>
          <span className="text-tertiary">→</span>
          <span className="text-secondary">commit_epoch</span>
        </div>
      </div>
    </div>
  );
}
