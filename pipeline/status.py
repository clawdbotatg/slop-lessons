"""Pipeline dashboard: what's un-ingested, and where the ledger stands.

    python3 status.py            # uses the committed episodes.json snapshot
    python3 status.py --live     # refreshes from slop.computer first

Prints, in order:
  - episodes missing any pipeline artifact (transcript / offset / note / ledger coverage)
  - candidate themes and how far each is from the promotion threshold
  - contested themes and their side tallies (brief fodder)
  - themes with the thinnest evidence (what the next pre-show brief should press on)
"""
import json, sys
from common import DATA, EPISODES_URL, fetch_json, load_offsets

live = "--live" in sys.argv
idx = fetch_json(EPISODES_URL) if live else json.load(open(DATA / "episodes.json"))
eps = [e["slug"] for e in idx["episodes"]]
off = load_offsets()
ledger = json.load(open(DATA / "themes.json"))
covered = {m["ep"] for t in ledger["themes"] for m in t["moments"]}

print(f"episodes in index: {len(eps)}   ledger themes: {len(ledger['themes'])}   "
      f"moments: {sum(len(t['moments']) for t in ledger['themes'])}")

missing = []
for s in eps:
    gaps = []
    if not (DATA / "transcripts" / f"{s}.jsonl").exists():
        gaps.append("transcript")
    if s not in off or off[s].get("videoStartMs") is None:
        gaps.append("offset")
    if not (DATA.parent / "notes" / f"{s}.md").exists():
        gaps.append("note")
    if s not in covered:
        gaps.append("no-ledger-moments")
    if gaps:
        missing.append((s, gaps))
if missing:
    print("\nUN-INGESTED / GAPS:")
    for s, gaps in missing:
        print(f"  {s:<20} missing: {', '.join(gaps)}")
        if "transcript" in gaps or "offset" in gaps:
            print(f"    -> python3 pipeline/fetch_episode.py {s}   then follow pipeline/INGEST.md")
else:
    print("\nall episodes fetched; none awaiting ingest.")

thr = ledger["thresholdDistinctEpisodes"]
cands = [t for t in ledger["themes"] if t["status"] == "candidate"]
if cands:
    print(f"\nCANDIDATES (promote at {thr} distinct episodes):")
    for t in sorted(cands, key=lambda t: -t["distinctEpisodes"]):
        print(f"  {t['key']:<24} {t['distinctEpisodes']}/{thr}  — {t['claim'][:80]}")

cont = [t for t in ledger["themes"] if t["status"] == "contested"]
if cont:
    print("\nCONTESTED (get verdicts on air):")
    for t in cont:
        sides = "  vs  ".join(f"{k}: {len(v)}" for k, v in (t.get("sides") or {}).items())
        print(f"  {t['key']:<24} {sides}")

thin = sorted((t for t in ledger["themes"] if t["status"] == "core"),
              key=lambda t: t["distinctEpisodes"])[:5]
print("\nTHINNEST CORE THEMES (press these in the next brief):")
for t in thin:
    print(f"  {t['key']:<24} eps={t['distinctEpisodes']}  moments={len(t['moments'])}")
