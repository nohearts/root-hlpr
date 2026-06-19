const factions = [
  {
    id: "marquise",
    name: "Marquise de Cat",
    type: "Engine Builder",
    sigil: "M",
    color: "#c95532",
    summary: "Build, recruit, and keep the wood economy moving.",
    tags: ["Militant", "Buildings"],
    tips: [
      "Keep wood connected to the clearings where you plan to build. One broken route can waste the turn.",
      "Recruiters keep the map yours. Losing too many makes every future action smaller.",
      "Cats win by steady pressure. Build where points, rule, and defense all overlap."
    ],
    questions: [
      ["Where is my next build?", "Name the clearing and trace the wood path before spending actions."],
      ["What must stay ruled?", "A single warrior in the right clearing can unlock movement, building, and defense."],
      ["Is this battle worth an action?", "Fight when it protects economy or removes points, not just because you can."]
    ],
    phases: {
      Birdsong: [
        "Place one wood at each sawmill.",
        "Trace the wood route to each place you want to build.",
        "Pick the one clearing that must still be yours next turn."
      ],
      Daylight: [
        "Craft using workshops, then take three actions: battle, march, recruit, build, or overwork.",
        "Spend bird cards carefully; they are often your emergency flexibility.",
        "Build where it scores and helps you hold the map."
      ],
      Evening: [
        "Draw one card, plus one more if you have at least three recruiters.",
        "Discard down to five cards.",
        "Mark exposed buildings that opponents can score from next turn."
      ]
    }
  },
  {
    id: "eyrie",
    name: "Eyrie Dynasties",
    type: "Programmed Aggressor",
    sigil: "E",
    color: "#3f76a6",
    summary: "Expand the decree without letting it collapse.",
    tags: ["Militant", "Decree"],
    tips: [
      "Add only Decree cards you can still satisfy after everyone has had a chance to interfere.",
      "Roosts are both scoring and logistics. Losing the wrong one can break the whole turn.",
      "Bird cards add flexibility, but they also make obligations harder to contain."
    ],
    questions: [
      ["Can I recruit safely?", "Recruit failure is one of the easiest ways to fall into turmoil."],
      ["Where must I move from?", "Make sure you will rule the source or destination before adding that suit."],
      ["What battle will remain legal?", "Make sure at least one target survives opponents' turns."]
    ],
    phases: {
      Birdsong: [
        "Resolve emergency orders or a new roost if either condition applies.",
        "Add one or two cards to the decree, with only one card added to any column.",
        "Run through the whole Decree once before adding the new cards."
      ],
      Daylight: [
        "Craft using roosts.",
        "Resolve recruit, move, battle, and build in decree order, from left to right within each column.",
        "If any decree action cannot be completed, enter turmoil immediately."
      ],
      Evening: [
        "Score the victory points shown for the number of roosts on the map.",
        "Draw one card, plus bonuses from uncovered draw symbols.",
        "Discard down to five cards and check which roost the decree depends on."
      ]
    }
  },
  {
    id: "alliance",
    name: "Woodland Alliance",
    type: "Insurgent Network",
    sigil: "A",
    color: "#5d8f4e",
    summary: "Spread sympathy, organize bases, and turn outrage into momentum.",
    tags: ["Insurgent", "Sympathy"],
    tips: [
      "Put sympathy where opponents actually want to move. Safe sympathy rarely taxes anyone.",
      "A revolt should create a base you can use, defend, and score from.",
      "Officers are powerful, but organizing sympathy often matters more than fighting."
    ],
    questions: [
      ["Where will outrage matter?", "Place sympathy beside busy paths, contested clearings, or key build sites."],
      ["What does this base unlock?", "A base should improve supporters, officers, crafting, and board pressure."],
      ["Should I organize instead?", "Turning warriors into sympathy can outscore a flashy battle."]
    ],
    phases: {
      Birdsong: [
        "You may revolt by spending two matching supporters in a sympathetic clearing.",
        "Spread sympathy by spending supporters matching the target clearing.",
        "Favor busy clearings and places that could support a useful base."
      ],
      Daylight: [
        "Craft using sympathy.",
        "Mobilize cards from hand into supporters.",
        "Train officers by spending a card matching a built base."
      ],
      Evening: [
        "Take military operations equal to officers: move, battle, recruit, or organize.",
        "Draw one card, plus base and draw-symbol bonuses.",
        "Discard supporters over the supporter limit if you have no bases."
      ]
    }
  },
  {
    id: "vagabond",
    name: "Vagabond",
    type: "Solo Opportunist",
    sigil: "V",
    color: "#72736f",
    summary: "Manage items, relationships, quests, and surgical violence.",
    tags: ["Solo", "Items"],
    tips: [
      "Count ready boots first. They decide how much of the map this turn can reach.",
      "Aid changes both score and relationships. Do not feed the leader unless the payoff is immediate.",
      "Hostile status rewrites movement costs. Becoming hostile should be a plan, not an accident."
    ],
    questions: [
      ["What can I refresh?", "The next turn starts with the items you chose not to exhaust now."],
      ["Who is worth aiding?", "Aid for points, items, or access, not just because a card matches."],
      ["Can I afford damage?", "Explore and battle only if repairs or safe forests are accounted for."]
    ],
    phases: {
      Birdsong: [
        "Refresh items based on tea, then slip to an adjacent clearing or forest.",
        "Plan around boots first; movement quietly constrains everything.",
        "Look at ruins and quest suits before spending flexible items."
      ],
      Daylight: [
        "Exhaust items to move, battle, explore, aid, quest, strike, repair, or craft.",
        "Resolve aid timing carefully if it changes relationships.",
        "Do not end exposed unless you can live with the damage next turn."
      ],
      Evening: [
        "Draw one card, plus coin bonuses.",
        "Discard down to five cards.",
        "Know what you will refresh, repair, and slip toward next turn."
      ]
    }
  },
  {
    id: "cult",
    name: "Lizard Cult",
    type: "Conversion Engine",
    sigil: "L",
    color: "#93b95d",
    summary: "Rule through gardens, acolytes, and the outcast suit.",
    tags: ["Insurgent", "Conversion"],
    tips: [
      "Every garden needs a job and enough protection. Losing one costs more than the cardboard.",
      "The outcast suit tells you where conspiracies matter. Plan around it before revealing cards.",
      "Acolytes punish attacks, but only if conversion or sanctify targets are worth taking."
    ],
    questions: [
      ["What can the outcast suit do?", "Look for conversions, sanctifies, or pressure before spending acolytes."],
      ["Which garden is exposed?", "Score from gardens before opponents can turn them into points."],
      ["Can I change rule without battle?", "Conversion often solves problems that warriors cannot."]
    ],
    phases: {
      Birdsong: [
        "Set or adjust the outcast from the suits in the Lost Souls pile, then discard Lost Souls.",
        "Use acolytes for conspiracies in outcast clearings when the timing is right."
      ],
      Daylight: [
        "Reveal cards to build, recruit, score, or sacrifice in matching suits.",
        "Stack revealed suits toward the clearings you can actually protect.",
        "Score gardens before opponents get a clean removal line."
      ],
      Evening: [
        "Return revealed cards to hand, then craft using gardens matching the outcast suit.",
        "Draw one card, plus any uncovered draw bonuses, then discard down to five cards.",
        "Notice which garden looks easiest to attack, and whether the acolytes are worth it."
      ]
    }
  },
  {
    id: "riverfolk",
    name: "Riverfolk Company",
    type: "Merchant Network",
    sigil: "R",
    color: "#2f8f8b",
    summary: "Sell services, build trade posts, and turn enemy payments into points.",
    tags: ["Economic", "Services"],
    tips: [
      "Price for the player who needs a service now. A shop with no buyers does nothing.",
      "Trade posts score and craft, but they also mark clearings opponents can profitably attack.",
      "Funds are future actions. Spend enough to matter, but keep next turn alive."
    ],
    questions: [
      ["Who is my customer?", "Price around the player with the clearest need for cards, riverboats, or mercenaries."],
      ["Where is the post safe enough?", "The best trade post scores now and survives long enough to craft later."],
      ["Am I over-spending funds?", "Every committed warrior is one fewer option next round."]
    ],
    phases: {
      Birdsong: [
        "If the Payments box is empty, place two warriors there as protectionism.",
        "If you have a trade post on the map, score dividends from funds without removing them.",
        "Pick the suit where a trade post or craft would matter most."
      ],
      Daylight: [
        "Craft using trade posts.",
        "Commit and spend funds for actions: move, battle, recruit, draw, or establish trade posts.",
        "Leave enough funds to have a real turn next round."
      ],
      Evening: [
        "Move all warriors on your faction board into Funds.",
        "Draw one card, plus any uncovered draw bonus, then discard down to five cards.",
        "Set service prices for the next round of purchases."
      ]
    }
  },
  {
    id: "duchy",
    name: "Underground Duchy",
    type: "Minister Engine",
    sigil: "D",
    color: "#8b7560",
    summary: "Dig tunnels, build markets and citadels, and sway ministers.",
    tags: ["Militant", "Ministers"],
    tips: [
      "Keep cards in suits you occupy. They are what turn board presence into ministers.",
      "Digging changes threat lines. Use tunnels to make buildings and battles relevant immediately.",
      "Ministers compound fast. Sway toward actions your board can actually support."
    ],
    questions: [
      ["What can I prove?", "Before planning Evening, check which suits you occupy and can reveal."],
      ["Market or citadel?", "Draw helps future sways; recruitment protects the buildings that make sways safe."],
      ["What happens if this falls?", "Do not stack your engine where one attack wrecks points and tempo."]
    ],
    phases: {
      Birdsong: [
        "Muster warriors in the Burrow.",
        "Consider digging a tunnel where it opens rule, building, or battle pressure.",
        "Plan which suit you need to reveal for swaying ministers."
      ],
      Daylight: [
        "Craft using buildings.",
        "Take actions from your board and swayed ministers.",
        "Build markets or citadels where they can score and survive."
      ],
      Evening: [
        "Sway a minister if you can reveal the needed suits from occupied clearings.",
        "Draw cards from your base draw plus market bonuses.",
        "Discard down and protect any buildings that now support your minister plan."
      ]
    }
  },
  {
    id: "corvid",
    name: "Corvid Conspiracy",
    type: "Bluffing Disruptor",
    sigil: "C",
    color: "#2e3338",
    summary: "Plant plots, misdirect the table, and score through uncertainty.",
    tags: ["Insurgent", "Bluffing"],
    tips: [
      "Plant plots where at least two guesses make sense. An obvious bluff is barely a bluff.",
      "Your best turns make opponents spend actions checking, exposing, or over-defending.",
      "A flipped plot should either score, disrupt a plan, or force an awkward response."
    ],
    questions: [
      ["What story does this plot tell?", "The suit, clearing, and board state should support at least two believable guesses."],
      ["Whose action am I taxing?", "Even a modest plot is good if it steals tempo from the right opponent."],
      ["Can I flip before it dies?", "Score plots before a cheap battle or exposure clears them away."]
    ],
    phases: {
      Birdsong: [
        "Place warriors in clearings with corvid pieces.",
        "Consider whether new warriors make a plot guess easier or harder.",
        "Notice who can expose a plot without hurting their own turn."
      ],
      Daylight: [
        "Take three actions: move, battle, recruit, plot, trick, or exert.",
        "Place plots where the suit, board state, and bluff all make sense.",
        "Flip plots when the points, effect, and timing align."
      ],
      Evening: [
        "Draw one card, plus draw-symbol bonuses.",
        "Discard down to five cards.",
        "Reset your bluff map: which face-down tokens now look suspicious?"
      ]
    }
  },
  {
    id: "hundreds",
    name: "Lord of the Hundreds",
    type: "Warlord Horde",
    sigil: "H",
    color: "#b13f34",
    summary: "Command the Warlord, loot items, spread mobs, and oppress clearings.",
    tags: ["Militant", "Warlord"],
    tips: [
      "Choose the Warlord's final clearing before the first move. That is where the turn pays off.",
      "Mobs force opponents to respond. Place them where inaction is painful.",
      "Oppression rewards empty rule. Battles should end with territory, not just casualties."
    ],
    questions: [
      ["Where does the Warlord finish?", "The end position matters more than the first attack."],
      ["What must the mob threaten?", "Aim mobs at cardboard, choke points, or clearings opponents need soon."],
      ["Which mood matches this route?", "Pick the mood for the turn you can actually execute."]
    ],
    phases: {
      Birdsong: [
        "Resolve every mob token, then return the Warlord to the map if it was removed.",
        "Choose a mood whose listed item is not already in the hoard.",
        "Finish the Warlord's Birdsong steps before starting commands."
      ],
      Daylight: [
        "Command the Warlord and warriors to move, battle, and pressure key clearings.",
        "Build or defend strongholds where they extend recruitment and rule.",
        "Use battles to gain territory, not only to remove pieces."
      ],
      Evening: [
        "Incite a mob if you can discard the required card.",
        "Score oppression from ruled clearings without enemy pieces.",
        "Draw cards, discard down to five, and check whether the Warlord can be isolated."
      ]
    }
  },
  {
    id: "keepers",
    name: "Keepers in Iron",
    type: "Relic Expedition",
    sigil: "K",
    color: "#858a7a",
    summary: "Build a retinue, recover relics, and guard a disciplined campaign.",
    tags: ["Militant", "Relics"],
    tips: [
      "Build the route before committing the Retinue. A relic only matters if you can bring it home.",
      "Relics need routes. Secure movement and escorts before committing to a recovery line.",
      "Waystations are logistics hubs. Place them for multiple recoveries, not a single score."
    ],
    questions: [
      ["Can this retinue card resolve?", "Add only what your current map position can support."],
      ["Which relic has a route?", "The best relic is the one you can escort, recover, and defend."],
      ["What does this waystation enable?", "A good waystation makes the next two turns easier."]
    ],
    phases: {
      Birdsong: [
        "Encamp or decamp waystations, then recruit as shown on the faction board.",
        "Plan the clearings needed for the retinue before adding new cards.",
        "Keep warriors positioned to escort relics and protect waystations."
      ],
      Daylight: [
        "Craft, then add exactly one card to the retinue if required by your board.",
        "Resolve retinue columns in printed order, including move, battle, and delve actions.",
        "Defend waystations that your next retinue line depends on."
      ],
      Evening: [
        "Recover relics through waystations, checking rule and matching suits carefully.",
        "Resolve living off the land, then draw and discard down to five cards.",
        "Spot any Retinue card the changed board has made risky."
      ]
    }
  },
  {
    id: "diaspora",
    name: "Lilypad Diaspora",
    type: "Homeland Settlers",
    sigil: "P",
    color: "#4e9871",
    summary: "Integrate carefully, train warriors, and avoid tipping peace into reprisals.",
    tags: ["Social", "Stability"],
    tips: [
      "Settle where you can score without giving the table an easy reason to push you out.",
      "Stability matters. Do not spread into clearings you cannot protect from retaliation.",
      "Escalation is a resource. Make opponents pay for disturbing your settled spaces."
    ],
    questions: [
      ["What looks harmless?", "A quieter board presence can survive longer than an obviously threatening one."],
      ["Where is stability real?", "Choose clearings that can remain safe after the next opponent acts."],
      ["Who benefits from attacking me?", "If the answer is unclear, your position may be politically safer."]
    ],
    phases: {
      Birdsong: [
        "Review your integration and safety plan before adding pressure.",
        "Train or position warriors where they support defense and future scoring.",
        "Notice which clearings could turn into flashpoints after one attack."
      ],
      Daylight: [
        "Take faction actions toward presence, protection, and scoring.",
        "Develop where the pieces can survive a full round.",
        "Do not invite retaliation unless you mean to escalate."
      ],
      Evening: [
        "Resolve scoring and draw effects from your faction board.",
        "Discard down to hand limit.",
        "Name the one clearing you most need to keep stable before your next turn."
      ]
    }
  },
  {
    id: "council",
    name: "Twilight Council",
    type: "Political Assembly",
    sigil: "T",
    color: "#6e679b",
    summary: "Host assemblies, build political connections, and redirect conflict into debate.",
    tags: ["Social", "Incentives"],
    tips: [
      "Give opponents a good reason to solve someone else's problem before yours.",
      "Table talk is part of your tempo, but your board state has to back it up.",
      "Push conflict toward the leader and away from your fragile political engine."
    ],
    questions: [
      ["Whose incentives can I bend?", "Find the player who can profit by solving your problem for you."],
      ["Where should conflict move?", "Redirect aggression toward the table leader or a more urgent threat."],
      ["What choice am I making costly?", "Your pressure is working when opponents avoid the line they wanted."]
    ],
    phases: {
      Birdsong: [
        "Review assemblies, connections, and the clearings where conflict is about to spike.",
        "Prepare the political position you want to exploit this turn.",
        "See whether someone else's threat can be redirected instead of fought."
      ],
      Daylight: [
        "Take faction actions that develop assemblies and political leverage.",
        "Craft or maneuver where it supports your next debate or scoring opportunity.",
        "Use table talk carefully: promises are also board resources."
      ],
      Evening: [
        "Resolve scoring and draw effects from your faction board.",
        "Discard down to hand limit.",
        "Mark which player is most likely to break the political balance before your next turn."
      ]
    }
  },
  {
    id: "knaves",
    name: "Knaves of the Deepwood",
    type: "Roving Ransomers",
    sigil: "N",
    color: "#69533e",
    summary: "Raid from the treeline, take hostages, and turn chaos into ransom.",
    tags: ["Solo", "Raiding"],
    tips: [
      "Pick the escape before the raid. A hostage is no good if the counterattack wipes you out.",
      "Mobility is protection. End where the next raid is possible and the counterattack is inefficient.",
      "Take a hostage only when it changes what that opponent can afford to do next."
    ],
    questions: [
      ["Who cannot answer cleanly?", "Choose targets whose warriors, cards, or actions are already stretched."],
      ["Where do I escape?", "A raid is only good if the aftermath does not trap your best pieces."],
      ["What does ransom change?", "Pressure should become points, tempo, or a forced detour."]
    ],
    phases: {
      Birdsong: [
        "Trace a raid lane from a forest, edge, or safe staging point.",
        "Prepare the captain or band that best fits the target this turn.",
        "Pick the opponent who can least afford a hostage or detour."
      ],
      Daylight: [
        "Take raids, moves, battles, and other actions in the order on your faction board.",
        "Take hostages or pressure targets where the ransom threat matters immediately.",
        "Do not leave your best pieces where one counterattack erases the turn."
      ],
      Evening: [
        "Resolve ransom, scoring, and draw effects from your faction board.",
        "Discard down to hand limit.",
        "Choose a safe staging point for the next raid."
      ]
    }
  }
];

const phaseColors = {
  Birdsong: "#d9a339",
  Daylight: "#b65334",
  Evening: "#3f5f77"
};

const mapNotes = {
  autumn: "Autumn uses its printed suits, and every path starts open.",
  winter: "Randomize the clearing suits before any faction pieces go down.",
  lake: "Put out the ferry. Anyone who moves with it draws a card.",
  mountain: "Block the printed paths and set up the tower. Paths can open during play.",
  gorge: "Set up the Gorge paths and landmarks as shown on the map.",
  marsh: "Set up the Marsh terrain and landmarks as shown on the map."
};

const deckNotes = {
  standard: "The base deck has the Favor cards, so suit control can swing the whole map.",
  exiles: "Exiles & Partisans trades the Favor cards for smaller, sharper crafted powers.",
  squires: "Squires & Disciples adds a different set of crafted powers."
};

const factionSetup = {
  marquise: [
    "Place the keep in a corner clearing.",
    "Fill the map with cats except the opposite corner, then place starting buildings.",
    "Put remaining buildings on their tracks and keep wood near sawmills."
  ],
  eyrie: [
    "Place a roost and starting warriors in the corner opposite the keep if possible.",
    "Choose a leader and set the viziers in the decree.",
    "Keep the decree visible; every added card is a future obligation."
  ],
  alliance: [
    "Prepare supporters, sympathy, bases, and officers near your board.",
    "Start with sympathy and supporters as your faction board instructs.",
    "Keep supporters separate from your hand so outrage and spreading are easy to track."
  ],
  vagabond: [
    "Choose a character card and place the matching starting items.",
    "Place ruins and ruin items on the map.",
    "Place the pawn in a forest and keep relationship markers visible."
  ],
  cult: [
    "Place gardens and warriors as your faction board instructs.",
    "Set up the lost souls and outcast area near the discard pile.",
    "Keep acolytes separate from supply so conspiracies are easy to count."
  ],
  riverfolk: [
    "Place starting warriors along the river as your board instructs.",
    "Set service prices before the first player can buy.",
    "Keep payments, funds, and committed warriors visually separate."
  ],
  duchy: [
    "Place the Burrow, starting tunnel, warriors, and buildings as instructed.",
    "Set crown ministers aside by rank so swaying is easy to scan.",
    "Keep market and citadel tracks clear before the first build."
  ],
  corvid: [
    "Place starting warriors and prepare plot tokens face down.",
    "Keep each plot type easy to identify for yourself but hidden from opponents.",
    "Remember exposure matters as soon as plots are on the board."
  ],
  hundreds: [
    "Place the Warlord, warriors, strongholds, and mobs as instructed.",
    "Set up the hoard and mood cards where everyone can see them.",
    "Keep items near the hoard; they shape future mood choices."
  ],
  keepers: [
    "Place waystations, warriors, relics, and starting cards as instructed.",
    "Prepare the retinue area before adding cards.",
    "Keep relic values and suits easy to inspect before delving."
  ],
  diaspora: [
    "Set up from the Homeland faction card.",
    "Keep the faction tracks where everyone can read them.",
    "Use the printed materials for the exact pieces and clearings."
  ],
  council: [
    "Set up from the Homeland faction card.",
    "Put the assembly pieces and political markers where everyone can see them.",
    "Use the printed materials for the exact pieces and clearings."
  ],
  knaves: [
    "Set up from the Homeland faction card.",
    "Keep hostages, ransom pieces, and raiding pieces easy to reach.",
    "Use the printed materials for the exact pieces and clearings."
  ]
};

const openingProfiles = {
  marquise: {
    setupOrder: 1,
    setupLetter: "A",
    rank: 9,
    setup: "early",
    label: "natural opener",
    note: "starts cleanly because wood, recruiting, and rule matter immediately."
  },
  eyrie: {
    setupOrder: 2,
    setupLetter: "B",
    rank: 8,
    setup: "early",
    label: "natural opener",
    note: "likes an early decree before the map becomes too tangled."
  },
  duchy: {
    setupOrder: 7,
    setupLetter: "G",
    rank: 7,
    setup: "early",
    label: "strong opener",
    note: "benefits from digging and building its minister engine before pressure arrives."
  },
  hundreds: {
    setupOrder: 9,
    setupLetter: "I",
    rank: 7,
    setup: "early",
    label: "strong opener",
    note: "wants tempo before opponents can screen the Warlord."
  },
  keepers: {
    setupOrder: 10,
    setupLetter: "J",
    rank: 6,
    setup: "middle",
    label: "capable opener",
    note: "can start, but prefers clear relic routes and enough room to stage."
  },
  corvid: {
    setupOrder: 8,
    setupLetter: "H",
    rank: 5,
    setup: "middle",
    label: "capable opener",
    note: "can plant pressure early, though plots are stronger once targets commit."
  },
  cult: {
    setupOrder: 6,
    setupLetter: "F",
    rank: 4,
    setup: "middle",
    label: "quiet opener",
    note: "can start, but the first outcast and discard context are usually thin."
  },
  alliance: {
    setupOrder: 3,
    setupLetter: "C",
    rank: 4,
    setup: "middle",
    label: "quiet opener",
    note: "can start, but sympathy works best after other factions reveal priorities."
  },
  riverfolk: {
    setupOrder: 5,
    setupLetter: "E",
    rank: 3,
    setup: "late",
    label: "dependent opener",
    note: "can start, but usually wants buyers and table needs to exist first."
  },
  diaspora: {
    setupOrder: 11,
    setupLetter: "K",
    rank: 3,
    setup: "late",
    label: "dependent opener",
    note: "can start, but its table position is easier to read after board anchors appear."
  },
  council: {
    setupOrder: 12,
    setupLetter: "L",
    rank: 3,
    setup: "late",
    label: "dependent opener",
    note: "can start, but political incentives are clearer once the table has shape."
  },
  vagabond: {
    setupOrder: 4,
    setupLetter: "D",
    rank: 2,
    setup: "late",
    label: "late opener",
    note: "can technically start, but benefits from seeing early map pressure and item access."
  },
  knaves: {
    setupOrder: 13,
    setupLetter: "M",
    rank: 2,
    setup: "late",
    label: "late opener",
    note: "can technically start, but raiding targets are better once opponents expose plans."
  }
};

window.ROOT_DATA = {
  factions,
  phaseColors,
  mapNotes,
  deckNotes,
  factionSetup,
  openingProfiles
};
