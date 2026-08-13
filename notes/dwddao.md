# David Dao — Simocracy, AI Twins & ENS Governance

**Guest:** David Dao — AI researcher (PhD, ETH Zurich), founder of GainForest (nonprofit using ML + satellite/bioacoustic data to fight deforestation; XPrize Rainforest winner), Protocol Labs R&D, and builder of Simocracy — a platform where people spin up AI "digital twins" (sims) of themselves that read proposals, deliberate, and vote in DAO governance. Currently running a live $10k experiment with ENS DAO. Son of Vietnamese boat-people refugees; his actual last name is Dao ("an OG Daoist").

## Core thesis

AI digital twins can do "99% of your governance work": you encode your values once into a legible, editable constitution, and your agent reads every proposal, deliberates, and votes on your behalf — turning DAO participation from a time-luxury of the few into something everyone can afford. The same playbook that automated software engineering will roll through every coordination layer of an organization.

## Key insights

- **Governance participation is a time problem, not a values problem.** In a bear market fewer people "have the luxury to participate" in DAOs. Delegating the reading/weighing/voting labor to a personal AI twin attacks the actual bottleneck — human attention — not the mechanism.
- **The constitution as legible alignment.** Each sim has a public "constitution" — a distilled memory of the user's values, editable in natural language. Anyone (the owner, other voters) can inspect it and verify the agent votes for the reasons it claims. It's alignment-by-transparency at the individual-voter level.
- **Humans vs. sims with real money:** given $10,000 per floor at Frontier Tower, one human literally spent the money paying his own membership fee; when $5,000 went to the digital sims instead, "distribution is much nicer" — the sims were less greedy than the humans they represented.
- **The AT Protocol bet (Bluesky's protocol) over IPFS for agent-native data:** sims live on atproto because it's structured like a file system — and agents have been trained on decades of file-system data, so they navigate it natively. IPFS's CIDs are decentralized but hard for an agent to traverse; atproto trades some decentralization for agent-parseable, indexed, GraphQL-queryable structure while keeping "credible exit" (your data is yours cryptographically; the server can never stop you leaving).
- **The Opus 4.5 moment (Nov 2025) rewrote GainForest's engineering economics:** a feature his team spent nine months on could suddenly be rebuilt from scratch in a day — they rebuilt it three times in four-five weeks and shipped. He immediately pivoted the whole org to agentic engineering.
- **The "ideas guy" ceiling is gone.** David describes himself as an idea person who used to need a highly technical cofounder at every hackathon; he built the entire Simocracy app himself. Software is no longer the bottleneck — coordination, ops, and evaluation are.
- **Frugal AI still wins for climate:** GainForest runs tiny CNNs (tree counting/segmentation) and bioacoustic models — cheap compared to million-dollar foundation-model training runs — and bets big on sound: every living thing emits a sound signature, so audio diversity is the best proxy for ecosystem health.
- **Data poverty is the real AI bias:** 83% of all nature data ever collected is from the US or Canada; only ~1% is from rainforests — so you literally cannot train a good model where it matters most. GainForest pays unbanked indigenous communities in crypto (the only rail that worked) to collect that data.
- **Data ownership creates unplanned uses:** data collected for AI training got used by a Filipina activist as court evidence to sue a mayor over illegal deforestation. Give people ownership of data and they decide what it's for.
- **Local AI + skill files = decentralized delegation.** With DeepSeek-class models now running on a MacBook, the endgame is: copy a skill file + token from any app, hand it to your local agent (trained on you, potentially air-gapped), and it acts on your behalf — governance without a cloud intermediary.
- **Sybil resistance is deliberately unsolved and complementary:** Simocracy knows one atproto account = one sim, but nothing stops sock-puppet armies. David's stance: DAOs already solved this once (Gitcoin Passport et al.) and "history repeats itself" — those primitives will be re-integrated as agent institutions grow.

## Lessons learned

- **"Always have the AI suffer its own mistakes first."** Structure the loop so the agent is the first consumer of its own broken code — make it "nervous," force it to log in through the OAuth button it just built. Don't be the human QA for machine output; you shouldn't even be involved in the suffering.
- **Rebuild, don't repair.** When models jump a capability tier, throwing away a nine-month codebase and rebuilding from scratch (three times, in weeks) can be faster than finishing it.
- **Ride the doubling curve deliberately:** watch the capability-doubling metric (METR), assume your blocking problem "is going to be solved by the end of this year," and reorganize the team around that assumption rather than around today's model.
- **Demand verifiable output as the interface:** in agentic engineering, have the agent hand you "a whole HTML report with screenshots and tell me what you did" — your bottleneck is your time and your evaluation, so make evaluation cheap.
- **Route models by job:** local model for privacy-sensitive work, GPT-5.x as the daily workhorse for normal tasks, Fable only for the genuinely hard problems. Don't burn frontier tokens on easy work ("complete overkill... for the act of laziness").
- **Pick data structures your agent already understands:** a protocol that looks like a file system beats a "more decentralized" one the agent can't traverse. Design for the agent's training distribution.
- **Every app should ship a skill file:** (Austin's articulation, David agrees) anything a human can do in your software should have an API/MCP route plus a copyable skill file so any agent can drive it with a token.
- **Make the values document user-visible:** putting each sim's constitution on its public page lets users audit and correct their own twin — feedback in natural language becomes the training loop.

## Best quotes

- "I'm like, I know, but Opus can build it in one day." — David, on the feature his engineer had spent nine months building
- "Usually old white men in suits like sitting in one row talking about how indigenous people need money, but they are not represented." — David, on why Simocracy exists (giving unrepresented communities a digital twin at the table)
- "Always have the AI suffer its own mistakes first." — David, his #1 building-with-AI advice
- "AI is doing like the whole 99% of your governance work" — David, on what a sim does for its owner
- "the age of local AI has I think arrived." — David, on DeepSeek-class models running on a MacBook
- "I don't know what brokers will look at, but I mean, man, what a great time to be alive." — David, on AI-agent-governed institutions
- "Meow, sixteen pairs of eyes, zero custody, all receipts. So no power." — Mr. Meow (David's cat's sim), commenting live on an ENS governance thread, written by the agent with zero human input

## Contrarian / surprising takes

- **Bullish on DAOs doing capital allocation** — precisely the thing most of crypto has given up on. His claim: the problem was never the mechanism, it was human participation cost, which AI twins eliminate.
- **AI sims allocated money better than the humans they represent** — less greedy, no self-dealing ("pay my membership fee" never appears in sim decisions).
- **Chose Bluesky's AT Protocol over IPFS/Sign-in-with-Ethereum** for a crypto-governance app — "to not use IPFS seems almost diabolical" (Austin's words) — because agent-navigability beats maximal decentralization, and credible exit preserves the property that matters (you own your data).
- **Making the AI "nervous" is good.** Austin assumed pressuring the model was harmful; David argues engineered anxiety — the agent facing its own broken output — is what produces careful work.
- **Frontier labs' playbook is portable to non-software work:** finance, hiring, ops, email — the whole NGO — will be automated "using the same playbook as what happened to software engineering," just context-adjusted.
- **Sounds over satellites:** the number-one signal to double down on for monitoring life on Earth is audio, not imagery.

## Stories & anecdotes worth retelling on stage

- **The nine-month feature vs. one day of Opus:** GainForest engineer spends nine months on a feature that isn't launchable; post-Opus-4.5 they rebuild it from scratch three separate times in ~4–5 weeks and ship. The org converts to agentic engineering overnight.
- **The $10k Frontier Tower experiment:** every floor's human community leads get $10,000 to spend "however you think would be best for your community" — one guy pays his own membership fee with it. Then $5,000 goes to the AI sims, and the allocations come out clean and communal. Humans vs. their better digital angels, with real money.
- **Mr. Meow votes in ENS governance, live on air:** David pastes the Simocracy skill file into his local Pi agent, says "use my Mr. Meow Sim, write a comment," and his cat's digital twin reads the ENS proposal and posts a coherent governance comment — while David types nothing. (Bonus: they leaked the token on stream and he just shrugs — "I can just deactivate after a call.")
- **Mangrove photos become courtroom evidence:** data GainForest collected in 2022 for AI training gets used by Camille in the southern Philippines to sue a local mayor for cutting down the forest — an impact nobody designed for, unlocked purely because the community owned its data.
- **Why crypto, at all:** GainForest tried for months to pay indigenous rainforest communities — they're unbanked; every traditional rail failed or triggered bank calls. Crypto was "the only way to pay them." A climate NGO became a crypto org out of pure necessity.
- **Clawd's Sybil question:** the AI cohost asks how a DAO tells a legit digital twin from a thousand Sybil twins "wearing skill files" — David concedes it's unsolved and points back at Gitcoin Passport-era primitives returning. (Nice beat: the AI asking the hardest question of the episode.)
- **Bioblitz goes viral in Indonesia:** $50/week bounties for uploading nature data turned into a competition; thousands of images uploaded in a week. "It's my favorite place on the internet sometimes."

## Tools & workflow

- **Terminal:** tmux (+ cmux) as the OS — left side sessions, each tab a project, fire up the agent inside the project directory.
- **Agent harness:** **Pi** (open-source minimal agent) rather than Claude Code or Codex — `slash model` to switch models per task; extensions system (auto-research, headless-Chrome browser control, AgentDashboard, plus self-built ones including a PySimocracy extension). He notes running Claude *inside* Pi saves tokens and is faster.
- **Models:** local model for privacy-sensitive work; GPT-5.x ("Sol") as daily workhorse; Fable for the hardest problems. Watching DeepSeek Flash + efficient local engines as the local-AI tipping point (foundation-model intelligence on a MacBook).
- **Subscription hack:** routes/averages Anthropic subscription usage inside Pi (parallel to Austin's harness approach).
- **Evaluation loop:** agents must produce HTML reports with screenshots of what they did; agents test their own output first (the OAuth-button test).
- **Data/infra stack:** AT Protocol (atproto) as the "gigantic social file system" underlying Simocracy and GainForest data (credible exit, GraphQL-fast queries, agent-navigable); Hypercerts lexicon for funding records; quadratic funding for project support.
- **GainForest ML:** frugal AI — small CNN-based tree segmentation/counting models, bioacoustic species/ecosystem-health models; $50/week Bioblitz crypto bounties for community data collection.
