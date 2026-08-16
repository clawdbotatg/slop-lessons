# slop-lessons

Everything interesting from all 42 [slop.computer](https://slop.computer) episodes,
distilled into **a talk that is also a website** — live at
[slop-lessons.vercel.app](https://slop-lessons.vercel.app). Quotes deep-link into
episodes at the second they were said (`slop.computer/<slug>?t=`).

## The site (`site/`, deploys to Vercel as-is)

- **`t1-desktop.html`** — the presentation: draggable-window slop desktop, arrow
  keys advance scenes. Default deck is **`deck-slop.js`**, the merged talk
  (diagnosis: five psychoses → treatment: craft → prognosis: trust), with 90
  transcript-verified timestamp links and a handful of video clips. The three
  single-throughline decks (psychosis / trust / sloperator) remain playable via
  `?deck=<name>`.
- **`glossary.html`** — the slop dictionary. **`outro.html`** — QR + contact, the
  closing slide when presenting.
- `engine.js` (windows, clips, moments, glossary, ask-clawd) + `data.js` (clips
  with timestamps, glossary) + deck files = deck-as-data; new deck = one file.

## The research layer

- **`notes/`** — one file per episode: thesis, insights, lessons, verbatim quotes.
- **`data/transcripts/`** — raw JSONL live transcripts; `data/episodes.json` —
  index snapshot; `data/clips.json` — 760 auto-cut clips; `data/digest.md` — the
  synthesis; **`TALK.md`** — the original trust-throughline writeup.
- **`data/video-offsets.json`** — per-episode recording-start epoch: maps
  transcript timestamps to video seconds for the `?t=` deep links.

## The learnings pipeline (`pipeline/`) — keeps it alive

- **`data/themes.json`** — the theme ledger: every claim the talk makes, with
  verified moments, distinct-episode counts, and a status (`core` /
  `candidate` / `contested`). A candidate is promoted when **3 independent
  episodes** hit it — the mechanic that discovered "nov 25", made systematic.
- Per new episode: `status.py --live` → `fetch_episode.py <slug>` → the
  **`INGEST.md`** runbook (distill, classify against the ledger, glossary sync)
  → `verify_ledger.py` must pass. Promotions are proposals, not silent edits.
- Before a show: the **`BRIEF.md`** runbook → `briefs/<guest>.md` — questions
  aimed at contested verdicts and thin evidence, so episodes feed the learnings
  on purpose.

## ask-clawd (`agent/`, dormant)

Q&A widget backend on the claude-p pattern (subscription, not metered API).
`./agent/run-local.sh` when presenting; the widget finds localhost first.
