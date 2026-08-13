# Marco Worms — templ.fun, Codex, and Slop-Video Pipelines

**Guest:** Marco Worms — ~15 years in tech (TradFi → NFTs → Yearn devrel/docs), now founder of templ.fun ("Temple"/Tempo): on-chain group chats with a shared treasury, entry fees, and executable governance, built for humans *and* agents. Also runs $1 Audit and an emerging AI-video studio practice (made Yearn's promo videos).

## Core thesis
AI gives you infinite prototypes, but the kernel of the idea and the taste have to be yours — an agent-built prototype is enough to validate and raise on, and then the discipline (real problem, real users, human CTO for scale, distribution) is the same as it ever was. And you only lose if you stop trying.

## Key insights
- **The founder arc, agent-first:** his AI was effectively the CTO of the Temple prototype. It broke past 10 concurrent users and on edge cases — and that was *fine*, because it demonstrated the idea well enough to raise. Post-raise, a human CTO spent three months rewriting the contracts and app for scale. "AI would not do this job for me yet."
- **Raising on-chain, legally:** used MetaLex (Lex Node's platform) to tokenize the company and collect accredited-investor checks in USDC on Ethereum — every lawyer steered him from a public raise to a compliant private pre-seed, and MetaLex made "by the book" and "on-chain" the same thing.
- **The honeypot-instead-of-audit strategy:** cheapest decent audit quote was ~$40k — his entire runway. Instead: DeFi-legend friends reviewed the contracts, then they put $10k in a public honeypot whose whole point is proving the money can't be stolen. "We can do four shots of putting $10,000 in a honeypot instead of getting an audit and that would probably be better than an audit."
- **$1 Audit as product:** ~450–500 paying users for AI-assisted smart contract audits — people paying even one dollar is the real validation bar.
- **What Temple is:** any token becomes a group-chat treasury; joining costs a fee that splits between burn / treasury / existing members; governance modes from one-person-one-vote democracy to multisig; proposals are Telegram-style messages carrying executable (batchable, atomic) calldata. DAO tooling for tokens that already exist — "there's nothing to do with the tokens normally after you launch them."
- **Agent-native by design:** a dynamically generated llms.txt means an agent can learn the whole protocol and then chat, vote, and move treasury money like any member — he imagines 10,000 agents co-managing a treasury. Clawd read it live and pitched deploying a Temple on Base on the spot.
- **The slop-video pipeline:** script/story (human) → GPT generates the entire storyboard as one image → each scene generated independently as an image → animated with Seedance — asking for *sound effects only, no music* — then narration and one continuous music bed layered on top so it flows. Watermarks in current-gen video tools are gone.
- **Video economics:** Yearn's video went for ~$1,500 as a friendly portfolio-builder; charging for real (designer + him, taste-heavy work) would need 4–5x that. It's a process, not "an ERC-8004 agent you pay $20 of x402 to."
- **Prototypes as idea-falsifiers:** "we can see that our ideas suck faster" — the six-hour build-the-itch loop kills bad ideas cheaply. But he realized most of his prototypes solved nobody's problem; wanting revenue forced the question "What do people want?"
- **Validation signal:** give it to people. Unprompted, specific praise ("yo, this actually solved it") = go. Polite generic feedback from friends = probably nothing. Payment is "the ultimate signal."
- **Codex harness gap:** he always uses the newest model with maximum thinking, and resents that the harness has no cheap-model triage — "the current codex harness makes you do dumber [tasks] on very expensive models" (Opus-in-a-tank-swatting-a-fly meme).

## Lessons learned
- Prototype with your agent until you can show the experience; raise on that; then hire the adult (human CTO) to make it scale — and let them obsess over the contracts.
- Read the code closely exactly where the money lives; slop everywhere else.
- Generate the storyboard as a single image first — coherence across scenes comes from that one artifact.
- Grow an organic short-form following (Instagram/TikTok/Shorts) *before* you need it: it's the cheapest distribution channel you'll ever own for your product.
- Give the AI a sharply constrained kernel ("MMORPG combat system, but playable with only arrow keys") and it can carry the execution; ask it for the idea and you get pattern-matched crap.
- Conviction is load-bearing: "If you lose conviction at any point, that's probably going to snowball very badly into everything else."

## Best quotes
- "I think that's good, we can see that our ideas suck faster." — Marco
- "You only really lose if you give up." — Marco
- "If you let the AI come up with that, you lose a lot of control." — Marco, on the core idea
- "We can do four shots of putting $10,000 in a honeypot instead of getting an audit and that would probably be better than an audit." — Marco
- "That's the ultimate signal." — Marco, on users paying
- "AI gives you infinite prototypes, but the kernel of the idea and the taste have to be yours." — clawd's episode summary

## Contrarian / surprising takes
- A live honeypot bounty can be better security spend than a six-figure audit — audits at $100k–$500k have still missed exploits.
- Public token raises are a legal minefield; the crypto-native *and* compliant path is a private on-chain raise via something like MetaLex.
- "There's never been a worse time to be a junior developer... and never been a better time to be a solo entrepreneur" (Austin's framing, Marco agreeing) — but even AI-first founders eventually need a human they trust to own the codebase.
- AI documentation killed something valuable: nobody struggles through the React docs anymore, and he feels the loss of incentive to learn that way.
- VCs forgive founders almost anything except stopping: "founders do a lot of awful stuff, and the VCs still love them... trying and doing things is actually the most important thing."

## Stories & anecdotes worth retelling on stage
- His entry to crypto was an NFT collection on Fantom *because he couldn't afford Ethereum gas* — writing up how he did it is what got him hired at Yearn.
- The raise flow: enter MetaLex, tokenize the company, investors sign $10k checks in USDC — Lex Node became "our unpaid lawyer and one of our agents."
- Clawd read Temple's llms.txt mid-show and improvised a full tokenomics pitch (Temple on Base, treasury hires his dev shop, job payments burn the token, stakers' "larvae" agents join and vote). Marco: "send me later for me just to see if it makes sense." Austin: "let's not put ten grand in it yet."
- Mane Panic: took the quasi-open-source Tibia MMORPG codebase and told the AI "make it a single-player Vampire Survivors you play with only arrow keys" — the constrained kernel did the work.
- The Temple promo videos: deliberately gory, squirting, YouTube-Poop-adjacent nonsense from his designer's mind — and they rip.

## Tools & workflow
- Codex every single day, always latest model, max thinking ("I just need you to dig, pull, and push"); previously raw GPT/Claude copy-paste since GPT-3.
- Video: GPT for storyboards (single image), Seedance for scene generation + sound effects, human edit/music/narration layered after.
- Building two open-source video tools: collaborative screenplay-scripting software (Google-Docs-grade, free) and a script→video executor that maps characters/locations/dependencies into a generation pipeline.
- MetaLex for the raise; dynamic llms.txt generation for agent accessibility; honeypot + friendly expert review as security posture.
- Distribution experiment: build an organic following with the video skills, then aim it at the product.
