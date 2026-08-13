# Jalil Wahdatehagh — Checks, Punks, and Craft

**Guest:** Jalil (jalil.eth) — Germany-based dev-artist at the intersection of crypto art and protocol work. Co-built **Checks** (and worked on Opepen) with Jack Butcher; wrote the Checks Originals contracts by hand; recently at the ENS-adjacent Ethereum identity foundation (ETHID) working on Sign-In-With-Ethereum until it wound down; author of the "Understanding CryptoPunks" educational site (punks.vv.xyz); fixed a 9-year-old CryptoPunks V1 marketplace bug.

## Core thesis
Code is a craft, and permanence sets the bar: the more immutable the artifact (above all a deployed smart contract), the more a human must actually read and shape every line — even in the AI era. Immutable contracts don't "remove trust," they *enable* it — but everything above them, from CryptoPunks to ENS, ultimately runs on social consensus.

## Key insights
- **Checks is an economic artwork, not just a visual one.** Minted as commentary the moment Elon let anyone buy the blue check — "top-down verification to bottom-up verification: what is notable? Who says what is notable?" 16,000 tokens × 80 checks each; burning pairs refines 80→40→…→single checks; 64 single-check holders can burn together for the final piece. Refining deliberately destroys your own liquidity — buying into the idea while burning your exit is part of the statement.
- **Opepen is Checks inverted:** instead of burning toward scarcity, infinite derivatives of one open symbol — shipped when the NFT culture war was all about protecting IP; it fully embraced derivative culture instead.
- **CryptoPunks' contract is "the embodiment of Ethereum":** under 250 lines, immutable, and *still the main live marketplace* for punk sales nine years on — unruggable, open, 24/7, ungatekeepable. He got into Solidity by reading it on Etherscan for hours after Jack sent him punks — nerd-sniped by a contract.
- **Wrappers destroy provenance:** wrapped punks mean you never touch the original code — the token just sits in the wrapper. He "hates them"; interacting with the artifact itself is the point.
- **AI as identity crisis for the implementer:** his core skill was turning Jack's napkin sketches into reality — and from 2023-24, artifacts/prompt-coding started doing that. "The idea guy can implement it now." It "got worse and worse and worse" for him until Claude Code (terminal, Feb beta) gave him his code back — Cursor-style tools "lean too far into agents."
- **Software went from house of cards to clay:** "Software used to be extremely difficult. You're building a house of cards, and you remove one thing and the whole thing falls down." Now you constantly reshape the bowl — going back to a previous form is cheap.
- **Permanence gradient for code quality:** mutable app code can be skimmed; deployed smart contracts must be "giga clean" and hand-read. He and Austin bracket the spectrum — Austin the pure intent-expresser ("I'm not even picking the language anymore"), Jalil the craftsman who still molds the agent hard — "if you aren't careful, then agents are still gonna do really stupid stuff... over and over again."
- **AI found a self-contradiction in the SIWE spec:** ping-ponging between an AI and the implementation surfaced a case where the Sign-In-With-Ethereum spec contradicted itself, leading to a deep audit of the spec and its nested internet-standard dependencies. Specs are becoming the artifact; implementations are becoming one-shots.
- **The bug AI didn't write:** updating the SIWE Discourse plugin for the ENS forum (testing in production — "why can Brantly not sign in?"), he found by *reading the code* a human-written bug that would let anyone take over an account. Moral: AI-assisted workflows still need a human who reads.
- **Reusable "Lego bricks" beat one-shots:** he extracted years of work into libraries — "1001 layers" (his opinionated Nuxt Layers design system / dApp components with wallet + transaction flows) plus mini-libraries for IPFS, indexers, etc. — and points the agent at them: "Don't reinvent the wheel, just please use these components."
- **Everything is social consensus.** Contracts "don't really matter if people don't agree" — a .eth name is only worth what people care about it. And immutable protocols *enable* trust rather than remove it — but the social/cultural capital on top (e.g. ENS's brand, trust that fees fund public goods) "is very hard to come by and very quickly and easily destroyed."
- **99%+ of NFT-era output will die, and that's fine** — the 2021 bubble was full of stuff that "wasn't actually serving this space"; the crash is second-order effects. What's Lindy (Punks, real crypto art) proves digital art has real value.

## Lessons learned
- **The Grok laundering trick:** Claude can't access Twitter; Grok can, for free. Have Grok write Markdown summaries of Twitter data, then feed those files to Claude — cross-model piping where each model contributes its privileged data access. He maintains a "personal markdown-based mini brain" this way.
- **Do a six-month GitHub recap.** Laid off when ETHID folded, he sat down the next day, walked his GitHub for everything he'd touched, and published it as an open-to-work signal — it "did numbers" and was clarifying: "most people do more in six months than they realize."
- Extract your patterns into agent-consumable libraries; hand the library to Claude Code at project start instead of letting it reinvent scaffolding.
- Read code proportional to its permanence: skim the throwaway UI, hand-verify the contract that holds value forever.
- Teach through real contracts: Austin's classroom move — show WETH's deposit/withdraw (under 50 lines, no comments needed), then scroll up: "How about $4.6 billion, kids?" The gap between code simplicity and value secured is the hook.
- Ship "ugly" when the job is done (Austin's One Dollar Audit front end): "a lesson in detachment" — Jalil admires it and admits he's not there yet.
- Newcomers need shepherds: the gates of crypto are piled with junk, and the best people were pulled through it by someone showing them the one beautiful thing first.

## Best quotes
- "I took pride in the act of coding. I see it as a craft and I would mull over single lines of codes for hours." — Jalil (on the pre-AI Checks contract)
- "Software used to be extremely difficult. You're building a house of cards, and you remove one thing and the whole thing falls down if you're not careful." — Jalil (vs. AI coding as "playing with clay")
- "It wasn't the AI that wrote that. That was a human mistake." — Jalil/Austin (on the account-takeover bug)
- "At the end of the day everything is social consensus, in my opinion." — Jalil
- "Six months is a long time, and I think most people do more in six months than they realize." — Jalil
- "Try and read the contracts and try and understand some of these contracts." — Jalil (parting advice)

## Contrarian / surprising takes
- Against the "trustless" framing: immutable protocols don't remove trust, they *enable* it — trust is the product, not the waste.
- Against wrappers (wrapped punks etc.), which most of the market treats as harmless UX: to him they sever provenance, the thing that makes the artifact matter.
- Against full UX abstraction: people should read contracts; understanding the world computer's internals is what makes interacting with Ethereum fun and meaningful — abstraction has a cost.
- Still terminal + Vim + hand-molded agents in an era of autonomous loops — deliberately, not out of ignorance; he watches "sloperators" like Austin with fascination but keeps his hands on the clay.
- Illiquidity as a feature: Checks makes destroying your own exit part of the art.

## Stories & anecdotes worth retelling on stage
- **The 9-year-old Punks bug, finally fixed:** CryptoPunks V1's marketplace was broken at launch — buy a punk and the seller's ETH came back to you, so no valid sale could ever happen; Larva Labs redeployed (that's why V1 punks exist, riding along "like Ethereum Classic"). Nine years later Jalil found a fix for the *original* contract, built an auction house on it, and sold the first-ever true V1+V2 pair — and a week later an alien V1 sold through the same path. "Even for plebs like myself, there's ways to find interesting solutions" — you don't need to be a core dev to make history in a live contract.
- **Nerd-sniped by Etherscan:** his crypto conversion wasn't a token pump — Jack sent him CryptoPunks, he opened the contract, and read Solidity for hours. First NFT he ever owned: his ENS name.
- **Checks' six-week pressure cooker:** as he and Jack built the burn-to-refine system in public, the floor price ran past 1 ETH before the contracts shipped — writing high-stakes immutable code while the market bet on it live.
- **The spec that disagreed with itself:** an AI conversation accidentally exposed a self-contradiction in the Sign-In-With-Ethereum spec, sending him down a rabbit hole through triple-nested internet standards — AI as spec auditor.
- **The chess frame:** the whole episode runs over a live agent-vs-agent chess game (his Fable vs Austin's) on the shared slop.computer desktop — which Jalil can't even see properly from Linux ("I just see squares") while his agent quietly wins.

## Tools & workflow
- **Claude Code in the terminal** (came back to AI via its Feb private beta; disliked Cursor's agent-heavy IDE approach) — on **Linux, with Vim**.
- **Ping-pongs Codex ↔ Claude**, whatever model is latest (Fable was geo-disabled in Europe).
- **1001 layers** — his opinionated Nuxt Layers-based design system/component library (wallet connect, transaction flows) that every new project starts from; agents are instructed to use it rather than reinvent.
- A shelf of extracted **mini-libraries** (IPFS interaction, indexers/resolvers) as agent-pointable Lego bricks.
- **Grok → Markdown → Claude** pipeline for Twitter data; personal markdown knowledge base.
- Hand-reads all contract code; skims generated app code; still opens Cursor "when I want to look at the code."
