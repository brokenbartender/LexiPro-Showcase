import PpevlLoop from "../components/elements/PpevlLoop";
import CausalField from "../components/elements/CausalField";
import GodNodes from "../components/elements/GodNodes";
import WorkflowPatterns from "../components/elements/WorkflowPatterns";
import { motion } from "motion/react";
import { BOOT_SEQUENCE } from "../data/system";

export default function Architecture() {
  return (
    <>
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">ARCHITECTURE</span>
            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-white uppercase leading-none">
              The kernel<br/><span className="text-primary">that owns the models</span>
            </h1>
            <p className="text-tertiary mt-6 text-lg max-w-xl">
              PPEVL loop · CausalField contention map · Graphify centrality.
              Three primitives keep 20 agents from stepping on each other.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-8"><div className="max-w-7xl mx-auto"><PpevlLoop /></div></section>
      <section className="py-16 px-8 bg-surface-container-lowest/30"><div className="max-w-7xl mx-auto"><CausalField /></div></section>
      <section className="py-16 px-8"><div className="max-w-7xl mx-auto"><GodNodes /></div></section>
      <section className="py-16 px-8"><div className="max-w-7xl mx-auto"><WorkflowPatterns /></div></section>

      <section className="py-16 px-8 bg-surface-container-lowest/30">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">BOOT SEQUENCE</span>
            <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">11 Steps (0–10) · bootstrap_node0.py</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {BOOT_SEQUENCE.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-panel rounded-xl border border-white/5 p-4"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display font-black text-xl text-primary">{String(s.step).padStart(2,"0")}</span>
                  <span className="font-display font-black text-white text-xs uppercase tracking-widest">{s.name}</span>
                </div>
                <div className="font-mono text-[10px] text-tertiary leading-snug">{s.check}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
