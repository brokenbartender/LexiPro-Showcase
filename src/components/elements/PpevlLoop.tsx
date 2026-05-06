import { motion } from "motion/react";
import { PPEVL_PHASES } from "../../data/system";

const SIZE = 380;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 130;

const pt = (deg: number, radius = R) => {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
};

export default function PpevlLoop() {
  const points = PPEVL_PHASES.map(p => pt(p.angle));
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ") + " Z";

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">EL.03 · COGNITIVE LOOP</span>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">PPEVL · 5-Phase</h3>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-tertiary text-right">
          <div className="text-secondary">NO PHASE SKIPPABLE</div>
          <div className="mt-1">tool_hook_pipeline.py · 8 hooks</div>
        </div>
      </div>

      <div className="glass-panel rounded-3xl border border-white/5 p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
            <circle cx={CX} cy={CY} r={R + 24} fill="none" stroke="rgba(34,211,238,0.06)" strokeWidth={1} />
            <circle cx={CX} cy={CY} r={R - 24} fill="none" stroke="rgba(34,211,238,0.04)" strokeWidth={1} />
            <motion.path
              d={path}
              fill="rgba(34,211,238,0.04)"
              stroke="rgba(34,211,238,0.5)"
              strokeWidth={1.5}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
            {points.map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r={6} fill="#22d3ee" className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                <text x={p.x} y={p.y - 18} textAnchor="middle" fill="#fff" fontSize={11} fontFamily="IBM Plex Mono" fontWeight={700} letterSpacing={1.5}>
                  {PPEVL_PHASES[i].name}
                </text>
              </g>
            ))}
            <text x={CX} y={CY - 6} textAnchor="middle" fill="#22d3ee" fontSize={10} fontFamily="IBM Plex Mono" letterSpacing={2}>LOOP</text>
            <text x={CX} y={CY + 10} textAnchor="middle" fill="#4ade80" fontSize={9} fontFamily="IBM Plex Mono">ENFORCED</text>
          </svg>
        </div>
        <div className="space-y-2">
          {PPEVL_PHASES.map((phase, i) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-3 rounded-lg border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="font-mono text-[10px] text-primary font-black w-6">0{i + 1}</div>
              <div className="flex-1">
                <div className="font-display font-black text-white text-xs uppercase tracking-widest">{phase.name}</div>
                <div className="font-mono text-[10px] text-tertiary mt-1">{phase.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
