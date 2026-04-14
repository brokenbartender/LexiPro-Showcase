import { Server } from "lucide-react";

export default function Technology() {
  return (
    <section className="py-32 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-display text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">CORE ARCHITECTURE</span>
          <h2 className="text-5xl md:text-7xl font-black font-sans tracking-tighter text-white uppercase">Sovereign OS Stack</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-xl border-l-4 border-primary">
              <h3 className="text-xl font-bold text-white mb-4 uppercase">Air-Gapped AI Kernel</h3>
              <p className="text-tertiary text-sm leading-relaxed">
                Our proprietary kernel is built from the ground up to isolate AI inference from network interfaces. This ensures that sensitive data processed by LexiPro never leaves the local hardware environment.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-xl border-l-4 border-secondary">
              <h3 className="text-xl font-bold text-white mb-4 uppercase">Zero-Knowledge File System</h3>
              <p className="text-tertiary text-sm leading-relaxed">
                Every bit written to disk is encrypted with hardware-bound keys. Metadata is obfuscated, preventing forensic reconstruction by unauthorized entities.
              </p>
            </div>
          </div>
          <div className="relative glass-panel rounded-xl overflow-hidden flex items-center justify-center p-12">
            <div className="absolute inset-0 opacity-10">
              <img src="https://picsum.photos/seed/os-kernel/800/800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10 text-center space-y-4">
              <Server className="w-16 h-16 text-primary mx-auto" />
              <div className="font-mono text-xs text-primary">KERNEL_VERSION: 4.2.0-SVRN</div>
              <div className="text-white font-bold text-2xl uppercase">Hardware Root of Trust</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
