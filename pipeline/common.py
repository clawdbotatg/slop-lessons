"""Shared plumbing for the learnings pipeline: video-time transcripts + moment verification.

Time model: live-transcript events carry epoch-ms `ts`; data/video-offsets.json maps each
episode to its recording start (`videoStartMs`, from the episode's geometry.jsonl header).
videoSec = (ts - videoStartMs) / 1000 — the number the episode page's ?t= param wants.
"""
import json, re, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
VT_CACHE = Path(__file__).resolve().parent / ".vt"  # gitignored, derivable
GATEWAY = "https://media.slop.computer/ipfs/"
EPISODES_URL = "https://slop.computer/episodes.json"


def load_offsets():
    return json.load(open(DATA / "video-offsets.json"))


def save_offsets(off):
    json.dump(off, open(DATA / "video-offsets.json", "w"), indent=1)


def fetch_json(url, timeout=60):
    return json.load(urllib.request.urlopen(url, timeout=timeout))


def geometry_video_start_ms(manifest_url):
    """videoStartMs from the episode's geometry.jsonl header, or None."""
    m = fetch_json(manifest_url)
    geo = m.get("geometry")
    if not geo:
        return None
    raw = urllib.request.urlopen(GATEWAY + geo["cid"], timeout=60).read(500).decode("utf8", "replace")
    hdr = json.loads(raw.split("\n")[0])
    return hdr.get("videoStartMs")


def anchor_video_start_ms(slug, clips):
    """Fallback for geometry-less episodes: anchor clip startSecs to transcript text.
    offset = ts(matching line) - startSec*1000; median across anchors."""
    segs = list(iter_speech(slug))
    offsets = []
    for c in clips or []:
        words = [w for w in re.findall(r"[a-z']+", c["title"].lower()) if len(w) > 4]
        best = None
        for ts, _who, text in segs:
            score = sum(1 for w in words if w in text.lower())
            if score >= 3 and (best is None or score > best[0]):
                best = (score, ts)
        if best:
            offsets.append(best[1] - c["startSec"] * 1000)
    if not offsets:
        return None
    offsets.sort()
    return int(offsets[len(offsets) // 2])


def iter_speech(slug):
    """Yield (ts_ms, who, text) for each STT speech event (kind:null) in the raw transcript."""
    for line in open(DATA / "transcripts" / f"{slug}.jsonl"):
        line = line.strip()
        if not line:
            continue
        try:
            e = json.loads(line)
        except Exception:
            continue
        if e.get("kind") is not None:
            continue
        who = e.get("handle") or (e.get("address") or "anon")[:10]
        yield e["ts"], who, e.get("text", "")


def vt_path(slug):
    return VT_CACHE / f"{slug}.txt"


def write_vt(slug, video_start_ms):
    """Write the video-time transcript: `[<sec>s <mm:ss>] <who>: <text>` per line."""
    VT_CACHE.mkdir(exist_ok=True)
    out = []
    for ts, who, text in iter_speech(slug):
        t = (ts - video_start_ms) / 1000
        if t < 0:
            continue
        out.append(f"[{int(t)}s {int(t // 60)}:{int(t % 60):02d}] {who}: {text}")
    vt_path(slug).write_text("\n".join(out))
    return vt_path(slug)


def ensure_vt(slug):
    """Video-time transcript for slug, generating from the raw jsonl if missing."""
    p = vt_path(slug)
    if not p.exists():
        off = load_offsets().get(slug, {}).get("videoStartMs")
        if off is None:
            raise SystemExit(f"no videoStartMs for {slug} — run fetch_episode.py {slug} first")
        write_vt(slug, off)
    return p


_norm = lambda s: re.sub(r"[^a-z0-9 ]", "", s.lower())


def verify_moment(m, window_sec=45, min_ratio=0.6, _cache={}):
    """Does the quote's wording actually appear within ±window_sec of t in the episode?
    Fuzzy word-containment: >=min_ratio of the quote's >3-char words must occur nearby.
    Returns (ok, ratio)."""
    slug = m["ep"]
    if slug not in _cache:
        segs = []
        for line in open(ensure_vt(slug)):
            g = re.match(r"\[(\d+)s [^\]]+\] ([^:]+): (.*)", line)
            if g:
                segs.append((int(g.group(1)), g.group(3)))
        _cache[slug] = segs
    window = " ".join(txt for t, txt in _cache[slug] if abs(t - m["t"]) <= window_sec)
    qwords = [w for w in _norm(m["quote"]).split() if len(w) > 3]
    hit = sum(1 for w in qwords if w in _norm(window))
    ratio = hit / max(1, len(qwords))
    return ratio >= min_ratio, ratio
