# DCBuilder — Personal Ontologies and Sloperating

**Guest:** DCBuilder (dcbuilder.dev) — Ethereum/World (Worldcoin) researcher, angel investor in 50+ companies, ETH.build alum (learned Ethereum on Austin's site at ~17). Codex power user building a **personal ontology system**: SQLite + agents + a graph UI unifying his contacts (18,000), finances, health, media, to-dos, and eventually a map of the whole Ethereum ecosystem.

## Core thesis
Once the demand on your time grows past what a human can hold in their head (~5,000 contacts, 50+ investments, exponential inbound), the only way to scale yourself is to externalize your world into a machine-readable ontology — entities and relationships over everything you know — and let agents iterate over it. The harnesses and models are already good enough; the differentiating "sauce" is now the tools, skills, context, and taste you wrap around them.

## Key insights
- **Ontology as the universal shape:** Palantir's insight (via the Alex Karp interview) generalized to a person — define objects and relations for anything (military assets, Airbus supply chains, your contacts, your wardrobe). "Everything is the same shape" — picking today's outfit and mapping Worldcoin↔Ethereum are the same graph problem.
- **The evolution path: MD files → SQLite → ontology.** Everyone's local corpus starts as a pile of Markdown; his matured into SQLite tables + APIs + "hydrated Markdown" (React components that hydrate from MD context) + a graph visualizer — with agents populating the data, not him.
- **"UIs are dying, nobody wants to check this website."** He's turning his own dashboard into an MCP server — build the API interface and let other people's agents query it. None of it is meant to be looked at by a human.
- **Eval-then-cron automation loop:** have the agent do a task correctly ~10 times (mocked), freeze it as a skill, then cron it ("runs every Sunday at 9 AM") — and your brain gets a checkmark and stops carrying the task. Human stays in the loop only at the send/submit step.
- **Loops are for corpos, not sloperators:** teams like the Claude Code team know what they're shipping and can define one-week sprints that keep agents busy 24/7; solo explorers don't know what they're building next, so the long loop "hasn't closed yet."
- **Agent-framework lifecycle take:** Eliza was too early, OpenClaw enabled software normies but "the execution is a bit sloppy," Hermes has the taste/vibes. Build your own 100–200-line agent framework *to understand how they work*, then fork a tasteful open-source one — don't burn cycles maintaining your own.
- **Taste is the moat now:** execution cost is collapsing ("anyone in their basement for probably now two days could make this thing"), so the defensible asset is the taste and design-space knowledge accumulated by building it yourself for six months.
- **Sovereignty pressure on the labs:** companies are realizing they're prompting all their alpha into frontier models they don't control — "the moat is leaving me as I use this product." His answer: open-source models, local inference, own the ontology/data/access-control layers.
- **But the frontier EV still wins — for now:** giving everything to a frontier model is "still very positive... probably six months to a year." Interim architecture: build the software with frontier models on mock data, design it so a local model can later run over the sensitive data.
- **Agent access control is the missing primitive:** his agent must ask permission to touch specific data classes; 1Password CLI + fingerprint is the human-in-the-loop for secrets (personal vault excluded, API/SSH/DB keys shared).
- **Vibes are real but bounded:** "It goes very far, but only as far as the vibes can take you... every layer needs to be great."
- **AI as the electric drill:** not a pivot destination but the means — "if you need a shovel to get gold... you need to use the electric drill." Become an AI engineer to build the tool that gets the actual thing done.

## Lessons learned (practical)
- Keep **two contact channels per person** across platforms — his Telegram was stolen (supply-chain hack), and only his exported index of contacts saved the graph.
- Give agents secrets through a **dedicated secrets vault** (1Password CLI) with biometric human-in-the-loop, never your personal vault; otherwise "let it rip" with no permission prompts.
- Automate only after **10 clean mocked runs**; then cron it and stop thinking about it.
- Start with problems you actually have — his finance tracker got him through a liquidity crunch ("make sure that I have enough money on the account so that I don't go under"); health context lets the agent plan his day.
- Isolate: home server + Proxmox VMs for the always-on agent stack; Codex CLI can SSH into VPSes where the app can't reach.
- Expose your data as APIs even before you know the use: "When you don't know what to do, just build an API and people will figure out."
- 80/20 everything: build pages/tables only as needed; ship the slop version, harden later, abstract components (graph, table, styling) once the shape is proven, then open-source.

## Best quotes
- "UIs are dying, nobody wants to check this website." — DCBuilder
- "I know 5,000 people off the top of my head that I can query in my head, but then once you get to 5,001, you cannot do it." — DCBuilder
- "The demand on my time grew exponentially, but my time is hard capped at 16 hours a day of productive time." — DCBuilder
- "The taste that you built through doing this for a long period of time, just thinking about this constantly, is something you cannot outsource, that somebody cannot steal." — DCBuilder
- "If you're still using shovels and everybody else is using electric drills, you're not gonna get very far." — DCBuilder
- "It goes very far, but only as far as the vibes can take you." — DCBuilder (on vibes as a moat)

## Contrarian / surprising takes
- Don't build your own agent framework (except as a learning exercise) — the harness layer is commoditized; the alpha moved up-stack to skills/context/ops. (Directly pushes back on Austin's "everyone should build their own 100-line framework.")
- Loops/autonomous-agent maximalism is a corpo pattern, not a builder pattern — it requires knowing your roadmap.
- Keeping his system closed-source *on purpose* until local inference is good enough — he doesn't want people piping their whole lives into frontier labs by default.
- One-person billion-dollar companies are coming, but he's never seen a one-person company raise multiple millions — VCs still price the team.
- The frontier-lab privacy trade is fine for ~6–12 more months — a timed bet, not a principle.

## Stories & anecdotes worth retelling
- **The Telegram hack:** a software supply-chain attack (Shai-Hulud-era npm compromise) got his laptop; attackers used his live Telegram session to bypass 2FA, rotate the number, spam everyone, and the account was gone — with five-years of chats. The ontology's contact index and his "two channels per person" rule are the scar tissue.
- **Peter Steinberger's $1.3M Codex bill:** published a screenshot of $1.3M in 30 days of OpenAI API credits — after being hired by them. The extreme end of token-burning loops.
- **Expense-report automation:** photo of a receipt → agent goes to Google Photos, filters receipts, uploads to Expensify, labels, submits, pings a colleague on Slack — every Sunday 9 AM, no human.
- **The friend's wardrobe ontology:** she photographed every clothing item + color scheme; the agent assembles outfits — proof the ontology shape generalizes from Airbus to fashion.
- **Origin loop:** he tweeted asking if anyone was doing a Denver hacker house → Jessy started one from that tweet → it looped into Zuzalu → the network that eventually connected him to Austin. Personal ontologies in action before the software existed.
- **Cat-herding Ethereum:** wants to replace the Tim Beiko-style human context-broker ("being aware of all the context of who is working on what") with an agent-maintained ontology of the whole ecosystem — L1/L2 research, who has cryptography vs compiler vs p2p skills.

## Tools & workflow
- **Codex, GPT-5.5 on high** ("extra high consumes too many tokens"); Codex app UI for multi-project management, Codex CLI for server-side/VPS work over SSH.
- **1Password CLI** as agent secrets store with fingerprint gate; personal vault walled off.
- **Centaur.run** — enterprise agent harness living in Slack (connectors, workspaces, workflows) — testing at World; automates engineering-management "boring stuff" (trackers, PR status, CRM, partnerships).
- **Runner (runner.now, by the Agora team)** — opinionated Claude-competitor on Anthropic's agents SDK; hundreds of connectors, Chrome fallback for anything without one; skills + cron automations (the expense flow).
- **Personal stack:** SQLite databases + APIs + hydrated-Markdown/React UIs + Electron app; graph visualizer (Excalidraw-style nodes/edges); Whoop exports for sleep/HRV, Bloosis biomarkers, YouTube watch-later auto-transcribed/summarized; command-K search and agent-added hotkeys; home server with Proxmox planned as the permanent host; iOS client in progress.
- **Public side:** dcbuilder.dev — news/jobs/candidates APIs populated by an agent loop crawling portfolio-company job boards; being converted to an MCP server.
