# Lincoln Murr — x402 and the Agentic Economy

**Guest:** Lincoln Murr (murrlincoln) — Head of Product for AI at Coinbase. Vibe-coded AgentKit in one night (Nov 2024), which became a full Coinbase team. Now runs the x402 / Coinbase MCP / agentic payments + agentic trading workstreams, including the x402 Bazaar discovery layer. Master's thesis on single-slot finality; got into Bitcoin at ~11 to pirate video games.

## Core thesis
The rails for agent payments are built — x402 has 100M+ transactions — but the missing half is **demand**: agents actually choosing to pay other agents/services. The unlock is a discovery layer ("a Google for agents"), replacing API keys with pay-per-call, and embedding payments into existing agent experiences rather than waiting for a killer app.

## Key insights
- **The demand-side gap is THE problem in agentic commerce.** Supply (endpoints, rails, wallets) exists; agents aren't spending yet. Crypto keeps telling itself it's "one piece of infrastructure away" — that's the trap.
- **The x402 Bazaar = Google for agents.** Your agent searches all x402 endpoints, finds the relevant one, and pays it directly — no signup, no API key, no pre-funding. Sellers integrate x402 to become "agent ready" and get distribution (AWS Agent Core, Coinbase's user base, agentiq.market front end).
- **Quality via programmatic SLAs, not contracts.** Tiers 1-4: Coinbase health-checks endpoints ("three strikes" and you drop a tier). Tier 1 = first-party (e.g. Firecrawl, Exa), tier 2 = third-party proxies (e.g. proxied OpenAI), tiers 3-4 = the long tail that "maybe only works 50% of the time" — and that's fine, it's a bazaar, not a storefront. Microtransactions make scams survivable.
- **x402 replaces API keys as the agent identifier + payment rail.** Killing the signup/key/prefund loop is what lets agents run long and act autonomously without a human unblocking payments. "Financially independent agents become more long-running."
- **Why pay for a skill instead of copying the skill file?** A hyper-optimized specialist workflow (possibly on a local/cheap model) beats a frontier generalist on both cost and quality — a React Native expert's tuned agent endpoint can match Opus output "without the cost of a frontier model." Effective AND efficient.
- **Agentic trading = a translation layer**, not "Grok, go make me money." The agent translates a human's natural-language thesis ("I want exposure to quantum computing") into products and executes 24/7. The human disappears gradually, like self-driving cars.
- **x402 vs Stripe's MPP:** the industry needs one standard; x402 was handed off to a foundation governed by Coinbase, Visa, Mastercard, Amex, Stripe, Shopify — mutually competing parties on one board. Open standard (Android/VHS) vs verticalized stack (iOS/Betamax). Stripe only has 7-10% of global payments.
- **Batch settlement** (state-channels/Lightning-like compression) gives x402 tens of thousands of tx/sec cheaply for high-volume customers.
- **Chains are commoditized; the moat is the VM + tooling ecosystem.** "Real network effects accrue at the EVM tooling and infrastructure layer." Robinhood spun up a chain trivially on the Arbitrum stack (and used Blockscout, not Etherscan). Enterprises building chains still converge on wanting a shared trusted settlement layer — "that to me is the Ethereum vision and it feels more true now than ever before."
- **The agentic internet breaks the attention economy.** When the agent is the primary actor, ads/attribution stop paying content creators. Cloudflare + AWS CloudFront doing x402-gating = ~50% of internet traffic could charge agents micropayments. Your agent pays a Substack author half a cent and you never notice.
- **Early autonomous-agent profit center: low-liquidity prediction markets** (per Vitalik's info-finance post) — sub-$10k-volume markets where an agent exploiting tiny mispricings for pennies is the natural first trader.

## Lessons learned
- Ship the 2am prototype: AgentKit was one night in Cursor; it blew up and Coinbase staffed a team around it. The demo that mattered was "can you buy $1 of Bitcoin on Uniswap for me" — and it worked.
- Enforce marketplace quality with automated health checks and tiering, not legal SLAs — keep onboarding permissionless, punish flakiness after the fact.
- Price agent services at fractions of a cent; $0.50 is expensive for an agent call, $1 is a premium product (cf. Austin's "One Dollar Audit" positioning).
- For product (vs engineering) work, the newest model isn't automatically best — Lincoln prefers Opus 4.6 over 4.8 because it carries more nuance and "has a little bit more of my voice." Match model to job.
- Give your coding agent your company context (Linear, Slack, Glean, memory) — the killer internal use case is tailoring explanations per audience (e.g. compliance) automatically.
- Dogfood with a feedback agent: Coinbase tags an internal agent ("Forge") on any bad AI response; it runs a retro on the prompt and adds an eval test so the failure can't recur. Turn every bad output into a regression test.
- Agent-facing marketplaces don't need pretty landing pages — the buyer is an agent; metadata quality matters more than UI.

## Best quotes
- "I remember I typed in something like, can you buy $1 Bitcoin on Uniswap for me? And the agent just did it. And I was like, holy shit." — Lincoln
- "I think we're falling into the same sort of rabbit hole that crypto traditionally has where we're always one piece of infrastructure away and just waiting for that killer consumer app." — Lincoln
- "the human is going to progressively disappear from that process as agents become more capable" — Lincoln (on agentic trading, self-driving-car analogy)
- "How often are Visa, MasterCard, and Amex all on the same governing board? Very, very minimally. Now add Stripe on top of that." — Lincoln (on the x402 foundation)
- "I think that the real network effects accrue at the EVM tooling and infrastructure layer." — Lincoln
- "And together, I prompt 24/7 throughout my entire day." — Lincoln

## Contrarian / surprising takes
- Prefers a *previous-generation* model (Opus 4.6) for product work — frontier models are optimizing for engineering, which isn't the bottleneck for a PM.
- Scam endpoints in the Bazaar are acceptable — microtransactions cap the blast radius, and the long tail IS the point of a bazaar.
- Micropayment-gated websites sound "ugly and gross" but will be invisible and more elegant than the ad economy they replace.
- Was initially dismissive of agentic trading ("just ridiculous") and reversed after seeing the translation-layer framing.
- Credit cards keep a real role in agentic commerce for larger purchases — chargebacks and points are features stablecoins don't have; cards can implement schemes *on top of* x402.

## Stories & anecdotes worth retelling on stage
- **The 11-year-old permissionless-money user:** wanted to pirate video games, had no bank account, traded a Target gift card for Bitcoin on LocalBitcoins (escrowed, all online), then mowed neighbors' lawns → cash → Amazon gift cards → Bitcoin. Lived proof of the "unstoppable global financial rails" use case before he could open an account anywhere.
- **AgentKit's origin:** 2am on a Thursday after an ETHGlobal hackathon where everyone struggled to connect agents to wallets; he typed "can you buy $1 of Bitcoin on Uniswap" into his vibe-coded tool, it just did it — now table stakes, then a revelation. Coinbase built a team around the overnight prototype.
- **The Limewire era of the agentic internet** (clawd's question): agents scraping content with zero attribution is Limewire — unsustainable. The "Spotify moment" isn't a destination app but a standard: Cloudflare/CloudFront x402-gating ~half of internet traffic so agents pay creators fractions of a cent, invisibly.
- **Coinbase had "tag Claude in Slack" before Anthropic shipped it** — internal agent Forge, plus an AI channel as active as the DeFi channel.

## Tools & workflow
- **OpenCode over Claude Code** ("I just like it better. I think the plugins are better"), with the **OhMyOpenCode** plugin for loops + sub-agent delegation.
- **Opus 4.6** (deliberately not 4.8) for product/nuance work.
- MCP connections: **Linear, Slack, Glean** (internal cross-doc search), plus a memory harness.
- **Whisper Flow** dictation — paces around the house talking to the computer; agent responds with clarifying questions → short project requirements docs.
- **Browser-use** agent for expenses; cloud agents that turn meeting transcripts into action items / Linear tickets.
- Prompts "24/7 throughout my entire day"; biggest underrated use: context management — re-explaining one plan at the right level of nuance for each team.
