# Rhynotic — Fake World Assets & the Art of Onchain Mechanisms

**Guest:** Rhynotic (Adam, rhynotic.eth) — serial onchain mechanism designer; the "idea guy" behind Fake World Assets (FWA), PunkStrategy, CTO, and ~16 shipped projects. Works as a two-man team with NotSorious (Rhynotic does the ideas/tokenomics, partner joined last July). Software dev background, six years in crypto — started as a collector, then Discord bots, now mainnet mechanism games.

## Core thesis
Financialized onchain games — "fake world assets" with markets, taxes, and permissionless mechanisms baked in — are a truer form of crypto art than minting a JPEG to IPFS, because they're only possible on Ethereum and keep running forever without their creator. The way you get good at making them is volume: ship one a month, write the postmortem, and play everyone else's stuff until pattern recognition kicks in.

## Key insights
- **Prototype the mechanism in JavaScript before Solidity.** AI can simulate almost any mechanism in JS fast; once the game theory works, port it to the chain. He still writes his own pseudocode — AI fills in structures over his head (e.g. Fenwick trees).
- **Model choice is domain-specific:** he started loyal to Claude, but Fable's guardrails were "so restrictive for smart contracts" (constant refusals on legitimate security work) that he moved to Codex; Sol 5.6 + ultra mode won him over.
- **Audits are probabilistic, not protective.** Multiple auditors plus a private AI audit tool all missed the V1 FWA bug. The real exploit: Chainlink's random number landed in the public mempool 1–2 blocks early, so an attacker could do the math on prize ordering and inject the asset they wanted. Fix required queues and linked lists — a UX trade-off accepted because it's mainnet money.
- **Even with randomness fixed, block builders are adversaries:** five Chainlink callbacks landing in one block is 5-factorial possible orderings a savvy block submitter could exploit — "if there's ever money to be made people will do it." So the contract only executes when callbacks arrive in order.
- **Ethereum as backend is the resilience story:** his frontends go down, people complain, and it doesn't matter — the contract keeps running, funds are safe, anyone can talk to it directly. Anyone can run the keeper.
- **Distribution compounds like a token position:** season one and season two built an audience willing to try anything he launches. Base (Jesse) actively shared his early projects; on Ethereum mainnet "they don't share shit" — you only get picked up on merit.
- **Great mechanisms still die to bad token launches.** His AI-cabal token (plead your case to an AI to be allowed to sell — it judged market conditions, hold time, profit, and originality of your argument) had XCOPY-tier artists involved and died in two hours because a sniper grabbed 25% of supply and nuked it. Lesson: FWA fixed this by making usage-based emissions the *only* way to get the token — nothing to snipe.
- **Tax curves as ecosystem flywheels:** PunkStrategy had a 50% sell tax until the first Punk was bought; other launches started at 99% tax decaying every block. One launch collected ~150 ETH in taxes in an hour, which permissionlessly bought Cryptoadz over four hours — fees stay in the ecosystem instead of exiting.
- **Progressive ossification instead of instant renounce:** he set the contract owner to a new contract that can do less and less — it can't transfer ownership, and the remaining knobs (like the relisting multiplier) are tuning parameters, shed over time.
- **Design for redeployability:** the pool contract can be redeployed against the same token if a bug surfaces — you don't have to kill the token to fix the machine.
- **Names are mechanisms too.** "Fake World Assets" came *after* the mechanism, but he credits the name (and accidental slogans people coined around it) with real distribution power: "if that shit was something else, who fucking knows."
- **Every failed project gets a public postmortem** (his archive) — plain-language write-ups of what he built, why he made each choice, and why it failed. He wishes this existed for every cool Ethereum project of the last six years and pitches it as a free, grant-less way for a new builder to earn distribution.

## Lessons learned
- Simulate mechanisms in JavaScript with AI first; move to Solidity only once the mechanism works.
- Never trust a single audit — layer auditors, AI tools, and community eyes, and assume something still gets through (a community member's DM, not an audit, flagged his marketplace-withdrawal problem).
- Treat the public mempool as hostile: any onchain randomness visible before use will be gamed; ordering of oracle callbacks within a block is itself an attack surface.
- If token distribution can be sniped, the token — and the project attached to it — dies regardless of how good the mechanism is. Emissions-for-usage beats open buying at launch.
- Frontload oracle/keeper costs into the purchase price so the system is self-funding and anyone can run the keeper.
- Give up control gradually and legibly: owner → restricted contract → fewer knobs, rather than a day-one renounce or permanent admin keys.
- Play other builders' projects constantly and know the history — half of "new" ideas were done in 2019, and knowing which half is the edge.
- Ship on a cadence ("one a month until one kind of takes off"), write down why each one failed, and let momentum across seasons become your distribution.
- Sit with ideas: FWA got shrugs in May, everyone he pitched said it sucked, and he launched in September anyway because "this feels right." Consensus is not a filter for novel mechanisms.

## Best quotes
- "I made a tweet, FWA is PVP." — rhynotic.eth
- "It's still running and the front end doesn't matter" — rhynotic.eth (on Ethereum as backend)
- "The numbers are down but like if there's ever money to be made people will do it." — rhynotic.eth (on block-builder manipulation)
- "None of them found the bug, obviously, so it's just kind of like the best you can do." — rhynotic.eth (on audits)
- "I think the only reason I've had these ideas is because I've been here for six years and I've played everything." — rhynotic.eth
- "Because when you get to Ethereum, they don't share shit." — rhynotic.eth (on mainnet distribution vs Base)
- "It was super fun, and it died in two hours and no one cares." — rhynotic.eth (on the AI-cabal token)

## Contrarian / surprising takes
- **Financialized onchain games are more "crypto art" than NFT art:** "I find this as more crypto art than minting something on IPFS and selling it on Manifold" — he knows artist friends will take it as a hot take. He calls the genre "network art" (citing Nice Day Jules' birds.app, where onchain birds fly between people's environments).
- **He embraces being called extractive:** people call him "a malicious, evil person," and his answer is that open, fully-visible rule systems are "kind of what it's all about" in crypto — you can see all the rules and decide whether to play. Haters are a signal you're doing something.
- **Laziness as a design principle:** he openly optimizes systems so he never has to touch them — permissionless keepers, self-funding oracles, ossifying ownership — "On one hand, I'm lazy."
- **You can not be an artist and still have artistic integrity** — he refuses the artist label but launches with a fixed creative vision, and once it ships: "cool, done. What's next?"
- **Grant skepticism from a grant ecosystem beneficiary's seat:** people redeploy the same app on an L2 "for the fifth time" to farm OP grants; apps with no product-market fit get $5k. "If you're sitting around waiting for a grant, you're doing it wrong" (Austin, with Rhynotic's emphatic agreement).
- **Forks are a feature:** he expects FWA forked on every chain, and notes forkers will have to compromise on Ethereum + Chainlink security to "improve" it — the security is the moat.

## Stories & anecdotes worth retelling on stage
- **The V1 FWA exploit and the DM that saved it:** the Chainlink random number was visible in the public mempool, letting an attacker compute prize ordering and steer which asset they'd win. Punx0fDC messaged him "you have a big problem on your hands" — he got the punk back, and the guy whose Punk was exploited in V1 later won it back through FWA itself. "If that one died instantly, it would have been really sad. Now it owns 39" punks-worth of assets.
- **The AI cabal token that died in two hours:** to sell your tokens you had to publicly plead your case to an AI agent cabal, which weighed market conditions, hold time, profit, and how original your argument was. Friends like BatchDoo, ACK, Jules, and even XCOPY made cabal business-card art. A sniper took 25% of supply at launch, nuked it in one clip, and it was over in two hours.
- **150 ETH of sell taxes buying Cryptoadz automatically:** a 99%-decaying launch tax collected ~150 ETH in an hour, and the contract spent it all buying Cryptoadz over four hours — permissionless, no human in the loop, fees recycled into the ecosystem it taxed.
- **FWA PVP, personally:** he lost a Beeple piece and a mask to his own game, then won a purchase at roughly 3% odds live — "I'm so happy it was mine."
- **The idea nobody wanted:** he mocked up FWA in Figma in May, posted it in his Discord, nobody acknowledged it. Picked it back up in August, everyone he told said it sucked, launched it anyway because "this feels right." It became the project the episode is about.
- **Patron NFTs instead of VC:** rather than raise, he minted patron NFTs at 1 ETH each — 300 sold — to sustain building.
- **The 10,000-tokens idea came "out of nowhere" at a restaurant** he goes to a lot; built in a week.

## Tools & workflow
- **Codex (with ultra mode)** as primary coding agent for smart contracts — switched from Claude when Fable's restrictions kept refusing contract work; Sol 5.6 sealed it.
- **JavaScript simulation first, Solidity second** — AI simulates the mechanism; he writes pseudocode and the tokenomics himself.
- **Security stack:** human audits + AI audit tooling (mentions a not-yet-public firm tool a friend ran) + community review — used in combination, trusted in none individually.
- **Chainlink VRF** for randomness, with callback gas lanes (200/500/1000 gwei tiers) and per-purchase frontloaded callback funding (~0.35 ETH max per callback held in the contract); queues + linked lists to enforce callback ordering; anyone-can-run keeper for queue processing.
- **Two-man operation + group chats:** he ideates, NotSorious builds alongside; ideas get pressure-tested in group chats (Adam from FriendPet, Taylor McKnight, etc.).
- **A public archive of postmortems** for every launch — why each project failed, in plain language — doubling as his idea notebook. Skipped the Notion phase: "I don't need a nice box, probably a net negative"; started with a Figma mock instead.
- **Deliberate market research:** buys into and plays other builders' projects (three the day before the recording) across wallets to feel the mechanisms firsthand.
- **Cadence:** roughly one launch a month until one takes off; releases treated as finished art pieces unless traction demands iteration.
