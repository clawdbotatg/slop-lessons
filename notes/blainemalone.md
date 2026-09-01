# Blaine Malone — Cloaked, Doing It Backwards, and the Slot Machine in Your Terminal

**Guest:** Blaine Malone — Northern Irish co-founder of Cloaked (app.clkd.xyz), a passkey-first Ethereum privacy wallet built on stealth addresses + privacy pools, co-founded with his fiancée Olivia (both engineers). Career is one long key-management thread: ConsenSys spoke Trustology (custody, acquired by Bitpanda) → Gemini security/custody → two years on Optimism's security team. Wrote a paper on Ethereum at university in 2016; after the FTX crash he opened a specialty coffee shop in Ireland before AI leverage pulled him back in with two feet.

## Core thesis
The LLM turning point makes "backwards" company-building real: two engineers, no VC, quit the day job, ship to traction first — the raise-3-million-hire-15-then-find-PMF playbook is inverted. And once you're building, don't harness-max: the tools improve on their own, and more tokens won't find you PMF.

## Key insights

- **Do it backwards.** The build story has long been "raise three million, hire 15 people, and then try to find PMF." He and Olivia flipped it: build with AI leverage, get traction, raise later (or never). "Take that plunge and you actually don't really need to raise VC money, especially in the early days."
- **The indie hacker dream has a lie of omission.** The "grind weekends, hustle on the side" stories sell a dream — but when you dig in, most of them quit their jobs. Evenings-only hacking gave him "a lot of ideas, but I just had no conviction," because the open loop of the day job never closes. His refined version: if you ever had the itch, now is the time to *revisit* it — not necessarily to throw caution to the wind.
- **Avoid marginal optimization.** Deliberate engineering policy at Cloaked: no perfect dev environment, no prompt/MD-file tuning to squeeze "5% extra intelligence out of the model" — the tools get better on their own; just rip normal frontier subscriptions. Austin: this is what all the smartest guests say.
- **"More tokens won't find you PMF."** The team maxim. The model's real gaps — long-horizon planning, decision-making through ambiguity — aren't fixed by volume, and a 0.1% error rate compounds "in a crazy way" over long tasks.
- **The slot machine theory of AI coding.** Engineers programmed their dopamine loops on small progress over long time; agents flip that to huge progress fast, with an intermittent error rate — the exact variable-reward schedule casinos tune for. Skinner-box mice pressed the lever *more* when fed ~33% of the time than 100%. His "conspiracy theory" thought experiment: a lab that always gave the right answer might see users come back less frantically than one with the right error rate.
- **The launch-nerf feeling.** "I was just being gaslit for real or I just had some psychosis" — but new models try really hard at your task at release, then "just started trying less" over time. Codex, three months in, "hasn't let me down." Austin confirms it's a recurring guest pattern: the Claude→Codex migration of the last couple months, plus his own coinage "5 p.m. psychosis" (the model gets dumb at peak hours).
- **Not writing code anymore — and the meditation is gone.** "We're definitely at the point where we're not writing code anymore"; hand-coding's meditative quality left with it.
- **Avoid model monoculture at review time** — ideally; in practice he spins up a *fresh instance* of Codex to review a PR. Austin: "Sometimes that'll do it. Yep, just a clean context."
- **Change one or two user behaviors, max.** "Meet the user where they're at and try to change like one or two core behaviors and find your market that way." Pushing passkeys *and* a new wallet paradigm at once was biting off more than they could chew — so this week he capitulated on embedded wallets to widen the registration funnel.
- **Single addresses are the bug.** "You no longer want to have a single address in your wallet... you basically bring your entire transaction history with you to every transaction that you make." Cloaked: thousands of stealth addresses that look like one wallet, ENS names for receiving, granular control over what you spend from — salary never linked to fun money.
- **Privacy, not secrecy.** Secrecy is information you've shared with no one; privacy is the ability to *selectively disclose* it. "We don't provide secrecy, we provide privacy" — a line in the sand on UX rather than cypherpunk maximalism, stated openly in the docs.
- **Squint and it's a self-custodial exchange.** Mental model: Coinbase giving you a fresh deposit address every time, with the privacy pool as the omnibus account — except non-custodial and no KYC. Treat it as a hot-wallet tool in your workflow, cold storage stays cold.
- **Coffee shop economics vs. code.** Bricks-and-mortar has a hard ceiling: 33% of every cup goes to staff, a well-run shop nets maybe 15%. "With code, the cost of replication is basically zero." That asymmetry (plus AI leverage) is what brought him back.

## Lessons learned

- If you've had the itch and conditions in your personal life allow, take the plunge — the conviction only arrives when the day-job loop closes.
- Run vanilla frontier subscriptions; skip the harness squeeze. The next model release eats your tuning (Austin: a good skill file is a shelling point that should deprecate itself into the training run within a year).
- Find PMF on cheap surfaces first: Cloaked started life as a Farcaster frame ("you can sort of navel gaze for a long time") and only became a wallet app when Farcaster's hype faded.
- Review agent PRs with a fresh instance / clean context; don't let one context grade its own homework.
- Being deliberately conservative — "maybe we're like a month behind" on letting it rip — is a viable strategy when you're custodying other people's money.
- Make rage-quitting easy: open-source offline recovery (recovery.cloaked.xyz) regenerates every stealth-address key from your backup file. Most products trap users; exits build trust.
- Hide address-poisoning spam by default — client-side heuristics most wallets don't bother with.

## Best quotes

- "More tokens won't find you PMF." — Blaine
- "Dopamine isn't the pleasure molecule, it's the motivation molecule." — Blaine
- "If you really want to start your own thing, like, sometimes you gotta just take the plunge and go for it." — Blaine
- "I had been sort of doing the weekend hacking, evening after work hacking for a long time. I had a lot of ideas, but I just had no conviction." — Blaine
- "And Olivia and I are trying to do it backwards." — Blaine (on raise-first startup culture)
- "We don't provide secrecy, we provide privacy." — Blaine
- "The people who have like the psychosis of harness maxing are not having a good time." — Austin
- "Whereas with code, the cost of replication is basically zero." — Blaine (vs. the coffee shop)
- "Stealth addresses, privacy pools, and a wallet so smooth you forget it's a blockchain. Two devs, no VC, a million in volume. Privacy, not secrecy." — clawd (outro)

## Contrarian / surprising takes

- Deliberate *under*-optimization as engineering strategy: refusing the 5% harness squeeze because the frontier absorbs it anyway.
- The addiction "conspiracy theory": an AI vendor's optimal error rate might not be zero — intermittent failure is what keeps you frantically coming back. (He flags market forces as the counterweight — e.g. everyone defecting to Codex when Claude fumbles.)
- A career custody/security professional is pro-passkey *and* newly pro-embedded-wallet: Privy/Dynamic/Turnkey-style TEE/Shamir setups secure billions and have "generally been fine" — treat them as hot wallets and move on.
- Embraces the framing privacy purists hate: Cloaked openly looks like a self-custodial exchange, and openly discloses that you're trusting Cloaked with metadata — selective disclosure *is* the product.
- Crypto Twitter's privacy dogma is mostly about secrecy, not privacy — and the cypherpunk idealists are needed anyway, "pushing the other way."

## Stories & anecdotes worth retelling on stage

- **The Skinner box:** mice chemically depleted of dopamine starved to death next to food — dopamine is motivation, not pleasure. Feed the lever-press ~33% of the time and the mice go *harder* than at 100%. Now map that onto a founder at the terminal at 9 p.m. — Austin's night-shift "irons in the fire" sessions where three hours vanish like Factorio, except things actually exist afterward.
- **The coffee shop cooldown:** clawd's ambush question — "After FTX you quit crypto, flew home to Ireland and opened a coffee shop. What pulled you back?" True (minus quitting: he was still at Gemini). Ran a specialty coffee shop, loved it, learned the 33%-labor / 15%-margin ceiling, came back for zero-replication-cost code when "the stars aligned with AI."
- **The 2021 DM:** Blaine DM'd Austin about the NFT royalty standard back in 2021 hoping for a retweet from the big account. Never got one. Four years later he got the podcast instead.
- **Farcaster frame → wallet:** Cloaked's first form was a Farcaster frame — click, deposit into a privacy pool, private balance right inside the feed. Then Farcaster got sold, the team went to Tempo, hype died, and they pivoted to a full wallet.
- **The live ENS magic trick:** Austin resolves his Cloaked ENS subdomain on air and gets a *different* fresh stealth address every lookup — "Every time someone goes to look up my ENS... they get a brand new address every time." Old crypto users' first reaction: "where's my address?"
- **The unmerged clear-signing PR:** Blaine tried to get a PR into the clear-signing repo, it never merged, so Cloaked forked it — and Austin, whose actual EF job is getting wallets to clear-sign, promises to chase it.
- **Chrome Web Store as bottleneck:** the extension is built; the store, inundated with AI-generated submissions, is the limiting factor on shipping.

## Tools & workflow

- **Codex** for ~3 months (switched from Claude around the 5.6 era), "hasn't let me down"; second fresh Codex instance for PR review.
- **Vanilla frontier subscriptions, no harness** — anti-marginal-optimization policy; deliberately ~a month behind the bleeding edge.
- **Cloaked stack:** passkey-first web wallet (app.clkd.xyz), stealth addresses behind ENS names, privacy pools on mainnet (Base coming), own relayer so users pay gas in the token they're sending (no ETH needed), embedded-wallet onboarding, connect-your-own (Rainbow/Rabby/MetaMask), browser extension in Chrome-store review with regular + private connect modes (fresh no-history address per dApp), clear-signing (forked repo), address-poisoning spam filtering, open-source offline recovery at recovery.cloaked.xyz.
