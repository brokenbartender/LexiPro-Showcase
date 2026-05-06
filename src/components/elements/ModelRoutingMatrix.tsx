import { motion } from "motion/react";
import { MODEL_ROUTES } from "../../data/system";

const COST_BAR: Record<string, { w: string; cls: string }> = {
  "$0":   { w: "w-[8%]",  cls: "bg-secondary" },
  "Low":  { w: "w-[28%]", cls: "bg-tertiary/70" },
  "Med":  { w: "w-[55%]", cls: "bg-tertiary" },
  "Full": { w: "w-[100%]", cls: "bg-red-500/80" },
};

export default function ModelRoutingMatrix() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">SOVEREIGN_ROUTE()</span>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">One Kernel · Every Model</h3>
          <p className="text-tertiary mt-3 max-w-xl text-sm">Every output — Claude, Gemini, local — passes the same MSCL gate. You don't pick a model. The kernel does.</p>
        </div>
      </div>

      <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 bg-white/[0.02] font-mono text-[9px] text-tertiary uppercase tracking-[0.2em]">
          <div className="col-span-4">TASK CLASS</div>
          <div className="col-span-3">MODEL</div>
          <div className="col-span-2">PROVIDER</div>
          <div className="col-span-2">COST</div>
          <div className="col-span-1 text-right">P50</div>
        </div>
        {MODEL_ROUTES.map((r, i) => (
          <motion.div
            key={r.model}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 hover:bg-primary/[0.02] items-center"
          >
            <div className="col-span-4 text-white text-sm">{r.taskClass}</div>
            <div className="col-span-3 font-mono text-[11px] text-primary">{r.model}</div>
            <div className="col-span-2 font-mono text-[10px] text-tertiary uppercase tracking-widest">{r.provider}</div>
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full ${COST_BAR[r.cost].cls} ${COST_BAR[r.cost].w}`} />
                </div>
                <span className="font-mono text-[9px] text-tertiary w-8">{r.cost}</span>
              </div>
            </div>
            <div className="col-span-1 text-right font-mono text-[10px] text-secondary">{r.latency}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
