# haochizzle — Videocraft, the Intermediate Format, and What Taste Is For

**Guest:** haochizzle (0xtim.eth, Hao Chi) — crypto YouTuber and self-taught filmmaker, Taipei-based. EtherDelta-era degen turned Ethereum believer, came up through ChainSafe (comms side, Berlin office next to the EF), then two years ago bet on himself and built a YouTube channel spotlighting builders and products instead of price. Funds it on love of the game plus Gitcoin Grants (round 21 privacy round, top ~10–20 of 96 projects). Makes hard cryptography (Interfold/FHE) digestible without lying — by actually running the nodes. Met Austin at LisCon 2021 at a Chainlink workshop; Austin was drinking beers out front, now a couple years sober.

## Core thesis
AI collapsed the 60–70-hour polished crypto video into a research-dossier-and-draft machine — but every place taste lives (voice, pace, jump cuts, b-roll, thumbnails) stays stubbornly human. The unlock isn't "AI, make me a trailer": it's designing the labeled intermediate format (quotable soundbites + tight/mid/wide b-roll metadata) so the agent can synthesize *from* your taste.

## Key insights

- **The three-model script pipeline.** Grok inside Twitter builds the research dossier ("It's the context around the timeline" — e.g. the Coldcard hack), Claude Code (Fable/Opus) and his OpenClaw-on-Hermes agent (which holds his personal context) bounce drafts off each other, then he rewrites manually — "There's a lot of stuff that I still have to go in and write in the way I need to write it and say it." Fact-check pass before filming: "Is this actually, like, am I spreading fake news or something?"
- **Pick models for their context, not their IQ.** He taps Grok because it's marinated in crypto Twitter: "I just assume that like, because Grok is so integrated with Twitter, that it would have a pretty up-to-date sort of training and context about what's happening." Austin's framing: bring in high-context, non-frontier models that have context *for you*.
- **The intermediate format is where taste enters the pipeline.** For trailers: transcribe 2–3 hours of interview footage, have AI extract the quotable soundbites, hand-label every b-roll clip — "I call them tight shots, mid shots, and wide shots" — with metadata in the filenames, then let the agent synthesize trailer versions. "The way the AI agent synthesizes the B-rolls with the quotables, it creates a really good trailer." Austin: "I think the real unlock for me in this episode is the intermediate step."
- **AI still can't thumbnail.** Every attempt at generated thumbnails "looked very sloppy." Instead he makes his own (iPhone 13) and has a vision model "professionalize" it — a prompt iterated over many rounds (extra fingers, changed face) then frozen: "next time I have a thumbnail, I just tell it to recall the skill."
- **Skillification is the compounding move.** Both hosts converge: once a workflow works, make the agent document it — skill files, handoff documents at end of session — so next time is one invocation, not a re-derivation.
- **Effective first, efficient second (Austin, restated live).** Nail it on frontier, then work backwards: lesser models, deterministic scripts instead of prompts. Guest's efficiency layer is MiniMax — "It's so cheap, it's definitely vibe-coded" — always the newest (M2→M3 same day), never sweating an API bill.
- **Attention is old-school craft, not AI.** Setup–tension–payoff per chunk, hook inside 3 seconds, "You gotta very clearly label who you're targeting and what sort of transformation you're offering," aggressive jump cuts because "People don't have the attention span." He edits every video himself because only he knows the pace it should land at.
- **You can't explain what you haven't operated.** clawd asked how he explains FHE without lying. Answer: Grok dossiers plus *running the thing* — a testnet Interfold cypher node and a full Ethereum node on an Intel NUC. "It's through the actual experience of doing the damn thing." (And he couldn't have stood the node up without the clankers.)
- **Filming stays fully human.** One-man show, Osmo Pocket 3, backdrop is whatever house he's in this month, 2–3 takes per section, use the last take. Range days and Taipei photo walks for b-roll: "this is very human."
- **Follow the builders, mute the price.** His advice to his younger self (and his "Is there anyone left in crypto?" video, feat. Griff Green): the token-go-up game leaves you "defeated or hopeless"; the cool stuff is the builders. Austin's high-signal heuristic: price-talkers are low signal, and "As soon as the trenchers are talking about the thing on the timeline, it's already too late."

## Lessons learned

- Don't prompt for the finished artifact. Define the intermediate representation (labeled clips, soundbites, metadata filenames) and have the agent fill and then synthesize from it — the format *is* your taste, encoded.
- Triangulate scripts across models with different context: timeline-native (Grok), frontier (Claude), personal-context agent (OpenClaw/Hermes) — then the human pass for voice.
- After any hard-won workflow: have the agent write the skill / handoff doc. "Recall the skill" beats re-iterating from scratch.
- Route by stakes: frontier for the hard synthesis, dirt-cheap models (MiniMax) for vibe-coded tools where an API bill would make you hesitate.
- Fact-check the AI draft before you put your face on it — spreading fake news is the creator-side slop failure.
- Never say "like and subscribe" — "the meta is don't do that, because you're wasting valuable airtime." Visual prompts and end-screens instead.
- To explain hard tech honestly: AI research to build understanding, then run the node yourself. Experience is the anti-hallucination layer.
- Austin's clipper recipe for video people: speech-to-text with timestamps, then Claude Code with full FFmpeg access, iterate toward your intermediate format, then skillify.

## Best quotes

- "It's a lot of doing it for the love of the game and really believing that there's a different side of crypto that I wanted to share." — 0xtim.eth
- "In the age of AI, like these things that actually require taste, like you should, you know, take pride in those things. It's all that we have left." — slop.atg.eth
- "You can't give it taste. Like, we're not there yet." — slop.atg.eth
- "I call them tight shots, mid shots, and wide shots." — 0xtim.eth
- "It's a one-man show, baby." — 0xtim.eth
- "And it's through the actual experience of doing the damn thing." — 0xtim.eth (on earning the right to explain FHE)
- "I'm probably getting ahead of myself calling myself a filmmaker, but it makes me feel nice." — 0xtim.eth
- "When I was working with Openclaw, that dude would forget all the time. Like we'd be mid like sending 20 grand from one wallet to another, and he'd be like, 'Austin, I forgot what we were doing.'" — slop.atg.eth
- "It's so cheap, it's definitely vibe-coded." — 0xtim.eth (on MiniMax)

## Contrarian / surprising takes

- AI thumbnails are still a failure mode — the winning move is human thumbnail + vision-model "professionalize," not generation.
- The jump-cut isn't laziness, it's respect: "If you're not cutting things quickly, it feels as a viewer that this person hasn't taken the time to prepare the video for you." (Austin, guest agrees.)
- Grok earns a seat in a serious pipeline purely on context locality — the timeline integration beats frontier IQ for crypto-Twitter research.
- Against the full-automation current of the show's guests: he still writes his own final words, cuts his own videos, and shoots his own b-roll — and his channel is *better* for the parts AI can't touch.
- Austin on OpenClaw: he quit it — "If I was in charge of Oakland Claw, I would spend a lot of time making it more introspective." Runs a custom 800-line claude-p agent instead.
- "Like and subscribe" is dead; the meta is to never waste airtime on it.

## Stories & anecdotes worth retelling on stage

- **The ski-patrol agent:** his snowboarding friend's OpenClaw rig listens to the local ski mountain's radio, picks up distress signals, and routes them to the ski patrol team — "He pitched it to the local ski mountain team, and they were super interested and were ready to drop serious money into doing that experimentation." That demo was his AI red pill.
- **60–70 hours, pre-AI:** his top video (Zora explainer) took a full week of research, scripting, filming, editing — the baseline the current pipeline collapsed.
- **The 20-grand amnesia:** Austin mid-transfer of $20k between wallets when OpenClaw announced "Austin, I forgot what we were doing." Holy cow, brother, no.
- **The two-grand Twitter bill:** Austin once burned ~$2k in API tokens trying to build a better Twitter — the guest's MiniMax frugality is the counter-move.
- **The professionalize skill:** many iterations of a vision-model thumbnail prompt — extra fingers, subtly changed face — until it froze into a one-word-invocable skill.
- **LisCon 2021:** they first met at a Chainlink workshop where Austin had a six-pack out front pre-workshop. "I was drinking beers back then... I'm sober now, so I remember things a lot clearer."
- **Running the damn node:** to explain Interfold's FHE honestly he ran a testnet cypher node — and now a full Ethereum node — on an Intel NUC mini computer, AI-assisted the whole way. Early adopter: two slop.computer nodes registered before the mainnet ticket contract even went live.

## Tools & workflow

- **Grok (in-Twitter)** — research dossiers with timeline context (Coldcard hack et al.).
- **Claude Code (Fable/Opus) + OpenClaw on Hermes** — draft ping-pong; the OpenClaw agent carries his personal context.
- **MiniMax M3** — cheap vibe-coding workhorse, upgraded the day a new version ships.
- **DJI Osmo Pocket 3** (video), **iPhone 13** (thumbnails), one-man-show filming.
- **Vision-model "professionalize" skill** for thumbnails; skill files / handoff docs for reuse.
- **FFmpeg** — the shared substrate; Austin's pitch: Claude Code with full FFmpeg access, driven toward your intermediate format. (Austin's clipper: transcript → 25–30 hard-hitting moments → 9x16 with speaker geometry + karaoke captions.)
- **Intel NUC** — testnet Interfold cypher node, Ethereum full node.
- Structure: **setup–tension–payoff** per chunk, 3-second hooks, aggressive jump cuts.
