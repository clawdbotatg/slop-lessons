"""Push the ledger's pressure points (and the pre-show brief, if written) into the
live room's research corpus — so live.slop.computer's guest-research AI grounds its
dossier and interview questions in everything the show has already learned.

    python3 pipeline/push_brief.py <slug>            # print the docs (dry run)
    python3 pipeline/push_brief.py <slug> --push     # POST to the live relay

Auth: the corpus API needs a per-room bearer token (the one the live desktop
hands agents; 7-day expiry). Provide via SLOP_LIVE_TOKEN env or --token. The
relay tiles every corpus doc into the research prompt (research-corpus.ts), so
whatever lands here shapes the AI's questions for the guest.
"""
import json, os, sys, urllib.request
from common import DATA, ROOT

BASE = os.environ.get("SLOP_LIVE_BASE", "https://live.slop.computer")
MAX_TEXT = 19_500  # relay caps docs at 20k chars


def pressure_doc():
    L = json.load(open(DATA / "themes.json"))
    thr = L["thresholdDistinctEpisodes"]
    out = ["What the show has already learned (slop-lessons theme ledger) — use this to "
           "aim interview questions at open verdicts and weak evidence, and DON'T re-ask "
           "what's already settled.\n"]
    cont = [t for t in L["themes"] if t["status"] == "contested"]
    if cont:
        out.append("== OPEN DEBATES (get this guest's verdict if qualified) ==")
        for t in cont:
            out.append(f"- {t['title']}: {t['claim']}")
            for side, eps in (t.get("sides") or {}).items():
                out.append(f"    {side}: {', '.join(eps)}")
            for m in t["moments"][:3]:
                out.append(f"    \"{m['quote']}\" — {m['who']} ({m['ep']})")
    cands = [t for t in L["themes"] if t["status"] == "candidate"]
    if cands:
        out.append(f"\n== CANDIDATE THEMES ({thr} independent episodes promote one — ask open "
                   "questions, never leading ones) ==")
        for t in sorted(cands, key=lambda t: -t["distinctEpisodes"]):
            out.append(f"- [{t['distinctEpisodes']}/{thr}] {t['title']}: {t['claim']}")
    core = sorted((t for t in L["themes"] if t["status"] == "core"),
                  key=lambda t: t["distinctEpisodes"])[:5]
    out.append("\n== SETTLED BUT THIN (stress-test or strengthen) ==")
    for t in core:
        out.append(f"- {t['title']} ({t['distinctEpisodes']} eps): {t['claim']}")
    return "\n".join(out)[:MAX_TEXT]


def post(slug, token, name, text):
    req = urllib.request.Request(
        f"{BASE}/v1/research/corpus?slug={slug}",
        data=json.dumps({"name": name, "text": text}).encode(),
        headers={"content-type": "application/json", "authorization": f"Bearer {token}"},
        method="POST")
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    slug = sys.argv[1]
    docs = [("slop-lessons: what the show already knows", pressure_doc())]
    brief = ROOT / "briefs" / f"{slug}.md"
    if brief.exists():
        docs.append((f"pre-show brief: {slug}", brief.read_text()[:MAX_TEXT]))
    if "--push" not in sys.argv:
        for name, text in docs:
            print(f"--- {name} ({len(text)} chars) ---\n{text}\n")
        print("(dry run — add --push with SLOP_LIVE_TOKEN set to send)")
        return
    token = os.environ.get("SLOP_LIVE_TOKEN") or (
        sys.argv[sys.argv.index("--token") + 1] if "--token" in sys.argv else None)
    if not token:
        raise SystemExit("need SLOP_LIVE_TOKEN (per-room agent bearer token) or --token <tok>")
    for name, text in docs:
        r = post(slug, token, name, text)
        print(f"pushed {name!r} -> doc {r.get('doc', {}).get('id')}")


if __name__ == "__main__":
    main()
