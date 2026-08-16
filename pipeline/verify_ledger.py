"""Re-verify every moment in the ledger AND the deck against the transcripts.

    python3 verify_ledger.py

For each moment (themes.json + site/deck-slop.js): the quote's wording must appear
within ±45s of its timestamp in the episode's video-time transcript. Also recomputes
each theme's distinctEpisodes/status and flags drift (a theme whose count crossed the
threshold since last write, or a status field that no longer matches the rule).
Exit 1 on any failure — run it before committing a grown ledger.
"""
import json, re, sys
from common import DATA, verify_moment

fail = 0
ledger = json.load(open(DATA / "themes.json"))
thr = ledger["thresholdDistinctEpisodes"]
for t in ledger["themes"]:
    for m in t["moments"]:
        ok, ratio = verify_moment(m)
        if not ok:
            fail += 1
            print(f"FAIL ledger {t['key']} {m['ep']}@{m['t']} ratio={ratio:.2f} {m['quote'][:60]!r}")
    distinct = len({m["ep"] for m in t["moments"]})
    if distinct != t.get("distinctEpisodes"):
        fail += 1
        print(f"DRIFT {t['key']}: distinctEpisodes says {t.get('distinctEpisodes')} but is {distinct}")
    want = ("contested" if t.get("contested")
            else "core" if distinct >= thr or t.get("pinned") else "candidate")
    if t["status"] != want:
        fail += 1
        print(f"DRIFT {t['key']}: status {t['status']!r} but rule says {want!r}"
              + (" — PROMOTE IT (and consider a deck/lessons update)" if want == "core" else ""))

src = (DATA.parent / "site" / "deck-slop.js").read_text()
deck = [json.loads("{" + s + "}") for s in re.findall(r'\{\s*("ep":.*?)\}', src, re.S)]
for m in deck:
    ok, ratio = verify_moment(m)
    if not ok:
        fail += 1
        print(f"FAIL deck {m['ep']}@{m['t']} ratio={ratio:.2f} {m['quote'][:60]!r}")

total = sum(len(t["moments"]) for t in ledger["themes"]) + len(deck)
print(f"checked {total} moments ({len(deck)} deck) — {fail} problems")
sys.exit(1 if fail else 0)
