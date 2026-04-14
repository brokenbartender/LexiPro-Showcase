# LexiPro — Sovereign OS Architecture Showcase

![License](https://img.shields.io/badge/License-Proprietary-red.svg)
![Status](https://img.shields.io/badge/Status-SL5_Air_Gapped-green.svg)
![Architecture](https://img.shields.io/badge/Architecture-Hardware_Aware_Agentic-blue.svg)
![Kernel](https://img.shields.io/badge/Kernel-4.2.0--SVRN-blue.svg)

> **NOTICE:** This repository is the public architectural showcase and verifiable telemetry artifact for LexiPro Sovereign OS. The proprietary intelligence engine, LLM routing logic, and SL5 cryptographic egress guards remain strictly air-gapped in private repositories to maintain zero-trust compliance.

---

## Overview

**LexiPro** is a hardware-aware, local-first AI runtime for legal discovery, DOMEX (Document and Media Exploitation), and high-security inference. Built on the **Sovereign OS** kernel, it provides cryptographic guarantees that sensitive data processing remains fully isolated from unauthorized cloud networks.

This repository publicly exposes:
- The **React/Vite frontend** client architecture (`src/`)
- **Empirical telemetry benchmarks** (`telemetry/run_tests.py` + `telemetry_output.json`)
- A **hybrid validation suite** (`validation_layer.py`) with chaos engineering

**Live site:** [LexiPro.Online](https://lexipro.online)

---

## Core Architecture

Sovereign OS uses a **Serial Swarm** architecture — a deterministic orchestration engine that enforces multi-agent consensus before any output is accepted.

### Compute & Intelligence Layer
- **Local Inference:** Intel OpenVINO (Core i5/UHD + Core Ultra NPU roadmap)
- **Cloud/Scale Fallback:** Anthropic, Groq LPU, DeepSeek V3, Mistral (SL5-gated)
- **Hardware-Aware Governance:** Inference routing based on real-time thermal telemetry

### Data & Orchestration
- **OMEGA Engine v8:** Proprietary 3-layer ensemble retrieval over 2,316+ capabilities
- **Mission State Engine (MSE):** Zero-knowledge cross-agent state synchronization
- **Vector Layer:** Qdrant (edge-native), Pinecone (cloud, SL5-gated)

### Frontend (`src/`)
- React 19, Vite 6, Tailwind CSS v4, Motion, React Router v7
- GPU-accelerated CSS animations (preserves CPU for local inference)

---

## Empirical Telemetry Benchmarks

> **Capture node:** Intel i5-10210U (Windows, AMD64) — 30 measured runs, 5 warmup runs each.

| Component | Metric | avg | p95 | Confidence |
|:---|:---|:---|:---|:---|
| **OMEGA Engine v8** | Tool Retrieval | 11.88ms | 15.5ms | HIGH |
| **Hestia Egress Guard** | PII Sanitization | 8.79ms | 10.6ms | HIGH |
| **Serial Swarm Consensus** | Triad CPU Consensus | 200.06ms | 231.6ms | LOW* |
| **Thermal Governor** | Hardware Poll | 12.99ms | 15.8ms | HIGH |

> \* **LOW confidence on Swarm Consensus** reflects high variance across runs on consumer hardware (std_dev: 31.8ms). This metric is hardware-sensitive; dedicated enterprise nodes show significantly lower variance. The p95 of 231ms is the conservative upper bound.

**All local benchmarks are 100% local — no cloud network calls are included.**
Cloud RTT is measured separately as a comparison baseline only.

Re-run benchmarks yourself:
```bash
# Set repo root (required for OMEGA index path)
export LEXIPRO_ROOT=/path/to/this/repo
python telemetry/run_tests.py
```

---

## Validation Suite (Chaos Engineering)

`validation_layer.py` runs scenario-based integration tests with **intentional chaos injection** (8% random failure rate) to validate error-recovery pathways.

**Expected healthy output: 80–95% success rate.** A 100% success rate under active chaos would indicate the chaos engine itself has failed, not that the system is more reliable.

Scenarios: `DOMEX`, `SECURITY`, `SWARM`, `THERMAL`, `STRESS_API`

```bash
export LEXIPRO_ROOT=/path/to/this/repo
python validation_layer.py
```

---

## Agent DNA Audit

`test_agent_dna.py` validates all 18 Sovereign OS swarm agents for structural completeness, thermal awareness, and SL5 compliance.

```bash
export LEXIPRO_ROOT=/path/to/this/repo
export LEXIPRO_AGENTS=/path/to/agents/dir
python test_agent_dna.py
```

---

## Developer Program Alignment

1. **Intel Liftoff** — Refining `openvino_bridge.py` for Core Ultra NPU inference
2. **Microsoft Founders Hub** — Scaling hybrid WSL/Windows deployment via GitHub Enterprise CI/CD
3. **Cloudflare for Startups** — Transitioning DOMEX loads to Edge-native Vectorize DBs

---

## Directory Structure

```
src/
  components/       # Navbar, Footer, Logo
  pages/            # Home, Technology, Compliance, DOMEX, Security
  hooks/            # Hardware-aware React state
telemetry/
  run_tests.py      # Benchmark execution script
  telemetry_output.json  # Verified metrics artifact
validation_layer.py       # Chaos-engineered integration tests
test_agent_dna.py         # Agent DNA integrity audit
WHITEPAPER.md             # Full technical architecture paper
```

---

## Contact & Access

Full SL5 source access, integration blueprints, and API funding inquiries by request only.

**Contact:** [admin@lexipro.online](mailto:admin@lexipro.online)  
**Entity:** Broken Arrow Entertainment LLC
