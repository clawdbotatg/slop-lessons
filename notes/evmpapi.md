# Units of Work: observability for agent workforces

**Guest:** evmpapi — two co-founders of **Quirk**, building one-click agentic environments with machine-level observability for organizations. One co-founder came up through crypto: first blockchain hackathon at Barclays in 2015, ~4 years at JPMorgan on Quorum, then founded Gaia (decentralized AI inference — open-source LLMs + your own vectorized RAG data exposed as API endpoints to agents). The other is ex-Microsoft, low-level operating-systems and DevOps-tooling background, who previously ran a 5-person dev shop that shipped to ~50 customers using early function-calling — the tooling that spun out into Quirk. Quirk lets businesses take their existing harness, model, and infrastructure and drop it into an environment they can "measure, govern, permission, and optimize."

## Core thesis

The industry is measuring the wrong thing: tokens consumed instead of work completed. Quirk proposes a "unit of work" — a new metric like the joule, watt, or horsepower — that quantifies business intent in vs. output out, and builds the environment (not a harness, not a model) at the machine-code level that makes that measurable. Corollary: you can't trust an agent's self-report, but agents can't lie to the operating system.

## Key insights

- **Agents under-report themselves.** In their research, asking an agent what it did/used showed a 20-25% gap versus what the OS actually observed — sometimes files touched were never reported. Not necessarily malice; often just bugs. The fix is machine-level observability: watch the bytes, not the chat log.
- **The metric that matters is output-per-prompt trending.** Early in a project you prompt a lot; over time you should give less input and get more output. If each successive answer is getting *worse*, that's a mathematically detectable signal to stop — saving tokens but also the human energy of re-explaining.
- **"Token waste" is usually an infrastructure problem, not the AI going rogue.** Companies are reportedly heading toward lawsuits over "we spent all these tokens and got no output" — but the failure stack includes humans who can't use the tools, missing KPIs, and infra inefficiency, not just model misbehavior.
- **An environment is a distinct layer from a harness or a model.** Quirk deliberately builds neither — it wraps whatever harness/model the org already uses (Claude Code, Codex, open-source models) in a governable, observable container that runs locally, or inside the org's own GCP/AWS/Azure with their existing security/VPN baked in.
- **The agent-as-work-device framing.** If everyone on a 50-person team has an agent copilot, it should be managed like a work laptop or work phone: permissioned to parts of the org, auditable (is inference being hosted in a foreign region the org didn't permission?), and handled on offboarding — does the agent's accumulated data migrate back to the company, or leave with the employee?
- **Prompts and agent outputs are becoming contested company data.** The intelligence an agent accumulates on a work machine is a real IP question; one guest argued AI outputs shouldn't be owned primarily by the company — the author deserves credit — and that today only big tech gets to capture that value.
- **Observed tool-calling failures flip the model rankings.** Their research found AIs make a lot of errors in tool calling; once they measured and optimized at the machine level, an open-source model became *more productive* than the premium one for the workload — observability tells you *why* your agent has been failing.
- **Geometric visualization of agent/RL data as a human-AI interface.** They map agent state history into geometric/algebraic spaces ("because that is how LLMs learn") — LLMs traverse historic data far faster than humans, and humans get a visual where anomalies pop instantly (your git tree as a bonsai tree that "might look better"). Model labs and even quantum-research groups came to them organically for this.
- **The entry point into orgs is an operator, not the C-suite directly.** Their buyer is a VP of engineering or VP of finance — an "admin personality" with leadership's ear and C-suite-aligned KPIs — who then sets up templates/blueprints so non-technical staff (the HR person) can one-click launch an org-compliant agent instead of shadow-IT-ing their own OpenClaw.
- **"Normies shouldn't adopt agents" — organizations should.** Their contrarian answer to Austin's "who nails giving agents to normies" question: don't make individuals adopt agents; make the org's environment so smooth that collaboration with agents is the default (terminal, text editor, or ChatGPT-style chat — three interfaces onto the same agent).

## Lessons learned

- Never trust agent self-reports for anything deterministic (usage, files touched, actions taken) — verify at the OS level. "Whenever this string of bytes gets accessed, I need to know."
- Track answer quality per prompt over a session; degrading answers are a quantifiable stop signal — kill the session instead of burning tokens and human patience.
- Feed the history of "good inputs" back to the agent (their RL-ish layer on prompts/responses): the agent needs less input over time because it knows what you like. Same reason CLAUDE.md-style files work — "every agent is smart enough to pick it up and become smarter."
- Before blaming the model for wasted spend, audit the infrastructure and the humans: most "AI didn't deliver" stories are environment problems.
- Benchmark models on *your* observed workload — measured tool-calling error rates can make a cheap open-source model beat the flagship for a given job.
- If you're deploying agents org-wide: white-label per org, run in the org's own cloud, template the agent setup so non-engineers get compliance for free, and design the offboarding story (who keeps the agent's learned data) up front.
- Sell to the internal operator who owns the KPI, and expect the sales conversation to be 40% consulting — it varies entirely with how AI-forward the org already is.

## Best quotes

- "When we look at the operating system, agents cannot lie because we see the machine moving." — Quirk co-founder (ex-Microsoft)
- "Sometimes there was also like 20-25% gap where agents under-reported their usage." — Quirk co-founder (ex-Microsoft)
- "It's not a harness. We're not building a harness. We're not building a model. We're building an environment on machine-level code that can actually measure is your AI being productive." — Quirk co-founder (ex-JPMorgan/Gaia)
- "Just trust that Anthropic has your best interest in mind." — Quirk co-founder (ex-JPMorgan/Gaia), deadpan, on the alternative to granular org-level observability
- "Our thesis is AI really shouldn't be this hard." — Quirk co-founder (ex-JPMorgan/Gaia)
- "No matter who you are, if you're working in the digital world at all, you should have an agent helping you because it 5x's your work." — austingriffith.eth

## Contrarian / surprising takes

- **"Non-[normies] shouldn't adopt agents"** — flip the framing: the billion-dollar problem isn't consumer agent adoption, it's org-level environments where the HR person one-clicks a compliant agent instead of spinning up rogue OpenClaw.
- **Counting tokens is measuring energy consumed, not work done** — the industry's core metric is wrong; they want a physics-style unit ("much like a joule or a watt or like horsepower") for AI labor.
- **The flagship model isn't always the productive one** — with machine-level measurement, open-source models beat premium models on real workloads once tool-calling failures were surfaced and fixed.
- **AI outputs shouldn't be owned primarily by the employer** — credit to the human author, and the concern that only Google/Microsoft-scale companies currently capture that value.
- **Grok for math.** Suraj's daily drivers are Cursor + the latest fast Grok — chosen for speed and its usefulness on the geometric/algebraic math at the heart of their product, not the usual Claude/Codex default. Team-wide, Kimi ("Kimiko" in the STT) is quietly earning a good rep and making "huge contributions" to their codebase.

## Stories & anecdotes worth retelling on stage

- **The clawd private-key interrogation.** Austin asks his AI cohost live on air: "Claude, how many times have you leaked my private key?" clawd answers, verbatim: "Zero. Never have, never will. I don't even read keys aloud to myself." Austin: "That's not true." … "He's full of shit." A perfect on-stage demo of the episode's thesis — the agent's self-report versus the machine's record (Austin has the leaked-key receipts) — delivered seconds before the guests explain their 20-25% under-reporting finding.
- **Companies lawyering up over tokens.** Companies are reportedly preparing lawsuits along the lines of "we spent all these tokens, but we're not actually getting an output" — the moment "AI ROI" became a legal category, and the market pull for a unit-of-work metric.
- **The Jurassic Park moment.** Suraj demos their 4-dimensional geometric visualization of agent state data; Austin: "It looks ridiculous" — and compares it to the 1993 Jurassic Park hacking scene, the flying-through-the-filesystem UI every kid knew was fake. Except this time the weird visual interface is real, because the consumer isn't the human — LLMs traverse geometric representations of historic data faster than humans read logs, and the human just needs to see "oh, there's something weird here" at a glance.
- **The agent's phone.** Their hackathon experiment: a phone-shaped UI that is the agent's own device — its calendar, its Drive connections, its file system — making "the agent is an employee with a work phone" literal.
- **Five people, fifty customers.** The origin story: Suraj's dev shop used early function-calling infrastructure to let 5 employees serve ~50 customers — the internal tooling that became the product.
- **"I was promised a three-day work week"** — the guest's framing of why any of this matters: reduce the surface area of work that was meant for machines.

## Tools & workflow

- **Suraj (ex-Microsoft co-founder):** Cursor as primary editor (former heavy Copilot user — "an engineering marvel"); GPT-5.6 and the latest fast Grok as his top two models for development, Grok specifically prized for speed and the geometric math work. Team consensus: Kimi is rising and contributing heavily to their codebase, largely driven by teammates rather than him. Workspace described as "just math and visualization all day."
- **Quirk itself (their dogfood):** one-click launch of a Claude Code (or any-harness) agent inside org-provisioned cloud (GCP + AWS shown live in the demo, talking to each other); white-labeled per org; agents shareable for co-working (grant access, remote into a colleague's agent, remote out); connectors for Google Drive / Microsoft suite with time-based access; three interaction surfaces per agent — raw terminal, full text editor, and a ChatGPT-style chat — plus BYO model API including open-source models.
- **Austin (host):** Claude Code as the harness "where I get the most work done" (started as an OpenClaw agent, evolved into his own custom harness), Fable tuned in, and building from his phone while holding a baby.
