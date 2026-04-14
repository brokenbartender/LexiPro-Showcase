import { motion } from "motion/react";
import { 
  Shield, 
  Activity, 
  Search, 
  FileText, 
  ChevronRight, 
  AlertTriangle,
  Zap,
  Lock,
  Database
} from "lucide-react";
import { useEffect, useState } from "react";
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
  const [logs, setLogs] = useState<string[]>([]);
  
  useEffect(() => {
    const rawLogs = validationReport.log_sample.map((run: any) => 
      `&gt; ${run.id} [${run.scenario}] ... ${run.success ? 'SUCCESS' : 'DISSENT'} (${run.latency.toFixed(2)}ms)`
    );
    
    let current = 0;
    const interval = setInterval(() => {
      if (current < rawLogs.length) {
        setLogs(prev => [...prev, rawLogs[current]]);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="font-display text-[10px] tracking-[0.3em] text-secondary uppercase block mb-4">
            TACTICAL EXPLOITATION
          </span>
          <h2 className="text-5xl md:text-7xl font-black font-sans tracking-tighter text-white uppercase">
            DOMEX Triage
          </h2>
          <p className="text-tertiary mt-6 text-lg leading-relaxed">
            LexiPro provides immediate, field-ready intelligence by exploiting
            captured materials entirely on local hardware — no cloud connectivity
            required, no data egress possible.
          </p>
        </motion.div>

        {/* Project TITAN */}
        <div className="relative glass-panel rounded-2xl p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-surface-container to-transparent" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                <span className="font-mono text-[10px] tracking-tighter text-secondary uppercase">
                  ACTIVE DEPLOYMENT — NODE 09
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white uppercase">Project TITAN</h3>
              <p className="text-tertiary leading-relaxed">
                TITAN enables rapid exploitation of captured media and documents in
                environments where connectivity is non-existent. Designed for
                time-critical field operations.
              </p>
              <ul className="space-y-3 font-mono text-xs text-primary">
                {[
                  "Real-time OCR & multi-language translation",
                  "Automated entity & relationship extraction",
                  "Forensic timeline reconstruction",
                  "PII detection & redaction pipeline",
                  "Chain-of-custody cryptographic receipts",
                  "Offline-first — zero connectivity required",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Simulated terminal — Wired to real validation logs */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-primary/20 font-mono text-[10px] min-h-[300px] flex flex-col"> 
              <div className="flex items-center justify-between mb-6 border-b border-outline-variant/20 pb-4">
                <span className="text-tertiary">TITAN_CHAOS_AUDIT_V27.1</span>
                <span className="text-secondary">SUCCESS_RATE: {validationReport.success_rate}%</span>
              </div>
              <div className="space-y-2 text-primary/70 leading-relaxed overflow-hidden">
                <p className="text-tertiary">&gt; TITAN INIT — SL5 AIR-GAP CONFIRMED</p>
                {logs.map((log, i) => (
                  <p key={i} className={log.includes('DISSENT') ? 'text-amber-400' : 'text-primary/70'} dangerouslySetInnerHTML={{ __html: log }} />
                ))}
                {logs.length === validationReport.log_sample.length && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-1000">
                    <p className="text-white pt-2">&gt; ✓ TRIAGE COMPLETE — ZERO EGRESS EVENTS</p>
                    <p className="text-secondary">&gt; CHAIN OF CUSTODY: CRYPTOGRAPHICALLY SEALED</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Steps */}
        <div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-10">
            Zero-Egress DOMEX Pipeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`glass-panel rounded-xl p-6 border ${step.border} space-y-4`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-2xl font-bold ${step.color}`}>{step.id}</span>
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>
                <h4 className="text-white font-bold uppercase tracking-wide">{step.label}</h4>
                <p className="text-tertiary text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supported Formats + Warning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel rounded-xl p-8 border border-outline-variant/20">
            <h3 className="text-lg font-bold text-white uppercase mb-6 tracking-wide">
              Supported Ingest Formats
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {SUPPORTED_FORMATS.map((fmt) => (
                <div
                  key={fmt}
                  className="flex items-center space-x-2 font-mono text-xs text-primary/80"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  <span>{fmt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-xl p-8 border border-secondary/20 space-y-4">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-secondary flex-shrink-0" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                Audit Trail Guarantee
              </h3>
            </div>
            <p className="text-tertiary text-sm leading-relaxed">
              Every AI-generated finding produced by the DOMEX pipeline is accompanied
              by a tamper-evident cryptographic receipt. This receipt logs the input hash,
              agent consensus state, timestamp, and hardware node ID — providing a
              legally admissible chain of custody under{" "}
              <span className="text-white font-mono">FRE 902(13)</span>.
            </p>
            <div className="font-mono text-[10px] text-primary/60 pt-2">
              RECEIPT_FORMAT: SHA-256 // AES-256-GCM // FIPS-140-3 ALIGNED
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}