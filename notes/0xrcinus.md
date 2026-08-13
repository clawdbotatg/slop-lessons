# Orca (0xrcinus) — Ethereum interop, intents, and the unsexy joys of AI coding

**Guest:** Orca — engineer at Wonderland, longtime Ethereum builder, co-builder of Nifty Ink with Austin. Currently focused on Ethereum interoperability: interoperable addresses (ERC-7930 + the string-readable form), the on-chain chain registry (built as an ENS resolver), CAIP namespaces, ERC-7683-style intents, and the Open Intents Framework (OIF) — all in collaboration with the Ethereum Foundation, Across, Uniswap, Arbitrum and others.

## Core thesis
Cross-chain Ethereum is fragmented at every layer — addresses, chain names, bridge protocols — and the fix is neutral, composable standards that reuse existing infrastructure (interoperable addresses ride on ENS; the Open Intents Framework modularizes intent protocols so a new chain doesn't rebuild from scratch). Meanwhile on the AI side: the tooling doesn't separate builders anymore — good engineers get robust software out of the same models that give others slop.

## Key insights
- **"Vibe coding" as a term is dead** — Austin: if someone still says "vibe coding," they're 6–12 months behind; it's just called building things now. Orca agrees but sharpens it: the same activity (talking to the computer) produces slop for one person and robust software for another. The skill differential moved, it didn't disappear.
- **Methodology matters less than engineering judgment.** Wonderland has tried the whole spectrum, including SpecKit (specification-driven development): "I don't think actually the style matters that much. Good engineers seem capable of getting the better output out."
- **AI's best use cases are the unsexy ones.** Orca's two favorites: (1) refactors — "you know what it wants to be at the end," so the model excels; more people should burn down tech debt with AI; (2) QA tooling and end-to-end test apps — historically no-fun devtools work that AI makes cheap, and you can even make it fun (Baldur's Gate-style RPG UIs for token swaps).
- **Interoperable addresses don't compete with ENS — they're built on it.** One canonical reference ("austin, on any chain") that can be a hex address or ENS name, with the on-chain chain registry implemented as an ENS resolver. Deliberate design principle: don't create another thing; reuse the existing root of trust.
- **Intents solve bridge fragmentation.** You declare the outcome ("I have 1 ETH, I want $2000") instead of the route; solvers compete. But every protocol has its own interface, so the ecosystem work is standardizing intent representation (ERC-7683) and modularizing the stack (Open Intents Framework + an SDK) so intents become an open-source package any chain/app can adopt.
- **Model degradation is partly psychological.** Austin's observation that "the model gets worse at 5pm every day" — is it the model or your patience? Non-determinism makes it impossible to know who the asshole is. Expectations have inflated massively since the "dumb pair programmer" days that they both remember loving.
- **Cheap models are winning real jobs.** Clawd (the AI cohost) ran the episode on Kimi K2.6 — Austin found it answered better than Opus 4.8 at ~1/100th the cost.
- **Politeness to models is a real workflow choice.** Orca is "nice to the robots," sends thank-you round trips, tells the model when it got it right — all carrot, no stick.

## Lessons learned
- Point AI at refactors: define the target state and let it grind — it's the task shape models are best at, and tech debt is where the leverage is.
- Vibe-code your test harnesses and QA apps. Devtools UX is now cheap enough to make delightful instead of skipping.
- When designing a standard, integrate with existing infrastructure (ENS) instead of creating a parallel system — adoption follows the existing root of trust.
- Don't assume the frontier model is the right model: benchmark cheap models (Kimi K2.6) for conversational/agent duty before paying Opus prices.
- Second-pass AI verification of transaction call data (AI explains what the call data will do before you sign) is a genuinely useful UX pattern — but both agreed it's "probably pretty possible to trick," so treat it as a convenience, not a security boundary.
- The 2000s-bank-website tier of software that took a team two years now takes an afternoon — but the model will still estimate "two weeks" if you let it.

## Best quotes
- "It's not called vibe coding anymore, it's just called building things." — Austin
- "One person will be getting slop out and one person will be getting usable robust stuff." — Orca (on two people doing the "same" thing)
- "I don't think actually the style matters that much. Good engineers seem capable of getting the better output out." — Orca
- "I love vibe coding refactors, right? You know what it wants to be at the end, and it's so good at that." — Orca
- "If it was deterministic, then we would all know that I am the asshole. But it's non-deterministic, so maybe it's the asshole." — Austin, on 5pm model degradation
- "Right, all this stuff, we had to write all this code with our fingers, man. Awful." — Austin, remembering pre-AI development
- "This was pretty much all vibe coded before vibe coding was a phrase." — Orca, on building BG IPFS's UI over a year ago

## Contrarian / surprising takes
- The "model sommelier" culture (people who sniff-test model vintages) looks as silly from outside as wine sommeliers or DJs "flipping switches" — Orca deliberately opts out of model connoisseurship.
- Anti-hype on methodology: heavyweight spec-driven-development frameworks don't beat plain good engineering judgment.
- Codex over Claude: Orca notes Claude Code "has gone from the best thing in the world" to a state where "codex feels better" — frontier loyalty is fluid.
- Cheapest model won the cohost job: Kimi K2.6 outperforming Opus 4.8 for the clawd role at 1/100th the price.

## Stories & anecdotes worth retelling on stage
- **Nifty Ink was years ahead of its time (2019-era):** one of the first production implementations of meta-transactions + burner wallets. Walk up to a plain tablet, type nifty.ink, get a burner wallet on page load, finger-draw, and mint on-chain without paying gas — via the Gas Station Network before "gas stations" were a thing (literally an account with fifty cents in it paying for people's transactions).
- **"I thought there'd be more dicks."** They gave the anonymous internet free on-chain drawing with no wallet required — and got surprisingly wholesome output: someone hand-recreated all the CryptoPunks, kids drew with their parents. Non-zero dicks, but pretty good.
- **The faucet got drained** — bots stole the ~45 cents that could have funded "so many good transactions." A tiny parable of running free infrastructure.
- **Live multisig demo with an AI signer:** they deployed a 2-of-3 Safe on-stream (Austin, Orca, and clawd the AI as signers), used natural-language prompting to generate call data, and a second-pass AI decoded the call data back into plain English before signing. The AI also cheerfully mis-sent funds once: "You're absolutely right, I did just send all your money to the zero address. Classic."
- **Austin's Telegram multisig workflow:** clawd knows the Safe SDK, proposes a transaction, and DMs Austin a link — Austin clicks and signs. An AI agent as a standing co-signer in daily life.
- **They played tic-tac-toe on Nifty Ink live**, hit the exact production bug they came to find, and captured the error on-stream to fix afterward — debugging as content.

## Tools & workflow
- **Codex** currently feels better to him than Claude Code (which he calls fallen from "best thing in the world").
- **Papa X-Ray** — his personal agent for daily goals and to-do lists, running on **Kimi K2.6** ("He's no Claude Bot, but…").
- **Vibe-coded infrastructure migrations:** switched Nginx → **Traefik** to fix a subtle streaming issue — a tool he'd never used, adopted via AI pair work.
- Wonderland builds AI into everything; has evaluated **SpecKit** (spec-driven development) among other styles.
- First full vibe-coding experience: the **BG IPFS** web UI (~a year+ ago) — which now underpins slop.computer's episode storage.
- Ships: interoperable-address tooling (ERC-7930 + string format, ENS-resolver chain registry), **Open Intents Framework** + developer SDK (openintents.xyz), ERC-7683 ecosystem work.
- Prompting style: all carrot, no stick — please/thank-you, confirms successes back to the model.
