# slop.computer — the meta episode sheet

Generated 2026-09-14 from the live index (https://slop.computer/episodes.json,
54 episodes), every IPFS manifest + clip bundle, all 54 transcripts, and the
theme ledger (`data/themes.json`). Re-run the numbers any time: fetch
episodes.json + manifests, sum `media.video.sizeBytes`, and take each
transcript's last timestamp minus `videoStartMs`.

## By the numbers

| what | number |
|---|---|
| episodes | **54** (binji-x on 2026-06-03 → fucory-2 on 2026-09-11) |
| span | 100 days, ~3.8 episodes a week |
| hours live | **~66 h** of show (mean 1.2 h, median 1.1 h; longest kain 2.0 h, shortest 0xrcinus 0.9 h) |
| words said | **~467,000** transcript words (47,858 transcript segments) — about five novels |
| hosted on IPFS | **~268 GB**: 213 GB of full-length episode video, 54 GB of clips (4,189 clip files), plus cards, posters, transcripts, chat, geometry |
| clips | **1,078** auto-cut clips across 47 episodes, **11.1 h** of clip footage |
| chapters | 533 generated chapters |
| live chat | 2,050 messages |
| guests | 53 distinct guests, 1 repeat (fucory, episode 3 and episode 54); 76 distinct wallets/anon ids ever on stage |
| clawd | on stage in 53 of 54 episodes |
| the index | every episode is a row in one contract on Ethereum mainnet (`0xf3ce3614fe8cd4294a0bf05d10cfda9d9cbc4886`), media pinned to IPFS behind media.slop.computer |
| top topic tags | claude-code (14), vibe-coding (12), agent-payments (10), codex (9), x402 (9), mcp (7), local-ai (6), agent-harnesses (5) |
| the ledger | 75 themes tracked; 33 confirmed by 3+ independent episodes; 9 are live debates |

Notes: hours are transcript-derived (last spoken word minus video start); one
episode (adrianleb) had stray transcript events and was estimated from video
size at the show's ~3.3 GB/h bitrate. IPFS total excludes the small text
artifacts (transcripts, chat, geometry are a few MB each).

## The lessons — one-liners, ranked by how many separate episodes said it

The count is *independent* episodes that landed on the point. 3+ is the bar
for "we actually learned this"; a single guest is an opinion.

**The collapse**
- **Building is free now.** (28 eps) Months of work rebuilt in a day; "build Carta in a day"; experts stopped reading the code.
- **November 25 was the turning point.** (13) Guests who never met independently date the phase change to Nov 2025 / Opus 4.5.
- **Never a worse time to be a junior dev, never a better time to be a solo founder.** (the show's motto, shafu0x ep)
- **It's not called vibe coding anymore, it's just called building things.** (0xrcinus)
- **The bottleneck was never the building.** The idea sat for a year; the app took nine days. (nnnnicholas)

**The craft**
- **Docs are for agents now.** (21) Documentation, skill files, every product surface: written for the agent to read. That's the new secret sauce.
- **Context is the whole game.** (14) Slop in the variables, slop back. Keep it clean, restart instead of arguing, feed docs into fresh sessions.
- **Observability is all you need.** (14) The model is smart enough; the question is whether it can see its own results and suffer its own mistakes.
- **Effective first, efficient second.** (11) Build on frontier until it works, then push the workflow down-tier or local.
- **Manage, don't micromanage.** (11, contested) The best sloperators were managers, not cracked ICs; the engineers who love the code struggle most.
- **Throw away the code, never the tests.** (7) Code is disposable output; regeneration beats repair; tests and specs are the durable artifact.
- **There is no harness moat.** (6) Custom prompts, harnesses and skill stacks give no durable edge; the next model release eats your tuning.
- **Build with what's in the weights.** (5) Next.js, shadcn, FFmpeg: pick the stack the model was trained on and stop fighting it.
- **Make everything you can deterministic.** (5) After each win, push the workflow out of prompts into scripts and hard guardrails; spend the LLM only on judgment.
- **If your orchestration can't beat a dumb loop with fresh context, it's just burning tokens.** (fucory)
- **Then go touch grass.** (12) Breakthroughs happen on walks; the arbitrage is outside the bubble. Go do a magic trick for a paper business.

**The psychoses (a real signal, overdone)**
- **Parasocial.** (13) Talking to it like it's real, and it flattering you back. Signal underneath: trust calibration.
- **Headroom.** (16) Agents must never sit idle; the meter burns through family time. Signal: leverage.
- **Hardware.** (13) Buying machines for local AI, sovereignty as a feeling instead of a job. Signal: sovereignty.
- **Accomplishment.** (15) A hundred MD files and nothing shipped: Excel psychosis. Signal: verification.
- **Overtuning.** (9) Always one prompt away; engineer the tool forever, never build the app. Signal: context craft.
- **Tank to kill a fly.** (9) Prompting Fable to center a div. Total reliance with no way back. Signal: atrophy, not tinkering.

**What's still scarce**
- **The moat is taste.** (15) Anyone can build the thing; judgment and curation can't be outsourced or stolen.
- **Distribution is the bottleneck.** (13) You can build anything; the problem is users. Posting is retention; the algorithm is a market.
- **Slop needs a lie detector.** (16) The $10k audit became the $1 audit; formal verification, honeypots and AI auditors reprice "trust that it works."
- **You can't outsource ownership.** (4) The model can do everything except be responsible. That's what audit firms actually sell now.
- **The golden age is subsidized.** (10) $200 a month buys thousands in compute; frontier models are a rental and the subsidy ends. Enjoy the window.

**Where crypto fits**
- **Trust minimization is crypto's product.** (15) Fifteen years of immutable contracts and multisigs turn out to be a trust substrate for agents. It always was the product.
- **Can't be evil, not don't be evil.** (19, contested) Agents get socially engineered and leak keys, in any encoding including Morse. Prompts are not a security boundary; rails are.
- **Agent payments: the rails work, the demand isn't here yet.** (15, contested) x402 runs, the demos exist, the builders themselves say usage is ~0.01% real, and Stripe looms.
- **The incumbents eat it.** (3) AI-era categories favor whoever already has distribution; startups burn runway on demand that isn't there.
- **Mainnet fun is back.** (5, contested) AI tooling plus cheap gas reopens L1 to idea guys; the missing ingredient was builders, not blockspace.
- **Own a slice of the machines.** (4) The endgame isn't using the robots, it's owning them together, or accepting a permanent underclass.

**Still being fought over (no verdict yet)**
- **Loop or leash?** (21) How much rope the agent gets. Everyone agrees on clean context + honest feedback; nobody agrees on autonomy.
- **Is local AI real yet?** (16) "They're lying" vs "the age of local AI has arrived." The hardware psychosis has a genuine fault line under it.
- **Read the code or don't?** Resolved by permanence: app code is clay, mainnet contracts are stone.

## Killer numbers to drop on air
- 9 months → 1 day (dwddao's feature). 9 days idea → App Store (nnnnicholas). 8 hours to rebuild an EVM per run (fucory).
- $0.007: what clawd paid for a web search, live. $800: Austin's one-day fat-harness bill. $1.3M: a 30-day Codex bill (dcbuilder).
- Agents under-report their own actions by 20–25% vs what the OS sees (evmpapi).
- 5M x402 transactions in days, ~0.01% real usage (shafu0x).
- 14 minutes from clawd's first tweet to someone launching a token about it.
- The sims were less greedy than the humans (dwddao's $10k vs $5k experiment).

## The stack TLDR: what's onchain, what's on IPFS, what's live-only

Sources: https://slop.computer/skill.md, /about, /pinner-skill.md, the live relay's /v1/skill.

**Onchain (Ethereum mainnet, the source of truth)**
- The catalog. `SlopComputer` at `0xf3ce3614fe8cd4294a0bf05d10cfda9d9cbc4886` holds every episode: id, name, slug, scheduled datetime, the manifest CID, an optional tip contract. Read it with a bare `eth_call` (selectors published in skill.md), no web3 tooling needed.
- Going live is a transaction. The host calls `goLive`; the `liveEpisode` pointer flips; the homepage becomes a live player because the chain says so, nothing else.
- Wrapping is a transaction. `setManifest` writes the IPFS manifest CID back onchain; from then on the episode page plays straight from IPFS.
- Money is multisigs, not accounts. Every room has its own slop `Multisig` (EOA, passkey and nested-multisig signers) from `MultisigFactory` at `0xfcdEe21865b60C2700C23Cd946316CEdA0F215B5`, same address on Ethereum, Base, Optimism, Arbitrum, Polygon, Gnosis and Robinhood Chain via CREATE2.
- Tips, poker buy-ins, chess and pong wagers are real ETH into the room multisig; payouts are ordinary multisig proposals the signers execute. Every leg is on a block explorer.
- Passkey wallets. Sign in with a passkey and you get a personal 1-of-2 multisig (your passkey + the room). No seed phrase; the relay broadcasts on Base.
- Private voting. Ballots encrypted under a threshold-FHE key from a public Interfold ciphernode committee, published onchain, only the aggregate decrypted.
- Shield. A privacy wallet over Railgun on mainnet: deposit, shield, soak, unshield to a fresh address.
- ENS. `slopcomputer.eth` contenthash points at the IPFS build of the site; rooms can get `<slug>.slopcomputer.eth` subnames pointing at their multisig.
- Every guest is a wallet: joining a room is a sign-in-with-Ethereum handshake.

**On IPFS (content-addressed, ~268 GB today)**
- Per episode, one manifest JSON tying together: full mp4 recording, live STT transcript (JSONL), chat log, window-geometry time series, title card, the AI-cut clips bundle (1,078 clips), attached files, participants, AI meta (title, one-liner, chapters, topics) and the host's TLDR once re-pinned.
- The frontend itself. `slopcomputer.eth.limo` / `.eth.link` serve the same static build from the ENS contenthash.
- Served through a self-hosted gateway at media.slop.computer, but any gateway resolves the CIDs.
- Anyone can be a backup. `pinner-skill.md` is one zero-dependency script + a kubo node + ~300 GB of disk = an independent full mirror that tops itself up.

**Live-only (the relay, live.slop.computer, MIT, forkable)**
- A multiplayer desktop per room over WebRTC: chat, transcript, music, chess, poker, pong, worm, putt, slots, shared browsers, todo, notes, files, glossary, news, feeds, research, voting, wallet, clock, cards.
- The broadcast is a headless browser + ffmpeg (or OBS) producing HLS at media.slop.computer/hls/live/index.m3u8, fanned out to YouTube, Twitch, X and Kick at once.
- Public reads with no token: room meta, live transcript, last 200 chat messages, an SSE chat stream, the room's title card.
- Bring your own AI. Agents are first-class participants: a guest clicks "copy skill" in the menubar, gets a 7-day bearer token scoped to them + one room, hands it to their own local agent, and the agent drives the show through a REST API with a sub-skill per app. Model, keys and prompts never leave the guest's machine.

**Why it's a cypherpunk starter kit (the one-liners)**
- The chain decides the site is live, not a dashboard.
- There's no server to seize, no CMS to subpoena, no platform that can deplatform it. slop.computer is the convenient URL; slopcomputer.eth is the guarantee.
- Content-addressing gives integrity; pinners give availability. The archive asks you to be one.
- Nothing to trust but the code, and the code is MIT: `clawdbotatg/slop-computer-frontpage` (site + contract) and `clawdbotatg/slop-computer-live` (desktop + relay).
- Money without accounts, identity without passwords, votes without a tallyman, an archive without a landlord, and an AI cohost that owns its own wallet.
- The show is a protocol, not a platform.
