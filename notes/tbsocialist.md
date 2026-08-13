# Gas Killer: Putting an LLM Fully On-Chain

**Guest:** Josh Dávila ("The Blockchain Socialist" — author of *Blockchain Radicals*, 204 episodes of a leftist crypto podcast, co-founder of Bread Cooperative) and Ron ("postcapitalistcrypto.eth"), his co-builder. Together they built **GasKiller** — a crypto-economic coprocessor that runs existing Solidity functions off-chain via a staked operator set and posts only signed state changes, cutting gas ~99% — and used it to run a Qwen LLM (rewritten in Solidity) fully on-chain. Ron also builds VibeCodeRoom.ai, a spatial/gestural interface for non-technical people to work with AI.

## Core thesis

Blockchains are "big dumb computers": the EVM's gas constraints make ordinary computation — iterating an array of a thousand voters, running invariant checks, doing anything real-time — economically impossible, and that constraint has silently limited every use case crypto has ever shipped. The fix isn't proving everything with ZK; it's optimistic off-chain execution of the *same* Solidity by staked operators, with ZK reserved only for the dispute case — which is cheap enough that even an LLM fits inside a smart contract.

## Key insights

- **Optimistic-by-default, ZK-only-on-dispute is the unlock.** Operators simulate the contract's own canonical function off-chain, sign the resulting external calls and storage-slot changes (Schnorr aggregate signature), and post them for ~14k–65k gas plus storage writes. The expensive ZK proof is only generated in the pessimistic/fraud case — and even then, an interactive bisection game narrows the dispute so you only prove the disputed segment, not trillions of gas of execution.
- **Backward compatible with unmodified logic:** you don't rewrite your contract's compute — you inherit an SDK that points at the operators' aggregate public key. It's still "running Solidity," just elsewhere. Iterating 10,000 voters drops from many millions of gas to ~80k.
- **One honest observer keeps the whole thing safe.** Even if every operator colludes ("Kim Jong-un goes to all of the operators"), any non-operator can recompute the execution, start the interactive slashing game, and the slashed stake recompensates the victim contract. Security condition: more stake at risk than money extractable — the same crypto-economic trust assumption as restaked ETH.
- **The LLM-on-chain trick was a translation chain: Qwen → C → Solidity.** There was already a C implementation of Qwen inference; C-to-Solidity is a close-enough mapping that the port is *bit-equivalent* — they reproduced the test suite in a deterministic execution environment, put the weights in a fork of the EVM state, and operators keep the weights pre-loaded. AI made the gnarly rewrite tractable.
- **Democracy is compute-bound.** The founding motivation wasn't DeFi: they wanted live, liquid on-chain voting where power is tallied at execution time, and the EVM literally cannot iterate the voter array. Snapshot-based governance is a workaround forced by gas — "snapshot based things are inherently not real time," which means less liquid systems and money left on the floor.
- **Cheap compute means safer contracts.** Many exploits exist because devs contort code around gas ("build a mapping and a custom data object" instead of the obvious loop). With GasKiller you can run your entire test suite / invariant checks before or after execution on-chain — an extra 2–5M gas that no longer lands on the user.
- **LLM-as-oracle with verified inputs:** feed a zk-email-verified New York Times article into an on-chain LLM to settle prediction markets on fuzzy questions regex can't handle ("whether Zelensky wore a suit or not") — trustless judgment where today's answer is UMA, which they consider corruptible because you can buy the answer.
- **Market discovery via on-chain gas data:** they find customers by looking at who spends the most gas (Railgun — could halve its shielding costs; Aztec) and going to them directly. The product's TAM literally grows when gas gets expensive — cheap mainnet gas is currently a headwind.
- **Operator economics piggyback on restaking:** existing node operators (EigenLayer, Commitments.xyz) rehypothecate stake into GasKiller — no new server costs, no new capital, extra yield. Non-validators can also just deposit stables and run the software.
- **The endgame is self-modifying contracts:** an on-chain LLM that writes Solidity means "smart contracts writing themselves" — a contract that generates a replacement for its own execute function. Ron: "This is inevitable."

## Lessons learned

- Don't force ZK everywhere: put the proof only where the dispute is. Optimistic execution + interactive bisection + slashing gets you verifiable heavy compute at signature-verification prices.
- To port an ML model into a hostile environment, hop through the nearest language: an existing minimal C implementation made the Solidity rewrite nearly mechanical, and reproducing the original test suite gave bit-equivalence as the correctness bar.
- "Meet people where they're at and don't overcomplicate" — their explicit design identity. Backward compatibility (no contract changes, just inherit an SDK) is the adoption strategy.
- Find customers with on-chain data: rank protocols by gas spend, model their savings, then pitch. Railgun analysis showed ~50% cost cut before any conversation happened.
- Privacy check for coprocessors: GasKiller only touches data that was going to land on-chain anyway (downstream of Railgun's shielding), so it adds no new privacy surface.
- If you use an on-chain LLM as an oracle, build in redundancy — multiple passes, multiple sources, averaging/outlier-throwing — because a half-billion-parameter model's single answer varies.
- Idea hygiene from Josh: he told Ron to *wait* on building new infrastructure until the need was proven — the tool came out of a concrete product blocker (live vote tallying), not tech-for-tech's-sake.

## Best quotes

- "We literally rewrote plan. In solidity through that into a smart contract" — Ron (postcapitalistcrypto.eth), on porting Qwen into Solidity ["plan" = mis-transcription of "Qwen"]
- "With Gaskiller we make blockchains no longer like big dumb computers." — Josh (theblockchainsocialist.eth)
- "You can't give a real-life company the constraint of like, hey, you can't iterate this array. That is so crazy." — Ron
- "As long as there's more stake at risk than potential money extracted, this is what we call cryptoeconomically secure." — Ron
- "That's why Uma is cringe because you can buy your answer." — Austin (slop.atg.eth), summarizing Ron's oracle critique
- "I ship too fast to look at the code." — Austin, on not knowing which model his own research bot uses
- "Smart contracts writing themselves… Infinite profits… This is inevitable" — Ron, on the endgame

## Contrarian / surprising takes

- **ZK maximalism is the wrong default.** Even in a future EVM with native ZK opcodes, the GasKiller route stays cheaper — making every validator verify proofs is waste when a staked signature plus a dispute game gives "the same trust assumption" as Ethereum itself.
- **UMA/Polymarket-style optimistic oracles are "cringe" and corrupted:** "There's been so many documented cases of Polymarket just being absolutely corrupted by this. Also, nation-state actors are definitely in on this." An LLM reading zk-verified sources is proposed as the honest replacement.
- **A leftist critic who ships:** Josh has spent 200+ episodes "dragging crypto leftward" yet builds commercial infrastructure — and frames more compute as a precondition for democracy on-chain, not just cheaper DeFi.
- **"Crypto" is a liability word:** Josh is rebranding away from "Blockchain Socialist" after 204 episodes because "crypto is the most blocked word on social media" — he'd rather arrive at crypto from first principles under a frontier-tech banner than lead with it.
- **They're rooting for higher gas prices.** The business gets more compelling when mainnet gas is expensive; cheap gas shrinks the visible need even though whole categories of apps stay impossible without them.
- **Writing bad code on purpose is fine now:** do the bubble sort, iterate the array "the dumb way" — the operators absorb the compute and gas-golfing itself is a source of exploits.

## Stories & anecdotes worth retelling on stage

- **The apartment origin story:** Ron was at Josh's apartment with an idea to fix live on-chain vote tallying; Josh told him to wait — they didn't have time to build new infrastructure. Ron built it anyway, and it became GasKiller. At ETHDenver they demoed iterating a thousand voters with a 99% gas saving.
- **The Kim Jong-un thought experiment:** every GasKiller operator gets captured by Kim Jong-un, who "wins the vote" 100% and becomes president of the United States — and a single honest observer outside the operator set still recomputes the truth, runs the bisection game, slashes everyone, and the slashed North Korean stake recompensates the election contract.
- **Live demo of an LLM on (test)chain:** on llm.gaskiller.xyz (Sepolia), Austin prompted a half-billion-parameter Qwen — no wallet needed — asking the price of hay in Colorado; the answer took 5–10 minutes of shared rounds to come back, a delightfully absurd "slowest chatbot alive" moment that is also a working on-chain oracle.
- **"You're in the weights":** Austin's research bot runs each guest through a vanilla LLM — Josh is famous enough to be *in the model weights* from his podcasting; Ron immediately asks "I'm not in the weights, right?" A fun bit about model-memorization as the new fame threshold.
- **The Zelensky suit market:** the canonical example of a prediction market question that regex can't settle but a zk-email-fed on-chain LLM could — did he wear a suit or not?
- **VibeCodeRoom's tree:** Ron's answer to AI fear is a spatial room where "you plant a tree and it grows" — "Are you scared of computers? No worries… I understand tree. I know tree. Trees are my friends."

## Tools & workflow

- **GasKiller stack:** Solidity SDK you inherit; operator network signing with Schnorr aggregate signatures; interactive fraud-proof bisection with ZK only for the disputed segment; slashing with attributable fault routing slashed stake back to the harmed contract. Live on Sepolia with an API service; mainnet pending hardening.
- **LLM-on-chain pipeline:** Qwen (~0.5B params) → existing C inference implementation → bit-equivalent Solidity rewrite with the original test suite reproduced; weights pre-loaded into a forked EVM state on operator nodes; demo at llm.gaskiller.xyz, promptable without a wallet.
- **Restaking integrations:** EigenLayer and Commitments.xyz planned as operator on-ramps; also standalone operation via stablecoin deposit. Liveness enforced — go offline and you're kicked/slashed.
- **Biz-dev workflow:** query on-chain gas expenditure to rank prospects (Railgun, Aztec), model their savings, pitch the SDK integration.
- **Ron's side tool:** VibeCodeRoom.ai / "the communal computational space" — meetings happen *in* a shared AI room (replacing the loop of record meeting → throw transcript at Claude → repeat), aimed at designers/UX researchers interacting via voice and hand gestures.
- **Austin's confessed workflow:** ships AI-built tools so fast he doesn't read the code — his guest-research bot's model choice is a guess ("probably API Sonnet").
