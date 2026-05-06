import { motion } from "motion/react";

const STAGES = [
  { stage: "INDEX",    desc: "OMEGA scans 50+ unified tools, builds semantic embeddings + BM25 + SwarmWisdom recall" },
  { stage: "MISSION",  desc: "Master Cortex declares objective, calls jit_summon_tools(intent)" },
  { stage: "RETRIEVE", desc: "3-layer ensemble: BM25 (lexical) + LanceDB (vector) + SwarmWisdom (historical success)" },
  { stage: "COMPILE",  desc: "JIT Toolbelt Compiler trims to 5–12 relevant tools — micro-context, not full registry" },
  { stage: "INJECT",   desc: "Toolbelt streams to LLM as a focused tool list. Context window stays clean." },
];

export default function OmegaToolbelt() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">OMEGA v8.0 · APEX</span>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">JIT Toolbelt · 50+ Unified Tools</h3>
          <p className="text-tertiary mt-3 max-w-xl text-sm">Don't dump every tool into the LLM context. Index them all, retrieve only what the mission needs.</p>
        </div>
        <div className="font-mono text-[10px] text-tertiary uppercase tracking-[0.2em] text-right space-y-1">
          <div>SRC: <span className="text-primary">omniscient_librarian.py</span></div>
          <div>RETRIEVAL: <span className="text-primary">3-LAYER ENSEMBLE</span></div>
          <div>COMPILER: <span className="text-secondary">jit_toolbelt_compiler.py</span></div>
        </div>
      </div>

      <div className="glass-panel rounded-3xl border border-white/5 p-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {STAGES.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-display font-black text-3xl text-primary leading-none">{String(i+1).padStart(2,"0")}</span>
                <span className="font-display font-black text-white text-xs uppercase tracking-widest">{s.stage}</span>
              </div>
              <div className="text-tertiary text-[11px] leading-relaxed">{s.desc}</div>
              {i < STAGES.length - 1 && (
                <div className="hidden md:block absolute top-3 -right-2 text-tertiary/40 font-mono text-xs">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-panel rounded-xl border border-white/5 p-5">
          <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.3em] mb-2">BEFORE OMEGA</div>
          <div className="font-display font-black text-red-400 text-2xl">228 tools → context</div>
          <div className="text-tertiary text-xs mt-2">LLM drowns in irrelevant tool definitions. Slow, expensive, hallucination-prone.</div>
        </div>
        <div className="glass-panel rounded-xl border border-white/5 p-5">
          <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.3em] mb-2">WITH OMEGA</div>
          <div className="font-display font-black text-secondary text-2xl">5–12 tools → context</div>
          <div className="text-tertiary text-xs mt-2">Mission-relevant micro-context. ~90% token reduction. Higher tool selection accuracy.</div>
        </div>
        <div className="glass-panel rounded-xl border border-white/5 p-5">
          <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.3em] mb-2">RETRIEVAL WEIGHT</div>
          <div className="font-mono text-[11px] text-white/80 mt-2 space-y-1">
            <div>BM25 lexical · <span className="text-primary">0.30</span></div>
            <div>Vector cosine · <span className="text-primary">0.45</span></div>
            <div>SwarmWisdom · <span className="text-primary">0.25</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
