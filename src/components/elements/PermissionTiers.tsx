import { motion } from "motion/react";

const TIERS = [
  {
    code: "TIER_1",
    name: "READ-ONLY",
    color: "secondary",
    autoApprove: "AUTO-APPROVED",
    desc: "Safe read/query tools. No side effects. Auto-greenlit.",
    agents: ["council-critic", "legal-agent", "panopticon-director", "ghost-protocol", "sanitization-agent"],
    examples: ["health_audit", "query_wisdom", "lsp_diagnostics", "detect_hallucination"],
  },
  {
    code: "TIER_2",
    name: "WORKSPACE-WRITE",
    color: "primary",
    autoApprove: "CWD-CONSTRAINED",
    desc: "File mutations within project root only. Path-guarded auto-approval.",
    agents: ["hardware-empath", "manager", "media-sovereign", "triad-investigator", "codex"],
    examples: ["write_file", "record_blackbox", "create_epoch", "acquire_mutex"],
  },
  {
    code: "TIER_3",
    name: "DANGER-FULL",
    color: "red-500",
    autoApprove: "HUMAN APPROVAL",
    desc: "Shell, network egress, destructive ops. Always prompts user.",
    agents: ["nexus-sentinel", "security-master", "supreme-sovereign", "master-cortex"],
    examples: ["run_shell_command", "external_fetch", "delete_state", "git_push"],
  },
];

export default function PermissionTiers() {
  return (
    <div className="space-y-8">
      <div>
        <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">PERMISSION TIERS</span>
        <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">3 Tiers · Zero Implicit Trust</h3>
        <p className="text-tertiary mt-3 max-w-xl text-sm">Every tool call is classified. Read-only flies. Workspace-write is path-bounded. Anything dangerous waits for a human.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TIERS.map((t, i) => (
          <motion.div
            key={t.code}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-panel rounded-2xl border border-white/5 p-6 hover:border-${t.color}/40 transition-colors`}
          >
            <div className="flex items-baseline justify-between mb-3">
              <span className={`font-mono text-[9px] tracking-[0.3em] text-${t.color} uppercase`}>{t.code}</span>
              <span className={`font-mono text-[8px] uppercase tracking-widest text-${t.color}`}>● {t.autoApprove}</span>
            </div>
            <div className="font-display font-black text-white text-xl uppercase tracking-tight">{t.name}</div>
            <div className="text-tertiary text-xs mt-2 leading-relaxed">{t.desc}</div>

            <div className="mt-5 pt-5 border-t border-white/5">
              <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.2em] mb-2">EXAMPLES</div>
              <div className="flex flex-wrap gap-1.5">
                {t.examples.map(e => (
                  <span key={e} className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">{e}</span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.2em] mb-2">AGENTS</div>
              <div className="flex flex-wrap gap-1">
                {t.agents.map(a => (
                  <span key={a} className={`font-mono text-[9px] text-${t.color}/80`}>{a}</span>
                )).reduce((acc: any, el, idx, arr) => idx < arr.length - 1 ? [...acc, el, <span key={`s${idx}`} className="text-tertiary/40 mx-1">·</span>] : [...acc, el], [])}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-panel rounded-2xl border border-white/5 p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="font-mono text-[10px] text-tertiary uppercase tracking-[0.2em]">POLICY ENGINE</div>
        <div className="flex flex-wrap gap-3 font-mono text-[10px]">
          <span className="text-white/70">default: <span className="text-primary">prompt</span></span>
          <span className="text-tertiary">·</span>
          <span className="text-white/70">on_unknown: <span className="text-primary">prompt</span></span>
          <span className="text-tertiary">·</span>
          <span className="text-white/70">on_airlock: <span className="text-red-400">deny_all</span></span>
          <span className="text-tertiary">·</span>
          <span className="text-white/70">on_sl5: <span className="text-red-400">deny + alert</span></span>
        </div>
      </div>
    </div>
  );
}
