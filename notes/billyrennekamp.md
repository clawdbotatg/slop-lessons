# Billy Rennekamp — Sloperating, On-Chain Art, and Crypto Taxes

**Guest:** Billy Rennekamp — OG on-chain artist/builder (Clovers Network, 2017 — Reversi-based "proof of work" NFT mining that predated the NFT boom; he called them "unique digital assets" before ERC-721), Kudzu, on-chain gaming studio TriFle (now pivoting to a studio/experimental model), currently building an always-on, agent-powered crypto tax tool. Runs a heavy local-model + tmux + Telegram agent stack from Berlin.

## Core thesis

We're in a golden age of building: one person can now one-shot replacements for entire SaaS products, and the scarce skill is no longer writing code or even writing perfect specs — it's iteratively communicating what you want and knowing when it's good enough. Enjoy it now, because something (an AI bubble pop, subsidy collapse, centralization) will end this window — but the exit dividend will be great open-source models we get to keep.

## Key insights

- **The spec era is already ending.** In late 2025 the top sloperator skill was writing a precise spec; months later it's conversational — "I have an idea and I whimsically just start tossing it and we kind of spec it together as we go" (Austin), and Billy agrees: knowing everything you want up front "feels totally impossible." Perfectly describing a product IS a form of programming, and that skill may be automated away too.
- **Don't review the code.** Billy fully crossed over: since the Fable/Opus-4.5-era capability jump he no longer reads generated code, and he stopped ending up "surrounded by trash and stuck." He wrote a public thread about needing to stay on top of the code, then completely reversed his position within three months.
- **You still level up as a programmer without writing code** — talking to agents about shaping, architecture, and where to start filled gaps in his (non-formal-CS) knowledge of programming paradigms. Biggest wins come when he can push back on an architectural decision.
- **Software parity is cheap now:** one-shot gets you ~80% of a SaaS clone (Calendly, baby tracker, language flashcards), then "two, three, four, five, six more prompts and you've got parity."
- **Distribution, not building, is the bottleneck.** TriFle's on-chain games were fun but "doesn't feel like there's a need for this" — the hard part was go-to-market ("now they have to make a TikTok and dance"), which drove the pivot toward problems that need solving.
- **Crypto taxes should be the EASIEST taxes** — everything is on-chain and verifiable — and it's an ethical debt: builders shipped products then told users to figure out their own tax situation, and people went bankrupt from gains at the top plus losses they couldn't offset.
- **LLM as last resort, rules as data:** for the tax engine, don't fine-tune a model (diminishing returns; tax code is already in the training data). Compile rules as editable data, handle 95–99% of tax events with deterministic logic, and send the LLM only at unresolved edge cases — and have the bot fold what it learns back into the rule corpus so the same situation never needs an LLM twice.
- **Taxes as a real-time agent, not an April panic:** always-on, warning you *before* you sign — which wallet to spend from, what the tax burden of a transfer will be — because the same asset in two wallets has different tax realities.
- **Security by environment, not by permission:** instead of restricting the agent, he cleaned up his home directory — moved private keys out, moved to smart accounts — "make the place he has access to less dangerous."
- **NP-hard search problems are a design goldmine:** Clovers used Reversi as a hash-like function (easy to verify, hard to search) — the same shape as proof-of-work, Paradigm's optimization arenas, and now agent evals. "Easy to verify, hard to search" is the perfect substrate for competitive agent entertainment.
- **Coordination games are the bull case for on-chain games:** all the elements of gambling without the legal hurdles, plus the social layer gambling lacks (poker as coordination game — you play the players, not the math). Two real blockchain app categories: notary and escrow.
- **Open-source endgame worry:** China subsidizing open models is a Standard-Oil-style race to the bottom — consumers win short-term, but unsubsidized labs (Anthropic/OpenAI) may not compete long-term against nation-state backing.

## Lessons learned

- Stop reading generated code; spend the attention on architecture disagreements and direction instead — that's where a human still adds the most.
- Don't try to get it right the first time — it's neither optimal nor viable. Caveman prompt → 80% → a handful of targeted follow-ups.
- Build your own SaaS replacements when you hit a rule the product can't express (Austin's custom Calendly); parity is a few prompts away.
- Planning-doc workflow: one planning document per project, a new doc per feature, and every new session starts with "get familiar with the planning doc, add the relevant context."
- Git worktrees per feature, with **symlinks for shared resources** (env vars, big data files like a gigabyte of images) so agents don't rebuild them per worktree; GitHub Project Board for issue tracking.
- Auto-research loops need a precise success/eval statement up front ("iterate until you reach it") plus a human in the loop nudging 80% → 85% → good enough — otherwise it's the paperclip problem.
- Front your agent with a fast cheap model (Haiku) that replies instantly, routes to the right model, and tells you a smarter agent has been dispatched — perceived latency matters.
- Use rules-as-data rather than code for domains that change constantly (tax law) so updating means editing data, not shipping code.
- Solo/agent-built projects need less git hygiene — massive commits are fine when no humans are collaborating; a quiet GitHub heatmap no longer means not shipping.
- Run local models for the sketchy/private stuff (128GB unified-memory Mac + OMLX); note-taker-style tools that would ship every meeting to someone's server can be one-shot as fully local software.
- Keep cortisol low with agents — explain what went wrong instead of yelling (Austin's practice; Billy picks a voice he feels "least bad getting mad at").

## Best quotes

- "The irony of crypto is that in theory it should be way easier than traditional taxes because all the information is there." — Billy
- "I'm fully on board now with don't review the code." — Billy
- "The ability to so completely describe the needs of a product is a form of programming, it's coding" — Billy
- "It's the paperclip problem. If you say make me more paperclips and the robot comes back with the deconstruction of the universe in order to maximize the paperclips, then you haven't been very precise." — Billy
- "I choose like a British man because it's the voice that I feel least bad getting mad at." — Billy (on AI voices)
- "It's happened to me. It's happened to everybody I know." — Billy (on getting wrecked by crypto tax mechanics)

## Contrarian / surprising takes

- **This golden age will end** — and the reason won't be obvious in advance. "Enjoy it right now... It'll be like, oh, this is useful and like, no, it's not. You missed the big picture so hardcore." Best case: the AI bubble pops, subsidies vanish, and the residue is great open-source local models.
- **Don't fine-tune for vertical domains** — against the trend of "train a custom tax LLM" (a previous slop.computer guest was doing exactly that), Billy argues weight-shifting on data already in the corpus has diminishing returns; robust automation + rules-as-data + occasional frontier calls wins.
- **He publicly reversed himself in 3 months** — from "you have to stay on top of the code" (wrote a whole thread) to "don't review the code." Rare public flip-flop framed as capability-driven, not fashion.
- **The "iPad kid" self-diagnosis:** vibe coding pre-Fable was turning him into a child — instant-gratification-dependent, powerless and resentful the moment the stack broke in a way the model couldn't fix itself.
- **Hardcore coders may be leveling up the least right now** (Austin's framing, Billy's lived example) — idea people who can operate on both sides gain the most.
- **Consumer on-chain entertainment might be a non-need:** "Do people need more ways to waste their time on chain or be entertained with money? Maybe, but maybe not" — from someone who spent years building exactly that.

## Stories & anecdotes worth retelling on stage

- **Clovers becomes profitable again after 8 years:** the 2017 Reversi-mining dapp was once the #1 gas-consuming dapp, died when gas spiked in summer 2019 (mining earned $2–5 per clover), and now that gas is low again the still-running bonding curve means you can actually mine clovers profitably in 2026. Smart contracts are forever; the website's gas-price widget in the corner is the tell of a frontend frozen in time.
- **"UDAs instead of NFTs":** Billy was hacking on unique tokens when CryptoPunks launched and was calling them "unique digital assets" — "If I had gotten my shit together faster" the industry might say UDA instead of NFT.
- **The baby-name prediction market:** new dad builds a prediction market on the most popular US baby names — the Social Security Administration is the oracle, it resolves on Mother's Day every year, and insider trading is the feature: "That's where you get the good data."
- **The pre-show wallet-drain bit:** Billy asks Austin a verification question before opening the "sketchy link" (the answer: mining clovers in a Berlin workshop), then jokes "Now that I've connected my wallet" — "Yes, it's all gone. Mostly."
- **Tmux empire via Telegram:** every new terminal auto-opens as a tmux session ("you have 15 other tmux sessions open right now"); from a walk with the baby he Tailscales in from his phone, and a modified Claude Telegram plugin maps each Telegram topic to its own tmux session — "what are the last ten tmux sessions I worked on and what's the status of all of them?"
- **American Gladiators for agent evals:** riffing with Austin — benchmark arenas already exist (Paradigm's AMM/chess/shape-packing puzzles), they're just "missing the pizzazz personification"; picture a ripped gladiator with a tennis-ball machine gun, but the foam batons are gas-optimized AMM curves.

## Tools & workflow

- **Claude Code** as the main driver ("more trouble to switch at this point" vs Codex); previously leaned on Copilot for PRs/reviews, now mostly solo massive commits.
- **Planning docs** per project + per feature; sessions bootstrapped by pointing at the planning doc.
- **Git worktrees** per feature with symlinked shared resources; GitHub Project Board for tracking.
- **tmux everywhere** — auto-tmux on every new terminal; **Tailscale + Terminus** for phone access; **Telegram topics ↔ tmux sessions** via a modified Claude Telegram plugin for status/summaries.
- **Local models on a 128GB Mac via OMLX** (Mac-optimized Ollama-alternative: Hugging Face search GUI, model suggestions, chat interface, in-memory monitoring); previously a Linux box in the closet for "sketchy" tasks he didn't want a cloud agent touching.
- **Haiku-first routing** in his OpenClaw-style heartbeat agent: cheap model triages and picks the model/subagent for the task.
- **Claude's goal function** for iterate-until-success auto-research loops with explicit eval criteria.
- **Security posture:** clean the environment rather than fence the agent — keys out of the home dir, smart accounts over raw private keys.
- Recent one-shot builds: baby tracker ("B.B. Time"), baby-name prediction market, Korean flashcards from pirated Pimsleur audio.
