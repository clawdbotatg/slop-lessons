/* THE SLOPERATOR'S HANDBOOK — full deck (the craft lessons) */
window.DECK = {
  name: "sloperator",
  scenes: [
    {
      id: "title", kicker: "slop.computer presents",
      title: `the <span class="hl">sloperator's</span> handbook`,
      sub: "how the same model gives one person slop and another robust software — 42 episodes of craft",
      points: ["austin griffith + clawd 🦞", "<span class='g' data-term='sloperator'>sloperator</span>: one who ships real things by directing agents"],
    },
    {
      id: "ctx", kicker: "lesson 01",
      title: `context is the <span class="hl2">whole game</span>`,
      sub: "agents are token machines. slop in the variables, slop back.",
      clips: ["ctx30", "ctxbottleneck"],
      quotes: [
        { text: "The plan, when the context gets over even 30%, it's over. That stuff is gone.", who: "0xyoussea" },
      ],
      cure: "a mistake in the window keeps poisoning output after you correct it. don't argue — restart fresh.",
    },
    {
      id: "feedback", kicker: "lesson 02",
      title: `<span class="hl">observability</span> is all you need`,
      sub: "the model is smart enough. the question is whether it can see its own results.",
      clips: ["observability", "suffer", "toolcalling"],
      quotes: [
        { text: "Always have the AI suffer its own mistakes first.", who: "dwddao" },
      ],
    },
    {
      id: "loopwars", kicker: "lesson 03 · the loop wars",
      title: `loop or <span class="hl3">leash</span>?`,
      sub: "the one thing the guests actually fight about",
      clips: ["loops", "antiloop", "automations", "corpoloops"],
      quotes: [
        { text: "A minigun that costs twenty bucks a shot.", who: "port, on loops" },
      ],
      cure: "everyone agrees on clean context + honest feedback. they disagree on how much rope the agent gets.",
    },
    {
      id: "manage", kicker: "lesson 04",
      title: `manage, don't <span class="hl2">micromanage</span>`,
      sub: "the best sloperators were managers, not cracked ICs",
      clips: ["middlemanagers", "lovecode"],
      quotes: [
        { text: "The people who have the toughest time with AI are really talented coders who never managed anyone.", who: "fucory" },
        { text: "They are racehorses in the automobile era.", who: "dennison, on cracked devs" },
      ],
    },
    {
      id: "throwaway", kicker: "lesson 05",
      title: `throw away the <span class="hl">code</span>.<br>never the <span class="hl3">tests</span>.`,
      sub: "code is disposable output. regeneration beats repair.",
      clips: ["thirdtry", "ninemonths"],
      quotes: [
        { text: "I never build it right until my third try.", who: "fucory" },
        { text: "There's no point being precious about it.", who: "adrianleb, on the slop curve" },
      ],
    },
    {
      id: "effeff", kicker: "lesson 06",
      title: `<span class="hl2">effective</span> first, <span class="hl3">efficient</span> second`,
      sub: "build on frontier. once it works, push the workflow down-tier or local.",
      clips: ["effective", "effeff", "frontierlocal"],
    },
    {
      id: "own", kicker: "lesson 07",
      title: `you can't outsource <span class="hl">ownership</span>`,
      sub: "the model is capable of everything. someone still has to be responsible.",
      clips: ["ownership", "vulns", "dollaraudit"],
      quotes: [
        { text: "We take ownership on that and if it bugs, it's our fault.", who: "fricoben, on what audits actually sell" },
      ],
    },
    {
      id: "dist", kicker: "lesson 08",
      title: `building was never the <span class="hl2">bottleneck</span>`,
      sub: "distribution and taste are. posting is retention. the algorithm is a market.",
      clips: ["taste", "attention", "distribution"],
      quotes: [
        { text: "You can build anything, the problem is users.", who: "kevincodex" },
      ],
    },
    {
      id: "arbitrage", kicker: "lesson 09",
      title: `the <span class="hl">arbitrage</span> is outside`,
      sub: "~10 million people know what these tools do. 8 billion don't.",
      clips: ["arbitrage", "hvacboomer"],
      quotes: [
        { text: "You have to actually go meet a guy and shake his hand and listen to him complain about his wife.", who: "0xzak, automating an HVAC shop" },
      ],
    },
    {
      id: "closer", kicker: "lesson 10 · the last one",
      title: `then go <span class="hl3">touch grass</span>`,
      sub: "the best ideas hit on a walk, not at the prompt",
      clips: ["walk", "magic"],
      qa: true,
      points: ["get off twitter. go do a magic trick for someone running their business on paper."],
    },
  ],
};
