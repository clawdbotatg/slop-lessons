# BRIEF.md — runbook for the pre-show question brief

Goal: before a new guest comes on, cross what we *already know* (the theme
ledger) with who *they* are, and produce questions that make the episode feed
the learnings on purpose. Output: `briefs/<slug-or-name>.md`.

Trigger: Austin says "brief for <guest>" / "who should I ask what" — ideally a
day or two before the show.

## 1. Research the guest

- Their handle(s), what they're building, background (search the web; check
  whether they've appeared in past episodes — grep `data/episodes.json`
  participants and `notes/`).
- What could they *uniquely* testify about? (a designer can test taste-moat, a
  loops-in-prod operator can rule on loop-vs-leash, a payments founder on
  agent-payments...)

## 2. Read the ledger's pressure points

```
python3 pipeline/status.py
```

Three lists matter, in priority order:
1. **CONTESTED** — themes needing a verdict. If this guest sits on (or near)
   one of these fault lines, that's question #1. Quote the existing sides at
   them ("port calls loops a $20-a-shot minigun; nader says loops get eaten by
   harnesses — you run them in prod, who's right?").
2. **CANDIDATES** — one or two distinct episodes short of promotion. If the
   guest can independently confirm or kill a candidate, ask *without leading
   them* — the whole value of the threshold is independence. Ask the open
   question ("what's still scarce?"), not "do you agree brand is a moat?".
3. **THINNEST CORE** — claims we assert on stage with the least evidence.
   Strengthen or stress-test them.

## 3. Write the brief — `briefs/<slug>.md`

Format (keep it one screen; Austin reads it minutes before going live):

```
# <guest> — <date>
WHO: two lines. what they build, why they're here.
UNIQUELY QUALIFIED TO TEST: <theme keys>

ASK (in order):
1. <question> — feeds <theme-key> (<why: contested verdict / candidate
   confirmation / thin evidence>)
2. ...5-8 questions max, phrased the way Austin talks, open not leading.

LANDMINES: anything they'd hate / already answered publicly (skip re-asks).
CALLBACKS: 1-2 ledger quotes worth reading to them on air for a reaction.
```

## 3.5 Push it into the live research app

The live desktop's guest-research AI (live.slop.computer) grounds its dossier
and interview questions in the room's **research corpus**. Feed it the ledger:

```
python3 pipeline/push_brief.py <slug>            # dry run — review the docs
SLOP_LIVE_TOKEN=<room agent token> python3 pipeline/push_brief.py <slug> --push
```

This posts two corpus docs — "what the show already knows" (contested debates,
candidates, thin evidence, auto-built from themes.json) and the brief itself —
so when Austin hits research in the room, the AI's questions are aimed by the
ledger. Token: the per-room agent bearer token the live desktop hands out
(7-day expiry; Austin can grab it from the room).

## 4. After the show

The episode gets ingested normally (INGEST.md). When classifying, check the
brief: did the answers move what it targeted? Note hit/miss at the bottom of
the brief file — over time this tunes what kinds of questions actually move
the ledger.
