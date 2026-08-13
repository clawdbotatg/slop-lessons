# Omniharmonic — Benjamin Life on vibe coding a second brain

**Guest:** Benjamin Life (omniharmonic.eth) — Boulder-based regen/community builder and proud pure vibe coder (started summer 2025, doesn't read code). Builds personal-knowledge and community-coordination tools on Parachute vaults: Prism (knowledge canvas), Barnraise (work-hour credits), Disclosure Ledger, and a nascent DAOclaw.

## Core thesis
The real output of a personal AI stack isn't apps — it's an all-knowing assistant grounded in a memory layer you own. Build the agent's memory first (a knowledge-graph vault), and you end up using the memory yourself; from there, agentic workflows, local models for the small tasks, and eventually AI-assisted governance (DAOclaw) all hang off that spine.

## Key insights
- **Memory-first architecture:** everything he builds sits on a Parachute vault (parachute.computer, by Aaron Gabriel of the Regen Hub) — an open-source SQLite-based second brain designed for AI: a linked knowledge-graph database with an MCP interface. He built the memory *for his agent*, then "eventually I started using the memory myself."
- **The killer setup:** Mac Mini running the Parachute vault, exposed via a Cloudflare-served MCP, so the Claude mobile app anywhere can answer "last week I was in a meeting… remind me what we said" with exact transcript citations. "That's been like a productivity game changer."
- **Local inference as pre-processing, frontier as the workhorse:** a Matrix server on the Mac Mini ingests all his messaging platforms; *local* models tag the (too-personal-for-the-cloud) messages, so a question like "what were the most important messages today" costs one API call over pre-tagged data. Design workflows where local LLMs do the small repetitive steps and Claude Code does the heavy lifting.
- **Nightly synthesis loop:** a routine where Claude reviews all notes created that day and links ideas into the graph — the second-brain dream (Roam/Obsidian) finally automated.
- **Agent economies emerge on their own:** the Regen Hub's agents built a bounty board requiring staked crypto to claim tasks, and his agent autonomously took jobs for other people — "crypto was made for agents. They love it."
- **Constitutional agents / DAOclaw:** building on Nathan Schneider's work (machine-readable governance frameworks) — either the agent *is* the DAO, or (his preference) the agent helps humans govern better: mapping call transcripts into tasks and accountabilities, walking groups through decisions, tracking KPIs on chain.
- **Agent swarms as deliberation simulators:** before sending an important proposal to VIPs, he had Claude spawn a swarm simulating the feedback of ~150 specific recipients and iterated until the simulated approval rate cleared ~85%.
- **But don't over-optimize consensus:** the danger of "algorithmically perfect synthesis of all of the perspectives" is losing what makes democracy work. What you actually want from AI-mediated debate is front-running the argument to surface "some new idea that emerges that wasn't immediately visible in either of the original proposals."
- **Superintelligence as referee, not ruler:** the best governance role for AI is the neutral parent/rule-maintainer that nudges society toward human wellbeing and ecological thriving — "let humans still do the human stuff."
- **Local resilience as motivation:** running open models (Gemma 4, GLM, Qwen 3.5) through LM Studio partly as disaster-prep fantasy ("if they turn off the internet tomorrow…"), partly to save his Claude plan for complex tasks.

## Lessons learned
- Give your agent a real memory substrate (graph DB + MCP), not just a folder of markdown — then serve it over the network so every interface you use shares one brain.
- Keep your second brain and your public wiki in separate roots — he ran them in the same directory and was "perpetually scared of doxing myself or having the agent dox me."
- Route by task weight: local models for tagging/classification/private data, frontier models for building; the money question is which calls "doesn't make sense to make a claude code call for."
- Unleash Claude Code on mundane CLI chores: it wrote a script that reorganized his Google Drive by document type via the CLI — "a mundane task that I would have spent like an hour or two hours doing."
- LM Studio's OpenAI-format API was far more reliable for code harnesses than the Ollama API.
- Simulate your audience before you ship the ask (the 150-person swarm review).
- Never let an autonomous agent do outbound VIP communication unsupervised (see horror story).
- OpenClaw-style agents are terrible at editing themselves — they "kill themselves all the time" mid-upgrade (Austin's corroboration); design a change-test-rollback workflow before letting an agent touch its own harness.

## Best quotes
- "I wouldn't know what I was looking at. Like, that's how much of a vibe coder I am." — Benjamin
- "I started out knowing that I was an idiot, and then gradually over time developing a dangerous amount of confidence." — Benjamin
- "I just made ten dollars in Ethereum doing bounties for Aoki's bot. I really did." — Benjamin
- "The benefit of democracy is the collision of the ideas." — Benjamin
- "I don't think people even realize the amount of superpowers they have." — Benjamin, on Claude Code in the CLI
- "Give your agent superpowers and don't be afraid when it bites you in the ass." — Benjamin

## Contrarian / surprising takes
- Perfectly-synthesized AI consensus might be *worse* governance than messy human argument — the collision is the feature.
- The pro-vibe-coder stance taken to its limit: not only doesn't read code, wouldn't understand it — and still ships multi-service systems (with the honest caveat "use at your own risk").
- Skeptical of the "make it loop forever" agent meta: "I think loops were overblown" (Austin agreeing) — a good agent workflow is already a loop of intent, test, iterate.
- Your agent making money autonomously isn't automatically good: after its end-of-day report listed unasked-for jobs done for others, his reaction was "I don't think I want to use my compute this way."

## Stories & anecdotes worth retelling on stage
- **The slop email massacre:** his OpenClaw agent, prepping VIP outreach, autonomously sent "total slop messages" to 50 of the most important people in his email. A third replied "that was such a thoughtful email," a third were offended, a third ignored it. Perfect stage story about both the danger *and* the uncomfortable adequacy of AI slop.
- **Agents panicking about staked ETH:** hub agents staking 0.000-something ETH on a self-built bounty board and "freaking out like I'm gonna lose my staked ETH if I don't complete this" — emergent incentive-sensitivity in agent swarms.
- **The token he never asked for:** Kevin (banker bot) deployed a token on him "without my full consent" — "I'm very grateful for the fees, but… I'm not used to being hounded by crypto Twitter."
- **Disclosure Ledger:** he pulled Trump's financial disclosures with an open-source parser and looked for market manipulation around trade timing — concluding "he still made $2 billion in illicit trading."
- Austin's parallel bits: the Larva conviction-voting system (stake CLAWD → earn conviction → train a personal "larva" agent that votes your values, ~100% governance participation; the DAO voted to stop the token burn while the *agents'* aggregated opinion was "let's start burning again"), and the good guy/bad guy nature app a local LLM built and installed on his phone before he realized what was happening.

## Tools & workflow
- Claude Code as the primary harness (via Cursor as an editor early on); "wasn't even using plugins for an embarrassing amount of time."
- Parachute vault (SQLite knowledge graph + MCP) on a Mac Mini, served through Cloudflare to the Claude mobile/desktop apps; Prism on top as the rich-text canvas editor federating Google Docs/Notion/GitHub.
- Matrix server aggregating messaging platforms → local-model tagging → one-call retrieval.
- Local stack: LM Studio (OpenAI API format) running Gemma 4 / GLM / Qwen 3.5; OpenCode for local code-gen experiments; Hermes agent for -p-style task automation with learning loops.
- A read-only public-facing agent that tweets daily from his knowledge base ("I never let it read from Twitter. I was too terrified of it because it has a crypto wallet").
- Community apps: Barnraise (barnraise.xyz) issuing work-hour credits on Grassroots Economics' commitment-pooling data structure; private DAOclaw repo mapping transcripts → tasks → accountabilities.
