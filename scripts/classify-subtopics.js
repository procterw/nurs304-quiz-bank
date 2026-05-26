const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const questionsPath = path.join(repoRoot, "data", "questions.json");

const SUBTOPICS = [
  "Medication Administration, Safety, and Pharmacokinetics",
  "Autonomic Pharmacology and Vasoactive Medications",
  "Cell Injury, Adaptation, and Inflammation",
  "Innate Immunity and Hypersensitivity",
  "Adaptive Immunity and Immunosuppression",
  "Cardiac Anatomy, Valves, and Circulation",
  "Hypertension and Cardiovascular Pharmacology",
  "Heart Failure, Shock, and Fluid Overload",
  "Cardiac Conduction and Dysrhythmias",
  "Coronary Artery Disease, Angina, and Myocardial Infarction",
  "Respiratory Physiology and Gas Exchange",
  "Asthma and Bronchodilator Therapy",
  "COPD and Chronic Respiratory Disease",
  "Pneumonia, Atelectasis, ARDS, and Pneumothorax",
  "Antihistamines and Allergy Pharmacology",
  "Renal Function, Kidney Injury, and CKD",
  "Fluid, Electrolyte, and Acid-Base Balance",
  "Diuretics and Renal Medications",
  "GI Anatomy, Digestion, and Absorption",
  "Peptic Ulcer Disease and Acid Suppression",
  "Bowel Motility, Nausea, Vomiting, and Elimination",
  "Hematopoiesis, Anemia, and Erythropoietin",
  "Leukocytes, Leukemia, and Lymphoma",
  "Hemostasis, Anticoagulation, and Thrombolytics",
  "Endocrine and Adrenal Disorders",
  "Diabetes and Glucose Regulation",
  "Anti-Infective Pharmacology and Antibiotic Safety",
  "Infection Pathophysiology and Microbes",
  "Antibacterial Selection, Resistance, and Superinfection",
  "Beta-Lactam Antibiotics",
  "Aminoglycosides",
  "Fluoroquinolones",
  "Tetracyclines",
  "Macrolides",
  "Sulfonamides and Vancomycin",
  "Antifungals, Antivirals, Antimalarials, and Antituberculars",
  "Nervous System, Pain, and Seizures",
  "Parkinson Disease, Dementia, and Neuro Disorders",
  "Anxiety, Depression, and Mental Health Pharmacology",
];

function classify(question) {
  const primaryText = normalize([
    question.drug,
    question.stem,
    ...(question.correctAnswers ?? []),
    ...(question.prompts ?? []).flatMap((prompt) => [prompt.prompt, prompt.answer]),
    ...(question.blanks ?? []).flatMap((blank) => [blank.label, ...blank.answers]),
  ].filter(Boolean).join(" "));

  const contextText = normalize([
    question.week,
    question.topic,
    question.system,
    question.category,
  ].filter(Boolean).join(" "));

  if (question.week === 9 || has(contextText, /nervous|mental|anxiety|depression|neuro/)) {
    if (has(primaryText, /anxiety|depress|\\bgad\\b|\\bmdd\\b|panic|alprazolam|diazepam|benzodiazepine|fluoxetine|\\bssri\\b|serotonin|gaba|norepinephrine|st john|flumazenil|cns depress|beers|suicidal|serotonin syndrome/)) {
      return "Anxiety, Depression, and Mental Health Pharmacology";
    }

    if (has(primaryText, /parkinson|levodopa|carbidopa|dopamine|dementia|alzheimer|donepezil|cholinesterase|acetylcholine|delirium/)) {
      return "Parkinson Disease, Dementia, and Neuro Disorders";
    }

    return "Nervous System, Pain, and Seizures";
  }

  if (question.week === 8) {
    if (has(primaryText, /penicillin|amoxicillin|ampicillin|piperacillin|cephalosporin|cefazolin|cephalexin|ceftriaxone|cefepime|carbapenem|ertapenem|imipenem|meropenem|beta[-\\s]?lactam|cell wall synthesis/)) {
      return "Beta-Lactam Antibiotics";
    }

    if (has(primaryText, /aminoglycoside|gentamicin|peak|trough|ototoxic|inner ear|tinnitus/)) {
      return "Aminoglycosides";
    }

    if (has(primaryText, /fluoroquinolone|ciprofloxacin|tendon|achilles|qt|anthrax|chelat|calcium|magnesium|aluminum|iron/)) {
      return "Fluoroquinolones";
    }

    if (has(primaryText, /tetracycline|doxycycline|photosensitivity|tooth|bone development|dairy/)) {
      return "Tetracyclines";
    }

    if (has(primaryText, /macrolide|erythromycin|azithromycin|digoxin|warfarin|penicillin allergy/)) {
      return "Macrolides";
    }

    if (has(primaryText, /sulfonamide|trimethoprim|sulfamethoxazole|bactrim|vancomycin|c\\. difficile|clostridioides|pseudomembranous|flushing syndrome|mrsa|hyperkalemia|kernicterus/)) {
      return "Sulfonamides and Vancomycin";
    }

    if (has(primaryText, /isoniazid|\\binh\\b|rifampin|tuberculosis|\\btb\\b|acyclovir|herpes|varicella|zoster|fungal|fungi|candida|candidiasis|nystatin|amphotericin|fluconazole|terbinafine|tinea|malaria|chloroquine|parasite|protozoa/)) {
      return "Antifungals, Antivirals, Antimalarials, and Antituberculars";
    }

    if (has(primaryText, /culture|sensitivity|resistance|superinfection|normal flora|bactericidal|bacteriostatic|antibiogram|broad[-\\s]?spectrum|full course|no antibiotics for viruses/)) {
      return "Antibacterial Selection, Resistance, and Superinfection";
    }

    if (has(primaryText, /infection process|microbe|pathogen|virus|bacteria|fungi|parasite|innate|adaptive|opportunistic|communicable|pyrexia|malaise|leukocytosis|endotoxin|exotoxin|capsule|gram[-\\s]?positive|gram[-\\s]?negative|aerobic|anaerobic/)) {
      return "Infection Pathophysiology and Microbes";
    }

    return "Anti-Infective Pharmacology and Antibiotic Safety";
  }

  if (question.week === 7 || has(contextText, /endocrine/)) {
    if (has(primaryText, /diabetes|insulin|metformin|glucose|hyperglyc|hypoglyc|ketoacidosis|\bdka\b|\bhhns\b|hyperosmolar|beta[-\s]?cell|pancreas|glucagon|a1c|antihyperglycemic|sglt|glp[-\s]?1|empagliflozin|semaglutide/)) {
      return "Diabetes and Glucose Regulation";
    }

    return "Endocrine and Adrenal Disorders";
  }

  if (has(primaryText, /anti[-\s]?infect|antibiotic|penicillin|cephalosporin|fluoroquinolone|culture/)) {
    return "Anti-Infective Pharmacology and Antibiotic Safety";
  }

  if (has(primaryText, /rights? of medication|right dose|right time|right route|right drug|right patient|safe medication administration|medication administration|medication checks|two patient identifiers|pharmacokinetic|half[-\s]?life|first[-\s]?pass|steady[-\s]?state|enzyme inducer|protein binding|lipophilic analgesic|schedule ii|opioid count|controlled substance|safe disposal|prescription medications at home|administration of medication|treatment regimen|method used to administer|drug is available in liquid|drugs being taken|trailing zero|dosing error|tenfold|1\.0 mg/)) {
    return "Medication Administration, Safety, and Pharmacokinetics";
  }

  if (has(primaryText, /copd|emphysema|chronic bronchitis|bronchiectasis|barrel chest|blue bloater|cor pulmonale/)) {
    return "COPD and Chronic Respiratory Disease";
  }

  if (has(primaryText, /leukemia|lymphoma|reed[-\s]?sternberg|lymphoblast|lymphoid|myeloid|cll|acute lymphoblastic|neutrophil|basophil|eosinophil|granulocyte|agranulocyte|leukocyte|white blood cell/)) {
    return "Leukocytes, Leukemia, and Lymphoma";
  }

  if (has(primaryText, /anemia|erythro|hemoglobin|hematocrit|hematopoiesis|\biron\b|iron[-\s]?deficiency|epoetin|pernicious|b12|red blood cell|oxygen-carrying|mcv|rdw/)) {
    return "Hematopoiesis, Anemia, and Erythropoietin";
  }

  if (has(primaryText, /v\/q|ventilation\/perfusion|dead space|shunt/)) {
    return "Respiratory Physiology and Gas Exchange";
  }

  if (has(primaryText, /heparin|lmwh|warfarin|coumadin|anticoagul|disseminated intravascular coagulation|\bdic\b|clot|thrombo|embol|dvt|a?ptt|inr|prothrombin|fibrin|alteplase|\btpa\b|petechiae|hematuria|bleeding gums|protamine|phytonadione|vitamin k|thrombocytopenia|blood dyscrasia|platelet count|platelets?/)) {
    return "Hemostasis, Anticoagulation, and Thrombolytics";
  }

  if (has(primaryText, /monoclonal|immunosuppress|transplant|tacrolimus|mycophenolate|methotrexate|b[-\s]?cell|t[-\s]?cell suppress|humoral immunity|cell-mediated|adaptive|memory b/)) {
    return "Adaptive Immunity and Immunosuppression";
  }

  if (has(primaryText, /cushing|cortisol|adrenal|thyroid|tetany|endocrine|hormone|estrogen|progesterone|bone density|prednisone/)) {
    return "Endocrine and Adrenal Disorders";
  }

  if (has(primaryText, /diabetes|insulin|metformin|glucose|hyperglyc|hypoglyc|ketoacidosis|beta[-\s]?cell|pancreas|antihyperglycemic/)) {
    return "Diabetes and Glucose Regulation";
  }

  if (has(primaryText, /diuretic|furosemide|spironolactone|hydrochlorothiazide|hctz|mannitol|loop diuretic|potassium[-\s]?sparing|thiazide/)) {
    return "Diuretics and Renal Medications";
  }

  if (has(primaryText, /ulcer|omeprazole|ppi|proton pump|famotidine|h2 receptor|antacid|calcium carbonate|gastric acid|h pylori|zollinger|parietal|atpase|acid rebound|duodenal/)) {
    return "Peptic Ulcer Disease and Acid Suppression";
  }

  if (has(primaryText, /asthma|albuterol|saba|laba|bronchodilator|bronchospasm|bronchodilation|fluticasone|corticosteroid|leukotriene|montelukast|zafirlukast|ipratropium|tiotropium|muscarinic|inhaler|airway emergency/)) {
    return "Asthma and Bronchodilator Therapy";
  }

  if (has(primaryText, /antihistamine|diphenhydramine|histamine|allerg|sedation|urinary retention|blurred vision|loratadine|fexofenadine|h1 receptor/)) {
    return "Antihistamines and Allergy Pharmacology";
  }

  if (has(primaryText, /anaphylaxis|type i|type ii|type iii|type iv|hypersensitivity|inflamm|innate|phagocytosis|chemotaxis|autoimmune|immune response|immunoglobulin|ige|antigen|antibody|mast cell|basophil|skin and mucous|hageman|blood transfusion|hemolytic transfusion/)) {
    return "Innate Immunity and Hypersensitivity";
  }

  if (has(primaryText, /abg|arterial blood gas|acid[-\s]?base|acidosis|alkalosis|bicarbonate|hco3|paco2|pao2|\bph\b|calcium|sodium|potassium|magnesium|electrolyte|hyperkalemia|hypokalemia|hypercalcemia|hypocalcemia|hyponatremia|hypomagnesemia|polyuria|paresthesia|laryngospasm/)) {
    return "Fluid, Electrolyte, and Acid-Base Balance";
  }

  if (has(primaryText, /kidney|renal|nephron|nephrotoxic|gfr|bun|creatinine|ckd|acute kidney injury|acute renal failure|chronic kidney disease|erythropoietin/)) {
    return "Renal Function, Kidney Injury, and CKD";
  }

  if (has(primaryText, /constipation|diarrhea|vomit|nausea|loperamide|bisacodyl|ondansetron|bowel movement|stool|melena|medulla|elimination|peristalsis/)) {
    return "Bowel Motility, Nausea, Vomiting, and Elimination";
  }

  if (has(primaryText, /gastrointestinal|digest|absorption|saliva|mucosal|submucosal|serosal|muscularis|small intestine|stomach|esophagus|gi tract/)) {
    return "GI Anatomy, Digestion, and Absorption";
  }

  if (has(primaryText, /adrenergic|cholinergic|epinephrine|norepinephrine|catecholamine|alpha|beta 1|beta 2|vasopressor|phentolamine|sympathetic/)) {
    return "Autonomic Pharmacology and Vasoactive Medications";
  }

  if (has(primaryText, /pneumonia|atelectasis|ards|acute respiratory distress|pneumothorax|cough and deep breathe|incentive spirometry|bacterial pneumonia|hemoptysis|mastectomy|surgical procedure/)) {
    return "Pneumonia, Atelectasis, ARDS, and Pneumothorax";
  }

  if (has(primaryText, /heart failure|cardiogenic shock|\bshock\b|\bedema\b|jvd|neck vein|orthopnea|hepatic engorgement|cardiac output|preload|afterload|pulmonary edema|contractility|fluid overload|digoxin|entresto/)) {
    return "Heart Failure, Shock, and Fluid Overload";
  }

  if (has(primaryText, /alveoli|surfactant|tidal volume|ventilation|respiration|gas exchange|oxygen|carbon dioxide|diffusion|dyspnea|hypoxemia|lung sounds|wheezing/)) {
    return "Respiratory Physiology and Gas Exchange";
  }

  if (has(primaryText, /atrial fibrillation|atrial flutter|arrhythmia|dysrhythmia|ecg|ekg|sawtooth|bradycardia|tachycardia|sa node|av node|pr interval|heart block|qrs/)) {
    return "Cardiac Conduction and Dysrhythmias";
  }

  if (has(primaryText, /myocardial infarction|\bmi\b|angina|nitroglycerin|troponin|st[-\s]?segment|coronary artery disease|ischemia|chest pain|statin|atorvastatin/)) {
    return "Coronary Artery Disease, Angina, and Myocardial Infarction";
  }

  if (has(primaryText, /hypertension|blood pressure|lisinopril|ace inhibitor|metoprolol|beta blocker|calcium[-\s]?channel|vasodilator|amlodipine|diltiazem|salt substitute|angioedema/)) {
    return "Hypertension and Cardiovascular Pharmacology";
  }

  if (has(primaryText, /valve|atria|atrium|ventricle|septum|chambers|mitral|tricuspid|pulmonic|aortic|circulation/)) {
    return "Cardiac Anatomy, Valves, and Circulation";
  }

  if (has(primaryText, /cell injury|apoptosis|necrosis|metaplasia|hyperplasia|hypertrophy|atrophy|gangrene|steatosis|granuloma|irreversible|lysosomal/)) {
    return "Cell Injury, Adaptation, and Inflammation";
  }

  if (has(contextText, /pulmonary|respiratory/)) return "Respiratory Physiology and Gas Exchange";
  if (has(contextText, /cardiovascular/)) return "Cardiac Anatomy, Valves, and Circulation";
  if (has(contextText, /renal/)) return "Renal Function, Kidney Injury, and CKD";
  if (has(contextText, /gastrointestinal/)) return "GI Anatomy, Digestion, and Absorption";
  if (has(contextText, /hematology/)) return "Hematopoiesis, Anemia, and Erythropoietin";
  if (has(contextText, /immun/)) return "Innate Immunity and Hypersensitivity";

  return "Medication Administration, Safety, and Pharmacokinetics";
}

function has(text, regex) {
  return regex.test(text);
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/\bh\.\s*pylori\b/g, "h pylori")
    .replace(/\blwmh\b/g, "lmwh");
}

function main() {
  const questions = JSON.parse(fs.readFileSync(questionsPath, "utf8"));
  const updated = questions.map((question) => ({
    ...question,
    subtopic: classify(question),
  }));

  const counts = new Map();
  for (const question of updated) counts.set(question.subtopic, (counts.get(question.subtopic) ?? 0) + 1);
  const missing = SUBTOPICS.filter((subtopic) => !counts.has(subtopic));

  fs.writeFileSync(questionsPath, `${JSON.stringify(updated, null, 2)}\n`);

  console.log([...counts.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([key, count]) => `${count}\t${key}`).join("\n"));
  if (missing.length > 0) {
    console.warn(`\nSubtopics with no questions: ${missing.join(", ")}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  SUBTOPICS,
  classifySubtopic: classify,
  normalize,
};
