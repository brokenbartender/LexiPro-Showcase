import { ChevronRight } from "lucide-react";

export default function Domex() {
  return (
    <section className="py-32 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-display text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">TACTICAL OPERATIONS</span>
          <h2 className="text-5xl md:text-7xl font-black font-sans tracking-tighter text-white uppercase">DOMEX Triage</h2>
        </div>
        
        <div className="relative glass-panel rounded-2xl p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-surface-container to-transparent">
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white uppercase">Project TITAN</h3>
              <p className="text-tertiary leading-relaxed">
                Designed for the edge. Project TITAN enables rapid exploitation of captured media and documents in environments where connectivity is non-existent.
              </p>
              <ul className="space-y-4 font-mono text-xs text-primary">
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>REAL-TIME OCR & TRANSLATION</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>AUTOMATED ENTITY EXTRACTION</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  <span>FORENSIC TIMELINE RECONSTRUCTION</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-primary/20">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono text-tertiary">DEPLOYMENT_LOG_V4</span>
                <span className="text-[10px] font-mono text-secondary">ACTIVE_NODE: 09</span>
              </div>
              <div className="space-y-2 font-mono text-[10px] text-primary/60">
                <p>&gt; SCANNING MEDIA_DRIVE_01...</p>
                <p>&gt; 4,209 DOCUMENTS DETECTED</p>
                <p>&gt; RUNNING SWARM_TRIAGE...</p>
                <p>&gt; 12 HIGH-VALUE TARGETS IDENTIFIED</p>
                <p>&gt; GENERATING FORENSIC RECEIPT...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
