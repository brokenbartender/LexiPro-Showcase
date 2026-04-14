import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, 
  Search, 
  ChevronRight, 
  AlertTriangle,
  Zap,
  Lock,
  Database
} from "lucide-react";
import { useSystemFeed } from "../hooks/useSystemFeed";
import validationReport from "../../telemetry/validation_report.json";

const WORKFLOW_STEPS = [
  { id: "01", label: "Ingest", icon: Database, color: "text-primary", border: "border-primary/20", desc: "Hardware-isolated intake of captured media and encrypted volumes." },
  { id: "02", label: "Triage", icon: Search, color: "text-secondary", border: "border-secondary/20", desc: "Real-time OCR and multi-agent priority scoring of document caches." },
  { id: "03", label: "Extract", icon: Zap, color: "text-primary", border: "border-primary/20", desc: "Automated entity extraction and timeline reconstruction locally." },
  { id: "04", label: "Seal", icon: Lock, color: "text-secondary", border: "border-secondary/20", desc: "Cryptographic forensic receipt generation (FRE 902.13 compliance)." },
];

const SUPPORTED_FORMATS = [
  "PDF / OCR-Ready", "Forensic EnCase (E01)", "MS Office / PST", 
  "JSON / SQLite", "Encrypted Volumes", "Captured Images"
];

export default function Domex() {
  const feed = useSystemFeed();

  return (
    <section className="py-32 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-secondary uppercase block mb-4">
            TACTICAL EXPLOITATION
          </span>
          <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-white uppercase leading-none">
            DOMEX Triage
          </h2>
          <p className="text-[#8888a0] mt-6 text-lg leading-relaxed font-sans">
            LexiPro provides immediate, field-ready intelligence by exploiting
            captured materials entirely on local hardware — no cloud connectivity
            required, no data egress possible.
          </p>
        </motion.div>

        {/* Project TITAN */}
        <div className="relative glass-panel rounded-3xl p-12 overflow-hidden border border-white/5">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,rgba(74,222,128,0.1),transparent_70%)]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-surface-container/50 px-3 py-1 rounded-full border border-secondary/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                <span className="font-mono text-[10px] tracking-tighter text-secondary uppercase">
                  ACTIVE DEPLOYMENT — NODE 09
                </span>
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tight font-display">Project TITAN</h3>
              <p className="text-[#8888a0] leading-relaxed text-lg font-sans">
                TITAN enables rapid exploitation of captured media and documents in
                environments where connectivity is non-existent.
              </p>
              <ul className="space-y-4 font-mono text-xs text-primary/80">
                {[
                  "Real-time OCR & multi-language translation",
                  "Automated entity & relationship extraction",
                  "Forensic timeline reconstruction",
                  "PII detection & redaction pipeline",
                  "Chain-of-custody cryptographic receipts",
                  "Offline-first — zero connectivity required",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <ChevronRight className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Simulated terminal — Wired to real system logs */}
            <div className="bg-[#050507] p-8 rounded-2xl border border-white/5 font-mono text-[10px] min-h-[350px] flex flex-col shadow-2xl relative overflow-hidden"> 
              <div className="absolute top-0 right-0 p-4 opacity-10"><Shield className="w-12 h-12 text-secondary" /></div>
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <span className="text-[#8888a0] font-bold uppercase tracking-widest">TITAN_CHAOS_AUDIT_V27.1</span>
                <span className="text-secondary font-black">SUCCESS_RATE: {validationReport.success_rate}%</span>
              </div>
              <div className="space-y-2 text-primary/60 leading-relaxed overflow-hidden flex-1">
                <p className="text-secondary/80 font-bold tracking-widest border-b border-white/5 mb-3 pb-1">LIVE FORENSIC FEED</p>
                <AnimatePresence mode="popLayout">
                  {feed.map((run, i) => (
                    <motion.p 
                      key={`${run.timestamp}-${i}`} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      className="truncate"
                    >
                      <span className="text-white/30 mr-2 font-bold">{i.toString().padStart(2, '0')}</span>
                      <span className="text-secondary mr-2">&gt;</span>
                      <span className={run.outcome === 'ACCEPTED' ? 'text-primary/80' : 'text-amber-400'}>
                        [{run.agent.toUpperCase()}] {run.tool} ... {run.outcome}
                      </span>
                    </motion.p>
                  ))}
                </AnimatePresence>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="text-white font-bold uppercase tracking-tighter">&gt; ✓ TRIAGE REPLAY COMPLETE — ZERO EGRESS EVENTS</p>
                <p className="text-secondary/60 text-[8px] mt-1 uppercase font-bold tracking-widest">Receipt: SHA-256 // AES-256-GCM // FIPS-140-3 ALIGNED</p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-12">
          <h3 className="text-2xl font-black text-white uppercase tracking-[0.2em] font-display text-center">
            Zero-Egress DOMEX Pipeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-surface p-8 space-y-6 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className={`font-display text-4xl font-black ${step.color} opacity-20`}>{step.id}</span>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-black uppercase tracking-widest text-xs font-mono">{step.label}</h4>
                  <p className="text-[#8888a0] text-xs leading-relaxed font-sans">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supported Formats + Warning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel rounded-3xl p-10 border border-white/5">
            <h3 className="text-sm font-black text-white uppercase mb-8 tracking-[0.2em] font-mono">
              Supported Ingest Formats
            </h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {SUPPORTED_FORMATS.map((fmt) => (
                <div
                  key={fmt}
                  className="flex items-center space-x-3 font-mono text-[10px] text-[#8888a0] uppercase tracking-widest group"
                >
                  <ChevronRight className="w-3 h-3 text-primary/40 group-hover:text-primary transition-colors" />
                  <span className="group-hover:text-white transition-colors">{fmt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-10 border border-secondary/10 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5"><Activity className="w-24 h-24 text-secondary" /></div>
            <div className="flex items-center space-x-4">
              <AlertTriangle className="w-6 h-6 text-secondary" />
              <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] font-mono">
                Audit Trail Guarantee
              </h3>
            </div>
            <p className="text-[#8888a0] text-sm leading-relaxed font-sans">
              Every AI-generated finding produced by the DOMEX pipeline is accompanied
              by a tamper-evident cryptographic receipt. This receipt logs the input hash,
              agent consensus state, timestamp, and hardware node ID — providing a
              legally admissible chain of custody under <span className="text-white font-mono font-bold">FRE 902(13)</span>.
            </p>
            <div className="font-mono text-[9px] text-secondary/40 pt-2 uppercase font-bold tracking-[0.2em]">
              Log_Format: SHA-256 // AES-256-GCM // FIPS-140-3 ALIGNED
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}