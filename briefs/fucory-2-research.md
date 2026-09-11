# fucory round 2 — research doc — 2026-09-11

Sources: ep 1 (`notes/fucory.md`, June 7), GitHub/npm/X sweep Jul→Sep 11,
Tevm Smithereans Telegram (449 members; today's traffic + history walk in §4).
The 08-16 question brief is `briefs/fucory-2.md`; this doc is the *what changed*.

## 0. TL;DR — what's hot right now

- **He killed the Ralph loop.** Smithers 1.0.0-rc.0 (tagged Sep 6) deletes the
  entire JSX/React workflow engine — no `<Ralph>`, no `<Workflow>`, no reconciler,
  "no shim, adapter, or compatibility layer will be published." New substrate is
  Effect 4 (RC) + a SQLite journal. The whole ep-1 thesis (JSX-because-RL-trained-
  on-React, Ralph-as-baseline) is gone from his own product in 3 months.
- **Repositioned from "orchestration" to "the codebase maintainer agent"** —
  Smithers now "instruments and automates a code repository"; hosted app at
  smithers.sh in private alpha (free for selected public repos, he eats
  inference), paid seats "planned", no prices.
- **The factory ate itself: 1,247 commits/week (Aug 30), 1,434 (Sep 6)** vs
  71–257/week in early Aug. ~100 commits on Sep 11 alone, all co-authored
  "William Cory + claude". Agent runs commit straight to main
  (`smithers action key1_… attempt 1 settled`). rc.0 diff: 13,100 files,
  **+1.04M / −1.60M lines**.
- **Today, 10:36 AM, in the Telegram:** *"Day 2 of being forced to touch grass
  because 21 accounts are rate limited. I get a fable account back late tonight,
  a 2nd fable account tomorrow, a codex account back tomorrow followed by many
  codex accounts back sunday."* — 21 subscription seats, all walled.
- **Tevm swapped engines (Sep 5):** EthereumJS out, native ZEVM in (Voltaire
  primitives + Guillotine-mini bytecode exec), breaking, "no alternate engine
  fallback". Big Guillotine (the ep-1 EVM) is dormant since Jan; guillotine-mini
  is what ships. 997/998 tests pass.
- **New side quests:** VibeLang (Aug 21, a TypeScript-derived language, 19 of
  21 day-one commits authored as "Gemini"), Trellis (ARC-AGI-3 lab using only
  Fable 5 + GPT-5.6 Sol), ferric (Rust/WASM React engine), fable-bench
  ("measuring claude-fable-5 downgrades to Opus").

## 1. Smithers — the arc since ep 1 (June 7)

| date | what |
|---|---|
| Jul 4 | v0.27: per-workspace gateway daemon, Telegram approvals, Claude Code + Codex plugins, self-healing runs w/ autopsy |
| Jul 16 | v0.28 "biggest release ever": 1,169 commits, 4,187 files, 417 fix commits; workflow packs; provenance-bound approvals; `<Trellis>` |
| Jul 20 | v0.29: `<Memory>` (Hindsight), Microsandbox microVMs |
| Jul 22 | v0.30: orchestration seat → Opus 4.8, adds Kimi K3 |
| Jul 27 | v0.31: side-effect-safe time travel; **Opus 5 becomes default implementer/orchestrator, GPT-5.6 Sol/Terra moved to review**; `opus5-bug-sweep` workflow ("82 of 138 commits are fixes, many landed by that workflow") |
| Aug 1 | v0.32: 512 commits / 251 fixes; finishes Effect 4 migration "that had silently broken task dispatch" |
| Aug 2 | v0.33: npm rename `smithers-orchestrator` → `smthrs`, clean break. Same day: ~30 repos forked into the org (Socket.dev toolchain, elizaOS benchmarks, a 55,698-skill corpus) |
| Aug 13 | v0.34: `smthrs steer` (queue instructions to a running agent), `--takeover`, `supervisor`/`top` cockpit, `fallbackAgents()` failover across registered subscriptions, per-run token usage |
| Aug 17 | **v0.35 — last npm release.** Grok/xAI provider, workflows callable as agent tools, GitHub webhook listeners |
| Aug 20–24 | subscription-seat plumbing: "heal lapsed Claude tokens without a browser", "read a provider quota rejection as quota, not session loss", Codex "provider-aware rate-limit recovery with exact-session resume", Kimi adapter |
| Aug 25 | `smithersai/flows` extracted: "Smithers Flow SDK and durable Effect runtime" |
| Aug 31 | **1.0.0-rc.0 merged: "durable Effect engine replaces the 0.x JSX workflow engine"** |
| Sep 5 | `MONDAY_RELEASE_REVIEW.md` — his own agent's verdict: "do not publish the current checkout". 16 of 392 CI targets failing, build cache doesn't hash compiler bytes, docs teach a removed API. 49 public packages, 116 workspace manifests |
| Sep 6 | rc.0 tag. Still not on npm as of today. First outside bug reports (khazra): quota errors on one model disabling others on the same account; cached usage extending an unknown-reset block |
| Sep 9–11 | 34 / 37 / 29 pushes per day; Sep 11 is all hardening: redact failure messages, `chmod 0600` the run journal, "refuse malformed markdown capabilities", gate the unconfined host shell |

Also: `claude-p` (the subscription-as-API trick, 391 stars) untouched since Jun 17;
README still says client-side usage restrictions are "fundamentally unenforceable."
JJHub "real product is written in Go in a separate repo" (private). Runyard =
"self-hosted control plane for agent runs (formerly Smithers Hub)".

## 2. His public takes in the window (X is thinly indexed — these are what surfaced)

- **Aug 27 thread: "Every section in my Claude.md and why I added it"** (9.5k views).
  Sections: *Challenge claims*; *Communicate directly* ("Google developer-doc
  prose, Stripe information design, Kernighan's economy… no ornament or em-dash
  asides"); *Engineer like Matt Pocock* ("swim downstream of things popular in
  training data" — the ep-1 React argument, generalized); *Build fast* (walking
  skeleton, ship UI mocks early); *Deliver locally* ("never publish to or link
  claude.ai"); and **"Use OpenCode for Kimi, Claude Code for Claude, and Codex
  for OpenAI."**
- **~Aug 25, on Tobi's "banning Claude Code at Shopify until it reads AGENTS.md":**
  "my solution to this is to symlink AGENTS.md in any sandbox claude is in."
  (unverified ID, from a profile snapshot)
- **~Aug 24, on Theo's model tier list:** "B tier and above is used everyday."
- **Jul 21:** "If you use smithers your agent handles the complex agent
  orchestration loops and graphs while you describe what you want to claude code."
- Model roster he actually runs (from release notes): Opus 5 (implementer),
  Fable 5.1 (new default orchestrator, Sep 6), GPT-5.6 Sol/Terra (review),
  Kimi K3 via OpenCode, Grok, Gemini (authored VibeLang's first day).

## 3. Tevm / EVM side

- Jul 29–30: monorepo split into nine `evmts/tevm-*` repos, then `tevm-utils`
  re-archived a day later ("stay in core; see decision in repo split"). tevm
  1.0.0-rc.153 published Jul 30 (Unix-socket + WS JSON-RPC, anvil parity
  knobs). Release note from May: "Bug fixes to lots of packages done with ai and
  no changeset."
- Aug 12: install breakage vs viem > 2.46 (rc.153 resolves a stale
  `@tevm/errors`) — still open.
- Aug 30: **Tevm's CI is now generated from the Smithers graph** — every
  `.github/workflows/*.yml` rendered from `PACKAGE.ts`; coding lanes are
  `Agent.Diff` candidates behind an approval-gated `factory-approval` environment.
- Sep 5: EthereumJS → native ZEVM, breaking; browser in-memory engine removed
  (browsers now talk JSON-RPC to a native server); MUD adapter, matchers, JS
  VM/state/trie/txpool packages deleted. Next tag planned 1.0.0-rc.154.
- Telegram today, Sam Bacha: "@fucory here is your sign to release your explorer"
  — there's an unreleased block explorer.

## 4. Tevm Smithereans — what the room is talking about (Telegram)

Room character: Sam Bacha (Manifold) is the loudest voice; Charles Cooper (Vyper),
Andrew Miller, Rick (Won't DM), nox, GB, nubs, Daniel. Heavy MEV / Vyper /
research-paper crowd, not a Smithers support channel. 449 members, ~75 online.
Pinned: "Agentic MEV . WTF in SF" (luma.com/agenticmev).

**Today (Sep 11), before the show:**
- *Merge-mining Bitcoin as the market for AI compute* (Daniel, via @afdudley) →
  a 3-hour argument. nox: run inference at high margin, fall back to mining
  blocks at commodity price — one orchestrator wrapping "inference engine +
  miner client". Rick: "PoW is Proof of (Useless) Work. If the work is useful
  problems emerge"; any economic-security claim breaks when you can hold two
  positions (one on the inference, one on the asset). Sam: "this is just a kind
  of electricity market… you cash settle"; "people are not interested that much
  in permissioned markets"; "the question no one is asking is there any real
  hedging risk for long dated compute capacity". Rick used a claude.ai share to
  refute an arXiv paper he didn't read: "I'm pretty sure this analysis is wrong
  but it has convinced me I don't need to read the paper."
- *npm blocking Effect's releases* (Arnaldi) → Rick: "the AI are killing npm.
  Good times. Maybe they'll write proper caching tools? But why bother the
  frontier teams won't post train to use them."
- *nubs, 11:44 AM: "are we crazy or are the models only good on launch day"* —
  the launch-nerf candidate, unprompted, from his own room.
- *dmarz "Make the minds verifiable"* — Sam: "@Dmarzzz gets it… join us
  brother" (verified inference, the ep-1 $10M problem, still live).
- Sam on fucory's 21 rate-limited accounts: "your accounts are the sum of a
  remainder of an unbalanced equation inherent in the programming of AI."

**Jul–Sep history walk:** see §4b below (filled from the scrape; if empty, the
walk was still running when he went live).

## 5. What this does to the ledger (for the questions)

- **loop-vs-leash (contested, 8 pro / 9 anti / 6 middle):** the author of the
  Ralph-baseline doctrine just deleted `<Ralph>` from his product with no compat
  layer. Either the loop got absorbed into a durable engine (Nader's "harnesses
  eat loops") or he found it didn't beat the baseline. **This is the verdict
  question.**
- **launch-nerf (candidate 1/3):** his own room asked it today; he ships
  `fable-bench` "measuring claude-fable-5 downgrades to Opus". Independent
  confirmation available — ask open.
- **subsidized-window / headroom psychosis:** 21 seats walled simultaneously;
  0.34/0.35 are largely rate-limit plumbing (seat failover, "read quota as quota
  not session loss", token healing without a browser). He is building the
  subsidy-arbitrage machine while it closes.
- **accomplishment psychosis:** +1.04M/−1.6M lines, 1,434 commits/week, and the
  release review says don't ship. Ask "who runs Smithers who isn't you" — the
  hosted alpha is free and he pays inference: is there demand?
- **swim-with-the-weights (thin core, 5 eps):** "Engineer like Matt Pocock…
  swim downstream of things popular in training data" is the cleanest
  statement of this theme anyone has given. But he abandoned React-as-DSL for
  Effect, which is *not* popular in training data — contradiction to press.
- **manage-dont-micromanage (contested):** agents commit to main unattended
  ("attempt 1 settled"), but his Claude.md is a style guide down to em-dashes.
  Which is it?

## 6. Questions, in order (Austin's voice)

1. Last time you told everyone Ralph is the baseline every orchestrator has to
   beat. Rc.0 deletes `<Ralph>` and says no compat layer ever. What beat it?
2. Twenty-one accounts rate-limited, day two touching grass. Walk me through
   the seat roster — Fable, Codex, Kimi, Grok — and what it costs a month. When
   the subsidy ends, does the factory survive?
3. 1,434 commits last week, a million lines added, 1.6 million deleted, and your
   own Monday release review said "do not publish." Is that a factory or a
   treadmill? Who's using Smithers that isn't you?
4. Your room asked this morning: "are we crazy or are the models only good on
   launch day?" You built fable-bench. What did it say?
5. "Swim downstream of the training data" — then why Effect? Nobody trained on
   Effect 4 RCs.
6. Agents commit straight to main on your repos. What's the back-pressure now —
   still differential tracing, or approvals in Telegram?
7. VibeLang's first day was written by Gemini. What's the language for, and why
   does a Zig-EVM guy want a Go-compiled TypeScript?
8. Tevm threw out EthereumJS for your own Zig engine. Big Guillotine is dead,
   mini ships. Was the 8-hour EVM the thing, or the *ability* to regenerate it?
9. Verified inference — dmarz says "make the minds verifiable", your room
   agrees. Still the $10M problem? Any movement?
10. Symlinking AGENTS.md into every sandbox — is the agent-config format war
    real, or Tobi being Tobi?

## 7. Callbacks (read to him)

- Him, ep 1: "If you can't beat the baseline, your orchestration is probably
  just burning tokens." — then show the rc.0 changelog line.
- Him, ep 1: "If you spend all your time engineering your tool, you never
  actually build the app." — 1,434 commits/week on the tool.
- Austin's 20% harness / 80% work rule — honest number today?
- Him, ep 1: "I never build it right until my third try." Smithers is on its
  third engine (Ralph → JSX/React → Effect). Is this the one?

## 8. Landmines

- Don't re-explain Ralph loops or JSX-as-plan (ep 1 covered both; both are gone).
- He hasn't shipped rc.0 to npm — don't say "Smithers 1.0 is out"; say "rc".
- Big Guillotine vs guillotine-mini: don't call the dormant one the product.
- The Telegram room is a MEV/research crowd, not his user base — don't cite it
  as "Smithers users say".
- No public podcasts/talks in the window; this is his first airing of the pivot.
