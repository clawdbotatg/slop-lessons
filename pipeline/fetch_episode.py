"""Fetch everything needed to ingest one episode (deterministic half of the pipeline).

    python3 fetch_episode.py <slug>          # one episode
    python3 fetch_episode.py --all-missing   # every episode status.py says is missing

Does, idempotently:
  1. refreshes data/episodes.json from the live index
  2. downloads the raw live transcript -> data/transcripts/<slug>.jsonl
  3. resolves videoStartMs (geometry header, else clip-anchor fallback) -> data/video-offsets.json
  4. writes the video-time transcript to pipeline/.vt/<slug>.txt (gitignored cache)

Then the judgment half is INGEST.md — run by a claude session, not this script.
"""
import json, sys, urllib.request
from common import (DATA, EPISODES_URL, fetch_json, geometry_video_start_ms,
                    anchor_video_start_ms, load_offsets, save_offsets, write_vt)


def refresh_index():
    live = fetch_json(EPISODES_URL)
    json.dump(live, open(DATA / "episodes.json", "w"), ensure_ascii=False)
    return live


def fetch_one(ep):
    slug = ep["slug"]
    if not (ep.get("media") or {}).get("transcript"):
        print(f"  {slug}: no media published yet (upcoming/just-recorded) — retry after the "
              f"manifest lands. Meanwhile: pre-show brief? see pipeline/BRIEF.md")
        return
    tpath = DATA / "transcripts" / f"{slug}.jsonl"
    if not tpath.exists():
        url = ep["media"]["transcript"]["url"]
        tpath.write_bytes(urllib.request.urlopen(url, timeout=120).read())
        print(f"  transcript -> {tpath}")
    off = load_offsets()
    if slug not in off or off[slug].get("videoStartMs") is None:
        vs = geometry_video_start_ms(ep["manifestUrl"])
        entry = {"videoStartMs": vs, "startSeconds": None}
        if vs is None:
            # geometry-less episode: anchor known clips against transcript text
            m = fetch_json(ep["manifestUrl"])
            clips_cid = (m.get("clips") or {}).get("cid")
            clips = fetch_json(f"https://media.slop.computer/ipfs/{clips_cid}") if clips_cid else None
            vs = anchor_video_start_ms(slug, clips)
            entry = {"videoStartMs": vs, "startSeconds": None, "derived": "clip-anchor"}
        if vs is None:
            raise SystemExit(f"{slug}: no geometry header and no clip anchors — cannot map timestamps")
        off[slug] = entry
        save_offsets(off)
        print(f"  videoStartMs -> {vs}")
    vt = write_vt(slug, load_offsets()[slug]["videoStartMs"])
    print(f"  video-time transcript -> {vt}")


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    live = refresh_index()
    eps = {e["slug"]: e for e in live["episodes"]}
    if sys.argv[1] == "--all-missing":
        targets = [s for s in eps if not (DATA / "transcripts" / f"{s}.jsonl").exists()
                   or s not in load_offsets()]
    else:
        targets = [sys.argv[1]]
        if targets[0] not in eps:
            raise SystemExit(f"unknown slug {targets[0]!r} — see status.py")
    for s in targets:
        print(s)
        fetch_one(eps[s])
    print("done. next: follow pipeline/INGEST.md for the distill/classify pass.")


if __name__ == "__main__":
    main()
