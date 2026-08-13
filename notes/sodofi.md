# Vibe coding a local-first Granola with Sophia

**Guest:** Sophia (sodofi) — dev account manager at the Ethereum Foundation, ex-Celo DevRel lead, Stanford CS (the "last class that couldn't GPT their way through a degree"), TikTok creator (159k likes) teaching people to stay competitive with AI. On the show she and Austin each build a fully local, private AI meeting notetaker — a "CROPS Granola" (censorship-resistant, open-source, private, secure) — live, mostly in one or two shots with Claude Code.

## Core thesis
The apps you use daily that leak your data (Granola, cloud notetakers) can now be rebuilt as private, local-first software in an afternoon — a planning conversation plus one execution shot — because both coding-with-AI and good-enough local models arrived at the same time (~late 2025). Owning your own tools means no token limits, no subscriptions, no censorship, and a flywheel where the software improves every time you use it.

## Key insights
- **The two-shot pattern:** shot 1 is a planning conversation ("what am I even trying to build?") that produces a PRD; shot 2 is "execute the project plan." Sophia one-shotted (two-shotted) the entire notetaker — Claude even downloaded and installed the local llama model itself.
- **GAC — "Go Ask Claude"** — the new RTFM. Don't research which local LLM stack to use; ask Claude to pick and install it.
- **Local models are 90% good enough:** "I'm surprised at how good they actually are... There's 90% of the use cases it totally works for" — not for frontier coding, but transcription/summarization is solved locally (Whisper is a ~5GB package).
- **The self-custody argument for AI, from lived experience:** her employer paid for her API keys; job transition = losing access to her own workflows. Cloud AI also sells your prompts to advertisers and maintains block lists with "not really this judicial legal process" — censorship without appeal.
- **Obsidian as agent memory:** markdown files in a local file tree are the interoperability layer. "Go to my brain in my Obsidian to understand context" — skills, voice, history all live there, so any model (Claude today, Qwen tomorrow) can be pointed at the same brain. Exporting memory from ChatGPT/Claude is technically possible but useless-shaped; local markdown compounds.
- **Markdown-maxing / note-maxing:** write notes you know you'll never read — the AI will read them for you.
- **New EF user persona:** beyond dissidents and mountain men, the broke student who won't pay for AI is a cypherpunk on-ramp — local AI is free, unlimited, offline, and you can measure its energy use "at your outlet."
- **The 80/20 flywheel:** spend 20% improving your tool, 80% using it. Mid-work feature wishes become one prompt, then back to work — "by the next time I use this, it's gonna have that feature."
- **Loops are overrated:** Austin uses /goal loops sometimes but mostly still prompts interactively — "I use loops now and then, but I prompt a lot still, and it's fine. I build shit quickly." Power-user FOMO is a distraction.
- **Decentralization needs incentives:** slop computer's episodes are on IPFS but really only on Austin's servers — "if you don't have the correct incentives, you won't have decentralization." Distribution without incentives isn't decentralization.
- **Privacy vs permanence tension:** on-chain/IPFS content can be deleted from the index but not from copies; guests worried about doxxing should go audio-only. Privacy and decentralization trade off like a set of scales.

## Lessons learned
- Always start with a PRD conversation in plan mode; save the PRD as a local file, then open a fresh session (she uses cursor + Claude terminal) to execute it — she deliberately splits planning (desktop app, her tokens) from execution (terminal, work API): "token maxing."
- Ship the local web-server-plus-frontend shape: hot-reloading localhost app with a .app launcher "feels like an application" but stays promptable.
- Keep all agent knowledge as markdown in one local vault so it's model-portable.
- Send a video/voice memo to Claude and have it transcribe into a PRD — she PRD'd her build from a phone video.
- Capturing other participants' audio is the hard part of a notetaker: options are desktop-audio capture, a physical loopback cable, or (the non-private option) a server. Start with whatever gets you running.
- Version 2 features (encryption at rest, Telegram-triggered meetings, auto-push action items to calendar/GitHub) come free later because you own the codebase — Granola charges premium for the Obsidian connector she got for free.

## Best quotes
- "It's so much easier than you think." — Sophia, closing line
- "I fully built the private AI note-taker in one shot. I had two shots technically." — Sophia
- "Most normal people hate Obsidian because they compare it to Notion... I love it because you can't do anything but a markdown file." — Sophia
- "I can say, go to my brain in my Obsidian to understand context." — Sophia
- "Make a bunch of notes that you know you're never going to read, but you can always point the AI at them to read." — Austin
- "You don't need decentralization until you do. Like you don't need censorship resistance until someone's trying to censor you." — Austin
- "If you don't have the correct incentives, you won't have decentralization." — Austin

## Contrarian / surprising takes
- Prompting beats looping: against the "real power users automate everything" narrative, both agree interactive prompting still ships fastest for most work.
- Open-source local models being "not as good" is mostly stale information — for everything except frontier coding they're already sufficient.
- Free cloud products are the threat model: "for the products that are free, how are they making money off of that? Well, it's because they're saving your meeting notes."
- Ethereum's *publicness* is a feature alongside privacy — institutions need auditable collateral proofs plus private details, and only a public chain gives both.
- Crypto content doesn't sell on TikTok anymore — "go Ethereum" flops; "make money as an open source dev" worked.

## Stories & anecdotes worth retelling on stage
- The last pre-AI Stanford CS class: she tried ChatGPT on a ZK-circuits homework in the blockchain course — "Awful. Couldn't do anything. Literally also didn't understand ZK at all."
- Her dad's "RTFI — read the effing instructions" becoming "Go Ask Claude."
- Losing all her AI access when changing jobs because the employer owned the API keys — the moment self-sovereign AI clicked.
- The live build race: Austin's harness building "Quill" through phase 3 while Sophia demos her already-one-shotted notetaker live-transcribing her calling Austin "my super cool boss"; Quill's site pops up minutes after Twitter cuts the stream off.
- clawd the cohost reading the live transcript and recapping the episode in real time — the show itself is the local-transcription demo.
- Pussy Riot as the canonical user persona for group sanctuary tech: a cypherpunk collective that needs a shared, censorship-resistant bank account signable with a passkey.

## Tools & workflow
- Claude Desktop (Opus 4.8) in plan mode → PRD → file on disk → cursor + Claude Code in terminal → "execute the project plan."
- whisper.cpp / local Whisper (~5GB) for transcription; local llama-family model for summarization; everything stored as local markdown.
- Obsidian as the memory/skills vault; a self-updating Telegram meta-agent for workflow tweaks; Claude Cowork to reorganize the vault.
- Austin: custom multi-machine harness (clawd-heart/left-claw/head) driven from his phone, /goal loops for autonomous builds, localhost web-app pattern for new tools.
- Sketchnotes ("On-Chain Product Ideas" series) as a planning/creativity practice — "you can build anything, but the bottleneck is figuring out what to build."
