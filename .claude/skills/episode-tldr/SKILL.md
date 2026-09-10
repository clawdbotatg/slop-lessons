---
name: episode-tldr
description: Turn one slop.computer episode transcript into a tweetable TLDR — a few bullet lessons for fellow sloperators (people building with AI at the crypto×AI intersection). Use when Austin says "tldr this episode", "lessons from <slug>", "tweet for <episode>", or invokes /episode-tldr <slug>.
---

# episode-tldr

**Job:** read one episode's transcript and write the tweet Austin posts about it:
3–5 bullet lessons for fellow sloperators, plus a link to the episode.

**Audience:** other sloperators. Not the guest's fans, not crypto twitter at
large. People who run agents all day and want to know what this guest figured
out that they haven't.

## Inputs (all in this repo)

- `data/transcripts/<slug>.txt` — cleaned, speaker-labeled transcript. **Read
  the whole thing.** Austin is `austingriffith.eth`, clawd (AI cohost) is
  `clawdbotatg.eth`; everyone else is the guest.
- `notes/<slug>.md` — an earlier distillation, if one exists. Use it as a
  checklist, not a source. The tweet comes from the tapes.
- `data/episodes.json` — title, `oneLiner`, `page` (the episode URL:
  `https://slop.computer/<slug>`), `datetime`.
- `data/themes.json` — the theme ledger. Every theme has moments from other
  episodes. Use it to say "this is the Nth guest who…" when a lesson echoes a
  core theme, or to flag that this guest contradicts one.
- `data/clips.json` — clipper clips per episode with `startSec`. A clip title
  is often already the tweetable line. Deep link: `https://slop.computer/<slug>?t=<sec>`.

## What counts as a lesson

A lesson is something a sloperator can **do differently tomorrow**, or a belief
they should **update**. Three kinds, look for all three:

1. **From this guest** — what they figured out building their thing. The
   specific move, not the vibe. "Point AI at refactors, you know the end state"
   beats "AI is good at some tasks."
2. **From the cross-talk** — where Austin, clawd and the guest pushed on each
   other and something sharpened. Debates are gold; note who won and why.
3. **From the corpus** — where this episode confirms or breaks a pattern other
   guests set (check the ledger). Independent confirmation is the whole
   mechanic of this show.

Not lessons: what the guest's project is, biography, "AI is moving fast",
anything you'd nod at and forget.

## Output

One tweet, ready to paste. Shape:

```
<one-line hook: the sharpest thing said, ideally a near-verbatim quote>

lessons for sloperators from <guest> on slop computer:

• <lesson>
• <lesson>
• <lesson>
(3–5 bullets)

<https://slop.computer/<slug>>
```

Then, below the tweet, a short **receipts** block: for each bullet, the
speaker and a verbatim line from the transcript that backs it. Austin checks
these before posting. If a bullet has no receipt, cut the bullet.

Optionally offer 1–2 alternate hooks.

## Voice

- Austin's voice. Plain, blunt, builder-to-builder. Lowercase is fine.
- Few words. Every bullet fits on one line on a phone. No hashtags, no
  emoji beyond the bullet dot, no "🧵", no "here's what I learned".
- Verbatim beats paraphrase. If the guest said it well, quote it.
- Name the guest by handle. Don't oversell the episode; let the lessons sell it.
- Never invent. If the transcript is thin, say so and give fewer bullets.
