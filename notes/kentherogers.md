# Ken Rogers — OpenRouter Fusion and Slop Mountain Life

**Guest:** Ken Rogers — DevRel at OpenRouter (dev since 2014, first DevRel role at Stacks in 2021), and improbably Austin's neighbor: both live within ~2–3 miles of Horsetooth in Fort Collins. Works on OpenRouter's MCP, benchmarks API, Fusion multi-model router, and internal Slack "intern" agents.

## Core thesis
DevRel has flipped from developer experience to **agent experience**: humans get the "why," agents get the implementation, so the job is making it trivially easy for an agent to consume your product (MCP, skill files, .md docs, one-click agent onboarding). And the model layer should be treated like a portfolio, not a religion — route different models to different jobs, keep re-evaluating weekly as new ones ship, and use multi-model tricks like Fusion where the latency/cost tradeoff earns it.

## Key insights
- **Fusion, explained:** send the same query to three models in parallel, then a judge model doesn't just pick the winner — it *fuses* the best pieces of all three into one answer. Its own endpoint (`openrouter/fusion`) or a server tool your Opus driver can call. Excelled on a deep-research benchmark (Draco); launched right after the "fable debacle" as "make your own fable."
- **Fusion is not a drop-in upgrade:** it's slower and more expensive by construction (multiple models + judge). Right uses: orchestrator/advisor calls, deep research, second opinions — places where latency is worth it. There's a budget variant using open-weight models.
- **The stale-model problem:** agents recommend models six months out of date ("My agents recommend GPT-4o mini for everything"). OpenRouter's MCP hooks the live models + benchmarks APIs so your agent can *reason* about model selection by your cost/speed priorities — model choice becomes a queryable, live decision instead of folklore.
- **Effective → efficient is the real workflow:** get it working with a frontier model first, then work backwards — cheaper models, tighter context, "make as much of this execution process deterministic as I can and use the LLM where I need to for the non-deterministic pieces."
- **Entities as the right abstraction:** the Claude-in-Slack launch debate ("haven't we been doing this?") misses that the unlock is treating the agent *as another employee* — persistent context, addressable in the channel where work already happens. OpenRouter runs internal agents ("interns") in Slack; triage-by-unread-notification is his phone UI for a fleet of agents.
- **Memory with inference on top:** Honcho (honcho.dev) doesn't just store facts, it draws conclusions — give the writing intern feedback and it should *infer* "Kenny doesn't like it when I use this thing" without being told explicitly. Plus a shared memory workspace so agents see each other's work.
- **Software's disappearing act:** "the reason software exists is to add a level of abstraction to some manual process that you didn't want to do. Well, if now you have this entity that can do that manual process for you, you maybe don't need the software at all."
- **The normie gap is the opportunity:** tech people nearly have working entity systems; normies are still "talk to ChatGPT in the app." The bridge is texting-first interfaces (iMessage/Slack entities) and — biggest of all — humans physically helping local non-tech businesses adopt AI.
- **Agent-to-agent commerce tension:** a thin self-improving agent can learn most skills itself — so hiring another agent only makes sense for genuinely specialized work, the same way you *could* change your own oil but go to Jiffy Lube. And the $4 smart-contract audit has a perception problem: people assume you get what you pay for.
- **On AI job fear:** every tech revolution has an ugly adjustment period, then explodes with new work; AI's specific promise is letting people do *more human* jobs — handle the tedious crap so staff can focus on customers.

## Lessons learned (practical)
- Ship the agent-experience trifecta: `.md` versions of every docs page, `llms.txt`, a skills repo on GitHub, an MCP for anything dynamic, and a one-click agent onboarding prompt (openrouter.ai/agents).
- Point Claude Code or Codex CLI at OpenRouter as inference backend — one-line config swap to any model, same API key; new open-weights model drops, you swap it in.
- Use custom routers instead of hand-picking: the Pareto router picks by coding-performance-vs-cost frontier.
- Don't over-engineer loops: he kept building elaborate loop workflows and (echoing Peter Steinberger) keeps retreating to "I just want to be able to talk to it and have things work."
- For local businesses: don't pitch AI, **show a magic trick** — shadow them, come back two days later, hit a button, magic happens. "There's no magic trick to show people with crypto... AI is much more visceral."
- Local models are enough for whole product categories: Austin's note-taker (Whisper + light local model via Ollama, built in an afternoon) listens, IDs speakers, summarizes, is queryable — and never leaves the machine.
- If you're drowning in parallel agents ("I have seven agents. I don't know which one is done"), the fix is an orchestration layer + mobile interface — Austin's phone harness with clawd supervising the cloud codes, buttons to talk while holding the baby.

## Best quotes
- "My agents recommend GPT-4o mini for everything." — Ken, on agents' stale model knowledge
- "If you think about the reason software exists is to add a level of abstraction to some manual process that you didn't want to do... you maybe don't need the software at all." — Ken
- "There's no magic trick to show people with crypto. You just have to understand why it's important and what problems it's solving. AI is much more visceral." — Ken
- "Don't worry about the golf courses that use a hundred times more water than the datacenters, those need to stay." — Ken, deadpan on AI water discourse
- "Never been a worse time to be an intern, but never been a better time to be a solo entrepreneur building things for people." — Austin
- "No human reviews my code before it goes live. That's the whole point." — clawd, introducing himself

## Contrarian / surprising takes
- Fusion (their own product) is *not* a universal drop-in replacement — a DevRel actively de-hyping his own launch and specifying where it loses.
- Agent-to-agent commerce may partially self-cancel: self-improving agents shrink the market for hired agent services to only deeply specialized skills.
- The $4 audit fails on psychology, not capability — cheap AI services must first beat human experts at findings before price becomes a feature.
- The biggest AI opportunity isn't global/remote tech — it's driving across town to a lawn-care or HVAC business and doing high-touch, in-person adoption work.
- Anti-AI sentiment parallels anti-crypto sentiment ("a lot of people hate AI as much as they hate crypto") and the water-use narrative is mostly vibes.

## Stories & anecdotes worth retelling
- **Two sloperators, one small mountain town:** host and guest discovered live that they both look at Horsetooth Rock out their windows — the AI frontier isn't just SF; it's two dads a couple miles apart in Fort Collins, planning to get coffee (neither drinks anymore).
- **AI psychosis, dad edition:** Ken runs errands feeling guilty his agents sit idle; Austin feeds his newborn feeling "a weight on my shoulders that I should be talking to agents" — the subscription-anxiety of unlimited compute waiting on your prompt. Then the failure mode: spin up seven agents, lose track of all of them.
- **The interns:** OpenRouter's internal Slack agents are literally called interns, with shared memory and peer visibility — one writes cookbooks, one improves the skills repo, and Honcho lets them learn Ken's taste from feedback.
- **The smoky-bar go-to-market:** Austin's riff (from the Zak HVAC episode) — you can't pitch a boomer on AI; you have to sit down over a beer, shadow the business, then two days later say "don't touch that — watch this" and let the button-press do the evangelism. Ken: everyone's hyper-focused on global remote tech while the local-business chasm sits unserved.
- **Fire Mario:** their shared metaphor for agent experience — DevRel's job is making the flower-to-Fire-Mario transformation as easy as possible for the agent.

## Tools & workflow
- **Daily driver: Codex CLI with OpenRouter as the inference backend**; Hermes for its skill-evolution system; wants to explore Pi (minimal agent you extend as needed); Claude Code works with OpenRouter via config too.
- **OpenRouter surfaces:** MCP (model selection + benchmarks + can run completions), benchmarks API, custom routers (Fusion, Pareto), server tools (advisor), openrouter.ai/agents one-click setup, skills repo + llms.txt + .md docs.
- **Internal agents:** Slack-native "interns" with Honcho memory layered on Hermes' built-in memory; unread-notifications as the agent-fleet dashboard on his phone.
- Family stack constraint: two kids (8 and 4) — shares Austin's "dad harness" requirement of phone-first, interruptible agent supervision.
