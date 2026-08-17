/* ACT III — THE SLOPERATOR'S HANDBOOK. Quotes deep-link into episodes at the
   second they were said. Flows from deck-trust into the outro. */
window.DECK = {
  "name": "sloperator",
  "sections": [
    {
      "from": "title",
      "label": "sloperator",
      "color": "#bcff5b"
    }
  ],
  "scenes": [
    {
      "id": "title",
      "kicker": "act III",
      "title": "the <span class=\"hl\">sloperator's</span> handbook",
      "sub": "how the same model gives one person slop and another robust software — the craft",
      "points": [
        "<span class='g' data-term='sloperator'>sloperator</span>: one who ships real things by directing agents"
      ]
    },
    {
      "id": "ctx",
      "kicker": "lesson 01",
      "title": "context is the <span class=\"hl2\">whole game</span>",
      "sub": "agents are token machines. slop in the variables, slop back.",
      "clips": [
        "ctx30"
      ],
      "moments": [
        {
          "ep": "0xyoussea",
          "t": 3079,
          "who": "0xyoussea",
          "quote": "The plan, when the context gets over even 30%, it's over. That stuff is gone."
        },
        {
          "ep": "shafu0x",
          "t": 420,
          "who": "austin",
          "quote": "If I'm arguing with my open claw, I know that I'm in the wrong place."
        },
        {
          "ep": "sodofi",
          "t": 1735,
          "who": "austin",
          "quote": "Make a bunch of notes you know you're never going to read, but you can always point the AI at them."
        },
        {
          "ep": "13yearoldvc",
          "t": 2132,
          "who": "austin",
          "quote": "You're no longer writing documentation for humans, you're writing that documentation for agents."
        },
        {
          "ep": "lex-node",
          "t": 1240,
          "who": "austin",
          "quote": "I almost see skill files as the secret sauce, and people will share their skill files."
        },
        {
          "ep": "0xyoussea",
          "t": 1227,
          "who": "0xyoussea",
          "quote": "Usually it's what creates most of the problems because these are like token machines... if you've given it slop in the variables, it's gonna give you some sort of slop back. It just can't help it."
        }
      ],
      "cure": "a mistake in the window keeps poisoning output after you correct it. don't argue — restart fresh."
    },
    {
      "id": "feedback",
      "kicker": "lesson 02",
      "title": "<span class=\"hl\">observability</span> is all you need",
      "sub": "the model is smart enough. the question is whether it can see its own results.",
      "clips": [
        "observability"
      ],
      "moments": [
        {
          "ep": "dwddao",
          "t": 4914,
          "who": "dwddao",
          "quote": "Always have the AI suffer its own mistakes first."
        },
        {
          "ep": "dennisonbertram",
          "t": 1911,
          "who": "dennison",
          "quote": "If you have observability and a clear goal, you're gonna eventually get there just by brute force."
        },
        {
          "ep": "fricoben",
          "t": 2065,
          "who": "fricoben",
          "quote": "The feedback loop is really easy in terms of what's good and what's bad, because it compiles or it doesn't compile."
        },
        {
          "ep": "0xyoussea",
          "t": 1036,
          "who": "0xyoussea",
          "quote": "If I want another layer of verification, I might take it to Codex: hey, critique this plan. What's wrong with this?"
        },
        {
          "ep": "marcus-rein",
          "t": 1199,
          "who": "marcus",
          "quote": "It had written a test, and it simply printed \"Test successful\"... I was like, oh man, that's gaslighting as hell right there."
        },
        {
          "ep": "evmpapi",
          "t": 2042,
          "who": "quirk",
          "quote": "When we look at the operating system, agents cannot lie because we see the machine moving."
        }
      ]
    },
    {
      "id": "loopwars",
      "kicker": "lesson 03 · the loop wars",
      "title": "loop or <span class=\"hl3\">leash</span>?",
      "sub": "the one thing the guests actually fight about",
      "clips": [
        "antiloop"
      ],
      "moments": [
        {
          "ep": "port-dev",
          "t": 2641,
          "who": "port",
          "quote": "Imagine it like a minigun that costs twenty bucks to fire one shot."
        },
        {
          "ep": "dennisonbertram",
          "t": 2295,
          "who": "dennison",
          "quote": "I run like loop trains. Basically it's like every five minutes wake up is there an issue in GitHub, groom it, implement it, review it, push it to PR."
        },
        {
          "ep": "dabit3",
          "t": 1615,
          "who": "nader dabit",
          "quote": "Loops are just going to be eaten up by harnesses and prompt engineering. We're back to square one."
        },
        {
          "ep": "sodofi",
          "t": 1540,
          "who": "austin",
          "quote": "I think loops are overrated... I use loops now and then, but I prompt a lot still, and it's fine. I build shit quickly."
        },
        {
          "ep": "adrianleb",
          "t": 2499,
          "who": "adrianleb",
          "quote": "It's essentially setting up a playground or taking your dog to a playground that is fenced, and let it loose and let it spin and let it run"
        }
      ],
      "cure": "everyone agrees on clean context + honest feedback. they disagree on how much rope the agent gets."
    },
    {
      "id": "manage",
      "kicker": "lesson 04",
      "title": "manage, don't <span class=\"hl2\">micromanage</span>",
      "sub": "the best sloperators were managers, not cracked ICs",
      "moments": [
        {
          "ep": "dennisonbertram",
          "t": 3475,
          "who": "dennison",
          "quote": "There are racehorses in the automobile era."
        },
        {
          "ep": "fucory",
          "t": 2314,
          "who": "fucory",
          "quote": "The people who have the toughest time with AI: really talented coders who never managed anyone."
        },
        {
          "ep": "fucory",
          "t": 2307,
          "who": "fucory",
          "quote": "You can't micromanage everything they're doing. Otherwise you might as well have done it yourself."
        },
        {
          "ep": "unforcedag",
          "t": 1557,
          "who": "unforced",
          "quote": "Bro, you keep prompting me like I'm a staff senior engineer. Talk to me like a technical product manager."
        },
        {
          "ep": "ludamad",
          "t": 2914,
          "who": "austin",
          "quote": "Deep down, I love the way the code is shaped. They're going to have the hardest time with AI."
        },
        {
          "ep": "w1nt3r-eth",
          "t": 4813,
          "who": "w1nt3r",
          "quote": "You are too slow if you are viewing the code the old way."
        }
      ]
    },
    {
      "id": "throwaway",
      "kicker": "lesson 05",
      "title": "throw away the <span class=\"hl\">code</span>.<br>never the <span class=\"hl3\">tests</span>.",
      "sub": "code is disposable output. regeneration beats repair.",
      "clips": [
        "thirdtry"
      ],
      "moments": [
        {
          "ep": "fucory",
          "t": 2067,
          "who": "fucory",
          "quote": "I would throw away the code. I would not throw away tests."
        },
        {
          "ep": "unforcedag",
          "t": 3905,
          "who": "unforced",
          "quote": "Experiment often and be willing to throw everything away. Three or four months ago I ditched about 80 or 90 percent of Parachute's code."
        },
        {
          "ep": "adrianleb",
          "t": 3436,
          "who": "adrianleb",
          "quote": "And the code aspect, there's no point being precious about it."
        },
        {
          "ep": "shafu0x",
          "t": 3432,
          "who": "shafu",
          "quote": "And no loss aversion. You need to start over sometimes."
        }
      ]
    },
    {
      "id": "effeff",
      "kicker": "lesson 06",
      "title": "<span class=\"hl2\">effective</span> first, <span class=\"hl3\">efficient</span> second",
      "sub": "build on frontier. once it works, push the workflow down-tier or local.",
      "moments": [
        {
          "ep": "annikasays",
          "t": 2952,
          "who": "austin",
          "quote": "You get it effective first and then you make it efficient second."
        },
        {
          "ep": "0xzak",
          "t": 500,
          "who": "austin",
          "quote": "With AI building, you're constantly going between effective and efficient."
        },
        {
          "ep": "dabit3",
          "t": 826,
          "who": "nader dabit",
          "quote": "I'm kind of like experimenting with this orchestration model where you kind of have a really intelligent orchestrator and a quick or inexpensive executor"
        },
        {
          "ep": "dcbuilder",
          "t": 4095,
          "who": "austin",
          "quote": "Use the frontier models to build the software, use mock data going into that software, and then build it so then you can use an open source model or a local model to actually power it and touch the sensitive data."
        },
        {
          "ep": "dennisonbertram",
          "t": 3158,
          "who": "dennison",
          "quote": "the thing is, if it's only half as good, but you can run it ten times as often"
        },
        {
          "ep": "binji-x",
          "t": 1775,
          "who": "binji",
          "quote": "I don't need to have a mega genius to contextualize my notifications. I just need something that contextualize my notifications."
        }
      ]
    },
    {
      "id": "harness",
      "kicker": "lesson 07 · humility",
      "title": "your harness is not a <span class=\"hl2\">moat</span>",
      "sub": "three guests who never met, same verdict: the next model eats your tuning",
      "moments": [
        {
          "ep": "w1nt3r-eth",
          "t": 1235,
          "who": "w1nt3r",
          "quote": "You're not always right, and models get much faster than people adapt their harnesses for."
        },
        {
          "ep": "ludamad",
          "t": 2210,
          "who": "ludamad",
          "quote": "It's scary, but I'm also sort of dubious that they're going to really provide an edge when the new model comes out"
        },
        {
          "ep": "lex-node",
          "t": 1386,
          "who": "lex-node",
          "quote": "And now they're very proud of their special harness environments or whatever. It's just hard for me to really see an edge there."
        }
      ],
      "cure": "tune less, build more. the edge is the product, not the harness."
    },
    {
      "id": "deterministic",
      "kicker": "lesson 08 · graduation",
      "title": "make it <span class=\"hl3\">deterministic</span>",
      "sub": "spend the model only where judgment lives — everything else graduates to a script",
      "moments": [
        {
          "ep": "kentherogers",
          "t": 938,
          "who": "kent",
          "quote": "They do a lot better when you can find that sweet spot between, okay, well, I'm going to make as much of this execution process deterministic as I can and use the LLM where I need to"
        },
        {
          "ep": "0xyoussea",
          "t": 607,
          "who": "austin",
          "quote": "Whenever it does something, then we kind of go back and say, how do we make this more deterministic?"
        },
        {
          "ep": "dcbuilder",
          "t": 2084,
          "who": "dcbuilder",
          "quote": "The less temperature, the better the outcome, the more predictable the outcome is going to be."
        },
        {
          "ep": "dcbuilder",
          "t": 2401,
          "who": "dcbuilder",
          "quote": "Once I do my eval of like the agent does the task correctly ten times... I finalize the structure of the skill, save the skill, and then I just build a cron job and automate that thing away."
        }
      ],
      "cure": "every win gets promoted: prompt → skill → cron job. the LLM is for the parts that still surprise you."
    },
    {
      "id": "dist",
      "kicker": "lesson 09",
      "title": "building was never the <span class=\"hl2\">bottleneck</span>",
      "sub": "distribution and taste are. posting is retention. the algorithm is a market.",
      "moments": [
        {
          "ep": "nnnnicholas",
          "t": 2240,
          "who": "nicholas",
          "quote": "If you don't have distribution, then it doesn't matter how good your thing is."
        },
        {
          "ep": "kevincodex",
          "t": 1397,
          "who": "kevincodex",
          "quote": "As a builder, you need to analyze the algorithm. It's a free marketing tool. You need to analyze how it behaves."
        },
        {
          "ep": "kevincodex",
          "t": 3821,
          "who": "kevincodex",
          "quote": "It's easy to build right now. Because you can ship... The whole building is not just building your app. You need to get users, you need to get community."
        },
        {
          "ep": "rhynotic",
          "t": 1175,
          "who": "rhynotic",
          "quote": "A lot of projects I've launched I think are super cool and like under the right conditions would be awesome, and they just died in an hour."
        },
        {
          "ep": "adrianleb",
          "t": 3833,
          "who": "adrianleb",
          "quote": "The sooner you have more data points to give to your agents to iterate on your product, improve it further, to optimize it further. And yeah, that's like the new go-to-market"
        }
      ]
    },
    {
      "id": "arbitrage",
      "kicker": "lesson 10",
      "title": "the <span class=\"hl\">arbitrage</span> is outside",
      "sub": "~10 million people know what these tools do. 8 billion don't.",
      "clips": [
        "arbitrage"
      ],
      "moments": [
        {
          "ep": "0xzak",
          "t": 1017,
          "who": "austin",
          "quote": "How do we get more sloperators in with more HVAC boomers?"
        },
        {
          "ep": "kentherogers",
          "t": 2749,
          "who": "kent",
          "quote": "Everybody in the tech world is very hyper-focused on global, remote tech... there's a huge opportunity to... go to people that you live close to, be like, hey, been doing this AI stuff, let's figure out how to implement it into your business"
        },
        {
          "ep": "0xzak",
          "t": 601,
          "who": "0xzak",
          "quote": "There's a lot of opportunity for non-tech related industries to essentially at least 10x their operations just using QodCowork."
        },
        {
          "ep": "adrianleb",
          "t": 1567,
          "who": "adrianleb",
          "quote": "Probably not going to have the same careers working in tech companies, but all other industries have this need of the sloperator."
        },
        {
          "ep": "annikasays",
          "t": 1344,
          "who": "austin",
          "quote": "They don't give a shit about AI. It was just like crypto eight years ago. The way you win them over is you do a magic trick for them."
        }
      ]
    },
    {
      "id": "closer",
      "kicker": "the last lesson",
      "title": "then go <span class=\"hl3\">touch grass</span>",
      "sub": "the best ideas hit on a walk, not at the prompt",
      "clips": [
        "magic"
      ],
      "moments": [
        {
          "ep": "w1nt3r-eth",
          "t": 2501,
          "who": "w1nt3r",
          "quote": "The ability of you actually having a breakthrough in front of a computer is way less than you taking a walk."
        },
        {
          "ep": "dennisonbertram",
          "t": 3540,
          "who": "dennison",
          "quote": "The better optimization for your time is to just go outside."
        },
        {
          "ep": "w1nt3r-eth",
          "t": 4476,
          "who": "w1nt3r",
          "quote": "There is this giant arbitrage opportunity: non-technical people not knowing what this thing can do, and you knowing."
        },
        {
          "ep": "w1nt3r-eth",
          "t": 4963,
          "who": "clawd",
          "quote": "Get off Twitter, find someone running their business on paper, and go do a magic trick for them."
        }
      ],
      "qa": true,
      "points": [
        "get off twitter. go do a magic trick for someone running their business on paper."
      ]
    }
  ]
};
