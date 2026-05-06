import { motion } from "motion/react";
import { GOD_NODES, SYSTEM } from "../../data/system";

export default function GodNodes() {
  const max = Math.max(...GOD_NODES.map(g => g.inDegreeSum));

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">EL.05 · BLAST RADIUS</span>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">God Nodes</h3>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-tertiary text-right">
          <div>graphify-out/graph.json</div>
          <div className="text-secondary mt-1">38K+ NODES · IN_DEGREE ≥ 30</div>
        </div>
      </div>

      <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 bg-white/[0.02] font-mono text-[9px] text-tertiary uppercase tracking-[0.2em]">
          <div className="col-span-1">RANK</div>
          <div className="col-span-5">FILE</div>
          <div className="col-span-2">CENTRALITY</div>
          <div className="col-span-4">ROLE</div>
        </div>
        {GOD_NODES.map((node, i) => (
          <motion.div
            key={node.file}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 hover:bg-primary/[0.02] transition-colors items-center group"
          >
            <div className={`col-span-1 font-display font-black text-2xl ${node.classification === "GOD" ? "text-primary" : "text-tertiary"}`}>{node.rank.toString().padStart(2, "0")}</div>
            <div className="col-span-5 font-mono text-[11px] text-white truncate group-hover:text-primary transition-colors flex items-center gap-2">
              <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold tracking-widest ${node.classification === "GOD" ? "bg-primary/15 text-primary" : "bg-white/5 text-tertiary"}`}>{node.classification}</span>
              {node.file}
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <div className="font-mono text-xs text-tertiary font-bold w-8">{node.inDegreeSum}</div>
                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(node.inDegreeSum / max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.08 }}
                    className="h-full bg-tertiary"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4 text-[10px] text-tertiary leading-snug">{node.role}</div>
          </motion.div>
        ))}
        <div className="px-6 py-3 bg-tertiary/[0.03] font-mono text-[9px] text-tertiary uppercase tracking-widest">
          ⚠ Always check mcp_get_blast_radius() before editing god nodes · {SYSTEM.manifestVersion}
        </div>
      </div>
    </div>
  );
}
