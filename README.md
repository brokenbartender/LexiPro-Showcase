# 🔱 Sovereign OS & LexiPro Architecture Showcase

![License](https://img.shields.io/badge/License-Proprietary-red.svg)
![Status](https://img.shields.io/badge/Status-SL5_Air_Gapped-green.svg)
![Architecture](https://img.shields.io/badge/Architecture-Hardware_Aware_Agentic-blue.svg)

> **NOTICE:** This repository serves as the public architectural showcase and verifiable telemetry artifact for the LexiPro Sovereign OS. The core proprietary intelligence engine (GEMOP), LLM routing logic, and SL5 cryptographic egress guards remain strictly air-gapped in private repositories to maintain zero-trust compliance.

## 🚀 Overview

**LexiPro** is a secure, hardware-aware, local-first artificial intelligence runtime designed for high-stakes DOMEX (Document and Media Exploitation) and recursive liability auditing. Built upon the **Sovereign OS** kernel, it provides cryptographic guarantees that sensitive data processing remains fully isolated from unauthorized cloud networks.

This repository publicly exposes our **frontend client architecture** (React/Vite) and our **empirical telemetry benchmarks**, proving our capacity to orchestrate massive multi-agent swarms with strict hardware constraints.

### 🌐 Live Production Node
The verifiable, static frontend of the OS can be audited at: **[LexiPro.Online](https://lexipro.online)**

---

## 🏗️ Core Architecture & Tech Stack

Sovereign OS does not rely on simple monolithic LLM calls. It utilizes a proprietary **Serial Swarm** architecture—a deterministic orchestration engine designed to enforce multi-agent consensus before any mutation or data storage occurs.

### Compute & Intelligence Layer
- **Local Fallback:** Intel OpenVINO (Core i5 / UHD Graphics native acceleration)
- **Cloud/Scale Intelligence:** Anthropic Vertex AI, Groq LPU, DeepSeek V3, Mistral
- **Hardware-Aware Governance:** Dynamic inference routing based on thermal telemetry and SL5 data classification.

### Data & Orchestration
- **Vector Ingestion:** Qdrant, Pinecone (Edge-native RAG)
- **The OMEGA Engine:** Proprietary 3-layer ensemble retrieval system indexing 2,300+ tools.
- **Mission State Engine (MSE):** Cross-agent synchronization via a zero-knowledge file bus.

### Frontend Client (Included in this Repo)
- **Stack:** React 19, Vite, Tailwind CSS V4, Motion.
- **Routing:** Deep-linkable architecture via eact-router-dom.
- **Optimization:** Off-threaded, GPU-accelerated CSS for minimal main-thread blocking, preserving CPU cycles for local model inference.

---

## 📊 Empirical Telemetry Benchmarks

To maintain transparency without sacrificing the integrity of the air-gap, we run isolated, rigorous benchmarks against the Sovereign OS core. The scripts and raw JSON outputs are available in the /telemetry directory of this repository.

### 🏆 Benchmark Highlights (Captured Node: Intel i5-10210U)

| System Component | Metric | Result | Description |
| :--- | :--- | :--- | :--- |
| **OMEGA Engine** | Tool Retrieval Latency | **11.88 ms** (p95) | Time to parse and route logic across 2,316 indexed capabilities (verified local ingest). |
| **Hestia Egress Guard** | PII Sanitization | **8.79 ms** (p95) | Overhead latency for the Zero-Trust egress pipeline to intercept SSNs/Keys across a 20k word payload. |
| **Serial Swarm** | Triad Consensus Sync | **200.06 ms** (p95) | Time required to route and lock state across 3 concurrent adversarial agents (actual multi-core hash load). |
| **Thermal Governor** | Throttle Reaction | **12.99 ms** | System reaction time via actual WMI hardware metrics polling to initiate agent throttling. |

> *Telemetry data was verified and recorded automatically via the run_tests.py artifact.*

---

## 🤝 Developer Program Alignment

Sovereign OS is strategically positioned for growth across elite enterprise ecosystems. We are actively optimizing for:
1. **Intel Liftoff:** Refining the openvino_bridge.py for cutting-edge Core Ultra (NPU) inference.
2. **Microsoft Founders Hub:** Scaling the hybrid WSL/Windows deployment layer via GitHub Enterprise CI/CD.
3. **Cloudflare for Startups:** Transitioning massive DOMEX document loads into Edge-native Vectorize DBs.

---

## 📜 Directory Structure
\/
├── src/                  # React Frontend Application (LexiPro.Online)
│   ├── components/       # Reusable layout and UI elements
│   ├── pages/            # Core views (Home, Compliance, DOMEX, Security)
│   └── hooks/            # Hardware-aware React state
├── telemetry/            # Empirical Benchmarks
│   ├── run_tests.py      # The execution script testing the Sovereign OS
│   └── telemetry_output.json # The raw, verified metrics output
├── package.json          # Frontend Dependencies
└── README.md             # Architecture Overview
\

## 🔐 Contact & Access
Full SL5 source access, integration blueprints, and API funding inquiries are available strictly by request.
**Contact:** admin@lexipro.online


