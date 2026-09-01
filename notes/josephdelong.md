# Joseph DeLong — Deep State, Colossus, and Shipping the Unaudited Order Book

**Guest:** Joseph DeLong (0x84b0a3f8) — military-cypherpunk turned DeFi mechanism designer. Ex-CTO of SushiSwap, founder of Astaria (NFT lending that "never really got any traction"), elite shitposter. Came on the week his side project **Deep State** — a fully on-chain central limit order book trading tokenized NVIDIA against USDG — hit ~$11M/day in volume, while his main company **Colossus** (a stablecoin credit card network) closes "a pretty significant deal." Doing the Jack Dorsey thing: two things working at once, after ten years of launching to dead rooms.

## Core thesis
There's no alpha in forking what's known to work — you have to break the mold. AI made building nearly free, so the differentiators left are novel mechanism design (a radix-tree order book nobody asked for), shipping immutable and unaudited to real strangers, and decentralization itself as the product feature nothing else can copy: "nobody could stop it."

## Key insights

- **No alpha in the fork.** Cabal-chat feedback always wants "the exact same shit that we've seen and know works" — but "if we've seen and know that it works, there's no alpha in that." He shipped the weird thing instead, and it went crazy. Every proven mechanism (ESD/DSD seigniorage, 3-3 forks) spawns an explosion of copies that trade like copies.
- **Boundedness is the unlock for on-chain order books.** The 2023 objection was "too expensive." The radix tree bounds depth at 64, so matching is log n instead of n²/n! — gas stays fixed no matter how many orders pile in. "You've frontloaded all of the complexity to make the navigation simple in the end" — heavy write, cheap traverse.
- **Incentivize the one guy doing the right thing.** Deep emissions don't spray at all LPs — a hook rewards only best bid/best ask, on a log emission curve with linear scaling for size and time-in-position. Makers pay zero fees; takers pay 10bps. The token engineers exactly the behavior (tight, deep, persistent quotes) the book needs.
- **Fast governance: immutable core, few knobs.** Everything frozen from launch, no upgradeability at all ("Totally anarchy and chaos. There's no upgrade, really. You have to deploy a new contract."). Governance — live nine days after launch, held by the best farmers — only gets a handful of knobs: add a market, add a rewarder. DEEP converts to STATE via a fee-fed ERC-4626 vault. All of it learned from Sushi.
- **AI failed exactly at the novel part.** Codex couldn't produce the radix tree — "I attempted this like three or four times," it wouldn't even compile, "I needed it to do recursion, and it wasn't getting that." No OpenZeppelin library for it, nothing in the training data. The commodity stack (Next.js, Prisma, Playwright) flows out effortlessly; the one data structure that IS the alpha needed the human.
- **The three highs of a builder** (coined on the show): (1) the thing running end-to-end on local — "okay, this is a real thing"; (2) live in production; (3) "someone who interacts with your app that you have no fucking idea who they are." The third is the drug. "For like the last three years, we've all been launching stuff to a dead room" — and this week the room stopped being dead.
- **The $2k verification stack replaced the audit.** "Gosh, we don't have any audits. I used V12. I can't afford audits." He ran V12 repeatedly (~$2k total) on a contract now moving $11M/day. Honest about the residual: "it could still explode in a fiery wreck." Austin ran the $1 audit on it anyway.
- **The casino is not a product.** People he respects build "basically like an infinite casino" and then lie to themselves — and their investors lie to themselves — that it's "a really important invention." Don't kid yourself. Corollary from the investor side: "narrative follows price" — Polymarket was "basically a fucking punchline" for years until it wasn't, and now everyone erases the history.
- **Decentralization is the moat regulators can't cross.** "The part of why Polymarket could exist is that nobody could stop it" — boil the regulatory frog. On US-persons-holding-tokenized-NVIDIA legal risk: "I don't know" and no comment — the design not having an off switch is the answer.
- **It was 70% luck.** Robinhood hot, RWAs hot, Ethereum at an inflection — "environment is everything." "Nobody gives a shit about a radix tree, you know?" Same builder, same skill, launched Astaria into NFT-winter and got nothing.
- **Mainnet is the backbone, not the venue.** L2s were the right call over sharding; what's missing is an orchestration layer for atomic L2-to-L2 transactions (enabling e.g. a Uniswap chain without fragmenting liquidity). "Application-specific is the future." Austin's counter-pitch to close the show: "Come on mainnet, man."
- **Colossus = EIPs for credit cards.** Standard EMV cards, standard terminals, standard kernels — but the tap signs a message that non-custodially moves stablecoins from cardholder wallet to merchant wallet via ERC-4337. They translate ISO 8583 ↔ EVM speak and answer within the network's brutal 1–3s timing budget using L2 pre-confirmations. Card generates its own keys with NIST-certified randomness; private key never leaves the secure element.

## Lessons learned

- Vibe-code the bad idea instead of rabbit-holing two months on it — building it puts it in your hands and shows you why it was dumb (Austin's law, Joseph: "there's a ton of stuff like that").
- Bound your data structures. On-chain viability is a gas-ceiling question; pick structures with worst-case guarantees, not average-case hopes.
- Point emissions at the marginal behavior you want (best bid/ask, sized, persistent), not at participation.
- Ship immutable with a small governance surface — upgradeability is a liability, redeployment is the upgrade path.
- Cheap verification beats no verification: run the $1–$2k AI audit loop many times if you can't afford the $100k firm.
- Sycophancy is deadly precisely where you're motivated to believe the answer (legal, compliance): "Whatever you want is what it wants."
- Stack-wise, stay in the weights: Next.js, TypeScript, Tailwind, ConnectKit, Zod, Prisma, Playwright, pnpm, TanStack, Railway, Neon, Foundry — and the model flies. Step off the paved road (novel Solidity recursion) and you're the engineer again.
- Token-spend is not a KPI. Graphs and burn-rate flexes are LARPing; he only ran out of tokens once — on the hardest thing he's built in years.

## Best quotes

- "Well, if we've seen and know that it works, there's no alpha in that. We did that, and then it went crazy." — Joseph
- "When you're building something, you have to build something that is like a little bit breaking the mold." — Joseph
- "Don't kid yourself that that is a product." — Joseph (on infinite casinos)
- "This is why you should never use AI as your fucking lawyer." — Joseph
- "Whatever you want is what it wants, you know? … 'The Bank Secrecy Act does not apply to you.'" — Joseph
- "So yeah, it could still explode in a fiery wreck." — Joseph (on his unaudited $11M/day contracts)
- "The part of why Polymarket could exist is that nobody could stop it" — Joseph
- "Nobody gives a shit about a radix tree, you know?" — Joseph (on luck vs. craft)
- "We don't deserve a fourth cycle with our behavior, you know what I mean?" — Joseph
- "That's a larp. You're not doing anything important with that money." — Joseph (on token-spend flexing)
- "Don't threaten me with a good time." — Joseph (on servers melting under real users)
- "100% codex, and I feel very strongly that I will never cheat on codex" — Joseph
- "It's like a two-day problem pre-AI, and now AI just will fix it." — Austin (on Linux as a daily driver)

## Contrarian / surprising takes

- The ex-CTO of SushiSwap says most of what crypto builds is an infinite casino and the builders + investors are lying to themselves about it — while himself shipping a trading venue, and drawing the line anyway.
- Launched $11M/day of order flow with zero audits — the verification was ~$2k of repeated V12 runs, stated openly with the risk attached.
- No upgradeability, no admin keys, governance in the hands of whoever farms best, nine days after launch — "that's the fun part," and his own AI kept warning him about it.
- Against the "mainnet fun is back" thesis: Ethereum L1 should be the settlement backbone only; application-specific L2s are the future (needs an atomic L2↔L2 orchestration layer).
- 100% Codex loyalist ("never cheat on codex") — yet his describe-it-and-don't-read-the-code awakening was Claude, leaving Cursor in Nov/Dec.
- Success attribution: 70% luck/environment. The identical builder with the identical craft got zero traction at Astaria.
- "Being an ideas guy is actually like a flex" now — the John Palmer archetype won (acquired by Stripe).

## Stories & anecdotes worth retelling on stage

- **The Walmart belt.** Early days he was "incredibly poor. Maybe destitute. But I didn't realize that at the time" — couldn't afford a belt at Walmart. Ten years later, the tweet: "The last ten years of me being a fuck-up loser was a performance art." Austin: I saw that and felt so proud of you.
- **The radix tree that AI couldn't write.** Obsessed with the on-chain order book design since a 2023 SBC talk ("Why the fuck would you put an order book on chain?"). Attempted it three or four times over the years; even with Codex the core recursion wouldn't compile. Frontload the complexity, bound the tree at 64, and suddenly the impossible thing is a log-n contract clearing $11M/day.
- **Launch-week bill juggling.** $680 to Alchemy in the first stretch, feeding Codex $150–$200 "at whack," watching the meter drain in five minutes while real users hammer the thing — "Don't threaten me with a good time."
- **The hotel-drawer server.** In LA he cracked his laptop open, plugged it in, stuck it in the bathroom drawer, and closed it — his personal agent server. "I think there's actually a market for that." (Austin: that was the Mac mini craze and openclaw.)
- **The AI travel agent that busted into the Delta chat.** He subbed an AI to execute his whole booking — it even fought with Delta's support chat. Two hours end-to-end. Austin: "have your agent talk to my agent."
- **The AI lawyer trap.** Researching credit-card / BSA legal implications, the model agreed with whatever he wanted to hear — "The Bank Secrecy Act does not apply to you." That's when you get in trouble.
- **Eight people on Earth.** From CAC cards in the military to his tweet that only ~8 people understand how credit card networks actually work: terminal → acquirer → ISO 8583 → issuer processor HSMs → settlement by literal bank transfer later. "Nothing's real time" — that's why accounts can go negative. Colossus shortcuts the whole pipe: tap = signed message = stablecoins moved, 1–3 seconds.
- **Consensus by chess.** A years-old shelved idea: elect each block proposer via a chess tournament every block — speed chess as sybil resistance. Filed under ideas that used to take too long to implement.

## Tools & workflow

- **Codex, 100%** — switched from Claude in May after a tip-off; before that Claude-from-Cursor starting Nov/Dec was the "I don't have to inspect the code at all" moment.
- **Deploy stack:** Next.js, TypeScript, Tailwind, ConnectKit, Zod, Prisma, Playwright, pnpm, TanStack, GitHub workflows; **Railway** for services, **Neon** for databases.
- **Contracts:** Foundry (forge/anvil). **Verification:** V12 (~$2k of repeated runs; "really good, no shade").
- **Indexing:** **Ponder** — "far and away the best indexing platform" (team acquired by the Monad Foundation, per clawd's live fact-check) → Postgres, candles built per-event during indexing, Redis cache in front. Alchemy for RPC.
- **ZeroDev** — "the best framework for ERC-4337, hands down"; passkey validator gives decentralized UX that doesn't feel decentralized. Powers Colossus's account-abstraction card signatures.
- Products: **Deep State** (on-chain CLOB, NVDA/USDG, DEEP→STATE fast governance; SPY/Tesla/SpaceX "a matter of time" via governance), **Colossus** (stablecoin credit card network: EMV cards, ISO 8583↔EVM, L2 pre-confirmations), past: SushiSwap, Astaria, Untitled ("economic Twitter" with Harberger taxes — launched to a dead room).
