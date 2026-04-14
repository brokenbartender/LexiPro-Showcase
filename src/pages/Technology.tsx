import { motion } from "motion/react";
import { Cpu, Shield, Zap, Thermometer, Server, Database, GitMerge, Lock } from "lucide-react";

const STACK_LAYERS = [
  {
    layer: "Layer 0",
    name: "Hardware Substrate",
    icon: Cpu,
    color: "primary",
    items: [
      { label: "Intel OpenVINO", desc: "Core i5/i7 UHD native acceleration for local inference" },
      { label: "NPU Routing", desc: "Core Ultra NPU (Intel Liftoff roadmap) for on-die ML workloads" },
      { label: "Thermal Governor", desc: "12.99ms reaction latency — hardware polling via psutil/WMI" },
    ],
  },
  {
    layer: "Layer 1",
    name: "Sovereign OS Kernel",
    icon: Lock,
    color: "secondary",
    items: [
      { label: "Air-Gapped Execution", desc: "Inference is isolated from all network interfaces at the kernel level" },
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
      { label: "11.88ms avg retrieval", desc: "p95: 15.5ms — sub-20ms tool routing enables real-time agent reconfiguration" },
      { label: "Edge-Native RAG", desc: "Qdrant vector DB running locally — no Pinecone cloud calls in SL5 mode" },
    ],
  },
  {
    layer: "Layer 3",
    name: "Serial Swarm (18 Agents)",
    icon: GitMerge,
    color: "secondary",
    items: [
      { label: "Triad Consensus", desc: "Drafter → Critic → Legal-Auditor — all three must agree before output is finalized" },
      { label: "DNA Integrity Protocol", desc: "100% of agents audited against master workflow manifest (v22.4 integrity level)" },
      { label: "Anti-Hallucination by Design", desc: "Multi-agent adversarial review mathematically reduces single-point hallucination to near-zero" },
    ],
  },
  {
    layer: "Layer 4",
    name: "Hestia Egress Guard",
    icon: Shield,
    color: "primary",
    items: [
      { label: "PII Sanitization", desc: "SSN, credential, and API key detection across DOMEX-scale payloads at 8.79ms p95" },
      { label: "Mandatory Egress Gate", desc: "All outbound requests are blocked unless explicitly approved and sanitized" },
      { label: "Zero-Trust by Default", desc: "L_egress = 0.00ms for all internal workflows — cloud access is opt-in, never opt-out" },
    ],
  },
];

const METRICS = [
  { label: "Tool Retrieval (p95)", value: "15.5ms", sub: "OMEGA Engine v8", color: "text-primary" },
  { label: "PII Scan (p95)", value: "10.6ms", sub: "Hestia Egress Guard", color: "text-secondary" },
  { label: "Triad Consensus (p95)", value: "231ms", sub: "Serial Swarm — 3 agents", color: "text-primary" },
  { label: "Thermal React (p95)", value: "15.8ms", sub: "Hardware Governor", color: "text-secondary" },
];

export default function Technology() {
  return (
    <section className="py-32 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-display text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">
            CORE ARCHITECTURE
          </span>
          <h2 className="text-5xl md:text-7xl font-black font-sans tracking-tighter text-white uppercase">
            Sovereign OS Stack
          </h2>
          <p className="text-tertiary mt-6 max-w-2xl text-lg leading-relaxed">
            Five discrete layers — each with a single, auditable responsibility.
            No monolithic models. No opaque black boxes. Every decision is
            traceable, every output is verifiable.
          </p>
        </motion.div>

        {/* Verified Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="glass-panel rounded-xl p-6 border border-outline-variant/20 text-center"
            >
              <div className={`text-3xl font-black font-mono ${m.color}`}>{m.value}</div>
              <div className="text-white text-xs font-bold uppercase tracking-wide mt-2">{m.label}</div>
              <div className="text-tertiary text-[10px] mt-1 font-mono">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Stack */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white uppercase tracking-tight">
            Architecture Layers
          </h3>
          {STACK_LAYERS.map((layer, i) => {
            const Icon = layer.icon;
            const accent = layer.color === "primary" ? "border-primary/30 bg-primary/5" : "border-secondary/30 bg-secondary/5";
            const iconColor = layer.color === "primary" ? "text-primary" : "text-secondary";
            const badgeColor = layer.color === "primary" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary";
            return (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`glass-panel rounded-xl p-8 border ${accent}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex items-center space-x-4 lg:w-56 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-lg border flex items-center justify-center ${accent}`}>
                      <Icon className={`w-6 h-6 ${iconColor}`} />
                    </div>
                    <div>
                      <div className={`font-mono text-[10px] px-2 py-0.5 rounded ${badgeColor} inline-block mb-1`}>
                        {layer.layer}
                      </div>
                      <div className="text-white font-bold uppercase text-sm tracking-wide">{layer.name}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                    {layer.items.map((item) => (
                      <div key={item.label} className="space-y-1">
                        <div className={`font-mono text-xs font-bold ${iconColor}`}>{item.label}</div>
                        <div className="text-tertiary text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Kernel Version Footer */}
        <div className="glass-panel rounded-xl p-8 border border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <Server className="w-10 h-10 text-primary" />
            <div>
              <div className="text-white font-bold text-lg uppercase">Hardware Root of Trust</div>
              <div className="font-mono text-xs text-tertiary mt-1">KERNEL_VERSION: 4.2.0-SVRN // DNA: v22.4 // INTEGRITY: 100%</div>
            </div>
          </div>
          <div className="font-mono text-xs text-right space-y-1">
            <div className="text-secondary">ENCRYPTION: AES-256-GCM</div>
            <div className="text-primary">COMPLIANCE: FIPS 140-3 ALIGNED</div>
            <div className="text-tertiary">AIR-GAP: SL5 VERIFIED</div>
          </div>
        </div>

      </div>
    </section>
  );
}
