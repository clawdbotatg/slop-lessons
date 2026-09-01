# sendmoodz — Ekubo and the Agent-First Wallet

**Guest:** sendmoodz (Moody Salem) — ex-AWS (Hyperledger) and Google ad-tech, early Uniswap Labs engineer (joined just before v2), founder of Ekubo: a from-scratch AMM on Starknet written in Cairo ("Uniswap v4.5 or something"), upgraded 10+ times, now expanded to EVM as cross-chain open AMM infrastructure. Launched Ekubo Wallet — an agent-first desktop wallet — the morning of the show, and demoed it live on mainnet with Austin's Claude driving.

## Core thesis
The agent is the wallet's user now. Bots are already the majority of blockchain traffic and agents the majority of web traffic, so build the wallet the way Cloudflare builds a browser for agents: a deliberately dumb, fully-decentralized signing + policy layer with no hosted infrastructure. Bring your own AI, express intent in English, and bound the agent with stateless deterministic policies — rails, not instructions.

## Key insights

- **Agent-first by design, Cloudflare logic.** "The majority of web traffic is now agents, it suddenly makes sense for them to build a browser specifically for agents" — the wallet sits in the background, primarily for agents, handling the DeFi chores (rebalancing, collecting fees, reinvesting) you do less often than you should because they're a pain.
- **The wallet is dumb on purpose.** Key custody + policy engine, nothing else. No hosted infrastructure, public RPC lists, fully in your control. Intelligence lives in your agent plus third-party MCP servers — the MCP server is the new dapp frontend: "The ideal MCP server for Uniswap will also give you all the same data you can see on the interface."
- **Policies are stateless deterministic rails.** Evaluated in order over the transaction envelope and call list only. He explicitly rejected spend limits because they're stateful, simulation-dependent, and create a security dependency on the RPC URL. Human-readable enough to actually review: reject anything on chain 1 above 50 gwei, allow approve-to-0x on the FOLD token, etc.
- **Unattended is the point — and the risk.** Attended execution (fingerprint per signature) is the training wheels; the real product is loops: DCA, "swap back and forth forever," narrow-band LP management in plain English. The flip side: "you can define a policy which is maybe too open or too loose, and then your agent can go do something without your permission."
- **Policies beat prompt injection.** BYO agent + hard policy layer means "You can be protected from things like prompt injection" and from the agent just making bad decisions — can't-be-evil rails around a fuzzy decision-maker.
- **Keep calldata out of the context window.** An aggregator route can be 10KB of calldata; passing that through an LLM's context between tool calls "takes forever." He built a portable execution-plan object so agents pass references, not payloads — which is also why "The LLM typically doesn't care. Like you can use pretty much any LLM." Save the big model for deciding which pools to LP in; use the fastest model for execution.
- **The audit repricing is here.** v12.sh (Zellic's AI auditor) + Daybreak (OpenAI's security model): $2,000 of repeated AI audits on the wallet vs the mid-six-figures the same code would have cost historically. Auditing "gonna fall so low and it's gonna get so good" that you run it on every commit — Austin: put the $1 audit in CI/CD.
- **The safety tax is real.** Mid-development, Codex spent days refusing his requests, citing harness policy against "risky financial transactions, including any sort of crypto transaction." OpenAI walked it back — but the frontier lab can nerf your whole product category overnight.
- **The loop repo pattern.** His automation lives in a repo: the looped prompt, plus instructions to write and commit a report file every round — a full history of every decision the agent made. Feedback ("I don't like how you did this") just updates the core prompt.
- **Clean boundaries are how you trust agents.** He won't connect Claude to Gmail — years of history joining a training corpus makes him "super uncomfortable." Wallets are the perfect agent domain "because there's like a very clean boundary around them": create a test wallet, cap the blast radius, play.
- **EIP-1559 hater take.** "It felt like it was all motivated just by the ETH burn and not really about the UX quite as much" — politicized by ultrasound money, while UX wants expiring transactions and Dan Finlay's gas-price escalator. He still occasionally gets a stuck transaction.
- **His psychosis is self-doubt, not overproduction.** Watching himself feed the slot machine: "does anyone actually want to use this the whole time?" Austin's reframe: that nagging is the healthy signal pointing at the real next problem — traction.
- **Distribution over execution.** "To me, it's rarely the execution" — if a product doesn't kick off organically you're swimming upstream; it's the wrong time or the wrong product, so ship rough (unsigned Windows build and all) and watch for pull.

## Lessons learned

- Ship the policy/signing layer, let users bring their own AI — every sloperator's setup will be slightly different anyway.
- Make every guard stateless and deterministic; never let security depend on an RPC's answer or a simulation.
- Pass references, not payloads: keep bulk data (calldata, routes) out of agent context via portable execution plans.
- Downshift the model once the tooling is deterministic — any fast LLM can drive it; spend frontier tokens only on strategy.
- Loop + commit a report per round: observability for unattended agents is a git history.
- Run AI audits (v12.sh, Daybreak) continuously — repeated $1 audits beat one $100k audit.
- Always use worktrees so parallel agent sessions in one repo don't conflict.
- Scope agents to domains with clean boundaries; use a test wallet before real funds.
- Encode MEV hygiene into the agent's instructions (slippage tolerance = cost of front-running you, then retry) so normies get protection they'd never configure.
- Walking away from Uniswap DAO funding — the overhead of a giant DAO wasn't worth it — is what let Ekubo move fast and upgrade 10+ times.

## Best quotes

- "The majority of web traffic is now agents, it suddenly makes sense for them to build a browser specifically for agents." — sendmoodz
- "I mean bots already make up the majority of blockchain traffic" / "Users armed with agents are going to make up the rest of it." — sendmoodz
- "What am I doing trying to remember things when I can just have the agent listen?" — sendmoodz
- "You can be protected from things like prompt injection." — sendmoodz (on BYO-agent + policy rails)
- "It felt like it was all motivated just by the ETH burn and not really about the UX quite as much." — sendmoodz (on EIP-1559)
- "To me, it's rarely the execution." — sendmoodz (on why products fail)
- "It costs a buck to send a million dollars on Ethereum right now." — slop.atg.eth
- "The slot machine is you get in and you make a prompt and it improves the product a little bit. And then you give it another prompt and it improves the product a little bit. And that dopamine loop is dope." — slop.atg.eth
- "Use at your own risk. Not financial advice." — sendmoodz (the outro disclaimer)

## Contrarian / surprising takes

- EIP-1559 was burn politics, not UX: he'd rather have transaction expiry and the gas-price escalator, and notes the same crowd that demanded the burn now complains emissions are too high.
- Spend limits — the first thing everyone asks a wallet policy for — are a bad design: stateful, simulation-dependent, RPC-trusting. Stateless envelope rules are the right primitive.
- The model doesn't matter for onchain execution. Against every "use the best model" instinct: a well-factored wallet MCP works with the fastest, cheapest LLM.
- The dapp frontend is dying: "Eventually, you should never want to look at your portfolio in the thing" — you'll just ask, and something will answer.
- He turned down the Uniswap DAO as a funder for his Uniswap-lineage AMM — the DAO's size and obligations were the liability, not the asset.
- A DeFi-native founder is more scared of connecting Claude to his email than to his money.

## Stories & anecdotes worth retelling on stage

- **Launched that morning, demoed live.** The wallet shipped hours before the show; Austin updates the app on-air, installs the skill, and his Claude discovers the wallet unprompted. Agent proposes its own policy, Austin fingerprints it, and a Claude-driven mainnet transaction lands live — buying FOLD (Interfold, a token launched *that day*), then opening a narrow-band LP position from one English sentence. Position out of range within minutes: "It's impermanent loss."
- **The 400 UNI he couldn't sell.** Made test wallets constantly while building Uniswap, qualified for the airdrop many times over — and the company told him he couldn't sell. (Austin's counter: burner wallets with $20 brain wallets swapping to DAI.)
- **Codex bans crypto for a few days.** Mid-build, Codex started refusing everything, citing policy against risky financial transactions "including any sort of crypto transaction." Austin: "Fable style, like too afraid." OpenAI walked it back — the safety tax as product risk, told by someone it actually hit.
- **The $2,000 stablecoin swap.** Managing his own LPs, impatient, clicking through quotes, he lost ~$2k on a stablecoin-to-stablecoin quote from a misbehaving private market maker (0x made him whole). "I don't want to be checking every single quote" — the agent should.
- **Austin's live permission rage-fight.** Ten minutes of the host battling his own harness's permission prompts on-air while the guest calmly suggests bypass mode — "The auto mode classifier refused it" — ending in an all-caps prompt: "We're way past lowercase letters at this point."
- **The audit price collapse, in one wallet.** Mid-to-high six figures is what auditing this code used to cost. He's spent about $2k, running v12.sh over and over, on every change.

## Tools & workflow

- **Claude Code in the terminal** — background sessions, **always worktrees** (hates cross-conversation conflicts in one repo); bypass permissions. Multiple conversations, one directory of all Ekubo repos.
- **v12.sh** — Zellic's AI auditor, run repeatedly ($2k+ total). **Daybreak** — OpenAI's cybersecurity model, used for code review.
- **Ekubo Wallet** (ekubo.org) — local wallet MCP server (keys, signing, policies) + hosted Ekubo protocol MCP (quotes via 0x, pool data, TWAMM orders, onchain DCA); WalletConnect bridge inherits the same policies; a custom wallet↔MCP protocol passing portable execution plans.
- **The loop repo** — looped prompt + per-round report files committed to git for full history.
- **Ekubo protocol** — Cairo on Starknet, Yul on EVM, first-party extensions (TWAMM, onchain DCA), integrated into every aggregator.
