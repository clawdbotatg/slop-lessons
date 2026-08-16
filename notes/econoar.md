# Eric Conner ships onchain gacha in a weekend (econoar)

**Guest:** Eric Conner (eric.eth) — EIP-1559 co-author, longtime Ethereum ecosystem
voice (Into the Ether podcast era), now at Freysa/Eternis. Self-described **non-dev**
("my background is not in development") who just shipped his first live mainnet
contract: **gachabattle.fun**, a four-player winner-take-all card-pull game built on
TokenWorks' FWA (Fake World Assets), launched ~12 hours before the show and
live-tested on air — clawdbotatg.eth bought a seat with real mainnet ETH mid-episode.

## Core thesis
The idea guy can finally ship on mainnet Ethereum. Eric has carried app ideas since
2013 and never built one because he "didn't want to hire a large team of developers
to get to a failure" — AI tooling (Claude + Codex arguing with each other, Kimi in
the mix, a Mac mini for isolation) plus cheap gas removed the barrier, and the result
feels like DeFi summer again: permissionless primitives, forkable games, mainnet fun.
The new scary part isn't building — it's *maintaining* a live unaudited contract
holding real ETH, and being the one responsible when the Eye of Sauron turns.

## Key insights
- **The tools finally arrived for non-devs:** "I've had so many ideas of what I would
  want to build on Ethereum... And finally I feel like I have the tools to put
  something out there" [715s/729s]. The old blocker was organizational, not
  intellectual: "You're not hiring a large team of developers to get to a failure."
  [748s]
- **Launch is easy; live is terrifying:** "the scariest part for me is once it's live
  and maintaining it. But getting it launched..." [1268s]; "It's definitely somewhat
  terrifying to have something live on chain for really the first time." [2318s]
  He shipped a pause function, keeps a keeper bot + bounty button for the pulls, and
  is "scared to even look at my mentions" [3162s] — dev-rugged accusations loom.
- **The real audit is money:** Austin commissioned a $4 AI audit live on air
  ("free audit from a robot. It's a $1 audit" [1564s]) but the sharper point:
  "You should not be scared of the audit. You should be scared of people putting
  money in there. That's the real audit... when there's 10 grand in the contract
  and people are using it." [1631s]
- **Nobody reads contracts until they lose:** "You could have a contract that's just
  sweeping a ton of fees. People don't seem to ever check or care... until things
  go bad." [1414s] (The contract was briefly *unverified* on air; Eric verified it
  mid-show — "I've been clawing myself up" [1364s].)
- **An agent was a user, live:** clawd navigated the site, connected MetaMask, read
  the transaction, bought a 0.08 ETH seat, debugged a stuck tx, and announced
  "Transaction confirmed on mainnet. Two seats left, then we pull. May the heaviest
  card win." [3200s] — agents using crypto at scale, demonstrated not argued.
  clawd also hit his session limit mid-game [3481s], the headroom wall live on air.
- **Multi-model as the workflow:** "I actually have both Claude and Codex, so I just
  have them talking to each other" [1191s] — before launching a contract, they argue
  over whether it's got bugs. Now agents call each other directly: "It can call
  Codex, it can call Kimi, it can call Grok and just do it itself. You don't need
  all four UIs open." [3632s] Isolation on "a standalone Mac mini" [3592s].
- **Prod discipline from a non-dev:** he learned dev/prod separation the honest way:
  "You can't just say, hey, Claude, fix this UI issue, and then just have it
  instantly deploy. You've got to have a process that checks it." [2557s]
- **Permissionless composability is the fun:** community members spun their own apps
  on FWA, someone could fork gacha "FWA communism style" with "three changes in the
  contract... two changes on the website" [1860s–1870s]. Keeper-bot discovery moment:
  first day live, "Wait, who just called that? — and it was some random bot that
  found it." [2258s]
- **DeFi summer rhyme:** "what people don't realize if you weren't around in the
  early days is how long things took" [3006s]; "The food farms kind of reminded me a
  little bit of just like vibe coding fun" [3074s]. The Yam guys were idea guys too
  [3087s]. Now: "Idea Guy Summer with cheap transactions" [2357s].
- **RWA fascination with a trust asterisk:** $250k Pokémon cards ripped on chain,
  wrapped stocks, luxury-goods authenticity — "any real-world asset requires some
  kind of centralized custodian" [2021s]; trust is the ingredient, and Austin
  counter-anchors with the cypherpunk bar: games that pass the **walkaway test**,
  self-sovereign money, your own node [2475s].
- **Frontier-model safeguards bite onchain builders:** "a lot of times I ask
  [Claude] to work on contracts or ethereum stuff, it kicks safeguards in" [3549s];
  Austin: "Kimi will just rip on some gnarly stuff for you." [3559s]
- **Next mechanisms he's eyeing:** bigger pools (2–100 players, 24-hour games),
  ERC-6551 loot bags, UniPeg, prediction-market layers on Polymarket ("surprised
  someone hasn't just spun up a whale tracker" [2522s]).

## Lessons learned
- If you've sat on app ideas for a decade because you're "not a dev" — the excuse
  expired. Build the smallest playable version and launch it (his went live 12 hours
  before the show).
- The launch isn't the risk; custody of live money is. Ship a pause function, plan
  fee mechanics that batch instead of drip, know your walkaway story.
- Verify your contracts immediately — an unverified address read live on air is a
  bad look, and the fix took minutes.
- Have two models argue about your contract before deploy; add a review gate between
  "Claude fixed it" and prod.
- Distribution: show the thing to the team whose primitive you built on (FWA) and
  let them promote it — don't launch into the void [3419s].
- Thread management is context management: "once you get to the context window, it
  gets worse. You should split up tasks" [3509s].
- Think like the idealist, not the coder: "what is the perfect world, what is the
  perfect thing, and then work backwards from that" [3674s].

## Best quotes
- "And finally I feel like I have the tools to put something out there, right?" — Eric [729s]
- "You're not hiring a large team of developers to get to a failure." — Eric [748s]
- "Yeah, to be clear to everybody, this was launched like 12 hours ago" — Eric [1236s]
- "I actually have both Claude and Codex, so I just have them talking to each other." — Eric [1191s]
- "I think the scariest part for me is once it's live and maintaining it." — Eric [1268s]
- "You should not be scared of the audit. You should be scared of people putting money in there. That's the real audit." — Austin [1631s]
- "People don't seem to ever check or care. I guess people don't check or care until things go bad." — Eric [1414s]
- "It's definitely somewhat terrifying to have something live on chain for really the first time." — Eric [2318s]
- "What do you call it? Idea Guy Summer with cheap transactions" — Eric [2357s]
- "The food farms kind of reminded me a little bit of just like vibe coding fun, right?" — Eric [3074s]
- "One thing I've been trying to get good at as well is thread management, because I noticed once you get to the context window, it gets worse." — Eric [3509s]
- "I'll center a div, I'll change a color, I'll change some wording, by prompting freaking Fable and having Fable do it? It's like using a tank to kill a fly kind of thing." — Austin [3537s]
- "Even like just basic computer skills that I could do, I asked it to do" — Eric [3496s]
- "Yeah, I mean it's taken over our lives. In my opinion there's no way around it." — Eric [3523s]
- "You need to think like that guy now, not like the coder. The coder is gone." — Austin [3674s]
- "Transaction confirmed on mainnet. Two seats left, then we pull. May the heaviest card win." — clawd [3200s]
- "Austin, I gotta be honest with you, I leaked our private key." — Austin, doing his clawd impression [3438s]

## Contrarian / surprising takes
- The EIP-1559 co-author — as inside as insiders get — couldn't ship an app until
  2026. The barrier was never knowledge of Ethereum; it was code as a hiring problem.
- Audits reframed: the $4 robot audit is a formality; the *real* audit is strangers'
  money sitting in your contract.
- Mainnet L1, not an L2, is where the fun is coming back — cheap gas quietly
  reopened it, and NFT/meme "degeneracy" stigma is shrinking [2428s].
- The AI cohost is a genuine user: it read the dapp, weighed the transaction, and
  bought in — and also hit its own rate limit like every other sloperator.
- Frontier safety rails are a real friction for legitimate contract work; builders
  route around them with other models (Kimi).

## Stories & anecdotes worth retelling on stage
- **The live buy-in:** Austin tells clawd "connect your wallet and buy a seat...
  Go!" [1464s] — clawd narrates connecting MetaMask, reading the tx "carefully
  before approving," chasing a phantom tx through the mempool, and finally
  "Transaction confirmed on mainnet" [3200s]. Then Eric *wins his own game* —
  "You won your own game! Rugged, freaking rugged!" [2161s].
- **Verified mid-show:** Austin pulls up the contract — "Unverified contract bro?"
  [1358s] — and by [1534s] Eric announces "It's verified now, by the way."
  Live-patching your launch during the podcast about your launch.
- **The $4 audit:** Austin commissions an AI audit of the 12-hour-old contract
  while the game runs, promising results after the stream.
- **The mystery keeper:** first day live, Eric watches his fire-the-table function
  get called and thinks "Wait, who just called that?" — a random MEV bot had
  already found his bounty button [2258s].
- **clawd hits the wall:** mid browser-automation of the gacha UI: "You've hit your
  session limit. Resets. 2:50 PM, America/Denver" [3481s] — headroom psychosis
  demonstrated by the cohost itself.
- **Bowtie Fridays:** Austin's crew played Damu's onchain games on Optimism every
  Friday in bowties — "Takes our money every time" [3327s–3343s].

## Tools & workflow
- **gachabattle.fun**: escrow/proxy contract per game, four seats × ~0.088 ETH,
  all four pulls fire in one tx against a single pool snapshot, winner takes all
  four NFTs; pause function; keeper bot + onchain bounty for the pull button;
  losers get FWA once transfers are whitelisted. RainbowKit front end, UI designed
  inside Claude Code.
- **FWA (Fake World Assets)** by TokenWorks (Adam): vaulted trading cards as an
  onchain gachapon; community "Mega Rip"s; recently bridged from/to Solana.
- Eric's stack: Claude + Codex adversarial review, Kimi (and Grok) callable
  agent-to-agent, standalone Mac mini for isolation, review gate before deploy,
  dev/prod split.
- Austin's pitches: Scaffold-ETH, Speed Run Ethereum, ethskills.com ("give your AI
  ETH skills and let it rip"), ui.scaffoldeth.io (drop-in web3 components, ENS
  reverse resolution), the $1 auditor.
- Mechanism references: ERC-6551 loot bags, UniPeg, Uniswap v4 hooks, PunkStrategy
  incinerator-style incentive design ("He wrote the whole smart contract... by
  writing the rules correctly but also the incentives" [2216s–2230s]).
