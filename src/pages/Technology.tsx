import FabricGrid from "../components/elements/FabricGrid";
import TierPyramid from "../components/elements/TierPyramid";
import OmegaRetrieval from "../components/elements/OmegaRetrieval";
import OmegaToolbelt from "../components/elements/OmegaToolbelt";
import ModelRoutingMatrix from "../components/elements/ModelRoutingMatrix";
import GovernedByStrip from "../components/elements/GovernedByStrip";
import { motion } from "motion/react";
import { SYSTEM } from "../data/system";

export default function Technology() {
  return (
    <>
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">THE STACK</span>
            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-white uppercase leading-none">
              {SYSTEM.serverCount} servers.<br/>
              <span className="text-primary">{SYSTEM.toolCount} tools.</span><br/>
              One kernel.
            </h1>
            <p className="text-tertiary mt-6 text-lg max-w-xl">
              The sovereign substrate that runs frontier AI as a managed resource.
              Hardware-aware, air-gap capable, every output gated.
            </p>
          </motion.div>
        </div>
      </section>

      <GovernedByStrip />

      <section className="py-20 px-8"><div className="max-w-7xl mx-auto"><FabricGrid /></div></section>
      <section className="py-20 px-8 bg-surface-container-lowest/30"><div className="max-w-7xl mx-auto"><TierPyramid /></div></section>
      <section className="py-20 px-8"><div className="max-w-7xl mx-auto"><OmegaRetrieval /></div></section>
      <section className="py-20 px-8 bg-surface-container-lowest/30"><div className="max-w-7xl mx-auto"><OmegaToolbelt /></div></section>
      <section className="py-20 px-8"><div className="max-w-7xl mx-auto"><ModelRoutingMatrix /></div></section>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto glass-panel rounded-3xl border border-white/5 p-10 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] text-tertiary uppercase tracking-widest">SUBSTRATE</div>
            <div className="font-display font-black text-2xl text-white uppercase tracking-tight mt-1">HP · INTEL · WINDOWS 11 PRO</div>
            <div className="font-mono text-[10px] text-tertiary mt-2">THERMAL MONITORED · AIR-GAP CAPABLE · LOCAL-FIRST</div>
          </div>
          <div className="font-mono text-[10px] text-right space-y-1 uppercase tracking-widest">
            <div className="text-secondary">KERNEL: {SYSTEM.kernelVersion}</div>
            <div className="text-primary">MANIFEST: {SYSTEM.manifestVersion}</div>
            <div className="text-tertiary">SDC COVERAGE: {SYSTEM.sdcCoverage}%</div>
          </div>
        </div>
      </section>
    </>
  );
}
