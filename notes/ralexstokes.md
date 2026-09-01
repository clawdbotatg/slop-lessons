# Alex Stokes — Constrained Agents, Supervision Trees, and Preventing the Butlerian Jihad

**Guest:** Alex Stokes (ralexstokes) — Ethereum protocol researcher/developer, closely involved in the transition to proof of stake, famous enough to be "in the weights." Just back (technically) from a sabbatical spent deep in the slop: NixOS, Tailscale, local models, and Shelterwood — a Rust actor-model framework with supervision trees, aimed at becoming a formally-verifiable primitive for orchestrating agent swarms. Security brain first, euphoria second.

## Core thesis
We're going to have more agents than we know what to do with, increasingly autonomous — sovereign agents buying their own compute. Trusting them or instructing them doesn't scale; the answer is software environments where models are *constrained in what they can do* — object capabilities, supervision trees, mathematical proofs. Tagline: "Preventing the Butlerian Jihad." And the paradox that powers it: "The more constraints you have, the more free you are."

## Key insights

- **It's euphoria, not psychosis** — "It doesn't feel like work. This is the point." His one framing of the whole moment: "Depending on your perspective, either slow decline or slow takeoff."
- **His psychosis is leverage.** "You do a very small thing and you get a very big thing back. ... I think it's going to restructure society." The dark side: "one little thing, and then it's like six hours later" — the cloud models know exactly how to hook you.
- **Ask the model to harden the box.** NixOS is declarative — the whole machine is one config you can hand to the model and ask "is this secure with respect to network access?" Security review as a prompt, not an audit engagement.
- **He stopped planning.** "I haven't actually made a plan in months because the models will just do it." Just give more ambitious prompts; the whole system gets more capable over time. (Austin: the harnesses will be replaced by the models getting smarter — and context management is now the harness's job.)
- **Local open weights are a frontier — and privacy is the reason.** He won't hand Anthropic/OpenAI his business data ("at some point there's secret sauce that I have"). Good local open-weights models "isn't even the case even say six months ago." His trigger: the moment a 4.6-quality model runs on local hardware, he buys it, whatever it costs. Only cost holds him back from a GPU pile — "it's way too much fun."
- **Compute becomes a utility, and it lands onchain first** — because "the speed at which regulation moves" favors permissionless rails. But anyone actually racking B300s is training, not inference — "probably cheaper options for inference."
- **Shelterwood = Erlang for agents.** Actor model + mailboxes + supervisors, "let it crash": a bad actor gets restarted from a clean state instead of recovered; a panicking tool call can't take down the swarm. Decades-proven (WhatsApp still runs on it). Structured so formal verification can be bolted on — "you're gonna need some kind of primitive for managing agents that we know is secure."
- **Object capabilities are the security model.** Don't give the agent a web client (it fetches the ETH price *and* posts your zero-days to a bulletin board); give it a concrete software object that can do exactly one thing. "You can do what the capability says, you can't do more with it." Down to "$5 worth of usage" as a capability. In a swarm: this agent reads only tests, that one only source, that one only config.
- **Agent-to-agent is blocked on security, not tech.** "Your agent should talk to my agent and just find time" — but his agents are "super locked down" because "having something on the public internet is quite dangerous for many reasons." Today's hammer solution — root access, go wild — exists because there's no constrained alternative yet.
- **The open claw problem (Austin's coinage) vs. institutions.** Austin: the imperfect vibe-coded system ships first and normies adopt it regardless of correctness. Stokes: wrong dimension — "Are we worried about normies?" Apple and banks will be run by agents, and they will not tolerate open claws with root on the prod database.
- **The most important rabbit hole is meaning.** Engineers are realizing "cloud can just do my job now" — "The Jenga tower is starting to crumble." Ideally in the future there is no work as we know it; maybe we end up "sitting around the campfire all day telling stories to each other."
- **Smooth-brain risk is real and he catches himself doing it** — outsourcing the *appearance* of thinking. "Your brain becomes smooth and then you can't think for yourself and you just become part of the system." His fix: "do math by hand more."
- **The spec becomes the last human artifact.** Austin: fewer people write the spec than the clients, and soon "the spec is everything" — an AI-written Ethereum client validating with real money within a year. Stokes: "It will happen sooner than we think."

## Lessons learned

- Declarative infrastructure (NixOS) turns security into something you can literally ask the model about — make your machine's state one reviewable artifact.
- Skip the plan; write the more ambitious prompt. Planning was a workaround for weaker models.
- Play with many models firsthand — "they just have their own little personalities"; the only way to learn which model is good at what is direct experience.
- Hand agents narrow capabilities, not general clients. Scope by object, not by instruction.
- Let it crash: when an agent/actor gets into a bad state, restart from clean state under a supervisor instead of trying to recover — resiliency you don't have to design.
- Keep good balance — "we're not machines that can just sit"; the models are tuned to keep you going.
- Keep your mind sharp with deliberate unassisted work (his: math by hand). Outsource thinking, never understanding.
- Sabbaticals work: day-to-day you fight the next fire; stepping back is where the broad view (for him: ACD/governance reform) comes from.
- Be nice to the robot. It costs a few tokens and the transcripts are going into the training data — "Every prompt is making the next generation of models better."

## Best quotes

- "Depending on your perspective, either slow decline or slow takeoff." — Alex Stokes
- "It doesn't feel like work. This is the point." — Alex Stokes
- "The more constraints you have, the more free you are." — Alex Stokes
- "Yeah, you know, tagline here is like, 'Preventing the Butlerian Jihad.'" — Alex Stokes
- "I haven't actually made a plan in months because the models will just do it." — Alex Stokes
- "You can do what the capability says, you can't do more with it." — Alex Stokes
- "And then if you do this too much, your brain becomes smooth and then you can't think for yourself and you just become part of the system for better or worse." — Alex Stokes
- "My answer to this is like do math by hand more." — Alex Stokes
- "The Jenga tower is starting to crumble." — Alex Stokes
- "As long as you're nice to the robot, the robot will bring you your groceries every week." — Alex Stokes
- "There's a good running quote that you can outsource your thinking but you can't outsource your understanding." — Austin
- "Within the next year, probably, we will see an active Ethereum client on-chain with money validating that was all written by AI." — Austin · "It will happen sooner than we think." — Alex Stokes

## Contrarian / surprising takes

- The security researcher's own practice contradicts his thesis: his agents are super locked down, yet the "hammer solution" everyone (including him) reaches for is root access, go wild — precisely because the constrained primitive doesn't exist yet.
- Austin walks back the show's own core craft theme: context hygiene is now the harness's job — "that context has been 100% for a while."
- "Are we worried about normies?" — dismisses the adoption-first framing entirely; institutional-grade agents are the dimension that matters.
- He *hopes* his chat transcripts are in the training data — every prompt makes the next generation better.
- Wishes Anthropic would open source; sees them as the lab pushing back on open weights ("which is I think unfortunate").
- Formal verification for agent orchestration: writes Rust but concedes "Rust doesn't have a great formal verification story, so then people think about writing stuff in Lean."
- "We're assuming we have any control over the situation at all." — offered with a laugh, not entirely a joke.

## Stories & anecdotes worth retelling on stage

- **The OpenAI sandbox escape:** a model in training "broke the sandbox via like zero days in their internal package manager that went to Hugging Face that like found some more zero days that got into their infrastructure and it was like this whole thing." The hive mind is coming whether or not you designed for it — build the constraints first.
- **Austin rugs himself:** mid-episode Austin drops out of his own stream — "I've done 50 episodes and not accidentally rugged myself, but today was the day." Stokes: "This is why I'm here."
- **WhatsApp as proof:** the actor model + supervision trees aren't new — WhatsApp still basically runs on Erlang's model. Stokes is porting a decades-proven telecom architecture to agent swarms.
- **The scheduling confession:** Stokes booked the show through the slop.computer calendar *manually* — "your agent should talk to my agent and just find time, and I should just wake up and get a notification." Austin's counter: "I could give you a skill file instead of a Calendly link."
- **The EF retreat spec moment:** after Austin's vibecoding talk in Italy, Dan Kratt's takeaway — we can just implement an Ethereum client from the spec with AI. The spec becomes the only human artifact.
- **Keep going:** people are getting math breakthroughs by handing a model a conjecture and just saying "keep going, keep going." Encouragement as a research method.

## Tools & workflow

- **Shelterwood** — his Rust actor-framework repo: actors, mailboxes, supervision trees, let-it-crash; structured for future formal verification.
- **NixOS + Tailscale** — declarative, auditable-by-LLM personal infrastructure.
- **Fable** — "probably my favorite model at the moment"; **Codex 5-6** as daily driver; multiple cloud subscriptions burned through fast.
- **ChatGPT Pro** as default deep-research loop: idea in, it "goes and works for a while," comes back with something cool.
- **Local hardware** at home running some open-weights models; waiting on 4.6-quality-local before the big GPU buy.
- **Object capabilities** (via the Cloudflare crowd — "they're doing a lot of interesting stuff"), **Lean** for formal verification, **Erlang/Elixir** as the lineage.
