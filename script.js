const factions = [
  {
    id: "marquise",
    name: "Marquise de Cat",
    type: "Engine Builder",
    sigil: "M",
    color: "#c65632",
    summary: "Build, recruit, and keep the wood economy moving.",
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
    color: "#416f9c",
    summary: "Expand the decree without letting it collapse.",
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
    color: "#5e8c45",
    summary: "Spread sympathy, organize bases, and turn outrage into momentum.",
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
    color: "#7b5aa6",
    summary: "Manage items, relationships, quests, and surgical violence.",
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
    color: "#b58a2b",
    summary: "Rule through gardens, acolytes, and the outcast suit.",
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
    id: "corvid",
    name: "Corvid Conspiracy",
    type: "Bluffing Disruptor",
    sigil: "C",
    color: "#30333b",
    summary: "Plant plots, misdirect the table, and score through uncertainty.",
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
  }
];

const phaseColors = {
  Birdsong: "#d9a339",
  Daylight: "#b65334",
  Evening: "#3f5f77"
};

const state = {
  factionId: localStorage.getItem("rootHelperFaction") || factions[0].id,
  phaseIndex: Number(localStorage.getItem("rootHelperPhase") || 0),
  turn: Number(localStorage.getItem("rootHelperTurn") || 1)
};

const els = {
  factionList: document.querySelector("#factionList"),
  factionType: document.querySelector("#factionType"),
  factionName: document.querySelector("#factionName"),
  turnNumber: document.querySelector("#turnNumber"),
  phaseTabs: document.querySelector("#phaseTabs"),
  phaseToken: document.querySelector("#phaseToken"),
  phaseMeta: document.querySelector("#phaseMeta"),
  phaseTitle: document.querySelector("#phaseTitle"),
  taskList: document.querySelector("#taskList"),
  tipList: document.querySelector("#tipList"),
  questionStack: document.querySelector("#questionStack"),
  notes: document.querySelector("#notes"),
  prevStep: document.querySelector("#prevStep"),
  nextStep: document.querySelector("#nextStep")
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
  localStorage.setItem("rootHelperTurn", String(state.turn));
}

function renderFactions() {
  els.factionList.innerHTML = "";
  factions.forEach((faction) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `faction-button${faction.id === state.factionId ? " active" : ""}`;
    button.style.setProperty("--faction", faction.color);
    button.innerHTML = `
      <span class="faction-sigil" aria-hidden="true">${faction.sigil}</span>
      <span>
        <strong>${faction.name}</strong>
        <span>${faction.summary}</span>
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
    const id = `${faction.id}-${phase}-${state.turn}-${index}`;
    item.innerHTML = `
      <input id="${id}" type="checkbox" />
      <label for="${id}">${task}</label>
    `;
    els.taskList.append(item);
  });
}

function renderTips(faction) {
  els.tipList.innerHTML = "";
  faction.tips.forEach((tip) => {
    const item = document.createElement("li");
    item.textContent = tip;
    els.tipList.append(item);
  });
}

function renderQuestions(faction) {
  els.questionStack.innerHTML = "";
  faction.questions.forEach(([title, body]) => {
    const question = document.createElement("div");
    question.className = "question";
    question.innerHTML = `<strong>${title}</strong><p>${body}</p>`;
    els.questionStack.append(question);
  });
}

function advance(delta) {
  const phases = currentPhases();

  if (delta < 0 && state.turn === 1 && state.phaseIndex === 0) {
    return;
  }

  state.phaseIndex += delta;

  if (state.phaseIndex >= phases.length) {
    state.phaseIndex = 0;
    state.turn += 1;
  }

  if (state.phaseIndex < 0) {
    state.phaseIndex = phases.length - 1;
    state.turn = Math.max(1, state.turn - 1);
  }

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
  els.turnNumber.textContent = state.turn;
  els.phaseToken.style.setProperty("--phase", phaseColors[phase]);
  els.phaseMeta.textContent = `Step ${state.phaseIndex + 1} of ${phases.length}`;
  els.phaseTitle.textContent = phase;
  els.notes.value = localStorage.getItem(`rootHelperNotes-${faction.id}`) || "";

  renderFactions();
  renderPhaseTabs();
  renderTasks(faction, phase);
  renderTips(faction);
  renderQuestions(faction);
}

els.prevStep.addEventListener("click", () => advance(-1));
els.nextStep.addEventListener("click", () => advance(1));
els.notes.addEventListener("input", () => {
  localStorage.setItem(`rootHelperNotes-${currentFaction().id}`, els.notes.value);
});

render();
