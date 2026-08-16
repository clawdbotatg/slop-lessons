# INGEST.md — runbook for ingesting a new episode into the learnings

This is the judgment half of the pipeline. The deterministic half is
`fetch_episode.py`; a claude session (you) runs this half. Trigger: Austin says
"ingest <slug>" / "new episode" — or `status.py` shows gaps.

## 0. Fetch

```
python3 pipeline/status.py --live          # what's new / what's missing
python3 pipeline/fetch_episode.py <slug>   # transcript + videoStartMs + vt cache
```

After this, `pipeline/.vt/<slug>.txt` has the video-time transcript:
`[<sec>s <mm:ss>] <who>: <text>` — `<sec>` is the exact `?t=` deep-link second.

## 1. Distill the note

Read the vt transcript and write `notes/<slug>.md` in the same format as the
other 41 (look at 2–3 for the shape): core thesis, key insights, lessons,
VERBATIM quotes (with their `[Ns]` timestamps — the vt file gives you these for
free), contrarian takes, stage-worthy stories, tools mentioned.

## 2. Classify every insight against the ledger

Load `data/themes.json`. For each substantive insight/quote from the episode,
decide:

- **Reinforces an existing theme** → append a moment to that theme's `moments`:
  `{"ep","t","who","quote","added":"<YYYY-MM-DD>"}`. Quote VERBATIM (light trim
  ok), `t` = the second the line starts. Only add the *punchy* ones — the ledger
  is ammunition, not an archive; ~2–5 additions per theme per episode max.
- **Contradicts a theme** → if the theme is already `contested`, add the moment
  and put the speaker's episode under the right side in `sides`. If it was
  `core`, this is news: add the moment, add a `sides` map, flip
  `contested: true` — and TELL AUSTIN in your report (a core claim cracking is
  the most interesting output this pipeline has).
- **Fits nothing** → new candidate: add a theme with `key`, `kind`
  (psychosis|craft|prognosis|debate), `title`, `claim` (one line, includes why
  it's plausible), `moments`, `status: "candidate"`. One good mention is enough
  to open a candidate; the threshold gates *promotion*, not *tracking*.

Recompute per touched theme: `distinctEpisodes` = distinct `ep` values.
Status rule (verify_ledger.py enforces it): `contested` if contested, else
`core` if distinctEpisodes >= thresholdDistinctEpisodes or pinned, else
`candidate`.

## 3. Verify — nothing enters the ledger unverified

```
python3 pipeline/verify_ledger.py
```

Must exit 0. It re-checks every moment's quote against the transcript at its
timestamp and recomputes counts/statuses. A FAIL means your quote or `t` is
wrong — fix it from the vt transcript, don't loosen it.

## 4. Promotions & the talk

If verify reports a candidate crossing the threshold (or you flipped one):
**do not silently edit the deck.** Report it to Austin as a proposal:

> `<key>` hit N distinct episodes: "<claim>" — propose adding scene/window X
> with these moments; propose glossary entry Y.

He curates the talk; the pipeline feeds it. (Small stuff — adding a fresher
moment to an existing scene's window — is fine to just do.)

## 5. Glossary sync

Selection rule (from the 2026-08-16 full-corpus rebuild — see
`data/glossary-proposal.md` for the audit that produced it):
- **Coinage** — coined ON the show, or an ordinary word the show gave a specific
  meaning → always in. Credit the coiner in parens, anchor the best use (ep@t).
- **Jargon** — outside term that RECURS across episodes or is load-bearing for
  the talk → in, one tight line, anchored to the show's best treatment.
- **One-off tech trivia** → don't add new entries of this kind.
- **NEVER REMOVE an existing entry.** Much of the glossary is Austin's own live
  show glossary (he adds terms on air); zero transcript hits does not mean he
  didn't put it there. Only Austin prunes. Adds-only, always.

Add qualifying terms to `GLOSSARY` in `site/data.js`. Optionally push upstream
to the live relay glossary (tokened API — see
https://live.slop.computer/v1/skill/glossary) if Austin wants it shared.

## 6. Ship

Update the episode counts where they appear (`site/` copy says "41 episodes" in
a few places — grep for the number). Then commit + push (push = deploy). Report
in one line: moments added per theme, candidates opened/promoted, glossary
additions, anything contested.
