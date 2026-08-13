# Fricoben — Verity and the Abundance of Formal Verification

**Guest:** Fricoben ("Ben") — French builder working with the Ethereum Foundation (not Aztec, despite Austin's guess). Co-founder (with a compiler-building co-founder) of **Verity**, an AI-first smart contract language built for formal verification (Lean-adjacent proof workflow). His team has formally verified invariants in production protocols including Lido (Lido Vault) and Morpho, plus paid client work. Previously spent ~3 years full-time on StarkNet, building StarkNet ID (launched to hundreds of thousands of users). Self-described "unemployable" entrepreneur of ~7 years.

## Core thesis

Formal verification used to be so expensive it was reserved for the French Metro, militaries, and AWS — because it required armies of PhDs writing proofs by hand. Frontier models (the November 2025 capability jump / Opus 4.5 era) collapsed that cost: proving code correct is now an LLM-in-a-loop problem with a perfect feedback signal (it compiles or it doesn't), so everything that matters will eventually be formally verified.

## Key insights

- **The proof step was the bottleneck, and AI removed it.** Formal verification has three steps: modelize the system, write the rules (specs/invariants), prove the code never violates them. The proof might blow 1,000 lines of code up to 10,000–100,000 lines of proof — economically impossible for humans, trivial for an agent that can retry until it compiles. AI also helps substantially with modelization and spec-writing, not just proofs.
- **Math is the best vibe-coding domain.** Vibe coding in math/proofs is *easier* than in normal software because the feedback loop is binary and machine-checkable — the proof compiles or it doesn't. No screenshots, no taste judgments, no flaky evals. The agent can advance autonomously.
- **Formal verification ≠ testing, ≠ auditing.** Fuzzing tests random combinations; audits find bugs; formal verification *proves the absence* of bugs — across all possible executions — under stated assumptions.
- **"Formally verified" is never absolute.** Every proof rests on explicit assumptions: oracle prices behave, upgrade paths are trusted, private keys aren't leaked, underlying contracts are correct. The real quality question is "how good are your specs and assumptions?" — a formally verified contract can still die to a private-key hack (he lost money to exactly that).
- **The universal agent recipe (his stack in three steps):** (1) get extremely clear on what you want — spend most of your time here; (2) build the agent a way to verify its own work autonomously (a compiler for proofs, screenshot-vs-design comparison for frontends); (3) launch agents and let them run while you're gone. The hardest parts are the feedback loop and knowing what's worth building.
- **The bottleneck moved from intelligence to ownership.** Models are "capable of everything"; what's scarce is a human good enough at reviewing to take responsibility — to say "yes, this is good" and mean "if it bugs, it's our fault." That's what audit firms will actually sell.
- **Model routing by budget, not intent.** They run Claude, Codex, GLM, Kimi, Groq, DeepSeek. Trying to triage tasks by intent proved too complicated; in practice they just fall over to the cheap Chinese models when subscription credits run out. Infra cost: ~$1–2K/month, basically all inference management — even their compiler tooling leans on LLMs.
- **Subscriptions over API for open source.** API pricing on open-source work doesn't pencil; B2C subscriptions (and cheap open-weight APIs) do.
- **Formal verification is the one job safety-heavy models don't block** — it proves the absence of bugs rather than hunting for exploits, so it doesn't trip security safeguards the way offensive-security work does.
- **Math PhD doomerism is a commoditization story, not an ideology.** PhDs bet 8+ years on being the smartest in the room; now "an LLM in a loop" does what they did — better, faster, cheaper — and they weren't in it for the commercial applications anyway.
- **Slop is a human failure, not an AI failure.** The model can produce non-slop; the sender just can't tell the difference. Ties back to the ownership thesis.

## Lessons learned

- Before you point an agent at anything, ask: can it verify its own output without you? If not, build that first (compiler, spec checker, screenshot differ). That's the highest-leverage engineering work left.
- Front-load the thinking: most of the human effort should go into deciding what to build and what "correct" means (the specs), not into implementation.
- When formally verifying, enumerate your assumptions explicitly (oracles, upgrade paths, key custody, dependency contracts) — the proof is only as strong as they are.
- Their audit pipeline for a real protocol: first a classic agent-swarm audit (understand architecture, find edge cases, find bugs), *then* formal verification on top to prove no bugs remain under the specs. Agents at every level, humans owning the specs.
- Verity is already Claude-legible: no skill file needed — hand the docs to Claude and it can modelize and write good specs for simple contracts (e.g. a staking contract) today.
- Don't build elaborate model-routing on intent; a simple credits-exhausted fallback to cheap models works and ships.
- "How long does formal verification take?" is the wrong question — the variable is how deep you go and how well you can review/own the result, because the attacker has infinite time and you must be right the first time.

## Best quotes

- "Formally verification is not finding bugs, it's proving the absence of it." — Fricoben
- "Your duty is now only to have ideas and to be in the flow." — Fricoben
- "You can have no technical ability whatsoever, and... because having good product idea is technical ability" — Fricoben
- "Now everyone going on a website called ChatGPT.com can talk to a guy smarter than him." — Fricoben (on why math PhDs are gloomy)
- "To me, if someone send you slop, it's not the fault of the AI, it's the fault of someone." — Fricoben
- "We take ownership on that and if it bugs, it's our fault." — Fricoben (on what audit-as-a-service really sells)
- "He has an infinite amount of time to attack it. You have to get it right on the first try" — Austin (on why smart contracts need proofs)

## Contrarian / surprising takes

- **A year ago a new smart contract language was pointless — now it's necessary.** "Solidity works well, the AI knows well Solidity"; the November 2025 model jump is what made an AI-first, verification-native language worth building at all.
- **Safety tax is real and he opted out:** estimates "probably like 50% of the price you pay is the safeguards" on Anthropic models; his team gets banned "every week" / three wrongful bans in a month (appeal, unbanned 24h later) — so outside formal verification he's not using Anthropic despite thinking it's "still probably the best model."
- **Anti-corporate as pure EV math, not ideology:** for his McKinsey childhood friend, corporate genuinely is the rational path ($250–300K junior comp vs. grinding a $20/month micro-SaaS). Ben opts out because he's had 7 years of entrepreneurship, is "completely unemployable" (lasted 6 months as an employed engineer), and has more fun in the Ethereum ecosystem — but admits that had he known the corporate numbers as a student, "probably I would have" taken the job.
- **Frontier-model capability, dirt cheap:** the recurring framing that superhuman specialists are now "PhDs in a data center for 50 cents an hour."
- **NFTs and StarkNet, from someone who bet 3 years on them:** "NFT actually do not work, and StarkNet actually didn't work as well as intended" — said flatly, no cope; they're now just trying to make StarkNet ID "unstoppable" for remaining domain holders.

## Stories & anecdotes worth retelling on stage

- **The Paris Metro is formally verified.** The driverless line to Orly airport runs formally verified software — but only because the French state "has access to infinite PhDs for basically free." That's the old economics of formal verification: nation-states, militaries, and AWS only. AI just gave everyone that PhD army.
- **Formally verified, hacked anyway:** Ben personally lost money in a hack of a contract that could have been fully formally verified — because it was a *private key* hack. Perfect stage illustration that proofs live inside their assumptions.
- **The birthday McKinsey conversation:** the night before the episode (his birthday), a childhood friend at McKinsey walked him through corporate comp, and Ben's honest reaction was that the friend is making the right call — the cypherpunk path is a preference, not a superiority claim.
- **"The only guys not blocked by Fable":** he tweeted, jokingly, that formal verification is the one security-adjacent job the safety systems wave through — proving absence of bugs doesn't look like attacking. Meanwhile they still eat weekly wrongful bans.
- **Lido Vault proof with its assumptions shown:** they published a formal verification of one invariant of the Lido Vault protocol, explicitly modeling the hypotheses (e.g. liquidators show up, oracle behaves) — a concrete artifact of "formally verified under these assumptions," not a marketing checkmark.
- **Math PhD doomerism:** his recent conversations with math PhDs are gloomy — the people who loved manually proving theorems watching "an LLM in a loop" do it better, faster, cheaper (echoing GPT 5.7 solving previously unsolved math problems the week before the recording).

## Tools & workflow

- **Models:** everything at once — Claude (Opus-era frontier) and Codex, plus Chinese open-weight models (GLM, Kimi, fresh DeepSeek two days after release) and Groq for cheap/fast, low-thinking tasks. Routing is simple: burn subscription credits first, fall back to cheap models when they run out; intent-based triage was tried and abandoned as too complicated.
- **Billing:** B2C subscriptions preferred over API pricing (API too expensive for open-source work); total inference/infra spend around $1–2K/month.
- **Verity itself:** the language plus an LLM-assisted compiler/proof toolchain; the whole company's infrastructure is described as "basically inference management."
- **Audit workflow:** agent swarm to map the protocol and edge-case it → classic bug-finding audit → write specs/assumptions → LLM-driven proof loop until the proof compiles → human takes ownership of the result. "We use agent at all level."
- **General build workflow:** spec hard, build the autonomous verification loop (compiler for math; screenshot-vs-design vision for frontends — they've even done video games this way), then let agents run unattended. Self-improving loops (agents updating their own skills/memory) work for personal use cases but he admits he hasn't fully cracked them yet.
