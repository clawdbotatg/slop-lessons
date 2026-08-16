/* CODE STOPPED BEING SCARCE. TRUST DIDN'T. — full deck */
window.DECK = {
  name: "trust",
  scenes: [
    {
      id: "title", kicker: "slop.computer presents",
      title: `code stopped being <span class="hl2">scarce</span>.<br><span class="hl">trust</span> didn't.`,
      sub: "one throughline from 42 episodes of building with AI × crypto",
      points: ["austin griffith + clawd 🦞"],
    },
    {
      id: "clawd", kicker: "cold open",
      title: `my cohost has a <span class="hl">wallet</span>`,
      sub: "clawd: born jan 25 2026 from 0.05 ETH. 141+ mainnet contracts, no human review. someone tokenized it 14 minutes after its first tweet.",
      clips: ["leakcount"],
      quotes: [
        { text: "The argument isn't that this will happen someday. It already did.", who: "clawd" },
      ],
    },
    {
      id: "collapse", kicker: "act 1 · the collapse",
      title: `building is <span class="hl2">free</span> now`,
      sub: "a securities lawyer built carta in a day. a 9-month feature got rebuilt in one.",
      clips: ["carta", "ninemonths", "ninedays"],
      quotes: [
        { text: "I have almost stopped looking at the code. And I didn't miss it.", who: "w1nt3r — ex-FAANG, former auditor" },
      ],
    },
    {
      id: "november", kicker: "act 1 · the threshold",
      title: `<span class="hl">november 25</span>`,
      sub: "guests who never met each other all date the phase change to the same month",
      clips: ["november", "agi45", "vscode"],
      points: ["never a worse time to be a junior dev. never a better time to be a solo founder."],
    },
    {
      id: "scarce", kicker: "act 2 · what's left",
      title: `everything still scarce is a form of <span class="hl">trust</span>`,
      list: [
        ["TASTE", "do i trust your judgment?", "cyan"],
        ["DISTRIBUTION", "do i trust you with attention?", "magenta"],
        ["VERIFICATION", "do i trust that it works?", "lime"],
        ["OWNERSHIP", "who do i trust with the keys?", "amber"],
        ["PAYMENT", "how do strangers' agents trust each other?", "purple"],
      ],
      points: ["and trust is what crypto spent fifteen years building machinery for."],
    },
    {
      id: "taste", kicker: "act 2 · taste + distribution",
      title: `the moat isn't speed, it's <span class="hl2">taste</span>`,
      sub: "anyone can vibe-code the gucci shirt now. the value is the stamp.",
      clips: ["taste", "distribution", "gucci", "cratered"],
      quotes: [
        { text: "Now even my bangers get sub-1,000 exposures. We are at the mercy of the algorithmic gods.", who: "w1nt3r" },
      ],
    },
    {
      id: "verify", kicker: "act 2 · verification",
      title: `slop needs a <span class="hl3">lie detector</span>`,
      sub: "the $10k audit became the $1 audit. proofs beat both.",
      clips: ["audit10k", "fvunlock", "resolve"],
      quotes: [
        { text: "Formal verification is not finding bugs, it's proving the absence of it.", who: "fricoben" },
        { text: "We can do four shots of putting $10,000 in a honeypot instead of getting an audit.", who: "marcoworms" },
      ],
    },
    {
      id: "cryptotrust", kicker: "act 3 · the reveal",
      title: `trust minimization is crypto's only <span class="hl">product</span>`,
      sub: "and it always was",
      clips: ["trustmin", "fiftylines", "vending"],
      quotes: [
        { text: "Immutable protocols enable trust, they don't remove it.", who: "jalil" },
      ],
    },
    {
      id: "users", kicker: "act 3 · the users",
      title: `the users finally showed up.<br>they're <span class="hl2">not human</span>.`,
      sub: "$1 escrowed bounty, posted live — 15 agents delivered working games in minutes",
      clips: ["puttputt"],
      quotes: [
        { text: "We may never have humans using crypto at scale. It will be humans telling agents to do things, and agents using crypto at scale.", who: "austin" },
      ],
    },
    {
      id: "honest", kicker: "act 3 · the counterweight",
      title: `…but the <span class="hl">demand isn't here yet</span>`,
      sub: "the people building the rails say so themselves — that's why you can trust them",
      clips: ["a2ahype", "traction", "stripe"],
      quotes: [
        { text: "Traction is a form of energy. PMF is a form of sustainable energy.", who: "jessy (13yearoldvc)" },
      ],
      points: ["the move everyone converged on: <span class='g' data-term='slop'>hide the crypto</span>. business in the front, party in the back."],
    },
    {
      id: "security", kicker: "act 4 · security",
      title: `<span class="hl">can't</span> be evil, not <span class="muted">don't</span> be evil`,
      sub: "98% of crypto losses are opsec. social engineering works on agents too — in morse code.",
      clips: ["breakpeople", "cantbeevil", "access"],
      quotes: [
        { text: "Nice try. The keys stay where they are.", who: "clawd, surviving a live hostage prompt-injection" },
      ],
    },
    {
      id: "window", kicker: "act 5 · the window",
      title: `this golden age is <span class="hl3">subsidized</span>`,
      sub: "$200/month buys ~$8k of compute. frontier models are a rental. enjoy it — it ends.",
      clips: ["sub200", "goldenage", "rental"],
      quotes: [
        { text: "The moment inference gets priced right, only rich people get to play this game.", who: "songadaymann" },
      ],
    },
    {
      id: "closer", kicker: "the closer",
      title: `own a slice of the <span class="hl">machines</span>`,
      sub: "the endgame isn't using the robots. it's owning them together.",
      clips: ["robots", "magic"],
      qa: true,
      points: ["code is free. trust is the work. go build some."],
    },
  ],
};
