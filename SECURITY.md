# Security Policy — LexiPro Sovereign OS

## Supported Versions

| Version | Supported |
|:---|:---|
| Latest (4.2.0-SVRN) | ✅ Active support |
| Prior major versions | ❌ End of life |

---

## SL5 Air-Gap Compliance

The Sovereign OS kernel operates under SL5 (Sovereignty Level 5) compliance. The key guarantees:

**No Unauthorized Egress**  
All internal workflows (OMEGA Engine, Serial Swarm, Thermal Governor) produce zero outbound network traffic. The Hestia Egress Guard enforces this at the kernel level — no agent can make an outbound call without passing through the sanitization pipeline.

**Mandatory PII Sanitization**  
Any workflow that may produce an outbound request (e.g., querying a public legal database) is intercepted by the Hestia Egress Guard. SSNs, API keys, passwords, and other credential patterns are stripped before transmission. p95 overhead: 10.6ms.

**Cryptographic Chain of Custody**  
Every AI-generated output is accompanied by a tamper-evident cryptographic receipt: input hash, agent consensus state, timestamp, and hardware node ID. These receipts are designed for FRE 902(13) legal admissibility.

**Hardware-Bound Encryption**  
Data at rest uses AES-256-GCM with hardware-bound keys. Metadata is obfuscated to prevent forensic reconstruction by unauthorized entities.

---

## Threat Model

| Threat | Mitigation |
|:---|:---|
| Cloud data exfiltration | Kernel-level egress blocking (Hestia Guard) |
| LLM hallucination in legal context | Serial Swarm Triad Consensus (3-agent agreement required) |
| Agent drift / unauthorized behavior | DNA Integrity Audit (100% agent compliance verified) |
| PII leakage in outbound calls | Regex + semantic PII sanitization pipeline |
| Thermal hardware failure during DOMEX | Hardware Governor — 15.8ms throttle reaction |
| Unauthorized code execution | Zero-trust inter-agent communication via MSE |

---

## Responsible Disclosure

If you discover a potential security vulnerability — including a bypass of the Hestia Egress Guard, an authentication flaw in the MSE, or a vulnerability in the LexiPro frontend — **do not open a public GitHub issue.**

**Report privately to:** [admin@lexipro.online](mailto:admin@lexipro.online)  
**Subject line:** `[SECURITY] <brief description>`

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact assessment
- Your contact information (optional, for coordinated disclosure)

We commit to acknowledging all reports within **48 hours** and providing a remediation timeline within **7 business days** for confirmed vulnerabilities.

We do not currently offer a bug bounty program, but we will publicly credit researchers in release notes unless anonymity is requested.

---

## Out of Scope

The following are not considered security vulnerabilities for disclosure purposes:
- Theoretical attacks without a working proof of concept
- Social engineering of Broken Arrow Entertainment LLC personnel
- Denial of service attacks against lexipro.online
- Reports from automated scanners without manual validation

---

*Broken Arrow Entertainment LLC — Sovereign Intelligence Systems Group*
