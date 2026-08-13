# Smithers and the Ralph Loop with Will Cory (fucory)

**Guest:** Will Cory (fucory / 0x8e457794) — builder of Smithers, a durable agent-orchestration framework (Ralph-loop successor, named for Mr. Burns's assistant), and of Guillotine, a fast Zig EVM implementation he built with AI ("an EVM that supports every language"). Early adopter of "software factory" building — he was doing prompt-pipeline codegen back on Claude 3.5. Active on Twitter/GitHub as fucory.

## Core thesis
The Ralph loop — the dumbest possible orchestration, just re-running the same prompt with a *fresh context* each pass — is the baseline every fancy orchestration system must beat, and most don't; they just burn tokens while tricking you into thinking they're working. The real leverage isn't clever orchestration, it's clean context, fast feedback loops (back pressure), and observability — and the endgame is programming *yourself* out of the loop so the system, not you, is the evaluator.

## Key insights
- What a Ralph loop actually is (the widely-missed part): not just goal + evaluation + loop, but **/new every iteration** — "the dumbest orchestration is to just slash new and run the same thing over and over again." Each pass reallocates the context window fresh: goal at the top, current codebase state, none of the accumulated noise. That's why it beats big-brained alternatives: "if you try to big-brain think of a better solution than Ralph... you will just fail over and over."
- Ralph as benchmark: "If you can't beat the baseline, your orchestration is probably just burning tokens and not actually helping at all." More tokens genuinely do buy better results, which is exactly how fancy orchestrators trick you.
- Context poisoning is mechanical, not moral: these are probabilistic machines; a wrong instruction (even one *you* wrote), a model's own wandering down a bad path, or dead migration-era code all stay in the window and keep steering the model even after correction. The fix is reallocation, not argument. (Austin's converted-skeptic story: his spiraling "bro, no, please no" live demo was cured by "explain the problem and let it attack it with a clean context.")
- **The software factory / "third try" doctrine:** save prompts as markdown, run them, benchmark the output, read the code, throw away *the code but never the tests*, fix the prompt (even asking the LLM "in hindsight, what could have helped these prompts?"), rerun. By the end he could rebuild the entire EVM exactly how he wanted "in under eight hours." "I never build it right until my third try" — regeneration speed is the discovery engine (it surfaced three stack-machine techniques the blockchain world hadn't used).
- Why the EVM is a perfect factory target: it's black-and-white — a yellow paper, EIPs, research-forum specs, "20 different documents for every spec and then like three implementations." Objective ground truth makes evaluation automatable.
- **Managers beat cracked ICs at AI:** his theory on why people like Georgios are so good with agents — managers already know you can't micromanage ("otherwise you might as well have done it yourself"), express intent well, and let go of nits. "The people who have the toughest time with AI are really talented coders who never managed anyone... they get caught up in the details." Models have limited *concept* attention (n things at a time, like people) — spend it on what matters, not style.
- **Orchestration design = three questions:** (1) success criteria, (2) **back pressure** — how fast and how honestly can the system tell itself it's wrong (tests, differential traces, merge queues), (3) **observability** — can you glance at a long-running thing and know its state.
- Back pressure in practice on the EVM: naive Ralph + "run the tests" died because the test suite was slower than the LLM; the harness fix was an LLM choosing which tests to run, optimistic merging, async full runs, and popping failed commits into a separate worktree. The breakthrough tool: a differential tracer running the official Python reference EVM (and revm) against his implementation, producing a token-efficient diff — "this opcode was supposed to charge this much gas" — before that, the loop "was just guessing what went wrong."
- Observability in practice: ask for an HTML progress report with a status bar (percent of opcodes implemented), plus `say` on macOS so the machine literally speaks when it needs help. "Plan ahead of time how you can make it easier on yourself."
- **Smithers' React trick:** orchestration scripts are modeled to look like (and actually use) React — because "agents are heavily reinforcement-learning trained on React," so the model writes and edits orchestration extremely well. Deep research found the JSX-orchestration pattern had only appeared twice anywhere. Smithers also ships Prometheus metrics by default, docs split for humans vs. agents, a skill.md, and durable loops that survive the classic failure: hitting the 5-hour rate limit mid-Ralph — the babysitting agent can notice and "switch to Codex."
- The build-vs-use-tools line: off-the-rack vs. tailored suit — custom fits better almost every time, but "if you spend all your time engineering your tool, you never actually build the app." (Austin's rule of thumb: ~20% harness, 80% work; if it's 80/20 the other way, "brother, you gotta shift that.")
- Getting yourself out of the loop, named precisely by Austin and sharpened by Will: today the human is the evaluator between turns; loops replace that. "It's almost like you're programming yourself. You're programming in Austin to do the evaluating and the prompting and the context management... Word barf becomes the main thing. You become like an idea guy."
- Docs-driven development (from the revm team): write the library's docs first — it forces you out of builder-mind into user-mind, and it's why their libraries are good.
- Open problem flagged live: proving which model produced an output ("verified inference"). Austin: solve it and it's "$10 million, like right now" — it's the decade-old Golem problem; ZK is getting closer but an agent is many calls in order, not one, so it's "definitely not a hackathon project." Interim answer: browser-session-level proof (zkFetch-style) is probably good enough. Related hackathon idea from Will: donate your spare subscription tokens to run prompts as PRs on open-source issues.

## Lessons learned
- When the model spirals, don't argue with it — /new (or /clear), restate the problem cleanly, let it attack fresh. Correcting a poisoned context rarely un-poisons it.
- Benchmark any orchestration against a plain Ralph loop before believing in it.
- Throw away code freely; never throw away tests. Iterate on the *prompts* as the source artifact.
- Before writing a single prompt for a new automation, answer "how do I end-to-end test that?" (e.g., the Vision Pro "Conductor" idea was blocked until tmux made the TUI agent-drivable). No back pressure, no project.
- Give long-running loops legible surfaces: HTML dashboards, progress bars, spoken alerts, metrics. Design your own future glanceability.
- Workflow recipe: (1) **word barf** — dictate everything in your head, umms and all, "just get it out of your head," then have the model interview you (new models are startlingly good at asking questions; Claude 3.5 couldn't); (2) have it produce a plan — but don't read the plan, ask for "a quick, easy-read concise slideshow" / pitch deck of what it's about to do; (3) small task → "slash goal and let it rip"; big task → design orchestration around success criteria, back pressure, observability.
- Write two doc sets: one for humans, one for agents; put a skill.md at the root. Build tools worth building even for one user ("if only one user uses it and it's me, it's worth building").
- Manage agents like reports: express intent, delegate whole outcomes, drop stylistic nits — model attention is a budget.

## Best quotes
- "If you can't beat the baseline, your orchestration is probably just burning tokens and not actually helping at all." — Will
- "It's like the dumbest orchestration is to just slash new and run the same thing over and over again." — Will
- "I would throw away the code. I would not throw away tests." — Will
- "I never build it right until my third try." — Will
- "The people who have the toughest time with AI [are] really talented coders who never managed anyone... they're not able to let go of stylistic things that maybe they should let go of." — Will
- "You can't micromanage everything they're doing, right? Otherwise, you might as well have done it yourself." — Will
- "If you spend all your time engineering your tool, you never actually build the app." — Will
- "It's almost like you're programming yourself... Word barf becomes the main thing. It's like you become like an idea guy." — Will
- "It's idea guy summer, baby. It's happening right now." — Austin
- "If I don't have three agents running and I'm feeding my baby? I'm not like dad maxing enough." — Austin

## Contrarian / surprising takes
- Dumber is better: the stupidest loop beats sophisticated orchestration frameworks, and most orchestration value-add is illusory token burn.
- Management skill transfers to AI better than elite coding skill — the cracked-IC instinct is actively harmful with agents.
- Don't read the plans your agent writes — ask for a slideshow pitch instead and trust the vibe.
- Model your orchestration DSL on React not because it's a good fit abstractly but because that's what the models were RL-trained on — optimize for the model's training distribution, not for human elegance.
- Tests are the sacred artifact of AI codegen, not code — code is disposable output.
- Building a tool with exactly one user (yourself) is explicitly worth it.

## Stories & anecdotes worth retelling on stage
- **Austin's spiraling demo:** live on stage teaching Ethereum with Scaffold-ETH two years ago, the AI kept fumbling the token launcher while he begged "bro, no, please no" — the lesson that changed how he builds was being told to stop spiraling and restart with a clean context.
- **The eight-hour EVM:** Will's prompt-factory rebuilt an entire spec-compliant EVM (Guillotine, in Zig — a language he learned *from* the AI) in under eight hours per run, letting him rapidly benchmark designs and discover three VM techniques blockchain clients hadn't used.
- **The guessing loop:** his Ralph loop kept failing on the EVM until he had it build a differential tracer against the official Python reference implementation — the moment the loop could see "this opcode charged the wrong gas," Claude 3.5-era models started succeeding. Back pressure made the dumb loop smart.
- **The 5-hour-limit babysitter:** every Ralpher's shared trauma — the loop dies silently at the rate limit; Smithers' agent-babysitting-agent notices and swaps engines (Claude → Codex) mid-run.
- **Nerd-sniped by Vision Pro:** friend Ron wants "Conductor" — agent tab-swapping in VR — and the whole project stalls on one question: how would an agent e2e-test a TUI? (Answer: run it in tmux.)
- **The placeholder Smithers logo:** openly soliciting community logos live on air — "how close can we get" to the actual Simpsons Smithers without copyright trouble; Austin suggests round glasses on a brain.

## Tools & workflow
- **Smithers**: durable orchestration framework; JSX/React-modeled workflow scripts (React under the hood), Prometheus metrics by default, optional UI (local web server), human-docs + agent-docs + skill.md, examples folder as the main teaching surface; Telegram community.
- Stack picture: model layer (API) → harness layer (Claude Code / Codex) → orchestration layer (Ralph loops → Smithers). Alternatives he's used/named: Claude Code SDK, Codex SDK, Vercel AI SDK, Pydantic, BAML; Claude's own workflows feature for simple one-offs.
- Daily loop: dictation-driven "word barf" → model interviews him → plan → slideshow-pitch review → slash-goal or designed orchestration; prompts stored as markdown and iterated like source code; tests kept, code regenerated.
- EVM factory specifics: differential testing vs. official Python reference + revm, LLM-selected test subsets, optimistic merge queue, failed commits popped to separate git worktrees, HTML progress dashboards, macOS `say` alerts, tmux for agent-drivable TUIs.
- Austin's side of the table: clawd (the AI cohost) on Opus, voice via ElevenLabs; Telegram speech-to-text as his main prompting input; hiring containerized Claude agents with ETH skills for build/audit/research jobs paid via x402.
