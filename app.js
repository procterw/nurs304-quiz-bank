const state = {
  questions: [],
  filtered: [],
  currentId: null,
  answers: new Map(),
  checked: new Set(),
};

const medicalTerms = {
  "ace inhibitor": "A drug class that blocks conversion of angiotensin I to angiotensin II, lowering vasoconstriction and aldosterone effects.",
  acetaminophen: "A non-opioid analgesic and antipyretic used for pain and fever; it has limited anti-inflammatory activity.",
  acidosis: "A blood pH disturbance where acid is increased or base is decreased, lowering pH below the normal range.",
  adrenergic: "Related to sympathetic nervous system signaling through norepinephrine or epinephrine receptors.",
  afterload: "The pressure or resistance the ventricle must overcome to eject blood.",
  albumin: "The major plasma protein that helps maintain oncotic pressure and binds many medications in the bloodstream.",
  albuterol: "A short-acting beta-2 agonist used as a rescue bronchodilator for acute bronchospasm.",
  alkalosis: "A blood pH disturbance where base is increased or acid is decreased, raising pH above the normal range.",
  alveoli: "Small air sacs in the lungs where oxygen and carbon dioxide exchange occurs.",
  anemia: "A reduced red blood cell mass or hemoglobin level that lowers oxygen-carrying capacity.",
  angioedema: "Rapid swelling of deeper skin or mucosal tissues; ACE inhibitors can rarely cause airway-threatening angioedema.",
  antihistamine: "A drug that blocks histamine receptors to reduce allergic symptoms such as itching, sneezing, and rhinorrhea.",
  arrhythmia: "An abnormal heart rhythm caused by altered impulse formation or conduction.",
  asthma: "A chronic inflammatory airway disease marked by reversible bronchoconstriction, wheeze, and dyspnea.",
  atelectasis: "Collapse or incomplete expansion of alveoli, reducing ventilation in affected lung tissue.",
  atorvastatin: "A statin that inhibits HMG-CoA reductase to lower LDL cholesterol and cardiovascular risk.",
  "atrial fibrillation": "An irregular atrial rhythm that reduces atrial kick and increases thromboembolic stroke risk.",
  "atrial flutter": "A rapid atrial tachyarrhythmia often associated with a sawtooth waveform on ECG.",
  "av node": "The atrioventricular node delays electrical conduction between atria and ventricles.",
  basophil: "A granulocyte involved in allergic and hypersensitivity responses through histamine release.",
  "beta blocker": "A drug class that blocks beta-adrenergic receptors to reduce heart rate, contractility, and blood pressure.",
  bicarbonate: "A major base in the bicarbonate-carbonic acid buffer system that helps regulate blood pH.",
  bradycardia: "A slower-than-normal heart rate, commonly defined in adults as below 60 beats per minute.",
  bronchiectasis: "Permanent bronchial dilation usually caused by chronic infection and inflammation.",
  bronchodilation: "Widening of the airways, usually by relaxation of bronchial smooth muscle.",
  bronchospasm: "Constriction of bronchial smooth muscle that narrows airways and increases work of breathing.",
  "bun": "Blood urea nitrogen, a kidney function marker that rises when renal clearance falls or protein breakdown increases.",
  calcium: "An electrolyte important for bone structure, neuromuscular signaling, clotting, and cardiac function.",
  carvedilol: "A nonselective beta blocker with alpha-1 blocking effects used in heart failure and hypertension.",
  chemotaxis: "Directed movement of immune cells toward chemical signals at an injury or infection site.",
  "chronic bronchitis": "A COPD phenotype with chronic productive cough from mucus hypersecretion and airway inflammation.",
  "chronic kidney disease": "Progressive, long-term reduction in kidney function, often related to diabetes or hypertension.",
  copd: "Chronic obstructive pulmonary disease, commonly emphysema or chronic bronchitis, with persistent airflow limitation.",
  creatinine: "A muscle metabolism waste product used as a marker of kidney filtration.",
  cyanosis: "Bluish discoloration of skin or mucous membranes caused by reduced oxygenation.",
  diabetes: "A metabolic disease involving impaired insulin secretion, insulin action, or both, causing hyperglycemia.",
  diffusion: "Passive movement of molecules from higher to lower concentration; alveolar gas exchange occurs by diffusion.",
  digoxin: "A cardiac glycoside that increases contractility and slows AV nodal conduction; toxicity risk rises with bradycardia and electrolyte imbalance.",
  diuretic: "A medication that increases urine output by altering kidney sodium and water handling.",
  dyspnea: "Subjective shortness of breath or difficulty breathing.",
  ecg: "Electrocardiogram, a surface recording of the heart's electrical activity.",
  edema: "Excess fluid accumulation in interstitial tissues.",
  emphysema: "A COPD phenotype involving alveolar wall destruction, air trapping, and reduced elastic recoil.",
  epinephrine: "A catecholamine that stimulates alpha and beta receptors; used for anaphylaxis and severe shock states.",
  erythrocyte: "A red blood cell that carries oxygen through hemoglobin.",
  erythropoietin: "A kidney-produced hormone that stimulates red blood cell production in bone marrow.",
  excretion: "Removal of drugs or waste products from the body, commonly through the kidneys.",
  "first-pass metabolism": "Presystemic drug metabolism in the gut wall or liver before a drug reaches systemic circulation.",
  fluticasone: "An inhaled corticosteroid used for long-term control of airway inflammation.",
  furosemide: "A loop diuretic used for rapid fluid removal in edema, heart failure, and pulmonary edema.",
  granulocyte: "A white blood cell with cytoplasmic granules, including neutrophils, eosinophils, and basophils.",
  hematocrit: "The percentage of blood volume occupied by red blood cells.",
  hematopoiesis: "The production and development of blood cells, primarily in bone marrow.",
  hemoglobin: "The oxygen-carrying protein inside red blood cells.",
  histamine: "An inflammatory mediator released by mast cells and basophils that causes vasodilation, permeability, itching, and bronchoconstriction.",
  hydrochlorothiazide: "A thiazide diuretic used for hypertension and mild edema; it can lower potassium.",
  hypercalcemia: "An elevated serum calcium level that can cause weakness, lethargy, constipation, and cardiac rhythm changes.",
  hyperkalemia: "An elevated serum potassium level that can cause dangerous cardiac conduction changes.",
  hypertension: "Persistently elevated blood pressure that increases risk for heart, kidney, brain, and vascular damage.",
  hypokalemia: "A low serum potassium level that can cause muscle weakness and cardiac rhythm changes.",
  hypomagnesemia: "A low serum magnesium level, often associated with alcohol use disorder, GI loss, or renal wasting.",
  hypoxemia: "Low oxygen level in arterial blood.",
  inflammation: "A protective response to injury or infection involving vascular changes and immune-cell recruitment.",
  ipratropium: "A short-acting muscarinic antagonist that reduces bronchoconstriction by blocking airway muscarinic receptors.",
  ischemia: "Reduced blood flow and oxygen delivery to tissue.",
  leukocyte: "A white blood cell involved in immune defense.",
  leukotriene: "An inflammatory mediator that contributes to bronchoconstriction, mucus production, and airway edema.",
  lisinopril: "An ACE inhibitor used for hypertension, heart failure, and kidney protection in selected patients.",
  lymphocyte: "A white blood cell involved in adaptive immunity, including B cells, T cells, and natural killer cells.",
  magnesium: "An electrolyte important for neuromuscular function, enzyme activity, and cardiac rhythm stability.",
  mannitol: "An osmotic diuretic given intravenously to pull fluid into the vascular space and promote diuresis.",
  metformin: "A biguanide antihyperglycemic drug that lowers hepatic glucose production and improves insulin sensitivity.",
  methotrexate: "An antimetabolite immunosuppressant used in rheumatoid arthritis and some cancers.",
  metoprolol: "A beta-1 selective blocker used for hypertension, angina, rate control, and heart failure indications.",
  monoclonal: "Related to an antibody product designed to bind a specific target antigen.",
  montelukast: "A leukotriene receptor antagonist used for asthma maintenance and allergic rhinitis; it carries neuropsychiatric warning concerns.",
  mucosal: "Related to a mucus-secreting membrane lining body passages such as the GI or respiratory tract.",
  nephron: "The kidney's functional filtration unit.",
  nephrotoxic: "Capable of causing kidney injury.",
  neutrophil: "The most numerous granulocyte and a key phagocyte in acute bacterial infection.",
  nitroglycerin: "A nitrate vasodilator that reduces preload and myocardial oxygen demand, often used for angina.",
  norepinephrine: "A catecholamine vasopressor that strongly stimulates alpha receptors and raises blood pressure.",
  perfusion: "Blood flow through tissue or an organ.",
  phagocytosis: "Cellular engulfment and digestion of particles, microbes, or debris.",
  platelet: "A blood cell fragment involved in clot formation; also called a thrombocyte.",
  potassium: "A major intracellular electrolyte essential for nerve, muscle, and cardiac electrical function.",
  preload: "Ventricular stretch at the end of diastole, related to venous return and filling volume.",
  "pulmonary edema": "Fluid accumulation in lung interstitium or alveoli, often from left-sided heart failure.",
  "renal": "Related to the kidneys.",
  respiration: "Gas exchange involving oxygen uptake and carbon dioxide removal at the lungs or tissues.",
  salmeterol: "A long-acting beta-2 agonist used for maintenance bronchodilation, not rescue therapy.",
  "sa node": "The sinoatrial node, the normal pacemaker of the heart.",
  sodium: "A major extracellular electrolyte central to fluid balance, nerve conduction, and blood pressure regulation.",
  spironolactone: "A potassium-sparing aldosterone antagonist used in heart failure and selected resistant hypertension or edema states.",
  statin: "A cholesterol-lowering drug class that inhibits HMG-CoA reductase.",
  surfactant: "A substance that lowers alveolar surface tension and helps keep alveoli open.",
  tachycardia: "A faster-than-normal heart rate, commonly above 100 beats per minute in adults.",
  thrombocyte: "Another name for a platelet, a cell fragment involved in clotting.",
  tidal: "Related to tidal volume, the amount of air inhaled or exhaled in a normal breath.",
  ventilation: "Movement of air into and out of the respiratory tract.",
  vasoconstriction: "Narrowing of blood vessels due to smooth muscle contraction.",
  wheezing: "A high-pitched breath sound caused by narrowed airways.",
};

const el = {
  topic: document.getElementById("topicFilter"),
  category: document.getElementById("categoryFilter"),
  emptyState: document.getElementById("emptyState"),
  questionCard: document.getElementById("questionCard"),
  questionMeta: document.getElementById("questionMeta"),
  questionStem: document.getElementById("questionStem"),
  answerForm: document.getElementById("answerForm"),
  feedback: document.getElementById("feedback"),
  definitionStatus: document.getElementById("definitionStatus"),
  definitionList: document.getElementById("definitionList"),
  random: document.getElementById("randomButton"),
  clear: document.getElementById("clearButton"),
  next: document.getElementById("nextButton"),
};

const filters = [el.topic, el.category];

async function init() {
  try {
    const response = await fetch("data/questions.json");
    if (!response.ok) throw new Error(`Question data returned ${response.status}`);
    state.questions = await response.json();
    state.filtered = [...state.questions];
    buildFilters();
    bindEvents();
    applyFilters();
  } catch (error) {
    el.emptyState.innerHTML = `
      <h2>Question data did not load</h2>
      <p>Run this folder from a local server or GitHub Pages so the app can fetch data/questions.json.</p>
    `;
    console.error(error);
  }
}

function bindEvents() {
  filters.forEach((filter) => filter.addEventListener("input", applyFilters));
  el.random.addEventListener("click", selectRandom);
  el.clear.addEventListener("click", clearAnswer);
  el.next.addEventListener("click", selectNext);
}

function buildFilters() {
  fillSelect(el.topic, "All topics", state.questions.map((q) => q.topic));
  fillSelect(el.category, "All categories", state.questions.map((q) => q.category));
}

function fillSelect(select, label, values) {
  select.innerHTML = "";
  select.append(new Option(label, ""));

  [...new Set(values.filter(Boolean).map(String))]
    .sort((a, b) => a.localeCompare(b))
    .forEach((value) => select.append(new Option(value, value)));
}

function applyFilters() {
  const selected = {
    topic: el.topic.value,
    category: el.category.value,
  };

  state.filtered = state.questions.filter((question) => {
    if (selected.topic && question.topic !== selected.topic) return false;
    if (selected.category && question.category !== selected.category) return false;
    return true;
  });

  if (!state.filtered.some((question) => question.id === state.currentId)) {
    state.currentId = state.filtered[0]?.id ?? null;
  }

  render();
}

function render() {
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const question = getCurrentQuestion();
  el.feedback.className = "feedback hidden";
  el.feedback.innerHTML = "";

  if (!question) {
    el.emptyState.classList.remove("hidden");
    el.questionCard.classList.add("hidden");
    renderDefinitions(null);
    return;
  }

  el.emptyState.classList.add("hidden");
  el.questionCard.classList.remove("hidden");
  el.questionMeta.textContent = [
    question.topic,
    question.system,
    question.category,
    question.type,
    question.difficulty,
    question.drug ? `Drug: ${question.drug}` : null,
  ]
    .filter(Boolean)
    .join(" · ");
  el.questionStem.textContent = question.stem;
  renderDefinitions(question);

  const selected = state.answers.get(question.id) ?? new Set();
  const inputType = question.type === "Multiple Answer" ? "checkbox" : "radio";
  el.answerForm.innerHTML = "";

  question.options.forEach((option, index) => {
    const id = `${question.id}-${index}`;
    const label = document.createElement("label");
    label.className = "answer-option";
    label.innerHTML = `
      <input id="${id}" name="${question.id}" type="${inputType}" value="${escapeHtml(option)}" ${selected.has(option) ? "checked" : ""}>
      <span>${escapeHtml(option)}</span>
    `;
    label.querySelector("input").addEventListener("change", (event) => {
      storeAnswer(question, event);
      showAnswer(question);
    });
    el.answerForm.append(label);
  });

  if (state.checked.has(question.id)) {
    showAnswer(question, false);
  }
}

function storeAnswer(question, event) {
  const selected = question.type === "Multiple Answer"
    ? new Set(state.answers.get(question.id) ?? [])
    : new Set();

  if (event.target.checked) {
    selected.add(event.target.value);
  } else {
    selected.delete(event.target.value);
  }

  state.answers.set(question.id, selected);
}

function showAnswer(question, updateMetrics = true) {
  const selected = state.answers.get(question.id) ?? new Set();
  const correct = new Set(question.correctAnswers);
  const isCorrect = setsMatch(selected, correct);
  state.checked.add(question.id);

  [...el.answerForm.querySelectorAll(".answer-option")].forEach((label) => {
    const value = label.querySelector("input").value;
    label.classList.add("revealed");
    label.classList.toggle("correct", correct.has(value));
    label.classList.toggle("incorrect", selected.has(value) && !correct.has(value));
  });

  el.feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  el.feedback.innerHTML = `
    <strong>${isCorrect ? "Correct" : "Review this one"}</strong>
    <div><b>Answer:</b> ${question.correctAnswers.map(escapeHtml).join("; ")}</div>
    <div><b>Rationale:</b> ${escapeHtml(question.rationale)}</div>
  `;
  if (updateMetrics) {
    renderDefinitions(question);
  }
}

function clearAnswer() {
  const question = getCurrentQuestion();
  if (!question) return;
  state.answers.delete(question.id);
  state.checked.delete(question.id);
  render();
}

function selectNext() {
  if (state.filtered.length === 0) return;
  const index = state.filtered.findIndex((question) => question.id === state.currentId);
  const nextIndex = index === -1 ? 0 : (index + 1) % state.filtered.length;
  state.currentId = state.filtered[nextIndex].id;
  render();
}

function selectRandom() {
  if (state.filtered.length === 0) return;
  const index = Math.floor(Math.random() * state.filtered.length);
  state.currentId = state.filtered[index].id;
  render();
}

function getCurrentQuestion() {
  return state.questions.find((question) => question.id === state.currentId);
}

function renderDefinitions(question) {
  el.definitionList.innerHTML = "";

  if (!question) {
    el.definitionStatus.textContent = "0 terms";
    el.definitionList.innerHTML = `<p class="definition-empty">No active question.</p>`;
    return;
  }

  const terms = findMedicalTerms(question);
  el.definitionStatus.textContent = `${terms.length} ${terms.length === 1 ? "term" : "terms"}`;

  if (terms.length === 0) {
    el.definitionList.innerHTML = `<p class="definition-empty">No glossary terms detected in this question.</p>`;
    return;
  }

  terms.forEach(([term, definition]) => {
    const item = document.createElement("article");
    item.className = "definition-item";
    item.innerHTML = `
      <h3>${escapeHtml(toTitleCase(term))}</h3>
      <p>${escapeHtml(definition)}</p>
    `;
    el.definitionList.append(item);
  });
}

function findMedicalTerms(question) {
  const text = [
    question.stem,
    question.topic,
    question.system,
    question.drug,
    ...question.options,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return Object.entries(medicalTerms)
    .filter(([term]) => new RegExp(`\\b${escapeRegExp(term)}\\b`, "i").test(text))
    .sort(([a], [b]) => a.localeCompare(b));
}

function setsMatch(a, b) {
  if (a.size !== b.size) return false;
  return [...a].every((value) => b.has(value));
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function toTitleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
