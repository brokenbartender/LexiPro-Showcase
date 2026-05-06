import { motion } from "motion/react";
import { OMEGA_LANES } from "../../data/system";

export default function OmegaRetrieval() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">EL.08 · OMEGA RETRIEVAL</span>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">
            3-Layer Ensemble Router
          </h3>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-tertiary text-right">
          <div className="text-secondary">SUM W = 1.00 · TOP_K ≤ 5</div>
          <div className="mt-1">omniscient_librarian.py</div>
        </div>
      </div>

      <div className="glass-panel rounded-3xl border border-white/5 p-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.06),transparent_60%)]" />
        </div>

        <div className="relative grid grid-cols-12 gap-6 items-center min-h-[280px]">
          {/* Intent input */}
          <div className="col-span-12 md:col-span-2 flex md:block">
            <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.2em] mb-2">INTENT</div>
            <div className="rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 font-mono text-[10px] text-primary">
              jit_summon_tools(<br/>
              &nbsp;&nbsp;"audit kernel"<br/>
              )
            </div>
          </div>

          {/* Lanes */}
          <div className="col-span-12 md:col-span-7 space-y-3">
            {OMEGA_LANES.map((lane, i) => (
              <motion.div
                key={lane.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <div className="w-20 flex-shrink-0">
                    <div className="font-mono text-[10px] font-black text-white tracking-widest">{lane.name}</div>
                    <div className="font-mono text-[8px] text-tertiary mt-0.5">w={lane.weight.toFixed(2)}</div>
                  </div>
                  <div className="flex-1 h-9 rounded-lg bg-surface-container border border-white/5 relative overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary/40 via-primary/20 to-primary/5"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lane.weight * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 }}
                    />
                    <div className="absolute inset-0 flex items-center px-3 font-mono text-[9px] text-white/80 uppercase tracking-widest">
                      {lane.desc}
                    </div>
                    {/* particle pulse */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      initial={{ left: "0%" }}
                      animate={{ left: "100%" }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
                    />
                  </div>
                  <div className="w-16 text-right font-mono text-[9px] text-secondary">{lane.latencyMs.toFixed(1)}ms</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Output */}
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.2em] mb-2 text-right">RANKED TOOLS</div>
            <div className="rounded-lg border border-secondary/30 bg-secondary/5 p-3 space-y-1 font-mono text-[10px]">
              {[
                "blast_radius",
                "code_graph",
                "ast_guardian",
                "lsp_diagnostics",
                "verify_dna",
              ].map((t, i) => (
                <div key={t} className="flex justify-between">
                  <span className="text-secondary">{t}</span>
                  <span className="text-tertiary">.{(98 - i * 4).toString().padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
