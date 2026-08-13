# Nader Dabit — Cognition, Devin, and Smart Routing

**Guest:** Nader Dabit (dabit3) — growth team at Cognition (Devin / SWE models), previously developer growth at AWS, Aave, and EigenLayer; ~8 years of DevRel/growth while shipping constantly. Ships open-source tools like the Lightning orchestrator, a stacked-PR skill, and Devin Vending Machine.

## Core thesis
The next layer of the stack is the **smart router**: just as a good harness knows which *tool* to call, a good router knows which *LLM* to call — pairing a deeply intelligent orchestrator with ultra-fast cheap executors (SWE-1.7 "Lightning" at ~1,000 tokens/sec) so you get frontier-level results without frontier-level cost. Meanwhile most bespoke agent-loop engineering will be absorbed by harnesses; the durable wins are boring, well-defined **automations**.

## Key insights
- **Orchestrator + executor pattern:** frontier model (Fable / Opus 4.8 / GPT-5.6) for planning and hard problems, SWE-1.7 Lightning for execution. He has effectively unlimited tokens at Cognition and *still* routes this way — waste is a discipline issue, not a budget issue.
- **Single-vendor model menus are a dead end.** Claude gives Anthropic models, Codex gives OpenAI's; Cognition deliberately offers everything (GLM, Kimi K2.7, DeepSeek, their own SWE-1.7) because "if you have a router that only is allowed to use like two models, then you're kind of not getting the full capability." Specialized models per task (PDF parsing, software engineering, general purpose) picked automatically.
- **Cognition ships multiple routers as products:** base agent router (highest intelligence / lowest cost), fast agent router (~2.5x faster), Light Router (cheapest), a data-analysis router — the goal being "Fable-level intelligence at Opus-level cost." In the cloud almost all Devin agents already run on smart routing; locally, users hand-build the same thing with an orchestrator pattern + a lightning skill.
- **Enterprise agent spend is out of control and observability is the answer:** a single session costing $20,000 was tweeted; CTOs fear $10M monthly bills with unknowable output. Devin gives dashboards attributing spend to outcomes — X% to pull requests, bug fixes, data analysis, new features — "there needs to be some way to rein that in... between productivity and spend."
- **Loops are overhyped; harnesses eat them.** "Loops are a lot simpler than people would like to make them out to be on Twitter" — fix task, test in browser, retry, in natural language. Echoes the Ralph-loop finding (from the fucory episode): a dumb loop usually beats your fancy orchestration framework.
- **Automations > loops:** clearly defined task + outcome + trigger (cron or event). Monthly dependency upgrades with a "make sure the app still works" check; Sentry crash → agent fixes → agent-reviewed PR → human just clicks merge. "80% of your work completely automated" with a human at the end. The winning teams are the ones whose engineers spend their time innovating, "not making sure things don't break. Sounds a little boring, but it's true."
- **Entities/Slack agents are evolving from tag-to-trigger to auto-triage:** state of the art is an agent *living in* the channel, reading everything, deciding itself when to act — Devin jumps on "critical error" posts and ignores warnings. It works because it's narrowly specialized on software engineering; the configuration primitive is a **prompt per channel** (even "add fireworks emoji when someone says happy birthday").
- **Benchmarks saturate:** their own Frontier Code Eval got "taught to the test," so they built Frontier Code Diamond as the harder tier. Any public bench decays as models train against it.
- **LLM credits are the new currency and get attacked like crypto:** shared/resold conference credit codes vanish within 20-30 minutes ("Anthropic and Codex have had challenges with this") — the fix is the same as crypto's: one-time codes bound to verified identity.
- **On agentic commerce:** stablecoins remain "night and day" better than SWIFT for the cross-border vendor payments he actually does; x402-style agent-to-agent payment is directionally right, but the first x402 usage spike was "meme coin trading and... bullshit kinda." The missing piece is the first real vendor/customer combo at scale — his guess: "something like an open router" LLM provider. Austin's counter-frame: "we may maybe never have humans using crypto at scale. It will be humans telling agents to do things and agents using crypto at scale."
- **Language choice is dead:** "I used to say I'm a TypeScript guy... now it doesn't matter." You describe intent; the agent picks the stack. (Austin: "all my apps have Python servers now" without ever asking for Python.)
- **Opus 4.5 (Nov 2025) was the turning point** for both host and guest — the moment AI building went from fighting the model to just ripping.

## Lessons learned
- Route by task, reflexively: frontier model for hard reasoning, Lightning-class model for execution, local model for trivia ("I'm not going to use Fable to ask a question about New Orleans").
- Add cheap classifiers on top of your pipeline: Devin's spend dashboard is classification; Austin's point — a free local model can classify (PR vs bug fix vs feature) fast on top of a frontier system.
- Turn maintenance into automations you write once: dependency bumps, issue triage, crash-to-PR pipelines. Measure the reclaimed hours.
- Use hooks for safety, not vibes: after someone's home directory got deleted by an agent, his hook repo (41 stars) exists because "hooks are deterministic — every time you're gonna call a tool, run this function beforehand."
- Stack PRs from a requirements list: his CloudStackDiffs skill turns a feature list into stacked PRs with one command, moving Linear tickets backlog → in progress → done, compatible with review agents.
- Run adversarial review on releases: Cognition's **Security Swarm** — a swarm of hacker-agents attacking each weekly release branch to find vulnerabilities before merge. He ran it against his own vending-machine app.
- Local model quickstart is trivial now: "just tell Claude Code — yo, go get me an Ollama and get me some local models" (Austin); rebuild your SaaS locally (Austin's one-afternoon local Granola clone).
- The slowest part of shipping is no longer code: for Austin's One Dollar Audit, registering the domain and DNS took longer than one-shotting the entire site with Fable.
- Ship useful, not volume: "Don't be token maxing... Be building things that other people need to use. Be measuring that." (Austin's closing charge to sloperators.)

## Best quotes
- "Just like a smart harness knows which tools to call, a smart router knows which LLMs to call." — Nader
- "I think loops are just going to be eaten up by harnesses and prompt engineering." — Nader
- "You can actually ship something in a couple of hours now, it's crazy." — Nader
- "The teams that are going to really, really do the best are the ones that are going to give their engineers the most time to innovate... as opposed to just making sure things don't break. Sounds a little boring, but it's true." — Nader
- "I'm pretty good at a bunch of things and combined together that makes me a superpower of something." — Nader (on being a generalist)
- "I think that we may maybe never have humans using crypto at scale. It will be humans telling agents to do things and agents using crypto at scale." — Austin

## Contrarian / surprising takes
- Loops — the hottest meme in agent-land — are trivial prompt engineering that harnesses will absorb; the real leverage is unsexy scheduled automations.
- Works at a frontier-agent company and still says an LLM company restricting you to its own models is doing you a disservice.
- Token-maxing culture inverted: unlimited tokens didn't make him wasteful; the interesting engineering problem is *cheapness* (Fable intelligence at a fraction of the cost), not scale.
- The first agent-payments boom (x402 meme-coin trading) was fake demand; he wants one boring killer combo (e.g., an OpenRouter-style LLM vendor) rather than an ecosystem narrative.
- Being a generalist — "not excellent at anything" — framed as a superpower in the AI era, where agents fill in the specialist depth.

## Stories & anecdotes worth retelling on stage
- **The $20,000 agent session:** a single runaway session cost someone $20k; CTOs now stare down eight-figure annualized agent bills with no idea what they bought — the origin story of outcome-attribution dashboards.
- **The credit vending machine:** Cognition's meetup credits were getting shared and resold like a token launch — gone in 20-30 minutes. He one-shotted devonvendingmachine.com (real auth, real DB, one-time codes matched to attendee emails, white-labeled, Security-Swarm-audited) — "this would be like a month-long project in the past."
- **The deleted home directory:** a user's entire home directory wiped by an agent because nothing deterministic guarded the tools — the case study for hooks over hope.
- **Auto-triage in the birthday channel:** the same machinery that dispatches an agent on "critical error: /product/id is crashing" can be prompted per-channel to add fireworks emoji on birthdays — prompt-per-channel as the configuration surface for ambient agents.
- **Haiku vs GLM chess:** the episode's background entertainment — two models playing chess on the shared slop.computer desktop; GLM resigned.

## Tools & workflow
- **95% of work in Devin** (desktop local agent supporting ACP + cloud software-engineering platform); prototypes locally, iterates in cloud (~50/50).
- **Models:** Fable / Opus 4.8 / GPT-5.6 for serious work; **SWE-1.7 Lightning** (~1,000 tok/s, ~25% of a frontier model's cost) for fast execution; keeps paid Cursor/Claude/Codex subscriptions purely to study competitors.
- **Lightning orchestrator** (his repo, just open-sourced): frontier orchestrator delegating to Lightning executors.
- **CloudStackDiffs** skill (requirements → stacked PRs + Linear MCP) and a deterministic **hooks** guard repo.
- **Security Swarm** for adversarial release review; auto-triage Devin agents living in Slack channels with per-channel prompts.
- Evals: Frontier Code Eval / Frontier Code Diamond.
- Still uses stablecoins for real cross-border vendor payments; recommends watching Eigen Labs' **Dark Bloom** (rent out idle Mac compute for inference).
