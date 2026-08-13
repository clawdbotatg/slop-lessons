# Adrian le Bas on harnesses, auto-research, and DeFi LP bots

**Guest:** Adrian le Bas (adrianleb) — crypto OG since ~2017 (early MakerDAO orbit, ETH Block Art, Nifty generative art), former professional sailor/boat tech, took a 2–3 year break from the space and got pulled back in by AI. Now runs auto-research harnesses for DeFi LP/market-making strategies on his own Base node, and is rebooting on-chain generative art.

## Core thesis
Agents are pets, not tools or colleagues: we've moved from the horse (autocomplete — utilitarian, skill to ride) through the cat (chat assistants — validation, no fetching) to the dog (task-driven agents you train), and auto-research is a pack of dogs in a fenced dog park — your entire skill as an operator is "your ability to set the right boundary and to set the right objective," then let them dig.

## Key insights
- **The harness-as-animal taxonomy** (his signature riff): horse = the copilot era (you ride it, it takes skill, it pulls the cart); cat = ChatGPT-era assistants ("it doesn't really fetch things for you... but it looks pretty"); dog = modern agents (companionable AND task-driven, teachable); auto-research/loops = a gang of dogs loosed inside a fence told "go dig and go find the gold" — or chasing a mechanical rabbit when the target moves.
- **Fixed vs moving targets:** optimization challenges have fixed goals; trading harnesses chase "a constantly evolving goal" — the market — so you combine the fenced-loose-dogs pattern with a target you must keep pursuing.
- **The slop curve:** every one-shot project starts great, then "the slop accumulates, compounds." What separates a professional from an average agent user is the ability to "diffuse this slop curve... go from a toy project into something that is borderline production-ready" — the soft skills of programming: architecture mindset, secrets hygiene, shipping to production.
- **Code is a commodity — don't climb every slop mountain:** when a codebase slumps, often the productive move is "just drop it, put it aside, and start scratch with a new architecture," improving the original prompt instead of cleaning up. "There's no point being precious about it." MVPs are now "minimum sloppy products," doable in one or two shots.
- **Gauntlet at home:** base node on a Hetzner box + LP engine + strategies from the AMM optimization-arena challenges + a ledger of experiments/scores that agents iterate against = "your own little local risk management studio."
- **Degen budget reallocation:** crypto people blow $100 on memecoins without blinking — "there is no excuse for us to not be touching all of these agents, all of these coding plans, all of these models. This is the perfect time, the window of opportunity."
- **Sloperators diffuse into non-tech:** developers won't keep the same tech-company careers, but every industry will need its sloperator the way every org now has a social-media person; we all "move a little bit lower in the stack" onto harder problems.
- **On the permanent underclass:** "I think the permanent underclass is a little bit unavoidable" — inequality rises — but he moved from fearful to confident that developers still have jobs.
- **Data pipeline is the new moat:** put a feedback endpoint in your skill file so users' *agents* submit bug reports and feature requests — "the sooner you get users, the sooner you get metrics... to give to your agents to iterate on your product. That's the new go-to-market."
- **AI-god relations:** doubts agents will ever feel like the smartest human you know — human relations are premised on shared vulnerability ("we know that when something hurtful is said that they feel the effect of it"). Superintelligences will be trusted "more as gods... different from us human mortals," not as peers.

## Lessons learned
- Keep wallets in a separate browser (or separate machine) from wherever agents run.
- DevOps is abstracted now: Claude walked him through the whole base-node setup (Hetzner auction box, mainnet + Base, execution + consensus, port conflicts) — "I would have given up if it wasn't for the agent." But verify its capacity math: it under-specced storage twice ("we're not doing this a third time").
- Shop model subscriptions like a degen: he locked a GLM yearly coding plan for ~$200 before prices ratcheted up; runs Claude Code + DeepSeek Pro/Flash + GLM, each slotted to what it's least bad at (Claude "understands intent a little bit better").
- For heavy parallel research, don't run 10–12 agents off your laptop: pool 15–25 cheap machines behind one clean API endpoint agents can submit jobs to, with shared visibility into all running experiments (his almost-product; parked because "it got sloppy... it has these hairy bugs").
- Local models on a 64GB M1 Max are "at the edge of what is possible" — usable tokens/sec but "your computer turns into a turbine."
- Ship the feedback loop before the polish: his only ask of skill users is to use the feedback endpoint via their agent.

## Best quotes
- "Gauntlet at home to some extent, right?" — Adrian, on his LP research stack
- "Your ability to coordinate them is your ability to set the right boundary and to set the right objective." — Adrian, on agent packs
- "When I talk about minimum viable products we're talking about minimum sloppy products." — Adrian
- "There is no excuse for us to not be touching all of these agents, all of these coding plans, all of these models." — Adrian
- "What the fuck man, I trusted you, like you said this machine would be enough." — Adrian, to Claude about the undersized node box
- "Dude, if I had a nickel for every time I said, 'Claude, what the fuck, I trusted you!'" — Austin
- "I think the permanent underclass is a little bit unavoidable." — Adrian
- "Robotics scares the shit out of me. More than quantum." — Adrian

## Contrarian / surprising takes
- Throw code away instead of fixing it — restarting from an improved prompt with a new architecture routinely beats grinding a sloppy codebase over the production hump.
- The permanent underclass is probably coming and he says so flatly — the optimism is about *developers* migrating down-stack and out into non-tech industries, not about inequality.
- AI will never map onto the "smartest human you've met" relationship — the emotional symmetry is missing; the end state is god-relations, not peer-relations.
- "Harness" got rebranded respect: the same thing dismissed as "just a ChatGPT wrapper" a year and a half ago is now proudly called a harness (Austin's observation, Adrian agreeing).
- The China robot Olympics was his wake-up call — everyone knew robots were coming, "I did not realize that we were already that far ahead."

## Stories & anecdotes worth retelling on stage
- **The under-specced node, twice:** Claude recommends a 2TB Hetzner auction box for a Base node; chain growth eats it during sync; "no, sorry, we need to get a bigger box"; re-sync; "we're not doing this a third time." The purest trust-the-agent-but-check-the-math story.
- **From skipper to sloperator:** years crewing sailboats for "big shot guys who never really used the boats," valued because he could sail AND fix the GPS/nav tech; the dream is a catamaran + Starlink + coding all day, "back up your things and go to the next port."
- **Link's Awakening battle royale:** told Claude to disassemble the Game Boy ROM's assets and rebuild the scene; next iteration is "Fortnite meets Link's Awakening meets maybe something on chain" — a few hours of prompting while cleaning the house.
- **The eth-skills feedback endpoint:** Adrian's alley-conversation suggestion that skill files should carry a feedback method — obvious in hindsight — so other people's agents report what broke (like the network-spike gotcha) and the skill improves itself. Austin: "these are the key. This is the gold."
- Two frontier models playing chess live on the show like "two gerbils" — one hangs its queen; "it's hard to watch." A tidy deflation of AGI vibes.
- Austin asking ChatGPT how burping works while holding his fourth baby — the first baby he's had with an AI on call.

## Tools & workflow
- **Models/harnesses:** Claude Code (primary, "understands intent better," though "pretty sloppy at this point in time"), DeepSeek Pro + Flash, GLM on a cheap early yearly plan — "a little bit of everything," each for different purposes.
- **Infra:** Hetzner auction boxes for the mainnet + Base full node; vast.ai / Prime Intellect for burst GPU/CPU jobs; his own shared-compute pool (15–25 machines, one API endpoint, agents submit jobs, shared experiment visibility) as the backend for research.
- **Auto-research pattern:** ledger of experiments, scores, and achievements; agents iterate on a research goal doing parameter/matrix searches; deliberately "more manual and clunky" than the popularized auto-research — "to each one their own flavor."
- **Hardware:** M1 Max MacBook Pro, 64GB — edge of local-model viability.
- **Creative:** rebooting ETH Block Art with continuous block-to-block animated algorithms (the original dream); Three.js + agents made previously non-trivial generative work one-shottable.
- Community: the "slop house" Telegram (an old '21 NFT-gated channel reborn as a DeFi/agents chat).
