import { motion } from "motion/react";
import { Server, Cpu, Brain, Search, FileText, Wrench } from "lucide-react";
import { MCP_SERVERS, SYSTEM, type MCPServer } from "../../data/system";

const CATEGORY_META: Record<MCPServer["category"], { label: string; Icon: React.ComponentType<{ className?: string }> }> = {
  core:   { label: "CORE",          Icon: Cpu },
  memory: { label: "MEMORY",        Icon: Brain },
  intel:  { label: "INTEL · OPS",   Icon: Search },
  media:  { label: "DOMAIN",        Icon: FileText },
  ops:    { label: "INTEGRATION",   Icon: Wrench },
};

export default function FabricGrid() {
  const categories = Object.keys(CATEGORY_META) as MCPServer["category"][];

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">EL.01 · MCP SERVER FABRIC</span>
          <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">
            {SYSTEM.serverCount} Sovereign Servers
          </h3>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-tertiary text-right">
          <div>{SYSTEM.toolCount} TOOLS · {SYSTEM.sdcCoverage}% SDC</div>
          <div className="text-secondary mt-1">14 PYTHON · 1 NPX · {SYSTEM.manifestVersion}</div>
        </div>
      </div>

      <div className="space-y-3">
        {categories.map((cat, ci) => {
          const list = MCP_SERVERS.filter(s => s.category === cat);
          const { label, Icon } = CATEGORY_META[cat];
          return (
            <div key={cat} className="flex flex-col lg:flex-row gap-4">
              <div className="lg:w-44 flex-shrink-0 flex items-center gap-3 lg:py-3">
                <div className="w-9 h-9 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-primary uppercase">{label}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 flex-1">
                {list.map((srv, i) => (
                  <motion.div
                    key={srv.id}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + i * 0.03 }}
                    className="bg-surface p-4 hover:bg-primary/[0.03] transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Server className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors" />
                      <span className="font-mono text-[8px] text-tertiary opacity-60 truncate ml-2">{srv.script}</span>
                    </div>
                    <div className="font-display font-black text-white text-xs uppercase tracking-tight">{srv.name}</div>
                    <div className="text-[10px] text-tertiary leading-snug mt-1.5 font-sans">{srv.domain}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
