// Single source of truth for LexiPro system metrics, components, and topology.
// All values verified against gemini-op-clean source (May 2026).
// All page components import from here — never hardcode tool counts / server lists inline.

export const SYSTEM = {
  toolCount: 228,
  sdcCoverage: 100,        // % SDC coverage
  serverCount: 15,         // VERIFIED: 14 Python servers (mcp.run() in source) + 1 npx github-server
  agentCount: 20,
  tierCount: 6,
  shortlistCount: 47,
  kernelVersion: "v22.6 APEX",
  manifestVersion: "v22.8 APEX",
  hmacTtlSec: 86400,       // CORRECTED: 24h day-key rotation
  godNodeThreshold: 30,    // in_degree_sum threshold from graphify-out
  embedDim: 768,           // nomic-embed-text dimensionality
} as const;

// ─── 15 MCP servers — verified by mcp.run() grep in nexus_mcp/servers/ ──────
// 14 Python FastMCP servers + 1 npx github-server (CLAUDE.md authoritative)
export interface MCPServer {
  id: string;
  name: string;
  script: string;
  version: string;
  domain: string;
  category: "core" | "memory" | "intel" | "media" | "ops";
}

export const MCP_SERVERS: MCPServer[] = [
  { id: "kernel-master",     name: "Kernel Master",     script: "kernel_master_server.py",     version: "v2.0",   domain: "Mission state · swarm consensus · PPEVL · JIT toolbelt", category: "core" },
  { id: "security-master",   name: "Security Master",   script: "security_master_server.py",   version: "v2.0",   domain: "SL5 egress · HMAC · hallucination · crypto forensics",  category: "core" },
  { id: "council-master",    name: "Council Master",    script: "council_master_server.py",    version: "v1.0",   domain: "Council critic · supreme sovereign · law ratification",  category: "core" },
  { id: "memory-master",     name: "Memory Master",     script: "memory_master_server.py",     version: "v2.1.2", domain: "LanceDB SwarmWisdom · Graphiti · memory paging · dream", category: "memory" },
  { id: "decision-memory",   name: "Decision Memory",   script: "decision_memory_server.py",   version: "v1.0",   domain: "Strategic decisions · contradiction check · audit",      category: "memory" },
  { id: "evolution-master",  name: "Evolution Master",  script: "evolution_master_server.py",  version: "v2.0",   domain: "Self-healing · AST refactor · LoRA · DNA integrity",      category: "memory" },
  { id: "intel-master",      name: "Intel Master",      script: "intel_master_server.py",      version: "v1.0",   domain: "OSINT · GitHub recon · URL crawl · infra mapping",        category: "intel" },
  { id: "infra-master",      name: "Infra Master",      script: "infra_master_server.py",      version: "v2.1",   domain: "Epoch checkpoints · rollback · Renode · thermal · Docker", category: "intel" },
  { id: "tactical-master",   name: "Tactical Master",   script: "tactical_master_server.py",   version: "v1.0",   domain: "Strike briefs · mission todos · swarm consensus",         category: "intel" },
  { id: "legal-master",      name: "Legal Master",      script: "legal_master_server.py",      version: "v1.0",   domain: "Legal extraction · Bates stamps · court filings",         category: "media" },
  { id: "media-master",      name: "Media Master",      script: "media_master_server.py",      version: "v1.0",   domain: "Creative assets · sonic synthesis · visual rendering",    category: "media" },
  { id: "cognitive-master",  name: "Cognitive Master",  script: "cognitive_master_server.py",  version: "v1.0",   domain: "Local Ollama · PPEVL trace · sovereign routing",          category: "ops" },
  { id: "ide-companion",     name: "IDE Companion",     script: "ide_companion_server.py",     version: "v2.1",   domain: "VS Code bridge · LSP · Gemini sub-agent · terminal",      category: "ops" },
  { id: "crypto-master",     name: "Crypto Master",     script: "crypto_master_server.py",     version: "v1.0",   domain: "CoinGecko · Etherscan · Dune · on-chain forensics",       category: "ops" },
  { id: "github-server",     name: "GitHub Server",     script: "@github/github-mcp-server (npx)", version: "ext", domain: "GitHub API · PRs · issues · external bridge",            category: "ops" },
];

// ─── T1–T6 capability tiers (47 shortlisted tools — tool_shortlist.json v22.8) ─
export interface Tier {
  rank: number;
  id: string;
  name: string;
  count: number;
  weight: number;       // 0–1 weighting in OMEGA fitness
  examples: string[];
  hue: "amber" | "amber-light" | "muted" | "muted-deep" | "muted-deeper" | "muted-deepest";
}

export const TIERS: Tier[] = [
  { rank: 1, id: "T1", name: "Command & Control",      count: 11, weight: 1.00, examples: ["jit_summon_tools", "health_audit", "broadcast_intent", "sovereign_route"], hue: "amber" },
  { rank: 2, id: "T2", name: "Safety Gates",            count: 9,  weight: 0.85, examples: ["sl5_egress_check", "detect_hallucination", "council_adversarial_review"], hue: "amber-light" },
  { rank: 3, id: "T3", name: "Memory & Learning",       count: 8,  weight: 0.70, examples: ["query_swarm_wisdom", "record_pattern", "commit_reasoning_node"], hue: "muted" },
  { rank: 4, id: "T4", name: "Evolution",                count: 6,  weight: 0.55, examples: ["verify_dna_integrity", "heal_codebase", "council_etch_law"], hue: "muted-deep" },
  { rank: 5, id: "T5", name: "Domain Specialist",       count: 8,  weight: 0.40, examples: ["bates_stamp", "tool_decrypt_blob", "anonymous_web_strike"], hue: "muted-deeper" },
  { rank: 6, id: "T6", name: "Auxiliary",                count: 5,  weight: 0.25, examples: ["forge_creative_asset", "sonic_id_synth"], hue: "muted-deepest" },
];

// ─── OMEGA v8.0 — 3-Layer Ensemble Retrieval ─────────────────────────────────
// Verified weights from src/kernel/omniscient_librarian.py header
export interface OmegaLane {
  id: string;
  name: string;
  weight: number;
  desc: string;
  latencyMs: number;
}

export const OMEGA_LANES: OmegaLane[] = [
  { id: "lexical",  name: "BM25 + TF-IDF",  weight: 0.40, desc: "engine_tfidf.py — keyword/phrase matching",            latencyMs: 3.1 },
  { id: "vector",   name: "DENSE VECTOR",    weight: 0.45, desc: "engine_vector.py — semantic similarity (768-dim)",     latencyMs: 12.4 },
  { id: "swarm",    name: "SWARM PATTERN",   weight: 0.15, desc: "engine_swarm.py — mission feedback boost",             latencyMs: 1.8 },
];

// ─── PPEVL — explicit 7-step protocol (from nexus_mcp/servers/README.md) ─────
export const PPEVL_PHASES = [
  { id: "perceive", name: "PERCEIVE", angle: 270, desc: "mcp_preflight · query_swarm_wisdom" },
  { id: "predict",  name: "PREDICT",  angle: 342, desc: "jit_summon_tools · adversarial_review" },
  { id: "execute",  name: "EXECUTE",  angle: 54,  desc: "sl5_egress_check · MSCL gate · tool call" },
  { id: "verify",   name: "VERIFY",   angle: 126, desc: "detect_hallucination · LSP diagnostics" },
  { id: "learn",    name: "LEARN",    angle: 198, desc: "commit_reasoning_node · record_learning" },
] as const;

// ─── MSCL — RFC v22.6 Authority Stack (src/kernel/mscl.py header) ───────────
export interface MsclLayer {
  index: number;
  name: string;
  authority: string;
  blocks: string;
  trigger: string;
}

export const MSCL_LAYERS: MsclLayer[] = [
  { index: 0, name: "THERMAL",            authority: "SubstrateGovernor",            blocks: "AIRLOCK at CPU≥80°C · GPU≥85°C · Battery≥42°C",  trigger: "Substrate hardware probe" },
  { index: 1, name: "SL5 EGRESS",         authority: "sl5_guard.py",                  blocks: "Non-whitelisted egress when sl5_mode active",   trigger: "Declared egress tool list" },
  { index: 2, name: "SEMANTIC CONTENTION", authority: "NeuralBus + CAP",              blocks: "WRITE_CONTENTION ≥ 0.82 with no seniority boost", trigger: "Pheromone aggregate per resource_mu" },
  { index: 3, name: "MISSION LEDGER",      authority: "MissionEngine.active_missions", blocks: "Orphan tool calls from COMPLETED/FAILED missions", trigger: "state/missions/ledger.jsonl" },
];

// ─── L1–L5 Pre-Edit Guardian (Safety Layer v9.5) ────────────────────────────
export interface GateLayer {
  level: string;
  name: string;
  script: string;
  enforces: string;
}

export const GATE_LAYERS: GateLayer[] = [
  { level: "L1", name: "PATH GUARDIAN",   script: "guardian.py",          enforces: "Blocks edits to config/protected_manifest.json paths" },
  { level: "L2", name: "ATOMIC SNAPSHOT", script: "pre_edit_snapshot.py", enforces: "5-rotation backups → state/edit_snapshots/" },
  { level: "L3", name: "AST GUARDIAN",    script: "ast_guardian.py",      enforces: "Detects lost decorators · signature drift · structural break" },
  { level: "L4", name: "BASELINE LOCK",   script: "baseline_manager.py",  enforces: "Blocks regression — pytest baseline must hold" },
  { level: "L5", name: "SESSION MONITOR", script: "session_monitor.py",   enforces: "Context pressure: NOMINAL <40 calls< DANGER" },
];

// ─── God nodes — verified graphify-out/GOD_NODES_SUMMARY.md ─────────────────
// in_degree_sum >= 30 = [GOD], 23-29 = [HIGH]
export interface GodNode {
  rank: number;
  file: string;
  inDegreeSum: number;
  role: string;
  classification: "GOD" | "HIGH";
}

export const GOD_NODES: GodNode[] = [
  { rank: 1,  file: "tool_hook_pipeline.py",             inDegreeSum: 117, role: "Immune system · 8-hook execution pipeline",          classification: "GOD" },
  { rank: 2,  file: "bootstrap_node0.py",                inDegreeSum: 76,  role: "11-step session bootstrap",                            classification: "GOD" },
  { rank: 3,  file: "tool_intent_scorer.py",             inDegreeSum: 68,  role: "Tool fitness ranking · intent matching",               classification: "GOD" },
  { rank: 4,  file: "cag_router.py",                     inDegreeSum: 68,  role: "CAG/RAG hybrid prefix builder · KV-cache",             classification: "GOD" },
  { rank: 5,  file: "neural_reasoning.py",               inDegreeSum: 53,  role: "Neural reasoning · cognitive routing",                 classification: "GOD" },
  { rank: 6,  file: "epistemic_guard.py",                inDegreeSum: 52,  role: "Confabulation detection · belief validation",          classification: "GOD" },
  { rank: 7,  file: "hooks/sl5_guard.py",                inDegreeSum: 47,  role: "SL5 egress enforcement at pipeline index 0",           classification: "GOD" },
  { rank: 8,  file: "hestia_egress.py",                  inDegreeSum: 38,  role: "Inline PII scrub · suite-10 semantic redaction",       classification: "GOD" },
  { rank: 9,  file: "mscl.py",                           inDegreeSum: 36,  role: "Minimal Stable Control Loop · 4-layer arbitration",    classification: "GOD" },
  { rank: 10, file: "mission/jit_toolbelt_compiler.py",  inDegreeSum: 33,  role: "JIT toolbelt synthesis · micro-context",               classification: "GOD" },
  { rank: 11, file: "cognition/causal_field.py",         inDegreeSum: 32,  role: "768-dim Gaussian splat · soft-lock thresholds",        classification: "GOD" },
  { rank: 12, file: "mcts_engine.py",                    inDegreeSum: 27,  role: "Monte Carlo Tree Search · plan exploration",            classification: "HIGH" },
  { rank: 13, file: "shadow_branching.py",               inDegreeSum: 26,  role: "Speculative execution · rollback paths",                classification: "HIGH" },
  { rank: 14, file: "mission_engine.py",                 inDegreeSum: 24,  role: "Mission lifecycle · ACTIVE/STAGED/COMPLETED",           classification: "HIGH" },
  { rank: 15, file: "invariant_engine.py",               inDegreeSum: 23,  role: "System invariant verification",                         classification: "HIGH" },
];

// ─── Model routing — sovereign_route() decision matrix ──────────────────────
export interface RoutedModel {
  taskClass: string;
  model: string;
  provider: "ollama" | "google" | "anthropic";
  cost: "$0" | "Low" | "Med" | "Full";
  latency: string;
}

export const MODEL_ROUTES: RoutedModel[] = [
  { taskClass: "Binary classification",     model: "llama3.2:1b",        provider: "ollama",    cost: "$0",   latency: "~80ms" },
  { taskClass: "Syntactic edit · imports",  model: "gemma4:latest",      provider: "ollama",    cost: "$0",   latency: "~340ms" },
  { taskClass: "Web research · OSINT",      model: "gemini-2.5-flash",   provider: "google",    cost: "Low",  latency: "~1.2s" },
  { taskClass: "Long-context analysis",     model: "gemini-2.5-pro",     provider: "google",    cost: "Med",  latency: "~3.8s" },
  { taskClass: "Multi-file wiring · law",   model: "claude-sonnet-4.6",  provider: "anthropic", cost: "Full", latency: "~4.5s" },
];

// ─── Boot sequence (11 steps 0–10 in bootstrap_node0.py) ────────────────────
// Verified against src/kernel/bootstrap_node0.py header docstring
export const BOOT_SEQUENCE = [
  { step: 0,  name: "Environment probe",       check: "env_context.json · API key presence · sys.path purge" },
  { step: 1,  name: "Substrate health",        check: "state/node_state.json → status ONLINE" },
  { step: 2,  name: "Thermal state",           check: "SubstrateGovernor → NOMINAL · CPU<70 · Battery<42" },
  { step: 3,  name: "SwarmWisdom / LanceDB",   check: "LanceDB ping → golden_patterns table reachable" },
  { step: 4,  name: "Bridge inbox drain",      check: ".bridge/inbox/ → process pending ack messages" },
  { step: 5,  name: "HMAC session token",      check: "Mint 24h day-key · sign session_id · 86400s TTL" },
  { step: 6,  name: "Pipeline patches",        check: "HESTIA(0) → PREDICT(6) → LEARN → ENFORCER" },
  { step: 7,  name: "Memory buffer replay",    check: ".gemini/ipc/memory_buffer.jsonl → flush queue" },
  { step: 8,  name: "GEMINI_REF.md index",     check: "docs/GEMINI_REF.md → change-detected per-section" },
  { step: 9,  name: "Archivist daemon",        check: "Background DuckDB heartbeat · 60s pulse" },
  { step: 10, name: "APEX Trinity alignment",  check: "JIT 4-of-N expert check · model availability" },
] as const;
