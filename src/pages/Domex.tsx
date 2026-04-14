import { ChevronRight, Shield, FileSearch, Clock, Archive, Fingerprint, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

const WORKFLOW_STEPS = [
  {
    id: "01",
    label: "Ingest",
    desc: "Captured media and documents are ingested entirely on the edge device. No data leaves the local substrate at any point during this phase.",
    icon: Archive,
    color: "text-primary",
    border: "border-primary/30",
  },
  {
    id: "02",
    label: "Triage",
    desc: "The OMEGA Engine runs entity extraction and OCR in parallel across all document types. High-value targets are flagged within milliseconds.",
    icon: FileSearch,
    color: "text-secondary",
    border: "border-secondary/30",
  },
  {
    id: "03",
    label: "Consensus",
    desc: "A three-agent Triad (drafter, critic, legal-auditor) independently reviews each high-value target. All three must agree before a finding is finalized.",
    icon: Shield,
    color: "text-primary",
    border: "border-primary/30",
  },
  {
    id: "04",
    label: "Receipt",
    desc: "A cryptographic forensic receipt is generated for every AI output — FRE 902(13) compliant, providing a chain of custody for legal admissibility.",
    icon: Fingerprint,
    color: "text-secondary",
    border: "border-secondary/30",
  },
];

const SUPPORTED_FORMATS = [
  "PDF", "DOCX", "XLSX", "PPTX", "TXT", "RTF",
  "JPG / PNG / TIFF", "MP4 / MOV (frame extraction)",
  "MSG / EML", "ZIP (recursive)", "Audio (transcription)",
];

export default function Domex() {
  return (
    <section className="py-32 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <span className="font-display text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">
            TACTICAL OPERATIONS
          </span>
          <h2 className="text-5xl md:text-7xl font-black font-sans tracking-tighter text-white uppercase">
            DOMEX Triage
          </h2>
          <p className="text-tertiary mt-6 max-w-2xl text-lg leading-relaxed">
            Document and Media Exploitation at the edge. LexiPro processes
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
                time-critical field operations where every second of analysis matters
                and every finding must be legally defensible.
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

            {/* Simulated terminal */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-primary/20 font-mono text-[10px]">
              <div className="flex items-center justify-between mb-6 border-b border-outline-variant/20 pb-4">
                <span className="text-tertiary">DEPLOYMENT_LOG_V4</span>
                <span className="text-secondary">ACTIVE_NODE: 09</span>
              </div>
              <div className="space-y-2 text-primary/70 leading-relaxed">
                <p className="text-tertiary">&gt; TITAN INIT — SL5 AIR-GAP CONFIRMED</p>
                <p>&gt; SCANNING MEDIA_DRIVE_01...</p>
                <p className="text-white">&gt; 4,209 DOCUMENTS DETECTED</p>
                <p>&gt; RUNNING SWARM_TRIAGE — 3 AGENTS ONLINE</p>
                <p className="text-secondary">&gt; 12 HIGH-VALUE TARGETS IDENTIFIED</p>
                <p>&gt; ENTITY EXTRACTION: COMPLETE</p>
                <p>&gt; TIMELINE RECONSTRUCTION: COMPLETE</p>
                <p className="text-secondary">&gt; GENERATING FORENSIC RECEIPTS (FRE 902.13)...</p>
                <p>&gt; CHAIN OF CUSTODY: CRYPTOGRAPHICALLY SEALED</p>
                <p className="text-white pt-2">&gt; ✓ TRIAGE COMPLETE — ZERO EGRESS EVENTS</p>
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
            <p className="text-tertiary text-sm leading-relaxed">
              No finding can be finalized without consensus across all three Triad agents.
              Dissenting votes are logged and preserved in the audit trail.
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
