const state = {
  questions: [],
  filtered: [],
  currentId: null,
  renderedQuestionId: null,
  definitionsVisible: false,
  answers: new Map(),
  answered: {},
};

const ANSWERED_STORAGE_KEY = "nurs304-answered-results-v3";

const medicalTerms = {
  "ace inhibitor": "A drug class that blocks conversion of angiotensin I to angiotensin II, lowering vasoconstriction and aldosterone effects.",
  acetaminophen: "A non-opioid analgesic and antipyretic used for pain and fever; it has limited anti-inflammatory activity.",
  acidosis: "A blood pH disturbance where acid is increased or base is decreased, lowering pH below the normal range.",
  adrenergic: "Related to sympathetic nervous system signaling through norepinephrine or epinephrine receptors.",
  "adrenergic agonist": "A medication that stimulates adrenergic receptors, often affecting heart rate, blood vessels, bronchi, or blood pressure depending on the receptor targeted.",
  afterload: "The pressure or resistance the ventricle must overcome to eject blood.",
  "aldosterone antagonist": "A medication class that blocks aldosterone effects, promoting sodium/water loss while tending to retain potassium.",
  albumin: "The major plasma protein that helps maintain oncotic pressure and binds many medications in the bloodstream.",
  albuterol: "A short-acting beta-2 agonist used as a rescue bronchodilator for acute bronchospasm.",
  alkalosis: "A blood pH disturbance where base is increased or acid is decreased, raising pH above the normal range.",
  alveoli: "Small air sacs in the lungs where oxygen and carbon dioxide exchange occurs.",
  amiodarone: "A potassium channel blocker antiarrhythmic used for serious rhythm disturbances; course materials flag special considerations such as thyroid concerns.",
  anemia: "A reduced red blood cell mass or hemoglobin level that lowers oxygen-carrying capacity.",
  angioedema: "Rapid swelling of deeper skin or mucosal tissues; ACE inhibitors can rarely cause airway-threatening angioedema.",
  antibiotic: "A medication used to treat bacterial infection; selection depends on likely organism, allergies, site of infection, and safety factors.",
  antihistamine: "A drug that blocks histamine receptors to reduce allergic symptoms such as itching, sneezing, and rhinorrhea.",
  antiplatelet: "A medication that reduces platelet aggregation and helps prevent arterial clot formation.",
  arrhythmia: "An abnormal heart rhythm caused by altered impulse formation or conduction.",
  aspirin: "An antiplatelet medication used in cardiovascular disease to reduce platelet aggregation.",
  asthma: "A chronic inflammatory airway disease marked by reversible bronchoconstriction, wheeze, and dyspnea.",
  atelectasis: "Collapse or incomplete expansion of alveoli, reducing ventilation in affected lung tissue.",
  atorvastatin: "A statin that inhibits HMG-CoA reductase to lower LDL cholesterol and cardiovascular risk.",
  "atrial fibrillation": "An irregular atrial rhythm that reduces atrial kick and increases thromboembolic stroke risk.",
  "atrial flutter": "A rapid atrial tachyarrhythmia often associated with a sawtooth waveform on ECG.",
  "av node": "The atrioventricular node delays electrical conduction between atria and ventricles.",
  basophil: "A granulocyte involved in allergic and hypersensitivity responses through histamine release.",
  "beta 2 agonist": "A bronchodilator class that stimulates beta-2 receptors in airway smooth muscle; short-acting agents like albuterol are rescue medications.",
  "beta blocker": "A drug class that blocks beta-adrenergic receptors to reduce heart rate, contractility, and blood pressure.",
  "beta-adrenergic blocker": "A beta blocker; this class reduces sympathetic beta-receptor effects and requires attention to heart rate and blood pressure.",
  bicarbonate: "A major base in the bicarbonate-carbonic acid buffer system that helps regulate blood pH.",
  bisacodyl: "A stimulant laxative/cathartic used to promote bowel movement.",
  bradycardia: "A slower-than-normal heart rate, commonly defined in adults as below 60 beats per minute.",
  bronchiectasis: "Permanent bronchial dilation usually caused by chronic infection and inflammation.",
  bronchodilation: "Widening of the airways, usually by relaxation of bronchial smooth muscle.",
  bronchospasm: "Constriction of bronchial smooth muscle that narrows airways and increases work of breathing.",
  "bun": "Blood urea nitrogen, a kidney function marker that rises when renal clearance falls or protein breakdown increases.",
  calcium: "An electrolyte important for bone structure, neuromuscular signaling, clotting, and cardiac function.",
  "calcium channel blocker": "A cardiovascular medication class that blocks calcium entry into cells; some agents primarily affect vessels and others affect heart rate/contractility.",
  carvedilol: "A nonselective beta blocker with alpha-1 blocking effects used in heart failure and hypertension.",
  chemotaxis: "Directed movement of immune cells toward chemical signals at an injury or infection site.",
  "chronic bronchitis": "A COPD phenotype with chronic productive cough from mucus hypersecretion and airway inflammation.",
  "chronic kidney disease": "Progressive, long-term reduction in kidney function, often related to diabetes or hypertension.",
  copd: "Chronic obstructive pulmonary disease, commonly emphysema or chronic bronchitis, with persistent airflow limitation.",
  creatinine: "A muscle metabolism waste product used as a marker of kidney filtration.",
  cyanosis: "Bluish discoloration of skin or mucous membranes caused by reduced oxygenation.",
  diabetes: "A metabolic disease involving impaired insulin secretion, insulin action, or both, causing hyperglycemia.",
  "diabetes mellitus": "A disorder of glucose regulation caused by impaired insulin secretion, insulin action, or both.",
  diffusion: "Passive movement of molecules from higher to lower concentration; alveolar gas exchange occurs by diffusion.",
  diltiazem: "A nondihydropyridine calcium channel blocker that can affect heart rate and contractility.",
  digoxin: "A cardiac glycoside that increases contractility and slows AV nodal conduction; toxicity risk rises with bradycardia and electrolyte imbalance.",
  diphenhydramine: "A first-generation antihistamine with sedating and anticholinergic effects such as dry mouth, urinary retention, and blurred vision.",
  diuretic: "A medication that increases urine output by altering kidney sodium and water handling.",
  dobutamine: "A beta-adrenergic agonist/inotrope used in selected shock or low cardiac output states to support contractility.",
  dopamine: "A vasoactive medication that can support blood pressure and cardiac output depending on dose and clinical context.",
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
  formoterol: "A long-acting beta-2 agonist used for maintenance bronchodilation, not as sole rescue therapy for asthma.",
  furosemide: "A loop diuretic used for rapid fluid removal in edema, heart failure, and pulmonary edema.",
  granulocyte: "A white blood cell with cytoplasmic granules, including neutrophils, eosinophils, and basophils.",
  hematocrit: "The percentage of blood volume occupied by red blood cells.",
  hematopoiesis: "The production and development of blood cells, primarily in bone marrow.",
  hemoglobin: "The oxygen-carrying protein inside red blood cells.",
  "heparin": "An anticoagulant that increases antithrombin activity to reduce clot formation.",
  histamine: "An inflammatory mediator released by mast cells and basophils that causes vasodilation, permeability, itching, and bronchoconstriction.",
  hydrochlorothiazide: "A thiazide diuretic used for hypertension and mild edema; it can lower potassium.",
  hypercalcemia: "An elevated serum calcium level that can cause weakness, lethargy, constipation, and cardiac rhythm changes.",
  hyperkalemia: "An elevated serum potassium level that can cause dangerous cardiac conduction changes.",
  hypertension: "Persistently elevated blood pressure that increases risk for heart, kidney, brain, and vascular damage.",
  hypokalemia: "A low serum potassium level that can cause muscle weakness and cardiac rhythm changes.",
  hypomagnesemia: "A low serum magnesium level, often associated with alcohol use disorder, GI loss, or renal wasting.",
  hypoxemia: "Low oxygen level in arterial blood.",
  inflammation: "A protective response to injury or infection involving vascular changes and immune-cell recruitment.",
  insulin: "A hormone and medication that lowers blood glucose by promoting cellular glucose uptake and storage.",
  ipratropium: "A short-acting muscarinic antagonist that reduces bronchoconstriction by blocking airway muscarinic receptors.",
  ischemia: "Reduced blood flow and oxygen delivery to tissue.",
  leukocyte: "A white blood cell involved in immune defense.",
  leukotriene: "An inflammatory mediator that contributes to bronchoconstriction, mucus production, and airway edema.",
  lisinopril: "An ACE inhibitor used for hypertension, heart failure, and kidney protection in selected patients.",
  loperamide: "An antidiarrheal medication that slows intestinal motility and is used only when appropriate for the cause of diarrhea.",
  lymphocyte: "A white blood cell involved in adaptive immunity, including B cells, T cells, and natural killer cells.",
  lymphocytes: "White blood cells involved in adaptive immunity, including B cells, T cells, and natural killer cells.",
  magnesium: "An electrolyte important for neuromuscular function, enzyme activity, and cardiac rhythm stability.",
  mannitol: "An osmotic diuretic given intravenously to pull fluid into the vascular space and promote diuresis.",
  metformin: "A biguanide antihyperglycemic drug that lowers hepatic glucose production and improves insulin sensitivity.",
  methotrexate: "An antimetabolite immunosuppressant used in rheumatoid arthritis and some cancers.",
  metoprolol: "A beta-1 selective blocker used for hypertension, angina, rate control, and heart failure indications.",
  monoclonal: "Related to an antibody product designed to bind a specific target antigen.",
  "monoclonal antibody": "A targeted biologic medication that binds a specific immune or disease-related target; course materials emphasize infection risk with immune suppression.",
  montelukast: "A leukotriene receptor antagonist used for asthma maintenance and allergic rhinitis; it carries neuropsychiatric warning concerns.",
  mucosal: "Related to a mucus-secreting membrane lining body passages such as the GI or respiratory tract.",
  nephron: "The kidney's functional filtration unit.",
  nephrotoxic: "Capable of causing kidney injury.",
  neutrophil: "The most numerous granulocyte and a key phagocyte in acute bacterial infection.",
  nitroglycerin: "A nitrate vasodilator that reduces preload and myocardial oxygen demand, often used for angina.",
  norepinephrine: "A catecholamine vasopressor that strongly stimulates alpha receptors and raises blood pressure.",
  nsaid: "A nonsteroidal anti-inflammatory drug; this class can contribute to GI mucosal injury and peptic ulcer disease.",
  "nsaid use": "Use of nonsteroidal anti-inflammatory drugs, which can increase peptic ulcer risk by impairing protective gastric mucosal mechanisms.",
  omeprazole: "A proton pump inhibitor that reduces gastric acid production and is used for GERD and peptic ulcer-related therapy.",
  ondansetron: "A serotonin 5-HT3 receptor antagonist antiemetic used for nausea and vomiting.",
  opioid: "A pain medication class that can slow GI motility and increase constipation risk.",
  perfusion: "Blood flow through tissue or an organ.",
  penicillin: "A beta-lactam antibiotic class; allergy history should be assessed before giving related antibiotics.",
  phagocytosis: "Cellular engulfment and digestion of particles, microbes, or debris.",
  platelet: "A blood cell fragment involved in clot formation; also called a thrombocyte.",
  potassium: "A major intracellular electrolyte essential for nerve, muscle, and cardiac electrical function.",
  "potassium chloride": "An electrolyte replacement used to treat or prevent hypokalemia; IV administration requires careful safety precautions.",
  preload: "Ventricular stretch at the end of diastole, related to venous return and filling volume.",
  "pulmonary edema": "Fluid accumulation in lung interstitium or alveoli, often from left-sided heart failure.",
  respiration: "Gas exchange involving oxygen uptake and carbon dioxide removal at the lungs or tissues.",
  salmeterol: "A long-acting beta-2 agonist used for maintenance bronchodilation, not rescue therapy.",
  "sa node": "The sinoatrial node, the normal pacemaker of the heart.",
  sodium: "A major extracellular electrolyte central to fluid balance, nerve conduction, and blood pressure regulation.",
  spironolactone: "A potassium-sparing aldosterone antagonist used in heart failure and selected resistant hypertension or edema states.",
  statin: "A cholesterol-lowering drug class that inhibits HMG-CoA reductase.",
  surfactant: "A substance that lowers alveolar surface tension and helps keep alveoli open.",
  tachycardia: "A faster-than-normal heart rate, commonly above 100 beats per minute in adults.",
  thrombocyte: "Another name for a platelet, a cell fragment involved in clotting.",
  thrombolytic: "A medication class that breaks down clots, used only in specific high-risk situations because bleeding risk is significant.",
  tiotropium: "A long-acting muscarinic antagonist used for maintenance bronchodilation, especially in COPD.",
  tidal: "Related to tidal volume, the amount of air inhaled or exhaled in a normal breath.",
  "type i hypersensitivity": "An immediate IgE-mediated allergic reaction, such as anaphylaxis, allergic asthma, or hay fever.",
  "type ii hypersensitivity": "An antibody-mediated cytotoxic reaction where antibodies target antigens on cell surfaces.",
  "type iii hypersensitivity": "An immune-complex reaction where antigen-antibody complexes deposit in tissues and trigger inflammation.",
  "type iv hypersensitivity": "A delayed, T-cell mediated hypersensitivity reaction that usually develops over 24 to 72 hours.",
  ventilation: "Movement of air into and out of the respiratory tract.",
  vasoconstriction: "Narrowing of blood vessels due to smooth muscle contraction.",
  vasopressor: "A medication used to raise blood pressure in shock states, usually by increasing vascular tone and sometimes cardiac output.",
  warfarin: "An oral anticoagulant that interferes with vitamin K-dependent clotting factors and requires careful monitoring.",
  wheezing: "A high-pitched breath sound caused by narrowed airways.",
};

const el = {
  week: document.getElementById("weekFilter"),
  category: document.getElementById("categoryFilter"),
  source: document.getElementById("sourceFilter"),
  emptyState: document.getElementById("emptyState"),
  emptyTitle: document.getElementById("emptyTitle"),
  emptyMessage: document.getElementById("emptyMessage"),
  questionCard: document.getElementById("questionCard"),
  questionMeta: document.getElementById("questionMeta"),
  questionStem: document.getElementById("questionStem"),
  answerForm: document.getElementById("answerForm"),
  feedback: document.getElementById("feedback"),
  definitionStatus: document.getElementById("definitionStatus"),
  definitionList: document.getElementById("definitionList"),
  define: document.getElementById("defineButton"),
  next: document.getElementById("nextButton"),
  submit: document.getElementById("submitButton"),
  resetAnswered: document.getElementById("resetAnsweredButton"),
  progressCorrect: document.getElementById("progressCorrect"),
  progressIncorrect: document.getElementById("progressIncorrect"),
  progressUnanswered: document.getElementById("progressUnanswered"),
};

const filters = [el.week, el.category, el.source];

async function init() {
  try {
    const response = await fetch("data/questions.json");
    if (!response.ok) throw new Error(`Question data returned ${response.status}`);
    state.questions = await response.json();
    shuffleInPlace(state.questions);
    state.answered = loadAnsweredResults();
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
  el.define.addEventListener("click", showDefinitions);
  el.next.addEventListener("click", selectNext);
  el.submit.addEventListener("click", submitMultipleAnswer);
  el.resetAnswered.addEventListener("click", resetAnsweredQuestions);
}

function buildFilters() {
  fillWeekSelect(el.week, "All weeks", state.questions);
  fillSelect(el.category, "All categories", state.questions.map((q) => q.category));
  fillSelect(el.source, "All sources", state.questions.map((q) => q.sourceType));
}

function fillWeekSelect(select, label, questions) {
  select.innerHTML = "";
  select.append(new Option(label, ""));

  [...new Map(
    questions
      .filter((question) => question.week && question.topic)
      .sort((a, b) => a.week - b.week)
      .map((question) => [String(question.week), `Week ${question.week}: ${question.topic}`])
  ).entries()].forEach(([value, text]) => select.append(new Option(text, value)));
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
    week: el.week.value,
    category: el.category.value,
    source: el.source.value,
  };

  state.filtered = state.questions.filter((question) => {
    if (selected.week && String(question.week) !== selected.week) return false;
    if (selected.category && question.category !== selected.category) return false;
    if (selected.source && question.sourceType !== selected.source) return false;
    if (state.answered[String(question.id)]) return false;
    return true;
  });

  if (!state.filtered.some((question) => question.id === state.currentId)) {
    state.currentId = state.filtered[0]?.id ?? null;
  }

  render();
}

function render() {
  renderProgress();
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const question = getCurrentQuestion();
  el.feedback.className = "feedback hidden";
  el.feedback.innerHTML = "";

  if (!question) {
    const hasMatchingAnswered = getMatchingQuestions().some((item) => state.answered[String(item.id)]);
    el.emptyState.classList.remove("hidden");
    el.questionCard.classList.add("hidden");
    el.emptyTitle.textContent = hasMatchingAnswered ? "All matching questions answered" : "No matching questions";
    el.emptyMessage.textContent = hasMatchingAnswered
      ? "Reset answered questions to practice this set again."
      : "Adjust the filters to continue practicing.";
    state.renderedQuestionId = null;
    state.definitionsVisible = false;
    renderDefinitions(null);
    return;
  }

  if (question.id !== state.renderedQuestionId) {
    state.renderedQuestionId = question.id;
    state.definitionsVisible = false;
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
  el.submit.classList.toggle("hidden", question.type !== "Multiple Answer");
  el.submit.disabled = false;
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
      if (question.type !== "Multiple Answer") {
        showAnswer(question);
      }
    });
    el.answerForm.append(label);
  });

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

function submitMultipleAnswer() {
  const question = getCurrentQuestion();
  if (!question || question.type !== "Multiple Answer") return;
  showAnswer(question);
}

function showAnswer(question, updateMetrics = true) {
  const selected = state.answers.get(question.id) ?? new Set();
  const correct = new Set(question.correctAnswers);
  const isCorrect = setsMatch(selected, correct);

  [...el.answerForm.querySelectorAll(".answer-option")].forEach((label) => {
    const input = label.querySelector("input");
    const value = input.value;
    input.disabled = true;
    const isSelected = selected.has(value);
    const isCorrectOption = correct.has(value);
    const isMissedCorrectOption = question.type === "Multiple Answer" && isCorrectOption && !isSelected;
    label.classList.add("revealed");
    label.classList.toggle("correct", isCorrectOption && !isMissedCorrectOption);
    label.classList.toggle("incorrect", (isSelected && !isCorrectOption) || isMissedCorrectOption);
  });
  el.submit.disabled = true;

  el.feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  el.feedback.innerHTML = `<p>${escapeHtml(question.rationale)}</p>`;
  saveAnsweredResult(question.id, isCorrect);
  state.filtered = state.filtered.filter((item) => item.id !== question.id);
  renderProgress();
}

function selectNext() {
  if (state.filtered.length === 0) {
    state.currentId = null;
    render();
    return;
  }
  const currentIndex = state.filtered.findIndex((question) => question.id === state.currentId);

  if (currentIndex !== -1 && !state.answered[String(state.currentId)]) {
    const [currentQuestion] = state.filtered.splice(currentIndex, 1);
    const insertIndex = state.filtered.length === 0
      ? 0
      : Math.floor(Math.random() * (state.filtered.length + 1));
    state.filtered.splice(insertIndex, 0, currentQuestion);
  }

  const nextQuestion = state.filtered.find((question) => question.id !== state.currentId) ?? state.filtered[0];
  state.currentId = nextQuestion?.id ?? null;
  render();
}

function getCurrentQuestion() {
  return state.questions.find((question) => question.id === state.currentId);
}

function getMatchingQuestions() {
  const selected = {
    week: el.week.value,
    category: el.category.value,
    source: el.source.value,
  };

  return state.questions.filter((question) => {
    if (selected.week && String(question.week) !== selected.week) return false;
    if (selected.category && question.category !== selected.category) return false;
    if (selected.source && question.sourceType !== selected.source) return false;
    return true;
  });
}

function renderProgress() {
  const total = state.questions.length;
  const results = Object.values(state.answered);
  const correct = results.filter((result) => result === "correct").length;
  const incorrect = results.filter((result) => result === "incorrect").length;
  const answered = correct + incorrect;
  const unanswered = Math.max(total - answered, 0);

  el.progressCorrect.style.flexBasis = `${total ? (correct / total) * 100 : 0}%`;
  el.progressIncorrect.style.flexBasis = `${total ? (incorrect / total) * 100 : 0}%`;
  el.progressUnanswered.style.flexBasis = `${total ? (unanswered / total) * 100 : 100}%`;
}

function saveAnsweredResult(questionId, isCorrect) {
  state.answered[String(questionId)] = isCorrect ? "correct" : "incorrect";
  localStorage.setItem(ANSWERED_STORAGE_KEY, JSON.stringify(state.answered));
}

function loadAnsweredResults() {
  try {
    const raw = localStorage.getItem(ANSWERED_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function resetAnsweredQuestions() {
  state.answered = {};
  state.answers.clear();
  localStorage.removeItem(ANSWERED_STORAGE_KEY);
  applyFilters();
}

function shuffleInPlace(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
  }
  return items;
}

function showDefinitions() {
  state.definitionsVisible = true;
  renderDefinitions(getCurrentQuestion());
}

function renderDefinitions(question) {
  el.definitionList.innerHTML = "";

  if (!question) {
    el.definitionStatus.textContent = "0 terms";
    el.define.disabled = true;
    el.definitionList.classList.add("hidden");
    return;
  }

  const terms = findMedicalTerms(question);
  el.definitionStatus.textContent = `${terms.length} ${terms.length === 1 ? "term" : "terms"}`;
  el.define.disabled = terms.length === 0;

  if (terms.length === 0) {
    el.definitionList.classList.remove("hidden");
    el.definitionList.innerHTML = `<p class="definition-empty">No glossary terms detected in this question.</p>`;
    return;
  }

  if (!state.definitionsVisible) {
    el.definitionList.classList.add("hidden");
    return;
  }

  el.definitionList.classList.remove("hidden");

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
