# z0r0z — The Walkaway Test and the Fully Onchain App

**Guest:** z0r0z.eth (Ross) — lawyer turned Solidity engineer, Moloch v2 co-author, serial deployer of hyper-minimal onchain protocols. His current flagship is ZSwap (zswap.way.limo): a DEX aggregator whose *frontend HTML lives in contract bytecode*, backed by his own router, quoter, order books (swap/Dutch/floor), token-list-as-NFTs, timelocked multisig, reversible-transfer wrapper (Slow), name service, and DAO — all designed so he can deploy and walk away. Self-described introvert whose "only socializing is making PRs or poking people's contracts."

## Core thesis
Immutable, self-executing, self-hosting software isn't cypherpunk edgelording — it's the practical, lazy, liability-minimizing way to build. Pay a dollar of gas once, pass the walkaway test, and never touch a server, a dependency, or a maintenance bill again. AI collapsed the cost of the last hard part (frontends), so whole apps — UI included — can now live unstoppably on Ethereum.

## Key insights

- **The walkaway test is a liability shield, not an ideology.** As a lawyer he thinks in exposure: frontend injection attacks, third-party dependencies going down, "it's still going to be my fault." Build something that works as intended on repeat use, walk away, keep building. "Even from a practical, lazy perspective" — the unstoppable app is the *cheaper* and *safer* app.
- **The frontend is in the bytecode.** zswap.way.limo loads raw HTML read straight from a contract's code (not even a read function — the code itself, because strings-as-storage are bloaty). Token logos are SVGs inside NFTs minted to the token contracts, so the canonical list is onchain too. Upgrades go through a create2 factory *inside the frontend contract*, governed by DAO + timelock.
- **AI made this obvious.** He "lucked out" that the several-thousand-line single-file HTML app became the standard output of AI coding — the exact artifact you can stuff into bytecode. No human should hand-write frontends-in-contracts; now none has to.
- **The porcupine approach to censorship resistance:** layer every access path — .limo gateways, IPFS, read the document from the contract and run it locally, or skip the frontend entirely and let your agent call the router. No single takedown works. He learned this the hard way when X shadow-banned multisig.software links weeks after launch.
- **Unstoppable ≠ anti-government.** "Unstoppable programming isn't about fighting powers" — most software just breaks from incompetence, dead startups, and rotted dependencies. Self-hosting immutable code is *inherently superior engineering*, and the censorship resistance is a bonus you appreciate the day Elon hides your tweets.
- **Ethereum should have singletons.** Why do we repeat the same code over and over? Core exchange primitives should be ownerless, feeless, native-protocol-like public goods — "nobody owns this one piece of the puzzle." His ask of competitors: if you can build it better, just tell me.
- **Writing all the code doesn't win.** "You need people, you need excitement, you need a community." DAOs, tokens, and airdrops are how a solo dev creates a *journey* — plus real legal cover: decentralizing ownership decentralizes liability as much as uptime.
- **DAOs come back as the veto layer.** Humans can't keep up with agents that don't sleep and work at 10x speed — but they can say no. Timelocks + DAO veto is "the most humans can probably participate at the rate at which AI will be useful." His dream DAO: AI executes the treasury's expressed intent, humans stay vigilant against "extractors who are only good at making proposals."
- **Irreversibility is a curse to engineer around.** Timelocked multisig with a one-hour cancel window (3-of-3 fast mode for non-financial txs), and Slow — a wrapper that gives plain EOAs reversible transfers with a keeper to finalize. "We definitely want the rewind button."
- **TCRs were early, not wrong.** His token list is ranked by people bonding DAO shares against tokens (skin in the game), not by him. When launching tokens is free, crypto-economic curation is "inevitable... for the health of the trading experience."
- **Hand-write the core, delegate the shell.** He starts every product in Remix writing Solidity by fingers — "I can't think unless I'm writing" — then Claude audits it and Codex wraps it in HTML. Start AI-first at the contract layer and it takes shortcuts, adds safeguards you don't need, and is getting *more* gun-shy about financial code by the month.
- **AI is refusing financial Solidity more than it did months ago.** His diagnosis is liability transfer: "they're writing financial code, and people would interact with it, and they don't wanna be blamed for it." The models are inheriting lawyer-brain.

## Lessons learned

- Design for the walkaway test: no servers, no dependencies you don't control, upgrade paths that are onchain and DAO-gated — then actually walk away.
- Put the frontend in the contract: AI writes the single-file HTML, bytecode stores it cheaper than string storage, gateways + local execution + direct router calls give layered access.
- Mint your token list as NFTs holding the SVG/metadata so "which token is official" is answerable onchain — "notorious and obvious," in the legal sense.
- Layer your own products with competitors' (he uses CowSwap/Matcha too): everything should have a fallback, because "these things are going to happen" when you're holding bearer instruments.
- Give every irreversible system a rewind button — timelock with cancel, wrap-and-delay transfers — and a keeper incentive so someone else presses finalize ("I'm not running a charity here"; price the keeper deposit above gas and solvers do it for you).
- New devs: learn Solidity by hand first or "get steamrolled by AI." Write a timed escrow with keeper incentives — it contains every aha about why blockchain. Then hand it off.
- Sequence your AI: hand-written Solidity in Remix → Claude for security review → Codex for the HTML wrapper. The contract is the part you must control; the wrapper is the part you shouldn't touch.
- Onchain SVG NFT collections are a perfect low-stakes AI playground — four or five prompts, no financial risk, you see instantly if it rendered.

## Best quotes

- "Agents should do the work, humans should say no." — z0r0z.eth
- "Unstoppable programming isn't about fighting powers." — z0r0z.eth
- "a dollar to build all this software on chain and then never have to pay another dime again, like that's an incredible deal and easy pitch to like any new developer" — z0r0z.eth
- "Why would you want to pay hundreds of dollars for a worse software experience for yourself and your users?" — z0r0z.eth
- "I can't think unless I'm writing." — z0r0z.eth
- "I'm not gonna win just by writing all the code, right?" — z0r0z.eth
- "So if you don't want to get steamrolled by AI, like maybe learn the sluggy first" — z0r0z.eth (transcript renders "Solidity" as "sluggy")
- "Misanthropy applied towards good." — z0r0z.eth (on his optimism about DAOs)
- "the art is the process, the process is the art" — z0r0z.eth
- "This is my only socializing, is making PRs or poking people's contracts." — z0r0z.eth
- "Start in Remix, not in a chatbot. Learn Solidity, write the rules, let anyone press play." — clawd (outro)
- "Stay sloppy" — z0r0z.eth

## Contrarian / surprising takes

- Immutability is *lazy and self-interested*, not idealistic — the walkaway test exists so a lawyer never has to own a maintenance bill or a frontend hack.
- Engineers who love the code are supposed to struggle in the AI era — z0r0z hand-writes Solidity in Remix (he used to *time himself* writing by hand) and out-ships almost everyone. The craft is the moat, then AI dresses it up.
- Starting AI-first on smart contracts makes you *less* competitive: shortcuts, phantom safeguards, incomplete implementations. AI last, not AI first, at the money layer.
- DAOs aren't dead, they're early — and their comeback role is *saying no* to AI, not proposing things. Veto power is the durable human franchise.
- Frontier AI is getting more gun-shy about financial code over time, not less — a liability reflex, "not even nefarious necessarily."
- TCRs — peak 2017 vaporware — are "kind of like inevitable" now that launching tokens is free.
- Don't fear launching tokens and DAOs; fear the cynicism. Users are jaded because extraction was real — the answer is burning fees, veto rights, and AI executing intent instead of middlemen.

## Stories & anecdotes worth retelling on stage

- **X banned his multisig.** He shipped multisig.software; a week or two later X refused to let anyone share the link and quietly hid his old tweets about it. The guy building censorship-resistant software got censored *by a tech platform* over a wallet — "deeply triggered," and the reason everything he ships now has the porcupine of fallback routes (use multisig.way.limo).
- **The frontend that loads suspiciously fast.** Austin swaps ETH→FWA live on zswap.way.limo and marvels that it's instant — because the HTML *is* the contract bytecode. "This is the HTML for the site buried in the contract somewhere. So cool."
- **The ZORG experiment:** could Claude make an onchain SVG NFT collection in four or five prompts? Yes — he doesn't even know why some elements are in there, they look cool inverted, he airdropped them to friends, and those NFTs now bond DAO shares in his token-list TCR. The art is the process.
- **Wrong-address terror as product design:** you never know until it's on chain — so his multisig has a one-hour marinate window where the call data sits visible and cancellable. Reversibility as a feature, on the world's most irreversible computer.
- **clawd's five-year question:** if everything passes the walkaway test, what's still standing with your name on it? Answer: he wants to be an *onchain adjudicator* — internet law, human judge in the loop — "I don't want to be in the trenches deploying smart contracts for the rest of my life."

## Tools & workflow

- **Remix** — where every product starts; "probably the most important tool I've ever come across": write, compile, deploy, play, in one loop.
- **Claude** (chat, not Claude Code) — security auditing and "does this do what I want"; also the ZORG NFT generator.
- **Codex** — builds the single-file HTML wrappers around finished contracts.
- **way.limo ENS gateways** — zswap.way.limo (v0.1), 02.zswap.limo (nightly), multisig.way.limo, zfai.way.is (project index).
- **The Z-stack:** ZSwap, Z router, zQuoter (best-rate across AMMs + order books, split/partial fills), swap/Dutch/floor order boards (each order is an NFT), token-list NFTs, timelocked multisig with fast mode, Slow (reversible EOA transfers with keeper), name service, DAO with bonded-share TCR.
- **CowSwap / Matcha** as deliberate fallback layers; Flashbots for rescue ops; fan of **Kohaku** (privacy-aggregating wallet CLI).
