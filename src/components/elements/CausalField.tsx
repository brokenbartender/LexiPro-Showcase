import { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface Splat {
  x: number;
  y: number;
  agent: string;
  intensity: number;
  contested: boolean;
}

const AGENTS = ["master-cortex", "triad-investigator", "security-master", "media-sovereign", "council-critic", "manager", "web-scout"];

export default function CausalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width = canvas.offsetWidth * 2;
    const H = canvas.height = canvas.offsetHeight * 2;
    ctx.scale(1, 1);

    let splats: Splat[] = [];
    const seed = () => {
      splats = Array.from({ length: 14 }).map(() => ({
        x: Math.random() * W,
        y: Math.random() * H,
        agent: AGENTS[Math.floor(Math.random() * AGENTS.length)],
        intensity: 0.4 + Math.random() * 0.6,
        contested: Math.random() < 0.18,
      }));
    };
    seed();

    let t = 0;
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      // bg grid
      ctx.strokeStyle = "rgba(34,211,238,0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 60) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 60) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      splats.forEach((s, i) => {
        const r = 70 + Math.sin(t / 30 + i) * 10;
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * 2);
        if (s.contested) {
          grad.addColorStop(0, "rgba(239,68,68,0.35)");
          grad.addColorStop(0.5, "rgba(239,68,68,0.08)");
          grad.addColorStop(1, "rgba(239,68,68,0)");
        } else {
          grad.addColorStop(0, `rgba(34,211,238,${s.intensity * 0.3})`);
          grad.addColorStop(0.5, "rgba(34,211,238,0.06)");
          grad.addColorStop(1, "rgba(34,211,238,0)");
        }
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(s.x, s.y, r * 2, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = s.contested ? "#ef4444" : "#22d3ee";
        ctx.beginPath(); ctx.arc(s.x, s.y, 3, 0, Math.PI * 2); ctx.fill();

        s.x += Math.sin(t / 50 + i) * 0.3;
        s.y += Math.cos(t / 60 + i) * 0.3;
      });

      t++;
      raf = requestAnimationFrame(draw);
    };
    draw();

    const reseed = setInterval(seed, 8000);
    return () => { cancelAnimationFrame(raf); clearInterval(reseed); };
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">EL.04 · CAUSAL FIELD</span>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">Gaussian Splat Contention</h3>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-tertiary text-right">
          <div>768-dim · nomic-embed-text</div>
          <div className="text-secondary mt-1">causal_field.py · adaptive σ</div>
        </div>
      </div>

      <div className="glass-panel rounded-3xl border border-white/5 grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
        <div className="lg:col-span-2 relative h-[360px]">
          <canvas ref={canvasRef} className="w-full h-full" />
          <div className="absolute top-3 left-3 font-mono text-[9px] text-tertiary uppercase tracking-widest">FIELD_PROJECTOR · PCA_2D</div>
          <div className="absolute bottom-3 right-3 flex gap-3 font-mono text-[9px]">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" />ACTIVE</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500" />CONTESTED</span>
          </div>
        </div>
        <div className="border-t lg:border-t-0 lg:border-l border-white/5 p-5 space-y-2 bg-surface-container-low">
          <div className="font-mono text-[9px] text-tertiary uppercase tracking-[0.2em] mb-3">PHEROMONE TICKER</div>
          {[
            { agent: "triad-investigator", res: "src/kernel/cag_router.py", level: 0.84, type: "WRITE_CONTENTION" },
            { agent: "security-master",    res: "ollama_local_backend",      level: 0.62, type: "BACKEND_LOAD" },
            { agent: "manager",            res: "lancedb/swarm_wisdom",      level: 0.41, type: "WRITE_CONTENTION" },
            { agent: "media-sovereign",    res: "gemini_backend",            level: 0.28, type: "BACKEND_LOAD" },
            { agent: "council-critic",     res: "tool_index.json",           level: 0.18, type: "WRITE_CONTENTION" },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="font-mono text-[10px] border-l-2 pl-2 py-1"
              style={{ borderColor: p.level > 0.82 ? "#ef4444" : p.level > 0.4 ? "#fbbf24" : "rgba(34,211,238,0.4)" }}
            >
              <div className="flex justify-between">
                <span className="text-white/80">{p.agent}</span>
                <span style={{ color: p.level > 0.82 ? "#ef4444" : p.level > 0.4 ? "#fbbf24" : "#22d3ee" }}>{p.level.toFixed(2)}</span>
              </div>
              <div className="text-tertiary text-[9px] truncate">{p.type} · {p.res}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
