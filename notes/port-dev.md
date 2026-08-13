# port on context goblins and anti-loop dev

**Guest:** port (@portdev on X, portdeveloper on GitHub) — Turkish open-source "context goblin" in the BuidlGuidl orbit, 133 repos, bio just says "learning." Built Gulltoppr (the Rust backend behind abi.ninja's unverified-contract decoding, on top of heimdall-rs), the Docusaurus copy-page plugin now shipped in pnpm's and Ethereum execution-APIs' docs, Vanator, Monad Monitor. Codes entirely from a VPS driven by tmux panes and a self-built Telegram bot.

## Core thesis
Agents and loops are a trap for real development: looping "gives the agent too much power." Treat the AI as a harnessed implementer of your ideas, take baby steps so you're in every decision, spoon-feed context in a well-designed prompt — and you'll ship better results than the loop-maxers. The hard part isn't shipping anymore; it's noticing problems worth solving, and you only notice them by actually using things.

## Key insights
- **Anti-loop, anti-agent (for building):** agents are fine for chat/ops (what clawd does on the show), "but for developing things, for coming up with ideas and executing them, I think agents are terrible... and I think loops are terrible." A loop is "the sloppiest loop ever" — a minigun that "costs like twenty bucks to fire one shot."
- **Baby steps doctrine:** stay involved in every decision; the agent is "a junior engineer or a senior engineer... that you pay to get work done." Keep the AI an implementer, not a decider.
- **Prompt design is cheaper than search:** today his agent burned tokens Googling when he could have pasted the link — "take your time when you're prompting to create a good prompt. That will save you tokens and your time as well."
- **The over-engineering problem:** "AI has the tendency to over-engineer everything, and the challenge right now is to write less code. Writing more code is just actually easier." Caveman version: "more code bad, less code good." (Enforced by the "Grumpy Carlos" code-reviewer persona that somehow installed itself on Austin's machine via Scaffold-ETH.)
- **VPS-as-body:** he codes on a cloud box specifically "to make sure that the agent that I'm running does not hit anything important" — ~10 tmux panes, attachable from any device, survives closing the laptop, drivable from a cafe or "in the bathroom doing my thing."
- **Telegram ground control:** a self-built bot with custom buttons mirrors the panes; the killer feature is "I can use this chat to iterate on the chat itself" — the bot improves the bot.
- **Cheap-model triage by alias:** `ccode` (Claude Code — "can do everything with excellence, thought, and precision"), `ccodex` (Codex — the fallback "when Claude Code lobotomizes their models"), `dcode` (DeepSeek V4 Pro, $5/month — "a lot more unhinged... It just does destructive stuff without asking me, which I love").
- **Harness + subscription is the magic combo:** a professionally built harness (Claude Code/Codex) running on a flat subscription is powerful *because* it's not metered — vs API fusion services (he burned $10 on OpenRouter's frontier-fusion before finishing one test app). His twist: fuse *cheap* models (DeepSeek V4 Pro + GLM 5.2) to maybe reach Fable-ish quality.
- **Tools should turn agent-native:** Gulltoppr went from powering ABI Ninja's buttons to being "abi.ninja, but for agents" — an API, a skill, and an MCP — "now that people are using agents more than they click buttons around."
- **LLMs live in the past on Ethereum:** vanilla models still think deploying a contract costs $20–30; it costs pennies — hence skill files (eth-skills on Scaffold-ETH) as "the missing knowledge between AI agents and production Ethereum."
- **Ideas come from use, not inspiration:** "You don't go out there and get implanted with a great idea by a god or something or an angel or a prophet. You've noticed the thing."

## Lessons learned
- Run coding agents on a disposable VPS, never your main machine; keep wallet keys on separate hardware from where agents run.
- Build a Telegram front-end to your sessions so dead time (commutes, queues) becomes "one more prompt" instead of scrolling Twitter.
- When one harness degrades, hot-swap to another (Claude Code ↔ Codex) rather than fighting it.
- Solve your own problem first, use it yourself, grind updates through months of zero users — then distribute by having your agent "aggressively open PRs to every little project" (that's how the copy-page button landed in pnpm's docs).
- Give hackathon teammates ABI Ninja instead of Etherscan: paste any (even unverified) contract address, get a full UI with ENS + wallet connections before you've built a frontend.
- Give agents skill files (skill.md / eth-skills) so they know current costs, audit libraries, and deploy flows — "dangerously close to product market fit with just a prompt and an agent."

## Best quotes
- "More code bad, less code good." — port
- "AI has the tendency to over-engineer everything, and the challenge right now is to write less code. Writing more code is just actually easier." — port
- "Looping is bad because it just gives the agent too much power. You should be taking baby steps to make sure that you are involved in every decision that the agent makes." — port
- "It's like a pit bull that I have a harness on." — port, on his AI
- "Let's imagine it like a minigun, it costs like twenty bucks to fire one shot." — port, on loops
- "It just does destructive stuff without asking me, which I love." — port, on DeepSeek
- "You don't go out there and get implanted with a great idea by a god or something or an angel or a prophet. You've noticed the thing." — port
- "Context is for AI agents." — port, on sending Austin a sticker with no explanation

## Contrarian / surprising takes
- Loops and autonomous agents are actively bad for development — said straight into a show whose previous guest (fucory/Smithers) preached loops. Austin notes the "you're a peasant if you're not using loops" crowd is sheep behavior.
- The "unhinged," destructive-without-asking cheap model is a feature, not a bug — for the right fenced environment.
- Fable being withheld is "all a psyop" ahead of the Anthropic IPO; his geopolitical stance, as Austin translates: "quit being a bunch of pussies and release it."
- He killed his own X agent persona ("Multilad", the lobster-hat account) because X kept banning it — agents-on-social is a ban treadmill.
- Archived his own Anvil GUI and told users to go use Paradigm's Rivet instead — "rare OSS move, quiet ship."

## Stories & anecdotes worth retelling on stage
- **The copy-page button's long grind:** built because Monad's docs ran Docusaurus and no plugin existed; months of shipping updates to literally no users; then aggressive agent-opened PRs to every project — now his button sits in pnpm's docs, React Native Puppeteer, and Ethereum execution-APIs. "This is self-glazing, by the way."
- **Gulltoppr's name:** the horse Heimdall rides in Norse mythology — because it's built on heimdall-rs. He looked up the mythology live and admitted he doesn't know any of it.
- **$10 evaporated on OpenRouter Fusion** before a single test dApp was finished — the moment metered frontier-fusion died for him.
- Clarke's Third Law taped to his wall while learning webdev: "we are basically doing magic. Look at me, I'm just a Turkish guy talking to a WhatsApp bot thingy."
- Built a QR-code calendar-invite tool the morning of the stream because he keeps forgetting his own events — "I should have a working product in like two hours right after this stream."
- Austin's counterpoint image: Telegram as NASA ground control he can query while feeding the baby — "yo, is there anything blocking? Get it done."

## Tools & workflow
- **VPS** (AWS-ish) + tmux: ~10 panes across windows, attach from anything, agent sandboxed away from anything important.
- **Telegram bot** (self-built, self-iterating) as remote control: reply to sessions, see live output, custom buttons, Ctrl-C.
- **Aliases:** `ccode` = Claude Code (primary), `ccodex` = Codex (fallback), `dcode` = DeepSeek V4 Pro ($5/mo first month, ~$10 after).
- **No agent framework, no loops** — interactive prompting with baby steps; drafts articles as plain notes of his thoughts.
- **His OSS:** abi.ninja + Gulltoppr (heimdall-rs API/skill/MCP for unverified contracts), Docusaurus copy-page plugin (LLM-friendly docs), Monad Monitor TUI, Vanator, se2-foundry-monad; Scaffold-ETH 2 + eth-skills as the recommended agent stack.
