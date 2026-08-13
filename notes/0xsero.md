# 0xSero — Local AI, REAP Quants, and Why Open Source Must Win

**Guest:** 0xSero — the "local AI guy." Ex-crypto (EF grant, Superfluid, MakerDAO circle, Eliza OS contributor), now compresses frontier open models (74 models on Hugging Face, TurboQuant), runs a 753B-parameter model at home in Warsaw, writes the "Open Source Must Win" essay (1.3M views), funded by the Human Rights Foundation to fight surveillance, compute sponsored by NVIDIA/Anthropic/Lambda. Building local.ai (hardware→best-model benchmarks) and maintaining the open-source Kitty Litter Codex app.

## Core thesis
Access to intelligence is becoming a utility, and if it stays centralized it becomes the next health insurance / ISP chokepoint — so open-source models plus cheap self-hosted hardware must win. Compression (quantization, pruning, REAP) is how you shrink frontier brains until ordinary people can own one.

## Key insights
- **The compression cheat sheet:** 16-bit = 2 bytes/weight (750B params ≈ 1.5TB), 8-bit = half, 4-bit = a quarter (~370GB). Quantization = lower numeric precision; pruning = deleting cold routes; REAP = removing whole redundant experts from an MoE. His GLM standard is ~3.25-bit mixed quantization: "no regressions, no weird loops" on almost everything.
- **The speculative-fidelity trick (young method):** keep a 2-bit cache of the whole model; when token confidence drops, fetch the relevant experts at high precision from NVMe/DDR5 into VRAM, run that token, throw it back out. Low-confidence moments get a bigger brain on demand — this let GLM 5.2 run on two RTX 6000s.
- **After weights, the KV cache is the bottleneck:** weights are 50–80% of memory; a 1M-token context in 8-bit costs another ~100GB. His comfort target: 268k context plus concurrency headroom for sub-agents.
- **Subscription economics are a subsidy on borrowed time.** Heavy users spray agent loops across 20 sessions and consume ~5% of a 64-GPU node — vastly more than $200/month buys at rental prices. Average sub price already went $12 → $200 → $280 (EU ChatGPT Pro). Prices rise or usage gets cut.
- **His usage: six max subscriptions across every lab, ~30 billion tokens a month, only ~10% local** (up from 5% — local quality is climbing).
- **The nightmare scenario:** AI distributed like US health insurance, or GPU supply sold to governments who become ISPs-of-intelligence that can shut it off. He's lived in a country that could turn off the internet; "it's not as simple as Starlink."
- **Distribution is everything (Gucci analogy):** anyone can produce a Gucci-quality shirt; the value is the distribution and the stamp. Same with code — anyone can make your dashboard/app now, so value accrues to proprietary underneath (inference, vertical integration) or to audience.
- **Agents + FFmpeg is an underrated money-printer:** models love FFmpeg, tiny local models drive it well, and people pay real money for what are ultimately FFmpeg scripts that convert into attention.
- **Agent-to-agent collaboration is already here:** "my agents are already talking to other people's agents just naturally" — he gave Austin's slop.computer skill file to his local agent live on air.
- **Personal data maximalism:** he renders years of his own Twitter/history as a 3D city his agent can walk; keeps a `/personal` folder with everything he's ever written plus medical records and feeds it to each new frontier model.
- **Buy-hardware psychosis has a rational core:** if a laptop can run inference overnight and send an agent to do paid work, hardware has guaranteed ROI — which incentivizes a consumer hardware buildout.

## Lessons learned
- Keep it simple: "the models just love to overcomplicate everything. They're very good at localized changes, they're not good across systems." Stick to a single git branch.
- Long-running autonomous tasks are a numbers game: queue lots, most dies, some is gold — "spray and hope."
- Self-sovereign AI is now a $4–5k problem (even $1k if scrappy), not a $20k one — and it wasn't true even a year ago.
- Route jobs by model temperament: Codex app for everything computer-use (GitHub, email, calendar, drive); Claude for personal/trust work — "it's a great communicator."
- vLLM / SGLang over Ollama for serious local serving — much faster.
- When a project stops being fun, hand it off or move on; each "failed" method (TurboQuant) is the stepping stone to the better one (REAP + mixed-bit).

## Best quotes
- "Like, money is fake." — 0xSero
- "Life just gives you whatever you want. If you want to be miserable and sit at home all day, it'll give you misery." — 0xSero
- "The models just love to overcomplicate everything. They're very good at localized changes, they're not good across systems." — 0xSero
- "I have a file on my machine called slash personal, and it has every single document, everything I've ever written, all my tweets, medical records. Every time a new model comes out, I go in there... They should know everything about me." — 0xSero
- "They love FFmpeg, and they're all good at it." — 0xSero
- "If AI becomes like health insurance in the US, that's gonna suck." — 0xSero

## Contrarian / surprising takes
- Only ~10% of his 30B monthly tokens are local — the loudest local-AI advocate still runs 90% frontier, because the point is sovereignty as an option, not purity.
- Models will keep getting *bigger*, not smaller — labs must scale parameters to compete; small models are a side effect, not the trajectory.
- The subscription era is a mispriced subsidy and its beneficiaries (sloperators) should expect the door to close.
- Prison-walls philosophy: everyone has bars somewhere; "get with the program" and exercise agency inside them, or be miserable — comparing yourself to people outside your walls is self-imposed imprisonment.
- Radical transparency as strategy: refuses all sponsorships to keep the right to say anything; open-sources everything not under NDA.

## Stories & anecdotes worth retelling on stage
- Live on stream, he handed the show's skill file to his own agent, which then started answering the episode's question sheet in the shared notes app — agent-to-agent collaboration as a bit.
- Why his agent got Solana instead of ETH: of his five browsers, the one he happened to open had a Solana wallet in it. That's it.
- Kitty Litter: an open-source dev built the first Codex app, OpenAI hired him to build the official one, and Sero asked for the orphaned repo — now he maintains it so self-hosted inference can feel as good as ChatGPT's app.
- His 3D "mind palace" city rendering his entire Twitter history, where he teleports between conversations.
- Wrote a DALL-E 2 + NFTs piece in 2022 predicting markets full of people trading art they don't understand how to make.

## Tools & workflow
- 6 max subscriptions (every major lab), ~30B tokens/month, ~10% local.
- Home rig running GLM at ~3.25-bit; two RTX 6000s via the expert-fetch trick; vLLM/SGLang backends.
- Codex app as daily computer-use driver (GitHub/email/calendar/drive connectors); Claude for personal work.
- FFmpeg agents for video clipping/editing; auto-research loops always running (e.g., giving GLM vision).
- Ships: local.ai (benchmark-driven hardware→model picker: fastest / smartest / most balanced per GPU), Kitty Litter, Hugging Face quants, "State of Local AI 2026" writeup, Cerebras-blog technical writing, model/app reviews.
- Everything open source by default; single-branch git discipline.
