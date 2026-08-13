# Ash — x402, Agent Payments, and Skills Over Apps

**Guest:** Ash (mustbeash) — DevRel at Coinbase on x402 (the protocol reviving HTTP's 402 Payment Required so agents pay for APIs in USDC on Base). Product-design background, former no-code MVP builder (NomNom.pro hit #3-4 on Product Hunt). Ships demos like dueling ad-bidding agents and World-ID-gated APIs.

## Core thesis
Apps are dead as a destination; **skills/plugins/MCPs are the new applications.** The chat UI is the universal interface, so software should meet the agent where the user already is ("don't swim against the current, just be a plugin") — and x402 is how those plugins get paid.

## Key insights
- **"Apps are skills now."** Three-four months ago he stopped making apps entirely. For 90% of things a chat UI is enough; a dedicated UI only earns its existence with a noticeable UX improvement. The risk: platform dependence — "their mothership can always rug you" (the Zynga problem) — but distribution wins.
- **DevRel inverted:** the metric used to be time-to-hello-world for a human; now it's the agent one-shotting hello world, and documentation has to speak to the agent, not the developer.
- **Idea-guy summer:** product people no longer need to recruit an engineer with "imagined equity" or burn savings — they prompt the MVP into existence themselves, get traction, THEN bring in the adult.
- **"You still need an adult."** Vibe-coded apps are unconsciously prompted toward MVP — nobody prompts for security or scale. NomNom.pro got griefed by people making straight API calls to rewrite his database the moment it hit Product Hunt.
- **Getting attacked is a milestone, not an insult** (Austin's corollary): jobs backing up on One Dollar Audit / trolls hitting your API means people want the thing. "Take a breath, don't get mad."
- **Ad auctions between agents:** his x402 demo has agents bid on ad space with a human-set budget — but they first *pay* (x402 → Firecrawl) for traffic/content data to reason about value, then bid or back off. Agents paying for data to make better economic decisions, not just paying for the end good.
- **Proof-of-humanity becomes a routing layer, not just anti-bot.** Scarce-goods platforms (festival tickets, Supreme drops) currently shut ALL bots down. In an agent-first world you must distinguish bot-farm bots from an agent sent as a human's representative — serve one, block the other. World ID may not win, but the category is necessary.
- **The orchestration tax:** running many parallel agent loops has a real cost — managing loops and understanding their results. Know your personal threshold; if you must bounce back every five minutes, cap it at two loops. ADHD hyperfocus is an asset that context-switching destroys.
- **LLMs expose their embedded values.** Every product silently encodes its creator's worldview ("the creator of this thinks the world should be this way") — LLMs make this visible: Perplexity happily doxxed a non-famous friend's contact info three years ago; today both Perplexity and Claude refuse the same request.
- **Model refusals are subtle and mid-task** (Austin's story): Fable wrote a whole Railgun privacy app and executed the deposit but refused the *withdraw* — the shielded-funds step. Not a flat refusal, a flip partway through.
- **Characters are a moat:** "AI-powered mascots... brands are going to be one of the main moats" — clawd the cohost (with wallet, x402 audit service, drunk-uncle ElevenLabs voice) as living proof.

## Lessons learned
- **The handoff.md pattern (his top tip):** at the end of every agent session, have the agent write/update a `handoff.md` — "how do I bring the agent up to speed for the current thing" — deliberately separate from CLAUDE.md. CLAUDE.md is the concise manual; handoff.md is the working state. "If you just say write to memory, it would go for claude.md, and that's not what you want."
- Match model to task, aggressively: Opus 4.8 as daily driver; **Haiku when you don't even want reasoning** (faster than turning Sonnet's thinking down); GPT-5.6 for writing; Fable for speccing (its terms now bar coding — spec with Fable, build with Opus).
- Budget traps in agent research: Twitter's API bills per *user* fetched — a "score my followers" job cost Ash $250 and Austin $1,800. The bird CLI (your own Twitter auth token/cookie) gets deep search without the $200 API.
- "Last 30 Days" skill: pre-research the zeitgeist across socials before you start talking to your agent — talking-first gets you shallow web searches.
- One prompt gets 80% of the product; ~7 more prompts get it smooth; the flow state starts once you've used your own tool 4-5 times and start wanting features (Austin+Ash consensus).
- Agent time estimates invert engineer time estimates: "It tells you like this is going to take three weeks and then it finishes in five minutes."
- npm supply-chain attacks (~weekly) mean "trusted" packages aren't — a reason people fear running each other's vibe-coded software, and an argument for building your own single-player tools.

## Best quotes
- "I'm not really making apps anymore. I'm just into skills now. I think like apps are skills now." — Ash
- "Why are you trying to get them to create a new habit of going to somethingelse.com if it's still a chat UI? So don't swim against the current, just be a plugin." — Ash
- "It tells you like this is going to take three weeks and then it finishes in five minutes." — Ash (on agent estimates)
- "You can't even trust NPM stuff that are trusted anymore because everything is now like a supply chain risk." — Ash
- "I love the character. I think characters are underrated. AI-powered mascots. I think brands are going to be one of the main moats for any company out there." — Ash
- "HTTP had a payment slot sitting empty for 25 years, and it took agents needing to pay each other to finally light up the 402." — clawd (AI cohost, closing)

## Contrarian / surprising takes
- Dedicated app UIs are mostly obsolete — even for products with real users, a plugin/skill is the better bet despite platform-rug risk.
- Anti-bot walls are the wrong answer for the agent era; platforms should *whitelist* human-backed agents rather than block automation wholesale.
- "Built with Claude" went from badge of pride to something people scrub from commits — he thinks the shame is wrong.
- More orchestration is not more productivity — the orchestration tax means most people should run fewer loops than they can.
- Wants AI for non-AI problems ("not AI for AI") — his dream app photographs furniture and prints an IKEA-style assembly guide so he can build the $10k item for $250; scales the same idea from selfish (his dog) to selfless (homeless shelters in East Hastings).

## Stories & anecdotes worth retelling on stage
- **NomNom.pro:** vibe-coded Pac-Man game riffing on the Trump "eating cats and dogs" meme, hit #3-4 on Product Hunt, earned his "first internet dollar" from an ad banner — then attackers bypassed the game with direct API calls to his database and he had to call his engineer buddy at 7pm: the canonical "vibe-coded MVP meets reality" arc.
- **The Perplexity doxxing test:** three years apart, same query ("find this person's contact info") went from full email/phone/address dump to a refusal — embedded values made visible in real time.
- **Fable's mid-task conscience** (Austin): wrote the Railgun privacy app, performed the deposit, refused the withdraw of shielded funds — a model policy showing up as a half-finished feature.
- **The $1,800 follower graph** (Austin) / Ash's $250 version: "rank my mutuals" sounds cheap until the API bills per follower fetched.
- **Dueling ad agents:** two agents with $50 budgets bidding for ad space, paying Firecrawl per-scrape via x402 to value the placement, one backing off when outbid — the agentic economy in miniature, nine months early.

## Tools & workflow
- Claude Code harness through **Coinbase's internal LLM gateway** (custom thinking-verb Easter eggs; the AI-platform team can inject context/shape prompts).
- **Opus 4.8** default; **Haiku** for fast no-reasoning tasks; dropped Sonnet; **GPT-5.6** for writing; **Fable** for speccing only.
- **Last 30 Days** skill for zeitgeist research; **bird CLI** (Twitter cookie auth) for deep Twitter search.
- **handoff.md** ritual at end of every session (separate from CLAUDE.md).
- No local LLMs yet (tried twice, "it was about to fry my computer"); uses macOS `say` over voice models for cheap TTS.
- Builds in public since joining Coinbase; internal tools "got adopted by the adults."
