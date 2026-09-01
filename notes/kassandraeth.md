# κασσάνδρα.eth — Kohaku CLI and the Practical Cypherpunk

**Guest:** κασσάνδρα.eth (Cassandra) — Ethereum Foundation, working on the Kohaku privacy initiative. Self-taught engineer who found Bitcoin through sketchy poker sites, hand-rolled her own transactions in Python to understand ECDSA, and came up through raw DIY cryptography. Now building the Kohaku CLI: a command-line wallet that wraps the Kohaku SDK — Railgun, Privacy Pools, Tornado Cash, stealth addresses, Tor — so one seed phrase and one command replace the whole fiddly privacy stack. The episode is a live testnet demo, seed phrase on stream and all.

## Core thesis
Privacy on Ethereum fails on friction, not ideology — even cypherpunks who know exactly how the tools work don't use them. The fix is collapsing the entire privacy stack (mixers, stealth addresses, network anonymity) behind one seed phrase and one command, and letting an agent drive the CLI so the human never has to be persistent.

## Key insights

- **Friction is the whole enemy.** "You have to be very persistent. You have to put all these things together to do it by yourself today" — prohibitive even for users who know all the pieces. She was ideologically motivated *and* technically literate and still didn't shield her transactions. First target market: people already aligned — get them at the table.
- **One seed phrase derives everything — including your mixer funds.** Kohaku's new trick: Tornado, Railgun, and Privacy Pools balances are all derived from the same seed. Take the seed to another Kohaku wallet and it rediscovers your shielded funds. No more "generate a key pair in a browser and pray" onboarding that privacy apps forced on users.
- **The wallet form factor: a bag of ephemeral EOAs.** Stop thinking account-by-account. Aggregated public balances; every action can mint a fresh ephemeral EOA under the hood; `verbose` if you need granularity. Long-term, the only thing you should need to know is whether funds are inside a shielded pool or out.
- **Public entry point, private everything.** Your name (ENS + a stealth meta address — her friendlier coinage: "stealth inbox" — published as a text record and on the ERC registry) is the one public thing. Anyone can find you and send to a fresh, unlinkable one-time address without ever asking you for one. "I believe all wallets should work this way."
- **Privacy is full-stack, and RPC is the hard layer.** Mixers cover funds, Tor covers your IP (TorJS is in the CLI), but the data you *look up* deanonymizes you — query your delinked addresses through Alchemy with an API key and you've relinked them yourself. Answers: local node, or the EF REEDS team's private information retrieval — a privacy-preserving RPC where the server can't see what you asked.
- **CLI-first as strategy.** Forking browser extension wallets was misery; exposing the SDK "in a raw command-line fashion" was the quickest proof it works. The CLI is the SDK's first consumer — and, incidentally, a perfect agent interface. Austin: "The CLI has the SDK underneath it, and it's like a layer to enable agents to use the SDK."
- **The helper bot is leashed by construction.** Her Ollama-backed helper composes the gnarly commands via non-interactive CLI calls, verifies they'll work — and *cannot broadcast anything*. It says "run this"; the human runs it. Security by capability, not by instruction.
- **Atomic private DeFi is the tour de force.** One 7702-batched user operation: withdraw multiple Tornado notes, deposit ETH into Aave, borrow 300 DAI, shield the DAI back into Tornado — gas paid entirely from the withdrawn shielded ETH so no linked account ever touches the flow. On-chain you see Tornado → DeFi → Tornado and nothing else. Previously "all you could do was relay and withdraw."
- **Wallet of Last Resort.** If Infura, indexers, and every centralized convenience vanished, you should still be able to interact with Ethereum L1 "easily and well and with a pretty good UX" — reconstruct everything from a bare RPC node; with account abstraction in the native mempool, maybe not even that. The old trade-off (mass-adoption slick vs. real crypto underneath) is dead: "now you can have your cake and eat it too," because software complex enough to avoid the trade-offs is cheap now.
- **Smart-contract devs don't know cryptography — and it's fine.** She was "super surprised" that smart contract engineers often can't implement ECDSA. AI now lets anyone dive that deep, faster than her hand-rolled-Python route.
- **Her AI workflow is deliberately unfancy.** Cursor, colloquial plan-first prompting, "just trying to get it all out and then we can refine as we go." Self-described not-forefront — while shipping the most agent-ready wallet in the ecosystem.

## Lessons learned

- Do it by hand once, then delegate: "You gotta do it manually first, and then it feels so much better when you let the agent rip." (Austin)
- Expose your SDK as a CLI early — fastest proof it works, and agents get an interface for free. Then hand the agent the wiki (kohaku wiki on gwei.domains) as its docs.
- Keep the agent non-broadcasting. Construction and verification are automatable; the signature stays with the human.
- Pay gas for the whole private operation from the shielded withdrawal itself — a linked gas account is a leak.
- Aggregate balances by default; hide EOA-level detail behind a verbose flag.
- Court the already-converted first: everyone who's aligned and *still* not using privacy tools is your adoption gap.
- Denominate deposits in fixed note sizes (1.2 ETH → 2×0.1 + 1×1) — anonymity sets live in standard denominations.

## Best quotes

- "But you have to be very persistent. You have to put all these things together to do it by yourself today. And that makes it sort of prohibitive for most normal users, even users who know all of those things." — κασσάνδρα.eth
- "I'm a cypherpunk but I'm also extremely lazy." — slop.atg.eth, delightedly repeating Cassandra's one-liner
- "This helper bot, it can't broadcast anything. It just under the hood does these non-interactive calls to the CLI to figure everything out and check it's going to work, and then it just says run this." — κασσάνδρα.eth
- "Exactly, if someone follows the funds, they'll know that this person sent it, but they'll have no idea to who because they'll have sent it to a fresh, random address." — κασσάνδρα.eth
- "I have them right here and I'm still pulling up my Rainbow wallet, and it's probably talking to Alchemy, and I'm an idiot." — slop.atg.eth (three nodes on his desk, wallets still on Alchemy)
- "So I believe all wallets should work this way." — κασσάνδρα.eth (on stealth addresses)
- "But now you can have your cake and eat it too." — κασσάνδρα.eth (mass-adoption UX and real crypto, no trade-off)
- "Not very cypherpunk of us, but this is how you do a demo." — slop.atg.eth (seed phrase on stream)

## Contrarian / surprising takes

- Most smart-contract engineers can't implement the basic cryptographic constructions their contracts depend on — a working ECDSA understanding is rarer in the industry than outsiders assume.
- The privacy wallet's best UI might be no UI: a raw CLI plus an agent beats years of browser-extension UX work.
- Running your own node is necessary but not sufficient — the RPC *query pattern* is the bigger deanonymizer than the missing node, and even node-owners (Austin, three nodes deep) leak through convenience wallets.
- Sepolia has higher gas prices than mainnet; Austin's response is to skip testnets entirely — "I do it live" (put $20 into Railgun on mainnet mid-show).
- Tornado Cash treated matter-of-factly as composable DeFi infrastructure on an EF-adjacent live stream — withdraw, lend, borrow, re-shield, atomically.

## Stories & anecdotes worth retelling on stage

- **The poker-bot origin story:** twenties, self-taught, wanted a bot that plays poker by itself — found Bitcoin "because of really sketchy poker Bitcoin sites," then refused to use a wallet: wrote the transaction payload tool herself in Python, pasted raw hex into a website, and fell down the ECDSA rabbit hole. That DIY route made her assume *everyone* in Ethereum knew the cryptography — they don't.
- **Seed phrase on stream:** creates the demo wallet live, seed phrase fully visible — "not very cypherpunk of us, but this is how you do a demo."
- **The three-idle-nodes confession:** Austin, evangelist for run-your-own-node with three of them physically next to him, admits his daily wallets still talk to Alchemy — the perfect illustration of her friction thesis.
- **The atomic demo:** claim slop.gwei, publish the stealth inbox on-chain in one batched user op, receive at a stealth address, then Tornado → Aave (lend 0.19 ETH, borrow 300 DAI) → Tornado in one synchronous user operation. First attempt dies on a gas spike ("Sepolia actually has higher gas prices than mainnet"), retry lands. The receiving address's entire history: out of Tornado, into DeFi, back into Tornado.

## Tools & workflow

- **Kohaku CLI** (v0.0.5, EF) — wraps the Kohaku SDK; Railgun, Privacy Pools, Tornado Cash, ERC stealth addresses, TorJS for network anonymity; 7702 batched user ops. Wiki walkthrough for humans *and* agents.
- **Kohaku helper CLI** (unpublished) — Ollama-backed local bot that composes commands via non-interactive CLI calls; cannot broadcast.
- **client.buidlguidl.com** — Austin's one-liner for running your own node (the software is easy; the hardware is the barrier).
- **EF REEDS team / private information retrieval** — the coming privacy-preserving RPC for everyone who won't run a node.
- Her editor stack: **Cursor** plus frontier models, colloquial plan-first prompting; Ollama locally for the wallet helper specifically.
