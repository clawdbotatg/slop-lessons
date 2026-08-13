# Auryn Macmillan — Private Voting with The Interfold

**Guest:** Auryn Macmillan (auryn.eth) of Gnosis Guild — long-time Ethereum governance/tooling builder (Zodiac, clr.fund rounds, MACI work), now building **The Interfold**: a generalized encrypted-compute network (FHE + MPC + ZK) whose flagship app is receipt-free private voting (CRISP), with a staked cipher-node network and the FOLD token launching via a CCA auction on Uniswap.

## Core thesis
Every private-voting system to date has hidden a single trusted coordinator who can see everyone's ballots — Auryn *was* that coordinator running clr.fund rounds, and hated it. The Interfold replaces the trusted operator with a randomly-selected, staked committee of cipher nodes doing threshold FHE decryption, so you get verifiability AND receipt-freeness with no single party able to peek. Voting is just the first app — it's a general "encrypted execution environment" (E3).

## Key insights
- **Voting's two hard requirements pull against each other:** paper ballots give receipt-freeness out of the box (shake the box, no proof of how you voted) but zero verifiability; on-chain voting gives verifiability but leaks everything. ZK+FHE is the first stack that delivers both at once.
- **Receipt-freeness is stronger than privacy:** it's not enough that nobody sees your vote — you must be *unable to prove* how you voted even if you want to, or bribery/coercion markets re-emerge. Secret ballots were invented ~100 years ago precisely to kill vote-buying.
- **The coordinator is the weak point of MACI-class systems:** to aggregate multiple people's encrypted inputs into one proof, someone historically had to see all the data. FHE lets the committee compute on ciphertexts and decrypt only the approved output.
- **Architecture in one breath:** on-chain request → sortition from staked cipher-node pool → committee runs a DKG to publish a shared public key → voters encrypt + prove input validity (Noir circuits) → core logic is plain Rust compiled to a zkVM (e.g. RISC Zero) running over FHE ciphertexts → threshold of committee decrypts only the tally.
- **Slashing is elegantly self-enforcing:** to collude, a node must hand over its decryption share — and that very share is the evidence used to slash it. Revealing your hand *is* the crime's proof. The same share-reveal on the approved output is how nodes get *paid*. "Honesty is more profitable than defecting."
- **Committee size is a purchasable security dial:** users pay stablecoin fees proportional to committee size and duration; bigger committee = more economic security but quadratic DKG cost (lattice-based DKG scales badly — hence the ~20-node cap at launch, hundreds/thousands as the DKG gets efficient).
- **The FHE tally is the easy part** — you can outsource it to any GPU box with no privacy loss; the verifiable, efficient DKG is where all the hard research lives.
- **Beyond voting:** sealed-bid auctions, private identity, private medical-record statistics, even collaboratively fine-tuning a model on private data (the "Weft" repo demo).
- **LLM knowledge is the new PageRank:** being "in the model" is the new SEO, and a poisoning industry is already emerging — "the equivalent of bumping your thing up in page rank."
- **Cheap open models change the economics of agent coding:** DeepSeek being ~100x cheaper than frontier means you can afford so many more runs that it can out-produce a $5-per-prompt model on total output quality.

## Lessons learned (practical)
- Ship your docs as Markdown/MDX so agents can consume them directly — Austin literally pointed his agent at the Interfold docs + a repo and it scaffolded a working-looking private voting app (with a skill.md file) in one session. "This is what you give your agent."
- A frontier model figured out the CRISP docs; Austin's local model could not — docs-to-agent works, but only above a capability floor.
- Agent-built crypto demos need adversarial review: the demo vote resolved suspiciously fast — almost certainly skipping input validation and running all nodes on one machine. "Great starting point... we just need to harden it and introduce those verifiability components."
- Run agents with **can't-be-evil isolation, not don't-be-evil rules**: dedicated server in a closet, each agent in its own VM, per-repo deploy keys so any change traces back to one VM. "The minimum possible surface to do something accidentally malicious and still be productive."
- If you already run an Ethereum node (e.g. BuidlGuidl's RPC network), a cipher node is a natural economic layer on top — finally a mainnet protocol that pays consumer-grade hardware (target: 32GB RAM, 8 cores).
- A ~$700–1200 used RTX 3090 runs a 30B MoE research agent at ~160 tok/s — real long-horizon local agent work for about a grand.
- Pick local models by *behavior*, not benchmarks: Auryn likes the A1 30B MoE because it "has much more of a tendency to research its answers rather than assume that it knows."

## Best quotes
- "It's not backed by math. It's backed by humans and process and guns and gold." — Austin, on paper-ballot tallying
- "The intent here is to create the economic conditions such that honesty is more profitable than defecting." — Auryn
- "The minimum possible surface to do something accidentally malicious and still be productive." — Auryn, on his agent-isolation principle
- "You could set like ground rules, don't share my private key, but this is all don't be evil, not can't be evil." — Austin
- "It just has a stronger tendency to go and read the docs without me having to explicitly say read the docs." — Auryn, on why he likes the A1 model
- "Like the equivalent of bumping your thing up in page rank, right?" — Auryn, on LLM-knowledge poisoning

## Contrarian / surprising takes
- The FHE math (the scary part) is basically solved/outsourceable; the mundane-sounding key-generation ceremony (DKG) is the actual research frontier.
- Cheaper-but-weaker beats expensive-but-stronger for coding agents once you factor in run count (DeepSeek vs $5-a-prompt frontier).
- Slashing via decryption-share reveal: the mechanism where betraying the committee automatically produces the on-chain evidence against you.
- Starting on **mainnet L1**, not an L2 — "gas is cheap at the moment," go where demand is.
- "We need to be being a solution to a problem and not taking the solution to the problem" (Austin) — nod to Rarimo-style ZK voting shipped into politically unstable regions where private signaling is a real need, not a crypto toy.

## Stories & anecdotes worth retelling
- **Auryn as the trusted coordinator:** running clr.fund quadratic funding rounds, he personally held the keys that could see everyone's contributions — "I felt this really personally... I wanted to figure out how do we distribute trust in the coordinator." That discomfort is the origin story of the Interfold.
- **The live agent-built vote:** mid-show, Austin's agent (fed only the docs) had built a private voting app — cute padlock icon and all — and the two of them ran a live poll ("Can you believe that you're launching a token, man?"), both voted yes, ceremony "ran"... suspiciously instantly. Auryn, deadpan: "I would like to look under the hood." Perfect stage bit about slop demos: impressive scaffold, unverified guts.
- **The cypherpunk who can dunk:** Auryn can still dunk a basketball ("not throwing any windmills down anymore") — "there's not a lot of cyberpunks that can dunk."
- **Green-screen lore:** early calls where Auryn was a floating head in a green turtleneck; his wife walking in on "a nerd in my room" in front of a green screen.
- **The server that heats his office:** his local-AI box hasn't made it to the closet yet — "I'll make a query and I'll be sitting there like, 'Wow, why am I sweating just in my right side?'"

## Tools & workflow
- **Dedicated AI server in a closet** (plus a second on the floor), everything in isolated VMs, per-repo deploy keys, SSH in to prompt — strict isolation as the guiding principle.
- **Remote model of choice: DeepSeek (V4)** for the price/quality ratio; misses GLM Flash-class light models for local use.
- **Local: A1 (~30B MoE)** on a used RTX 3090, ~160 tok/s, long-horizon research-y tasks.
- **Harness: OpenCode** ("I always end up falling back to just using OpenCode") with multiple agent profiles; experimenting with Cloudflare + OpenWebUI to put an agent on his wife's phone — the "agents for normies with calendar access" unlock.
- **Interfold stack for builders:** Noir for input-validation circuits, Rust→zkVM (RISC Zero) for FHE core logic, Aragon plugin demo at dao.theinterfold.com, docs already agent-ready Markdown at theinterfold.com.
