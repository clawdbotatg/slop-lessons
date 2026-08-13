# Jessy (13yearoldvc) on why agentic payments have no demand yet

**Guest:** Jessy — founder of Jessy's Hacker House (grassroots hacker houses across Denver, Barcelona, Amsterdam, Istanbul, NY, SF), ex-Roam Research, head of ecosystem at EigenLayer through its ~$40M→multi-billion run-up, founding member of the Ethereum Foundation AI team, then co-founder at fast.xyz where she built in agentic payments and wrote the post-mortem article breaking the space into four categories.

## Core thesis
All four categories of agentic payments (machine commerce, proxy commerce, agent-to-agent, agentic finance) are structurally a "reverse asymmetric bet": for incumbents it's an asymmetric bet with unlimited upside and contained downside (a cheap R&D hedge on the AI narrative), but for runway-constrained startups it's the mirror image — limited upside, unlimited opportunity-cost downside — because the demand simply doesn't exist yet and incumbents (Stripe, Amazon, the AI labs) will absorb whatever does emerge.

## Key insights
- The four categories, each dissected from having actually built in them:
  1. **Machine commerce (x402/MCP, agent pays API):** services and content follow a power law — only a handful (Vercel, Supabase, etc., cf. Stripe's 32-service list) get real agent traffic; the rest are long tail. Users are developers, "historically the least willing group to pay." Even players in the space use top-up + monthly internal settlement, not per-request stablecoin micropayments — crypto isn't necessary; top-ups solve it.
  2. **Proxy commerce (agent-to-merchant shopping):** they built it (Amazon + Shopify via Google's ACP standard) and the UX was "almost strictly worse than just me going to Amazon, clicking three buttons." Real demand turns out to be on the *supply* side — merchants' FOMO about being agent-queryable — making it a picks-and-shovels B2B2C play at best.
  3. **Agent-to-agent:** "almost entirely theoretical." Standards (8004, x402) exist, narrative is good, but there are no thousands of agents hiring agents. Also an unsolved distillation problem: lend out your agent and counterparties can distill its specialty through repeated interaction.
  4. **Agentic finance (trading/treasury):** capability gap (people lost money letting agents trade) plus regulatory gap (autonomous money-managers); benefits incumbents who build it for themselves.
- Why agent-to-agent might *eventually* exist: agents compound like people — "someone who uses an agent for three days versus three months versus three years will have drastically different capabilities" (harness, memory, context, tools). Delta among agents → marketplace dynamics. But the precursors must exist before payments matter.
- The chatbot-commerce reality check: they had to use a *strictly worse, dumber model* because a smart model made each purchase too expensive (cf. people farming McDonald's smart chatbot for free LLM calls); plus tax quotes by shipping address, stale prices, 10-second latencies, five back-and-forths to buy one item.
- Consumer apps are brutally sticky: count how many new apps you've adopted in five years — almost none (Austin: "Twitter, basically"). AI chat is the rare new one, which is exactly why incumbents adding AI beats startups adding commerce.
- **Traction ≠ PMF** — her "multi-million dollar lesson." Traction = signups, mindshare, hype: "a form of energy." PMF = people paying sustainably: "a form of sustainable energy that can overcome market cycles." Crypto taught it for four years; AI has the exact same disease.
- Exit math has collapsed to two paths: of IPO / token / revenue / acquisition, IPO and token launch are effectively dead for normal startups (liquidity concentrated in the Mag-7; Figma's IPO was "brutal"; tokens no longer raise). Traction buys you one *time-limited window* to get acquired by a hyperscaler; PMF buys you optionality that survives a market crash.
- Being early is fatal, not virtuous: "when you're too early as a startup, you die" — and someone doing the same thing six months later blows up.
- Teased fifth category she believes actually works now: **"AI-native work"** — she has a formula for it, next article/episode.
- Long-term contrarian bull case for crypto (despite the doom-post): AI concentrates wealth and power in the hands of a few; crypto is the upward-mobility channel and hedge — global access to finance (on-chain stocks for the global South) plus, unapologetically, speculation-as-entertainment ("Korea is just the first to experience that").

## Lessons learned
- Judge a category by who bears the asymmetry: same market can be a rational hedge for an incumbent and suicide for a startup. Ask "is this an asymmetric bet *for me*?" before entering.
- Distinguish traction from PMF explicitly in your metrics: signups/hype are convertible only within a short window (acquisition or bridge funding); paying-users-at-sustainable-margins is the only thing that survives a cycle.
- To find real demand, look at which side FOMOs: in agentic commerce the merchants/service providers are the actual customers, not the agents — sell picks and shovels to the supply side.
- Define the use case before the product: "in order to define a product, you have to define a use case. And when I just try to define a use case, I find there is no use case" (no venture-scale one, today).
- Model cost is a product constraint in consumer agents — a smarter model can price you out of your own margin; budget cost-per-interaction before picking the model.
- If you have a web surface, make it agent-readable now (Austin: put a skill.md on your site; "you're no longer writing documentation for humans, you're writing that documentation for agents") — that's cheap and real, unlike betting the company on agent payments.
- Enterprise angle that works: Mistral's model — don't build the smartest model, sell private deployments to enterprises who can't ship their data to labs, and charge *more*.

## Best quotes
- "Traction does not equal PMF... Traction is a form of energy. PMF is a form of sustainable energy that can overcome market cycles." — Jessy
- "It becomes an asymmetric bet in a positive way for incumbents, and the reverse asymmetric bet for startups." — Jessy
- "The UX was almost like strictly worse than just me going to Amazon, clicking three buttons to buy something." — Jessy
- "In order to define a product, you have to define a use case. And when I just try to define a use case, I find there is no use case." — Jessy
- "When you're too early as a startup, you die." — Jessy
- "I am bullish crypto. Because AI concentrates wealth and power in the hands of a few, whereas normal people need upward mobility channels, and this is what crypto can provide." — Jessy
- "It's a hedge against AI for regular human beings, financially and as entertainment." — Jessy
- "Developers historically have been the least willing group and audience to pay." — Jessy

## Contrarian / surprising takes
- The person who ran ecosystem for x402/agentic payments at the EF and built it at fast.xyz says none of the four categories work for startups today — the doomer take from an insider, not a hater.
- Crypto is *not necessary* for machine commerce — top-up accounts and monthly settlement already solve it; Stripe just makes UX good enough.
- The real demand in agentic commerce is merchant FOMO, not agent usage — the market is currently selling the *idea* of agent customers.
- Dumber models can be the correct product decision (cost-per-interaction economics).
- Speculation/gambling defended as a legitimate long-term crypto use case: one of "the longest standing businesses in the history of humans," and a structural response to closed upward mobility (Korea as leading indicator).
- Agent-lending has an IP problem nobody's solved: your agent's specialty can be distilled by whoever rents it (same reason Anthropic bans distillation farms).

## Stories & anecdotes worth retelling on stage
- **The hacker house origin:** a VC was paying for her conference travel and lodging anyway, so she scaled it — three-bedroom apartments with 20 people on bunk beds and air mattresses across Denver, Barcelona, Amsterdam, Istanbul, NY, SF. Pure grassroots, pre-AI community building that seeded a generation of cracked engineers.
- **The EigenLayer rocket:** joined when it was a few hundred million valuation; ~$20-40B eight months later — "rollercoaster."
- **The McDonald's chatbot:** a fast-food chain wired a smart model into its ordering bot and people farmed it as a free LLM — why her shopping agent had to run a strictly worse model.
- **Austin's dongle test:** Austin asked Claude what to buy for his camera rig; Claude produced two Amazon links; three clicks and a credit card later it arrives tomorrow. The supposedly-disrupted UX is... fine. The agent-payment version would require wallet setup, funding, and leak-proofing first.
- **Figma vs. Dylan:** "perfect timing of Dylan selling it, worst timing of Figma IPOing" — the two sides of the exit window in one company.

## Tools & workflow
- Background stack: Roam Research (graph note-taking for collective intelligence) → EigenLayer ecosystem → EF AI team → fast.xyz co-founder.
- Built with Google's ACP/ECP agentic-commerce standard integrating Amazon + Shopify merchants; watched Stripe (Projects, top-ups), Orthogonal (YC x402 marketplace), zeroclick.ai (turn any API into an agent-purchasable service), Sapien/Poshia (payments for one-person agent companies) as the field's reference points.
- Operates as researcher-founder: build in the category, then publish the categorical post-mortem; next post is the "AI-native work" formula.
