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
      "Wood is your tempo. Before building, check whether paths from sawmills to build sites are intact.",
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
        "Check whether enemy pieces interrupt paths from wood to intended build clearings.",
        "Name the clearing you most need to hold through the table round."
      ],
      Daylight: [
        "Craft using workshops, then take three actions: battle, march, recruit, build, or overwork.",
        "Spend bird cards carefully; they are often your emergency flexibility.",
        "Build only where the points and board position both matter."
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
      "The decree is a promise. Add cards that are likely to stay legal after opponents move.",
      "Roosts are both scoring and logistics. Losing the wrong one can break the whole turn.",
      "Bird cards add flexibility, but they also make obligations harder to contain."
    ],
    questions: [
      ["Can I recruit safely?", "Recruit failure is one of the easiest ways to fall into turmoil."],
      ["Where must I move from?", "Check rule and destination before adding movement suits."],
      ["What battle will remain legal?", "Make sure at least one target survives opponents' turns."]
    ],
    phases: {
      Birdsong: [
        "Resolve emergency orders or a new roost if either condition applies.",
        "Add one or two cards to the decree, with only one card added to any column.",
        "Check every decree obligation before committing the new cards."
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
      "Sympathy is pressure. Put it where enemies want to move, not only where it is safe.",
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
        "Prioritize clearings that tax movement or threaten future bases."
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
      "Items are your action economy. Count boots, tea, coins, and swords before choosing a route.",
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
        "Check ruins and quest suits before spending flexible items."
      ],
      Daylight: [
        "Exhaust items to move, battle, explore, aid, quest, strike, repair, or craft.",
        "Resolve aid timing carefully if it changes relationships.",
        "Avoid ending exposed if damaged items would strand next turn."
      ],
      Evening: [
        "Draw one card, plus coin bonuses.",
        "Discard down to five cards.",
        "Confirm your next refresh, repairs, and likely slip destination."
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
      "Gardens are your economy and your weakness. Every garden needs a reason and a defender.",
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
        "Check which clearings opponents are tempted to attack for acolyte fuel."
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
      "Prices are table politics. Set them for the player you expect to buy, not for everyone equally.",
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
        "Identify which suit offers the best trade post or crafting pressure."
      ],
      Daylight: [
        "Craft using trade posts.",
        "Commit and spend funds for actions: move, battle, recruit, draw, or establish trade posts.",
        "Avoid spending so deeply that next turn cannot threaten a trade route or key clearing."
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
      "Cards are credentials. Keep suits that prove control where you need to sway.",
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
      "Plots are strongest when multiple guesses are plausible.",
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
        "Identify which opponent can most cheaply expose you."
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
      "The Warlord is your turn engine. Keep it active, supplied, and difficult to isolate.",
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
        "Follow the faction board before beginning Daylight commands."
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
      "The retinue rewards planning and punishes wishful thinking.",
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
        "Check which retinue cards are now risky because the board changed."
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
      "Your position is political as much as tactical. Look safe enough to ignore, but useful enough to score.",
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
        "Check which clearings could become flashpoints if opponents respond harshly."
      ],
      Daylight: [
        "Take faction actions toward presence, protection, and scoring.",
        "Craft or develop only where the board position can survive a table round.",
        "Avoid moves that create unnecessary retaliation unless escalation is the plan."
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
      "Your best tool is incentive pressure. Make the efficient move point away from you.",
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
        "Check whether another player's threat can be redirected rather than fought directly."
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
      "Raid where the response is awkward. A target is best when it costs actions to punish you.",
      "Mobility is protection. End where the next raid is possible and the counterattack is inefficient.",
      "Ransom pressure is tempo pressure. Take what changes an opponent's next decision."
    ],
    questions: [
      ["Who cannot answer cleanly?", "Choose targets whose warriors, cards, or actions are already stretched."],
      ["Where do I escape?", "A raid is only good if the aftermath does not trap your best pieces."],
      ["What does ransom change?", "Pressure should become points, tempo, or a forced detour."]
    ],
    phases: {
      Birdsong: [
        "Check raid lanes from forests, edges, or safe staging positions.",
        "Prepare the captain or band that best fits the target this turn.",
        "Identify which opponent can least afford a hostage or forced detour."
      ],
      Daylight: [
        "Raid, move, battle, or develop your position according to your faction board.",
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
  autumn: "Use the printed clearing suits and normal paths.",
  winter: "Randomize clearing suits before placing pieces.",
  lake: "Set up the ferry and remember ferry movement draws a card.",
  mountain: "Place blocked paths and the tower, then clear paths during play."
};

const deckNotes = {
  standard: "Use the standard deck; its favor cards make suit control matter.",
  exiles: "Use Exiles & Partisans; expect more tactical powers and fewer huge favor swings."
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
    "Follow the Homeland setup card and keep faction-specific tracks visible.",
    "Mark safe or contested clearings before the first phase begins.",
    "Treat this helper as a reminder; use the printed faction materials for exact placement."
  ],
  council: [
    "Follow the Homeland setup card and prepare assembly materials.",
    "Keep political markers and incentives visible to the table.",
    "Treat this helper as a reminder; use the printed faction materials for exact placement."
  ],
  knaves: [
    "Follow the Homeland setup card and prepare raiding materials.",
    "Keep hostages, ransom pieces, and mobility tools easy to track.",
    "Treat this helper as a reminder; use the printed faction materials for exact placement."
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

if (!window.ROOT_DATA_ONLY) {
const state = {
  factionId: localStorage.getItem("rootHelperFaction") || factions[0].id,
  phaseIndex: Number(localStorage.getItem("rootHelperPhase") || 0),
  setup: {
    map: localStorage.getItem("rootHelperMap") || "autumn",
    deck: localStorage.getItem("rootHelperDeck") || "standard",
    players: Number(localStorage.getItem("rootHelperPlayers") || 4),
    factions: JSON.parse(localStorage.getItem("rootHelperSetupFactions") || "[]"),
    firstPlayer: localStorage.getItem("rootHelperFirstPlayer") || "auto",
    stepIndex: Number(localStorage.getItem("rootHelperSetupStep") || 0)
  }
};

const els = {
  factionList: document.querySelector("#factionList"),
  mapSelect: document.querySelector("#mapSelect"),
  deckSelect: document.querySelector("#deckSelect"),
  playerCountSelect: document.querySelector("#playerCountSelect"),
  firstPlayerSelect: document.querySelector("#firstPlayerSelect"),
  gameSetupList: document.querySelector("#gameSetupList"),
  setupFactionList: document.querySelector("#setupFactionList"),
  balanceSummary: document.querySelector("#balanceSummary"),
  setupFactionName: document.querySelector("#setupFactionName"),
  setupStepStatus: document.querySelector("#setupStepStatus"),
  factionSetupList: document.querySelector("#factionSetupList"),
  setupHelper: document.querySelector("#setupHelper"),
  nextSetupStep: document.querySelector("#nextSetupStep"),
  resetSetupSequence: document.querySelector("#resetSetupSequence"),
  startPlaying: document.querySelector("#startPlaying"),
  factionType: document.querySelector("#factionType"),
  factionName: document.querySelector("#factionName"),
  factionSummary: document.querySelector("#factionSummary"),
  phaseTabs: document.querySelector("#phaseTabs"),
  phaseToken: document.querySelector("#phaseToken"),
  phaseTitle: document.querySelector("#phaseTitle"),
  phasePrompt: document.querySelector("#phasePrompt"),
  taskList: document.querySelector("#taskList"),
  currentTip: document.querySelector("#currentTip"),
  currentQuestionTitle: document.querySelector("#currentQuestionTitle"),
  currentQuestionBody: document.querySelector("#currentQuestionBody"),
  notes: document.querySelector("#notes"),
  nextStep: document.querySelector("#nextStep"),
  resetTurn: document.querySelector("#resetTurn")
};

function currentFaction() {
  return factions.find((faction) => faction.id === state.factionId) || factions[0];
}

function currentPhases() {
  return Object.keys(currentFaction().phases);
}

function persist() {
  localStorage.setItem("rootHelperFaction", state.factionId);
  localStorage.setItem("rootHelperPhase", String(state.phaseIndex));
  localStorage.setItem("rootHelperMap", state.setup.map);
  localStorage.setItem("rootHelperDeck", state.setup.deck);
  localStorage.setItem("rootHelperPlayers", String(state.setup.players));
  localStorage.setItem("rootHelperSetupFactions", JSON.stringify(state.setup.factions));
  localStorage.setItem("rootHelperFirstPlayer", state.setup.firstPlayer);
  localStorage.setItem("rootHelperSetupStep", String(state.setup.stepIndex));
}

function taskKey(factionId, phase, index) {
  return `rootHelperDone-${factionId}-${phase}-${index}`;
}

function updateChecklistHeading() {
  const phase = currentPhases()[state.phaseIndex];
  els.phasePrompt.textContent = `${phase} actions`;
}

function clearFactionChecks() {
  const prefix = `rootHelperDone-${state.factionId}-`;
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith(prefix)) {
      localStorage.removeItem(key);
    }
  });
}

function renderFactions() {
  els.factionList.innerHTML = "";
  factions.forEach((faction) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `faction-button${faction.id === state.factionId ? " active" : ""}`;
    button.style.setProperty("--faction", faction.color);
    button.style.setProperty("--sigil-ink", faction.id === "corvid" ? "white" : "#111111");
    button.innerHTML = `
      <span class="faction-sigil" aria-hidden="true">${faction.sigil}</span>
      <span class="faction-copy">
        <strong>${faction.name}</strong>
        <span class="faction-tags">
          ${faction.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </span>
      </span>
    `;
    button.addEventListener("click", () => {
      state.factionId = faction.id;
      state.phaseIndex = 0;
      persist();
      render();
    });
    els.factionList.append(button);
  });
}

function renderPhaseTabs() {
  els.phaseTabs.innerHTML = "";
  currentPhases().forEach((phase, index) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = `phase-tab${index === state.phaseIndex ? " active" : ""}`;
    tab.style.setProperty("--phase", phaseColors[phase]);
    tab.innerHTML = `<span>Phase ${index + 1}</span>${phase}`;
    tab.addEventListener("click", () => {
      state.phaseIndex = index;
      persist();
      render();
    });
    els.phaseTabs.append(tab);
  });
}

function renderTasks(faction, phase) {
  els.taskList.innerHTML = "";
  faction.phases[phase].forEach((task, index) => {
    const item = document.createElement("li");
    const id = `${faction.id}-${phase}-${index}`;
    const key = taskKey(faction.id, phase, index);
    const checked = localStorage.getItem(key) === "true" ? "checked" : "";
    item.innerHTML = `
      <input id="${id}" type="checkbox" ${checked} />
      <label for="${id}">${task}</label>
    `;
    item.querySelector("input").addEventListener("change", (event) => {
      localStorage.setItem(key, String(event.target.checked));
    });
    els.taskList.append(item);
  });
}

function renderInsight(faction) {
  const tip = faction.tips[state.phaseIndex % faction.tips.length];
  const [title, body] = faction.questions[state.phaseIndex % faction.questions.length];

  els.currentTip.textContent = tip;
  els.currentQuestionTitle.textContent = title;
  els.currentQuestionBody.textContent = body;
}

function selectedSetupFactions() {
  return factions.filter((faction) => state.setup.factions.includes(faction.id));
}

function sortedSetupFactions(selected = selectedSetupFactions()) {
  return [...selected].sort((left, right) => {
    const orderGap = openingProfile(left).setupOrder - openingProfile(right).setupOrder;
    if (orderGap !== 0) {
      return orderGap;
    }
    return factions.indexOf(left) - factions.indexOf(right);
  });
}

function openingProfile(faction) {
  return openingProfiles[faction.id] || {
    setupOrder: 99,
    setupLetter: "?",
    rank: 1,
    setup: "late",
    label: "unknown opener",
    note: "use the printed faction setup card for exact opening guidance."
  };
}

function setupOrderLabel(faction) {
  const profile = openingProfile(faction);
  return Number.isFinite(profile.setupOrder) && profile.setupOrder < 99
    ? `${profile.setupLetter}. ${faction.name}`
    : faction.name;
}

function clampSetupStep(selected = sortedSetupFactions()) {
  if (selected.length === 0) {
    state.setup.stepIndex = 0;
    return;
  }

  state.setup.stepIndex = Math.max(0, Math.min(state.setup.stepIndex, selected.length - 1));
}

function currentSetupFaction() {
  const selected = sortedSetupFactions();
  clampSetupStep(selected);
  return selected[state.setup.stepIndex] || currentFaction();
}

function recommendedFirstPlayer(selected) {
  return [...selected].sort((left, right) => {
    const rankGap = openingProfile(right).rank - openingProfile(left).rank;
    if (rankGap !== 0) {
      return rankGap;
    }
    return factions.indexOf(left) - factions.indexOf(right);
  })[0];
}

function effectiveFirstPlayer(selected) {
  if (state.setup.firstPlayer !== "auto") {
    return selected.find((faction) => faction.id === state.setup.firstPlayer);
  }
  return recommendedFirstPlayer(selected);
}

function renderFirstPlayerOptions(selected) {
  els.firstPlayerSelect.innerHTML = "";

  const auto = document.createElement("option");
  auto.value = "auto";
  auto.textContent = "Auto";
  els.firstPlayerSelect.append(auto);

  selected.forEach((faction) => {
    const option = document.createElement("option");
    option.value = faction.id;
    option.textContent = faction.name;
    els.firstPlayerSelect.append(option);
  });

  if (state.setup.firstPlayer !== "auto" && !selected.some((faction) => faction.id === state.setup.firstPlayer)) {
    state.setup.firstPlayer = "auto";
  }

  els.firstPlayerSelect.value = state.setup.firstPlayer;
}

function openingSetupNotes(selected) {
  if (selected.length === 0) {
    return ["Choose factions to get faction setup order, opening comfort, and first-turn guidance."];
  }

  const factionSetupOrder = sortedSetupFactions(selected)
    .map(setupOrderLabel)
    .join(" / ");
  const openingComfort = [...selected]
    .sort((left, right) => openingProfile(right).rank - openingProfile(left).rank)
    .map((faction) => `${faction.name} (${openingProfile(faction).setup})`)
    .join(" / ");
  const first = effectiveFirstPlayer(selected);
  const profile = openingProfile(first);
  const firstMode = state.setup.firstPlayer === "auto" ? "Suggested first turn" : "Chosen first turn";
  const notes = [
    `Faction setup sequence: ${factionSetupOrder}.`,
    `Opening comfort: ${openingComfort}.`,
    `${firstMode}: ${first.name} (${profile.label}) - ${profile.note}`,
    `Once play begins, continue clockwise from the first player.`
  ];

  if (profile.rank <= 3) {
    notes.push(`${first.name} can start first, but the table may feel cleaner if a board-heavy faction opens instead.`);
  }

  return notes;
}

function renderList(list, items) {
  list.innerHTML = "";
  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
  });
}

function renderGameSetup() {
  const selected = selectedSetupFactions();
  clampSetupStep(sortedSetupFactions(selected));

  els.mapSelect.value = state.setup.map;
  els.deckSelect.value = state.setup.deck;
  els.playerCountSelect.value = String(state.setup.players);
  renderFirstPlayerOptions(selected);

  renderList(els.gameSetupList, [
    mapNotes[state.setup.map],
    deckNotes[state.setup.deck],
    "Choose factions and seating before placing faction pieces.",
    ...openingSetupNotes(selected),
    "Deal starting hands, then follow each faction board for exact placement."
  ]);
}

function renderSetupFactions() {
  els.setupFactionList.innerHTML = "";
  const setupFaction = currentSetupFaction();
  factions.forEach((faction) => {
    const label = document.createElement("label");
    label.className = `setup-faction${setupFaction.id === faction.id && state.setup.factions.includes(faction.id) ? " active" : ""}`;
    label.style.setProperty("--faction", faction.color);
    label.innerHTML = `
      <input type="checkbox" value="${faction.id}" ${state.setup.factions.includes(faction.id) ? "checked" : ""} />
      <span>${faction.name}</span>
    `;
    label.querySelector("input").addEventListener("change", (event) => {
      if (event.target.checked) {
        state.setup.factions = [...new Set([...state.setup.factions, faction.id])];
        state.factionId = faction.id;
        state.phaseIndex = 0;
        state.setup.stepIndex = sortedSetupFactions().findIndex((setupFaction) => setupFaction.id === faction.id);
      } else {
        state.setup.factions = state.setup.factions.filter((id) => id !== faction.id);
        clampSetupStep();
      }
      persist();
      render();
    });
    els.setupFactionList.append(label);
  });
}

function renderBalanceSummary() {
  const selected = selectedSetupFactions();
  const playerGap = state.setup.players - selected.length;
  const militant = selected.filter((faction) => faction.tags.includes("Militant")).length;
  const insurgent = selected.filter((faction) => faction.tags.includes("Insurgent")).length;
  const solo = selected.filter((faction) => faction.tags.includes("Solo")).length;
  const economic = selected.filter((faction) => faction.tags.includes("Economic")).length;
  const social = selected.filter((faction) => faction.tags.includes("Social")).length;
  const support = economic + social;
  const anchors = militant + Math.min(insurgent, 1);

  if (selected.length === 0) {
    els.balanceSummary.textContent = "Select the factions at the table to check board presence, policing, and indirect play.";
    return;
  }

  if (playerGap !== 0) {
    els.balanceSummary.textContent = playerGap > 0
      ? `Pick ${playerGap} more faction${playerGap === 1 ? "" : "s"} for a ${state.setup.players}-player game.`
      : `You have ${Math.abs(playerGap)} extra faction${Math.abs(playerGap) === 1 ? "" : "s"} selected.`;
    return;
  }

  const warnings = [];

  if (state.setup.players <= 2 && militant < 2) {
    warnings.push("2-player games are best with two board-heavy factions.");
  }

  if (state.setup.players >= 4 && anchors < 2) {
    warnings.push("Low board anchoring: add another militant or strong board-control faction.");
  }

  if (solo + support > militant + insurgent) {
    warnings.push("Indirect-heavy table: make sure at least two factions can police the board.");
  }

  if (militant === 0) {
    warnings.push("No militant faction selected; scoring may feel slippery and hard to contest.");
  }

  if (economic > 0 && state.setup.players <= 2) {
    warnings.push("Economic factions usually want more customers than a small table provides.");
  }

  if (social > 1) {
    warnings.push("Multiple social factions can make incentives hard to read; pick a clear board anchor.");
  }

  if (warnings.length > 0) {
    els.balanceSummary.textContent = warnings.join(" ");
    return;
  }

  els.balanceSummary.textContent = "Table-ready mix: enough board presence, policing, and asymmetric incentives.";
}

function renderFactionSetup(faction) {
  const selected = sortedSetupFactions();
  const setupFaction = selected.length > 0 ? currentSetupFaction() : faction;
  const currentIndex = selected.findIndex((selectedFaction) => selectedFaction.id === setupFaction.id);
  const displayIndex = currentIndex >= 0 ? currentIndex + 1 : 1;
  const total = selected.length || 1;
  const isLast = selected.length > 0 && currentIndex === selected.length - 1;
  const isSelected = selected.length > 0;
  const nextFaction = isSelected && !isLast ? selected[currentIndex + 1] : null;

  els.setupFactionName.textContent = setupFaction.name;
  const setupProfile = openingProfile(setupFaction);
  const orderNote = setupProfile.setupOrder < 99
    ? `Setup ${setupProfile.setupLetter}: position ${setupProfile.setupOrder} in the faction setup sequence.`
    : "Use the printed setup card to place this faction in sequence.";
  els.setupStepStatus.textContent = isSelected
    ? `Step ${displayIndex} of ${total}${nextFaction ? ` - next: ${nextFaction.name}` : " - setup sequence complete"}`
    : "Select factions in the layout card to build the setup sequence.";

  els.nextSetupStep.disabled = !isSelected || isLast;
  els.resetSetupSequence.disabled = !isSelected || state.setup.stepIndex === 0;
  els.nextSetupStep.textContent = isLast ? "Sequence complete" : "Next setup";

  renderList(els.factionSetupList, [
    orderNote,
    ...(factionSetup[setupFaction.id] || [
    "Use the printed faction board for exact setup.",
    "Keep unique faction pieces and tracks visible before play begins."
    ])
  ]);
}

function advance(delta) {
  const phases = currentPhases();
  state.phaseIndex = (state.phaseIndex + delta + phases.length) % phases.length;

  persist();
  render();
}

function render() {
  const faction = currentFaction();
  const phases = currentPhases();
  const phase = phases[state.phaseIndex] || phases[0];

  document.documentElement.style.setProperty("--accent", faction.color);
  document.documentElement.style.setProperty("--accent-dark", faction.color);

  els.factionType.textContent = faction.type;
  els.factionName.textContent = faction.name;
  els.factionSummary.textContent = faction.summary;
  els.phaseToken.style.setProperty("--phase", phaseColors[phase]);
  els.phaseTitle.textContent = phase;
  els.notes.value = localStorage.getItem(`rootHelperNotes-${faction.id}`) || "";

  renderFactions();
  renderPhaseTabs();
  renderTasks(faction, phase);
  renderInsight(faction);
  renderGameSetup();
  renderSetupFactions();
  renderBalanceSummary();
  renderFactionSetup(faction);
  updateChecklistHeading();
}

els.mapSelect.addEventListener("change", (event) => {
  state.setup.map = event.target.value;
  persist();
  renderGameSetup();
});
els.deckSelect.addEventListener("change", (event) => {
  state.setup.deck = event.target.value;
  persist();
  renderGameSetup();
});
els.playerCountSelect.addEventListener("change", (event) => {
  state.setup.players = Number(event.target.value);
  persist();
  renderGameSetup();
  renderBalanceSummary();
});
els.firstPlayerSelect.addEventListener("change", (event) => {
  state.setup.firstPlayer = event.target.value;
  persist();
  renderGameSetup();
  renderBalanceSummary();
});
els.nextSetupStep.addEventListener("click", () => {
  const selected = sortedSetupFactions();
  if (selected.length === 0) {
    return;
  }

  if (state.setup.stepIndex >= selected.length - 1) {
    return;
  }

  state.setup.stepIndex += 1;
  state.factionId = selected[state.setup.stepIndex].id;
  state.phaseIndex = 0;
  persist();
  render();
});
els.resetSetupSequence.addEventListener("click", () => {
  const selected = sortedSetupFactions();
  state.setup.stepIndex = 0;
  if (selected.length > 0) {
    state.factionId = selected[0].id;
    state.phaseIndex = 0;
  }

  persist();
  render();
});
els.nextStep.addEventListener("click", () => advance(1));
els.resetTurn.addEventListener("click", () => {
  clearFactionChecks();
  state.phaseIndex = 0;
  persist();
  render();
});
els.startPlaying.addEventListener("click", () => {
  const selected = selectedSetupFactions();
  const first = selected.length > 0 ? effectiveFirstPlayer(selected) : null;

  if (first) {
    state.factionId = first.id;
  } else if (!state.setup.factions.includes(state.factionId)) {
    state.setup.factions = [...new Set([...state.setup.factions, state.factionId])];
  }

  state.phaseIndex = 0;
  els.setupHelper.open = false;
  persist();
  render();
});
els.notes.addEventListener("input", () => {
  localStorage.setItem(`rootHelperNotes-${currentFaction().id}`, els.notes.value);
});

render();
}
