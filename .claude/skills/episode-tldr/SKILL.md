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

**First, refresh the episode list** — the local snapshot goes stale:
`curl -s https://slop.computer/episodes.json > data/episodes.json`. "Most
recent" means newest `datetime` in the live list, never the local file.

- `data/transcripts/<slug>.txt` — cleaned, speaker-labeled transcript. **Read
  the whole thing.** If it's missing, run `python3 pipeline/fetch_episode.py
  <slug>` and read `pipeline/.vt/<slug>.txt` (has `[sec mm:ss]` prefixes; every
  line appears twice from streaming STT, dedupe before reading). Speaker labels
  vary per episode (`austingriffith.eth` or `slop.atg.eth` = Austin,
  `clawdbotatg.eth` = clawd, a hex prefix = the guest). Identify by content.
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

**One tweet. Hard limit 280 characters** (a URL counts as 23). Count it
before you show it: `python3 -c "import re,sys;s=sys.stdin.read().rstrip();print(len(re.sub(r'https?://\\S+','x'*23,s)))" < tweet.txt`.
Over 280 → cut words, then cut a bullet. Never a thread, never long-post.
Shape:

```
<one-line hook: the sharpest thing said, ideally a near-verbatim quote>

<@guest>, <project>, <3-word context>:

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

- **Plain English. As few words as possible. No slop.** Cut every word that
  can go. One short clause per bullet, two at most. If a bullet needs a
  comma-chain of context, it's two bullets or none.
- Austin's voice. Blunt, builder-to-builder. Lowercase is fine.
- Every bullet fits on one line on a phone. No hashtags, no emoji beyond
  the bullet dot, no "🧵", no "here's what I learned".
- Bad: "skip the harness maxing. 5% more intelligence from perfect MD files
  isn't worth it, the next model eats it anyway. vanilla frontier subs, build
  product". Good: "don't tune the harness. the next model eats it. build product".
- Verbatim beats paraphrase. If the guest said it well, quote it.
- Name the guest by handle. Don't oversell the episode; let the lessons sell it.
- Never invent. If the transcript is thin, say so and give fewer bullets.

## Reference example (Austin: "this is perfect")

blainemalone, 2026-09-10, 268 chars:

```
"more tokens won't find you PMF"

@blainemalone, cloaked, 2 devs, no VC:

• don't tune the harness. the next model eats it
• error rates compound. let it rip slower
• wrong answers keep you at the keyboard
• PMF first. raise later, maybe never

https://slop.computer/blainemalone
```

Match this. Four bullets, each one short clause, maybe two. Hook is a
verbatim quote. Guest line is handle, project, three-word context.
