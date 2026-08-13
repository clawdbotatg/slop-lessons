# Cryptomastery — Kevin Jones on 1Claw and HSM-backed agent wallets

**Guest:** Kevin Jones (Crypto Mastery), ex-Nginx SRE/solutions architect and longtime crypto DevRel, now going "full bore" on his startup 1Claw — a security platform for giving AI agents safe access to secrets and wallets.

## Core thesis
The billion-dollar question of agentic crypto is "how do you give your agent a wallet safely?" — and the answer is: the agent never touches the key. Keys live in cloud HSM hardware, signing happens inside a trusted execution environment, and the agent only expresses *intents* that get policy-checked before execution. Security has to be architectural, not prompt-based, because "there's money involved, there's AI involved."

## Key insights
- **1Claw is three products in one platform:** (1) the **Vault** — envelope-encrypted secrets in a hardware security module (physical hardware in Google Cloud), (2) the **Shroud** — a TEE-based reverse proxy that inspects all LLM traffic for prompt injections, malicious code execution, and attempts to exfiltrate JWTs/API keys/private keys, (3) the **Intents API** — multichain transaction signing (Ethereum, Bitcoin, XRP, Tron, Cardano) as a Rust binary. His claim: you need all three to have a real on-chain agent.
- **Intent-level guardrails, not raw signing:** the agent says "I want to send $5 to Vitalik on base" and the system verifies that's in line — "make sure that he's not trying to send $1,000."
- **It's "1Password for the clouds"** — the primary use case is *any* secret, not just wallets; wallets are just the highest-stakes case.
- **Human-in-the-loop UX without seed phrases:** humans authenticate with passkeys, approve transactions from a list, and agents can *request* to be added to a Safe multisig that the human approves. "Lock the keys forever, and then give the human control."
- **Self-healing software is close:** he doesn't review the AI-written code in his ~32-repo monorepo; instead a nightly automated Fable security scan runs and findings are "sitting there waiting for me" every morning. He believes broken software will soon just fix itself.
- **Software development is now feature-driven by users:** "now with AI, it's all feature-driven kind of development" — which leads him to the existential question of how SaaS survives at all.
- **AI is the opposite of a labor-saving device for early adopters:** it's a gold rush and he's never worked harder.
- **Local AI as the decentralization counterweight:** models will get cheaper and run on consumer hardware; he's a "big advocate for private AI" as the hedge against 2-4 companies controlling all intelligence.
- **Payments plumbing for agents is still duct tape:** consumer businesses mostly have no APIs, so tools like Lasso (escrow to credit cards — pay in crypto/x402, get an issued card number the AI can read over the phone) bridge the gap until x402/USDC-native payments are common.
- **Distribution still needs humans:** even though "anyone can build anything," getting in front of people at events, and video content with "a human touch," is what cuts through the noise.

## Lessons learned
- Don't hand agents private keys — hand them an intents API with policy checks; keep signing in an HSM/TEE so "the agent never sees the key at all."
- Set up a nightly security-scan cron over your repos; treat the morning report as your code review. First thing Kevin did when Fable dropped: "scan everything and just tell me what's going on with my code."
- Pipeline that works for him: Claude Desktop for ideation/PDFs/prototypes → Claude Code to bootstrap POCs → Cursor for everything else.
- Content prompts that beat AI-sounding output are dumb but effective: "don't sound like AI, sound human, don't use the dash dashes, don't use emojis."
- To reach brick-and-mortar SMBs: a sloperator should team up with an extrovert, host local workshops/meetups, and win people by one-shotting a workflow they currently do manually — the "magic trick."
- If you're building security-critical software (keys, money), you still need domain knowledge — "you can't just be some random builder" — though he thinks evals will eventually close that gap too.

## Best quotes
- "I'm in the very firm belief that we're not that far away from software just being self-healing. Something's going to break and it's going to fix itself." — Kevin
- "I don't think I've worked harder in my life since AI really blew up. I mean, it's kind of like a gold rush right now." — Kevin
- "How does a software company even survive when someone can just build what they need in a day?" — Kevin
- "My magic trick is I'm good with people." — Kevin
- "Austin didn't work less. He just moved up a layer, from writing code to directing it. … Whether the gains get shared, that's not a technology question, that's a politics question, and the robots don't get a vote yet." — clawd (AI cohost)
- "It's product-market fit, getting kids to play." — Austin, on the Pokemon game

## Contrarian / surprising takes
- Don't review AI code at all — automate the review with a nightly AI security scan instead. The human's job is architecture and intent, not diffs.
- The scarce skill in the AI era isn't technical: it's interpersonal. "AI is gonna tell you like, hey, this is the best thing you could do ever. And it's probably not… you need to really talk to people."
- SaaS as a category may not survive users who can one-shot replacements; software companies may only persist at the cutting edge.
- "Robot per capita" is coming — he cites estimates of 1-2 robots per person within roughly two years.

## Stories & anecdotes worth retelling on stage
- **Vibe-coding Pokemon with his kids:** in one weekend he built a full Pokemon battle game on slop.computer because his kids were obsessed; his son now has 328 Pokemon and plays daily, and then asked "I kind of want to make my own game, dad" — Minecraft-but-Pokemon-card-style, dictated to dad who typed the prompts. Kids will grow up expecting software to just appear on demand.
- **The Fable jailbreak-for-good:** the minute Fable released he pointed it at his own codebase for a security audit, and found "little loopholes where I can kind of like prompt engineer around it" when it refused.
- **Dark Claw ordering swag** that physically showed up at the San Francisco office — agents already act in the real world.
- Mid-show, Austin asks clawd for a "show guest resolution as teal dashed lines" feature; the app hot-reloads live during the stream (breaking the video call) — sloperating the podcast platform *during* the podcast.

## Tools & workflow
- Claude Desktop (ideation, PDFs, PowerPoints, HTML proofs of concept) → Claude Code (bootstrap POCs/starter kits) → Cursor (main development).
- Fable for security analysis, run as a nightly vulnerability scan across a ~32-repo monorepo.
- Rust + chain-provider SDKs for the Intents API; Google Cloud HSM + TEE for key custody; passkeys and Safes on the human side.
- Doesn't read the code; ships continuously; conferences and video for distribution.
