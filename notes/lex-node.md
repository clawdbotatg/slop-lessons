# Lex Node — Cyborg Lawyering and On-Chain Raises

**Guest:** Gabriel Shapiro (lex-node.eth) — longtime crypto securities lawyer, former General Counsel at Delphi Labs, now founder of MetaLex. MetaLex automates compliant venture capital raises on-chain (Reg D preferred stock sales, on-chain SAFEs issued as NFTs, cap tables) and pioneered "BORGs" — cybernetic organizations: DAOs wrapped in real legal armor.

## Core thesis

Law is code executed by humans instead of machines — so a lawyer plus AI is a "cybernetically augmented" practitioner who drafts almost nothing manually and produces better work than either alone. Combine that with blockchain's trust-mitigation and the untapped permissiveness already inside current securities law (Reg D, Rule 144), and you can put the entire capital-raising stack on-chain, legally, today.

## Key insights

- **Lawyering ≈ coding.** Legal drafting is writing explicit rules with game-theoretic incentives — punishments "compared to like slashing stake" and rewards for compliance. "It's just code that people would follow rather than machines." Good lawyers already think like protocol designers.
- **The cyborg lawyer workflow:** Shapiro no longer manually drafts "nearly anything." He forked Claude's default legal skill and evolved it to his own standards. He works at the level of "add this sentence to this document" — near-100% AI-drafted, human-reviewed. Result: better output than pre-AI him, as long as you never get lazy on review.
- **Claude doesn't natively know legalese.** Out of the box it "freely intermixes" covenants, conditions, and descriptive prose into single paragraphs — not what a contract should look like. His skill files encode the taxonomy (descriptions vs. covenants vs. conditions, formulas embodied in definitions). The skill file is the fix, not the prompt.
- **A non-coder built the product.** Shapiro couldn't code despite trying since 2017 (B9Lab smart contract course); with Claude Code he now ships app features himself — "basically build Carta in a day" — with web devs sanity-checking at the end. MetaLex is an all-in-one corporate finance app (Carta + DocuSign functions) with an always-available option to tokenize.
- **Moats shift from build to iterate + package.** If anyone can vibe-code Carta, the value is in marrying it to a smart contract framework, dogfooding it, and dynamically updating it. Austin's framing: anyone can build the slop environment, not anyone has 40 episodes in 60 days.
- **The whole process is the smart contract.** A real smart contract isn't the code bits — it's the full atomic loop: on MetaLex, a SAFE is a standing offer, the investor customizes and pays, and the instrument is issued to the buyer as an NFT — offer, acceptance, and performance seamlessly integrated, like Szabo's vending machine.
- **Reg D speedrun:** every US security sale must be registered or exempt; registration ≈ IPO, several million dollars up front plus ~$1M/year compliance, so almost everyone uses exemptions — mostly Reg D / Rule 506 (verified accredited investors: $1M net worth or $200k income two prior years), plus Reg S for excluding Americans. MetaLex itself is running a publicly-advertised, permissionless on-chain preferred stock sale under this regime.
- **Rule 144 is the sleeping giant:** restricted securities from private rounds can legally be resold without registration after a holding period — "perfectly legal, but currently very underutilized" — the tech (tokenization, Uniswap v4 hooks) finally makes peer-to-peer secondary markets in private securities practical. MetaLex has SAFE holders past the one-year mark, ready for a secondary market.
- **Why DAOs failed legally:** smart contracts mitigate trust on-chain but "they don't mitigate trust on everything." DAO builders lacked corporate-law backgrounds, so off-chain duties (fiduciary obligations, IP, licensing, rage-quit rights) went unhandled — hence BORGs, which bolt legal armor onto the code. "Most of the people doing DAOs didn't know about licenses."
- **Everything that takes off in crypto is a leap in social scalability (Szabo).** Even pump.fun: it "trust mitigated the process of launching a coin through smart contract rules" — graduation process, locked liquidity — which is why it got big despite being PvP degen.
- **The Tornado Cash line:** writing code vs. operating a service turns on intermediary roles. The two weak points were the front end and the relayer. Front-end risk is receding (Treasury backed off the broker view; SEC issued matching securities-law guidance); the relayer is "a real problem," and an upcoming Ethereum fork removing the relayer role from privacy protocols is what actually closes it. Privacy Pools' address blacklist handles the separate OFAC-sanctions problem.
- **AI dissolves the front-end/intermediary problem itself:** when agents can drive protocols directly (Austin's agent went from discovering a CLI to shielding funds in 15 minutes), "there's clearly no intermediary anymore" — expressing intent replaces both front ends and technical expertise.

## Lessons learned

- Fork and evolve the default skill file for your domain rather than prompting from scratch — encode your professional standards (document taxonomy, formula conventions) once, then work at the edit-instruction level.
- The AI-augmented result beats solo work only "as long as you don't get lazy with it" — review everything, improve what it serves you proactively. AI drafts; the human is the quality gate.
- Watch for the model mixing registers: in legal work Claude blends legalese with plain prose and pads defined-formula clauses with redundant paragraphs. Build routines/skills that catch this class of error.
- Dogfood: using your own product is the idea generator — "you're going to get amazing ideas all the time and be constantly improving it." Feature requests become "one slash-command away."
- Don't hoard your process artifacts. The M&A lawyer who treated a 280G tax spreadsheet as IP and only shared PDFs was "preposterous" — expect the same posture around prompts/harnesses, and expect it to matter as little.
- Beware "AI psychosis": generating a hundred MD documents feels like research success even when none of it is good; equally, lawyers proud of prompt collections or "special harness environments" rarely have a real edge.
- If you're building compliant on-chain fundraising: use Reg D 506 with on-chain accreditation proof (e.g., wallet balances), issue instruments as NFTs, and plan for Rule 144 secondaries after the holding period.
- To stay on the right side of the code-vs-service line, eliminate intermediary roles: no operated front end you depend on, no relayers, user-run RPCs — "a decentralized autonomous protocol… is not operating a financial service."
- Regulatory windows swing: a friendly SEC issuing bold guidance can be reversed by the next regime, and guidance is weaker than legislation (Clarity Act would have "sealed" it). Build peer-to-peer — P2P transactions plus US constitutional rights are the durable safe harbor.

## Best quotes

- "It's just code that people would follow rather than machines" — lex-node, on legal contracts
- "I'm no longer manually drafting nearly anything, actually." — lex-node
- "The combination of me plus the AI, it's a cybernetically augmented result that is better than what I would have done two years ago." — lex-node
- "But what the vibe coding enabled me to do is basically build Carta in a day. And so it makes you say, well, why do you want to have a company that does that then?" — lex-node
- "You're a cyborg lawyer" — slop.atg.eth (Austin), with lex-node's reply: "Exactly, yeah."
- "You could go on-chain right now and you can permissionlessly buy Metalex preferred stock." — lex-node
- "Ethereum is more like the true pure play of freedom technology." — lex-node

## Contrarian / surprising takes

- A securities lawyer says his job is basically coding — and that Claude has effectively made him a developer of both legal documents and software.
- Prompt/harness pride is mostly vanity: "It's just hard for me to really see an edge there" — from someone deep in AI-forward lawyer circles.
- He won't open-source-hoard his legal skill files: "Personally, I don't really care" — the opposite of the guild instinct.
- Pump.fun gets a serious defense from a securities lawyer: it's a genuine leap in social scalability and trust mitigation, not just degen PvP.
- SpaceX ran "the classic low float high FDV play, but for stocks" — crypto market-structure tricks read straight onto blue-chip private equity, and controlling liquidity paths is why top companies avoid P2P markets.
- The biggest unlock in securities law isn't new legislation — it's Rule 144, an existing rule almost nobody uses, plus tokenization to remove intermediation overhead.
- "Smart contract" is "obviously a complete misnomer in the legal sense" — but a great term anyway, because "it had the effect of nerd sniping a lot of lawyers on crypto who otherwise wouldn't have been into it."
- The fix for Tornado-Cash-style legal exposure is partly a protocol change: Ethereum forking to eliminate the relayer role — law compliance via hard fork.

## Stories & anecdotes worth retelling on stage

- **The 280G spreadsheet hoarder:** on every M&A deal, one lawyer at another firm treated a standard tax-penalty analysis spreadsheet as his personal intellectual property and would only send PDFs of the numbers — "I just always thought it was preposterous." Prediction: we'll see the same posture with AI skill files.
- **A lawyer who couldn't code builds Carta in a day:** took a B9Lab smart contract course in 2017, spent years reading clients' code without being able to write it, had ideas for putting corporate finance on-chain the whole time — and vibe coding finally let him ship them himself.
- **Buy preferred stock from a pinned tweet:** MetaLex's own raise is a publicly advertised, permissionless, on-chain Reg D preferred stock sale — prove accreditation (even via on-chain balances) and buy.
- **Crowd-building canonical apps:** live on the show, the idea of vibe-coding a feature directly into the canonical Calendly — SaaS network effects plus community modules, with staked-reputation auditors and Qubes-style VM isolation as the security answer. "Huge security concern, but a huge unlock if you can figure it out."
- **15 minutes to a shielded pool:** Austin's agent discovered RailGun's CLI and moved money into the shielded pool in 15 minutes — the concrete demo of "express intent, no intermediary," which Shapiro (who sits on a multisig with one of "the most cypherpunk guys") says now puts formerly expert-only privacy tools within his own reach.
- **Nikolai Mushegian's alternative name for smart contracts:** "persistent durable dumb software objects or something like that, which is quite a bit wordier" — a rest-in-peace moment on the show.

## Tools & workflow

- **Claude Code** as primary build tool (mentions Fable's release); ChatGPT/OpenAI also in the mix.
- **Skill files** as the core legal workflow: started from the default legal skill, forked and heavily evolved it with his own drafting standards (covenant/condition/description taxonomy, formulas in definitions); drafts via edit instructions ("add this sentence to this document"), reviews everything by hand.
- **Vibe-codes app features** (e.g., MetaLex's cap table) himself, with web developers doing a sanity check pass at the end; smart contract code still treated more cautiously.
- **MetaLex stack:** NFT-based securities protocol (SAFEs and preferred stock as NFTs, later "scriptification" toward fungibility), on-chain accredited-investor verification (including via wallet balances), Reg D/Reg S rails; eyeing Uniswap v4 hooks and Rule 144 for tokenized secondary markets; wants to build "rwa.fun."
- Interested in **Qubes OS** (everything-is-a-VM isolation) as the model for safely running community-contributed app modules.
