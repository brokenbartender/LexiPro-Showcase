import { Gavel, ShieldCheck, Lock } from "lucide-react";

export default function Compliance() {
  return (
    <section className="py-32 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-display text-[10px] tracking-[0.3em] text-secondary uppercase block mb-4">LEGAL & REGULATORY</span>
          <h2 className="text-5xl md:text-7xl font-black font-sans tracking-tighter text-white uppercase">Integrity Standards</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Gavel, title: "FRE 902(13)", desc: "Cryptographic receipts for all AI outputs, ensuring legal admissibility." },
            { icon: ShieldCheck, title: "HIPAA Sovereign", desc: "Local-only processing of PHI with zero cloud exposure." },
            { icon: Lock, title: "FIPS 140-3", desc: "Validated cryptographic modules for government-grade security." }
          ].map((item) => (
            <div key={item.title} className="glass-panel p-8 rounded-xl border border-outline-variant/20">
              <item.icon className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4 uppercase">{item.title}</h3>
              <p className="text-tertiary text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
