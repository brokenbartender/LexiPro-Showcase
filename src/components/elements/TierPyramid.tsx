import { motion } from "motion/react";
import { TIERS, SYSTEM } from "../../data/system";

const HUE_MAP: Record<string, { bg: string; text: string; border: string; bar: string }> = {
  "amber":         { bg: "bg-tertiary/15",     text: "text-tertiary",        border: "border-tertiary/40",      bar: "bg-tertiary" },
  "amber-light":   { bg: "bg-tertiary/10",     text: "text-tertiary/80",     border: "border-tertiary/25",      bar: "bg-tertiary/70" },
  "muted":         { bg: "bg-white/[0.04]",    text: "text-white/70",        border: "border-white/10",         bar: "bg-white/40" },
  "muted-deep":    { bg: "bg-white/[0.03]",    text: "text-white/55",        border: "border-white/8",          bar: "bg-white/30" },
  "muted-deeper":  { bg: "bg-white/[0.02]",    text: "text-white/40",        border: "border-white/6",          bar: "bg-white/20" },
  "muted-deepest": { bg: "bg-white/[0.015]",   text: "text-white/30",        border: "border-white/5",          bar: "bg-white/15" },
};

export default function TierPyramid() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">EL.02 · CAPABILITY TIERS</span>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">
            T1 — T6 Fitness Pyramid
          </h3>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-tertiary text-right">
          <div>{SYSTEM.shortlistCount} SHORTLISTED · {SYSTEM.tierCount} TIERS</div>
          <div className="text-secondary mt-1">tier1_tool_extractor.py · fitness ranked</div>
        </div>
      </div>

      <div className="space-y-1.5">
        {TIERS.map((tier, i) => {
          const hue = HUE_MAP[tier.hue];
          const widthPct = 40 + (TIERS.length - i) * 10;
          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-stretch gap-3"
              style={{ width: `${widthPct}%`, minWidth: "min(100%, 540px)" }}
            >
              <div className={`flex-shrink-0 w-16 ${hue.bg} ${hue.border} border rounded-l-lg flex flex-col items-center justify-center`}>
                <div className={`font-display font-black text-2xl ${hue.text}`}>{tier.id}</div>
                <div className="font-mono text-[8px] text-tertiary mt-0.5">×{tier.weight.toFixed(2)}</div>
              </div>
              <div className={`flex-1 ${hue.bg} ${hue.border} border-y border-r rounded-r-lg px-5 py-3 flex items-center justify-between gap-4`}>
                <div className="min-w-0">
                  <div className={`font-display font-black uppercase text-sm tracking-tight ${hue.text}`}>{tier.name}</div>
                  <div className="font-mono text-[9px] text-tertiary uppercase tracking-widest mt-1 truncate">
                    {tier.examples.join(" · ")}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className={`font-display font-black text-2xl ${hue.text}`}>{tier.count}</div>
                  <div className="font-mono text-[8px] text-tertiary uppercase tracking-widest">tools</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="font-mono text-[10px] text-tertiary uppercase tracking-widest pl-2 border-l-2 border-primary/30">
        T1 enters the L1 KV-cache prefix (95% hit rate target). Lower tiers are JIT-summoned by OMEGA at intent time.
      </div>
    </div>
  );
}
