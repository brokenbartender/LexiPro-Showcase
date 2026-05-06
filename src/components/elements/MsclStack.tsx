import { motion } from "motion/react";
import { MSCL_LAYERS } from "../../data/system";

export default function MsclStack() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">EL.06 · MSCL AUTHORITY</span>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">4-Layer Fast-Fail Gate</h3>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-tertiary text-right">
          <div>mscl.py · MSCL_INSTANCE.authorize()</div>
          <div className="text-secondary mt-1">SOLE PRE-EXECUTION GATE</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {MSCL_LAYERS.map((layer, i) => (
            <motion.div
              key={layer.index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-2xl border border-white/5 p-5 flex gap-5 items-center hover:border-secondary/30 transition-colors group"
            >
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="font-display font-black text-3xl text-secondary">L{layer.index}</div>
                <motion.div
                  className="w-2 h-2 rounded-full bg-secondary mt-1 shadow-[0_0_8px_rgba(74,222,128,0.7)]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-black text-white text-sm uppercase tracking-widest mb-1">{layer.name}</div>
                <div className="font-mono text-[10px] text-primary mb-1.5">{layer.authority}</div>
                <div className="text-[11px] text-tertiary leading-snug">{layer.blocks}</div>
              </div>
              <div className="hidden md:block w-32 text-right font-mono text-[9px] text-tertiary uppercase tracking-widest border-l border-white/5 pl-4">
                {layer.trigger}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="glass-panel rounded-2xl border border-white/5 p-5 space-y-4 self-start">
          <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.2em]">LIVE TELEMETRY</div>
          {[
            { label: "CPU TEMP", value: "62°C", state: "NOMINAL", color: "text-secondary" },
            { label: "GPU TEMP", value: "71°C", state: "WARM", color: "text-tertiary" },
            { label: "EGRESS BLOCKED", value: "1,847", state: "24h", color: "text-secondary" },
            { label: "CAP CONTENTION", value: "0.42", state: "OK", color: "text-secondary" },
            { label: "ACTIVE MISSIONS", value: "7", state: "LEDGER", color: "text-primary" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.06 }}
              className="flex items-baseline justify-between border-b border-white/5 pb-2 last:border-0"
            >
              <div>
                <div className="font-mono text-[9px] text-tertiary uppercase tracking-widest">{m.label}</div>
                <div className={`font-display font-black text-lg ${m.color}`}>{m.value}</div>
              </div>
              <div className="font-mono text-[9px] text-tertiary uppercase">{m.state}</div>
            </motion.div>
          ))}
          <div className="font-mono text-[9px] text-secondary uppercase tracking-widest pt-2 border-t border-white/5">
            FAIL-OPEN · ALL LAYERS NOMINAL
          </div>
        </div>
      </div>
    </div>
  );
}
