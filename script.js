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
      "Your economy is visible. Defend sawmills before you chase flashy battles.",
      "Recruiters are tempo. Losing them can make the next turn feel much smaller.",
      "Score steadily through buildings; do not wait for one perfect explosive turn."
    ],
    questions: [
      ["Can I protect wood?", "Trace paths from sawmills to build sites before committing actions."],
      ["Where do I need rule?", "A single warrior in the right clearing can unlock an entire build line."],
      ["Who benefits if I fight?", "Battles are useful, but your action economy is precious."]
    ],
    phases: {
      Birdsong: [
        "Place one wood at each sawmill.",
        "Check whether enemy pieces interrupt paths from wood to intended build clearings.",
        "Name the clearing you most need to hold through the table round."
      ],
      Daylight: [
        "Take three actions: battle, march, recruit, build, or overwork.",
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
      "The decree is a promise. Add cards that give you room, not just ambition.",
      "Roosts score passively, so preserving them can be stronger than overextending.",
      "Bird cards are powerful but dangerous in the decree because they broaden obligations."
    ],
    questions: [
      ["Will this decree survive?", "Before adding a card, imagine your worst board state next Birdsong."],
      ["Where is my safe recruit?", "Recruit failure is the most common avoidable crisis."],
      ["Can I battle profitably?", "One legal battle is enough, but profitable battles keep opponents honest."]
    ],
    phases: {
      Birdsong: [
        "Add one or two cards to the decree.",
        "Resolve recruit, move, battle, and build in decree order.",
        "If any decree step cannot be completed, enter turmoil and choose a new leader."
      ],
      Daylight: [
        "Craft using roosts.",
        "Score points from roosts on the score track.",
        "Look for dominance or table threats your forced moves may accidentally enable."
      ],
      Evening: [
        "Draw one card, plus bonuses from uncovered draw symbols.",
        "Discard down to five cards.",
        "Check whether opponents can remove the roost your decree depends on."
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
      "Sympathy is both scoring and threat projection. Place it where it taxes movement.",
      "Bases are priceless. Do not revolt somewhere you cannot defend or exploit.",
      "Supporters are your hidden engine; protect the suit mix."
    ],
    questions: [
      ["Where will outrage hurt?", "Sympathy near busy paths earns cards and alters enemy routes."],
      ["Is this revolt worth a base?", "A base should open officers, crafting, and pressure."],
      ["How many officers do I need?", "Military actions should support the sympathy plan, not replace it."]
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
      "Item exhaustion is your real action budget. Count boots and swords before plans.",
      "Aid can be safer than fighting, until one faction becomes too rich from it.",
      "Hostile status changes the map; do not become hostile casually."
    ],
    questions: [
      ["What refreshes next?", "A strong turn often starts by knowing which exhausted items return."],
      ["Who should like me?", "Allied movement and aid points can decide the midgame."],
      ["Can I repair after risk?", "Ruin dives and battles are better when hammers or tea are accounted for."]
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
      "Gardens are scoring, crafting, and fragility all in one place.",
      "Acolytes let you punish attacks, but only if you have useful targets.",
      "The outcast suit determines your best pressure. Read next turn before acting."
    ],
    questions: [
      ["Which suit is becoming hated?", "The discard pile is a planning tool, not bookkeeping trivia."],
      ["Where are gardens safe?", "A garden in the wrong clearing can become points for someone else."],
      ["Can conversion unlock rule?", "Removing one enemy piece may matter more than winning a battle."]
    ],
    phases: {
      Birdsong: [
        "Adjust the outcast suit from the discard pile.",
        "Return revealed cards to hand.",
        "Use acolytes for conspiracies in outcast clearings when the timing is right."
      ],
      Daylight: [
        "Reveal cards to recruit, build gardens, score, or craft in matching suits.",
        "Stack revealed suits toward the clearings you can actually protect.",
        "Score gardens before opponents get a clean removal line."
      ],
      Evening: [
        "Discard revealed bird cards, then return the rest to hand next Birdsong.",
        "Draw one card, plus garden and draw-symbol bonuses.",
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
      "Your prices shape the table. Cheap services create customers; expensive services create suspicion.",
      "Trade posts are scoring and crafting anchors, but each one also advertises a target.",
      "Funds are tempo. Protect warriors where you need future actions, not just where you want points."
    ],
    questions: [
      ["Who needs me?", "Price cards, riverboats, and mercenaries around the player most likely to pay this round."],
      ["Can I defend the post?", "A trade post is much better when the suit, path, and warrior count all support it."],
      ["What will payments become?", "Picture how every warrior in payments turns into future actions before setting prices."]
    ],
    phases: {
      Birdsong: [
        "If your funds are empty, add starting funds so the Company can operate.",
        "Set service prices with the current table needs in mind.",
        "Identify which suit offers the best trade post or crafting pressure."
      ],
      Daylight: [
        "Craft using trade posts.",
        "Commit and spend funds for actions: move, battle, recruit, draw, or establish trade posts.",
        "Avoid spending so deeply that next turn cannot threaten a trade route or key clearing."
      ],
      Evening: [
        "Move payments into your available economy at the proper timing.",
        "Draw cards and discard down to hand limit.",
        "Recheck prices before the next player decides whether you are worth paying."
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
      "Your hand is political capital. Keep suits that can prove control where you have pieces.",
      "Tunnels make surprise pressure possible, but exposed buildings can trigger painful penalties.",
      "Ministers compound quickly. Sway toward actions you can actually support on the map."
    ],
    questions: [
      ["What can I reveal?", "Check which clearings you occupy before planning a sway."],
      ["Which building matters?", "Markets draw cards; citadels reinforce. The right mix keeps the engine alive."],
      ["Can I afford exposure?", "Do not build where one attack can collapse both points and ministers."]
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
      "Plots are stronger when several possibilities are plausible.",
      "Your warriors are cheap, but your table credibility is not.",
      "Use exposure fear to shape enemy actions even when a plot is modest."
    ],
    questions: [
      ["What story am I selling?", "Place plots so opponents can talk themselves into the wrong answer."],
      ["Who must spend actions?", "A plot that wastes enemy tempo may be worth more than immediate points."],
      ["Can I safely flip?", "Score before the board can cheaply collapse your position."]
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
      "The Warlord is your tempo piece. Keep it active, supplied, and hard to isolate.",
      "Mobs are board pressure and denial. Let them force opponents to spend real actions.",
      "Oppression rewards territory, so choose fights that leave you ruling more clearings."
    ],
    questions: [
      ["Where does the Warlord go?", "Pick a route that creates scoring pressure and does not strand your army."],
      ["What should burn?", "Mob placement is strongest when it threatens cardboard or blocks future plans."],
      ["Which mood fits?", "Choose the mood that supports this turn's actual route, not a perfect imaginary turn."]
    ],
    phases: {
      Birdsong: [
        "Resolve mob pressure and choose or maintain the Warlord's mood.",
        "Recruit around strongholds and the Warlord.",
        "Check whether items can be gained or protected for the hoard."
      ],
      Daylight: [
        "Command the Warlord and warriors to move, battle, and pressure key clearings.",
        "Build or defend strongholds where they extend recruitment and rule.",
        "Use battles to gain territory, not only to remove pieces."
      ],
      Evening: [
        "Score oppression from ruled clearings without enemy pieces.",
        "Draw cards and discard down to hand limit.",
        "Confirm opponents cannot easily isolate the Warlord before your next Birdsong."
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
      "Your retinue is powerful but demanding. Add cards that match realistic board positions.",
      "Relic scoring takes preparation. Secure paths before committing to a recovery line.",
      "Waystations are both logistics and liabilities. Place them where they support multiple turns."
    ],
    questions: [
      ["Can the retinue resolve?", "Before adding a card, check whether the suit and action are genuinely reachable."],
      ["Which relic is worth it?", "The best relic is the one you can recover without exposing the whole expedition."],
      ["Where do I need a waystation?", "A good waystation shortens several future turns, not just the current one."]
    ],
    phases: {
      Birdsong: [
        "Add carefully to the retinue only where the obligation is realistic.",
        "Resolve retinue actions in order, watching suit and clearing requirements.",
        "Keep warriors positioned to escort future relic recovery."
      ],
      Daylight: [
        "Craft and take available actions from your board.",
        "Move, battle, delve, or recover with an eye toward complete relic sets.",
        "Defend waystations that your next retinue line depends on."
      ],
      Evening: [
        "Score recovered relics when applicable.",
        "Draw cards and discard down to hand limit.",
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
      "This faction is from the Homeland expansion, so treat this guidance as a draft table aid.",
      "Your table story is tension: safety, integration, and the risk of escalation.",
      "Plan around how other players can misread or punish your board presence."
    ],
    questions: [
      ["Am I inviting reprisals?", "A useful position can become a political liability if it looks too aggressive."],
      ["Where is safety real?", "Choose clearings that can be defended after the current turn, not just occupied now."],
      ["What changes table perception?", "Sometimes the best move is the one that makes your intent obvious."]
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
      "This faction is from the Homeland expansion, so treat this guidance as a draft table aid.",
      "Your strength is not just warriors. Look for political leverage and timing.",
      "You can change incentives at the table; use that to slow runaway aggression."
    ],
    questions: [
      ["Who needs a deal?", "The best assembly pressure often starts with another player's problem."],
      ["Where can debate replace battle?", "Push attention toward contested clearings before they become pure violence."],
      ["What am I making costly?", "Political factions win by changing which choices feel efficient."]
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
      "This faction is from the Homeland expansion, so treat this guidance as a draft table aid.",
      "Your leverage comes from timing raids where opponents are least able to answer.",
      "Hostages and ransom pressure are strongest when they distort another player's next turn."
    ],
    questions: [
      ["Who is vulnerable now?", "Choose targets whose response options are already stretched thin."],
      ["Can I get away?", "A raid that cannot escape may become a donation of points."],
      ["What is the ransom worth?", "Pressure is best when it converts into points, tempo, or a forced enemy detour."]
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

const state = {
  factionId: localStorage.getItem("rootHelperFaction") || factions[0].id,
  phaseIndex: Number(localStorage.getItem("rootHelperPhase") || 0)
};

const els = {
  factionList: document.querySelector("#factionList"),
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
  prevStep: document.querySelector("#prevStep"),
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
  updateChecklistHeading();
}

els.prevStep.addEventListener("click", () => advance(-1));
els.nextStep.addEventListener("click", () => advance(1));
els.resetTurn.addEventListener("click", () => {
  clearFactionChecks();
  state.phaseIndex = 0;
  persist();
  render();
});
els.notes.addEventListener("input", () => {
  localStorage.setItem(`rootHelperNotes-${currentFaction().id}`, els.notes.value);
});

render();
