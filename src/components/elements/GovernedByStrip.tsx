export default function GovernedByStrip() {
  return (
    <div className="border-t border-b border-white/5 bg-surface-container-lowest/40 py-6">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-tertiary">SOVEREIGN RUNTIME GOVERNS</div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px]">
          {["claude-sonnet-4.6", "gemini-2.5-pro", "gemini-2.5-flash", "llama3.2:1b", "gemma4:latest", "nomic-embed-text"].map(m => (
            <span key={m} className="px-2.5 py-1 rounded border border-white/10 bg-surface-container/50 text-white/70">{m}</span>
          ))}
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-secondary">ALL OUTPUTS · MSCL · SL5 · PPEVL</div>
      </div>
    </div>
  );
}
