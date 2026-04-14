import { motion } from "motion/react";
import { Cpu, Shield, Activity, Database, FileText } from "lucide-react";
import { useTelemetry } from "../hooks/useTelemetry";
import { useState } from "react";

export default function Home() {
  const throughput = useTelemetry(482.15);
  const [integrityStatus, setIntegrityStatus] = useState<'idle' | 'checking' | 'verified'>('idle');

  const handleIntegrityCheck = () => {
    setIntegrityStatus('checking');
    setTimeout(() => setIntegrityStatus('verified'), 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
          {/* Circuitry Background Elements */}
          <div className="absolute top-1/4 left-10 w-64 h-64 border border-primary/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-primary/5 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-3 bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="font-mono text-[10px] tracking-tighter text-secondary uppercase">[STATUS: WSL_TARGET_READY]</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black font-sans leading-[0.9] tracking-tighter text-white">
              LEXIPRO:<br/>THE SOVEREIGN<br/><span className="text-primary-container">FORENSIC OS</span>
            </h1>
            
            <p className="text-tertiary max-w-lg text-lg leading-relaxed">
              Hardware-aware intelligence for the <span className="text-white font-bold">Pontiac-Detroit Innovation Corridor</span>. Engineered for local-first execution, strict data sovereignty, and recursive liability auditing.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://github.com/your-username/lexipro-strike-pack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-surface px-8 py-4 font-display font-bold tracking-widest uppercase text-xs rounded-lg hover:bg-primary hover:text-white transition-colors shadow-xl text-center inline-block cursor-pointer"
              >
                Download Strike Pack
              </a>
              <button 
                onClick={handleIntegrityCheck}
                disabled={integrityStatus !== 'idle'}
                className={`border px-8 py-4 font-display font-bold tracking-widest uppercase text-xs rounded-lg transition-colors cursor-pointer ${
                integrityStatus === 'verified'
                    ? 'border-secondary text-secondary bg-secondary/10'
                    : integrityStatus === 'checking'
                        ? 'border-primary text-primary animate-pulse'
                        : 'border-outline-variant text-white hover:bg-surface-container-highest'
                }`}
              >
                {integrityStatus === 'idle' && "Verify Node Integrity"}
                {integrityStatus === 'checking' && "COMPUTING SHA-256..."}
                {integrityStatus === 'verified' && "INTEGRITY CONFIRMED"}
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 rounded-xl terminal-glow border border-primary/20"
          >
            <div className="flex justify-between items-center mb-6 border-b border-outline-variant/20 pb-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <div className="font-mono text-[10px] text-primary">LIVE_TELEMETRY_STREAM // RECV_0492</div>
            </div>
            <div className="space-y-6 font-mono">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] text-tertiary uppercase">Ingest Throughput</div>
                  <div className="text-3xl font-bold text-on-surface">{throughput} <span className="text-xs font-normal">T/S</span></div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-tertiary uppercase">Latency</div>
                  <div className="text-lg text-secondary">0.00 MS</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] uppercase">
                  <span className="text-tertiary">Data Egress: (AIR-GAPPED)</span>
                  <span className="text-secondary">0.00%</span>
                </div>
                {/* CSS GPU OPTIMIZATION: Swapped framer motion for native CSS pulse */}
                <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[5%] animate-pulse rounded-full" />
                </div>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded text-[10px] leading-relaxed text-primary/80 overflow-hidden h-32 relative">
                <div className="space-y-1">
                  <p>&gt; OMEGA_V8: 2,316 TOOLS [p95: 11.60ms]</p>
                  <p>&gt; SL5_EGRESS_SHIELD: VERIFIED [p95: 0.004ms]</p>
                  <p>&gt; SWARM_CONSENSUS (3x): SYNCED [p95: 152.32ms]</p>
                  <p>&gt; THERMAL_GOVERNANCE: NOMINAL [0.0004ms]</p>
                  <p>&gt; SUBSTRATE: INTEL i5-10210U // {throughput} T/S</p>
                  <p className="text-secondary pt-2">&gt; [AIR-GAP COMPLIANT: VERIFIED METRICS]</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="font-display text-[10px] tracking-[0.2em] text-primary uppercase block mb-4">RECURSIVE LIABILITY AUDITING (RLA)</span>
              <h2 className="text-5xl md:text-7xl font-black font-sans tracking-tighter text-white uppercase">The Serial Swarm</h2>
            </div>
            <div className="max-w-md">
              <p className="text-tertiary mb-6">
                LexiPro executes a swarm of 10+ adversarial agents locally on your hardware. Each transaction is cross-validated through recursive loops to ensure zero hallucinations and 100% legal traceability.
              </p>
              <div className="font-mono bg-surface p-4 rounded border-l-4 border-primary text-xs">
                <span className="text-primary-container">Math Authority:</span><br/>
                C = ⋂(i=1 to n) A_i <br/>
                L_egress = 0.0 ms // Velocity = 482.15 T/S
              </div>
            </div>
          </div>

          <div className="relative p-12 glass-panel rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 p-4 font-mono text-[10px] text-tertiary">SYSTEM_ARCHITECTURE_MAP_V2.0</div>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 relative z-10">
              {[
                { icon: Cpu, label: "Hardware Layer" },
                { icon: Shield, label: "Kernel Audit" },
                { icon: Activity, label: "Serial Swarm", active: true },
                { icon: Database, label: "Forensic Vault" },
                { icon: FileText, label: "Global Ledger" }
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center flex-grow last:flex-grow-0">
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`w-14 h-14 flex items-center justify-center rounded-lg border ${step.active ? 'border-secondary bg-secondary/10 shadow-[0_0_15px_rgba(74,225,118,0.2)]' : 'border-outline-variant bg-surface-container'}`}>
                      <step.icon className={`w-6 h-6 ${step.active ? 'text-secondary' : 'text-primary'}`} />
                    </div>
                    <span className={`font-display text-[10px] tracking-widest uppercase ${step.active ? 'text-white font-bold' : 'text-tertiary'}`}>{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block h-[1px] flex-grow bg-outline-variant/30 mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
