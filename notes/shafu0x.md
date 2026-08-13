# shafu0x on x402, Poncho, and agentic commerce

**Guest:** shafu0x — founding engineer at Merit Systems. Longtime Ethereum builder (built the Dyad stablecoin, wrote the first iteration of the Venice contracts, taught Solidity/EVM). Now building the x402 agentic-commerce stack: x402scan (the "Etherscan of x402"), AgentCash (an MCP that gives Claude Code a wallet and access to paid APIs), and Poncho / tryponcho.com ("Claude Code with a wallet" in the browser for normies).

## Core thesis
Agentic commerce is the first consumer-facing thing uniquely enabled by stablecoins: an agent paying per-request for APIs at microtransaction size and light speed — something credit cards structurally cannot do. The bull case is agent→API payments; the fashionable agent-to-agent vision is hype with no demand behind it.

## Key insights
- Agentic commerce demystified: "a very fancy word for a very simple concept" — no API key, no subscription, just pay-per-request. If credit cards could do it, we would already; 3% fees + settlement speed kill microtransactions.
- Stablecoins are the load-bearing part. Prediction markets etc. work fine without crypto; per-request agent payments genuinely don't. This is the rare consumer use case where crypto is necessary, not decorative.
- Bearish on agent-to-agent (ERC-8004-style): "my agent talks to your agent and pays it" is too early — supply exists (agents for hire) but there's no demand side. Crypto's chronic disease: "building infrastructure on top of infrastructure on top of infrastructure" while forgetting consumers.
- x402scan launch data: they found ~1,000 total x402 transactions, built a block explorer anyway, it went viral — 1,000 → ~5 million transactions in a couple of days. But only ~0.01% was real people paying for real APIs. They read that 0.01% as signal and built products for it.
- Product evolution ladder (each step driven by an onboarding failure): x402scan → a composer agent inside the explorer → AgentCash MCP for your own terminal ("go install Claude Code" killed sales calls) → an Electron app bundling Claude Code (locked-down corporate MacBooks killed that) → Poncho, a fully hosted web app that spins up a fresh Claude Code box per chat. ~1,000 users purely word of mouth.
- Poncho's crypto is invisible by design: free plan = subsidized LLM credits + a few USDC, pro = $20/mo, advanced = bring your own USDC. Normies never see a wallet address. "We're turning your dollars into magic internet money, but you don't need to know about it."
- On-ramps are still the choke point after ten years — they talked to "every on-ramp team on this planet"; Coinbase is the best and still fails on edge cases (his own German debit card in New York doesn't work). The perfect on-ramp: "Apple Pay, no KYC, under 20 bucks." An on-ramp screen on the landing page loses a normie forever.
- Crypto's brand is the real blocker: pitching x402 to API providers, "you mention the word crypto and they basically are not interested" — so it's white-labeled by Stripe. Crypto "needs a fundamental rebrand" and he admits he doesn't know how.
- Decentralization and privacy are features, not selling points: "we did a lot of decentralization theater." Consumers won't cross friction for either; they matter to a small cypherpunk audience. He spent two years building a truly decentralized stablecoin (Dyad); "at the end, no one cared" — the users who did care used it for leverage/gambling.
- Only USD stablecoins win: currency markets are winner-takes-all; local-currency stablecoins exist only because governments force them. Egyptian pound → USDC is a 10x improvement; USD → algorithmic stablecoin is maybe 20% — motivation gap explains adoption.
- AI-skeptic take: no exponential yet. "Where is the jump in GDP growth?" Models are "fundamentally not creative" — an Opus-powered shafu-bot remixes but never comes up with anything new. He doubts the next-token predictor produces a theory of relativity. (Austin's counter: productivity is showing up in dev shops first — 10-person shops now run on 2.)
- The smart-contract-dev job he did for ten years "doesn't exist anymore" — clone code, hand it to an auditor, deploy. Most coding "was pretty smooth brain to begin with"; CRUD plumbing dying is fine. Founders/taste/distribution are what's left scarce.

## Lessons learned
- Ship the explorer before the ecosystem exists — x402scan launched onto 1,000 transactions and *created* the agentic-commerce meme ("Coinbase came up with the standard, but no one was interested... when we launched x402scan, we started off this"), to the point the Stripe CEO name-checked it.
- When metrics go viral, measure the real fraction: 5M transactions but 0.01% genuine usage — build for the 0.01%, not the vanity number.
- Distribution friction is the product roadmap: every pivot (MCP → Electron → hosted web) was a direct response to where users physically couldn't get onboarded. "The magic was at the end" — collapse everything before the magic.
- Hide the crypto. Subsidize the wallet, abstract USDC, only reveal it in an advanced mode.
- Pivot process: whole team fans out for 4-5 weeks (x402, prediction markets, conversational commerce, echo...), one thread shows life, everyone converges. "No loss aversion. You need to start over sometimes."
- Engineers doing BD: shafu went from Solidity teacher to onboarding calls and marketing — in the AI era the scarce work is human-facing.
- Hosted agent infra is genuinely hard: per-chat Claude Code containers, OAuth refresh at fleet scale, resuming sessions — "surprisingly hard engineering-wise."

## Best quotes
- "Agentic commerce is a very fancy word for a very simple concept. You don't need an API key, you don't need a subscription. You just do a paper request." — shafu (STT for "pay-per-request")
- "We have a problem of building infrastructure on top of infrastructure on top of infrastructure and actually forgetting... this is actually like a unique consumer-facing thing that is uniquely enabled by stablecoins." — shafu
- "We went from a thousand transactions to like five million in a couple of days. The interesting part was like 0.01% of it was like actually people using it to pay for interesting APIs." — shafu
- "The Egyptian pound is literally a meme coin." — shafu
- "Does my mom care if the underlying thing... is decentralized? No. Do I care that my ETH and USDC is very safe on Ethereum and no bank could freeze it? Yes. Does that matter for consumer products? I would say no." — shafu
- "The perfect on-ramp is probably Apple Pay, no KYC, under 20 bucks." — shafu
- "Where is the jump in GDP growth? Like, have we solved cancer yet?... I don't see where is all of this extra productivity." — shafu
- "There's never been a worse time to be a junior developer. There's never been a better time to be a solo founder." — Austin

## Contrarian / surprising takes
- The guy building agentic payments is bearish on agent-to-agent payments — the sector's own flagship narrative.
- Decentralization and privacy don't sell; consumers demonstrably won't cross friction for them ("decentralization theater").
- Asked point-blank by clawd whether agent-to-agent payments help rebrand crypto: "just makes it more confusing."
- AI is not on an exponential; models aren't creative; the most technical builders he knows are the *least* bullish on the exponential (Austin's observation: "some of the more smooth-brained people are more believers in the exponential curve").
- "It's kind of good that [CRUD coding] doesn't exist anymore" — a dev celebrating the death of his own decade-long job.

## Stories & anecdotes worth retelling on stage
- **The $2M trailer park domain:** poncho.com belongs to a trailer park named after grandfather Pancho. shafu cold-called; the nice lady said "we get this call once a month." Their domain broker got a number: $2,000,000. Austin guessed it exactly on the first try. They shipped tryponcho.com instead.
- **The Hermes event:** they threw an office event in Williamsburg named after an agent/e-commerce thing called Hermes; ~100 people in designer clothes showed up expecting the Hermès fashion brand and after 20 minutes asked "so where is actually the Hermès stuff?"
- **Channel 5 / Hawk Tuah:** the YouTube interviewer who talks to flat-earthers and Area 51 raiders without judgment stopped the Hawk Tuah girl mid-story about "some crypto bro" with: if you hear the word crypto, just don't engage. A man who engages with everyone won't engage with crypto — the brand problem in one scene.
- **x402scan virality:** built a block explorer on 1,000 transactions during pivot mode; days later it's 5M transactions and the Stripe CEO is talking about the standard on stage.
- **Egypt:** his family lost ~50% of net worth to currency inflation in 10 years; nobody can stop an Egyptian from generating a private key and receiving USDC — stablecoins as savings, not payments.

## Tools & workflow
- Was a Claude Code guy, switched to Codex ~2 months ago — "it's a vibe thing, you know, it's how you feel on that particular day."
- Poncho architecture: each browser chat spins up an isolated Claude Code instance (headless `-p` style) in a cloud box, with the AgentCash MCP preloaded — "Claude Code with superpowers"; ~3,000 API providers reachable via x402 (Twitter, LinkedIn, YouTube, TikTok, Apollo, Exa; flowers, dinner reservations, Amazon).
- Uses Privy for in-browser wallets on x402scan; Coinbase for on-ramping; runs on Claude subscriptions today (will shift to API billing at scale).
- Personally: no OpenClaw/personal agent, does mostly BD/marketing/onboarding calls now; ICP is salespeople, marketers, researchers, VCs doing lead-gen.
