import { motion } from "motion/react";

const SOVEREIGN_13 = [
  { name: "master-cortex",       role: "PPEVL orchestrator",           tier: "DANGER-FULL" },
  { name: "council-critic",      role: "Adversarial review",            tier: "READ-ONLY" },
  { name: "supreme-sovereign",   role: "Final arbiter",                 tier: "DANGER-FULL" },
  { name: "nexus-sentinel",      role: "Egress / killswitch",           tier: "DANGER-FULL" },
  { name: "hardware-empath",     role: "Thermal AIRLOCK",               tier: "WORKSPACE-WRITE" },
  { name: "temporal-archivist",  role: "Epoch / blackbox",              tier: "WORKSPACE-WRITE" },
  { name: "panopticon-director", role: "Surveillance synthesis",        tier: "READ-ONLY" },
  { name: "ghost-protocol",      role: "OSINT / Tor",                   tier: "READ-ONLY" },
  { name: "sanitization-agent",  role: "Hestia inline scrub",           tier: "READ-ONLY" },
  { name: "legal-agent",         role: "FRE 902 · Bates",               tier: "READ-ONLY" },
  { name: "media-sovereign",     role: "Manim · pitch · sonic",         tier: "WORKSPACE-WRITE" },
  { name: "triad-investigator",  role: "Cross-validation",              tier: "WORKSPACE-WRITE" },
  { name: "codex",               role: "AST / refactor",                tier: "WORKSPACE-WRITE" },
];

const SPECIALIZED_7 = [
  { name: "manager",             role: "Mission lifecycle" },
  { name: "codex-cli",           role: "Terminal codex" },
  { name: "ide-companion",       role: "VS Code bridge" },
  { name: "memory-archivist",    role: "SwarmWisdom curator" },
  { name: "evolution-master",    role: "DNA mutation" },
  { name: "intel-master",        role: "Tavily · Neo4j · Crawl4AI" },
  { name: "infra-master",        role: "Docker / Renode / substrate" },
];

const TIER_COLOR: Record<string, string> = {
  "DANGER-FULL":      "text-red-400",
  "WORKSPACE-WRITE":  "text-primary",
  "READ-ONLY":        "text-secondary",
};

export default function SwarmHierarchy() {
  return (
    <div className="space-y-8">
      <div>
        <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">.gemini / agents</span>
        <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">Swarm Hierarchy · 20 Agents</h3>
        <p className="text-tertiary mt-3 max-w-xl text-sm">The Sovereign 13 orchestrate every PPEVL cycle. Seven specialized agents handle infra, IDE bridge, and mission lifecycle.</p>
      </div>

      <div>
        <div className="font-mono text-[10px] text-tertiary uppercase tracking-[0.3em] mb-3">THE SOVEREIGN 13 · CORE SWARM</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {SOVEREIGN_13.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="glass-panel rounded-xl border border-white/5 p-4 flex items-center justify-between"
            >
              <div>
                <div className="font-display font-black text-white text-xs uppercase tracking-widest">{a.name}</div>
                <div className="text-tertiary text-[11px] mt-0.5">{a.role}</div>
              </div>
              <div className={`font-mono text-[8px] uppercase tracking-widest ${TIER_COLOR[a.tier]}`}>{a.tier}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <div className="font-mono text-[10px] text-tertiary uppercase tracking-[0.3em] mb-3">SPECIALIZED 7 · INFRA + LIFECYCLE</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {SPECIALIZED_7.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass-panel rounded-xl border border-white/5 p-4"
            >
              <div className="font-display font-black text-white text-xs uppercase tracking-widest">{a.name}</div>
              <div className="text-tertiary text-[11px] mt-0.5">{a.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
