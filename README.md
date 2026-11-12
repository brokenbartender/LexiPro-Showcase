# LexiPro

**LexiPro** builds software that states only what the evidence proves, and withholds the rest.

**Live site:** [lexipro.online](https://lexipro.online)

---

## Structure

- **LexiPro (`lexipro.online`):** The umbrella organization and engineering standard (operated by Broken Arrow Entertainment LLC).
- **ShiftEdge (powered by Holdfast):** The featured application under LexiPro — a local-first shift and pay-record ledger for tipped workers, powered by **Holdfast**, LexiPro's evidence and verification engine underneath.
  - **ShiftEdge:** Evaluates logged shifts and pay records against published state wage rules (Michigan reference profile) to calculate true hourly earnings and flag potential tip-credit shortfalls, off-the-clock work, dual-jobs side work, card-fee or walkout deductions, and tip-pool discrepancies. Reports mathematical estimates and citations for human or attorney review — not legal advice.
  - **Holdfast (Proof Engine):** 19 standalone TypeScript verification and evidence modules (`audit-hash`, `evidence-manifest`, `chronology`, `bates`, `recorder`, `replay`, `semantic-diff`, `grounding`, `support-check`, `report-template`, `pdf-engine`, `lexical-search`, `vector-search`, `vector-store`, `media-ingestion`, `web-capture`, `pdfa`, `key-lifecycle`, `demo-tour`) with 620 passing unit tests in the adaptation suite. Produces hash-manifested review bundles for change detection and record integrity.

---

## Verified Local Codebase Inventory (Nov 2026 Audit)

- **Sovereign OS Engine (`gemini-op-clean` / `gio-integration`):**
  - **30** registered MCP servers in `mcp_config.json` (26 local Python server modules in `nexus_mcp/servers/` + 4 external bridges)
  - **213** `@mcp.tool` definitions across `nexus_mcp/servers/*.py` (283 indexed entries in `tool_index.json`)
  - **19** agent personas in `.gemini/agents/`
  - **15** workflow patterns (`A–O`) in `.antigravity/workflows.json`
  - **1,797** collected pytest tests (`1,785` passed / `0` failed on `integration/strengthen-2026-11`; `1,719` passed / `11` failed / `56` skipped on `feat/trinity-apex-convergence`)
  - **Egress posture:** Cloud model routing by default; SL5 egress guard (`sl5_guard.py`) is opt-in (`sl5_mode`)
  - **Cryptographic primitives:** Ed25519 signing, SHA-256 hashing, and HMAC-SHA256 session tokens

---

## Contact

- **Email:** [partnerships@lexipro.online](mailto:partnerships@lexipro.online)
- **Entity:** Broken Arrow Entertainment LLC
