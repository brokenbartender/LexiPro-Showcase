import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GATE_LAYERS } from "../../data/system";

export default function PreEditGate() {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [done, setDone] = useState(false);

  const run = () => {
    setDone(false);
    setActiveStep(0);
    GATE_LAYERS.forEach((_, i) => {
      setTimeout(() => setActiveStep(i), (i + 1) * 600);
    });
    setTimeout(() => { setActiveStep(GATE_LAYERS.length); setDone(true); }, (GATE_LAYERS.length + 1) * 600);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">EL.07 · PRE-EDIT GUARDIAN</span>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">L1 — L5 Safety Layer v9.5</h3>
        </div>
        <button
          onClick={run}
          disabled={activeStep >= 0 && !done}
          className="bg-primary text-black px-6 py-3 font-mono font-bold text-[10px] tracking-[0.2em] uppercase rounded-lg disabled:opacity-50 hover:opacity-90 transition-opacity cursor-pointer"
        >
          ▶ RUN GATE
        </button>
      </div>

      <div className="glass-panel rounded-3xl border border-white/5 p-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {GATE_LAYERS.map((layer, i) => {
            const state = activeStep < 0 ? "idle" : activeStep > i ? "pass" : activeStep === i ? "running" : "idle";
            return (
              <div key={layer.level} className="relative">
                <motion.div
                  className={`rounded-xl border p-4 h-full flex flex-col transition-colors ${
                    state === "pass" ? "border-secondary/40 bg-secondary/5" :
                    state === "running" ? "border-primary/40 bg-primary/10" :
                    "border-white/10 bg-surface-container/40"
                  }`}
                  animate={state === "running" ? { boxShadow: ["0 0 0 rgba(34,211,238,0)", "0 0 24px rgba(34,211,238,0.4)", "0 0 0 rgba(34,211,238,0)"] } : {}}
                  transition={{ duration: 0.6, repeat: state === "running" ? Infinity : 0 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`font-display font-black text-2xl ${state === "pass" ? "text-secondary" : state === "running" ? "text-primary" : "text-white/40"}`}>
                      {layer.level}
                    </div>
                    <AnimatePresence>
                      {state === "pass" && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="font-mono text-[9px] text-secondary">✓ PASS</motion.div>
                      )}
                      {state === "running" && (
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full" />
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="font-display font-black text-white text-xs uppercase tracking-widest mb-2">{layer.name}</div>
                  <div className="font-mono text-[9px] text-primary mb-2 truncate">{layer.script}</div>
                  <div className="text-[10px] text-tertiary leading-snug flex-1">{layer.enforces}</div>
                </motion.div>
                {i < GATE_LAYERS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-1.5 w-3 h-px bg-white/20 z-10" />
                )}
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 font-mono text-[10px] text-secondary border border-secondary/30 bg-secondary/5 rounded-lg px-4 py-3 uppercase tracking-widest"
            >
              ✓ GATE_PASSED · 5/5 LAYERS · EDIT AUTHORIZED · TOKEN MINTED ({String(Math.random()).slice(2, 10).toUpperCase()})
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
