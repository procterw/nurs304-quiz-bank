const medMap = window.NURS304MedMap;
const flashcardDeck = document.getElementById("flashcardDeck");
const cardTypeSelect = document.getElementById("flashcardType");
const weekFilter = document.getElementById("flashcardWeekFilter");
const searchInput = document.getElementById("flashcardSearch");
const flashcardPosition = document.getElementById("flashcardPosition");
const previousButton = document.getElementById("previousFlashcard");
const nextButton = document.getElementById("nextFlashcard");

let currentIndex = 0;
let activeCards = [];
let conditionByName = new Map();

if (medMap && flashcardDeck && cardTypeSelect && weekFilter && searchInput && flashcardPosition && previousButton && nextButton) {
  conditionByName = new Map(medMap.medMapData.conditions.map((condition) => [condition.name, condition]));
  fillWeekFilter();
  rebuildDeck();

  cardTypeSelect.addEventListener("change", () => {
    rebuildDeck();
  });
  weekFilter.addEventListener("change", () => {
    rebuildDeck();
  });
  searchInput.addEventListener("input", () => {
    rebuildDeck();
  });

  previousButton.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    renderFlashcards();
  });

  nextButton.addEventListener("click", () => {
    currentIndex += 1;
    renderFlashcards();
  });
}

function fillWeekFilter() {
  weekFilter.innerHTML = "";
  weekFilter.append(new Option("All weeks", ""));
  [...new Set(medMap.medMapData.medicationClasses.map((medClass) => medClass.week))]
    .sort((a, b) => a - b)
    .forEach((week) => weekFilter.append(new Option(`W${week}`, String(week))));
}

function rebuildDeck() {
  const selectedWeek = weekFilter.value;
  const query = searchInput.value.trim().toLowerCase();
  activeCards = shuffleCards(makeCards(cardTypeSelect.value)
    .filter((card) => cardMatchesWeek(card, selectedWeek))
    .filter((card) => matchesQuery(card, query)));
  currentIndex = 0;
  renderFlashcards();
}

function renderFlashcards() {
  currentIndex = Math.min(currentIndex, Math.max(activeCards.length - 1, 0));
  flashcardPosition.textContent = activeCards.length ? `${currentIndex + 1} / ${activeCards.length}` : "0 / 0";
  previousButton.disabled = currentIndex <= 0;
  nextButton.disabled = currentIndex >= activeCards.length - 1;
  flashcardDeck.innerHTML = "";

  if (!activeCards.length) {
    const empty = document.createElement("p");
    empty.className = "flashcard-empty";
    empty.textContent = "No matching medication cards.";
    flashcardDeck.append(empty);
    return;
  }

  flashcardDeck.append(createFlashcard(activeCards[currentIndex]));
}

function shuffleCards(cards) {
  const shuffled = [...cards];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function cardMatchesWeek(card, selectedWeek) {
  if (!selectedWeek) return true;
  if (card.weeks) return card.weeks.map(String).includes(selectedWeek);
  return String(card.week) === selectedWeek;
}

function makeCards(type) {
  if (type === "conditions") return makeConditionCards();
  if (type === "drugs") {
    return medMap.medMapData.medicationClasses.flatMap((medClass) => makeDrugCards(medClass));
  }
  return medMap.medMapData.medicationClasses.map((medClass) => ({
    type: "class",
    title: medClass.name,
    medClass,
    week: medClass.week
  }));
}

function makeDrugCards(medClass) {
  return (medClass.drugs ?? []).map((drug) => ({
    type: "drug",
    title: drug,
    medClass,
    drug,
    week: medClass.week
  }));
}

function makeConditionCards() {
  return medMap.medMapData.conditions.map((condition) => {
    const linkedClasses = medMap.medMapData.medicationClasses
      .filter((medClass) => (medClass.conditions ?? []).includes(condition.name));
    const weeks = [...new Set(linkedClasses.map((medClass) => medClass.week))].sort((a, b) => a - b);
    return {
      type: "condition",
      title: condition.name,
      condition,
      linkedClasses,
      week: weeks[0] ?? 0,
      weeks
    };
  });
}

function matchesQuery(card, query) {
  if (!query) return true;
  if (card.type === "condition") {
    return [
      card.title,
      ...(card.condition.relevantSystems ?? []),
      ...(card.condition.drugClasses ?? []),
      ...card.linkedClasses.flatMap((medClass) => [medClass.name, medClass.prototype?.name, ...(medClass.drugs ?? [])])
    ].some((value) => String(value ?? "").toLowerCase().includes(query));
  }
  const { medClass, drug, title } = card;
  return [
    title,
    drug,
    medClass.name,
    medClass.prototype?.name,
    ...(medClass.conditions ?? [])
  ].some((value) => String(value ?? "").toLowerCase().includes(query));
}

function createFlashcard(card) {
  const article = document.createElement("article");
  article.className = "med-flashcard";

  const front = document.createElement("div");
  front.className = "med-flashcard-front";
  const title = document.createElement("strong");
  const titleText = document.createElement("span");
  titleText.textContent = card.title;

  const googleLink = document.createElement("a");
  googleLink.className = "google-it-link";
  googleLink.href = googleSearchUrl(card.title);
  googleLink.target = "_blank";
  googleLink.rel = "noopener noreferrer";
  googleLink.setAttribute("aria-label", `Google ${card.title}`);
  googleLink.title = `Google ${card.title}`;
  googleLink.innerHTML = googleIconSvg();
  title.append(titleText, googleLink);

  const actions = document.createElement("div");
  actions.className = "med-flashcard-actions";

  const revealAllButton = document.createElement("button");
  revealAllButton.className = "med-flashcard-action";
  revealAllButton.type = "button";
  revealAllButton.textContent = "Reveal all";

  actions.append(revealAllButton);
  front.append(title, actions);

  const back = document.createElement("div");
  back.className = "med-flashcard-back";
  back.append(...makeSectionsForCard(card));
  revealAllButton.addEventListener("click", () => {
    back.querySelectorAll(".med-flashcard-reveal:not(:disabled)").forEach((button) => button.click());
    revealAllButton.disabled = true;
  });

  article.append(front, back);
  return article;
}

function googleSearchUrl(topic) {
  return `https://www.google.com/search?q=${encodeURIComponent(topic)}`;
}

function googleIconSvg() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"/>
      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"/>
      <path fill="#fbbc05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84Z"/>
      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38Z"/>
    </svg>
  `;
}

function makeSectionsForCard(card) {
  if (card.type === "condition") {
    const details = medMap.getConditionDetails(card.condition.name, card.condition);
    return [
      makeSection("Description", [shortParagraph(details.description, 150)]),
      makeSection("Symptoms", details.sideEffects),
      makeSection("Medications", medicationListForCondition(card.linkedClasses))
    ];
  }

  const details = medMap.getMedicationDetails(card.medClass, card.drug);
  if (card.type === "class") {
    return [
      makeSection("Mechanism", classMechanismItems(card.medClass)),
      makeSection("What does this treat?", treatmentConditionItems(card.medClass)),
      makeSection("Side effects", sideEffectItems(details)),
      makeSection("Drugs in this class", drugListForClass(card.medClass)),
      makeSection("Contraindications", contraindicationItems(details))
    ];
  }

  return [
    makeSection("Mechanism", mechanismItems(card.medClass, details)),
    makeSection("What does this treat?", treatmentConditionItems(card.medClass)),
    makeSection("Side effects", sideEffectItems(details)),
    makeSection("Contraindications", contraindicationItems(details))
  ];
}

function mechanismItems(medClass, details) {
  return [shortParagraph(details.description || medClass.mechanism, 220)];
}

function classMechanismItems(medClass) {
  return [classMechanism(medClass.name) ?? shortParagraph(medClass.mechanism, 420)];
}

function classMechanism(className) {
  const mechanisms = {
    "Glucocorticoids / corticosteroids": "Glucocorticoids bind intracellular steroid receptors and change gene transcription. The result is decreased inflammatory mediator production, reduced leukocyte migration, and broad immune suppression; in adrenal insufficiency, the same hormone effect replaces deficient cortisol.",
    "T and B cell suppressors": "T and B cell suppressors reduce lymphocyte activation or proliferation. This dampens immune attack in transplant and autoimmune contexts, but it also lowers normal immune defense.",
    "Anti-metabolites": "Anti-metabolites interfere with folate or nucleotide pathways needed for rapidly dividing immune cells. At course level, the key idea is reduced immune-cell proliferation and less inflammatory activity.",
    "Monoclonal antibodies": "Monoclonal antibodies bind specific immune targets such as cytokines, receptors, or cell-surface markers. They are more targeted than broad steroids but can still significantly suppress immune defense.",
    "ACE inhibitors": "ACE inhibitors block conversion of angiotensin I to angiotensin II. This decreases vasoconstriction and aldosterone-mediated sodium/water retention, lowering afterload and volume workload.",
    "Angiotensin II receptor blockers": "ARBs block angiotensin II at its receptor. This reduces vasoconstriction and aldosterone effects while avoiding the bradykinin buildup that explains the classic ACE-inhibitor cough.",
    "Angiotensin receptor/neprilysin inhibitor": "ARNI therapy combines angiotensin receptor blockade with neprilysin inhibition. The ARB portion reduces RAAS vasoconstriction/aldosterone effects, while neprilysin inhibition increases natriuretic peptide activity that supports vasodilation and sodium/water excretion.",
    "Calcium channel blockers": "Calcium channel blockers reduce calcium entry into vascular smooth muscle and, for non-dihydropyridines, cardiac conduction tissue. This causes vasodilation and may also slow heart rate or AV-node conduction depending on subclass.",
    "Beta adrenergic blockers": "Beta blockers reduce sympathetic stimulation of beta receptors. In the heart, this lowers heart rate, contractility, and cardiac workload; beta selectivity matters because beta-2 blockade can affect bronchial smooth muscle.",
    "Organic nitrates": "Organic nitrates release nitric oxide, relaxing vascular smooth muscle. Venodilation lowers preload and myocardial oxygen demand; coronary vasodilation can also help relieve ischemic chest discomfort.",
    "Potassium channel blockers": "Potassium channel blockers delay cardiac repolarization and prolong the action potential. This increases the refractory period, helping suppress dysrhythmias caused by abnormal reentry or rapid conduction.",
    "HMG-CoA reductase inhibitors": "Statins inhibit hepatic HMG-CoA reductase, decreasing cholesterol synthesis. Lower hepatic cholesterol increases LDL receptor activity and reduces circulating LDL, which lowers atherosclerotic cardiovascular risk over time.",
    "Cholesterol absorption inhibitors": "Cholesterol absorption inhibitors reduce intestinal uptake of cholesterol. Less absorbed cholesterol supports lower circulating LDL and complements therapies that reduce hepatic cholesterol production.",
    "Antihistamines": "H1 antihistamines block histamine at H1 receptors. This reduces histamine-driven itching, sneezing, rhinorrhea, urticaria, and capillary leak; first-generation agents also cross the blood-brain barrier and block muscarinic receptors.",
    "SABA - short-acting beta 2 adrenergic agonists": "Short-acting beta-2 agonists stimulate beta-2 receptors on bronchial smooth muscle. This rapidly increases cAMP and relaxes airways, making the class useful for acute bronchospasm relief.",
    "LABA - long-acting beta 2 adrenergic agonists": "Long-acting beta-2 agonists stimulate beta-2 receptors for sustained bronchodilation. They support maintenance control but are not a substitute for rapid rescue treatment in sudden bronchospasm.",
    "SAMA - short-acting muscarinic antagonists": "Short-acting muscarinic antagonists block muscarinic receptors in the airway. This reduces vagal-mediated bronchoconstriction and secretions for short-term bronchodilation.",
    "LAMA - long-acting muscarinic antagonists": "Long-acting muscarinic antagonists block airway muscarinic receptors for sustained bronchodilation. They are especially tied to COPD maintenance therapy and anticholinergic safety concerns.",
    "ICS - inhaled corticosteroids": "Inhaled corticosteroids reduce airway inflammation locally by suppressing inflammatory mediator activity, edema, and mucus production. They are controller medications, not rapid bronchodilators.",
    "LTRA - leukotriene receptor antagonists": "Leukotriene receptor antagonists block cysteinyl leukotriene signaling. This reduces leukotriene-mediated bronchoconstriction, mucus production, edema, and airway inflammation.",
    "Loop diuretics": "Loop diuretics inhibit sodium, potassium, and chloride reabsorption in the ascending loop of Henle. This produces strong diuresis, lowering fluid volume and congestion.",
    "Thiazides": "Thiazides inhibit sodium-chloride reabsorption in the distal convoluted tubule. This promotes moderate diuresis and lowers blood pressure through volume reduction and longer-term vascular effects.",
    "Aldosterone antagonists": "Aldosterone antagonists block aldosterone receptors in the distal nephron. This promotes sodium and water excretion while retaining potassium, which explains both heart-failure benefit and hyperkalemia risk.",
    "Osmotic diuretics": "Osmotic diuretics increase filtrate osmolality so water stays in the renal tubule. This draws fluid into urine and can shift fluid between compartments, requiring careful volume and electrolyte monitoring.",
    "Vasopressors / alpha- and beta-adrenergic agonists": "Adrenergic agonists stimulate alpha and/or beta receptors to raise vascular tone, heart rate, contractility, or bronchodilation depending on receptor profile. In shock, the goal is restoring perfusion pressure and cardiac output.",
    "Electrolyte replacement": "Electrolyte replacement restores deficient ions needed for nerve, muscle, cardiac, and fluid-balance function. The mechanism is replacement of the missing electrolyte, but safety depends heavily on route, rate, renal function, and serum trends.",
    "Antacids": "Antacids neutralize existing gastric acid in the stomach lumen. This raises gastric pH quickly for symptom relief but can alter absorption of other medications.",
    "Histamine 2 receptor antagonists": "H2 receptor antagonists block histamine-2 receptors on gastric parietal cells. This reduces acid secretion, especially basal and meal-stimulated acid output.",
    "Proton pump inhibitors": "Proton pump inhibitors irreversibly inhibit the gastric parietal-cell hydrogen/potassium ATPase pump. This provides stronger and longer acid suppression than simple neutralization.",
    "Phenothiazine anti-emetics": "Phenothiazine antiemetics reduce nausea and vomiting mainly through dopamine receptor blockade in central emetic pathways. Their receptor effects also explain sedation, anticholinergic effects, hypotension, and extrapyramidal risk.",
    "5-HT3 / serotonin receptor antagonist anti-emetics": "5-HT3 antagonists block serotonin signaling in the GI tract and chemoreceptor trigger zone. This reduces nausea and vomiting, especially in postoperative or medication-triggered contexts.",
    "Laxatives": "Bulk-forming laxatives absorb water and increase stool bulk. The larger, softer stool stimulates peristalsis and supports more regular bowel movement.",
    "Cathartics": "Stimulant cathartics increase intestinal motility and secretion. This promotes bowel evacuation but can cause cramping, diarrhea, and fluid/electrolyte loss if overused.",
    "Anti-diarrheal agents": "Anti-diarrheal agents slow intestinal motility, increasing time for water absorption and reducing stool frequency. They should be avoided when suppressing infectious diarrhea would be unsafe.",
    "Antiplatelets": "Antiplatelet drugs reduce platelet activation or aggregation. This is most useful for arterial clot prevention because platelet-rich thrombi are central to ACS and other arterial events.",
    "Anticoagulants": "Anticoagulants interfere with the coagulation cascade to reduce fibrin clot formation. They prevent clot extension and embolic complications but do not dissolve existing clots.",
    "Direct factor Xa inhibitors": "Direct factor Xa inhibitors block factor Xa in the coagulation cascade. This reduces thrombin generation and fibrin clot formation without routine INR monitoring.",
    "Thrombolytics": "Thrombolytics activate fibrinolysis to break down fibrin within formed clots. This can restore perfusion in selected emergencies but creates high bleeding risk.",
    "Hemostatics / reversal agents": "Hemostatic and reversal agents either support clot formation at a bleeding site or reverse anticoagulant effects. The mechanism depends on matching the agent to the bleeding problem or anticoagulant involved.",
    "Erythropoietin-stimulating agents": "Erythropoietin-stimulating agents activate erythropoietin receptors in bone marrow. This increases red blood cell production when anemia is related to low erythropoietin signaling or selected treatment contexts.",
    "Antianemics": "Antianemics replace missing nutrients needed for red blood cell production. For iron-deficiency anemia, iron replacement supports hemoglobin synthesis and oxygen-carrying capacity.",
    "Thyroid hormone": "Thyroid hormone replacement restores deficient T4/T3 activity. This raises metabolic activity toward normal and prevents severe hypothyroid decompensation when correctly dosed.",
    "Thioamides": "Thioamides inhibit thyroid peroxidase, reducing thyroid hormone synthesis. One agent also reduces peripheral T4-to-T3 conversion, which matters in thyroid storm and pregnancy-related selection.",
    "Insulins": "Insulin binds insulin receptors and moves glucose from blood into insulin-sensitive tissues while suppressing hepatic glucose output and ketone production. It is required when endogenous insulin is absent or insufficient.",
    "Biguanides": "Biguanides lower glucose mainly by reducing hepatic glucose production and improving insulin sensitivity. They do not replace insulin and have low hypoglycemia risk when used alone.",
    "SGLT2 inhibitors": "SGLT2 inhibitors block renal glucose reabsorption in the proximal tubule. Glucose is excreted in urine, which lowers blood glucose and also creates osmotic diuresis.",
    "GLP receptor agonists": "GLP-1 receptor agonists mimic incretin signaling. They increase glucose-dependent insulin secretion, lower glucagon, slow gastric emptying, and increase satiety.",
    "Estrogen and progestin hormones": "Estrogen and progestin hormones alter hypothalamic-pituitary-ovarian signaling, cervical mucus, and endometrial cycling. In contraception, these effects suppress ovulation or make fertilization/implantation less likely.",
    "Testosterone": "Testosterone therapy activates androgen receptors in target tissues. It supports androgen-dependent physiologic effects but can also increase erythropoiesis, fluid retention, and androgenic adverse effects.",
    "Aminoglycosides": "Aminoglycosides bind the bacterial 30S ribosomal subunit and disrupt protein synthesis. They are bactericidal and especially associated with aerobic gram-negative coverage plus kidney and ear toxicity monitoring.",
    "Fluoroquinolones": "Fluoroquinolones inhibit bacterial DNA gyrase and topoisomerase IV. This blocks DNA replication and repair, producing bactericidal activity.",
    "Tetracyclines": "Tetracyclines bind the bacterial 30S ribosomal subunit and prevent aminoacyl-tRNA attachment. This inhibits protein synthesis and is generally bacteriostatic.",
    "Macrolides": "Macrolides bind the bacterial 50S ribosomal subunit and inhibit protein synthesis. They are often used for selected respiratory infections and as alternatives when beta-lactam allergy limits options."
  };
  return mechanisms[className];
}

function treatmentConditionItems(medClass) {
  const treatedConditions = (medClass.conditions ?? []).filter((name) => isTreatmentTarget(name));
  if (!treatedConditions.length) return ["No specific treated condition is listed in the course material."];
  return treatedConditions.map((name) => `${name}: ${briefConditionDescription(name)}`);
}

function isTreatmentTarget(name) {
  const nonTreatmentTargets = new Set([
    "Bone and tooth development risk",
    "C. difficile superinfection risk",
    "Digoxin toxicity risk",
    "Fluid overload risk",
    "Nephrotoxicity risk",
    "Ototoxicity",
    "Penicillin allergy alternative",
    "Photosensitivity",
    "QT prolongation risk",
    "Tendon injury risk",
    "Warfarin interaction bleeding risk"
  ]);
  return !nonTreatmentTargets.has(name);
}

function briefConditionDescription(name) {
  const descriptions = {
    "Acute coronary syndrome / ischemia": "Reduced blood flow to the heart muscle that can cause chest pain or myocardial injury.",
    "Acute kidney injury": "A sudden drop in kidney function that disrupts filtration, fluid balance, and electrolytes.",
    "Adrenal insufficiency": "Too little cortisol production, which can impair stress response, blood pressure, and glucose balance.",
    "Anemia": "Too few red blood cells or too little hemoglobin to carry oxygen well.",
    "Asthma": "A chronic inflammatory airway disease with reversible bronchoconstriction.",
    "Atrial fibrillation / stroke prevention": "An irregular atrial rhythm that increases clot and stroke risk.",
    "Autoimmune disease": "Immune activity mistakenly targets the body's own tissues.",
    "Bacterial infection": "A harmful bacterial growth that triggers illness and inflammation.",
    "Chronic kidney disease": "Long-term loss of kidney function affecting wastes, electrolytes, fluid balance, and hormones.",
    "Constipation": "Infrequent or difficult stool passage, often from slowed bowel movement or hard stool.",
    "COPD / emphysema": "A chronic obstructive lung disease with persistent airflow limitation.",
    "Deep vein thrombosis / pulmonary embolism": "A venous clot that can block local blood flow or travel to the lungs.",
    "Diarrhea": "Frequent loose or watery stools that can cause fluid and electrolyte loss.",
    "DIC": "A severe clotting disorder where abnormal clot formation and bleeding can occur together.",
    "Dysrhythmia": "An abnormal heart rhythm caused by disrupted cardiac electrical conduction.",
    "Electrolyte imbalance": "Too much or too little of key electrolytes such as potassium, sodium, calcium, or magnesium.",
    "Fluid overload risk": "Too much fluid in the body or bloodstream, which can strain the heart and lungs.",
    "GERD": "Backflow of stomach contents into the esophagus causing reflux symptoms.",
    "Heart failure": "The heart cannot pump effectively enough to meet the body's needs.",
    "Hyperlipidemia / atherosclerosis": "High blood lipids that contribute to plaque buildup in arteries.",
    "Hyperthyroidism / Graves disease": "Excess thyroid hormone activity that speeds metabolism and body systems.",
    "Hypersensitivity reactions": "An overactive immune response to an allergen or trigger.",
    "Hypertension": "Persistently elevated blood pressure that increases vascular, heart, kidney, and brain risk.",
    "Hypothyroidism": "Too little thyroid hormone activity, slowing metabolism and body systems.",
    "Leukemia and lymphoma": "Cancers of blood-forming or lymphatic cells that impair normal immune and blood function.",
    "Nausea / vomiting": "A protective GI reflex that can lead to fluid loss and medication intolerance.",
    "Pain / inflammation": "Tissue injury or irritation that activates inflammatory and pain pathways.",
    "Pathologic clotting": "Clot formation that blocks blood flow or creates embolic risk.",
    "Peptic ulcer disease": "Open sores in the stomach or duodenal lining related to acid and mucosal injury.",
    "Renal failure": "Kidney function is too impaired to maintain filtration, fluid balance, and electrolytes.",
    "Shock": "Circulatory failure that leaves tissues underperfused.",
    "Type 1 diabetes mellitus": "Autoimmune beta-cell loss causes absolute insulin deficiency.",
    "Type 2 diabetes mellitus": "Insulin resistance and beta-cell dysfunction cause chronic hyperglycemia.",
    "Urinary tract infection": "A bacterial infection involving the bladder, urethra, ureters, or kidneys."
  };

  if (descriptions[name]) return descriptions[name];
  const condition = conditionByName.get(name);
  const details = medMap.getConditionDetails(name, condition);
  return shortParagraph(details.description, 120);
}

function contraindicationItems(details) {
  return [details.considerations];
}

function sideEffectItems(details) {
  return details.sideEffects?.length ? details.sideEffects : ["Review medication-specific adverse effects."];
}

function shortParagraph(text, maxLength) {
  const polished = polishFlashcardText(text);
  const firstSentence = polished.match(/^[^.!?]+[.!?]/)?.[0] ?? polished;
  if (firstSentence.length <= maxLength) return firstSentence;
  return `${firstSentence.slice(0, maxLength - 1).trim().replace(/[,:;]$/, "")}.`;
}

function drugListForClass(medClass) {
  const names = medClass.drugs?.length
    ? medClass.drugs
    : [medClass.prototype?.inCourseMaterial ? medClass.prototype.name : medClass.name];
  return names.map((drug) => ({
    text: drug,
    emphasis: drug === medClass.prototype?.name
  }));
}

function medicationListForCondition(linkedClasses) {
  return linkedClasses.flatMap((medClass) =>
    drugListForClass(medClass).map((drug) => ({
      ...drug,
      text: `${drug.text} (${medClass.name})`
    }))
  );
}

function makeSection(title, items) {
  const section = document.createElement("section");
  section.className = "med-flashcard-section";

  const button = document.createElement("button");
  button.className = "med-flashcard-reveal";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");

  const label = document.createElement("span");
  label.className = "med-flashcard-reveal-label";
  label.textContent = title;
  button.append(label);

  button.addEventListener("click", () => revealSection(section, button, items));

  section.append(button);
  return section;
}

function revealSection(section, button, items) {
  section.classList.add("revealed");
  button.setAttribute("aria-expanded", "true");
  button.disabled = true;
  button.append(makeAnswerList(items));
}

function makeAnswerList(items) {
  const cleanedItems = cleanItems(items);
  if (cleanedItems.length === 1) {
    const paragraph = document.createElement("p");
    paragraph.className = "med-flashcard-answer";
    appendAnswerContent(paragraph, cleanedItems[0]);
    return paragraph;
  }

  const list = document.createElement("ul");
  list.className = "med-flashcard-answer";
  cleanedItems.forEach((item) => {
    const li = document.createElement("li");
    appendAnswerContent(li, item);
    list.append(li);
  });
  return list;
}

function appendAnswerContent(element, item) {
  if (typeof item === "object" && item.emphasis) {
    const strong = document.createElement("strong");
    strong.className = "prototype-drug";
    strong.textContent = item.text;
    element.append(strong);
  } else {
    element.textContent = typeof item === "object" ? item.text : item;
  }
}

function cleanItems(items) {
  const cleaned = (items ?? [])
    .map((item) => {
      if (typeof item === "object" && item) {
        return {
          ...item,
          text: polishFlashcardText(item.text)
        };
      }
      return polishFlashcardText(item);
    })
    .filter((item) => typeof item === "object" ? item.text : item);
  return cleaned.length ? cleaned : ["Review the course medication card for this item."];
}

function polishFlashcardText(item) {
  return String(item ?? "")
    .replace(/\bMedication links focus on\b/gi, "Focus:")
    .replace(/\bMedication-specific details\b/gi, "Key details")
    .replace(/\bCondition-specific symptoms\b/gi, "Symptoms")
    .replace(/\s+/g, " ")
    .trim();
}
