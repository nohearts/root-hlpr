const {
  factions,
  phaseColors,
  mapNotes,
  deckNotes,
  factionSetup,
  openingProfiles
} = window.ROOT_DATA;

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

const defaultSetup = {
  style: "standard",
  map: "autumn",
  deck: "exiles",
  players: 4,
  factions: [],
  firstPlayer: "auto",
  stepIndex: 0
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
  "openSetup", "newGame", "endGame", "setupWorkspace", "playWorkspace",
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
  factions
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
      "Determine clockwise seating and first player before drafting.",
      "Draft factions in reverse turn order; the last player chooses and sets up first.",
      "This helper uses the selected clockwise lineup and guides setup in reverse order.",
      "Follow each Advanced Setup card for exact placement and starting pieces."
    ];
  }
  return [
    "Determine seating and first player randomly.",
    "Prepare the shared map, deck, ruins, items, and supply.",
    "Set up selected factions by the letter printed on their faction board.",
    "Faction setup order does not determine which faction takes the first turn."
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
    label.innerHTML = `<input type="checkbox" ${selectedIndex >= 0 ? "checked" : ""}><span><strong>${faction.name}</strong><small>${faction.tags.join(" · ")}${factionMeta[faction.id].status === "preview" ? " · Preview" : ""}</small></span>${selectedIndex >= 0 ? `<b>Seat ${selectedIndex + 1}</b>` : ""}`;
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
  if (missing !== 0) findings.push({ level: "blocker", text: missing > 0 ? `Choose ${missing} more faction${missing === 1 ? "" : "s"}.` : `Remove ${Math.abs(missing)} faction${Math.abs(missing) === 1 ? "" : "s"}.` });

  const knownReach = selected.map((faction) => factionMeta[faction.id].reach);
  const hasPreview = knownReach.some((reach) => reach === null);
  const reach = knownReach.filter(Number.isFinite).reduce((total, value) => total + value, 0);
  const threshold = { 2: 17, 3: 18, 4: 21 }[state.setup.players];
  if (state.setup.style === "standard" && threshold && !hasPreview && selected.length === state.setup.players && reach < threshold) {
    findings.push({ level: "caution", text: `Combined Reach is ${reach}; the published recommendation for ${state.setup.players} players is ${threshold}.` });
  }
  if (hasPreview) findings.push({ level: "caution", text: "Homeland preview factions do not yet have verified Reach values here; use their final setup materials." });

  const militant = selected.filter((faction) => faction.tags.includes("Militant")).length;
  const economic = selected.filter((faction) => faction.tags.includes("Economic")).length;
  const social = selected.filter((faction) => faction.tags.includes("Social")).length;
  const indirect = selected.filter((faction) => faction.tags.includes("Insurgent") || faction.tags.includes("Solo") || faction.tags.includes("Social")).length;
  const ids = new Set(selected.map((faction) => faction.id));
  if (state.setup.players === 2 && militant < 2) findings.push({ level: "caution", text: "Two-player games are most reliable with two militant, board-heavy factions." });
  if (state.setup.players >= 4 && militant === 0) findings.push({ level: "caution", text: "No militant faction: policing and clearing control may be unusually loose." });
  if (economic && state.setup.players < 3) findings.push({ level: "caution", text: "Riverfolk has few potential customers at a two-player table." });
  if (indirect > militant + 1) findings.push({ level: "unusual", text: "Indirect-heavy lineup: agree that every player is responsible for policing runaway scoring." });
  if (social > 1) findings.push({ level: "unusual", text: "Multiple social factions may create a negotiation-heavy game with less predictable incentives." });
  if (ids.has("hundreds") && ids.has("vagabond")) findings.push({ level: "unusual", text: "Hundreds and Vagabond compete sharply for items; item access may decide their tempo early." });
  if (ids.has("alliance") && ids.has("cult")) findings.push({ level: "unusual", text: "Alliance and Cult both punish careless aggression; board-heavy factions should budget actions for policing." });
  if (ids.has("keepers") && ids.has("hundreds")) findings.push({ level: "unusual", text: "Keepers and Hundreds both demand space and movement lanes; expect early clearing congestion." });
  if (selected.length === state.setup.players && !findings.some((item) => item.level === "blocker")) {
    findings.push({ level: "ready", text: `${militant} militant, ${indirect} indirect${hasPreview ? ", with preview rules in use" : threshold ? `, Reach ${reach}` : ""}. This describes the table; it does not promise balance.` });
  }
  return findings;
}

function renderMatchup() {
  const findings = matchupFindings();
  els.matchupReport.innerHTML = findings.map(({ level, text }) => `<p class="matchup-item ${level}"><strong>${level === "blocker" ? "Required" : level === "caution" ? "Check" : level === "unusual" ? "Unusual" : "Table read"}</strong><span>${text}</span></p>`).join("");
}

function factionTableConcern(faction) {
  const opponents = selectedFactions().filter((candidate) => candidate.id !== faction.id);
  const militant = opponents.filter((candidate) => candidate.tags.includes("Militant")).length;
  const insurgent = opponents.filter((candidate) => candidate.tags.includes("Insurgent")).length;
  const economic = opponents.some((candidate) => candidate.tags.includes("Economic"));

  if (faction.id === "marquise" && insurgent) return "Protect action efficiency: insurgent pieces can tax movement and turn exposed buildings into easy pressure points.";
  if (faction.id === "eyrie" && opponents.some((candidate) => candidate.id === "corvid")) return "Keep alternate Decree targets available; plots can make a single required clearing unreliable.";
  if (faction.id === "vagabond" && opponents.some((candidate) => candidate.id === "hundreds")) return "Items are contested. Explore and aid with a plan before the Warlord can claim the useful supply.";
  if (faction.id === "riverfolk" && opponents.length < 3) return "With few customers, price services for actual immediate needs and preserve funds for your own actions.";
  if (faction.id === "alliance" && militant >= 2) return "Several factions can police sympathy. Spread where outrage disrupts routes rather than where removal is merely expensive.";
  if (economic) return "Riverfolk services can accelerate the leader. Check who can buy and whether that purchase changes your own policing plan.";
  if (militant >= 2) return "This is a board-heavy table. Preserve movement lanes and avoid becoming the easiest source of cardboard points.";
  if (insurgent >= 2) return "This table can score without holding much territory. Track engines and tokens, not only clearing rule.";
  return faction.questions[state.phaseIndex % faction.questions.length][1];
}

function renderFactionSetup() {
  const sequence = setupSequence();
  clampSetupStep();
  const faction = sequence[state.setup.stepIndex];
  if (!faction) {
    els.setupFactionName.textContent = "Choose a lineup";
    els.setupStepStatus.textContent = "Faction setup will appear in rules order.";
    renderList(els.factionSetupList, []);
    els.nextSetupStep.disabled = true;
    els.resetSetupSequence.disabled = true;
    els.startPlaying.disabled = true;
    return;
  }

  const profile = openingProfiles[faction.id];
  const isLast = state.setup.stepIndex === sequence.length - 1;
  els.setupFactionName.textContent = faction.name;
  const publishedOrder = factionMeta[faction.id].status === "published" && profile;
  els.setupStepStatus.textContent = `Faction ${state.setup.stepIndex + 1} of ${sequence.length} · ${state.setup.style === "advanced" ? "reverse seating order" : publishedOrder ? `printed setup ${profile.setupLetter}` : "verify the printed setup card"}`;
  renderList(els.factionSetupList, [
    "Read the faction board or Advanced Setup card before placing pieces.",
    ...(factionSetup[faction.id] || ["Follow the printed faction setup instructions."]),
    "Confirm all tracks, cards, and faction supplies are ready before continuing."
  ]);
  els.nextSetupStep.disabled = isLast;
  els.nextSetupStep.textContent = isLast ? "Setup sequence complete" : "Next faction";
  els.resetSetupSequence.disabled = state.setup.stepIndex === 0;
  els.startPlaying.disabled = matchupFindings().some((finding) => finding.level === "blocker") || !isLast;
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
  els.mistakeAdvice.textContent = faction.tips[1] || "Do not spend actions without protecting your scoring engine.";
  els.matchupAdvice.textContent = factionTableConcern(faction);
  els.factionTerms.innerHTML = Object.entries(factionMeta[faction.id].terms).map(([term, meaning]) => `<dt>${term}</dt><dd>${meaning}</dd>`).join("");
  els.notes.value = localStorage.getItem(`rootHelperNotes-${state.sessionId}-${faction.id}`) || "";
}

function render() {
  const faction = currentFaction();
  const isPlay = state.mode === "play" && state.active;
  document.documentElement.style.setProperty("--accent", faction.color);
  els.setupWorkspace.hidden = isPlay;
  els.playWorkspace.hidden = !isPlay;
  els.openSetup.hidden = !state.active || !isPlay;
  els.endGame.hidden = !state.active;
  const rulesStatus = factionMeta[faction.id].status === "preview" ? "Preview guidance" : "Published faction guide";
  els.sessionLabel.textContent = isPlay ? `${rulesStatus} · game in progress` : state.active ? "Setup in progress" : "No active game";
  els.factionName.textContent = isPlay ? faction.name : "Build your game";
  els.factionSummary.textContent = isPlay ? faction.summary : "Choose a map, deck, and clockwise faction lineup.";
  renderFactions();
  if (isPlay) renderPlay();
  else {
    renderTableSetup();
    renderSetupFactions();
    renderMatchup();
    renderFactionSetup();
    const progress = document.querySelectorAll(".setup-progress span");
    const fullLineup = state.setup.factions.length === state.setup.players;
    const sequenceComplete = fullLineup && state.setup.stepIndex === Math.max(0, setupSequence().length - 1);
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
].forEach(([element, key]) => element.addEventListener("change", (event) => { state.setup[key] = event.target.value; state.setup.stepIndex = 0; persist(); render(); }));
els.playerCountSelect.addEventListener("change", (event) => {
  state.setup.players = Number(event.target.value);
  state.setup.factions = state.setup.factions.slice(0, state.setup.players);
  state.setup.stepIndex = 0;
  persist(); render();
});
els.firstPlayerSelect.addEventListener("change", (event) => { state.setup.firstPlayer = event.target.value; persist(); });
els.nextSetupStep.addEventListener("click", () => { state.setup.stepIndex += 1; clampSetupStep(); persist(); render(); });
els.resetSetupSequence.addEventListener("click", () => { state.setup.stepIndex = 0; persist(); render(); });
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
els.newGame.addEventListener("click", resetForNewGame);
els.endGame.addEventListener("click", () => { state.active = false; state.mode = "setup"; state.checks = {}; persist(); render(); });
els.nextStep.addEventListener("click", () => {
  const phases = Object.keys(currentFaction().phases);
  state.phaseIndex = (state.phaseIndex + 1) % phases.length;
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
