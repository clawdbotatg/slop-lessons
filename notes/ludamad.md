# ludamad — Claude Box and AI-native CI at Aztec

**Guest:** Adam "ludamad" (Domarod) — head of engineering at Aztec Labs (the zero-knowledge privacy rollup on Ethereum), at Aztec since ~2022, previously Wayfair/Cisco. Longtime hobbyist game dev (open-source roguelike Lanarts, GameMaker games as a teen). Builder of **Claude Box**, Aztec's internal Slack-connected "CI system that does nothing but run AI" — agentic merge-conflict resolution, backporting, and adversarial security testing against the rollup.

## Core thesis

CI is the natural home for AI agents: classic CI automates the deterministic, but the tedious work that actually eats engineers — merge conflicts, backports, requirement changes — requires *judgment*, and a beefy shared machine running frontier models on engineers' own subscriptions turns that judgment work into infrastructure. The deeper claim: most software has always run on "good enough," and AI wins wherever "good enough" is the bar — engineers who resist are usually the ones who loved the craft layer, not the product.

## Key insights

- **AI-native CI ("Claude Box"):** Aztec kept its deterministic C++/circuit CI, then added a parallel system — a shared beefy machine, connected to Slack, whose only job is running AI agents on repo tasks. Started March-ish as "a repo just for Claude"; segregate the AI, let it do its thing, then expand once trust builds.
- **Merge conflicts are the killer app.** A 100-file backport merge is mostly rote; only the conflicting diffs need human judgment. The agent resolves the merge, then tags exactly the people who need to review just those diffs. "No one really reviews like 100 file merge."
- **Classic CI's weakness is AI's strength:** traditional automation is brittle — "you would often automate things a very specific way, and then requirements would change." An LLM layer absorbs requirement drift, and people can talk to the CI sessions in plain English via Slack.
- **Subscription economics drive the architecture:** Claude Box lets engineers bring their own Claude/Codex subscriptions — "in the age of subsidies," a subscription is the most AI bang for your buck, which is exactly why they built the tool internally instead of buying a platform (external platforms can't route your personal sub).
- **Model diversity as a security strategy:** Opus 5 is "the most willing" frontier model for cybersecurity work (backtesting old bugs); OpenAI models are refusal-prone; **Kimi (open-weight, ~2.8T params)** fills the niche where you "really just want it to roleplay an adversary" using attack language against the network. They plan to ramp usage specifically for model diversity.
- **The skills flywheel is a no-brainer for open source, a dilemma for auditors:** Aztec writes skills into its open-source repo so anyone's AI can build on the complex stack — disseminating expert knowledge is pure upside. But audit firms pivoting from expert humans to AI systems face the opposite pull: their skill files are the secret sauce, so they keep them closed.
- **Human attention is the scarce resource.** The origin story of Claude Box: running many long-lived Claude terminals, rotating between prompts, and finding turnaround was so slow that "someone else would start doing very similar work." The fix wasn't more agents per person — it was shared infrastructure.
- **Who makes the AI transition:** product-minded engineers who treated code as a means to an end adapt; engineers whose joy is "how the code is shaped" struggle, because AI-scale code volume forces you to "loosen your standards" and become a technical product manager.
- **The "good enough" theory of software:** software has always shipped at good-enough quality ("good enough means every so often all the data is breached"); crypto raises the bar, but even in crypto, customers paying *is* the definition of good enough. AI accelerates the good-enough layer; deep-human work survives in the cryptography stack and other every-line-matters components.
- **AI found real vulnerabilities fast** — including in components that had already been human-audited — once given the right harness input.
- **Prompt psychosis (a new genus):** the background anxiety that you're always "one prompt away" from unlocking the fix — and its epistemic trap: "If we're not finding things, is it because we just didn't give it the right prose?"
- **Next 6–24 months:** long-thinking agents ("agents that just think for three hours") have the most design headroom; low-latency agents are latency-constrained. The human-in-the-loop moment becomes the prominent bottleneck, and software architecture reshapes around sandboxed low-risk components that can move fast.

## Lessons learned

- Build an AI *job runner* on shared beefy hardware rather than N engineers babysitting N local terminals — the machine must be big enough to build the codebase efficiently, and Slack is a fine front-end.
- Route agent output back into existing human process: have the agent resolve the rote merge, then tag only the reviewers whose diffs actually need judgment.
- Let engineers bring their own AI subscriptions to internal tooling — it is the cheapest compute in the subsidy era and a reason to build in-house.
- Keep a refusal-tolerant model (open-weight, e.g. Kimi) in the rotation for adversary roleplay / exploit simulation; frontier US models will bail mid-task on security work.
- Put skills/CLAUDE.md-type knowledge directly in your open-source repo if you want an ecosystem — it's free dissemination of expert knowledge and demonstrably speeds the AI up.
- Don't over-invest in third-party skill files: they're both a supply-chain risk ("scary") and probably obsoleted by the next model generation.
- Backtest your AI security harness against *known old bugs* to calibrate whether it can find real ones.
- Old abandoned projects are newly cheap to revive — an agent can absorb a decade-old codebase's intent and fix engine bugs that used to take weeks ("running projects back").
- If you're a craft-oriented engineer, pick the problems where every line still matters (crypto/proving stacks); if you're product-minded, lean into the technical-PM role AI hands you.

## Best quotes

- "What we really need is a CI system that does nothing but run AI" — ludamad
- "I mean, no one really reviews like 100 file merge. That's very pre-AI." — ludamad
- "Bro, I just asked you to merge a PR." — Austin, on models refusing CI tasks as "cybersecurity"
- "sometimes we really just want it to roleplay an adversary and you use nasty languages like attack the network and do full exploits" — ludamad
- "Good enough means every so often all the data is breached." — ludamad
- "if the customers are willing to pay for the software, that is the definition of good enough, whether you like it or not" — ludamad

## Contrarian / surprising takes

- **The most technical engineers are the worst at adopting AI** — not despite their skill but because of what they love: code shape over product. AI adoption is a personality/values question, not a skill question.
- **Open-weight Chinese models are operationally necessary** for a US-adjacent security team — not for cost, but because frontier models refuse adversary roleplay. Refusals are a product gap open weights fill.
- **Skills are self-obsolescing:** a good skill file likely trains the next model and gets flattened by it — so treat them as ephemeral, and be dubious anyone's skill library "provides an edge when the new model comes out."
- **Crypto isn't exempt from "good enough":** even in a field that preaches correctness, paying customers define the quality bar.
- **AI beat human auditors on their own turf:** vulnerabilities surfaced quickly in components that had already passed human audit.

## Stories & anecdotes worth retelling on stage

- **The renamed .exe:** as a kid, before he could program, Adam noticed games were EXE files and tried renaming a text file to `.exe` to make a game. His punchline: "I still think that basically works" — and Austin's riff lands it: today you literally write English and get an executable out; the kid's naive move became the actual programming model.
- **Claude Box's origin:** March, half the team "pretty hesitant to use Claude." Adam is juggling so many long-lived Claude terminal threads that PR turnaround lags until *coworkers unknowingly duplicate the work*. The fix he pitched: a segregated "repo just for Claude." It grew into Slack-connected AI CI for the whole org.
- **The refusal moment:** ask a frontier model to handle a merge/security task and it taps out citing cybersecurity — "Bro, I just asked you to merge a PR." Hence Opus 5 for willingness and Kimi for full adversary mode.
- **Carney Death Peddlers:** his GameMaker-era zombie game with a friend's art — Zombie Shakespeare as a boss, terrible puns, a year and a half of grinding for polish. Users and project complexity were "not inversely correlated" — his most-played games were the simple ones. Today he's got an agent modding a Heroes of Might and Magic clone on weekends.
- **Aztec's founder co-invented Pong-adjacent history:** Adam name-drops that one of Aztec's founders, Zach, "co-invented" (with chief scientist Ariel) the protocol lineage — a fun the-people-behind-the-math beat. (Garbled in transcript — verify before using on stage.)
- **AI psychosis exchange:** Adam flips the question back on Austin, who catalogs the taxonomy — sycophancy psychosis, hardware-buying psychosis (Sero), and md-file psychosis: "if this goes away, nothing actually goes away… that means that there's nothing there in the first place." Adam's own is prompt psychosis: the itch that the right seed prompt is always one edit away.

## Tools & workflow

- **Claude Box** (internal, Slack-connected): shared beefy machine as an AI job runner tied into CI; agents resolve merges/backports, open PRs, tag reviewers; sessions are conversational from Slack.
- **Models:** Claude + Codex frontier models as bread and butter (BYO subscription — "flip through them as one advances versus another," letting personal subs lapse alternately); **Opus 5** for willing security/backtest work; **Kimi** (open weight) for adversary roleplay and model diversity; API keys only where the loop demands them.
- **Skills:** written into the open-source Aztec repo to accelerate both internal AI and external builders; cautious about installing internet skill files (security + obsolescence).
- **Security workflow:** harness with seed prompts → long think → fan-out → review phase; backtests against known historical Aztec bugs; found new vulns in human-audited components.
- **Hobby stack:** JavaScript/web platform for quick weekend games (disparate from Aztec's C++/Noir stack), agents fixing engine bugs in decade-old projects, one agent running a Heroes of Might and Magic-clone mod.
- **Aztec day job stack:** C++ prover stack, Noir (their ZK language), non-EVM rollup with public + private components — public prover runs on higher-end MacBooks, private proofs on basically any phone.
