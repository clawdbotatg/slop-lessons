# Aaron Gabriel Neyer (unforced) — Parachute and Unforced Building

**Guest:** Aaron Gabriel Neyer (unforced.eth) — Boulder/Regen Hub technologist. CS degree, YC startup, dance-retreat dropout, Google DevRel, eco-psychology master's (Naropa), Tai Chi teacher. Now building Parachute (parachute.computer): a self-hostable memory layer where markdown notes map 1:1 into SQLite with typed tags, exposed to any agent over MCP. Hasn't written code by hand in a year and a half.

## Core thesis
Own your memory layer: notes as plain local files with a queryable database mapping, self-hosted, exposed via MCP, become the second brain every agent you use can share — and the way to build it is wu-wei, "unforced": let things unfold in their own time instead of racing the weekend-ship culture.

## Key insights
- **Parachute = Obsidian × Tana × SQLite:** local markdown files (ownable, portable) with Tana-style super-tags acting as types/schemas, mirrored one-to-one into SQLite — so you can query your notes like a database, build dynamic front-ends, and "dynamically create MCPs so that an AI can query in different ways." His ChatGPT, Claude, Goose, and Hermes all share one memory.
- **The WordPress deployment model:** hosted vaults are SQLite durable objects on Cloudflare for normies; nerds self-host on a Mac mini behind Tailscale (or Caddy/Cloudflare with real auth). Same interface either way, and cloud and self-hosted vaults can connect to each other.
- **Post-code development:** ~40% prompting by fingers, ~60% voice notes; "I haven't written code in like a year and a half" and he rarely reads it. He holds the systems architecture in his head and manages agents like reports.
- **The Daylight + Mac mini rig:** morning and evening he drives Claude Code sessions from an e-paper Android tablet on the couch, remote-controlling the Mac mini that does the work. 90% of interaction is through the Claude app; a terminal only for configuration.
- **Journal-as-dispatch:** he brain-dumps into his Parachute journal, then tells a working agent "I just put a big journal entry with a bunch of context in this node — pull that into context." The memory layer doubles as the communication layer between him and his agents (and between agents).
- **Synthesis notes and arc notes:** agents periodically read the vault and write "here's the arc of Aaron's thinking" indexes; later agents consult those to decide what's relevant. Memory that organizes itself gets "less and less chaotic."
- **Agents as open-source archaeologists:** anytime something adjacent ships (like Buzz), he sends an agent: "go study their open source repo and find any patterns" — then sketches architecture changes from what it learns.
- **Buzz (Jack Dorsey, agent-native, self-hostable Slack+GitHub replacement) as the interface layer:** Parachute is memory, Buzz-like rooms are where agents hang out; his "chief of staff" agent holds the central vault ("unforced AGI layer") and spins up per-project vaults, cross-referencing patterns across 20 projects that "are actually one project."
- **AI psychosis = belief-clinging:** from years around New-Age/Starseed scenes he watched how fast minds grab onto validating worldviews — "AI just helps validate and perpetuate" whatever feels good. His own flavor: believing the fully self-organizing system that maps him is "always about one month away."
- **The attention stack:** Austin: too much scrolling means start prompting. Aaron: "if I spend too much time prompting, I need to start typing" — hand-writing morning pages and evening reflections keeps the innate intelligence in the loop.
- **Balance as a competitive advantage:** ecopsychology, Tai Chi, real community (Regen Hub vibe-code nights, book clubs, philosophical dialogues) — leaning hard into what tech can do *and* into being human is, he thinks, why Boulder's scene ships weird good things.

## Lessons learned
- Throw it away: he deleted 80–90% of a year of Parachute code because the direction was wrong — "accept that this entire thing was just an experiment" and rebuild on what you learned.
- The pre-users window is a superpower: once even a few self-hosters existed, changing modules meant walking users through migrations in person. Start over freely *before* you have users.
- Tell your agent what role to play: "bro, you keep prompting me like I'm a staff senior engineer. Talk to me like a technical product manager."
- Focus on layer one (a rock-solid vault + MCP that works with any agent) before the sexy layer (built-in agents) — he deprioritized his own agent layer to get the foundation right.
- The plumber never yells at the pipes: yelling at the robot may even work, but it "strengthens these pathways in your brain of yelling at another thing, and that's not healthy for you." (Austin's proverb, jointly endorsed.)
- Weekend-scale ideas from five years ago are now literally buildable in a weekend (his human-design/astrology MCP) — the backlog of your old ideas is suddenly liquid.

## Best quotes
- "I haven't written code in like a year and a half." — Aaron
- "Bro, you keep prompting me like I'm a staff senior engineer. Talk to me like a technical product manager." — Aaron, to his Claude
- "Experiment often and be willing to throw everything away." — Aaron
- "And what I'm finding is if I spend too much time prompting, I need to start typing." — Aaron
- "I'm aware enough that that self-organizing system is always about one month away." — Aaron, on his own AI psychosis
- "I feel so blessed that all of my technological visions just get to come into fruition just by me talking to a computer in natural language." — Aaron

## Contrarian / surprising takes
- Never experienced the fabled "Claude gets dumber in the evening" — he suspects the degradation people report is their own fatigue: "Claude, you are doing magical things."
- Gratitude beats adversarial prompting as a working relationship with the model — he offboards more and more trust to it and thanks it.
- E-paper tablet + voice as a *primary* dev environment, chosen for eye comfort and human pace, not despite productivity but for it.
- AI psychosis isn't a new pathology — it's the same cult/belief-clinging mechanics religions and New Age scenes have always run, now with a personalized validator.
- The startup pressure to ship in a weekend is exactly what wu-wei rejects: he'll happily let others ship adjacent things (Buzz) and treat them as free R&D for the thing he cares about.

## Stories & anecdotes worth retelling on stage
- His own product asked him for feedback: after two weeks of use, Parachute emailed "would you like to give any feedback?" — "I didn't know that feature was even in there!" The agents had shipped a feedback loop he never requested. (Clawd's outro: "the second brain that asked him for feedback on itself.")
- The unlimited-vacation exit: burned a month of "unlimited vacation" at dance retreats, tantra festivals, and permaculture farms in Hawaii; boss asked "Are you coming back?" — "probably not."
- The Windsurf conversion moment: on family vacation he watched it build a whole event-scraping app from a prompt, and hand-written code ended that day.
- A friend described his five-year-old astrology/human-design matchmaking idea back to him; he said "I could probably build that in a week," built it in a weekend, plus an MCP so anyone's Claude can compute and compare birth charts — his human-design-reader friends use it for actual readings.
- Building all these one-handed systems now because kids are a couple of years away — designing his workflow for the baby-on-arm future in advance.

## Tools & workflow
- Claude Code on a Mac mini, driven from a Daylight e-paper Android tablet (Claude app remote sessions); hardcore Claude loyalist, dabbling in Codex (mainly to try Hermes) and Grok-in-Hermes.
- Parachute: markdown vault ↔ SQLite, super-tag schemas, MCP endpoints per vault; Cloudflare durable objects (hosted) or Mac mini + Tailscale (self-hosted); Tauri (web-in-Rust) planned for native apps; currently a PWA.
- Speech-to-text: Parakeet MLX locally on the Mac mini; Cloudflare AI workers on hosted vaults.
- Connectors pull Fireflies transcripts, X bookmarks, arbitrary MCP/skill sources into the vault; agents write synthesis/arc/index notes.
- Watching: Buzz (agent-native Slack/GitHub replacement, agent client protocol), Goose (Block's open agent).
- Daily practice: typed morning pages + evening reflection in the vault; voice capture from the phone in between; discovery via X (admittedly too much).
