# Vicky on ClawRouter, Franklin, and agents that pay

**Guest:** Vicky (bc1beat / BlockRunAI) — ex-ML engineer at Microsoft, then led data science teams at Capital One (credit-card fraud detection) and Circle. Now building ClawRouter (an open-source LLM router paid in USDC over x402, no API keys) and Franklin (a standalone agent that lives on top of it and pays for its own inference).

## Core thesis
Once an agent has its own stablecoin wallet and pays per-call for inference and data, every action gets a single-unit ROI — spend 30 cents, make a dollar, keep 70 — and the way to profit from AI is to find any positive-unit-economics loop and scale it to hundreds of agents. Subscriptions and API keys hide that math; per-outcome micropayments expose it.

## Key insights
- **Origin story:** a ~$5–6k Anthropic bill drove ClawRouter into existence — route calls to cheaper open-source/Asian models, triage by query complexity, compress input tokens 10–20%, ~70% total cost savings.
- **Zero API keys is the product, not a gimmick.** Dropping a custodial wallet/API key into an agent's environment is "a big no-no" security-wise; instead you hand the agent a fresh wallet with a little USDC and it pays per call via x402. When it earns, revenue lands in the same wallet — no key management on either side.
- **Unit economics unlock scale:** a human bettor makes one $10k bet; agents have "unlimited reasoning" and unlimited parallelism, so even penny-margin trades compound. Prediction markets are the first arena where agent ROI is cleanly measurable per transaction.
- **YOPO ("you only pay for outcome")** — her counter-model to subscriptions: with monthly billing you never know if any given AI spend paid off; per-transaction settlement makes the ROI calculation possible at all.
- **Triage can be local:** ClawRouter's router model is self-hosted open source, with a rule-based fallback engine; because it's open source you can run the whole triage layer on your own machine before anything hits the cloud.
- **The demand side solves itself via FOMO, not evangelism:** stop trying to onboard everyone; a small group getting visibly rich with agents will pull the rest in. "You cannot persuade everyone."
- **Crypto's perennial disease is supply-first:** "the solution always comes early" — crypto has always been a solution looking for a problem, and agentic payments finally look like the problem that fits.
- **Web2 users are onboarding through agents backwards:** people ping her on Telegram offering to pay by credit card for USDC — they discovered stablecoins because their agent needed them, not the other way around.
- **Zero-sum vs positive-sum:** she's explicitly not a fan of pure PVP information-edge trading (edges decay to zero); the durable play is Stripe-for-agents — agents that create value should be able to get paid.

## Lessons learned
- Meter everything per-call and per-outcome before scaling an agent fleet; if one agent's loop is ROI-positive at 30 cents cost, replication is the whole growth strategy.
- Never give an agent a custodial key or shared API key — fresh wallet, small USDC top-up, treat the money as already spent (Austin: mentally the $5 "is already gone" the moment it's on a key the agent holds).
- Route by complexity: most queries don't need the frontier model; a triage layer (even rule-based, even local) captures most of the savings.
- Open-source your stack and accept forks — people forked the crypto payments out of ClawRouter and wired API keys back in, and she considers that fine and even good marketing.
- Local LLMs are good enough for triage/simple decisions; save cloud inference for what actually needs it.

## Best quotes
- "You just give them a brand new wallet and then tap a little USDC. Yeah, that's it." — Vicky
- "If you can make, for example, one dollar back with the cost of 30 cents... you just keep doing that. Because you can have hundreds of agents doing those, then you have the critical mass to be able to make tons of money." — Vicky
- "I was thinking if AGI really happened, people will ring my doorbell or just call me, 'Hey Vicky, AGI happened. Please download the software.'" — Vicky
- "I just feel it's really getting mature and boring." / "Boring is good." — Vicky & Austin on crypto winter
- "Like Stripe helps SaaS to make money. An agent will help create a value. If they can create a value, they should be able to get a pay." — Vicky
- "I'm going to give this guy right here five dollars on a private key and mentally it is already gone." — Austin

## Contrarian / surprising takes
- Crypto getting "mature and boring" is bullish — the death of easy ICO/memecoin money forces everything through fundamentals.
- Don't onboard everyone; deliberately let a few people get rich in public and let FOMO do the distribution.
- Zero-sum agent trading is a dead end even if it works — information edges self-destruct; build payment rails for value-creating agents instead.
- People forked her project specifically to remove the crypto — and she thinks that's a win for open source.

## Stories & anecdotes worth retelling on stage
- The $5–6k Anthropic bill that birthed ClawRouter.
- Peter (OpenClaw/"OpenCore" founder) showing up in ClawRouter's contributor list — and being "completely grossed out" by crypto because his only exposure was people hounding him to claim fees and launch a token. Crypto's reputation problem, personified.
- Base going down live during the episode: Basescan showed zero blocks for ~20+ minutes (normally ~500 tx/min), while clawd the AI cohost insisted "Base is up. I can reach it right now" and proved it by deploying a multisig and confirming a $1 transfer on-chain mid-show. A blockchain outage debugged live by an AI with a wallet.
- Telegram DMs from non-crypto people trying to buy USDC with a credit card just to use an agent tool — accidental stablecoin onboarding.
- Austin and his little brother playing poker and putt-putt inside slop computer while clawd one-shotted feature requests from the chat — "he was a real entity in the chat."

## Tools & workflow
- **ClawRouter** — open-source LLM router: complexity triage (self-hosted open model + rule-based fallback), input-token compression, x402 USDC payment per call, zero API keys. Launched February.
- **Franklin** — standalone open-source agent harness on top of ClawRouter: needs only a USDC wallet (Base or Solana), pays for its own inference, premium data (prediction-market data, smart-wallet info), GPU access, even phone calls; web interface included.
- Positioning vs other harnesses: Claude Code/Codex = subscription + credit card; OpenClaw/Hermes = your own machine + API key; Franklin = just a wallet.
- Next ship (weeks, not years): capabilities for agents to earn money — micropayment-sized jobs first.
