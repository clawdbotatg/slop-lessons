# Glossary rebuild proposal — 2026-08-16

The old glossary was three ad-hoc layers (hand-picked coinages, auto-generated ML
trivia, per-ingest judgment calls). This proposal comes from a full sweep: 4 agents
read all 42 transcripts hunting (a) show coinages and (b) recurring jargon a talk
audience needs, then every current term was counted against the corpus.

**Selection rule going forward** (also added to pipeline/INGEST.md):
- **Coinage** — coined on the show or given a show-specific meaning → always in,
  credited, with an ep@t anchor of the best use.
- **Jargon** — outside term that recurs or is load-bearing for the talk → in,
  one tight line, ep@t of the show's best treatment.
- One-off tech trivia → out, no matter how cool the definition reads.

---

## KEEP EVERYTHING — no removals

Correction (Austin, 2026-08-16): the "unused" ML terms came from **Austin's own
live-show glossary** (commit a8046fd pulled 36 terms from the relay glossary he
curates on air). Zero transcript hits just means he typed them during a show
rather than saying them aloud. **All 53 existing entries stay. This proposal is
adds-only.** Rule for the pipeline: never remove a glossary entry — only Austin
prunes.

## KEEP + FIX

- **FWA** — re-credit: rhynotic coined it (his ep @2894, "I instantly was like,
  Fake World Assets, that's so funny"), econoar built on it.
- **slop** — sharper definition available: jmann's "normies can't quite see the
  slop — the patterns are not clear enough. you and I take one look." (songadaymann @506)
- **harness** — current tldr is generic; rewrite in show voice: "workflows are not
  baked into the model, workflows are in the harness" (dennison @2449); shaw traces
  the word's evolution GPT-wrapper → framework → harness (shaw @823).
- **ralph loop** — add the missed nuance from fucory: it's not just a loop, it's a
  FRESH context each pass ("we're just automating slash new").
- All other existing coinages verified live on tape: sloperator (port asks "did you
  just coin the term sloperator?" @446), headroom, idea guy summer, nov 25,
  claw-dogging, eye of Sauron, walkaway test, slop curve, back pressure, psychosis,
  skill.md, x402, MCP, TUI (Austin adds it to the glossary on air, fucory @3108).

## ADD — show coinages (~40, the gold)

| term | one-liner | coiner | anchor |
|---|---|---|---|
| word barf | dictate everything in your head at the model, ums and all — step one of every build | fucory | fucory@2822 |
| spray and hope | queue agents on everything; most dies unseen, some hits | 0xsero | 0xsero@1766 |
| software factory | keep the prompts, not the code: build → benchmark → fix prompt → rerun | fucory | fucory@2085 |
| don't look at the code | "I ship too fast to look at the code" — the sloperator's creed, 5+ eps | austin/w1nt3r | tbsocialist@3449 |
| one slash-goal away | any app is one /goal from existing — empowerment and accomplishment-psychosis in one phrase | austin | shawmakesmagic@6021 |
| unit of work | a joule for agents: measure finished work, not tokens burned | quirk (evmpapi) | evmpapi@1240 |
| entity | the layer above agent: AI living in your slack/telegram like another employee | austin | kentherogers@1970 |
| magic trick | automate one painful thing for a paper-business normie, free, watch their face | austin | kentherogers@2780 |
| token maxing | the urge to keep every model chewing tokens at once | sodofi/austin | sodofi@1356 |
| dad maxing | "if I don't have three agents running while feeding my baby, I'm not dad maxing enough" | austin | fucory@2715 |
| effective first, efficient second | make it work on the smartest model, THEN cheapen it | austin | marcus-rein@2573 |
| the age of subsidies | frontier intelligence below cost; subscriptions are the arbitrage | ludamad | ludamad@1397 |
| -p apocalypse | the feared day `claude -p` dies on subscription | omniharmonic | omniharmonic@1388 |
| claude-code maxing | give up on fancy stacks, run plain claude code maxed — where every detour ends | 0xzak | 0xzak@485 |
| iPad kid | what you are when the agent breaks and you can't fix it yourself | billyrennekamp | billyrennekamp@1317 |
| prompt psychosis | always one prompt away — the brain grinding on the better prompt | ludamad | ludamad@3410 |
| caveman prompt | "daddy want Calendly" — grunt intent, get 80% | austin | billyrennekamp@1781 |
| in the weights | famous enough a vanilla model knows you; the new blue check | austin | tbsocialist@3152 |
| run it back | relaunch the too-early project — timing was the only bug | austin | rhynotic@2722 |
| loop trains | agents on rails: wake, take an issue, groom→implement→PR, sleep | dennisonbertram | dennisonbertram@2295 |
| observability is all you need | give the model eyes + a goal; brute force does the rest | dennisonbertram | dennisonbertram@1881 |
| make the AI suffer its own mistakes | wire the loop so the agent hits its own broken code first | dwddao | dwddao@4914 |
| horses, cats, and dogs | agent taxonomy: tool you ride / pretty chat / task-dog in a fenced park | adrianleb | adrianleb@2277 |
| minimum sloppy product | not minimum viable — minimum sloppy; re-shot rather than climb the slop curve | adrianleb | adrianleb@3361 |
| de-sloppify | taste applied at spec time, before the slop compounds | lordofafew | lordofafew@4068 |
| orchestration tax | 100 loops = your whole day managing loops; half-assing many things | must-be-ash | must-be-ash@2167 |
| apps are skills now | stop shipping apps — be a plugin in the chat UI everyone already uses | must-be-ash | must-be-ash@1997 |
| handoff.md | end every session writing the note the next agent picks up mid-thought | must-be-ash | must-be-ash@4083 |
| markdown maxing | notes you'll never read, everywhere, because the AI will | austin | sodofi@1700 |
| go ask claude | the new RTFM | austin | sodofi@1219 |
| "you're absolutely right" | claude's tell — "you're absolutely right, I did just send all your money to the zero address" | claude, quoted by all | 0xrcinus@2001 |
| "I need an adult" | when the vibe-coded prototype gets real traction and needs someone who reads code | austin | marcoworms@1482 |
| the plumber never yells at the pipes | cursing your agent trains the yelling pathway in YOU | austin | unforcedag@2907 |
| playing with clay | software was a house of cards; with agents it's clay — reshape forever | jalil | jalilwahdat@3164 |
| gumball machine | AI output you didn't make: quarter in, bauble out, boredom follows | jmann | songadaymann@2383 |
| metatext | the tell of an AI-made page: the copy is the model talking to itself | jmann | songadaymann@572 |
| mainframe era | today's LLMs are timeshared mainframes; personal local AI is the PC waiting to happen | shaw | shawmakesmagic@3590 |
| trust substrate | what crypto sells to AI: not compute — verification plus un-ruggability | binji | binji-x@2790 |
| decentralization theater | performing decentralization nobody asked for; your mom just wants it to work | shafu0x | shafu0x@2190 |
| crops / sanctuary tech | censorship-resistant, open-source, private, secure — the freedom-tech acronym | EF user-layer / sodofi | sodofi@606 |
| cyborg lawyer | "me plus the AI is a cybernetically augmented result" — owning every word, drafting none | lex-node | lex-node@1048 |
| PhDs for 50 cents an hour | what formal verification costs now | fricoben | fricoben@1957 |
| $1 audit | commission a smart-contract audit for a dollar, live on stream | austin | fricoben@1893 |
| eye-of-Sauron variants | let it rip · self-glaze · smooth brain · context goblin · model sommelier · car wash test — smaller bits, include if the glossary wants the deep cuts | various | see sweep files |

## ADD — recurring jargon (~20)

| term | why | anchor |
|---|---|---|
| vibe coding | with the show's twist: "if someone says vibe coding they're 6-12 months behind — it's just called building now" | 0xrcinus@618 |
| one-shot | the verb of the era | sodofi@1130 |
| formal verification | proving the absence of bugs; was military-budget, now a startup feature | fricoben@2622 |
| prompt injection | a webpage alone once popped the claude extension | pablosabbatella@3532 |
| multisig | the show's answer to every custody question, 6+ eps | pablosabbatella@2242 |
| wrench attack | all the cryptography vs a $5 wrench | pablosabbatella@4182 |
| infostealer | where 98% of stolen crypto starts | pablosabbatella@1155 |
| TEE | the agent can USE the key but never SEE it | cryptomastery@987 |
| passkeys | unphishable login, crypto mechanics for normies | pablosabbatella@2817 |
| canary tokens | bait keys that scream when drained | pablosabbatella@5238 |
| ERC-8004 | onchain identity + reputation for agents, 5 eps | binji-x@2787 |
| agentic commerce | "a fancy word for a simple concept": agents paying per request | shafu0x@589 |
| permanent underclass | the fear Austin asks every guest about, 6+ eps | shawmakesmagic@5308 |
| renting the model | you don't own the call, the data, or the stack | marcus-rein@1443 |
| progressive discovery | feed context as needed — a skill.md of links, not a 2M-token dump | 0xyoussea@1560 |
| agent experience | devrel's new job: docs tuned for the agent reading them | kentherogers@601 |
| ontology | your life as a machine-readable graph agents can query | dcbuilder@1164 |
| trust mitigation | lex-node's honest word for "trustless" | lex-node@2773 |
| PMF | "traction does not equal PMF" — the multi-million-dollar lesson | 13yearoldvc@2246 |
| OpenClaw / Hermes | the two agent frameworks the whole show orbits (7+ eps each) | omniharmonic@1487 / dcbuilder@2830 |
| oracle · keeper bot · lindy · FHE · digital twin · Tailscale · LimeWire era | second tier — include if the glossary wants depth | see sweep files |

Full sweep outputs with every candidate + quote: the four batch JSONs in the
session scratchpad (re-runnable; the method is now in INGEST.md).
