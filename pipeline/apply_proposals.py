"""Merge miner/ingest proposal JSONs into the theme ledger, with verification.

    python3 pipeline/apply_proposals.py <proposals1.json> [<proposals2.json> ...]

Each proposals file (the shape INGEST.md and the re-mine prompt ask agents for):
  { "reinforce":    [{theme, ep, t, who, quote}...],
    "debateSides":  [{theme, side, ep, t, who, quote}...],   # optional
    "contradict":   [...same shape as debateSides...],       # optional alias
    "newCandidates":[{key, kind, title, claim, moments:[...]}...] }

Rules enforced here (so agents can't corrupt the ledger):
  - every moment re-verified against the transcript (quote wording within ±45s of t)
  - dedup: skipped if the same theme already has a moment from that ep within 40s
  - unknown theme keys are reported and skipped, never guessed
  - newCandidates with an existing key merge into that theme instead
  - distinctEpisodes/status recomputed; PROMOTIONS are printed loudly — they are
    proposals for Austin, not license to edit the deck
Exits nonzero if anything failed verification, after applying what passed.
"""
import json, sys, datetime
from common import DATA, verify_moment

TODAY = datetime.date.today().isoformat()
DUP_WINDOW = 40


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    L = json.load(open(DATA / "themes.json"))
    themes = {t["key"]: t for t in L["themes"]}
    thr = L["thresholdDistinctEpisodes"]
    before = {t["key"]: t["status"] for t in L["themes"]}
    added, skipped_dup, failed, unknown = [], 0, [], []

    def try_add(key, m, side=None):
        nonlocal skipped_dup
        t = themes.get(key)
        if t is None:
            unknown.append((key, m.get("ep")))
            return
        for ex in t["moments"]:
            if ex["ep"] == m["ep"] and abs(ex["t"] - m["t"]) < DUP_WINDOW:
                skipped_dup += 1
                return
        ok, ratio = verify_moment(m)
        if not ok:
            failed.append((key, m["ep"], m["t"], round(ratio, 2), m["quote"][:60]))
            return
        entry = {"ep": m["ep"], "t": m["t"], "who": m["who"], "quote": m["quote"],
                 "added": TODAY, "verified": round(ratio, 2)}
        t["moments"].append(entry)
        if side is not None:
            sides = t.setdefault("sides", {})
            sides.setdefault(side, [])
            if m["ep"] not in sides[side]:
                sides[side].append(m["ep"])
        added.append((key, m["ep"]))

    for path in sys.argv[1:]:
        P = json.load(open(path))
        for m in P.get("reinforce", []):
            try_add(m["theme"], m)
        for m in P.get("debateSides", []) + P.get("contradict", []):
            try_add(m["theme"], m, side=m.get("side"))
        for nc in P.get("newCandidates", []):
            if nc["key"] in themes:
                for m in nc["moments"]:
                    try_add(nc["key"], m)
            else:
                kept = []
                for m in nc["moments"]:
                    ok, ratio = verify_moment(m)
                    if ok:
                        kept.append({**m, "added": TODAY, "verified": round(ratio, 2)})
                    else:
                        failed.append((nc["key"], m["ep"], m["t"], round(ratio, 2), m["quote"][:60]))
                if kept:
                    th = {"key": nc["key"], "kind": nc.get("kind", "prognosis"),
                          "title": nc["title"], "claim": nc["claim"],
                          "moments": kept, "status": "candidate"}
                    L["themes"].append(th)
                    themes[nc["key"]] = th
                    added.extend((nc["key"], m["ep"]) for m in kept)

    for t in L["themes"]:
        d = len({m["ep"] for m in t["moments"]})
        t["distinctEpisodes"] = d
        t["status"] = ("contested" if t.get("contested")
                       else "core" if d >= thr or t.get("pinned") else "candidate")
    json.dump(L, open(DATA / "themes.json", "w"), indent=1, ensure_ascii=False)

    print(f"added {len(added)} moments; {skipped_dup} dups skipped; "
          f"{len(failed)} failed verify; {len(unknown)} unknown-theme")
    for f in failed:
        print("  FAILED", *f)
    for u in unknown:
        print("  UNKNOWN THEME", *u)
    promos = [k for k, s in before.items()
              if s == "candidate" and themes[k]["status"] == "core"]
    for t in L["themes"]:
        if t["key"] not in before and t["status"] == "candidate":
            print(f"  NEW CANDIDATE: {t['key']} ({t['distinctEpisodes']}/{thr}) — {t['claim'][:80]}")
    for k in promos:
        print(f"  *** PROMOTION: {k} crossed {thr} distinct episodes — propose to Austin ***")
    sys.exit(1 if failed or unknown else 0)


if __name__ == "__main__":
    main()
