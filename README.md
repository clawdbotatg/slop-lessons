# slop-lessons

Everything interesting from all 41 [slop.computer](https://slop.computer) episodes, distilled
into a talk.

- **[TALK.md](TALK.md)** — the deliverable: throughline ("Code stopped being scarce. Trust
  didn't."), five-act structure, slide-ready lessons, killer stats, stageable debates, and
  alternate spines.
- **notes/** — one file per episode: core thesis, key insights, lessons, verbatim quotes,
  contrarian takes, stage-worthy stories, tools & workflow.
- **data/episodes.json** — the site's aggregate index (onchain episode list + IPFS manifests).
- **data/transcripts/** — raw JSONL transcripts (from each episode's IPFS manifest) plus cleaned
  speaker-labeled `.txt` versions.
- **data/digest.md** — all 41 notes files condensed into one synthesis-ready document.

Regenerate from source: `https://slop.computer/episodes.json` → each episode's
`media.transcript.url` → filter events where `kind` is null → `handle: text` turns.
