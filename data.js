const factions = [
  {
    id: "marquise",
    name: "Marquise de Cat",
    sigil: "M",
    color: "#c95532",
    summary: "Build, recruit, and keep the wood economy moving.",
    tags: ["Militant", "Buildings"],
    tips: [
      "Keep wood connected to the clearings where you plan to build. One broken route can waste the turn.",
      "Recruiters replace losses and extend your draw. Do not let opponents strip away too many.",
      "Build where the points also help you rule or defend an important clearing."
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
        "A bird card can buy an extra action, so keep one when you can.",
        "Build where it scores and helps you hold the map."
      ],
      Evening: [
        "Draw one card, plus one more if you have at least three recruiters.",
        "Discard down to five cards.",
        "Notice which building is easiest for an opponent to remove."
      ]
    }
  },
  {
    id: "eyrie",
    name: "Eyrie Dynasties",
    sigil: "E",
    color: "#3f76a6",
    summary: "Expand the decree without letting it collapse.",
    tags: ["Militant", "Decree"],
    tips: [
      "Add only Decree cards you can still satisfy after everyone has had a chance to interfere.",
      "Roosts score and give the Decree places to recruit and build. Losing the wrong one can cause turmoil.",
      "Bird cards fit any column, but every one adds another action you must complete."
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
        "Discard down to five, then spot any roost the Decree cannot afford to lose."
      ]
    }
  },
  {
    id: "alliance",
    name: "Woodland Alliance",
    sigil: "A",
    color: "#5d8f4e",
    summary: "Spread sympathy, revolt into bases, and train officers for evening actions.",
    tags: ["Insurgent", "Sympathy"],
    tips: [
      "Put sympathy where opponents actually want to move. Safe sympathy rarely taxes anyone.",
      "A revolt should create a base you can use, defend, and score from.",
      "Officers are powerful, but organizing sympathy often matters more than fighting."
    ],
    questions: [
      ["Where will outrage matter?", "Place sympathy beside busy paths, contested clearings, or key build sites."],
      ["What does this base give me?", "A useful base improves your supporters, officers, and crafting."],
      ["Should I organize instead?", "Turning warriors into sympathy can outscore a flashy battle."]
    ],
    phases: {
      Birdsong: [
        "You may revolt by spending two matching supporters in a sympathetic clearing.",
        "Spread sympathy by spending supporters matching the target clearing.",
        "Favor busy clearings and places where a base would help."
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
    sigil: "V",
    color: "#72736f",
    summary: "Manage items, relationships, quests, and pick your fights.",
    tags: ["Solo", "Items"],
    tips: [
      "Count ready boots first. They decide how much of the map this turn can reach.",
      "Aid changes both score and relationships. Do not feed the leader unless the payoff is immediate.",
      "Hostile warriors cost an extra boot to enter. Pick that fight deliberately."
    ],
    questions: [
      ["What can I refresh?", "The next turn starts with the items you chose not to exhaust now."],
      ["Who is worth aiding?", "Aid for points, items, or access, not just because a card matches."],
      ["Can I afford damage?", "Explore or battle only when you know how the damaged items get repaired."]
    ],
    phases: {
      Birdsong: [
        "Refresh items based on tea, then slip to an adjacent clearing or forest.",
        "Boots spent on movement are not available for anything else.",
        "Look at ruins and quest suits before spending flexible items."
      ],
      Daylight: [
        "Exhaust items to move, battle, explore, aid, quest, strike, repair, or craft.",
        "Aid before spending the card or item you need for it.",
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
    sigil: "L",
    color: "#93b95d",
    summary: "Rule through gardens, acolytes, and the outcast suit.",
    tags: ["Insurgent", "Conversion"],
    tips: [
      "Every garden needs a job and enough protection. Losing one costs more than the cardboard.",
      "The outcast suit tells you where conspiracies matter. Plan around it before revealing cards.",
      "Acolytes matter only when the outcast suit offers a useful conversion or sanctify target."
    ],
    questions: [
      ["What can the outcast suit do?", "Look for a useful conversion or sanctify before spending acolytes."],
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
        "Reveal suits where the warriors or gardens will be useful.",
        "Score from a garden before an opponent gets an easy chance to remove it."
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
    sigil: "R",
    color: "#2f8f8b",
    summary: "Sell services, build trade posts, and turn enemy payments into points.",
    tags: ["Economic", "Services"],
    tips: [
      "Price for the player who needs a service now. A shop with no buyers does nothing.",
      "Trade posts score and craft, but opponents also score for removing them.",
      "Every fund you commit is unavailable until Evening. Leave enough for the actions you still need."
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
        "Leave enough funds to take several actions next round."
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
    sigil: "D",
    color: "#8b7560",
    summary: "Dig tunnels, build markets and citadels, and sway ministers.",
    tags: ["Militant", "Ministers"],
    tips: [
      "Keep cards in suits you occupy. They are what turn board presence into ministers.",
      "A tunnel can put a build or battle on the other side of the map in one action.",
      "Choose ministers whose actions fit what your pieces can already do."
    ],
    questions: [
      ["What can I prove?", "Before planning Evening, check which suits you occupy and can reveal."],
      ["Market or citadel?", "Markets help future sways. Citadels replace warriors and protect your buildings."],
      ["What happens if this falls?", "Do not put so many buildings together that one battle ruins the turn."]
    ],
    phases: {
      Birdsong: [
        "Muster warriors in the Burrow.",
        "Dig where a tunnel gives you a useful build, move, or battle.",
        "Know which suits you need to reveal before trying to sway a minister."
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
    sigil: "C",
    color: "#2e3338",
    summary: "Plant plots, misdirect the table, and score through uncertainty.",
    tags: ["Insurgent", "Bluffing"],
    tips: [
      "Plant plots where at least two guesses make sense. An obvious bluff is barely a bluff.",
      "A plot has already helped if an opponent wastes an action dealing with it.",
      "Flip a plot when its points or effect are worth more than keeping the bluff alive."
    ],
    questions: [
      ["What could this plot be?", "The clearing should make at least two plot types look believable."],
      ["Who has to deal with it?", "A plot is useful when the right opponent has to spend an action on it."],
      ["Can I flip before it dies?", "Score plots before a cheap battle or exposure clears them away."]
    ],
    phases: {
      Birdsong: [
        "Place warriors in clearings with corvid pieces.",
        "Place new warriors where they help a plot without giving away its type.",
        "Notice who can expose a plot without hurting their own turn."
      ],
      Daylight: [
        "Take three actions: move, battle, recruit, plot, trick, or exert.",
        "Place plots where more than one type would make sense.",
        "Flip when the points or effect are better than keeping the token hidden."
      ],
      Evening: [
        "Draw one card, plus draw-symbol bonuses.",
        "Discard down to five cards.",
        "Look at each facedown plot from the opponents' side. Which one is obvious?"
      ]
    }
  },
  {
    id: "hundreds",
    name: "Lord of the Hundreds",
    sigil: "H",
    color: "#b13f34",
    summary: "Command the Warlord, loot items, spread mobs, and oppress clearings.",
    tags: ["Militant", "Warlord"],
    tips: [
      "Choose the Warlord's final clearing before the first move. That is where the turn pays off.",
      "Put mobs beside cardboard or in clearings an opponent needs soon.",
      "Oppression needs clearings with no enemy pieces. Finish the job when you battle."
    ],
    questions: [
      ["Where does the Warlord finish?", "Choose the final clearing before planning the first attack."],
      ["What must the mob threaten?", "Aim mobs at cardboard, choke points, or clearings opponents need soon."],
      ["Which mood helps this turn?", "Pick for the actions you can take now, not the turn you wish you had."]
    ],
    phases: {
      Birdsong: [
        "Resolve every mob token, then return the Warlord to the map if it was removed.",
        "Choose a mood whose listed item is not already in the hoard.",
        "Finish the Warlord's Birdsong steps before starting commands."
      ],
      Daylight: [
        "Use command actions to move and battle with the Warlord's army.",
        "Build or defend strongholds where you need recruits and rule.",
        "End battles with clearings you can oppress, not just fewer enemy warriors."
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
    sigil: "K",
    color: "#858a7a",
    summary: "Build the Retinue, recover relics, and keep the expedition moving.",
    tags: ["Militant", "Relics"],
    tips: [
      "Build the route before committing the Retinue. A relic only matters if you can bring it home.",
      "Secure the route and escort before committing to a relic.",
      "Place waystations where they can help recover more than one relic."
    ],
    questions: [
      ["Can this Retinue card resolve?", "Add only what your warriors and waystations can support."],
      ["Which relic has a route?", "The best relic is the one you can escort, recover, and defend."],
      ["What does this waystation enable?", "A good waystation makes the next two turns easier."]
    ],
    phases: {
      Birdsong: [
        "Encamp or decamp waystations, then recruit as shown on the faction board.",
        "Plan the clearings needed for the retinue before adding new cards.",
        "Keep enough warriors with the relics and waystations you need."
      ],
      Daylight: [
        "Craft, then add a card to the Retinue when the faction board calls for it.",
        "Resolve the Retinue columns in order: move, battle, then delve.",
        "Defend waystations that your next retinue line depends on."
      ],
      Evening: [
        "Recover relics through waystations after checking rule and matching suits.",
        "Resolve living off the land, then draw and discard down to five cards.",
        "Find any Retinue card that may be hard to complete next turn."
      ]
    }
  },
  {
    id: "diaspora",
    name: "Lilypad Diaspora",
    sigil: "P",
    color: "#4e9871",
    summary: "Settle clearings, train warriors, and manage reprisals.",
    tags: ["Social", "Stability"],
    tips: [
      "Settle where you can score without giving the table an easy reason to push you out.",
      "Do not settle a clearing you cannot protect from the next attack.",
      "Make opponents pay when they disturb a settled clearing."
    ],
    questions: [
      ["Where can I settle safely?", "Choose a clearing that can survive the next opponent's turn."],
      ["What must I defend?", "Protect the clearing that holds your scoring together."],
      ["Who gains by attacking me?", "If nobody gains much, the clearing is less likely to be disturbed."]
    ],
    phases: {
      Birdsong: [
        "Look over settled clearings before adding another one.",
        "Train or move warriors where they defend the clearings you score from.",
        "Notice which clearings could turn into flashpoints after one attack."
      ],
      Daylight: [
        "Take faction actions to settle, protect, and score.",
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
    sigil: "T",
    color: "#6e679b",
    summary: "Hold assemblies, build support, and steer conflict through debate.",
    tags: ["Social", "Incentives"],
    tips: [
      "Give opponents a good reason to solve someone else's problem before yours.",
      "A promise works only when your pieces give the other player a reason to believe it.",
      "Point conflict toward the leader and away from your assemblies."
    ],
    questions: [
      ["Who can solve this for me?", "Find the player who gains something by dealing with the same threat."],
      ["Where should conflict move?", "Redirect aggression toward the table leader or a more urgent threat."],
      ["What choice am I making costly?", "Give opponents a concrete reason to choose another target."]
    ],
    phases: {
      Birdsong: [
        "Review assemblies, connections, and the clearings where conflict is about to spike.",
        "Decide which assembly or relationship matters most this turn.",
        "See whether someone else's threat can be redirected instead of fought."
      ],
      Daylight: [
        "Use faction actions to build assemblies and support.",
        "Craft or move where it helps the next debate or score.",
        "Promise only what you can still afford to do."
      ],
      Evening: [
        "Resolve scoring and draw effects from your faction board.",
        "Discard down to hand limit.",
        "Notice who has the easiest way to disrupt an assembly before your next turn."
      ]
    }
  },
  {
    id: "knaves",
    name: "Knaves of the Deepwood",
    sigil: "N",
    color: "#69533e",
    summary: "Raid from the treeline, take hostages, and turn chaos into ransom.",
    tags: ["Solo", "Raiding"],
    tips: [
      "Pick the escape before the raid. A hostage is no good if the counterattack wipes you out.",
      "End where you can raid again and the target cannot answer cheaply.",
      "Take a hostage only when it changes what that opponent can afford to do next."
    ],
    questions: [
      ["Who cannot answer cheaply?", "Choose someone whose warriors, cards, or actions are already stretched."],
      ["Where do I escape?", "A raid is only good if the aftermath does not trap your best pieces."],
      ["What does the ransom change?", "A useful hostage costs the opponent points, actions, or a detour."]
    ],
    phases: {
      Birdsong: [
        "Trace a raid route from a forest, edge, or safe starting point.",
        "Prepare the captain or band that best fits the target this turn.",
        "Pick the opponent who can least afford a hostage or detour."
      ],
      Daylight: [
        "Take raids, moves, battles, and other actions in the order on your faction board.",
        "Take a hostage when the ransom changes the opponent's next turn.",
        "Do not leave your best pieces open to one cheap counterattack."
      ],
      Evening: [
        "Resolve ransom, scoring, and draw effects from your faction board.",
        "Discard down to hand limit.",
        "Choose a safe place to start the next raid."
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
  exiles: "Exiles & Partisans replaces the Favor cards with more tactical crafted powers.",
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
    "Keep the Decree visible. Every added card is another action you must complete."
  ],
  alliance: [
    "Set supporters, sympathy, bases, and officers beside your board.",
    "Place the starting sympathy and supporters listed on the faction board.",
    "Keep supporters separate from your hand so outrage and spreading are easy to track."
  ],
  vagabond: [
    "Choose a character card and place the matching starting items.",
    "Place ruins and ruin items on the map.",
    "Place the pawn in a forest and keep relationship markers visible."
  ],
  cult: [
    "Place the starting gardens and warriors listed on the faction board.",
    "Set up the lost souls and outcast area near the discard pile.",
    "Keep acolytes separate from supply so conspiracies are easy to count."
  ],
  riverfolk: [
    "Place the starting warriors along the river as listed on the faction board.",
    "Set service prices before the first player can buy.",
    "Keep payments, funds, and committed warriors visually separate."
  ],
  duchy: [
    "Place the Burrow, starting tunnel, warriors, and buildings listed on the faction board.",
    "Arrange crown ministers by rank so the choices are easy to compare.",
    "Keep market and citadel tracks clear before the first build."
  ],
  corvid: [
    "Place starting warriors and prepare plot tokens face down.",
    "Keep each plot type easy to identify for yourself but hidden from opponents.",
    "Keep the plot reference close once facedown tokens are on the map."
  ],
  hundreds: [
    "Place the Warlord, warriors, strongholds, and mobs listed on the faction board.",
    "Set up the hoard and mood cards where everyone can see them.",
    "Keep items near the hoard because they limit future mood choices."
  ],
  keepers: [
    "Place the waystations, warriors, relics, and cards listed on the faction board.",
    "Prepare the retinue area before adding cards.",
    "Arrange relics so their values and suits are easy to see before delving."
  ],
  diaspora: [
    "Place the starting pieces listed on the Homeland setup card.",
    "Keep the faction tracks where everyone can read them.",
    "Put the remaining pieces beside the faction board."
  ],
  council: [
    "Place the starting pieces listed on the Homeland setup card.",
    "Put the assembly pieces and political markers where everyone can see them.",
    "Put the remaining pieces beside the faction board."
  ],
  knaves: [
    "Place the starting pieces listed on the Homeland setup card.",
    "Keep hostages, ransom pieces, and raiding pieces easy to reach.",
    "Put the remaining pieces beside the faction board."
  ]
};

const openingProfiles = {
  marquise: { setupOrder: 1, setupLetter: "A" },
  eyrie: { setupOrder: 2, setupLetter: "B" },
  alliance: { setupOrder: 3, setupLetter: "C" },
  vagabond: { setupOrder: 4, setupLetter: "D" },
  riverfolk: { setupOrder: 5, setupLetter: "E" },
  cult: { setupOrder: 6, setupLetter: "F" },
  duchy: { setupOrder: 7, setupLetter: "G" },
  corvid: { setupOrder: 8, setupLetter: "H" },
  hundreds: { setupOrder: 9, setupLetter: "I" },
  keepers: { setupOrder: 10, setupLetter: "J" },
  diaspora: { setupOrder: 11, setupLetter: "K" },
  council: { setupOrder: 12, setupLetter: "L" },
  knaves: { setupOrder: 13, setupLetter: "M" }
};

window.ROOT_DATA = {
  factions,
  phaseColors,
  mapNotes,
  deckNotes,
  factionSetup,
  openingProfiles
};
