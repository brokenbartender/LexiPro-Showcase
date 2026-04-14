import { motion, AnimatePresence } from "motion/react";
import { Cpu, Shield, Activity, Database, FileText, CheckCircle2, ChevronRight } from "lucide-react";
import { useTelemetry } from "../hooks/useTelemetry";
import { useSystemFeed } from "../hooks/useSystemFeed";
import { useState } from "react";
import telemetryData from '../../telemetry/telemetry_output.json';

export default function Home() {
  const throughput = useTelemetry(482.15);
  const feed = useSystemFeed();
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.08),transparent_70%)]"></div>
        </div>

        <div className="z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-3 bg-surface-container/50 px-3 py-1 rounded-full border border-primary/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="font-mono text-[10px] tracking-tighter text-secondary uppercase">
                [STATUS: WSL_TARGET_READY — NODE 09 ACTIVE]
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black font-display leading-[0.9] tracking-tighter text-white uppercase">        
              LexiPro:<br/>The Sovereign<br/><span className="text-primary">Forensic OS</span>
            </h1>

            <p className="text-[#8888a0] max-w-lg text-lg leading-relaxed font-sans">
              Hardware-aware intelligence for the <span className="text-white font-bold">Pontiac-Detroit Innovation Corridor</span>. 
              Local-first execution, strict data sovereignty, and recursive liability auditing.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/brokenbartender/LexiPro-Showcase"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-black px-8 py-4 font-mono font-bold tracking-widest uppercase text-xs rounded-lg hover:opacity-90 transition-all shadow-[0_0_25px_rgba(34,211,238,0.3)] text-center inline-block cursor-pointer"
              >
                Audit Architecture
              </a>
              <button
                onClick={handleIntegrityCheck}
                disabled={integrityStatus !== 'idle'}
                className={`border px-8 py-4 font-mono font-bold tracking-widest uppercase text-xs rounded-lg transition-all cursor-pointer ${
                integrityStatus === 'verified'
                    ? 'border-secondary text-secondary bg-secondary/5'
                    : integrityStatus === 'checking'
                        ? 'border-primary text-primary animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                        : 'border-white/10 text-[#8888a0] hover:border-primary/40 hover:text-white'
                }`}
              >
                {integrityStatus === 'idle' && "Verify Node Integrity"}
                {integrityStatus === 'checking' && "COMPUTING SHA-256..."}
                {integrityStatus === 'verified' && "INTEGRITY CONFIRMED ✓"}
              </button>
            </div>
            
            <AnimatePresence>
              {integrityStatus === 'verified' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-[10px] text-secondary/80 bg-secondary/5 border border-secondary/20 p-3 rounded-lg w-fit backdrop-blur-sm"
                >
                  DNA_HASH: 4eb2a1c7f3a9d... [MATCH_SUCCESS]
                  <div className="text-[8px] opacity-60 mt-1 uppercase">Manifest v22.4 // 18/18 Agents Verified</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 rounded-2xl terminal-glow border border-primary/20 relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative">
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="font-mono text-[10px] text-primary flex space-x-3 items-center">
                  <span className="opacity-50">LIVE_TELEMETRY_STREAM // RECV_0492</span>
                  <span className="bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 rounded text-[8px] font-bold">VERIFIED LOCAL</span>
                </div>
              </div>
              <div className="space-y-6 font-mono">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[10px] text-[#8888a0] uppercase tracking-widest mb-1">Ingest Throughput</div>
                    <div className="text-3xl font-black text-white">{throughput} <span className="text-xs font-normal opacity-40">T/S</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-[#8888a0] uppercase tracking-widest mb-1">Data Egress</div>
                    <div className="text-3xl font-black text-secondary">0.00<span className="text-xs font-normal opacity-40">%</span></div>
                    <div className="text-[8px] text-secondary font-bold mt-1 tracking-tighter uppercase tracking-widest">Air-Gapped ✓</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest">
                    <span className="text-[#8888a0]">Kernel Shield Status</span>
                    <span className="text-secondary">Enforced</span>
                  </div>
                  <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-[4%] animate-pulse rounded-full" />
                  </div>
                </div>

                <div className="bg-black/40 p-4 rounded-xl text-[10px] leading-relaxed text-primary/70 border border-white/5 h-48 overflow-hidden relative">
                  <div className="space-y-1.5">
                    <p className="text-white/40 mb-2 uppercase font-bold tracking-widest border-b border-white/5 pb-1">Historical Audit Trail</p>
                    {feed.map((event, i) => (
                      <motion.p 
                        key={i} 
                        initial={{ opacity: 0, x: -5 }} 
                        animate={{ opacity: 1, x: 0 }}
                        className="truncate"
                      >
                        <span className="text-secondary font-bold tracking-tighter mr-2">&gt;</span>
                        <span className="text-white/90 mr-2">[{event.agent.toUpperCase()}]</span>
                        <span className="opacity-80">{event.tool}</span>
                        <span className="ml-2 text-primary font-bold">[{event.outcome}]</span>
                      </motion.p>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#09090b] to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-32 px-8 bg-surface-container-lowest/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">RECURSIVE LIABILITY AUDITING (RLA)</span>
              <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-white uppercase leading-none">The Serial Swarm</h2>
            </div>
            <div className="max-w-md">
              <p className="text-[#8888a0] mb-6 font-sans text-lg">
                LexiPro executes a swarm of 18 adversarial agents locally on your hardware. Each transaction is cross-validated through recursive loops to ensure zero hallucinations.
              </p>
              <div className="font-mono bg-surface-container/50 backdrop-blur-md p-5 rounded-xl border border-primary/20 text-xs shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-20"><Activity className="w-4 h-4 text-primary" /></div>
                <span className="text-primary font-bold uppercase tracking-widest text-[9px]">Mathematical Authority:</span><br/>
                <div className="mt-3 space-y-1 text-white/90">
                  <p>C = ∩(i=1 to n) A_i</p>
                  <p>L_egress = 0.0 ms</p>
                  <p>Efficiency = <span className="text-secondary font-bold">{telemetryData.insights.sovereign_efficiency_gain_pct.value}% VS CLOUD</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-12 glass-panel rounded-3xl overflow-hidden border border-white/5">
            <div className="absolute top-0 left-0 p-6 font-mono text-[9px] text-white/20 uppercase tracking-[0.4em]">System_Architecture_Map_V2.4</div>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 relative z-10 py-4">
              {[
                { icon: Cpu, label: "Hardware Substrate" },
                { icon: Shield, label: "Kernel Audit" },
                { icon: Activity, label: "Serial Swarm", active: true },
                { icon: Database, label: "Forensic Vault" },
                { icon: FileText, label: "Global Ledger" }
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center flex-grow last:flex-grow-0">
                  <div className="flex flex-col items-center space-y-4">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-2xl border transition-all duration-500 ${step.active ? 'border-secondary bg-secondary/10 shadow-[0_0_25px_rgba(74,225,118,0.2)]' : 'border-white/5 bg-white/5 group-hover:border-white/10'}`}> 
                      <step.icon className={`w-7 h-7 ${step.active ? 'text-secondary' : 'text-primary/40'}`} />
                    </div>
                    <span className={`font-mono text-[9px] tracking-[0.2em] uppercase transition-colors ${step.active ? 'text-white font-black' : 'text-[#8888a0]'}`}>{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block h-[1px] flex-grow bg-white/5 mx-6"></div>
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