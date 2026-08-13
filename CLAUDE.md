# slop-lessons — orientation

Distill all of slop.computer (Austin's onchain podcast: builders at the AI×crypto
intersection, AI cohost "clawd") into **a talk Austin can give** — delivered as a
**website he clicks through while talking**, styled like slop.computer itself.

## The goal (Austin's words, condensed)

1. ~~Crawl every episode, distill, find a throughline~~ ✅ done (see below).
2. **Build a presentation website** — bring it up, click through, talk over it.
   - _Very_ slop computer: draggable windows, interactive pieces, dark neon desktop.
   - Bonus features he asked for: **clips from the clipper**, **glossary terms**,
     **a Q&A window where the audience asks Claude questions**, **threads you can
     dive down** to learn more.
   - Will be pushed to **Vercel** as a live presentation that is also a living document.
   - Expect to build it **over and over** with different throughlines/narratives
     until one clicks — so the platform is deck-as-data + shared engine, decks are cheap.
3. Workflow he asked for: **show templates first**, he picks, then produce several
   presentations with different throughlines.

## The throughline Austin is working toward: THE PSYCHOSES

He's still thinking these through, in his own words the types are:

1. **Parasocial** — talking to the AI like it's real; it convincing you of things /
   convincing you you're smart.
2. **Headroom / subscription** — keeping the AI running on subscription billing;
   out in the backyard with family and all you can think of is the headroom that
   burns in 6 hours.
3. **Hardware** — buying Mac minis, GPUs, DGX Sparks.
4. **Accomplishment / data** — producing a ton of data or an intricate app and
   thinking you accomplished something.
5. **Overtuning** — overtuning your prompts, env, context, harness, loop.

Framing note (mine, he hasn't blessed it): each psychosis is a *real signal overdone* —
parasocial→trust calibration, headroom→leverage, hardware→sovereignty,
accomplishment→verification, overtuning→context craft. The "cure" slide per psychosis
writes itself from the corpus.

Anchors he flagged: **Nov 25 was the turning point** (guests independently date it);
**"never a worse time to be a junior dev, never a better time to be a solo
entrepreneur"** as opener / early quote / closer.

The corpus has *literal* clips for this: "Prompt psychosis: always one prompt away"
(ludamad), "Accomplishment psychosis" (ludamad), "My AI psychosis is the anxiety of
agents sitting idle" (w1nt3r), "Excel psychosis and AI psychosis" (lex-node),
"AI psychosis went from clinical term to derogatory catch-all" (nnnnicholas), plus the
whole feeding-the-baby-while-agents-wait cluster. Search `data/clips.json` titles.

## What exists (state as of 2026-08-13)

### Research layer (committed, pushed — eef90c8)
- `data/episodes.json` — snapshot of https://slop.computer/episodes.json (41 episodes,
  onchain index joined with IPFS manifests).
- `data/transcripts/<slug>.jsonl` — raw STT transcripts (from each episode's IPFS
  manifest). `.txt` = cleaned speaker-labeled versions (events with `kind:null` only,
  consecutive turns merged).
- `notes/<slug>.md` — per-episode distillation (41 files): core thesis, key insights,
  lessons, VERBATIM quotes, contrarian takes, stage-worthy stories, tools.
- `data/digest.md` — all 41 notes condensed into one synthesis doc.
- `data/clips.json` — **760 clips** across 41 eps (34 eps have them, 7 `null`):
  rank, title, startSec, duration, speakers, `video`/`poster` = bare IPFS CIDs →
  `https://media.slop.computer/ipfs/<cid>`. Vertical 1080×1920 mp4s.
- `data/glossary.json` — the live relay glossary (currently **empty**, 0 terms;
  we ship our own terms in `site/data.js` and could push them up later via the
  tokened glossary API — see https://live.slop.computer/v1/skill/glossary).
- `data/site-LESSONS.md`, `data/site-ALL-LESSONS.md` — the site's own earlier lessons
  docs (cover only first 21 eps; reference input, superseded by ours).
- `TALK.md` — first full synthesis: throughline **"Code stopped being scarce. Trust
  didn't."**, 5-act structure, 20 slide-ready one-liners, killer stats, stageable
  debates, 3 alternate throughlines. Still valid as a *different deck* than the
  psychosis one — the platform should eventually carry both.

### Presentation platform (`site/`, in progress — NOT yet committed at time of writing)
- `site/slop.css` — design tokens lifted from the real slop.computer CSS
  (magenta #ff3ec9, purple #7c4dff, cyan #3fcfff, lime #bcff5b, panel glass,
  purple/magenta titlebar gradients, Silkscreen display font, dot-grid + stars +
  scanlines background, window chrome, menubar, dock).
- `site/engine.js` — `window.SLOP`: `paintBg()`, `mkWindow(title, html, {x,y,w,h})`
  (draggable, z-order, close dot), `clipWindow(clip)` (video window off IPFS),
  `bindGlossary(root)` (click `.g` spans → popup window), `qaWindow()` (ask-clawd
  chat; POSTs `/api/ask`, graceful offline stub until the Vercel function exists),
  `closeAll()`.
- `site/data.js` — 19 curated clips keyed for the psychosis deck (junior, november,
  agi45, excel, clinical, idle, busy, baby, mac128, spray, accomplish, uow,
  everyidea, onemore, oneprompt, loops, m13, magic, walk) + 14 glossary terms.
- **Next up (was mid-build when paused):** three template variants sharing the
  engine, each rendering the same ~9-scene psychosis sample deck:
  - `site/t1-desktop.html` — each slide = a scene of windows staged on the desktop;
    menubar + dock dots; arrows/space advance; everything draggable.
  - `site/t2-terminal.html` — one big CRT terminal window; slides type out like
    shell sessions; clips pop over as windows.
  - `site/t3-broadcast.html` — full-screen slop TV; each slide is a channel,
    clip channels autoplay, channel-surf navigation.
  Then: screenshot all three (headless chromium — playwright lives in
  `~/clawd/clawd-harness/tools/node_modules`), show Austin, he picks, THEN build
  full decks (psychosis + trust throughline + more).

### Decks (built 2026-08-13, LIVE — Austin picked t1-desktop as the winner)
`t1-desktop.html?deck=<name>` loads `site/deck-<name>.js` (deck-as-data; index.html
is the chooser). Three full decks, all scenes walked headless with zero errors:
- `deck-psychosis.js` — 11 scenes: title → opener → taxonomy → 5 psychoses →
  "patient zero: clawd" case study → cure map → closer+Q&A.
- `deck-trust.js` — 13 scenes: the TALK.md throughline (collapse → nov 25 →
  what's scarce → taste/verification → trust minimization → agents-as-users →
  honest counterweight → can't-be-evil → the window → collective ownership).
- `deck-sloperator.js` — 11 scenes: ten craft lessons (context, observability,
  loop wars, manage-don't-micromanage, throw away code keep tests, effective→
  efficient, ownership, distribution/taste, arbitrage, touch grass).
`site/data.js` carries 68 curated clips. t2/t3 templates still render the
psychosis deck (kept as alternates; t2 was Austin's #2 pick).

## Vercel plan
**LIVE at https://slop-lessons.vercel.app** (2026-08-13, verified headless: all 3
templates render, clips stream from IPFS, no console errors). `site/` deploys
as-is; the only backend is `/api/ask` (serverless function, currently Anthropic
API + `api/corpus.js`). No ANTHROPIC_API_KEY is set, so ask-clawd shows its
offline stub — intentional, see TODO.

### TODO: route /api/ask through claude-p-agent on SUBSCRIPTION billing
Austin explicitly does NOT want metered API billing for Q&A. Plan: `/api/ask`
forwards the question to a claude-p-agent (see `projects/claude-p-agent` —
`claude -p` on subscription OAuth) running on one of his boxes, e.g. a tiny
authed relay endpoint the Vercel function POSTs to (box needs a public route —
the fleet relay or a tunnel). The corpus/persona moves into that agent's
CLAUDE.md. Vercel then needs only the relay URL + a shared secret env var, no
Anthropic key. ON HOLD until Austin says go.

Multiple decks = multiple deck-data files + a chooser index.

## Gotchas / decisions made
- **gitleaks:** first commit tripped 91 false positives — the 41 bytes32 onchain
  episode ids in `episodes.json` (verified: every 64-hex string in the file is an
  episode id) + BIP39-looking prose runs in transcripts. Fixed with narrowly-scoped
  allowlist entries in `~/.config/gitleaks/gitleaks.toml` (paths for
  `data/transcripts/`, `notes/*.md`, `data/digest.md`, `data/episodes.json`,
  site-lessons files). Private-key rules still scan everything.
- Media (clips, posters) stays on `media.slop.computer` — never vendored into the repo.
- Don't publish this as a claude.ai Artifact — CSP blocks media.slop.computer; it
  needs real hosting (local file:// works, Vercel is the target).
- Repo: `clawdbotatg/slop-lessons` (HTTPS, clawdbotatg identity). Ship-by-default
  applies (~/clawd/ rules).
- Austin's style ask: "very slop computer", "don't use a bunch of slop verbosity" —
  tight copy, the talk track is spoken, slides carry few words.

## Regenerating data
- Episodes: `curl https://slop.computer/episodes.json`
- Transcript: `media.transcript.url` per episode → keep `kind:null` events.
- Clips: each episode's `manifestUrl` → `clips.cid` → bundle JSON on the gateway.
- The whole site is agent-readable: https://slop.computer/skill.md
