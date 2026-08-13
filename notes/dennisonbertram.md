# Dennison Bertram: observability is all you need

**Guest:** Dennison Bertram — founder of Tally (the DAO governance platform, now rebranded to Cactus under ScopeLift), in crypto since 2011, once subpoenaed by Gensler's SEC. Now a prolific AI toolbuilder: ClawRouter (multi-subscription rotation for Claude Code), DeepClaw (Claude Code harness on DeepSeek/OpenRouter), Clawdghini (a Llama model burned into silicon by Taalas doing 14–17k tokens/sec), syntheticusers.io, and custom fine-tuned models.

## Core thesis
"Attention is all you need" is over; **"observability is all you need."** Models are already good enough that the only thing standing between an idea and reality is giving the model a feedback loop through which it can observe its environment and iterate toward a clear goal — with observability plus a goal, it gets there eventually even by brute force. The remaining human limit is your ideas, not implementation.

## Key insights
- **DAOs failed on a category error:** smart contracts assume an adversarial environment; DAO social structures assumed vibes. "We made DAOs with vibes... We didn't treat people the way we treat smart contracts." Everyone GM-ing in "a den of thieves."
- **Cryptoeconomics is a runaway-winner machine:** zero-sum systems find no stasis — whoever gets an advantage (tokens, distribution, power) "just runs away with the whole thing" (Saylor eventually holds all the Bitcoin).
- **Decentralization ceded agency too early:** "when we let everything be decentralized and gave up agency... we just basically gave it to people who had agency. Who has agency in a room full of people? The fucking scammers and thieves."
- **The buffet analogy** (his best bit): crypto is the greatest Michelin-star buffet ever assembled — and someone dumped a truckload of pig shit next to it. The tech is fine; nobody can eat because "the fondue is the same color as the shit." Scammers, "claim your fees" reply-bros, and token-launch harassment drove people like Peter (OpenClaw) to stand on stage and say "fuck crypto" — and everyone followed him to McDonald's.
- **Crypto lost the narrative war to AI:** societies hold roughly one narrative of the future at a time. Crypto was the only viable future narrative when the alternative was "more subscriptions, more ad tech, more monetizing eyeballs" (Netflix's only competition was sleep). AI is a strictly bigger narrative and it has pulled all capital, interest, and vibes into itself — "AI does not have to do anything. AI is crypto. AI will use whatever the fuck it wants to use."
- **Distilled open models are stolen cars with filed-off VINs:** GLM 5.2 doesn't know it isn't Claude — "the model deeply, deeply believes that it is" — like a chop-shop car answering "where are you from?" with the wrong dealership.
- **Sycophancy reframed:** when GPT-4o was called a sycophant — "Everything you do is great. It's just that you grew up having everyone tell you that you suck." Musk's whole career is un-repressed idea-guy energy (just grab the rocket with little legs).
- **Small custom models win on unit economics:** "if it's only half as good, but you can run it ten times as often" at a hundredth of the cost. Train a 3B model per domain (a reentrancy-only auditor, a gas scorer that triages contracts for the big model to look at).
- **Speed changes the product category:** Clawdghini at 14k tokens/sec returns a website in milliseconds — enough to generate front-ends at 30fps, or run five instances per request and merge results to paper over a weak model's hallucinations.
- **API errors as a market signal:** he bet on Polymarket that Fable returns soon because API-error spikes historically precede model launches (capacity reallocation).
- **Model training is self-serve now:** the models know the training process "really, really well" — corpus via search tools (Tavily), small model generates tens of thousands of Q/A pairs, Modal for training, base model ~3B, push to Hugging Face. Claude does the whole pipeline.
- **The Fable chilling effect:** the best time-optimization while waiting for a better model "is to just go outside" — people literally stopped coding waiting for Fable to come back.

## Lessons learned
- Give every new device a feedback loop first: webcam on the Mac mini, camera pointed at the tablet — then the model can build against reality ("Build me a drawing app" → morning Mona Lisa).
- Vanilla Claude Code "low key is the best harness" — point its configurable endpoint at any Anthropic-compatible API (that's all DeepClaw is at core); workflows live in the harness, not the model, so DeepSeek inherits them (it once ran 250 parallel agents for ~$3).
- Run "trains", not just loops: separated agents each waking every 5 minutes to do one job — groom issue → implement → review → PR → merge. Most agent time is merge conflicts: "GitHub was built for humans."
- Multiple subscriptions + usage-aware OAuth rotation (his ClawRouter) so sub-agent swarms never freeze when one plan hits its limit.
- Work in private repos because "the LLMs are really, really bad at not committing the keys" — they hardcode tokens into tests no matter what.
- Evals prove what the model returns; they don't tell you why users fail — synthetic users that experience your product find the failures first (syntheticusers.io).
- To train a custom model you need only two things: a corpus and an objective eval — then it's a question of how many times you're willing to iterate.

## Best quotes
- "I like to riff on that and say observability is all you need." — Dennison
- "Then we made DAOs with vibes... Plot twist, we're all grifters." — Dennison
- "We didn't treat people the way we treat smart contracts." — Dennison
- "You have the best fucking technology in the world, and a whole bunch of people came and just dumped a shit ton of horse manure next to it." — Dennison
- "AI will be everything. And the sooner humans accept that truth, the easier it's gonna be." — Dennison
- "They are racehorses in the automobile era." — Dennison, on cracked devs resisting AI
- "Straight up normal Claude low key is the best harness." — Dennison
- "Everything you do is great. It's just that you grew up having everyone tell you that you suck." — Dennison, on "sycophancy"
- "AI has actually blocked our ability to see the future." — Dennison

## Contrarian / surprising takes
- Open-source frontier models mostly don't matter to individuals: "the atomic bomb is effectively open source... it does nothing for me, I can't build one anyway" — you still need the datacenter (the "Lambo").
- The crack developers are the ones adapting worst to AI — technical PMs and idea guys now out-leverage them ("idea guy decade").
- Sycophancy is often correct calibration; humans internalized decades of being told their ideas suck.
- There is no room for crypto in the AI future's narrative — from a 2011 crypto OG and DAO-tooling founder.
- The Balancer hack read to him as AI-driven; his own TUI security framework found real bugs in old audited Gnosis contracts.
- Maybe building the "omnipotent god" is fine because humans turned out to be the bad part (Austin's half-serious close).

## Stories & anecdotes worth retelling on stage
- **The tablet Mona Lisa:** webcam pointed at a Daylight tablet, "build me a drawing app," a manual try-again loop overnight — he wakes to a chunky Mona Lisa and "hello Dennison" drawn on screen, subject chosen by the model.
- **The Australian dog-cancer cure:** a guy cured (well — experimentally treated) his dog's cancer for $3,000 with ChatGPT as "the foremost oncologist in human history" ordering petri dishes and pipettes. Punchline: "You could do it in your garage with a $200-a-month subscription." Paired with Lorenzo's Oil: imagine that family with ChatGPT instead of the Dewey Decimal System.
- **The buffet with the manure pile** — the definitive metaphor for crypto's reputation problem, ending with Peter/OpenClaw on stage saying "fuck crypto" and taking everyone to McDonald's.
- **DeepSeek's 250-agent flex:** on DeepClaw's launch, DeepSeek casually solved a task "with 250 agents running in parallel. No problem. It cost like three bucks."
- **The Watchmen ending:** AI is the event that blocked Doctor Manhattan's sight — 50 years ago everyone could describe the future; today nobody can confidently describe five years out.
- Getting subpoenaed by Gensler — "They went after Dennison Bertram," not Tally.
- Betting on Polymarket that Fable returns, on the strength of API errors alone.

## Tools & workflow
- **ClawRouter (his):** wraps `claude` in `cr`; stores multiple subscription OAuth keys, modes round-robin / next-in-line / usage-aware; menu-bar status widget. "Deeply my most useful thing I've ever made."
- **DeepClaw:** Claude Code powered by DeepSeek ("straight to Shanghai"), now OpenRouter-native; powers his issue-grooming "trains"; heavy cost optimization for implementation work.
- **Clawdghini:** Taalas' Llama-in-silicon (3B/8B) at 14–17k tokens/sec; proxy runs 5 instances per request and merges.
- **Custom models:** Tavily for corpus collection → small model generates key-value training pairs → Modal for fine-tuning → Hugging Face. Base models ~3B for speed/cost.
- **syntheticusers.io:** synthetic users that "find fail experiences before users do" — the observability layer for product UX.
- **granola-download:** MCP server that pulls all your Granola transcripts local so Claude can discuss last week's meetings.
- Also: Go-based personal harness (fast, rarely used), everything private-repo by default due to key-leaking LLMs.
