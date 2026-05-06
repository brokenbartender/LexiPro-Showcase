import { motion } from "motion/react";
import SwarmHierarchy from "../components/elements/SwarmHierarchy";
import { MCP_SERVERS, BOOT_SEQUENCE, SYSTEM } from "../data/system";

const REPO_DIRS = [
  { path: "src/kernel/",            desc: "Core orchestration · MSCL · CausalField · pipelines" },
  { path: "src/capabilities/",      desc: "Directorate logic dir_00–09 · tool_index.json" },
  { path: "nexus_mcp/servers/",     desc: `${SYSTEM.serverCount} FastMCP servers · ${SYSTEM.toolCount} tools` },
  { path: "src/incubator/",         desc: "Experimental staging · import-guarded" },
  { path: "src/quarantine/",        desc: "Offensive security · isolated · sys.path purged" },
  { path: ".gemini/agents/",        desc: "20 agent persona definitions" },
  { path: ".antigravity/",          desc: "Workflow patterns A–M · auto-approve policies" },
  { path: "scripts/",               desc: "Tooling · daemons · pre-commit gates" },
  { path: "tests/",                 desc: "Pytest suite · live_service marker · 30s timeout" },
  { path: "telemetry/",             desc: "Immutable audit ledger · system_logs.json" },
  { path: "config/",                desc: "protected_manifest.json · mcp_config.json (SSOT)" },
  { path: "state/",                 desc: "Runtime · gitignored · LanceDB · epochs" },
];

const PRE_COMMIT_GATES = [
  { step: "3.5", name: "TEST COVERAGE",   tool: "check_test_coverage.py --staged",   blocks: "New .py in covered dir without test" },
  { step: "4",   name: "SECRET SCAN",     tool: "scan_secrets_precommit.py",          blocks: "API keys · 4.5+ Shannon entropy · Win paths" },
  { step: "5",   name: "CONTRACT VALID",  tool: "ci_contract_validator.py",           blocks: "Agent mcp_* refs to dead servers" },
];

export default function Engineering() {
  return (
    <>
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">ENGINEERING</span>
            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-white uppercase leading-none">
              Built for<br/><span className="text-primary">developers who audit</span>
            </h1>
            <p className="text-tertiary mt-6 text-lg max-w-xl">
              Real repo structure. Real test gates. Real contributor mandate.
              Stub tests are forbidden. Living docs are law.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">REPO MAP</span>
            <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">12 Source Trees</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {REPO_DIRS.map((d, i) => (
              <motion.div
                key={d.path}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-surface p-5 hover:bg-primary/[0.03] transition-colors"
              >
                <div className="font-mono text-primary text-sm">{d.path}</div>
                <div className="text-tertiary text-xs mt-1">{d.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-surface-container-lowest/30"><div className="max-w-7xl mx-auto"><SwarmHierarchy /></div></section>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">{SYSTEM.serverCount} MCP SERVERS</span>
            <h3 className="text-3xl md:text-4xl font-black font-display tracking-tighter text-white uppercase">Server Manifest</h3>
          </div>
          <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 bg-white/[0.02] font-mono text-[9px] text-tertiary uppercase tracking-[0.2em]">
              <div className="col-span-3">SERVER</div>
              <div className="col-span-5">SCRIPT</div>
              <div className="col-span-4">DOMAIN</div>
            </div>
            {MCP_SERVERS.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="grid grid-cols-12 gap-4 px-6 py-2.5 border-b border-white/5 items-center hover:bg-primary/[0.02]"
              >
                <div className="col-span-3 font-display font-black text-white text-xs uppercase tracking-widest">{s.name}</div>
                <div className="col-span-5 font-mono text-[10px] text-primary truncate">{s.script}</div>
                <div className="col-span-4 text-tertiary text-[11px]">{s.domain}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">BOOTSTRAP</span>
              <h3 className="text-2xl md:text-3xl font-black font-display tracking-tighter text-white uppercase">11-Step Init (0–10)</h3>
            </div>
            <div className="glass-panel rounded-2xl border border-white/5 p-5">
              <pre className="font-mono text-[11px] text-tertiary leading-relaxed whitespace-pre-wrap">
{`$ python bootstrap_node0.py

` + BOOT_SEQUENCE.map(s => `[${String(s.step).padStart(2,"0")}/10] ${s.name.padEnd(28," ")} → ${s.check.split("·")[0].trim()}`).join("\n") + `

[BOOTSTRAP_COMPLETE] node0 ready · 228 tools · 15 servers`}
              </pre>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-3">PRE-COMMIT</span>
              <h3 className="text-2xl md:text-3xl font-black font-display tracking-tighter text-white uppercase">3 Hard Gates</h3>
            </div>
            <div className="space-y-3">
              {PRE_COMMIT_GATES.map(g => (
                <div key={g.step} className="glass-panel rounded-xl border border-white/5 p-4 flex gap-4">
                  <div className="font-display font-black text-2xl text-tertiary">{g.step}</div>
                  <div className="flex-1">
                    <div className="font-display font-black text-white text-xs uppercase tracking-widest">{g.name}</div>
                    <div className="font-mono text-[10px] text-primary mt-1">{g.tool}</div>
                    <div className="text-tertiary text-[11px] mt-1">Blocks: {g.blocks}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-surface-container-lowest/30">
        <div className="max-w-7xl mx-auto glass-panel rounded-3xl border border-white/5 p-10 flex flex-col md:flex-row justify-between gap-8 items-center">
          <div>
            <div className="font-display font-black text-white text-2xl uppercase tracking-tight">Tested on</div>
            <div className="font-mono text-[10px] text-tertiary uppercase tracking-[0.2em] mt-2">HP · INTEL · WINDOWS 11 PRO · VS CODE · CLAUDE CODE</div>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/brokenbartender/LexiPro-Showcase" target="_blank" rel="noopener noreferrer" className="bg-primary text-black px-6 py-3 font-mono font-bold text-[10px] tracking-[0.2em] uppercase rounded-lg hover:opacity-90 transition-opacity">VIEW REPO ↗</a>
            <a href="mailto:admin@lexipro.online?subject=SBIR%20%2F%20Contributor%20Inquiry" className="border border-white/20 text-white px-6 py-3 font-mono font-bold text-[10px] tracking-[0.2em] uppercase rounded-lg hover:border-primary hover:text-primary transition-colors">CONTRIBUTOR ACCESS</a>
          </div>
        </div>
      </section>
    </>
  );
}
