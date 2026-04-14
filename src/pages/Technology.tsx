import { motion } from "motion/react";
import { Cpu, Shield, Zap, Lock, Database, GitMerge, Server, Activity } from "lucide-react";
import telemetryData from '../../telemetry/telemetry_output.json';

const STACK_LAYERS = [
  {
    layer: "Layer 0",
    name: "Hardware Substrate",
    icon: Cpu,
    color: "primary",
    items: [
      { label: "Intel OpenVINO", desc: "Core i5/i7 UHD native acceleration for local inference" },
      { label: "NPU Routing", desc: "Core Ultra NPU (Intel Liftoff roadmap) for on-die ML workloads" },
      { label: "Thermal Governor", desc: `${telemetryData.tests.thermal.p95_ms.toFixed(2)}ms reaction latency — hardware polling via psutil/WMI` },
    ],
  },
  {
    layer: "Layer 1",
    name: "Sovereign OS Kernel",
    icon: Lock,
    color: "secondary",
    items: [
      { label: "Air-Gapped Execution", desc: "Inference isolated from all network interfaces at the kernel level" }, 
      { label: "Zero-Knowledge File Bus", desc: "Cross-agent state sync with hardware-bound AES-256-GCM encryption" },  
      { label: "SL5 Compliance Layer", desc: "Mandatory data sovereignty mandates enforced before any agent runs" },    
    ],
  },
  {
    layer: "Layer 2",
    name: "OMEGA Engine v8",
    icon: Database,
    color: "primary",
    items: [
      { label: "3-Layer Ensemble Retrieval", desc: "Semantic, keyword, and graph-based retrieval over 2,316 indexed capabilities" },
      { label: `${telemetryData.tests.omega.avg_ms.toFixed(2)}ms avg retrieval`, desc: `p95: ${telemetryData.tests.omega.p95_ms.toFixed(2)}ms — sub-20ms tool routing enables agentic autonomy` },
      { label: "Edge-Native RAG", desc: "Qdrant vector DB running locally — no Pinecone cloud calls in SL5 mode" },   
    ],
  },
  {
    layer: "Layer 3",
    name: "Serial Swarm (18 Agents)",
    icon: GitMerge,
    color: "secondary",
    items: [
      { label: "Triad Consensus", desc: "Drafter → Critic → Legal-Auditor — 3-way agreement required for final output" },
      { label: "DNA Integrity Protocol", desc: "100% of 18 agents audited against master workflow manifest (v22.4)" },
      { label: "Anti-Hallucination", desc: "Multi-agent adversarial review mathematically reduces single-point failure" },
    ],
  },
  {
    layer: "Layer 4",
    name: "Hestia Egress Guard",
    icon: Shield,
    color: "primary",
    items: [
      { label: "PII Sanitization", desc: `SSN, credential, and API key detection at ${telemetryData.tests.sl5.p95_ms.toFixed(2)}ms p95` },
      { label: "Mandatory Egress Gate", desc: "All outbound requests blocked unless explicitly approved and sanitized" },
      { label: "Zero-Trust by Default", desc: "L_egress = 0.00ms for all internal workflows — cloud access is opt-in" },
    ],
  },
];

const METRICS = [
  { label: "OMEGA Retrieval (p95)", value: `${telemetryData.tests.omega.p95_ms.toFixed(1)}ms`, sub: "OMEGA Engine v8", color: "text-primary" },
  { label: "PII Scan (p95)", value: `${telemetryData.tests.sl5.p95_ms.toFixed(1)}ms`, sub: "Hestia Egress Guard", color: "text-secondary" },
  { label: "Triad Consensus (p95)", value: `${telemetryData.tests.hybrid_consensus.p95_ms.toFixed(0)}ms`, sub: "Serial Swarm — 3 agents", color: "text-primary" },
  { label: "Thermal React (p95)", value: `${telemetryData.tests.thermal.p95_ms.toFixed(1)}ms`, sub: "Hardware Governor", color: "text-secondary" },
];

export default function Technology() {
  return (
    <section className="py-32 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">
              CORE ARCHITECTURE
            </span>
            <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-white uppercase leading-none">
              Sovereign OS Stack
            </h2>
            <p className="text-[#8888a0] mt-8 text-lg leading-relaxed font-sans">
              Five discrete layers — each with a single, auditable responsibility.
              No monolithic models. No opaque black boxes. Every decision is
              traceable, every output is verifiable.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-8 rounded-3xl border border-primary/20 w-full lg:w-80 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Activity className="w-8 h-8 text-primary" /></div>
            <div className="font-mono text-[9px] text-primary font-black uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/5">Math Authority</div>
            <div className="font-mono text-sm space-y-2 text-white/90">
              <p>C = ∩(i=1 to n) A_i</p>
              <p>L_egress = 0.0 ms</p>
              <p>Efficiency = <span className="text-secondary font-black">{telemetryData.insights.sovereign_efficiency_gain_pct.value}%</span></p>
            </div>
          </motion.div>
        </div>

        {/* Verified Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="bg-surface p-8 text-center hover:bg-white/[0.02] transition-colors"
            >
              <div className={`text-4xl font-black font-display tracking-tighter ${m.color}`}>{m.value}</div>
              <div className="text-white text-[9px] font-black uppercase tracking-[0.2em] mt-4">{m.label}</div>
              <div className="text-[#8888a0] text-[8px] mt-1 font-mono uppercase tracking-widest">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Stack */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.4em] font-mono mb-8 ml-2">
            Layered Execution Model
          </h3>
          <div className="space-y-4">
            {STACK_LAYERS.map((layer, i) => {
              const Icon = layer.icon;
              const accent = layer.color === "primary" ? "border-primary/20 bg-primary/[0.02]" : "border-secondary/20 bg-secondary/[0.02]";
              const iconColor = layer.color === "primary" ? "text-primary" : "text-secondary";
              const badgeColor = layer.color === "primary" ? "bg-primary/10 text-primary border-primary/20" : "bg-secondary/10 text-secondary border-secondary/20";
              return (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`glass-panel rounded-3xl p-10 border ${accent} hover:border-white/20 transition-all duration-500`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-12">
                    <div className="flex items-center space-x-6 lg:w-72 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center ${badgeColor} shadow-xl`}>
                        <Icon className={`w-8 h-8 ${iconColor}`} />
                      </div>
                      <div>
                        <div className={`font-mono text-[9px] px-2.5 py-1 rounded-full border font-bold uppercase tracking-widest ${badgeColor} inline-block mb-2`}>     
                          {layer.layer}
                        </div>
                        <div className="text-white font-black uppercase text-sm tracking-widest font-display">{layer.name}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
                      {layer.items.map((item) => (
                        <div key={item.label} className="space-y-2">
                          <div className={`font-mono text-[10px] font-black uppercase tracking-widest ${iconColor}`}>{item.label}</div>
                          <div className="text-[#8888a0] text-xs leading-relaxed font-sans">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Kernel Version Footer */}
        <div className="glass-panel rounded-3xl p-10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-white/[0.01] to-transparent shadow-2xl">
          <div className="flex items-center space-x-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <Server className="w-7 h-7 text-primary" />
            </div>
            <div>
              <div className="text-white font-black text-xl uppercase font-display tracking-tight">Hardware Root of Trust</div>
              <div className="font-mono text-[9px] text-[#8888a0] mt-1 uppercase tracking-widest">KERNEL_VERSION: 4.2.0-SVRN // DNA: v22.4 // INTEGRITY: 100%</div>
            </div>
          </div>
          <div className="font-mono text-[9px] text-right space-y-2 uppercase tracking-[0.2em] font-bold">
            <div className="text-secondary">ENCRYPTION: AES-256-GCM</div>
            <div className="text-primary">COMPLIANCE: FIPS 140-3 ALIGNED</div>
            <div className="text-[#8888a0]">AIR-GAP: SL5 VERIFIED</div>
          </div>
        </div>

      </div>
    </section>
  );
}