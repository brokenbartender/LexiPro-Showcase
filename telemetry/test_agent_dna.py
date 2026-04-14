import os
import re
import yaml
import json
import sys
from pathlib import Path
from collections import defaultdict
from typing import Dict, List, Set, Any


# -------------------------
# CONFIG
# -------------------------
AGENT_DIR = Path(r"C:\Users\codym\gemini-op-clean\.gemini\agents")
WORKFLOW_FILE = AGENT_DIR / "_WORKFLOW.md"

EXPECTED_AGENTS = {
    "master-cortex", "supreme-sovereign", "nexus-sentinel", "triad-investigator",
    "council-critic", "panopticon-director", "hardware-empath", "media-sovereign",
    "legal-agent", "security-master", "ghost-protocol", "manager",
    "sanitization-agent", "dj-bae", "negentropy-swarm",
    "lora-forge", "temporal-archivist", "web-scout"
}

REQUIRED_SECTIONS = ["Mission", "Thermal", "Mandates"]


# -------------------------
# FRONTMATTER PARSER
# -------------------------
FRONTMATTER_REGEX = re.compile(
    r"^---\s*(.*?)\s*---",
    re.DOTALL | re.MULTILINE
)


# -------------------------
# AUDIT ENGINE
# -------------------------
def extract_frontmatter(content: str) -> Dict[str, Any]:
    match = FRONTMATTER_REGEX.search(content)
    if not match:
        raise ValueError("Missing frontmatter")

    return yaml.safe_load(match.group(1)) or {}


def validate_agent_file(path: Path, content: str) -> Dict[str, Any]:
    result = {
        "file": path.name,
        "ok": True,
        "errors": []
    }

    # -------------------------
    # FRONTMATTER CHECK
    # -------------------------
    try:
        data = extract_frontmatter(content)

        if data.get("name") != path.stem:
            result["errors"].append("NAME_MISMATCH")

        desc = data.get("description", "")
        if not any(k in desc for k in ["Dir", "Rank", "Sub-agent"]):
            result["errors"].append("INVALID_DESCRIPTION")

        if not data.get("tools"):
            result["errors"].append("EMPTY_TOOLS")

    except Exception as e:
        result["errors"].append(f"YAML_ERROR:{str(e)}")

    # -------------------------
    # SECTION VALIDATION
    # -------------------------
    lowered = content.lower()
    for section in REQUIRED_SECTIONS:
        if section.lower() not in lowered:
            result["errors"].append(f"MISSING_SECTION:{section}")

    # -------------------------
    # SL5 / SOVEREIGN MARKERS
    # -------------------------
    if "sl5" not in lowered and "sovereign" not in lowered:
        result["errors"].append("MISSING_SOVEREIGN_CONTEXT")

    if result["errors"]:
        result["ok"] = False

    return result


# -------------------------
# MAIN TEST RUNNER
# -------------------------
def test_agent_dna():
    print("\n🔱 SOVEREIGN AGENT DNA INTEGRITY AUDIT v2.0")
    print("=" * 60)

    if not AGENT_DIR.exists():
        print("❌ AGENT DIRECTORY NOT FOUND")
        sys.exit(1)

    agent_files = [
        f for f in AGENT_DIR.glob("*.md")
        if f.name != "_WORKFLOW.md"
    ]

    found_agents = {f.stem for f in agent_files}
    missing_agents = EXPECTED_AGENTS - found_agents

    if missing_agents:
        print(f"❌ Missing Agents: {missing_agents}")
    else:
        print(f"✔ All {len(EXPECTED_AGENTS)} agents present")

    results = []
    error_bucket = defaultdict(int)

    for file in agent_files:
        try:
            content = file.read_text(encoding="utf-8")
        except Exception as e:
            results.append({
                "file": file.name,
                "ok": False,
                "errors": [f"READ_ERROR:{str(e)}"]
            })
            continue

        res = validate_agent_file(file, content)
        results.append(res)

        for err in res["errors"]:
            error_bucket[err] += 1

        status = "✔" if res["ok"] else "✘"
        print(f"{file.name}: {status} ({len(res['errors'])} issues)")

    # -------------------------
    # SUMMARY
    # -------------------------
    total = len(results)
    failed = sum(1 for r in results if not r["ok"])

    print("-" * 60)
    print(f"TOTAL AGENTS: {total}")
    print(f"FAILED: {failed}")
    print(f"PASSED: {total - failed}")

    # -------------------------
    # EXPORT REPORT
    # -------------------------
    report = {
        "summary": {
            "total": total,
            "failed": failed,
            "passed": total - failed
        },
        "missing_agents": list(missing_agents),
        "error_breakdown": dict(error_bucket),
        "results": results
    }

    report_path = AGENT_DIR / "agent_dna_report.json"
    report_path.write_text(json.dumps(report, indent=2), encoding="utf-8")

    # -------------------------
    # FINAL STATUS
    # -------------------------
    if failed == 0 and not missing_agents:
        print("\n🔱 DNA INTEGRITY: 100% CLEAN")
        return True

    print("\n🔱 DNA INTEGRITY: FAILED")
    return False


# -------------------------
# ENTRY
# -------------------------
if __name__ == "__main__":
    success = test_agent_dna()
    sys.exit(0 if success else 1)