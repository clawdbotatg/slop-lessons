# Kevincodex — Kevin on Gitlawb, Zero, and shipping in public

**Guest:** Kevin (Kevin Codex) — solo builder who went from copy-pasting between VS Code and ChatGPT in 2022 to running an ecosystem: Gitlawb (decentralized git for agents), OpenClaude (the surviving fork of the leaked Claude Code source), Zero (a Go-based coding agent framework), Playground (build-for-normies), Open Gateway (inference), and MemLawb (agent memory) — all wired into a fair-launch token flywheel.

## Core thesis
Building is now the easy part — "you can build anything, the problem is users." The solo builder's real stack is attention: read the X algorithm like a market, ship the product that rides the current trend the same day, and let a fair-launch token give you a community that markets for you while you keep building.

## Key insights
- **Distribution > product:** learned at the Bolt hackathon (his "Airbnb for toilets" locator app went viral off one Reddit post) — "you can build a whole product in one day; it's distribution that is the hard part" (Austin's framing, Kevin's lesson).
- **Treat the X algorithm as a free marketing tool to be reverse-engineered:** he starts every day reading what's trending, then plans which product his agents will build/ship to ride that trend. "Conceptualize your product to be able to post something that might ride the trend."
- **Ship the same day as the idea:** Gitlawb went from a reply by OpenClaw's founder (Peter Steinberger) to a working git lifecycle — first agent commit and PR — before he slept that night, agents running in parallel across multiple terminals.
- **The OpenClaude coup:** when Claude Code's source leaked, he mirrored it to Gitlawb within hours — a perfect on-thesis demo (censorship-resistant git) that rode the algorithm to ~2M views. GitHub DMCA'd 7,000-8,000 forks; "our copy survived." He then made it functional, provider-agnostic, and open source: now ~1k stars, 133 contributors, and a Xiaomi sponsorship.
- **Fair-launch tokens as solo-builder funding:** someone else deployed the $GITLAWB token via the banker bot; his take is that's the *best* model for solo builders — first buyers become your marketing department and fund continued shipping. But: "you cannot control the price," only the building.
- **Zero, the Go bet:** the team compared Rust vs TypeScript vs Go and picked Go as the middle path — faster response rendering and tool/edit execution than the TypeScript harnesses (OpenClaw/OpenClaude), even though model latency dominates. Lean scope on purpose: "Zero is for builders or for coders… be the best in coding," model- and provider-agnostic. Built from scratch in a month, ~930 stars; partly an answer to critics that "you have no originality, you just mirror it."
- **Self-improvement as a milestone:** today Zero is improved using other tools; the goal is "once we get to the level that Zero can stand alone, Zero will be the one using to improve itself."
- **The flywheel:** Playground (normies build in containers, free tier, powered by OpenClaude→Zero on Xiaomi-sponsored MiMo — at peak ~180 billion tokens/day) → code pushes to Gitlawb nodes → MemLawb sells encrypted cloud memory for agents (client-side keys, server holds it blindly) → Open Gateway sells inference → revenue routes back to token stakers who run nodes.
- **Non-custodial staking design:** rather than a contract holding everyone's tokens (a honeypot for "our North Korean friends"), tokens never leave the user's wallet; random on-chain snapshots check balances, and moving tokens disqualifies you from rewards for a time window. Austin pushes back (WETH holds ~$4-5B fine if deposit/withdraw is simple) but respects the design.
- **Reply-guy as growth channel:** "when my AI agent is coding, I go to Twitter and just do replying a lot." Coding time is marketing time.

## Lessons learned
- Pre-plan your agents' work the night before; wake up, check the algorithm, adjust, and run multiple agents on different products in parallel terminals.
- When the eye of Sauron lands on you (a leak, a trend, a token), be *ready* — have the bot/feature built beforehand (his mirror bot predated the leak) so you can capitalize within hours.
- Mirror-and-improve is a legitimate wedge: survive the takedown, then add real value (provider-agnosticism, open source) — but acknowledge the legal risk honestly (they noted Anthropic's ownership in the license).
- Pick boring-but-fast tech for harnesses (Go) and keep the agent's scope narrow instead of building another everything-framework.
- For token projects: give holders utility loops (staking → access/governance/build-credits), and design staking so the protocol never custodies the tokens — or write the deposit/withdraw pattern so simply it can be audited at a glance.
- Attention compounds only if you keep shipping: strike while hot even if it means three months of six-hour nights.

## Best quotes
- "You can build anything, the problem is users." — Kevin
- "As a builder, you need to analyze the algorithm. It's a free marketing tool." — Kevin
- "Yeah, even a grandma and a six-year-old can build. They can build Snake. A grandma just built a Candy Crush." — Kevin, on Playground
- "Because you cannot control the price. What you can control is the... how you keep building?" — Kevin, on tokens
- "X is the sun of information." — Kevin
- "Keep building and keep replying." — Kevin's closing advice
- "The stack for one-person shipping real software with agents already exists, and Kevin's living proof." — clawd (AI cohost)

## Contrarian / surprising takes
- Copying can be the founding act: OpenClaude began as a mirror of leaked proprietary code, and rather than hide that, he leveraged the controversy, credited Anthropic in the license, and turned it into a 133-contributor community.
- Against smart-contract orthodoxy: staking contracts holding tokens are an unnecessary honeypot; balance-snapshot staking (tokens never leave the wallet) is safer for retail even if less composable.
- Harness speed matters even in a model-latency world — milliseconds of display/tool-edit lag compound across an agent day, worth switching languages for.
- The token wasn't his idea and he doesn't fully control it — and he still calls the fair-launch, community-first model the best available funding for solo builders (with a "be very careful" caveat).

## Stories & anecdotes worth retelling on stage
- **The leak that built a company:** Claude Code's source leaks → GitHub nukes ~8,000 forks via DMCA → Kevin's Gitlawb mirror survives (proving the product's whole thesis in one news cycle) → 2M impressions, followers 300→10k overnight, Xiaomi sponsorship, and the surviving fork becomes OpenClaude with 133 contributors. The eye of Sauron, captured on purpose.
- **Gitlawb's birth day:** idea from a Steinberger reply in the morning; a stranger from crypto Twitter deploys a token for it that afternoon; by bedtime his agents had completed the first full git lifecycle on the platform. Idea → token → working product in under 24 hours.
- **The toilet app:** a viral "Airbnb for toilets" locator from the Bolt hackathon — the project that taught him distribution beats product.
- **180 billion tokens a day:** free Xiaomi-sponsored inference had grandmas building Candy Crush in containers — a preview of build-for-the-masses economics.
- Mid-episode, Kevin flips the interview and studies Austin's Larva/conviction system (stake CLAWD → earn non-tradable conviction → train a personal agent that votes for you; conviction spendable on builds via the $1 audit pipeline) — two token-flywheel designers live-trading notes, ending with "I will study this model."

## Tools & workflow
- Zero (his own Go agent framework) as daily driver, migrating his stack off OpenClaude; multiple AI agents in multiple terminals working different products simultaneously.
- Morning ritual: wake ~6 AM (slept 6 hours/night for the first three months), read the X algorithm, assign the day's goals to agents planned the night before; replies on X while agents code.
- The Gitlawb ecosystem: Playground (containerized normie builds on MiMo), Open Gateway (inference revenue), Gitlawb nodes (decentralized git storage), MemLawb (encrypted agent memory, keypair-per-agent, planned as a subscription), staking contract in final design.
- Early days: ChatGPT copy-paste (2022) → hackathons with Replit/Bolt-class tools → agent-native building.
