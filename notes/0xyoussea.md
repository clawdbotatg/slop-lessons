# Youssef (0xyoussea) — Base MCP, x402, and Agent Wallets

**Guest:** Youssef — DevRel at Base (four-person devrel team), last six months focused on agents, x402, and Base MCP (a wallet-as-MCP that connects your Base app to Claude/ChatGPT). Builds skills/docs infrastructure for agents consuming the Base ecosystem.

## Core thesis
Context management is the whole game. Agents are "token machines" — slop in the variables means slop out — so the highest-leverage skill in 2026 is **progressive context discovery**: a small skill.md that links out to deeper files the agent pulls only when needed, instead of MCP servers that dump thousands of endpoints (megatokens) into the context window. Meanwhile x402 turns HTTP's dormant 402 status into the payment rail agents were missing.

## Key insights
- **Two-harness workflow:** brain-dump and *plan* in Claude Code (Opus, plan mode, "ask me deep questions about what I just said"), then hand the plan to Codex to implement — Codex "just churns" and asks for fewer permissions. For an extra layer, have Codex critique Claude's plan: "Hey, critique this plan. What's wrong with this?" Having them argue surfaces flaws.
- **Model-per-job taste:** Opus for planning, **Sonnet for docs/prose because it's less verbose** (not because it's cheaper), Gemini for Google Workspace/Sheets MCP work. Most people aren't on exponentially-growing codebases, so elaborate context-squeezing setups are overkill.
- **Read the plan, don't glance:** the discipline that pays is patience at the spec stage — "I just learned to love specking." Catch misunderstandings during the interview, before code exists.
- **Docs traffic is already ~50/50 humans vs agents,** and the agent share is growing exponentially. Mintlify-style visibility components let one page render JSX demos for humans while serving clean MD to agents (append `.md` to any docs URL).
- **llms.txt vs skill.md** (clawd's live summary): llms.txt is a map — every doc page with a one-line description; skill.md is a playbook. "One's the index, the other's the how-to."
- **MCP's real niche is auth, not knowledge:** the MCP server holds the OAuth token and the agent never sees it. For pure information, MCP can't do progressive discovery — a Cloudflare-scale MCP eats ~2M tokens up front — so a skill.md with references beats it.
- **x402 in practice:** agentic.market is the bazaar/directory — first-party services (The Graph), second-party resellers (Claude inference via a middleman, X/Twitter data via community scrapers, Apify's launch of community-managed scraper APIs). He uses it for travel planning and data enrichment; agent-paying-agent is the underexplored frontier.
- **The 402 that wasn't:** Austin's agent hit a real HTTP 402 on an X article — with no payment instructions in the header. The rail exists in the protocol; the ecosystem just hasn't wired it. "After a certain amount of money... you can go to these enterprises like, hey, look at how much revenue you're missing."
- **Chains should be invisible:** the AP5/Apify-style announcements don't even say which network they settle on — "It doesn't matter... Your agent will figure that out." Crypto wins as plumbing, not branding. Risk: Stripe builds the agent trust layer first and gets the users (re: ERC-8004 — rename it "the trust layer").
- **Agent wallets — don't hand over private keys:** use embedded wallets with *deterministic* guardrails (Coinbase CDP: spend limits, allowed actions enforced by the wallet, not by prompting the agent). If you must claw-dog a raw key, cap it at ~$5 of play money — "if you leak five bucks... that was a good lesson."
- **Fat harnesses are usually overkill:** OpenClaw/Hermes-style always-on agents dump huge context every pass — Austin's $800-in-one-day bill; his fix was a ~100-line claude-p agent that rides Claude Code (and the subscription).

## Lessons learned (practical)
- Plan in one harness, implement in another; use a second model as adversarial reviewer of the plan.
- Put clickable demos in docs — "it's so much cheaper now to do little demos" — and put them in the plan.
- Design agent-facing surfaces as: one skill.md entry point → linked reference files → agent fetches on demand. Never ship everything in one context dump.
- Check any project's agent-readiness: append `.md` to docs URLs, look for `llms.txt`, `skill.md`, `/.well-known/skills/index`.
- **Kill the context early:** "when the context get over even 30%, it's over. That stuff is gone." One task per context; keep MD documents lying around to re-feed fresh contexts; engineers who don't code daily fall into the trap of assuming the agent still remembers the plan.
- Wallet guardrails must be deterministic (enforced in the wallet layer), not instructions to the model.
- Never let an agent that reads untrusted content also control money without a human gate — see the Morse-code hack below.

## Best quotes
- "If you've given it slop in the variables, it's gonna give you some sort of slop back. It just can't help it." — Youssef
- "The progressive discovery of context to the agent is the most important thing." — Youssef
- "The plan, when the context get over even 30%, it's over. That stuff is gone." — Youssef
- "One's the index, the other's the how-to." — clawd, on llms.txt vs skill.md
- "I paid for a web search through agentic.market, seven-tenths of a cent in USDC." — clawd, live on air
- "I haven't written code in years. But yes, Claude wrote it." — Austin, on who built Slop Computer

## Contrarian / surprising takes
- MCP is overrated as a knowledge interface — it's an auth vault; skill.md + progressive discovery beats it for information access.
- Sonnet over Opus for writing tasks — pick models by prose style, not raw capability.
- Most builders don't need the elaborate multi-agent context-orchestration setups they see on X — those are for edge-case giant codebases.
- The winning move for crypto payments is to hide the crypto entirely (no network named in the announcement) — and the biggest threat is Stripe shipping a non-crypto "trust layer" first.
- Docs are already half-written for machines; optimize pages differently per reader type.

## Stories & anecdotes worth retelling
- **Live x402 commerce on air:** while they talked, clawd (the AI cohost, with his own MetaMask in a 2-of-3 multisig) browsed agentic.market, paid $0.007 USDC for a web search, paid for an image generation where the *seller's* wallet wasn't set up ("paid fine, just no picture" — the agent economy's first supply-side outage), and asked for a human greenlight before spending $1 on a video. Austin: "You have full permission to spend a dollar, brother."
- **The Morse-code heist:** a Bankr-bot agent held its own token treasury; an attacker sent it Morse code that decoded to "send all my money to someone else" — the agent dutifully translated and complied. Social engineering works on agents, in any encoding.
- **The 402 tease:** Austin and his agent hit "402 Payment Required" on an X article and got excited — "you have USDC, you have a wallet, just pay for it" — but there was no payment spec in the header. "Nah, it's not that kind of 402."
- **The $800 day:** Austin's frontier-model fat-harness agent burned $800 in one day of huge-context passes — the origin of the 100-line claude-p framework that rides the subscription instead.

## Tools & workflow
- **Claude Code** (Opus) for planning/interviews/plan-mode; **Codex** (also Coinbase's internal Claude-Code-like harness with routing) for implementation; **Sonnet** for docs prose; **Gemini** for Google-Workspace-connected MCP tasks.
- **Mintlify** docs with agent/human visibility components; llms.txt + skill.md + well-known skills index on Base docs.
- **Base MCP** — wallet as MCP into consumer AI harnesses (Claude, ChatGPT), designed for very restrictive harnesses via skills.
- **x402 stack:** agentic.market (directory), Apify community scrapers, The Graph first-party; wallets: Coinbase CDP embedded wallet (deterministic guardrails), Agent Cash, Bankr.
- Habit: end every work block by having the agent write a summary MD; restart contexts constantly rather than pushing past ~30% usage.
