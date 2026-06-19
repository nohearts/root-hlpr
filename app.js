const factionMeta = {
  marquise: { reach: 10, status: "published", terms: { Wood: "Placed at sawmills and spent through ruled paths to build.", Rule: "You rule a clearing when you have more warriors and buildings there than each other player." } },
  eyrie: { reach: 7, status: "published", terms: { Decree: "The growing set of mandatory Recruit, Move, Battle, and Build actions.", Turmoil: "The penalty for failing to complete any action in the Decree." } },
  alliance: { reach: 3, status: "published", terms: { Supporters: "Cards kept separately and spent for revolt and sympathy.", Outrage: "The penalty enemies pay when removing sympathy or moving into a sympathetic clearing." } },
  vagabond: { reach: 5, status: "published", terms: { Refresh: "Turn exhausted items upright so they can be used again.", Hostile: "A relationship that changes movement and scoring against that faction." } },
  cult: { reach: 2, status: "published", terms: { Outcast: "The suit currently eligible for conspiracies.", Acolytes: "Warriors gained when defending in battle; spent on conspiracies." } },
  riverfolk: { reach: 5, status: "published", terms: { Funds: "Warriors in the Funds box available for actions.", Services: "Cards, Riverboats, and Mercenaries offered to other players." } },
  duchy: { reach: 8, status: "published", terms: { Sway: "Reveal cards matching occupied clearings to gain a minister.", "Price of Failure": "The penalty for losing a building in battle." } },
  corvid: { reach: 3, status: "published", terms: { Exposure: "An enemy guesses a facedown plot by showing a matching card.", Trick: "Swap two plot tokens without revealing them." } },
  hundreds: { reach: 9, status: "published", terms: { Mood: "The Warlord ability chosen for the turn.", Oppress: "Score for clearings you rule that contain no enemy pieces." } },
  keepers: { reach: 8, status: "published", terms: { Retinue: "Cards assigned to mandatory faction actions.", Delve: "Move a relic from a forest into an adjacent clearing." } },
  diaspora: { reach: null, status: "preview", terms: { Homeland: "This faction belongs to the Homeland expansion; use final printed materials for exact terms." } },
  council: { reach: null, status: "preview", terms: { Homeland: "This faction belongs to the Homeland expansion; use final printed materials for exact terms." } },
  knaves: { reach: null, status: "preview", terms: { Homeland: "This faction belongs to the Homeland expansion; use final printed materials for exact terms." } }
};

const factionMistakes = {
  marquise: "Building for points while leaving the wood route or recruiter network easy to break.",
  eyrie: "Adding a Decree card because it works now without checking whether it will remain legal next turn.",
  alliance: "Revolting for spectacle instead of placing a base that supports officers, cards, and future sympathy.",
  vagabond: "Spending boots and swords early, then discovering there is no safe route or repair plan.",
  cult: "Building gardens faster than they can be defended, giving opponents points and disrupting card draw.",
  riverfolk: "Pricing every service high and then starving the Company of the payments that power its turn.",
  duchy: "Swaying an impressive minister whose action you cannot use turn after turn.",
  corvid: "Planting plots in obvious locations where exposure or one inexpensive battle removes the bluff.",
  hundreds: "Chasing battles while leaving the Warlord isolated and too little territory available for oppression.",
  keepers: "Adding Retinue obligations before securing the movement lanes, relics, and waystations needed to resolve them.",
  diaspora: "Treating preview strategy as settled before checking the final printed Homeland faction board.",
  council: "Relying on promises when your pieces give the table no reason to keep them.",
  knaves: "Taking a tempting raid without planning the escape, ransom timing, or response from the target."
};

const defaultSetup = {
  style: "standard",
  map: "autumn",
  deck: "exiles",
  players: 4,
  factions: [],
  firstPlayer: "auto",
  stepIndex: 0,
  taskIndex: 0
};

function readJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

const storedSetup = readJson("rootHelperSetup", defaultSetup);
const state = {
  mode: localStorage.getItem("rootHelperMode") || "setup",
  sessionId: localStorage.getItem("rootHelperSessionId") || "",
  active: localStorage.getItem("rootHelperActive") === "true",
  factionId: localStorage.getItem("rootHelperFaction") || factions[0].id,
  phaseIndex: Number(localStorage.getItem("rootHelperPhase") || 0),
  filter: "all",
  setup: { ...defaultSetup, ...storedSetup },
  checks: {}
};

const els = Object.fromEntries([
  "factionList", "factionFilter", "sessionLabel", "factionName", "factionSummary",
  "openSetup", "resumeGame", "newGame", "endGame", "setupWorkspace", "playWorkspace",
  "setupStyleSelect", "mapSelect", "deckSelect", "playerCountSelect", "firstPlayerSelect",
  "gameSetupList", "setupFactionList", "matchupReport", "setupFactionName",
  "setupStepStatus", "factionSetupList", "nextSetupStep", "resetSetupSequence",
  "startPlaying", "phaseTabs", "phaseToken", "phasePrompt", "taskList",
  "coreAdvice", "mistakeAdvice", "matchupAdvice", "factionTerms", "notes",
  "nextStep", "resetTurn"
].map((id) => [id, document.querySelector(`#${id}`)]));

function createSession() {
  state.sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  state.checks = {};
  state.active = true;
}

function checksKey() {
  return `rootHelperChecks-${state.sessionId}`;
}

function loadChecks() {
  state.checks = state.sessionId ? readJson(checksKey(), {}) : {};
}

function persist() {
  localStorage.setItem("rootHelperMode", state.mode);
  localStorage.setItem("rootHelperActive", String(state.active));
  localStorage.setItem("rootHelperSessionId", state.sessionId);
  localStorage.setItem("rootHelperFaction", state.factionId);
  localStorage.setItem("rootHelperPhase", String(state.phaseIndex));
  localStorage.setItem("rootHelperSetup", JSON.stringify(state.setup));
  if (state.sessionId) localStorage.setItem(checksKey(), JSON.stringify(state.checks));
}

function currentFaction() {
  return factions.find((faction) => faction.id === state.factionId) || factions[0];
}

function selectedFactions() {
  return state.setup.factions
    .map((id) => factions.find((faction) => faction.id === id))
    .filter(Boolean);
}

function setupSequence() {
  const selected = selectedFactions();
  if (state.setup.style === "advanced") return [...selected].reverse();
  return [...selected].sort((a, b) => (openingProfiles[a.id]?.setupOrder || 99) - (openingProfiles[b.id]?.setupOrder || 99));
}

function clampSetupStep() {
  state.setup.stepIndex = Math.max(0, Math.min(state.setup.stepIndex, Math.max(0, setupSequence().length - 1)));
  state.setup.taskIndex = Math.max(0, Number(state.setup.taskIndex) || 0);
}

function setupTasks(faction) {
  return [
    "Put the faction board or Advanced Setup card in front of you.",
    ...(factionSetup[faction.id] || ["Set up from the printed faction instructions."]),
    "Make sure every track, card, and piece is ready."
  ];
}

function renderList(element, items) {
  element.innerHTML = "";
  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    element.append(item);
  });
}

function renderFactions() {
  els.factionList.innerHTML = "";
  const available = state.active && state.mode === "play" && selectedFactions().length ? selectedFactions() : factions;
  available
    .filter((faction) => state.filter === "all" || faction.tags.includes(state.filter))
    .forEach((faction) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `faction-button${faction.id === state.factionId ? " active" : ""}`;
      button.style.setProperty("--faction", faction.color);
      button.innerHTML = `<span class="faction-sigil" aria-hidden="true">${faction.sigil}</span><span class="faction-copy"><strong>${faction.name}</strong><span class="faction-tags">${faction.tags.map((tag) => `<span>${tag}</span>`).join("")}</span></span>`;
      button.addEventListener("click", () => {
        state.factionId = faction.id;
        state.phaseIndex = 0;
        persist();
        render();
      });
      els.factionList.append(button);
    });
}

function setupRuleNotes() {
  if (state.setup.style === "advanced") {
    return [
      "Choose seats and first player before the draft.",
      "Draft in reverse turn order: the last player picks and sets up first.",
      "Add factions here in clockwise turn order; the setup guide will reverse them for you.",
      "Use each Advanced Setup card for pieces and placement."
    ];
  }
  return [
    "Choose seats and first player at random.",
    "Put out the map, deck, ruins, items, and shared supply.",
    "Set up factions by the letter on their faction board.",
    "Setup order and turn order are separate."
  ];
}

function renderTableSetup() {
  els.setupStyleSelect.value = state.setup.style;
  els.mapSelect.value = state.setup.map;
  els.deckSelect.value = state.setup.deck;
  els.playerCountSelect.value = String(state.setup.players);

  const selected = selectedFactions();
  els.firstPlayerSelect.innerHTML = `<option value="auto">${state.setup.style === "advanced" ? "Seat one" : "Random player"}</option>`;
  selected.forEach((faction, index) => {
    const option = document.createElement("option");
    option.value = faction.id;
    option.textContent = `Seat ${index + 1}: ${faction.name}`;
    els.firstPlayerSelect.append(option);
  });
  if (!selected.some((faction) => faction.id === state.setup.firstPlayer)) state.setup.firstPlayer = "auto";
  els.firstPlayerSelect.value = state.setup.firstPlayer;

  renderList(els.gameSetupList, [
    mapNotes[state.setup.map],
    deckNotes[state.setup.deck],
    ...setupRuleNotes()
  ]);
}

function renderSetupFactions() {
  els.setupFactionList.innerHTML = "";
  const sequence = setupSequence();
  factions.forEach((faction) => {
    const selectedIndex = state.setup.factions.indexOf(faction.id);
    const setupIndex = sequence.findIndex((item) => item.id === faction.id);
    const label = document.createElement("label");
    label.className = `setup-faction${setupIndex === state.setup.stepIndex ? " active" : ""}${setupIndex >= 0 && setupIndex < state.setup.stepIndex ? " complete" : ""}`;
    label.style.setProperty("--faction", faction.color);
    label.innerHTML = `<input type="checkbox" ${selectedIndex >= 0 ? "checked" : ""}><span><strong>${faction.name}</strong><small>${faction.tags.join(" / ")}${factionMeta[faction.id].status === "preview" ? " / Preview" : ""}</small></span>${selectedIndex >= 0 ? `<b>Seat ${selectedIndex + 1}</b>` : ""}`;
    label.querySelector("input").addEventListener("change", (event) => {
      if (event.target.checked && state.setup.factions.length < state.setup.players) {
        state.setup.factions.push(faction.id);
      } else if (event.target.checked) {
        event.target.checked = false;
        return;
      } else {
        state.setup.factions = state.setup.factions.filter((id) => id !== faction.id);
      }
      clampSetupStep();
      state.setup.taskIndex = 0;
      persist();
      render();
    });
    els.setupFactionList.append(label);
  });
}

function matchupFindings() {
  const selected = selectedFactions();
  const findings = [];
  const missing = state.setup.players - selected.length;
  if (missing !== 0) findings.push({ level: "blocker", text: missing > 0 ? `${missing} seat${missing === 1 ? " is" : "s are"} still open.` : `${Math.abs(missing)} too many faction${Math.abs(missing) === 1 ? "" : "s"} selected.` });

  const knownReach = selected.map((faction) => factionMeta[faction.id].reach);
  const hasPreview = knownReach.some((reach) => reach === null);
  const reach = knownReach.filter(Number.isFinite).reduce((total, value) => total + value, 0);
  const threshold = { 2: 17, 3: 18, 4: 21, 5: 25, 6: 28 }[state.setup.players];
  if (state.setup.style === "standard" && threshold && !hasPreview && selected.length === state.setup.players && reach < threshold) {
    findings.push({ level: "caution", text: `Reach is ${reach}; ${threshold} is recommended. Expect a quieter map with less built-in policing.` });
  }
  if (hasPreview) findings.push({ level: "caution", text: "This lineup includes Homeland preview material, so its Reach total is incomplete." });

  const militant = selected.filter((faction) => faction.tags.includes("Militant")).length;
  const economic = selected.filter((faction) => faction.tags.includes("Economic")).length;
  const social = selected.filter((faction) => faction.tags.includes("Social")).length;
  const indirect = selected.filter((faction) => faction.tags.includes("Insurgent") || faction.tags.includes("Solo") || faction.tags.includes("Social")).length;
  const ids = new Set(selected.map((faction) => faction.id));
  if (state.setup.players === 2 && militant < 2) findings.push({ level: "caution", text: "Two-player Root works best when both factions can hold and contest territory." });
  if (state.setup.players >= 4 && militant === 0) findings.push({ level: "caution", text: "Nobody naturally anchors the map. Keep an eye on scoring engines that are hard to reach." });
  if (economic && state.setup.players < 3) findings.push({ level: "caution", text: "Riverfolk will have only one customer, which can make their economy brittle." });
  if (indirect > militant + 1) findings.push({ level: "unusual", text: "This table scores more easily than it polices. Someone still has to slow the leader down." });
  if (social > 1) findings.push({ level: "unusual", text: "Expect plenty of negotiation, with deals shaping turns as much as the pieces do." });
  if (ids.has("hundreds") && ids.has("vagabond")) findings.push({ level: "unusual", text: "Hundreds and Vagabond both want the items. Early access will matter." });
  if (ids.has("alliance") && ids.has("cult")) findings.push({ level: "unusual", text: "Alliance and Cult both make aggression awkward. The militant factions need to leave actions for policing." });
  if (ids.has("keepers") && ids.has("hundreds")) findings.push({ level: "unusual", text: "Keepers and Hundreds both need room to travel. The map may get cramped early." });
  if (selected.length === state.setup.players && !findings.some((item) => item.level === "blocker")) {
    findings.push({ level: "ready", text: `${militant} militant, ${indirect} indirect${hasPreview ? ", with preview material" : threshold ? `, Reach ${reach} against ${threshold} recommended` : ""}. This should give you a sense of the table, not predict the winner.` });
  }
  return findings;
}

function renderMatchup() {
  const findings = matchupFindings();
  els.matchupReport.innerHTML = findings.map(({ level, text }) => `<p class="matchup-item ${level}"><strong>${level === "blocker" ? "Required" : level === "caution" ? "Heads up" : level === "unusual" ? "Unusual" : "Lineup"}</strong><span>${text}</span></p>`).join("");
}

function factionTableConcern(faction) {
  const opponents = selectedFactions().filter((candidate) => candidate.id !== faction.id);
  const militant = opponents.filter((candidate) => candidate.tags.includes("Militant")).length;
  const insurgent = opponents.filter((candidate) => candidate.tags.includes("Insurgent")).length;
  const economic = opponents.some((candidate) => candidate.tags.includes("Economic"));

  if (faction.id === "marquise" && insurgent) return "Insurgent pieces can clog your routes and pick off exposed buildings. Keep the wood network short.";
  if (faction.id === "eyrie" && opponents.some((candidate) => candidate.id === "corvid")) return "Corvid plots can spoil a required clearing. Leave yourself another legal Decree target.";
  if (faction.id === "vagabond" && opponents.some((candidate) => candidate.id === "hundreds")) return "The Warlord wants your items. Explore and aid before the useful supply disappears.";
  if (faction.id === "riverfolk" && opponents.length < 3) return "There are not many customers here. Price for what someone needs now and keep enough funds to act yourself.";
  if (faction.id === "alliance" && militant >= 2) return "Several factions can clear sympathy. Put it on routes they cannot comfortably ignore.";
  if (economic) return "Buying from Riverfolk can launch the leader. Notice who gets the biggest turn from a purchase.";
  if (militant >= 2) return "This map will fill quickly. Keep a route open and do not become the easiest source of cardboard points.";
  if (insurgent >= 2) return "A lot of scoring here does not depend on rule. Watch engines and tokens, not just territory.";
  return faction.questions[state.phaseIndex % faction.questions.length][1];
}

function renderFactionSetup() {
  const sequence = setupSequence();
  clampSetupStep();
  const faction = sequence[state.setup.stepIndex];
  if (!faction) {
    els.setupFactionName.textContent = "Choose a lineup";
    els.setupStepStatus.textContent = "Your setup order will appear here.";
    renderList(els.factionSetupList, []);
    els.nextSetupStep.disabled = true;
    els.resetSetupSequence.disabled = true;
    els.startPlaying.disabled = true;
    return;
  }

  const profile = openingProfiles[faction.id];
  const isLast = state.setup.stepIndex === sequence.length - 1;
  const tasks = setupTasks(faction);
  state.setup.taskIndex = Math.min(state.setup.taskIndex, tasks.length - 1);
  const isLastTask = state.setup.taskIndex === tasks.length - 1;
  els.setupFactionName.textContent = faction.name;
  const publishedOrder = factionMeta[faction.id].status === "published" && profile;
  els.setupStepStatus.textContent = `${state.setup.stepIndex + 1} of ${sequence.length} factions / step ${state.setup.taskIndex + 1} of ${tasks.length} / ${state.setup.style === "advanced" ? "reverse turn order" : publishedOrder ? `setup ${profile.setupLetter}` : "use the printed setup card"}`;
  els.factionSetupList.innerHTML = tasks.map((task, index) => `<li class="${index < state.setup.taskIndex ? "complete" : index === state.setup.taskIndex ? "current" : "upcoming"}">${task}</li>`).join("");
  els.nextSetupStep.disabled = isLast && isLastTask;
  els.nextSetupStep.textContent = isLastTask ? isLast ? "Setup complete" : "Next faction" : "Done";
  els.resetSetupSequence.disabled = state.setup.stepIndex === 0 && state.setup.taskIndex === 0;
  els.startPlaying.disabled = matchupFindings().some((finding) => finding.level === "blocker") || !isLast || !isLastTask;
}

function taskKey(faction, phase, index) {
  return `${faction.id}:${phase}:${index}`;
}

function renderPlay() {
  const faction = currentFaction();
  const phases = Object.keys(faction.phases);
  state.phaseIndex = Math.min(state.phaseIndex, phases.length - 1);
  const phase = phases[state.phaseIndex];

  els.phaseTabs.innerHTML = "";
  phases.forEach((name, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `phase-tab${index === state.phaseIndex ? " active" : ""}`;
    button.style.setProperty("--phase", phaseColors[name]);
    button.textContent = name;
    button.addEventListener("click", () => { state.phaseIndex = index; persist(); render(); });
    els.phaseTabs.append(button);
  });

  els.phaseToken.style.setProperty("--phase", phaseColors[phase]);
  els.phasePrompt.textContent = phase;
  els.taskList.innerHTML = "";
  faction.phases[phase].forEach((task, index) => {
    const key = taskKey(faction, phase, index);
    const item = document.createElement("li");
    item.innerHTML = `<input id="task-${index}" type="checkbox" ${state.checks[key] ? "checked" : ""}><label for="task-${index}">${task}</label>`;
    item.querySelector("input").addEventListener("change", (event) => { state.checks[key] = event.target.checked; persist(); });
    els.taskList.append(item);
  });

  els.coreAdvice.textContent = faction.tips[0] || faction.summary;
  els.mistakeAdvice.textContent = factionMistakes[faction.id] || "Spending actions without protecting the faction's scoring engine.";
  els.matchupAdvice.textContent = factionTableConcern(faction);
  els.factionTerms.innerHTML = Object.entries(factionMeta[faction.id].terms).map(([term, meaning]) => `<dt>${term}</dt><dd>${meaning}</dd>`).join("");
  els.notes.value = localStorage.getItem(`rootHelperNotes-${state.sessionId}-${faction.id}`) || "";
  els.nextStep.textContent = state.phaseIndex === phases.length - 1 ? "Finish turn" : `Next: ${phases[state.phaseIndex + 1]}`;
}

function render() {
  const faction = currentFaction();
  const isPlay = state.mode === "play" && state.active;
  document.documentElement.style.setProperty("--accent", faction.color);
  els.setupWorkspace.hidden = isPlay;
  els.playWorkspace.hidden = !isPlay;
  els.openSetup.hidden = !state.active || !isPlay;
  els.resumeGame.hidden = !state.active || isPlay;
  els.endGame.hidden = !state.active;
  const rulesStatus = factionMeta[faction.id].status === "preview" ? "Preview rules" : "Published rules";
  els.sessionLabel.textContent = isPlay ? `${rulesStatus} / playing` : state.active ? "Setting up" : "No active game";
  els.factionName.textContent = isPlay ? faction.name : "Set up a game";
  els.factionSummary.textContent = isPlay ? faction.summary : "Pick the table, then add factions clockwise from first player.";
  renderFactions();
  if (isPlay) renderPlay();
  else {
    renderTableSetup();
    renderSetupFactions();
    renderMatchup();
    renderFactionSetup();
    const progress = document.querySelectorAll(".setup-progress span");
    const fullLineup = state.setup.factions.length === state.setup.players;
    const setupFaction = setupSequence()[state.setup.stepIndex];
    const sequenceComplete = fullLineup && setupFaction && state.setup.stepIndex === setupSequence().length - 1 && state.setup.taskIndex === setupTasks(setupFaction).length - 1;
    progress.forEach((item, index) => {
      item.classList.toggle("active", index === (fullLineup ? sequenceComplete ? 3 : 2 : state.setup.factions.length ? 1 : 0));
      item.classList.toggle("complete", index < (fullLineup ? sequenceComplete ? 3 : 2 : state.setup.factions.length ? 1 : 0));
    });
  }
}

function resetForNewGame() {
  createSession();
  state.mode = "setup";
  state.phaseIndex = 0;
  state.setup = { ...defaultSetup };
  persist();
  render();
}

els.factionFilter.addEventListener("change", (event) => { state.filter = event.target.value; renderFactions(); });
[
  [els.setupStyleSelect, "style"], [els.mapSelect, "map"], [els.deckSelect, "deck"]
].forEach(([element, key]) => element.addEventListener("change", (event) => {
  state.setup[key] = event.target.value;
  state.setup.stepIndex = 0;
  state.setup.taskIndex = 0;
  persist(); render();
}));
els.playerCountSelect.addEventListener("change", (event) => {
  state.setup.players = Number(event.target.value);
  state.setup.factions = state.setup.factions.slice(0, state.setup.players);
  state.setup.stepIndex = 0;
  state.setup.taskIndex = 0;
  persist(); render();
});
els.firstPlayerSelect.addEventListener("change", (event) => { state.setup.firstPlayer = event.target.value; persist(); });
els.nextSetupStep.addEventListener("click", () => {
  const faction = setupSequence()[state.setup.stepIndex];
  if (!faction) return;
  if (state.setup.taskIndex < setupTasks(faction).length - 1) state.setup.taskIndex += 1;
  else { state.setup.stepIndex += 1; state.setup.taskIndex = 0; }
  clampSetupStep(); persist(); render();
});
els.resetSetupSequence.addEventListener("click", () => { state.setup.stepIndex = 0; state.setup.taskIndex = 0; persist(); render(); });
els.startPlaying.addEventListener("click", () => {
  if (!state.sessionId) createSession();
  const selected = selectedFactions();
  const first = state.setup.firstPlayer === "auto" ? selected[0] : selected.find((faction) => faction.id === state.setup.firstPlayer);
  state.factionId = first?.id || selected[0]?.id || factions[0].id;
  state.phaseIndex = 0;
  state.mode = "play";
  state.active = true;
  persist(); render();
});
els.openSetup.addEventListener("click", () => { state.mode = "setup"; persist(); render(); });
els.resumeGame.addEventListener("click", () => {
  const selected = selectedFactions();
  if (selected.length && !selected.some((faction) => faction.id === state.factionId)) state.factionId = selected[0].id;
  state.mode = "play";
  persist(); render();
});
els.newGame.addEventListener("click", resetForNewGame);
els.endGame.addEventListener("click", () => { state.active = false; state.mode = "setup"; state.checks = {}; persist(); render(); });
els.nextStep.addEventListener("click", () => {
  const phases = Object.keys(currentFaction().phases);
  const finishedTurn = state.phaseIndex === phases.length - 1;
  state.phaseIndex = (state.phaseIndex + 1) % phases.length;
  if (finishedTurn) {
    const prefix = `${state.factionId}:`;
    Object.keys(state.checks).filter((key) => key.startsWith(prefix)).forEach((key) => delete state.checks[key]);
  }
  persist(); render();
});
els.resetTurn.addEventListener("click", () => {
  const prefix = `${state.factionId}:`;
  Object.keys(state.checks).filter((key) => key.startsWith(prefix)).forEach((key) => delete state.checks[key]);
  state.phaseIndex = 0;
  persist(); render();
});
els.notes.addEventListener("input", () => localStorage.setItem(`rootHelperNotes-${state.sessionId}-${state.factionId}`, els.notes.value));

loadChecks();
render();
