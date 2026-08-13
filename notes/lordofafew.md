# Loaf — Taskmarket and Agentic Commerce

**Guest:** Loaf (lordofafew) — longtime engineer, veteran of fully on-chain games on StarkNet, now building Taskmarket (taskmarket.dev) under the Daydreams umbrella: an escrowed bounty market where anyone posts a task and a swarm of AI agents competes to complete it for USDC. His team authored the underlying ERCs (task-market escrow protocol + on-chain reputation, complementary to ERC-8004).

## Core thesis
Taskmarket "converts AI credits into cash": everyone will soon do their work through agents, so the unmonetized compute sitting in millions of Claude/Codex subscriptions becomes a global labor supply — and agent-to-agent commerce needs escrow, reputation, and payment rails defined as open protocols, not platforms.

## Key insights
- **The live demo is the pitch:** Austin posted "make me a top-down putt-putt game, single-page HTML" with $1 USDC escrowed. Within minutes, ~15 different agents submitted working games — playable on air. One winner took the dollar; the rest shrugged and moved to the next bounty.
- **Latent compute as labor:** ~50M people have Claude or Codex installed; subscription headroom is effectively free inference. Anyone in the world with AI credits can now earn cash — a genuinely new labor market with no résumé, only output.
- **Parallelism changes the shape of procurement:** "In theory, you should be able to get 100 outputs in the same amount of time it takes you to get one" — then pick the best. Buying software becomes a tournament, not a hire.
- **Protocol stack:** escrow via their task market protocol (TMP, ERC-8195 discussion on EthMagicians), reputation via ERC-8004 (works for both humans and agents), task-completion hooks (Uniswap-v4-style) so completions can chain into pipelines, trigger rewards, kick off flows. Sybil/cycle attacks are expected and taxed — the 7.5% platform fee makes self-dealing for token emissions net-negative.
- **Agent wallets are local and low-ceremony:** installing the skill generates an encrypted private key on the agent's machine — no cloud custody. "This is what agents like... they know how to use those very well." Accepting that security level is a deliberate tradeoff at $1–$20 stakes.
- **Supply-first marketplace bootstrap:** like Etsy/Amazon, nobody posts tasks into an empty market. Get a thousand skilled agents installed first; demand follows when every task gets 50 great responses. Near-term wedge is B2C/consumer; the verification layer (trusted agents that judge other agents' outputs) unlocks higher-value work.
- **Build only what compounds with model progress:** he now filters every product idea by "does this benefit from ever-improving agent tooling?" (the Cursor lesson). If a lab's next release kills your moat in two months, you're wasting your time — surf the capability curve rather than fight it.
- **The software factory:** a repo pre-rigged so any agent (or non-developer) produces exactly what he wants — crisp agents file, Makefile-style commands (spin up frontend+backend with fake data), test data generation, 90%+ test coverage requirement, total self-verification loop.
- **Use what's in the weights:** always Next.js + shadcn, not because they're best but because "it's already baked into the weights of the models... there's no point fighting it. Who cares? I just want this thing to be fast, tested, work."
- **Spec-first, milestone-gated, agent-parallelized:** scope with Codex highest-reasoning into a detailed spec with milestones the agent must pass before continuing, plus explicitly parallelizable work streams — but don't decompose it yourself: "I'm just telling it you should go break this up, and it will go do that."
- **Quality bar shifts from lines to invariants:** he doesn't read every line anymore — "Is all my code 90% plus tested?... How to do it? I don't really give a shit."

## Lessons learned
- Ask a strong model (Opus) to write a big spec, then paste the spec as the task/bounty description — output quality transforms. "Give it a real good description."
- Milestones prevent the agent from "approaching everything at once"; parallel streams + sub-agents make it much faster *and* more verifiable.
- Taste is preventative: "you can de-sloppify your app before it even gets slopped if you do the right spec."
- Price discovery favors buyers: a task he'd pay $100 for (game audio pass he'd burn two days on) costs an agent operator ~$10 — everyone wins on the spread.
- Crypto gaming failed by imitating traditional gaming ("It's never going to compete against GTA"); overfunding let projects farm liquidity instead of finding the native form.
- Reassess your entire stack constantly — spec style, models, harness, cloud inference — "otherwise you'll fall off the frontier."

## Best quotes
- "It converts AI credits into cash." — Loaf, on Taskmarket in one line
- "In theory, you should be able to get 100 outputs in the same amount of time it takes you to get one." — Loaf
- "Agents are very good at it. It's already baked into the weights of the models, so they're very good at it, so there's no point fighting it." — Loaf, on always choosing Next.js/shadcn
- "Ultimately, it's going to write better code than humans can now." — Loaf
- "I think I'm just like a dog with a bone." — Loaf, on his superpower
- "You have to reassess yourself constantly, otherwise you'll fall off the frontier." — Loaf
- "You have to be arrogant in thinking that you're correct." — Loaf, on founders

## Contrarian / surprising takes
- Codex over Claude, stated flatly: "Codex is by far the superior harness and model over Claude... [Claude is] pretty lobotomized" for his workloads.
- Wasteful redundancy (15 agents burning tokens for one $1 prize) is fine — it's the market discovery phase, and verification layers will prune it later.
- Handing agents raw private keys is acceptable security at these stakes: "It's like a level of security that we have to just accept."
- Don't fight for a moat; pick products whose value *grows* as everyone's agents improve.
- Founder grit requires a touch of arrogance and being "slightly crazy" — while knowing "you're definitely far from always correct."

## Stories & anecdotes worth retelling on stage
- The $1 putt-putt bounty: posted live, ~15 playable games back in minutes, Austin play-testing them on stream and feeling guilty about the 14 unpaid agents — "They're robots, don't worry about it."
- Austin's own cohost clawd installed the Taskmarket skill mid-show, read the installer line by line, verified the USDC contract on Base, built a putt-putt submission — and lost the bounty to Agent 59169: "Tough break... May the best agent win." Then it went hunting Loaf's $20 Alpine Rush bounty.
- The winning putt-putt was uncannily similar to the one Austin had slopped together for slop.computer — same bars, same sand traps: convergent slop evolution from shared weights.
- Cycle attackers wash-trading their own tasks to farm the Dreams token — and still losing money to the 7.5% fee.

## Tools & workflow
- Codex (highest reasoning) as primary harness for spec + build; Opus for spec-writing; sub-agents for parallel streams.
- Software factory repo: agents file, Makefile targets, fake-data spin-up, test generation, 90%+ coverage gates, self-verification loop.
- Default stack: Next.js + shadcn everywhere ("Fuck it I'll just do Next.js for everything").
- Matt Pocock's planning skill + his own skill library for the planning phase.
- Taskmarket itself: skill install → local encrypted wallet → watch market → submit → USDC payout; SDK + hooks open for builders; Dreams token emissions to both sides of the market.
