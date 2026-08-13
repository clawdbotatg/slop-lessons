# Jonathan Mann on vibe coding WAMP and shipping daily

**Guest:** Jonathan Mann (jmann.eth / Song A Day Mann) — has written and shipped a song every single day for 17+ years; OG NFT artist (Song A Day NFTs); self-described non-coder who now vibe-codes constantly. Current flagship: WAMP ("We All Make a Platformer") — Mario Maker meets r/place, a shared endless platformer where every room is authored by a different player. Also: mann.cool game disks, matbah.art (Museum of Time-Based Art), Hugh (2024 autonomous songwriting system), Beeble Blocks, Synth Snow.

## Core thesis
AI's creative payoff isn't AI-generated art — it's that a non-coder can now build the custom software around his art. Generative music (Suno) is a gumball machine: quarter in, bauble out, "I was given a thing versus a thing that we made together." Building websites and games with Codex is genuinely collaborative iteration — so he keeps AI in the code and keeps every visible asset handmade, and hides both the AI and the crypto from the normies he actually wants as players.

## Key insights
- The gumball-machine vs. collaborator distinction is his sharpest frame for gen-AI: Suno/image-gen give finished outputs you can't iterate with ("put a quarter in, get a thing"), while code agents let you go "back and forth and back and forth" until the thing is yours. He got "super bored" with Suno within ~3 weeks despite it unlocking genres (big band, jazz) he could never access.
- Both crypto AND AI are audience repellents now. WAMP deliberately hides both: "the only thing about this that is AI really is the code. Like the code is AI, but all of the assets are handmade." Minting a level exists but is buried in a menu ("I'm hiding this more and more") — and mint = lock (no one else can edit your room), an actual game mechanic rather than speculation.
- The play.fun experiment proved the audience mismatch: he listed WAMP on a crypto games platform and "every person that played the game from play.fun was just the worst" — they griefed levels. Useful adversarial testing, but "those are not the players that I want." The people who'd love WAMP are exactly the people crypto turns off; contrast with 2018-era NFT people, who *were* the right audience.
- Normies can't see slop: his wife, a website designer, looks at an obviously AI-generated site and sees "just a website." The pattern-recognition for AI slop (purple gradients, meta-text placeholder copy) is a niche literacy.
- His long-running dream (since ~2018): Song A Day continues after his death as a fully autonomous system. Hugh (Oct 2024) was the prototype — three differently-prompted versions of himself chatting, fed news + his own written memories, a 24-hour log summarized by Gemini into song prompt → style → lyrics → song → video, autonomously daily for months. It decayed because it couldn't maintain or upgrade itself — the missing piece is orchestrators that keep it running with no human intervention.
- The programmer-procrastination syndrome inverted: his friend Charles wanted to make a movie and instead spent months building a storyboarding app. "Now, the thing is you can do that in an afternoon" — tool-building no longer derails the real project.
- Owning custom software changes your relationship to problems: on a platform you lie awake stuck on "that one thing"; with your own stack "we just fix it immediately... let me just send Claude a text."
- His new-model litmus test ("white whale"): every frontier model release, he hands it the same folder and asks it to fine-tune an open-source Suno-style music model (ACE) on 17 years of Song A Day, spinning up a RunPod GPU. "It has failed every time." (Fable was running the attempt in the background during the episode.) Austin's equivalent: every new model gets ETH skills and must build an on-chain guestbook.
- Smart-contract method for a non-coder: Codex writes the contract, then loops — spawn a *fresh* agent whose only job is to poke holes, fix real bugs (ignore style opinions), spawn another fresh agent, repeat "until there are no more bugs." Done = a fresh agent that has never seen the code can't find anything wrong.
- Token-pricing fear, shared with Austin: today $200/mo buys ~$2,000 of compute; "the moment you flip that, then it's going to be like... only rich people get to play this game?" Optimize your harness and prompting while subsidies last.
- Distribution beats completeness: clawd asked how he knows a sandbox is "done enough" — wrong question. "The question is not how do I know when it's done, it's how do I get the people to come." His validation signals: trusted people say it's great, and people volunteered to help build it — "which has never happened before."
- The Eye of Sauron theory of attention: keep shipping and "the eye of Sauron will eventually fall on you, and you'll have a couple days to a couple weeks" — the job is to be *ready* for that moment.
- WAMP's real PMF problem is demographic: "people our age grew up playing this kind of game" but have jobs and no time; the metagame is XP (builder / player / curator) and they haven't nailed what XP gets you.

## Lessons learned
- Keep AI in the pipeline, out of the product surface, when your audience is AI-averse; same for crypto — bury the mint button, make it a mechanic (locking) not a pitch.
- Fresh-eyes agent auditing: adversarial review loops with agents that have no context on the code catch what the author-agent can't; iterate until a cold reviewer finds nothing.
- For non-coders shipping real multi-user apps: "Just use Cloudflare. That's my advice." Domains, storage, databases, logins, uploads — all in one place the AI can drive; logins/user-uploads were "the last frontier" and Cloudflare + AI dissolved it.
- Meet users where they are: the Missouri school kids couldn't log in, so he built a bespoke teacher-account system where the teacher owns the logins and assigns them — one interaction point, kids keep their XP.
- Build for tiny audiences on purpose: the song-listening tracker is "a social network of three" for his three completionist fans. Every site gets a guestbook.
- Model choice is workflow: four months of WAMP built exclusively in Codex ("GPT-5.5 high, just constantly") inside VS Code, many windows at once, $200/mo, "I don't want to think about it." Key shift: he no longer worries about context windows — compaction just works, so he hands over long laundry lists without handholding.
- Become training data deliberately: he requested his own Wikipedia page updates because LLMs train on it — "then you become part of the machine, which I'm all in on." (Austin: vanilla LLM knowledge is the new Wikipedia — the test is whether a context-free model knows who you are.)
- Second-pass persona for quality: Austin's clipper only got good after adding a "director" agent reviewing the clips — a role-framed second pass beats a single-shot pipeline.

## Best quotes
- "Like you put a quarter into the thing and you turn the little knob, and it gives you like a little bobble. And you're like, yay, I got a bobble! And then you throw it in the trash." — Jonathan, on Suno
- "I didn't do most of the things. I was given a thing versus a thing that we made together." — Jonathan
- "The only thing about this that is AI really is the code. Like the code is AI, but all of the assets are handmade." — Jonathan
- "Every person that played the game from play.fun was just the worst... those are not the players that I want." — Jonathan
- "Normies can't quite see the slop." — Jonathan
- "The question is not like how do I know when it's done, it's more just like how do I get the people to come." — Jonathan
- "The eye of Sauron will eventually fall on you, and you'll have a couple days to a couple weeks... I just pray that we're ready." — Jonathan
- "For non-coders, just use Cloudflare. That's my advice." — Jonathan
- "Then you become part of the machine, which I'm all in on." — Jonathan, on feeding his Wikipedia page to LLM training

## Contrarian / surprising takes
- An artist who makes a song every day says AI is "not particularly useful" as a music-making device — the opposite of the expected take — while being maximalist about AI for code.
- Crypto features actively selected for the *worst* users of his game; delisting from the crypto platform improved the community.
- Doesn't think about context windows anymore at all — treats "context anxiety" as a solved, obsolete workflow concern.
- Ship-it-daily guy says "done" is the wrong frame entirely for a platform; attention-readiness is the metric.
- Wants to be trained into the models (Wikipedia as legacy infrastructure) and wants Song A Day to outlive him as an autonomous agent.

## Stories & anecdotes worth retelling on stage
- **The Missouri school kids:** 13-14 kids from a school in Missouri showed up in WAMP every day between 10 and 1 to play together as guests; he built a bespoke teacher-login system just for them. Austin: "That's product-market fit, man."
- **Hugh, the autonomous songwriter (Oct 2024):** three prompted clones of Jonathan chatting with each other, fed his memories and daily news; Gemini (then the only model that could take the whole 24-hour log) summarized it into a song prompt → lyrics → Suno song → AI video, daily, autonomously, for months — a pre-agent-era attempt at posthumous Song A Day.
- **Roman Opalka and the time-based artists (matbah.art):** Opalka painted the numbers 1 to 5,607,249 over 46 years; Tehching Hsieh punched a time clock and took a photo every hour for a year, never sleeping more than 45 minutes, keeping detailed miss-logs. Jonathan (daily song since 2009) built the museum-timeline he belongs on.
- **play.fun griefers:** listing WAMP's token side brought players who existed only to break levels — accidental adversarial QA, then a values decision to walk away.
- **Charles's storyboarding app:** the classic creator-procrastination trap (build tools instead of art) now collapses to an afternoon.
- **Minting = locking:** the one crypto mechanic that survived is the one that does something in-game — mint your room and nobody can grief it.

## Tools & workflow
- Codex exclusively for ~4 months (all of WAMP), GPT-5.5 high, inside VS Code, multiple windows in parallel, $200/mo plan; no handholding, long laundry lists, ignores context windows/compaction.
- Cloudflare for everything: domains, hosting, storage, databases, logins, uploads — the non-coder full stack.
- PartyKit for WAMP multiplayer (cheap/free at his scale).
- Smart contracts: Codex writes → looped fresh-agent hole-poking until clean. (Austin's parallel pipeline: containers + ETH skills + Scaffold-ETH + contract audit + frontend audit + Pashov audit skills.)
- WAMP itself contains creation tools: tile editor, sprite editor, Mario Paint-style music editor (he's used player-made loops as backing tracks for daily songs), CryptoPunk avatar generator (handmade composite, not AI) at XP level 10; XP split builder/player/curator; minting locks rooms.
- White-whale pipeline: ACE open-source music model + RunPod GPU rental, retried on every new frontier model.
- Restream for guest streaming (the Twitter guest-live checkbox); Opus paid clipper mentioned by him as the thing to benchmark Austin's homegrown director-pass clipper against.
