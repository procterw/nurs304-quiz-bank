const medMapData = {
  medicationClasses: [
    {
      name: "Glucocorticoids / corticosteroids",
      week: 1,
      drugs: ["Prednisone"],
      prototype: { name: "Prednisone", inCourseMaterial: true },
      mechanism: "Anti-inflammatory and immunosuppressive therapy; the study guides connect corticosteroids with inflammation, immune effects, cortisol physiology, Addison disease, and Cushing syndrome.",
      considerations: "Study guides flag immune-system implications, nursing interventions, corticosteroid replacement, and hyperglycemia/cortisol effects. Contraindication details are not fully specified in the study guides.",
      conditions: ["Autoimmune disease", "Inflammation", "Addison disease", "Cushing disease / syndrome"]
    },
    {
      name: "T and B cell suppressors",
      week: 1,
      drugs: ["Tacrolimus", "Mycophenolate mofetil"],
      prototype: { name: "Tacrolimus and mycophenolate mofetil", inCourseMaterial: true },
      mechanism: "Suppress lymphocyte-driven immune responses; the immune study guide places these in the context of immune disease and graft-versus-host disease.",
      considerations: "Course guide names the class and prototypes but does not provide detailed contraindications in the study-guide text.",
      conditions: ["Autoimmune disease", "Graft-versus-host disease"]
    },
    {
      name: "Anti-metabolites",
      week: 1,
      drugs: ["Methotrexate"],
      prototype: { name: "Methotrexate", inCourseMaterial: true },
      mechanism: "Interferes with cellular metabolism and proliferation; listed with immune/inflammation pharmacology.",
      considerations: "Study guide lists the class and prototype; detailed administration parameters are not specified in the extracted study-guide text.",
      conditions: ["Autoimmune disease", "Inflammation"]
    },
    {
      name: "Monoclonal antibodies",
      week: 1,
      drugs: ["Adalimumab"],
      prototype: { name: "Adalimumab", inCourseMaterial: true },
      mechanism: "Targeted antibody therapy used to alter immune signaling.",
      considerations: "Study guide lists adalimumab as the prototype; detailed contraindications are not specified in the extracted study-guide text.",
      conditions: ["Autoimmune disease", "Inflammation"]
    },
    {
      name: "ACE inhibitors",
      week: 2,
      drugs: ["Lisinopril"],
      prototype: { name: "Lisinopril", inCourseMaterial: true },
      mechanism: "Reduces angiotensin II and aldosterone effects in RAAS control, lowering vasoconstriction and volume workload.",
      considerations: "Quiz items emphasize cough, angioedema, hyperkalemia, renal considerations, and the 36-hour washout before ARNI therapy.",
      conditions: ["Hypertension", "Heart failure"]
    },
    {
      name: "Angiotensin II receptor blockers",
      week: 2,
      drugs: [],
      prototype: { name: "Class listed; prototype not specified in study guide", inCourseMaterial: false },
      mechanism: "Blocks angiotensin II receptor effects in the RAAS pathway.",
      considerations: "Study guide lists the class; quiz items emphasize hypotension and hyperkalemia, with less cough than ACE inhibitors.",
      conditions: ["Hypertension", "Heart failure"]
    },
    {
      name: "Angiotensin receptor/neprilysin inhibitor",
      week: 2,
      drugs: ["Sacubitril/valsartan (Entresto)"],
      prototype: { name: "Entresto / ARNI", inCourseMaterial: true },
      mechanism: "RAAS/neprilysin pathway medication class used in heart failure management.",
      considerations: "Quiz items emphasize avoiding overlap with ACE inhibitors because a 36-hour washout lowers angioedema risk.",
      conditions: ["Heart failure"]
    },
    {
      name: "Calcium channel blockers",
      week: 2,
      drugs: ["Diltiazem", "Amlodipine"],
      prototype: { name: "Diltiazem, amlodipine", inCourseMaterial: true },
      mechanism: "Reduces calcium-mediated vascular and/or cardiac muscle activity; study guide links dihydropyridines to hypertension and angina.",
      considerations: "Study guide asks for vital-sign parameters and special considerations. Course notes mention switching to other calcium-channel-blocker classes as an alternative in hypertension management.",
      conditions: ["Hypertension", "Angina", "Dysrhythmia"]
    },
    {
      name: "Beta adrenergic blockers",
      week: 2,
      drugs: ["Carvedilol", "Metoprolol"],
      prototype: { name: "Carvedilol, metoprolol", inCourseMaterial: true },
      mechanism: "Blocks beta-adrenergic effects; study guide specifically asks what cardioselective beta blockade means.",
      considerations: "Vital signs are relevant before administration. Cardioselectivity matters for patient populations such as asthma/COPD. Course notes identify labetalol as safest beta blocker for pregnancy/lactation.",
      conditions: ["Hypertension", "Heart failure", "Angina", "Dysrhythmia"]
    },
    {
      name: "Organic nitrates",
      week: 2,
      drugs: ["Nitroglycerin"],
      prototype: { name: "Nitroglycerin", inCourseMaterial: true },
      mechanism: "Vasodilator class used for coronary artery disease/angina symptoms.",
      considerations: "Study guide explicitly calls out side effects, drug-drug interactions, and cautious clinical situations.",
      conditions: ["Angina", "Coronary artery disease", "Acute coronary syndrome"]
    },
    {
      name: "Potassium channel blockers",
      week: 2,
      drugs: ["Amiodarone"],
      prototype: { name: "Amiodarone", inCourseMaterial: true },
      mechanism: "Antiarrhythmic class affecting potassium-channel mediated cardiac repolarization.",
      considerations: "Study guide explicitly gives caution using amiodarone in people with thyroid dysfunction.",
      conditions: ["Dysrhythmia"]
    },
    {
      name: "HMG-CoA reductase inhibitors",
      week: 2,
      drugs: ["Atorvastatin"],
      prototype: { name: "Atorvastatin", inCourseMaterial: true },
      mechanism: "Reduces hepatic cholesterol synthesis; study guide asks why reducing hepatic lipid production matters in heart disease.",
      considerations: "Course materials connect statins to CAD/atherosclerosis risk reduction; monitor for class safety issues per drug-card expectations.",
      conditions: ["Coronary artery disease", "Atherosclerosis"]
    },
    {
      name: "Cholesterol absorption inhibitors",
      week: 2,
      drugs: ["Ezetimibe"],
      prototype: { name: "Ezetimibe", inCourseMaterial: true },
      mechanism: "Reduces cholesterol absorption; listed in CAD/lipid pharmacology.",
      considerations: "Study guide names ezetimibe as the prototype; detailed contraindications are not specified in extracted text.",
      conditions: ["Coronary artery disease", "Atherosclerosis"]
    },
    {
      name: "Antihistamines",
      week: 3,
      drugs: ["Diphenhydramine", "Cetirizine", "Loratadine", "Fexofenadine"],
      prototype: { name: "Diphenhydramine, cetirizine, fexofenadine", inCourseMaterial: true },
      mechanism: "Blocks histamine effects in hypersensitivity/allergy contexts.",
      considerations: "Study guide separates first-, second-, and third-generation prototypes and asks what drugs might interact with the class.",
      conditions: ["Hypersensitivity reactions"]
    },
    {
      name: "SABA - short-acting beta 2 adrenergic agonists",
      week: 3,
      drugs: ["Albuterol"],
      prototype: { name: "Albuterol", inCourseMaterial: true },
      mechanism: "Short-acting beta-2 agonist bronchodilation.",
      considerations: "Study guide asks when to employ long- vs short-acting beta-2 agonists and how to teach asthma medication management.",
      conditions: ["Asthma", "Status asthmaticus", "COPD / emphysema"]
    },
    {
      name: "LABA - long-acting beta 2 adrenergic agonists",
      week: 3,
      drugs: ["Salmeterol", "Formoterol"],
      prototype: { name: "Formoterol", inCourseMaterial: true },
      mechanism: "Long-acting beta-2 bronchodilation.",
      considerations: "Study guide asks when to employ long- vs short-acting beta-2 agonists.",
      conditions: ["Asthma", "COPD / emphysema"]
    },
    {
      name: "SAMA - short-acting muscarinic antagonists",
      week: 3,
      drugs: ["Ipratropium"],
      prototype: { name: "Ipratropium", inCourseMaterial: true },
      mechanism: "Short-acting muscarinic antagonism; textbook term noted as anticholinergics.",
      considerations: "Study guide names the class and prototype; detailed contraindications are not specified in the extracted guide.",
      conditions: ["Asthma", "COPD / emphysema"]
    },
    {
      name: "LAMA - long-acting muscarinic antagonists",
      week: 3,
      drugs: ["Tiotropium", "Umeclidinium", "Aclidinium"],
      prototype: { name: "Tiotropium", inCourseMaterial: true },
      mechanism: "Long-acting muscarinic antagonism for bronchodilation.",
      considerations: "Study guide names the class and prototype; detailed contraindications are not specified in the extracted guide.",
      conditions: ["COPD / emphysema"]
    },
    {
      name: "ICS - inhaled corticosteroids",
      week: 3,
      drugs: ["Budesonide", "Beclomethasone", "Fluticasone"],
      prototype: { name: "Budesonide", inCourseMaterial: true },
      mechanism: "Reduces airway inflammation; corticosteroid immune effects are specifically called out for review.",
      considerations: "Study guide asks for corticosteroid immune-system implications and nursing interventions.",
      conditions: ["Asthma"]
    },
    {
      name: "LTRA - leukotriene receptor antagonists",
      week: 3,
      drugs: ["Montelukast", "Zafirlukast"],
      prototype: { name: "Zafirlukast", inCourseMaterial: true },
      mechanism: "Blocks leukotriene receptor effects involved in airway inflammation/bronchoconstriction.",
      considerations: "Study guide lists zafirlukast as prototype; detailed contraindications are not specified in extracted text.",
      conditions: ["Asthma"]
    },
    {
      name: "Loop diuretics",
      week: 4,
      drugs: ["Furosemide"],
      prototype: { name: "Furosemide", inCourseMaterial: true },
      mechanism: "Loop diuresis removes excess fluid; quiz items emphasize rapid fluid removal in heart failure and monitoring for hypotension, potassium loss, urine output, and ototoxicity with high-dose therapy.",
      considerations: "Assess blood pressure, urine output, daily weight/fluid status, potassium, renal function, and hearing changes when relevant.",
      conditions: ["Hypervolemia", "Heart failure"]
    },
    {
      name: "Thiazides",
      week: 4,
      drugs: ["HCTZ"],
      prototype: { name: "HCTZ", inCourseMaterial: true },
      mechanism: "Thiazide diuretic effect supports hypertension and mild fluid management; HCTZ is tested with blood pressure, electrolytes, and volume assessment.",
      considerations: "Assess blood pressure and monitor fluid status and electrolytes, especially potassium, before administration.",
      conditions: ["Hypertension", "Hypervolemia"]
    },
    {
      name: "Aldosterone antagonists",
      week: 4,
      drugs: ["Spironolactone"],
      prototype: { name: "Spironolactone", inCourseMaterial: true },
      mechanism: "Aldosterone antagonism promotes sodium/water loss while sparing potassium.",
      considerations: "Quiz items emphasize hyperkalemia risk, especially with CKD, diabetes, ACE inhibitors, or potassium salt substitutes.",
      conditions: ["Heart failure", "Hypervolemia", "Hypertension"]
    },
    {
      name: "Osmotic diuretics",
      week: 4,
      drugs: ["Mannitol"],
      prototype: { name: "Mannitol", inCourseMaterial: true },
      mechanism: "Osmotic diuresis; renal guide lists mannitol as prototype.",
      considerations: "Study guide asks for interactions and patient population/diagnosis for use.",
      conditions: ["Acute kidney injury", "Fluid overload risk"]
    },
    {
      name: "Vasopressors / alpha- and beta-adrenergic agonists",
      week: 4,
      drugs: ["Norepinephrine", "Epinephrine", "Dopamine", "Dobutamine"],
      prototype: { name: "Norepinephrine, epinephrine, dopamine, dobutamine", inCourseMaterial: true },
      mechanism: "Adrenergic agonist support of vascular tone and/or cardiac output.",
      considerations: "Renal guide asks why vasopressors are not used broadly, such as why epinephrine is not used just to cause bronchodilation.",
      conditions: ["Shock", "Hypotension / poor perfusion", "Heart failure"]
    },
    {
      name: "Electrolyte replacement",
      week: 4,
      drugs: ["Potassium chloride", "Magnesium sulfate"],
      prototype: { name: "Potassium chloride, magnesium sulfate", inCourseMaterial: true },
      mechanism: "Restores clinically important electrolyte deficits.",
      considerations: "Study guide specifically calls out KCl IV administration precautions and MgSO4 toxicity; verify route, dilution/rate, renal function, and serum level trends.",
      conditions: ["Electrolyte imbalance"]
    },
    {
      name: "Antacids",
      week: 5,
      drugs: ["Mylanta", "Aluminum hydroxide", "Magnesium hydroxide", "Simethicone"],
      prototype: { name: "Mylanta mixture", inCourseMaterial: true },
      mechanism: "Neutralizes gastric acid.",
      considerations: "GI guide asks for administration parameters and lab functions to monitor.",
      conditions: ["Peptic ulcer disease", "GERD"]
    },
    {
      name: "Histamine 2 receptor antagonists",
      week: 5,
      drugs: ["Cimetidine"],
      prototype: { name: "Cimetidine", inCourseMaterial: true },
      mechanism: "Blocks H2 receptor signaling involved in gastric acid secretion.",
      considerations: "GI guide asks for administration parameters and lab monitoring. Course notes mention acid-reducing meds can affect absorption and increase levels of antifungals, benzodiazepines, warfarin, and others.",
      conditions: ["Peptic ulcer disease", "GERD"]
    },
    {
      name: "Proton pump inhibitors",
      week: 5,
      drugs: ["Omeprazole"],
      prototype: { name: "Omeprazole", inCourseMaterial: true },
      mechanism: "Suppresses gastric acid production by affecting parietal-cell proton pump function.",
      considerations: "GI guide asks for administration parameters and lab monitoring; course notes mention reduced absorption of drugs needing acidic pH.",
      conditions: ["Peptic ulcer disease", "GERD"]
    },
    {
      name: "Phenothiazine anti-emetics",
      week: 5,
      drugs: ["Promethazine"],
      prototype: { name: "Promethazine", inCourseMaterial: true },
      mechanism: "Anti-emetic class for nausea/vomiting.",
      considerations: "GI guide names the class and prototype; detailed contraindications are not specified in extracted guide.",
      conditions: ["Nausea and vomiting"]
    },
    {
      name: "5-HT3 / serotonin receptor antagonist anti-emetics",
      week: 5,
      drugs: ["Ondansetron"],
      prototype: { name: "Ondansetron", inCourseMaterial: true },
      mechanism: "Serotonin receptor antagonism used for nausea/vomiting.",
      considerations: "GI guide names ondansetron as prototype; detailed contraindications are not specified in extracted guide.",
      conditions: ["Nausea and vomiting"]
    },
    {
      name: "Laxatives",
      week: 5,
      drugs: ["Psyllium"],
      prototype: { name: "Psyllium", inCourseMaterial: true },
      mechanism: "Promotes stool passage; listed under constipation/elimination pharmacology.",
      considerations: "GI guide asks for parameters for administration and monitoring.",
      conditions: ["Constipation"]
    },
    {
      name: "Cathartics",
      week: 5,
      drugs: ["Bisacodyl"],
      prototype: { name: "Bisacodyl", inCourseMaterial: true },
      mechanism: "Stimulates bowel evacuation.",
      considerations: "GI guide names bisacodyl; detailed contraindications are not specified in extracted guide.",
      conditions: ["Constipation"]
    },
    {
      name: "Anti-diarrheal agents",
      week: 5,
      drugs: ["Loperamide"],
      prototype: { name: "Loperamide", inCourseMaterial: true },
      mechanism: "Reduces diarrhea symptoms by slowing GI transit.",
      considerations: "GI guide asks when it is appropriate to treat diarrhea versus expectant management.",
      conditions: ["Diarrhea"]
    },
    {
      name: "Antiplatelets",
      week: 6,
      drugs: ["Aspirin"],
      prototype: { name: "Aspirin", inCourseMaterial: true },
      mechanism: "Reduces platelet-driven clot formation.",
      considerations: "Heme guide lists antiplatelets with aspirin prototype; detailed contraindications are not specified in extracted guide.",
      conditions: ["Arterial thrombosis", "Acute coronary syndrome", "Coronary artery disease"]
    },
    {
      name: "Anticoagulants",
      week: 6,
      drugs: ["Warfarin", "Heparin"],
      prototype: { name: "Warfarin, heparin", inCourseMaterial: true },
      mechanism: "Reduces coagulation cascade activity to prevent clot extension/formation.",
      considerations: "Course notes mention heparin reversal by protamine and warfarin reversal by vitamin K; warfarin can take 3-5 days or more to become therapeutic.",
      conditions: ["Deep vein thrombosis", "Atrial fibrillation / flutter", "Pulmonary embolism risk"]
    },
    {
      name: "Direct factor Xa inhibitors",
      week: 6,
      drugs: ["Rivaroxaban"],
      prototype: { name: "Rivaroxaban", inCourseMaterial: true },
      mechanism: "Direct factor Xa inhibition in the coagulation pathway.",
      considerations: "Heme guide names rivaroxaban as prototype; detailed contraindications are not specified in extracted guide.",
      conditions: ["Deep vein thrombosis", "Pulmonary embolism risk", "Atrial fibrillation / flutter"]
    },
    {
      name: "Thrombolytics",
      week: 6,
      drugs: ["Alteplase"],
      prototype: { name: "Alteplase", inCourseMaterial: true },
      mechanism: "Breaks down formed clots.",
      considerations: "Heme guide names alteplase; detailed contraindications are not specified in extracted guide.",
      conditions: ["Acute ischemic stroke", "Acute coronary syndrome", "Pulmonary embolism risk"]
    },
    {
      name: "Hemostatics / reversal agents",
      week: 6,
      drugs: ["Thrombin/fibrin", "Protamine sulfate", "Vitamin K"],
      prototype: { name: "Thrombin/fibrin, protamine sulfate, vitamin K", inCourseMaterial: true },
      mechanism: "Supports hemostasis or reverses anticoagulant effects.",
      considerations: "Course notes specify protamine binds heparin into an inactive complex and vitamin K stimulates liver synthesis of clotting factors to reverse warfarin.",
      conditions: ["Bleeding", "Excess anticoagulation", "DIC"]
    },
    {
      name: "Erythropoietin-stimulating agents",
      week: 6,
      drugs: ["Epo"],
      prototype: { name: "Epo", inCourseMaterial: true },
      mechanism: "Stimulates red blood cell production.",
      considerations: "Heme guide lists Epo; course notes mention chemotherapy-induced anemia.",
      conditions: ["Anemia", "Chronic kidney disease"]
    },
    {
      name: "Antianemics",
      week: 6,
      drugs: ["Ferrous sulfate"],
      prototype: { name: "Ferrous sulfate", inCourseMaterial: true },
      mechanism: "Iron replacement for iron-deficiency anemia.",
      considerations: "Heme guide names ferrous sulfate; detailed contraindications are not specified in extracted guide.",
      conditions: ["Anemia"]
    },
    {
      name: "Thyroid hormone",
      week: 7,
      drugs: ["Levothyroxine"],
      prototype: { name: "Levothyroxine", inCourseMaterial: true },
      mechanism: "Thyroid hormone replacement.",
      considerations: "Endocrine guide connects therapy to hypothyroidism and thyroid hormone regulation.",
      conditions: ["Hypothyroidism"]
    },
    {
      name: "Thioamides",
      week: 7,
      drugs: ["Methimazole", "Propylthiouracil (PTU)"],
      prototype: { name: "Methimazole and PTU", inCourseMaterial: true },
      mechanism: "Reduces thyroid hormone production in hyperthyroid states.",
      considerations: "Endocrine guide specifically asks which patient population should use PTU.",
      conditions: ["Hyperthyroidism / Graves disease"]
    },
    {
      name: "Insulins",
      week: 7,
      drugs: ["Rapid acting", "Short acting", "Intermediate acting", "Long acting", "Ultra-long acting", "Premixed"],
      prototype: { name: "Insulin types", inCourseMaterial: true },
      mechanism: "Replaces or supplements insulin effect for blood sugar regulation.",
      considerations: "Endocrine guide asks to note onset, peak, and duration for each type; premixed timing varies and specifics are not required.",
      conditions: ["Type 1 diabetes mellitus", "Type 2 diabetes mellitus", "DKA", "HHNS"]
    },
    {
      name: "Biguanides",
      week: 7,
      drugs: ["Metformin"],
      prototype: { name: "Metformin", inCourseMaterial: true },
      mechanism: "Biguanide antihyperglycemic; quiz items describe reduced hepatic glucose production and improved insulin sensitivity rather than insulin replacement.",
      considerations: "Course questions emphasize taking with meals, lactic acidosis warning symptoms, renal function, and holding around iodinated contrast per protocol.",
      conditions: ["Type 2 diabetes mellitus"]
    },
    {
      name: "SGLT2 inhibitors",
      week: 7,
      drugs: ["Empagliflozin"],
      prototype: { name: "Empagliflozin", inCourseMaterial: true },
      mechanism: "Promotes urinary glucose loss by blocking renal SGLT2 glucose reabsorption.",
      considerations: "Quiz items emphasize hydration, genital/urinary infection teaching, and ketoacidosis warning symptoms even when glucose is not extremely high.",
      conditions: ["Type 2 diabetes mellitus"]
    },
    {
      name: "GLP receptor agonists",
      week: 7,
      drugs: ["Semaglutide"],
      prototype: { name: "Semaglutide", inCourseMaterial: true },
      mechanism: "GLP-1 receptor agonism increases glucose-dependent insulin effect, lowers glucagon, slows gastric emptying, and supports satiety.",
      considerations: "Quiz items emphasize GI effects, delayed gastric emptying, oral semaglutide timing, and screening for concerning pancreatitis or thyroid cancer history per course level.",
      conditions: ["Type 2 diabetes mellitus"]
    },
    {
      name: "Estrogen and progestin hormones",
      week: 7,
      drugs: ["Estradiol", "Progestin"],
      prototype: { name: "Estradiol and progestin", inCourseMaterial: true },
      mechanism: "Hormonal regulation used for contraception and other reproductive/endocrine indications.",
      considerations: "Endocrine guide specifically calls out drug interactions and concern for clotting; also asks why they may be contraindicated with comorbid conditions.",
      conditions: ["Contraception", "Dysmenorrhea"]
    },
    {
      name: "Testosterone",
      week: 7,
      drugs: ["Testosterone"],
      prototype: { name: "Testosterone", inCourseMaterial: true },
      mechanism: "Androgen hormone therapy.",
      considerations: "Quiz items emphasize adverse effects such as polycythemia and thrombotic concern rather than using testosterone as a general sexual-health enhancer.",
      conditions: ["Sexual health / hormone therapy"]
    },
    {
      name: "Aminoglycosides",
      week: 8,
      drugs: ["Gentamicin"],
      prototype: { name: "Gentamicin", inCourseMaterial: true },
      mechanism: "Bactericidal protein-synthesis inhibition, emphasized for aerobic gram-negative infections.",
      considerations: "Monitor renal function, urine output, peak/trough levels when ordered, tinnitus, hearing changes, vertigo, and dizziness. Space from penicillin by 1 hour when both are prescribed.",
      conditions: ["Bacterial infection", "Gram-negative infection", "Nephrotoxicity risk", "Ototoxicity"]
    },
    {
      name: "Fluoroquinolones",
      week: 8,
      drugs: ["Ciprofloxacin"],
      prototype: { name: "Ciprofloxacin", inCourseMaterial: true },
      mechanism: "Bactericidal inhibition of bacterial DNA synthesis.",
      considerations: "Separate from calcium, magnesium, aluminum, iron, dairy, and antacids when instructed. Monitor tendon pain, QT-risk combinations, photosensitivity, renal function, and severe watery diarrhea.",
      conditions: ["Bacterial infection", "Respiratory infection", "Urinary tract infection", "C. difficile superinfection risk", "QT prolongation risk", "Tendon injury risk"]
    },
    {
      name: "Tetracyclines",
      week: 8,
      drugs: ["Doxycycline"],
      prototype: { name: "Doxycycline", inCourseMaterial: true },
      mechanism: "Bacteriostatic protein-synthesis inhibition.",
      considerations: "Separate from dairy, calcium, iron, magnesium, aluminum, and antacids. Teach photosensitivity precautions and avoid use in pregnancy/young children unless specifically indicated because of bone and tooth effects.",
      conditions: ["Bacterial infection", "Respiratory infection", "Photosensitivity", "Bone and tooth development risk"]
    },
    {
      name: "Macrolides",
      week: 8,
      drugs: ["Erythromycin", "Azithromycin"],
      prototype: { name: "Erythromycin / azithromycin", inCourseMaterial: true },
      mechanism: "Bacteriostatic protein-synthesis inhibition; course content highlights respiratory-use alternatives when penicillin allergy limits beta-lactams.",
      considerations: "Review QT-prolonging medications and dysrhythmia history. Monitor for interactions that can increase digoxin toxicity or warfarin bleeding risk.",
      conditions: ["Bacterial infection", "Respiratory infection", "Penicillin allergy alternative", "QT prolongation risk", "Warfarin interaction bleeding risk", "Digoxin toxicity risk"]
    },
    {
      name: "Penicillins",
      week: 8,
      drugs: ["Amoxicillin", "Penicillin G", "Penicillin VK", "Ampicillin", "Piperacillin-tazobactam"],
      prototype: { name: "Amoxicillin", inCourseMaterial: true },
      mechanism: "Beta-lactam cell-wall synthesis inhibition; course slides emphasize bactericidal leakage and cell death.",
      considerations: "Assess allergy history before administration, draw cultures before antibiotics when ordered, monitor renal function and GI effects, and teach full-course adherence.",
      conditions: ["Bacterial infection", "Gram-positive infection", "Gram-negative infection", "Respiratory infection", "Urinary tract infection", "Beta-lactam allergy risk", "C. difficile superinfection risk"]
    },
    {
      name: "Cephalosporins",
      week: 8,
      drugs: ["Cefazolin", "Cephalexin", "Ceftriaxone", "Cefepime"],
      prototype: { name: "Cefazolin", inCourseMaterial: true },
      mechanism: "Beta-lactam cell-wall synthesis inhibition; generation affects gram-positive versus gram-negative coverage.",
      considerations: "Check cephalosporin and penicillin allergy history, monitor BUN/creatinine, use the ordered IV diluent, and watch for GI effects, phlebitis, and superinfection.",
      conditions: ["Bacterial infection", "Gram-positive infection", "Gram-negative infection", "Respiratory infection", "Urinary tract infection", "Skin/bone infection", "Beta-lactam allergy risk", "C. difficile superinfection risk"]
    },
    {
      name: "Carbapenems",
      week: 8,
      drugs: ["Imipenem", "Meropenem", "Ertapenem"],
      prototype: { name: "Ertapenem", inCourseMaterial: true },
      mechanism: "Broad-spectrum beta-lactam cell-wall synthesis inhibition used for severe or multidrug-resistant bacterial infections.",
      considerations: "Verify culture/sensitivity data when available, assess renal function and seizure history, monitor mental status, GI effects, superinfection, and hypersensitivity.",
      conditions: ["Bacterial infection", "Gram-negative infection", "Sepsis", "Intra-abdominal infection", "Hospital-acquired pneumonia", "Beta-lactam allergy risk", "C. difficile superinfection risk", "Seizure risk"]
    },
    {
      name: "Sulfonamides",
      week: 8,
      drugs: ["Trimethoprim-sulfamethoxazole (Bactrim)"],
      prototype: { name: "Trimethoprim-sulfamethoxazole", inCourseMaterial: true },
      mechanism: "Bacteriostatic inhibition of folic acid production, stopping bacterial multiplication.",
      considerations: "Assess renal and liver function, allergy history, pregnancy/lactation and age risks, potassium risk, G6PD deficiency, hydration, photosensitivity, rash, and superinfection.",
      conditions: ["Urinary tract infection", "Bacterial infection", "Pneumocystis jirovecii pneumonia", "Bronchitis", "Otitis media", "Photosensitivity", "Hyperkalemia risk", "Beta-lactam allergy alternative"]
    },
    {
      name: "Glycopeptide antibiotics",
      week: 8,
      drugs: ["Vancomycin"],
      prototype: { name: "Vancomycin", inCourseMaterial: true },
      mechanism: "Inhibits bacterial cell-wall synthesis and is course-linked to serious gram-positive infections, MRSA, and C. difficile therapy by route.",
      considerations: "Monitor peak/trough when ordered, BUN/creatinine, tinnitus, vertigo, hearing loss, IV site phlebitis, and infuse over at least 1 hour to reduce vancomycin flushing syndrome.",
      conditions: ["Gram-positive infection", "MRSA infection", "C. difficile superinfection risk", "Nephrotoxicity risk", "Ototoxicity", "Vancomycin flushing syndrome risk"]
    },
    {
      name: "Nitroimidazoles",
      week: 8,
      drugs: ["Metronidazole"],
      prototype: { name: "Metronidazole", inCourseMaterial: true },
      mechanism: "Anti-infective therapy listed with vancomycin for infection pharmacology; course slides link it to C. difficile treatment options.",
      considerations: "Assess GI tolerance, infection response, alcohol use teaching, hepatic considerations, and whether therapy matches the ordered organism/site.",
      conditions: ["C. difficile superinfection risk", "Bacterial infection", "Anaerobic infection"]
    },
    {
      name: "Antituberculars",
      week: 8,
      drugs: ["Isoniazid (INH)", "Rifampin"],
      prototype: { name: "Isoniazid (INH)", inCourseMaterial: true },
      mechanism: "Inhibits mycobacterial cell-wall formation and growth of dormant cells; active TB requires combination therapy.",
      considerations: "Assess liver enzymes, alcohol use, acetaminophen and phenytoin/benzodiazepine interactions, neuropathy symptoms, seizure history, renal function, and empty-stomach administration.",
      conditions: ["Tuberculosis", "Hepatotoxicity risk", "Peripheral neuropathy risk", "Seizure risk"]
    },
    {
      name: "Antivirals",
      week: 8,
      drugs: ["Acyclovir"],
      prototype: { name: "Acyclovir", inCourseMaterial: true },
      mechanism: "Inhibits viral DNA polymerase, reducing DNA replication for herpesvirus infections.",
      considerations: "Monitor renal and liver function, maintain hydration, infuse IV doses over 1 hour, use hand hygiene/gloves for topical therapy, and review nephrotoxic or seizure-risk combinations.",
      conditions: ["Herpes simplex virus infection", "Varicella-zoster infection", "Nephrotoxicity risk", "Seizure risk"]
    },
    {
      name: "Antifungals",
      week: 8,
      drugs: ["Nystatin", "Amphotericin B", "Fluconazole", "Terbinafine"],
      prototype: { name: "Nystatin / amphotericin B", inCourseMaterial: true },
      mechanism: "Antifungal therapy targets fungal structures that differ from bacteria; course notes emphasize topical therapy when appropriate and toxicity with systemic agents.",
      considerations: "Match route to infection depth, monitor toxicity for systemic therapy, teach correct nystatin oral-suspension use, and watch immunocompromised patients closely.",
      conditions: ["Fungal infection", "Candidiasis", "Tinea infection", "Oral thrush", "Immunocompromised infection risk"]
    },
    {
      name: "Antimalarials",
      week: 8,
      drugs: ["Chloroquine phosphate", "Atovaquone-proguanil", "Mefloquine"],
      prototype: { name: "Chloroquine phosphate", inCourseMaterial: true },
      mechanism: "Antimalarial therapy is used for strain-sensitive prophylaxis or acute malaria treatment; resistance patterns affect selection.",
      considerations: "Check travel region resistance, pregnancy/lactation guidance, visual or retinal history, psoriasis, alcohol use disorder, and adherence timing for prophylaxis.",
      conditions: ["Malaria", "Travel prophylaxis", "Retinal toxicity risk"]
    },
    {
      name: "Salicylates",
      week: 9,
      drugs: ["Aspirin"],
      prototype: { name: "Aspirin", inCourseMaterial: true },
      mechanism: "Analgesic, antipyretic, anti-inflammatory, and antiplatelet effects through cyclooxygenase inhibition.",
      considerations: "Assess bleeding risk, GI irritation/ulcer history, allergy/asthma sensitivity, renal function, and whether the intended dose is for pain, fever, inflammation, or antiplatelet therapy.",
      conditions: ["Pain", "Inflammation", "Fever", "Arterial thrombosis", "Bleeding risk"]
    },
    {
      name: "Non-narcotic analgesic antipyretics",
      week: 9,
      drugs: ["Acetaminophen"],
      prototype: { name: "Acetaminophen", inCourseMaterial: true },
      mechanism: "Non-opioid analgesic and antipyretic effect without meaningful peripheral anti-inflammatory activity.",
      considerations: "Assess total daily dose across products, liver disease, alcohol use, and fever or pain response.",
      conditions: ["Pain", "Fever", "Hepatotoxicity risk"]
    },
    {
      name: "Nonsteroidal anti-inflammatory drugs",
      week: 9,
      drugs: ["Ibuprofen"],
      prototype: { name: "Ibuprofen", inCourseMaterial: true },
      mechanism: "COX inhibition reduces prostaglandin-mediated pain, fever, and inflammation.",
      considerations: "Assess renal function, GI bleeding/ulcer risk, anticoagulant use, blood pressure, heart failure/fluid risk, and pregnancy considerations.",
      conditions: ["Pain", "Inflammation", "Fever", "Renal injury risk", "Bleeding risk"]
    },
    {
      name: "Opioid analgesics",
      week: 9,
      drugs: ["Morphine sulfate"],
      prototype: { name: "Morphine sulfate", inCourseMaterial: true },
      mechanism: "Mu-opioid receptor agonism changes pain perception and response while depressing CNS and respiratory drive.",
      considerations: "Assess pain, sedation, respiratory rate, oxygenation, blood pressure, bowel function, fall risk, and availability of naloxone when overdose is suspected.",
      conditions: ["Pain", "Cancer pain", "CNS depression and fall risk", "Respiratory depression risk", "Constipation"]
    },
    {
      name: "Opioid antagonists",
      week: 9,
      drugs: ["Naloxone"],
      prototype: { name: "Naloxone", inCourseMaterial: true },
      mechanism: "Competitive opioid receptor antagonism reverses opioid-induced respiratory and CNS depression.",
      considerations: "Prioritize airway and breathing, repeat doses when needed, monitor for recurrent respiratory depression, and anticipate acute withdrawal in opioid-dependent patients.",
      conditions: ["Opioid overdose", "Respiratory depression risk", "CNS depression and fall risk"]
    },
    {
      name: "Gamma-aminobutyric acid structural analogs",
      week: 9,
      drugs: ["Gabapentin"],
      prototype: { name: "Gabapentin", inCourseMaterial: true },
      mechanism: "Modulates neuronal excitability and is course-linked to neurogenic pain and seizure-related therapy.",
      considerations: "Monitor sedation, dizziness, fall risk, renal dosing, mood changes, and additive CNS depression.",
      conditions: ["Neurogenic pain", "Seizure disorder", "CNS depression and fall risk"]
    },
    {
      name: "Hydantoins",
      week: 9,
      drugs: ["Phenytoin"],
      prototype: { name: "Phenytoin", inCourseMaterial: true },
      mechanism: "Antiseizure therapy that stabilizes neuronal firing, classically by limiting sodium-channel mediated repetitive discharge.",
      considerations: "Monitor seizure control, drug interactions, toxicity symptoms, oral health, rash, liver function, and pregnancy considerations.",
      conditions: ["Seizure disorder", "Epilepsy", "Drug interaction risk"]
    },
    {
      name: "Benzodiazepines",
      week: 9,
      drugs: ["Diazepam", "Alprazolam"],
      prototype: { name: "Diazepam / alprazolam", inCourseMaterial: true },
      mechanism: "Enhances GABA activity, reducing neuronal activity and producing anxiolytic, sedative, and antiseizure effects depending on context.",
      considerations: "Avoid alcohol and other CNS depressants, assess respiratory disease, liver disease, substance-use history, older-adult fall risk, glaucoma, lactation, and activities requiring alertness.",
      conditions: ["Generalized anxiety disorder", "Panic attack", "Seizure disorder", "CNS depression and fall risk", "Respiratory depression risk"]
    },
    {
      name: "Dopaminergic antiparkinson agents",
      week: 9,
      drugs: ["Levodopa-carbidopa"],
      prototype: { name: "Levodopa-carbidopa", inCourseMaterial: true },
      mechanism: "Restores dopaminergic signaling in Parkinson disease by providing dopamine precursor therapy with peripheral decarboxylase inhibition.",
      considerations: "Assess symptom response, orthostatic hypotension, dyskinesias, hallucinations/confusion, medication timing, and wearing-off effects.",
      conditions: ["Parkinson disease", "Dopamine deficiency"]
    },
    {
      name: "Cholinesterase inhibitors",
      week: 9,
      drugs: ["Donepezil"],
      prototype: { name: "Donepezil", inCourseMaterial: true },
      mechanism: "Reversible indirect-acting cholinergic effect that increases acetylcholine signaling for Alzheimer-related cognitive symptoms.",
      considerations: "Monitor bradycardia/syncope risk, GI effects, weight loss, sleep disturbance, and caregiver understanding that therapy supports symptoms rather than curing dementia.",
      conditions: ["Alzheimer disease", "Dementia", "Bradycardia risk"]
    },
    {
      name: "Selective serotonin reuptake inhibitors",
      week: 9,
      drugs: ["Fluoxetine"],
      prototype: { name: "Fluoxetine", inCourseMaterial: true },
      mechanism: "Blocks serotonin reuptake in the brain and is course-linked to depression, OCD, premenstrual dysphoric disorder, and anxiety treatment.",
      considerations: "Teach delayed onset, do not stop abruptly, avoid St. John's wort and MAOI/thioridazine combinations, monitor suicidality in young adults, serotonin syndrome, QT risk, bleeding, GI effects, and sexual dysfunction.",
      conditions: ["Major depressive disorder", "Generalized anxiety disorder", "Panic attack", "Serotonin syndrome risk", "QT prolongation risk", "Bleeding risk"]
    }
  ],
  conditions: [
    {
      name: "Autoimmune disease",
      mechanism: "The immune study guide asks for the definition and pathophysiology mechanisms of autoimmune disease: immune activity is directed against self tissues.",
      sideEffects: ["Inflammation and tissue injury depend on the target organ system."],
      relevantSystems: ["Immune system", "T cells", "B cells", "Inflammatory pathways"],
      drugClasses: ["Glucocorticoids / corticosteroids", "T and B cell suppressors", "Anti-metabolites", "Monoclonal antibodies"]
    },
    {
      name: "Graft-versus-host disease",
      mechanism: "The immune guide flags graft-versus-host disease as an immune-mediated condition where donor immune cells react against host tissue.",
      sideEffects: ["Course guide does not list specific manifestations in the extracted text."],
      relevantSystems: ["Immune system", "T cells", "Transplant response"],
      drugClasses: ["T and B cell suppressors", "Glucocorticoids / corticosteroids"]
    },
    {
      name: "Heart failure",
      mechanism: "The cardiology guide frames heart failure as pump failure and asks students to distinguish right-sided versus left-sided symptoms and classification systems.",
      sideEffects: ["Left-sided symptoms are tied to pulmonary congestion; right-sided symptoms are tied to systemic venous congestion."],
      relevantSystems: ["Heart", "Preload", "Afterload", "Contractility", "Cardiac output", "RAAS"],
      drugClasses: ["ACE inhibitors", "Angiotensin II receptor blockers", "Angiotensin receptor/neprilysin inhibitor", "Beta adrenergic blockers", "Loop diuretics", "Aldosterone antagonists"]
    },
    {
      name: "Coronary artery disease",
      mechanism: "The cardiology guide asks how CAD progresses into acute coronary syndrome and myocardial infarction, and asks the role of cholesterol in heart disease.",
      sideEffects: ["Angina and myocardial ischemia/infarction are the key course-linked consequences."],
      relevantSystems: ["Coronary arteries", "Cholesterol", "Atherosclerosis", "Myocardium", "Platelets"],
      drugClasses: ["Organic nitrates", "HMG-CoA reductase inhibitors", "Cholesterol absorption inhibitors", "Antiplatelets", "Beta adrenergic blockers"]
    },
    {
      name: "Dysrhythmia",
      mechanism: "The cardiology guide asks for causes and clinical manifestations of abnormal heart rhythm and reviews the conduction system.",
      sideEffects: ["Clinical manifestations are not enumerated in the extracted guide; rhythm instability can affect cardiac output."],
      relevantSystems: ["SA node", "AV node", "Cardiac conduction", "Electrolytes", "Myocardium"],
      drugClasses: ["Potassium channel blockers", "Beta adrenergic blockers", "Calcium channel blockers"]
    },
    {
      name: "Hypertension",
      mechanism: "The cardiology guide asks for pathophysiology, clinical manifestations, and risks of untreated hypertension.",
      sideEffects: ["Untreated hypertension is linked to cardiac and renal risk in the guides."],
      relevantSystems: ["Blood vessels", "Kidneys", "RAAS", "Afterload", "Heart"],
      drugClasses: ["ACE inhibitors", "Angiotensin II receptor blockers", "Calcium channel blockers", "Beta adrenergic blockers", "Thiazides", "Loop diuretics"]
    },
    {
      name: "Asthma",
      mechanism: "The pulmonary guide identifies bronchoconstriction as the essential event and asks what underlying process makes asthma chronic.",
      sideEffects: ["Status asthmaticus and impaired ventilation are specifically flagged for review."],
      relevantSystems: ["Bronchi", "Airway smooth muscle", "Inflammation", "Ventilation", "Beta-2 receptors", "Muscarinic receptors"],
      drugClasses: ["SABA - short-acting beta 2 adrenergic agonists", "LABA - long-acting beta 2 adrenergic agonists", "ICS - inhaled corticosteroids", "LTRA - leukotriene receptor antagonists", "Antihistamines"]
    },
    {
      name: "COPD / emphysema",
      mechanism: "The pulmonary guide describes emphysema as obstructive lung disease involving alveolar changes and inflammation.",
      sideEffects: ["Symptoms result from alveolar changes and altered ventilation/perfusion relationships."],
      relevantSystems: ["Alveoli", "Airway inflammation", "Ventilation", "Perfusion"],
      drugClasses: ["SABA - short-acting beta 2 adrenergic agonists", "LABA - long-acting beta 2 adrenergic agonists", "SAMA - short-acting muscarinic antagonists", "LAMA - long-acting muscarinic antagonists"]
    },
    {
      name: "Hypersensitivity reactions",
      mechanism: "The pulmonary guide asks for types of hypersensitivity reactions and classes used for treatment.",
      sideEffects: ["Allergy-type symptoms are linked to histamine and immune activation in course materials."],
      relevantSystems: ["Immune system", "Histamine", "Mast cells/basophils", "Airways"],
      drugClasses: ["Antihistamines", "Glucocorticoids / corticosteroids", "LTRA - leukotriene receptor antagonists"]
    },
    {
      name: "Electrolyte imbalance",
      mechanism: "The renal guide asks for hypo- and hyper-states for sodium, potassium, chloride, calcium, magnesium, and phosphate.",
      sideEffects: ["Clinical manifestations vary by electrolyte and direction of imbalance."],
      relevantSystems: ["Kidneys", "Renal tubules", "Sodium", "Potassium", "Calcium", "Magnesium", "Phosphate"],
      drugClasses: ["Electrolyte replacement", "Loop diuretics", "Thiazides", "Aldosterone antagonists"]
    },
    {
      name: "Renal failure",
      mechanism: "The renal guide asks for acute and chronic renal failure risk factors, symptoms, and fluid/electrolyte concerns.",
      sideEffects: ["Major concerns include fluid and electrolyte changes that require monitoring."],
      relevantSystems: ["Kidneys", "Renal tubules", "Fluid balance", "Electrolytes", "Erythropoietin"],
      drugClasses: ["Loop diuretics"]
    },
    {
      name: "Acute kidney injury",
      mechanism: "Course quiz items specifically pair mannitol with acute renal failure/AKI and require recognizing IV administration for osmotic diuresis.",
      sideEffects: ["Fluid and electrolyte shifts require close monitoring."],
      relevantSystems: ["Kidneys", "Osmotic diuresis", "Fluid balance"],
      drugClasses: ["Osmotic diuretics"]
    },
    {
      name: "Chronic kidney disease",
      mechanism: "Course questions connect CKD with reduced erythropoietin production and anemia, and with high hyperkalemia risk when potassium-sparing drugs are used.",
      sideEffects: ["Anemia", "Fluid overload", "Electrolyte imbalance such as hyperkalemia"],
      relevantSystems: ["Kidneys", "Erythropoietin", "Potassium", "Fluid balance"],
      drugClasses: ["Erythropoietin-stimulating agents"]
    },
    {
      name: "Fluid overload risk",
      mechanism: "Osmotic diuretics can worsen volume status if fluid shifts are not tolerated; this is a monitoring concept rather than a treatment target.",
      sideEffects: ["Pulmonary edema or worsening edema risk if fluid shifts are unsafe."],
      relevantSystems: ["Fluid balance", "Kidneys", "Cardiopulmonary status"],
      drugClasses: ["Osmotic diuretics"]
    },
    {
      name: "Shock",
      mechanism: "The renal guide asks for the four different types of shock and pathology for each type.",
      sideEffects: ["Perfusion failure and hemodynamic instability are implied by the vasopressor/inotrope pharmacology focus."],
      relevantSystems: ["Vascular tone", "Cardiac output", "Perfusion", "Adrenergic receptors"],
      drugClasses: ["Vasopressors / alpha- and beta-adrenergic agonists"]
    },
    {
      name: "Peptic ulcer disease",
      mechanism: "The GI guide asks for PUD pathophysiology, primary causes, location, and major signs and symptoms.",
      sideEffects: ["Major signs and symptoms are requested in the guide but not listed in the extracted text."],
      relevantSystems: ["Stomach", "Duodenum", "Gastric acid", "Parietal cells", "Mucosal protection"],
      drugClasses: ["Antacids", "Histamine 2 receptor antagonists", "Proton pump inhibitors"]
    },
    {
      name: "GERD",
      mechanism: "The GI guide asks for GERD pathophysiology, contributing factors, symptoms, and sequelae if untreated.",
      sideEffects: ["Symptoms and sequelae are requested in the guide but not listed in the extracted text."],
      relevantSystems: ["Esophagus", "Lower esophageal sphincter", "Gastric acid", "Parietal cells"],
      drugClasses: ["Antacids", "Histamine 2 receptor antagonists", "Proton pump inhibitors"]
    },
    {
      name: "Constipation",
      mechanism: "The GI guide asks students to define constipation and identify structures needed for stool elimination.",
      sideEffects: ["Infrequent or difficult elimination is the key course concept."],
      relevantSystems: ["Large intestine", "GI motility", "Elimination reflexes"],
      drugClasses: ["Laxatives", "Cathartics"]
    },
    {
      name: "Diarrhea",
      mechanism: "The GI guide asks students to define diarrhea and decide when to treat versus allow expectant management.",
      sideEffects: ["Fluid and electrolyte concerns are relevant to diarrhea management."],
      relevantSystems: ["Intestines", "GI motility", "Fluid balance", "Electrolytes"],
      drugClasses: ["Anti-diarrheal agents"]
    },
    {
      name: "Anemia",
      mechanism: "The heme guide asks students to define macrocytic, microcytic, and normocytic anemia, including iron deficiency and nutritional deficiencies.",
      sideEffects: ["Symptoms result from insufficient red blood cells and reduced oxygen-carrying capacity."],
      relevantSystems: ["Red blood cells", "Hemoglobin", "Bone marrow", "Iron", "B12/folate", "Erythropoietin"],
      drugClasses: ["Antianemics", "Erythropoietin-stimulating agents"]
    },
    {
      name: "Pathologic clotting",
      mechanism: "The heme guide asks how clots form and distinguishes DVT, arterial thrombosis, thrombosis, and embolus. The map uses more specific condition nodes for treatment links.",
      sideEffects: ["Clot formation can obstruct venous or arterial flow; DIC can include clotting and bleeding phases."],
      relevantSystems: ["Coagulation cascade", "Platelets", "Fibrin", "Blood vessels"],
      drugClasses: []
    },
    {
      name: "DIC",
      mechanism: "The heme guide asks for the events of DIC, including coagulation and bleeding phases.",
      sideEffects: ["Both abnormal clotting and bleeding are central course concepts."],
      relevantSystems: ["Coagulation factors", "Platelets", "Fibrin", "Microcirculation"],
      drugClasses: ["Hemostatics / reversal agents"]
    },
    {
      name: "Leukemia and lymphoma",
      mechanism: "The heme guide asks students to identify dysfunctional cell types across leukemia and lymphoma types and consequences of WBC dysfunction.",
      sideEffects: ["Consequences of WBC dysfunction are emphasized; specific treatment drug classes are not listed in the study-guide pharmacology section."],
      relevantSystems: ["White blood cells", "Bone marrow", "Lymphocytes", "Myeloid cells", "Lymph nodes"],
      drugClasses: []
    },
    {
      name: "Hypothyroidism",
      mechanism: "The endocrine guide asks for autoimmune hypothyroidism/Hashimoto mechanism and primary medical management.",
      sideEffects: ["Symptoms are tied to thyroid hormone deficiency; details are not listed in extracted text."],
      relevantSystems: ["Thyroid gland", "T3", "T4", "HPT axis", "Metabolic rate"],
      drugClasses: ["Thyroid hormone"]
    },
    {
      name: "Hyperthyroidism / Graves disease",
      mechanism: "The endocrine guide identifies Graves disease as the most common etiology and asks how overstimulation of the gland occurs.",
      sideEffects: ["Symptoms are tied to thyroid hormone excess; details are not listed in extracted text."],
      relevantSystems: ["Thyroid gland", "T3", "T4", "HPT axis", "Autoimmune stimulation"],
      drugClasses: ["Thioamides"]
    },
    {
      name: "Type 1 diabetes mellitus",
      mechanism: "The endocrine guide asks which cells are damaged and how this leads to elevated blood sugar.",
      sideEffects: ["DKA is specifically connected to type 1 diabetes in the guide."],
      relevantSystems: ["Pancreatic beta cells", "Insulin", "Glucose", "Ketones"],
      drugClasses: ["Insulins"]
    },
    {
      name: "Type 2 diabetes mellitus",
      mechanism: "The endocrine guide asks how normal blood sugar regulation changes and how this causes elevated blood sugar.",
      sideEffects: ["HHNS is specifically connected to type 2 diabetes in the guide."],
      relevantSystems: ["Insulin resistance", "Glucose", "Pancreas", "Liver", "Kidneys"],
      drugClasses: ["Biguanides", "SGLT2 inhibitors", "GLP receptor agonists", "Insulins"]
    },
    {
      name: "DKA",
      mechanism: "The endocrine guide asks what causes diabetic ketoacidosis.",
      sideEffects: ["Ketoacidosis is a key complication of insulin deficiency."],
      relevantSystems: ["Insulin", "Glucose", "Ketones", "Acid-base balance"],
      drugClasses: ["Insulins"]
    },
    {
      name: "HHNS",
      mechanism: "The endocrine guide asks what causes hyperglycemic hyperosmolar nonketotic syndrome and how it differs from ketoacidosis.",
      sideEffects: ["Severe hyperglycemia and hyperosmolar state are central concepts."],
      relevantSystems: ["Glucose", "Serum osmolality", "Fluid balance", "Kidneys"],
      drugClasses: ["Insulins", "Biguanides", "SGLT2 inhibitors", "GLP receptor agonists"]
    },
    {
      name: "Addison disease",
      mechanism: "The endocrine guide asks for the cause of cortisol deficiency and symptoms of cortisol deficiency.",
      sideEffects: ["Cortisol deficiency symptoms are emphasized, though details are not listed in extracted guide text."],
      relevantSystems: ["Adrenal cortex", "Cortisol", "HPA axis", "Glucose regulation"],
      drugClasses: ["Glucocorticoids / corticosteroids"]
    },
    {
      name: "Cushing disease / syndrome",
      mechanism: "The endocrine guide asks for causes of cortisol excess and symptoms of cortisol excess.",
      sideEffects: ["Cortisol excess symptoms are emphasized, though details are not listed in extracted guide text."],
      relevantSystems: ["Adrenal cortex", "Cortisol", "HPA axis", "Glucose regulation"],
      drugClasses: ["Glucocorticoids / corticosteroids"]
    },
    {
      name: "Dysmenorrhea",
      mechanism: "The endocrine guide asks what hormonal or inflammatory process leads to dysmenorrhea.",
      sideEffects: ["Course notes mention an NSAID-resistant type; detailed manifestations are not listed in the extracted study guide."],
      relevantSystems: ["Prostaglandins", "Uterus", "Hormonal cycling", "Inflammation"],
      drugClasses: ["Estrogen and progestin hormones"]
    },
    {
      name: "Inflammation",
      mechanism: "The immune guide asks students to describe acute and chronic inflammation, involved cells, process steps, and outcomes.",
      sideEffects: ["Inflammatory effects vary by tissue and process; the guide emphasizes acute versus chronic patterns."],
      relevantSystems: ["Immune cells", "Inflammatory mediators", "Tissue injury and repair"],
      drugClasses: ["Glucocorticoids / corticosteroids", "Anti-metabolites", "Monoclonal antibodies"]
    },
    {
      name: "Angina",
      mechanism: "Cardiology materials place angina within coronary artery disease and myocardial oxygen supply/demand problems.",
      sideEffects: ["Chest discomfort and ischemic symptoms are implied by CAD/ACS review."],
      relevantSystems: ["Coronary arteries", "Myocardium", "Oxygen demand", "Vascular tone"],
      drugClasses: ["Organic nitrates", "Calcium channel blockers", "Beta adrenergic blockers"]
    },
    {
      name: "Acute coronary syndrome",
      mechanism: "The cardiology guide asks how coronary artery disease progresses into acute coronary syndrome and myocardial infarction.",
      sideEffects: ["Myocardial ischemia/infarction consequences are central; detailed manifestations are not listed in extracted guide text."],
      relevantSystems: ["Coronary arteries", "Atherosclerosis", "Platelets", "Myocardium"],
      drugClasses: ["Organic nitrates", "Antiplatelets", "Thrombolytics"]
    },
    {
      name: "Atherosclerosis",
      mechanism: "The cardiology guide asks about cholesterol's role in heart disease and lipid-lowering rationale.",
      sideEffects: ["Progression can contribute to coronary artery disease, ACS, and myocardial infarction."],
      relevantSystems: ["Arteries", "Cholesterol", "Endothelium", "Inflammation"],
      drugClasses: ["HMG-CoA reductase inhibitors", "Cholesterol absorption inhibitors"]
    },
    {
      name: "Status asthmaticus",
      mechanism: "The pulmonary guide specifically asks what status asthmaticus is, what symptoms it causes, and its significance.",
      sideEffects: ["Severe asthma symptoms and ventilation compromise are the key course concern."],
      relevantSystems: ["Bronchi", "Ventilation", "Airway smooth muscle", "Inflammation"],
      drugClasses: ["SABA - short-acting beta 2 adrenergic agonists", "ICS - inhaled corticosteroids"]
    },
    {
      name: "Hypervolemia",
      mechanism: "The renal guide asks for general clinical manifestations of hypervolemia and examples of when it appears.",
      sideEffects: ["Fluid overload manifestations are emphasized; details are not listed in extracted guide text."],
      relevantSystems: ["Kidneys", "Fluid balance", "Sodium", "Cardiovascular system"],
      drugClasses: ["Loop diuretics", "Thiazides", "Aldosterone antagonists"]
    },
    {
      name: "Hypotension / poor perfusion",
      mechanism: "Vasopressors and inotropes are course-linked to supporting vascular tone and/or cardiac output when perfusion is inadequate, most clearly in shock states.",
      sideEffects: ["Low blood pressure and poor tissue perfusion are the medication-relevant cues."],
      relevantSystems: ["Vascular tone", "Blood pressure", "Perfusion", "Adrenergic receptors"],
      drugClasses: ["Vasopressors / alpha- and beta-adrenergic agonists"]
    },
    {
      name: "Nausea and vomiting",
      mechanism: "The GI guide includes anti-emetics and the lower GI medications content; course notes connect vomiting to medulla-triggered removal of toxic substances.",
      sideEffects: ["Fluid/electrolyte consequences can be relevant in GI losses."],
      relevantSystems: ["GI tract", "Medulla", "Serotonin receptors", "Fluid balance"],
      drugClasses: ["Phenothiazine anti-emetics", "5-HT3 / serotonin receptor antagonist anti-emetics"]
    },
    {
      name: "Deep vein thrombosis",
      mechanism: "The heme guide asks students to distinguish deep vein thrombosis from arterial thrombosis and thrombosis from embolus.",
      sideEffects: ["Venous clot obstruction and embolic risk are the core course concepts."],
      relevantSystems: ["Veins", "Coagulation cascade", "Fibrin", "Platelets"],
      drugClasses: ["Anticoagulants", "Direct factor Xa inhibitors"]
    },
    {
      name: "Arterial thrombosis",
      mechanism: "The heme guide asks students to distinguish arterial thrombosis from DVT.",
      sideEffects: ["Arterial flow obstruction can contribute to ischemic injury depending on vessel location."],
      relevantSystems: ["Arteries", "Platelets", "Coagulation", "Perfusion"],
      drugClasses: ["Antiplatelets", "Thrombolytics"]
    },
    {
      name: "Thrombosis",
      mechanism: "The heme guide asks students to distinguish thrombosis from embolus.",
      sideEffects: ["Clot formation can block flow locally or contribute to embolic events."],
      relevantSystems: ["Coagulation cascade", "Platelets", "Fibrin", "Blood vessels"],
      drugClasses: ["Anticoagulants", "Direct factor Xa inhibitors", "Thrombolytics"]
    },
    {
      name: "Atrial fibrillation / flutter",
      mechanism: "Cardiology notes connect atrial fibrillation/flutter with stroke risk management.",
      sideEffects: ["Stroke risk is the key medication-related concern noted in course notes."],
      relevantSystems: ["Atria", "Cardiac conduction", "Thromboembolism", "Stroke pathway"],
      drugClasses: ["Anticoagulants"]
    },
    {
      name: "Bleeding",
      mechanism: "The heme guide covers coagulation, DIC bleeding phases, and hemostatic/reversal agents.",
      sideEffects: ["Bleeding risk is central to anticoagulant and thrombolytic safety."],
      relevantSystems: ["Coagulation factors", "Platelets", "Fibrin", "Liver vitamin K-dependent factor synthesis"],
      drugClasses: ["Hemostatics / reversal agents"]
    },
    {
      name: "Excess anticoagulation",
      mechanism: "Course questions test reversal logic: protamine sulfate for heparin and vitamin K for excessive warfarin effect.",
      sideEffects: ["Hematuria", "Bruising", "Bleeding gums", "Falling hemoglobin/hematocrit"],
      relevantSystems: ["Coagulation cascade", "aPTT", "INR", "Reversal agents"],
      drugClasses: ["Hemostatics / reversal agents"]
    },
    {
      name: "Pulmonary embolism risk",
      mechanism: "DVT can embolize to the pulmonary circulation; anticoagulants prevent clot extension while thrombolytics may be used in selected acute severe clot events.",
      sideEffects: ["Acute dyspnea", "Hypoxemia", "Chest pain risk cues"],
      relevantSystems: ["Veins", "Pulmonary circulation", "Coagulation cascade"],
      drugClasses: ["Anticoagulants", "Direct factor Xa inhibitors", "Thrombolytics"]
    },
    {
      name: "Acute ischemic stroke",
      mechanism: "Thrombolytic teaching commonly applies to acute ischemic clot events when eligibility criteria are met.",
      sideEffects: ["Neurologic deficit with high bleeding-risk screening before therapy."],
      relevantSystems: ["Cerebral perfusion", "Fibrin", "Bleeding risk"],
      drugClasses: ["Thrombolytics"]
    },
    {
      name: "Contraception",
      mechanism: "The endocrine guide asks why estrogen/progestin contraceptives prevent pregnancy and why they are used for other purposes.",
      sideEffects: ["The guide flags contraindications in people with comorbid conditions, drug interactions, and clotting concern."],
      relevantSystems: ["Ovarian hormones", "Endometrium", "Ovulation", "Clotting risk"],
      drugClasses: ["Estrogen and progestin hormones"]
    },
    {
      name: "Bacterial infection",
      mechanism: "Week 8 antibiotic slides distinguish bacteriostatic versus bactericidal effects and connect antibiotics to bacterial growth, DNA replication, cell wall effects, and protein synthesis.",
      sideEffects: ["Fever/infection findings vary by organism and site; culture collection before antibiotics is emphasized when feasible."],
      relevantSystems: ["Bacteria", "Culture/sensitivity", "Antibiotic therapy"],
      drugClasses: ["Aminoglycosides", "Fluoroquinolones", "Tetracyclines", "Macrolides"]
    },
    {
      name: "Gram-negative infection",
      mechanism: "Aminoglycoside slides emphasize aerobic gram-negative bacteria, including septicemia, respiratory tract, urinary tract, and intra-abdominal infections.",
      sideEffects: ["Site-specific infection manifestations; serious infections may require IV therapy and drug-level monitoring."],
      relevantSystems: ["Gram-negative bacteria", "Renal elimination", "Peak/trough monitoring"],
      drugClasses: ["Aminoglycosides"]
    },
    {
      name: "Respiratory infection",
      mechanism: "Week 8 materials and quiz items connect macrolides, fluoroquinolones, tetracyclines, and aminoglycosides to respiratory infection contexts depending on organism and patient factors.",
      sideEffects: ["Respiratory symptoms plus antibiotic safety teaching drive course-level questions."],
      relevantSystems: ["Respiratory tract", "Bacteria", "Antibiotic selection"],
      drugClasses: ["Aminoglycosides", "Fluoroquinolones", "Tetracyclines", "Macrolides"]
    },
    {
      name: "Urinary tract infection",
      mechanism: "Aminoglycosides and fluoroquinolones are course-linked to urinary tract infection coverage, with renal function monitoring especially important.",
      sideEffects: ["Dysuria, frequency, or systemic infection cues may appear, but medication safety focuses on renal monitoring."],
      relevantSystems: ["Urinary tract", "Kidneys", "Renal clearance"],
      drugClasses: ["Aminoglycosides", "Fluoroquinolones"]
    },
    {
      name: "Nephrotoxicity risk",
      mechanism: "Aminoglycosides accumulate in renal tubules; fluoroquinolone slides also flag renal impairment monitoring.",
      sideEffects: ["Rising BUN/creatinine", "Diminished urine output", "Fluid retention"],
      relevantSystems: ["Kidneys", "BUN", "Creatinine", "Urine output"],
      drugClasses: ["Aminoglycosides", "Fluoroquinolones"]
    },
    {
      name: "Ototoxicity",
      mechanism: "Aminoglycosides can accumulate in the inner ear; quiz items repeatedly test tinnitus, hearing changes, vertigo, and dizziness.",
      sideEffects: ["Tinnitus", "Hearing loss", "Vertigo", "Dizziness"],
      relevantSystems: ["Inner ear", "Auditory function", "Vestibular function"],
      drugClasses: ["Aminoglycosides"]
    },
    {
      name: "C. difficile superinfection risk",
      mechanism: "Antibiotics can disrupt normal flora and allow C. difficile overgrowth, a repeated Week 8 quiz concept.",
      sideEffects: ["Profuse watery diarrhea", "Colitis concern", "Fluid/electrolyte loss"],
      relevantSystems: ["Normal flora", "Colon", "Infection prevention"],
      drugClasses: ["Fluoroquinolones", "Macrolides", "Tetracyclines", "Aminoglycosides"]
    },
    {
      name: "QT prolongation risk",
      mechanism: "Fluoroquinolones and macrolides are course-linked to QT prolongation, especially with dysrhythmia history or QT-prolonging drugs such as amiodarone.",
      sideEffects: ["Dysrhythmia risk", "Torsades de pointes concern in high-risk combinations"],
      relevantSystems: ["Cardiac conduction", "QT interval", "Medication interactions"],
      drugClasses: ["Fluoroquinolones", "Macrolides"]
    },
    {
      name: "Tendon injury risk",
      mechanism: "Fluoroquinolone slides and quiz items emphasize tendonitis and tendon rupture warnings.",
      sideEffects: ["Tendon pain", "Swelling", "Weakness", "Sudden snap sensation"],
      relevantSystems: ["Tendons", "Musculoskeletal safety"],
      drugClasses: ["Fluoroquinolones"]
    },
    {
      name: "Photosensitivity",
      mechanism: "Fluoroquinolones and tetracyclines include photosensitivity teaching in Week 8 materials.",
      sideEffects: ["Sunburn-like reaction or rash risk with sun exposure"],
      relevantSystems: ["Skin", "Patient teaching"],
      drugClasses: ["Fluoroquinolones", "Tetracyclines"]
    },
    {
      name: "Bone and tooth development risk",
      mechanism: "Tetracyclines bind calcium in developing bone and teeth; quiz items emphasize avoiding use in pregnancy and young children unless specifically indicated.",
      sideEffects: ["Tooth discoloration", "Bone growth concern"],
      relevantSystems: ["Calcium", "Teeth", "Bone", "Pregnancy/child safety"],
      drugClasses: ["Tetracyclines"]
    },
    {
      name: "Penicillin allergy alternative",
      mechanism: "Course questions identify macrolides as an option for some infections when penicillin is contraindicated by hypersensitivity.",
      sideEffects: ["Allergy history must still be clarified before administering related antibiotics."],
      relevantSystems: ["Hypersensitivity", "Antibiotic selection"],
      drugClasses: ["Macrolides"]
    },
    {
      name: "Warfarin interaction bleeding risk",
      mechanism: "Some antibiotics can increase warfarin effect through metabolism changes or altered vitamin K-producing flora, raising INR and bleeding risk.",
      sideEffects: ["Bruising", "Hematuria", "Bleeding gums", "Elevated INR"],
      relevantSystems: ["Warfarin", "INR", "Vitamin K", "Bleeding risk"],
      drugClasses: ["Macrolides"]
    },
    {
      name: "Digoxin toxicity risk",
      mechanism: "Macrolide interactions can raise digoxin levels in course questions, so toxicity monitoring is emphasized.",
      sideEffects: ["Nausea", "Visual changes", "Dysrhythmias", "Bradycardia"],
      relevantSystems: ["Digoxin", "Cardiac conduction", "Medication interactions"],
      drugClasses: ["Macrolides"]
    },
    {
      name: "Gram-positive infection",
      mechanism: "Week 8 materials distinguish thick peptidoglycan gram-positive bacteria such as Staphylococcus, Streptococcus, Enterococcus, and C. difficile.",
      sideEffects: ["Site-specific infection findings", "Fever or inflammatory response when systemic"],
      relevantSystems: ["Gram stain", "Peptidoglycan cell wall", "Culture/sensitivity", "Antibiotic selection"],
      drugClasses: ["Penicillins", "Cephalosporins", "Glycopeptide antibiotics"]
    },
    {
      name: "Skin/bone infection",
      mechanism: "Cephalosporin slides list skin and bone infections among course-linked indications when culture/sensitivity supports use.",
      sideEffects: ["Localized pain", "Redness", "Swelling", "Drainage", "Fever if systemic"],
      relevantSystems: ["Skin", "Bone", "Culture/sensitivity", "Inflammation"],
      drugClasses: ["Cephalosporins"]
    },
    {
      name: "Sepsis",
      mechanism: "Infection slides connect untreated bacterial infection with sepsis and shock; carbapenems are linked to severe infections and multidrug-resistant organisms.",
      sideEffects: ["Fever or hypothermia", "Tachycardia", "Hypotension", "Altered perfusion", "Organ dysfunction risk"],
      relevantSystems: ["Systemic inflammation", "Perfusion", "Culture/sensitivity", "Broad-spectrum antibiotics"],
      drugClasses: ["Carbapenems", "Glycopeptide antibiotics", "Aminoglycosides"]
    },
    {
      name: "Intra-abdominal infection",
      mechanism: "Course slides list intra-abdominal infection as an indication for aminoglycosides and carbapenems depending on organism and severity.",
      sideEffects: ["Abdominal pain", "Fever", "GI symptoms", "Sepsis risk"],
      relevantSystems: ["GI tract", "Gram-negative bacteria", "Anaerobes", "Culture/sensitivity"],
      drugClasses: ["Aminoglycosides", "Carbapenems", "Nitroimidazoles"]
    },
    {
      name: "Hospital-acquired pneumonia",
      mechanism: "Carbapenem slides include hospital-acquired pneumonia among severe infection contexts where broad-spectrum therapy may be used.",
      sideEffects: ["Cough", "Dyspnea", "Fever", "Hypoxemia", "Sepsis risk"],
      relevantSystems: ["Lungs", "Gram-negative bacteria", "Culture/sensitivity", "Oxygenation"],
      drugClasses: ["Carbapenems"]
    },
    {
      name: "MRSA infection",
      mechanism: "Week 8 materials identify methicillin-resistant Staphylococcus aureus as resistant to most beta-lactams and link serious hospital-acquired MRSA infection to IV vancomycin.",
      sideEffects: ["Skin/soft tissue infection", "Sepsis risk", "Pneumonia or invasive infection depending on site"],
      relevantSystems: ["Staphylococcus aureus", "Oxacillin sensitivity", "Culture/sensitivity", "Gram-positive coverage"],
      drugClasses: ["Glycopeptide antibiotics"]
    },
    {
      name: "Beta-lactam allergy risk",
      mechanism: "Penicillin and cephalosporin slides emphasize checking hypersensitivity history and cross-reactivity before beta-lactam therapy.",
      sideEffects: ["Rash", "Urticaria", "Dyspnea", "Anaphylaxis risk", "Stevens-Johnson syndrome concern"],
      relevantSystems: ["Immune response", "Medication allergy", "Penicillin class", "Cephalosporin class"],
      drugClasses: ["Penicillins", "Cephalosporins", "Carbapenems"]
    },
    {
      name: "Beta-lactam allergy alternative",
      mechanism: "The infection guide includes sulfonamides and macrolides in the broader anti-infective set, useful when beta-lactam allergy limits choices for selected infections.",
      sideEffects: ["Allergy history still requires clarification before alternative antibiotic use."],
      relevantSystems: ["Antibiotic selection", "Hypersensitivity", "Culture/sensitivity"],
      drugClasses: ["Sulfonamides", "Macrolides"]
    },
    {
      name: "Pneumocystis jirovecii pneumonia",
      mechanism: "Sulfonamide slides list P. jirovecii pneumonitis as an indication for trimethoprim-sulfamethoxazole.",
      sideEffects: ["Dyspnea", "Fever", "Cough", "Hypoxemia risk"],
      relevantSystems: ["Lungs", "Opportunistic infection", "Immune status"],
      drugClasses: ["Sulfonamides"]
    },
    {
      name: "Bronchitis",
      mechanism: "Sulfonamide slides list bronchitis among indications, with antibiotic selection depending on organism and patient factors.",
      sideEffects: ["Cough", "Sputum", "Fever or malaise when infectious"],
      relevantSystems: ["Bronchi", "Respiratory tract", "Antibiotic selection"],
      drugClasses: ["Sulfonamides"]
    },
    {
      name: "Otitis media",
      mechanism: "Sulfonamide slides list otitis media as an indication in selected patients.",
      sideEffects: ["Ear pain", "Fever", "Hearing fullness", "Irritability in pediatric contexts"],
      relevantSystems: ["Middle ear", "Bacterial infection", "Antibiotic selection"],
      drugClasses: ["Sulfonamides"]
    },
    {
      name: "Hyperkalemia risk",
      mechanism: "Sulfonamide slides flag conditions or medications that can cause hyperkalemia as a caution before trimethoprim-sulfamethoxazole.",
      sideEffects: ["Muscle weakness", "Cardiac conduction changes", "Dysrhythmia risk"],
      relevantSystems: ["Potassium", "Kidneys", "Cardiac conduction"],
      drugClasses: ["Sulfonamides", "ACE inhibitors", "Aldosterone antagonists"]
    },
    {
      name: "Vancomycin flushing syndrome risk",
      mechanism: "Vancomycin slides state IV administration must occur over at least 1 hour to reduce infusion reaction risk.",
      sideEffects: ["Flushing", "Pruritus", "Rash", "Hypotension if severe"],
      relevantSystems: ["IV infusion", "Histamine-mediated reaction", "Skin", "Blood pressure"],
      drugClasses: ["Glycopeptide antibiotics"]
    },
    {
      name: "Anaerobic infection",
      mechanism: "Infection slides distinguish aerobic and anaerobic bacteria; metronidazole is included in the infection study guide and C. difficile treatment discussion.",
      sideEffects: ["Site-specific infection findings", "Abscess or foul drainage in some anaerobic infections"],
      relevantSystems: ["Anaerobic bacteria", "GI tract", "Culture/sensitivity"],
      drugClasses: ["Nitroimidazoles"]
    },
    {
      name: "Tuberculosis",
      mechanism: "Week 8 slides describe airborne Mycobacterium tuberculosis pathogenesis, granuloma formation, latent versus active infection, and combination therapy.",
      sideEffects: ["Low-grade fever", "Night sweats", "Cough", "Hemoptysis as a late sign", "Weight loss", "Fatigue"],
      relevantSystems: ["Lungs", "Macrophages", "Granulomas", "Airborne transmission"],
      drugClasses: ["Antituberculars"]
    },
    {
      name: "Hepatotoxicity risk",
      mechanism: "Isoniazid teaching emphasizes baseline liver enzymes and hepatitis symptoms such as jaundice, nausea/vomiting, abdominal pain, anorexia, and clay-colored stools.",
      sideEffects: ["Jaundice", "Nausea/vomiting", "Abdominal pain", "Anorexia", "Clay-colored stools"],
      relevantSystems: ["Liver", "Medication metabolism", "Alcohol", "Acetaminophen"],
      drugClasses: ["Antituberculars", "Non-narcotic analgesic antipyretics"]
    },
    {
      name: "Peripheral neuropathy risk",
      mechanism: "Isoniazid slides list peripheral neuropathy as an adverse effect, with numbness and tingling cues.",
      sideEffects: ["Numbness", "Tingling", "Peripheral sensory changes"],
      relevantSystems: ["Peripheral nerves", "Vitamin B6 concept", "Medication toxicity"],
      drugClasses: ["Antituberculars"]
    },
    {
      name: "Seizure risk",
      mechanism: "Course materials flag seizure risk with carbapenems, isoniazid cautions, and acyclovir interactions with hydantoins or valproic acid.",
      sideEffects: ["Seizure activity", "Altered mental status", "Medication toxicity warning"],
      relevantSystems: ["Brain", "Neuronal excitability", "Medication interactions"],
      drugClasses: ["Carbapenems", "Antituberculars", "Antivirals"]
    },
    {
      name: "Herpes simplex virus infection",
      mechanism: "Acyclovir slides list herpes simplex virus cutaneous, mucosal, and genital infection as indications.",
      sideEffects: ["Painful lesions", "Mucosal or genital sores", "Recurrence risk"],
      relevantSystems: ["Virus", "DNA replication", "Skin/mucosa"],
      drugClasses: ["Antivirals"]
    },
    {
      name: "Varicella-zoster infection",
      mechanism: "Acyclovir slides list varicella-zoster virus infections including chickenpox and shingles.",
      sideEffects: ["Vesicular rash", "Pain or burning", "Possible neuralgia with shingles"],
      relevantSystems: ["Virus", "Skin", "Peripheral nerves", "DNA replication"],
      drugClasses: ["Antivirals"]
    },
    {
      name: "Fungal infection",
      mechanism: "Week 8 slides describe mycoses as infections requiring antifungal agents because fungal cell structures differ from bacteria.",
      sideEffects: ["Rash or lesions", "Itching/burning", "White patches or discharge", "Systemic risk when immunocompromised"],
      relevantSystems: ["Fungal cell wall/membrane", "Skin/mucosa", "Immune status"],
      drugClasses: ["Antifungals"]
    },
    {
      name: "Candidiasis",
      mechanism: "Candida is described as a frequently opportunistic fungal/yeast infection preferring warm, dark, moist environments.",
      sideEffects: ["White patches", "Discharge", "Pain", "Redness", "Itching or burning"],
      relevantSystems: ["Yeast", "Mucosa", "Skin folds", "Immune status"],
      drugClasses: ["Antifungals"]
    },
    {
      name: "Tinea infection",
      mechanism: "Tinea slides describe fungal skin infections with raised scaly borders, itching, burning, nail discoloration, or cracking between toes.",
      sideEffects: ["Ring-shaped or scaly rash", "Itching", "Burning", "Nail discoloration", "Toe-web cracking"],
      relevantSystems: ["Skin", "Nails", "Fungal growth"],
      drugClasses: ["Antifungals"]
    },
    {
      name: "Oral thrush",
      mechanism: "Course antifungal slides and questions connect nystatin oral suspension with oral candidiasis teaching.",
      sideEffects: ["White oral patches", "Mouth pain", "Burning", "Swallowing discomfort"],
      relevantSystems: ["Oral mucosa", "Candida", "Immune status"],
      drugClasses: ["Antifungals"]
    },
    {
      name: "Immunocompromised infection risk",
      mechanism: "Fungal and superinfection slides emphasize that compromised immune status increases opportunistic infection risk.",
      sideEffects: ["Opportunistic infection", "Atypical or severe infection patterns", "Delayed recovery"],
      relevantSystems: ["Immune system", "Normal flora", "Opportunistic pathogens"],
      drugClasses: ["Antifungals", "Glucocorticoids / corticosteroids", "T and B cell suppressors"]
    },
    {
      name: "Malaria",
      mechanism: "Malaria slides describe Plasmodium transmission by female Anopheles mosquitoes and cyclic fever/chills/diaphoresis after incubation.",
      sideEffects: ["Cyclic fever", "Chills", "Copious diaphoresis", "Headache", "Vomiting", "Anemia risk"],
      relevantSystems: ["Protozoa", "Mosquito transmission", "Red blood cells", "Travel medicine"],
      drugClasses: ["Antimalarials"]
    },
    {
      name: "Travel prophylaxis",
      mechanism: "Malaria prevention slides list medication prophylaxis options and mosquito avoidance for travel to endemic regions.",
      sideEffects: ["No infection symptoms when prophylaxis is successful; adverse effects depend on agent."],
      relevantSystems: ["Travel history", "Resistance patterns", "Medication adherence"],
      drugClasses: ["Antimalarials"]
    },
    {
      name: "Retinal toxicity risk",
      mechanism: "Chloroquine slides flag retinal and visual-field changes and retinal disease caution.",
      sideEffects: ["Visual field changes", "Retinal injury concern", "Vision changes"],
      relevantSystems: ["Retina", "Vision", "Antimalarial toxicity"],
      drugClasses: ["Antimalarials"]
    },
    {
      name: "Pain",
      mechanism: "The nervous-system guide asks students to distinguish visceral, neurogenic, acute, chronic, somatic, and cancer pain.",
      sideEffects: ["Distress", "Activity limitation", "Sleep disruption", "Autonomic changes when acute"],
      relevantSystems: ["Somatosensory system", "Nociceptors", "Peripheral nerves", "Brain"],
      drugClasses: ["Salicylates", "Non-narcotic analgesic antipyretics", "Nonsteroidal anti-inflammatory drugs", "Opioid analgesics", "Gamma-aminobutyric acid structural analogs"]
    },
    {
      name: "Fever",
      mechanism: "Pain pharmacology in the nervous-system guide includes antipyretic drugs for fever reduction.",
      sideEffects: ["Elevated temperature", "Malaise", "Chills depending on phase"],
      relevantSystems: ["Hypothalamus", "Prostaglandins", "Infection/inflammation"],
      drugClasses: ["Salicylates", "Non-narcotic analgesic antipyretics", "Nonsteroidal anti-inflammatory drugs"]
    },
    {
      name: "Bleeding risk",
      mechanism: "Aspirin, NSAIDs, anticoagulants, and SSRIs can increase bleeding concern through platelet, GI, or medication-interaction pathways.",
      sideEffects: ["Bruising", "GI bleeding", "Hematuria", "Melena", "Bleeding gums"],
      relevantSystems: ["Platelets", "GI mucosa", "Coagulation", "Medication interactions"],
      drugClasses: ["Salicylates", "Nonsteroidal anti-inflammatory drugs", "Selective serotonin reuptake inhibitors", "Anticoagulants"]
    },
    {
      name: "Renal injury risk",
      mechanism: "NSAIDs and several anti-infectives require renal-function attention because kidney perfusion, clearance, or toxicity can worsen.",
      sideEffects: ["Rising BUN/creatinine", "Decreased urine output", "Fluid retention"],
      relevantSystems: ["Kidneys", "BUN", "Creatinine", "Medication clearance"],
      drugClasses: ["Nonsteroidal anti-inflammatory drugs", "Aminoglycosides", "Glycopeptide antibiotics", "Antivirals"]
    },
    {
      name: "Cancer pain",
      mechanism: "The nervous-system guide lists cancer pain as a pain type; opioid analgesics are commonly linked to severe pain contexts.",
      sideEffects: ["Persistent pain", "Functional limitation", "Sleep disruption"],
      relevantSystems: ["Nociception", "Tumor-related tissue injury", "CNS pain pathways"],
      drugClasses: ["Opioid analgesics"]
    },
    {
      name: "CNS depression and fall risk",
      mechanism: "Benzodiazepine slides identify alprazolam as a CNS depressant with dizziness, drowsiness, lethargy, confusion, and older-adult Beers-list concern.",
      sideEffects: ["Dizziness", "Drowsiness", "Lethargy", "Confusion", "Falls"],
      relevantSystems: ["Brain", "GABA", "Respiratory drive", "Older adult safety"],
      drugClasses: ["Benzodiazepines", "Opioid analgesics", "Gamma-aminobutyric acid structural analogs"]
    },
    {
      name: "Respiratory depression risk",
      mechanism: "Opioids and sedative combinations can depress respiratory drive; benzodiazepine teaching emphasizes avoiding alcohol and other CNS depressants.",
      sideEffects: ["Bradypnea", "Hypoventilation", "Sedation", "Low oxygenation"],
      relevantSystems: ["Respiratory drive", "CNS", "Opioid receptors", "GABA"],
      drugClasses: ["Opioid analgesics", "Benzodiazepines", "Opioid antagonists"]
    },
    {
      name: "Neurogenic pain",
      mechanism: "The nervous-system guide lists neurogenic pain; gabapentin is included as a GABA structural analog also used in seizures.",
      sideEffects: ["Burning", "Shooting pain", "Tingling", "Allodynia"],
      relevantSystems: ["Peripheral nerves", "Neuronal excitability", "Pain pathways"],
      drugClasses: ["Gamma-aminobutyric acid structural analogs"]
    },
    {
      name: "Seizure disorder",
      mechanism: "The nervous-system guide asks for likely causes of epilepsy and major seizure types; antiseizure medication reduces abnormal neuronal firing.",
      sideEffects: ["Altered awareness", "Motor activity", "Postictal confusion", "Injury risk"],
      relevantSystems: ["Brain", "Neurons", "Excitatory/inhibitory balance"],
      drugClasses: ["Hydantoins", "Benzodiazepines", "Gamma-aminobutyric acid structural analogs"]
    },
    {
      name: "Epilepsy",
      mechanism: "Epilepsy is recurrent unprovoked seizure tendency from abnormal neuronal activity.",
      sideEffects: ["Recurrent seizures", "Injury risk", "Driving or safety restrictions"],
      relevantSystems: ["Cerebral cortex", "Neuronal firing", "Antiseizure therapy"],
      drugClasses: ["Hydantoins", "Gamma-aminobutyric acid structural analogs"]
    },
    {
      name: "Drug interaction risk",
      mechanism: "Course slides flag multiple interactions, including isoniazid inhibition of phenytoin/benzodiazepine metabolism and SSRI serotonergic combinations.",
      sideEffects: ["Toxicity symptoms depend on the interacting drugs", "Sedation", "Bleeding", "Seizure risk", "Serotonin syndrome"],
      relevantSystems: ["Liver metabolism", "CNS", "Medication reconciliation"],
      drugClasses: ["Hydantoins", "Antituberculars", "Selective serotonin reuptake inhibitors"]
    },
    {
      name: "Generalized anxiety disorder",
      mechanism: "Mental health slides connect anxiety with norepinephrine, serotonin, GABA, stress/trauma, and autonomic symptoms; case data include GAD-7 moderate anxiety over 8 months.",
      sideEffects: ["Excess worry", "Irritability", "Sleep difficulty", "Poor concentration", "Tension", "Restlessness"],
      relevantSystems: ["CNS", "GABA", "Serotonin", "Norepinephrine", "Autonomic nervous system"],
      drugClasses: ["Benzodiazepines", "Selective serotonin reuptake inhibitors"]
    },
    {
      name: "Panic attack",
      mechanism: "The anxiety case describes sudden sweaty smothering chest pressure, fear, shaking, tachypnea, normal EKG, and improvement with breathing focus.",
      sideEffects: ["Chest pressure", "Sweating", "Fear", "Shaking", "Tachypnea", "Palpitations"],
      relevantSystems: ["Autonomic nervous system", "CNS", "GABA", "Serotonin"],
      drugClasses: ["Benzodiazepines", "Selective serotonin reuptake inhibitors"]
    },
    {
      name: "Parkinson disease",
      mechanism: "The nervous-system guide asks for Parkinson symptoms, likely mechanism, and implicated neurotransmitters; dopaminergic therapy addresses dopamine deficiency.",
      sideEffects: ["Tremor", "Rigidity", "Bradykinesia", "Postural instability"],
      relevantSystems: ["Basal ganglia", "Dopamine", "Motor control"],
      drugClasses: ["Dopaminergic antiparkinson agents"]
    },
    {
      name: "Dopamine deficiency",
      mechanism: "Parkinson disease medication logic centers on inadequate dopamine signaling in motor pathways.",
      sideEffects: ["Bradykinesia", "Rigidity", "Tremor", "Movement slowing"],
      relevantSystems: ["Dopamine", "Basal ganglia", "Motor pathways"],
      drugClasses: ["Dopaminergic antiparkinson agents"]
    },
    {
      name: "Alzheimer disease",
      mechanism: "The nervous-system guide asks what brain changes lead to dementia in Alzheimer disease; donepezil supports cholinergic signaling for symptoms.",
      sideEffects: ["Memory loss", "Functional decline", "Cognitive impairment", "Caregiver burden"],
      relevantSystems: ["Brain", "Acetylcholine", "Cognition"],
      drugClasses: ["Cholinesterase inhibitors"]
    },
    {
      name: "Dementia",
      mechanism: "The guide asks students to distinguish dementia from delirium and identify Alzheimer pathophysiologic changes.",
      sideEffects: ["Progressive cognitive decline", "Functional impairment", "Memory changes"],
      relevantSystems: ["Brain", "Cognition", "Acetylcholine"],
      drugClasses: ["Cholinesterase inhibitors"]
    },
    {
      name: "Bradycardia risk",
      mechanism: "Cholinesterase inhibitors can increase cholinergic tone and are associated with bradycardia/syncope monitoring concerns.",
      sideEffects: ["Slow pulse", "Dizziness", "Syncope", "Falls"],
      relevantSystems: ["Heart rate", "Cholinergic signaling", "Safety"],
      drugClasses: ["Cholinesterase inhibitors", "Beta adrenergic blockers", "Calcium channel blockers"]
    },
    {
      name: "Major depressive disorder",
      mechanism: "The nervous-system guide and mental health deck connect depression pathophysiology with neurotransmitter models and SSRI treatment.",
      sideEffects: ["Depressed mood", "Anhedonia", "Sleep or appetite changes", "Poor concentration", "Suicidality risk"],
      relevantSystems: ["CNS", "Serotonin", "Norepinephrine", "Mood regulation"],
      drugClasses: ["Selective serotonin reuptake inhibitors"]
    },
    {
      name: "Serotonin syndrome risk",
      mechanism: "Fluoxetine slides warn against serotonergic combinations such as St. John's wort and list serotonin syndrome as an adverse effect.",
      sideEffects: ["Agitation", "Confusion", "Sweating", "Tremor", "Hyperreflexia", "Fever in severe cases"],
      relevantSystems: ["Serotonin", "CNS", "Autonomic nervous system", "Medication interactions"],
      drugClasses: ["Selective serotonin reuptake inhibitors"]
    },
    {
      name: "Opioid overdose",
      mechanism: "Naloxone reverses opioid receptor effects when opioid toxicity causes CNS and respiratory depression.",
      sideEffects: ["Unresponsiveness", "Slow respirations", "Pinpoint pupils", "Low oxygenation"],
      relevantSystems: ["Opioid receptors", "Respiratory drive", "CNS"],
      drugClasses: ["Opioid antagonists"]
    },
    {
      name: "Sexual health / hormone therapy",
      mechanism: "The endocrine guide includes sexual health and testosterone adverse effects.",
      sideEffects: ["Adverse effects are specifically flagged for testosterone but not enumerated in extracted guide text."],
      relevantSystems: ["Androgen signaling", "Reproductive system", "Endocrine system"],
      drugClasses: ["Testosterone"]
    }
  ]
};

const week3Graph = {
  groups: [
    { id: "h1", label: "H1 antihistamines", notes: ["diphenhydramine", "cetirizine", "fexofenadine"], type: "drug", x: 10, y: 28, width: 320, height: 96 },
    { id: "saba", label: "SABA", notes: ["albuterol"], type: "drug", x: 10, y: 138, width: 320, height: 62 },
    { id: "laba", label: "LABA", notes: ["formoterol"], type: "drug", x: 10, y: 214, width: 320, height: 62 },
    { id: "sama", label: "SAMA", notes: ["ipratropium"], type: "drug", x: 10, y: 290, width: 320, height: 62 },
    { id: "lama", label: "LAMA", notes: ["tiotropium"], type: "drug", x: 10, y: 366, width: 320, height: 62 },
    { id: "ics", label: "ICS", notes: ["budesonide"], type: "drug", x: 10, y: 442, width: 320, height: 62 },
    { id: "ltra", label: "LTRA", notes: ["zafirlukast"], type: "drug", x: 10, y: 518, width: 320, height: 62 },
    { id: "hypersensitivity-group", label: "hypersensitivity", notes: ["allergy response driven by histamine", "and leukotriene signaling"], type: "condition", x: 760, y: 72, width: 350, height: 92 },
    { id: "asthma-group", label: "asthma", notes: ["reversible bronchoconstriction with", "airway inflammation"], type: "condition", x: 760, y: 214, width: 350, height: 92 },
    { id: "status-group", label: "status asthmaticus", notes: ["severe acute asthma attack that", "does not resolve with usual rescue care"], type: "condition", x: 760, y: 326, width: 350, height: 92 },
    { id: "copd-group", label: "COPD", notes: ["chronic airflow limitation from", "emphysema or chronic bronchitis"], type: "condition", x: 760, y: 474, width: 350, height: 92 }
  ],
  nodes: [
    { id: "diphenhydramine", label: "diphenhydramine", type: "drug", x: 330, y: 76, cue: "First-generation antihistamine; useful allergy link, more sedation/anticholinergic concern.", tags: ["H1 antihistamine", "sedating"] },
    { id: "cetirizine", label: "cetirizine", type: "drug", x: 330, y: 76, cue: "Later-generation antihistamine; allergy symptom control with less sedation than first generation.", tags: ["H1 antihistamine", "less sedating"] },
    { id: "fexofenadine", label: "fexofenadine", type: "drug", x: 330, y: 76, cue: "Later-generation antihistamine used for allergic symptoms; minimal CNS sedation emphasis.", tags: ["H1 antihistamine", "less sedating"] },
    { id: "albuterol", label: "albuterol", type: "drug", x: 330, y: 169, cue: "SABA rescue bronchodilator for acute bronchospasm.", tags: ["SABA", "rescue"] },
    { id: "formoterol", label: "formoterol", type: "drug", x: 330, y: 245, cue: "LABA maintenance bronchodilator; not sole rescue therapy.", tags: ["LABA", "maintenance"] },
    { id: "ipratropium", label: "ipratropium", type: "drug", x: 330, y: 321, cue: "SAMA bronchodilator; muscarinic blockade reduces bronchoconstriction.", tags: ["SAMA"] },
    { id: "tiotropium", label: "tiotropium", type: "drug", x: 330, y: 397, cue: "LAMA maintenance bronchodilator, especially tied to COPD control.", tags: ["LAMA"] },
    { id: "budesonide", label: "budesonide", type: "drug", x: 330, y: 473, cue: "Inhaled corticosteroid for airway inflammation control.", tags: ["ICS", "controller"] },
    { id: "zafirlukast", label: "zafirlukast", type: "drug", x: 330, y: 549, cue: "Leukotriene receptor antagonist; controller link for airway inflammation/allergy pathways.", tags: ["LTRA"] },
    { id: "hypersensitivity", label: "hypersensitivity", type: "condition", x: 760, y: 109, cue: "Histamine and leukotriene pathways connect allergy symptoms to antihistamines and LTRAs.", tags: ["allergy"] },
    { id: "asthma", label: "asthma", type: "condition", x: 760, y: 251, cue: "Inflammation plus reversible bronchoconstriction: rescue bronchodilator plus controller logic.", tags: ["bronchospasm", "inflammation"] },
    { id: "status", label: "status asthmaticus", type: "condition", x: 760, y: 363, cue: "Severe asthma exacerbation; albuterol is the high-yield rescue medication link.", tags: ["urgent"] },
    { id: "copd", label: "COPD", type: "condition", x: 760, y: 511, cue: "Persistent airflow limitation; muscarinic antagonists and bronchodilator maintenance links matter.", tags: ["emphysema", "chronic bronchitis"] }
  ],
  edges: [
    ["diphenhydramine", "hypersensitivity"],
    ["cetirizine", "hypersensitivity"],
    ["fexofenadine", "hypersensitivity"],
    ["albuterol", "asthma"],
    ["albuterol", "status"],
    ["albuterol", "copd"],
    ["formoterol", "asthma"],
    ["formoterol", "copd"],
    ["ipratropium", "asthma"],
    ["ipratropium", "copd"],
    ["tiotropium", "copd"],
    ["budesonide", "asthma"],
    ["zafirlukast", "asthma"]
  ]
};

const graphNodeDetails = {
  diphenhydramine: {
    description: "Diphenhydramine is the course prototype for first-generation H1 receptor antagonists. The hypersensitivity deck describes first-generation agents as binding central and peripheral H1 receptors, crossing the blood-brain barrier, and blocking muscarinic receptors.",
    sideEffects: ["CNS depression or stimulation", "Dry mouth", "Urinary retention", "Blurred vision", "Constipation"],
    considerations: "Course slides flag shorter duration of action, every 4-6 hour dosing, and caution with known arrhythmia because of prolonged QT risk."
  },
  cetirizine: {
    description: "Cetirizine is the course prototype for second-generation H1 receptor antagonists. The slides emphasize minimal blood-brain barrier penetration, mostly peripheral H1 binding, and longer duration than first-generation agents.",
    sideEffects: ["Less CNS sedation than first-generation agents", "Fewer central anticholinergic effects emphasized by course material"],
    considerations: "Course slides emphasize once daily or BID dosing and peripheral H1 receptor activity. Specific contraindications were not detailed in the Week 3 slides."
  },
  fexofenadine: {
    description: "Fexofenadine is the course prototype for third-generation H1 receptor antagonists. The slides describe it as having minimal or no sedation, mostly peripheral H1 binding, and the cleanest safety/side-effect profile among the generations discussed.",
    sideEffects: ["Minimal or no sedation", "Lower side-effect burden emphasized by course material"],
    considerations: "Course slides emphasize once daily or BID dosing and minimal blood-brain barrier activity. Specific contraindications were not detailed in the Week 3 slides."
  },
  loratadine: {
    description: "Loratadine is a second-generation H1 receptor antagonist used for allergic rhinitis and urticaria symptoms. It has mostly peripheral H1 activity and is less sedating than first-generation antihistamines.",
    sideEffects: ["Headache", "Mild drowsiness", "Dry mouth", "GI upset"],
    considerations: "Assess allergy symptoms, sedation response, renal/hepatic considerations when relevant, and interacting medications."
  },
  albuterol: {
    description: "Albuterol is a short-acting beta2 agonist used as a rescue bronchodilator for acute bronchospasm. It relaxes bronchial smooth muscle quickly, so it is linked to asthma exacerbations, status asthma, and COPD symptom relief.",
    sideEffects: ["Tachycardia, palpitations, dysrhythmia", "Chest pain or increased BP", "Anxiety, restlessness, tremor", "Diarrhea or nausea", "Hyperglycemia", "Hypokalemia"],
    considerations: "Course slides flag cardiac disease, arrhythmias, heart failure, diabetes, hyperthyroidism, hypokalemia, and pregnancy/lactation as caution areas. Teach rescue use, Rule of 2, inhaler technique, and when to seek care."
  },
  formoterol: {
    description: "Formoterol is a long-acting beta2 agonist used for maintenance bronchodilation. It supports longer-term control of bronchospasm but does not replace a rescue inhaler for sudden acute symptoms.",
    sideEffects: ["Tachycardia or palpitations", "Tremor", "Anxiety or restlessness", "GI upset", "Hyperglycemia", "Hypokalemia"],
    considerations: "Course slides state LABAs are for long-term control and should never be monotherapy in asthma, though they can be used without ICS in COPD. Use caution with the same beta2-agonist risk areas: cardiac disease, diabetes, hyperthyroidism, hypokalemia, and pregnancy/lactation."
  },
  salmeterol: {
    description: "Salmeterol is a long-acting beta2 agonist used for maintenance bronchodilation. It is not for acute rescue and should not be used alone for asthma control.",
    sideEffects: ["Tachycardia or palpitations", "Tremor", "Anxiety or restlessness", "Hyperglycemia", "Hypokalemia"],
    considerations: "Use with an inhaled corticosteroid for asthma, keep rescue SABA available, and assess cardiac disease, dysrhythmia risk, diabetes, thyroid disease, and potassium concerns."
  },
  ipratropium: {
    description: "Ipratropium is a short-acting muscarinic antagonist that blocks muscarinic-mediated bronchoconstriction. It is used for bronchodilation and is often associated with COPD therapy and combination acute respiratory treatments.",
    sideEffects: ["Dry eyes or pupil dilation", "Urinary retention", "Dry mouth", "Constipation", "Dizziness, headache, nervousness, fatigue", "Eyesight changes or sore throat", "Paradoxical bronchospasm"],
    considerations: "Course slides flag additive anticholinergic or atropine-like effects, narrow-angle glaucoma, bladder neck obstruction, and prostatic hypertrophy. SAMA can be combined with albuterol, especially in emergency treatment."
  },
  tiotropium: {
    description: "Tiotropium is a long-acting muscarinic antagonist used for maintenance bronchodilation, especially in COPD. Its longer receptor activity supports scheduled control rather than immediate rescue relief.",
    sideEffects: ["Dry eyes or pupil dilation", "Urinary retention", "Dry mouth", "Constipation", "Dizziness, headache, nervousness, fatigue", "Eyesight changes or sore throat", "Paradoxical bronchospasm"],
    considerations: "Course slides describe LAMA as maintenance therapy in COPD and possible add-on therapy in moderate-severe asthma. Use caution with additive anticholinergic effects, narrow-angle glaucoma, bladder neck obstruction, and prostatic hypertrophy."
  },
  umeclidinium: {
    description: "Umeclidinium is a long-acting muscarinic antagonist used for maintenance bronchodilation in COPD-focused regimens.",
    sideEffects: ["Dry mouth", "Urinary retention", "Constipation", "Blurred vision", "Paradoxical bronchospasm"],
    considerations: "Use for maintenance rather than rescue. Assess additive anticholinergic effects, narrow-angle glaucoma, bladder neck obstruction, and prostatic hypertrophy."
  },
  aclidinium: {
    description: "Aclidinium is a long-acting muscarinic antagonist used for maintenance bronchodilation in COPD-focused regimens.",
    sideEffects: ["Dry mouth", "Urinary retention", "Constipation", "Headache", "Paradoxical bronchospasm"],
    considerations: "Use for maintenance rather than rescue. Assess additive anticholinergic effects, narrow-angle glaucoma, bladder neck obstruction, and prostatic hypertrophy."
  },
  budesonide: {
    description: "Budesonide is an inhaled corticosteroid that reduces airway inflammation, edema, mucus production, and inflammatory mediator activity. It is a controller medication for inflammatory airway disease rather than a rapid bronchodilator.",
    sideEffects: ["Sore throat", "Hoarseness", "Cough", "Dry mouth", "Fungal or yeast infection such as thrush", "High-dose long-term pediatric risk for suppressed growth or HPA axis function"],
    considerations: "Course slides state ICS should not be used as rescue medication for acute asthma. Teach daily use to maintain effect, rinse mouth/throat after use, and keep SABA PRN available when prescribed."
  },
  beclomethasone: {
    description: "Beclomethasone is an inhaled corticosteroid used as controller therapy to reduce airway inflammation. It does not provide rapid bronchodilation.",
    sideEffects: ["Sore throat", "Hoarseness", "Cough", "Oral candidiasis", "Dry mouth"],
    considerations: "Teach daily use, mouth rinsing after inhalation, and continued access to a rescue inhaler for acute symptoms."
  },
  fluticasone: {
    description: "Fluticasone is an inhaled corticosteroid used as controller therapy to reduce airway inflammation. It is often seen in combination inhalers.",
    sideEffects: ["Sore throat", "Hoarseness", "Cough", "Oral candidiasis", "Dry mouth"],
    considerations: "Teach daily use, mouth rinsing after inhalation, and continued access to a rescue inhaler for acute symptoms."
  },
  zafirlukast: {
    description: "Zafirlukast is a leukotriene receptor antagonist that blocks leukotriene effects involved in bronchoconstriction, mucus production, and airway inflammation. The Week 3 treatment slides list zafirlukast as approved for asthma only.",
    sideEffects: ["Dizziness, headache, agitation, anxiety, depression, fatigue, insomnia, suicidal thoughts or behaviors", "Diarrhea, nausea/vomiting, elevated LFTs", "URI or cough", "Rash or Stevens-Johnson syndrome"],
    considerations: "Course slides state zafirlukast is approved for asthma only, is not a rescue medication, is contraindicated with hepatic impairment/CYP2C9 inhibitor concern, interacts with warfarin and phenytoin, and should be taken 1 hour before or 2 hours after meals."
  },
  montelukast: {
    description: "Montelukast is a leukotriene receptor antagonist used for asthma control and selected allergy-related indications. It is not a rescue medication for acute bronchospasm.",
    sideEffects: ["Headache", "GI upset", "Upper respiratory symptoms", "Mood or sleep changes", "Suicidal thoughts or behavior warning"],
    considerations: "Teach that it is not for acute rescue and monitor for neuropsychiatric symptoms such as agitation, depression, sleep changes, or suicidal thinking."
  },
  hypersensitivity: {
    description: "Hypersensitivity refers to an exaggerated immune response after sensitization and re-exposure to an antigen. In this Week 3 map, the highest-yield connection is histamine and leukotriene signaling, which explains the links to H1 antihistamines and LTRAs.",
    sideEffects: ["Itching", "Rash or urticaria", "Rhinorrhea", "Bronchoconstriction", "Possible anaphylaxis if severe"],
    considerations: "Assess airway, breathing, circulation, exposure history, and severity. Escalate immediately for airway swelling, wheezing, hypotension, or systemic reaction."
  },
  asthma: {
    description: "Asthma is a chronic inflammatory airway disorder with reversible bronchoconstriction and hyperresponsiveness. Medication logic separates quick relief of bronchospasm from controller therapy that reduces inflammation and future exacerbations.",
    sideEffects: ["Wheezing", "Dyspnea", "Chest tightness", "Cough", "Tachypnea during exacerbation"],
    considerations: "Differentiate rescue versus maintenance therapy, assess inhaler technique, identify triggers, and watch for increasing rescue inhaler use or reduced response to treatment."
  },
  status: {
    description: "Status asthmaticus is a severe, persistent asthma exacerbation that does not resolve with usual rescue measures. It is an airway emergency because ongoing bronchospasm and inflammation can progress to respiratory failure.",
    sideEffects: ["Severe dyspnea", "Persistent wheezing or decreased breath sounds", "Tachycardia", "Hypoxemia", "Exhaustion or altered mental status"],
    considerations: "Treat as urgent. Monitor oxygenation, work of breathing, response to bronchodilators, and signs of impending respiratory failure."
  },
  copd: {
    description: "COPD is persistent airflow limitation commonly involving emphysema and chronic bronchitis. Medication links emphasize bronchodilation, symptom reduction, maintenance therapy, and careful assessment of respiratory status.",
    sideEffects: ["Chronic cough", "Sputum production", "Wheezing", "Dyspnea", "Activity intolerance"],
    considerations: "Assess baseline respiratory status, inhaler technique, exacerbation history, oxygenation goals, and anticholinergic contraindication risks when using muscarinic antagonists."
  }
};

const WEEK_TOPICS = new Map([
  [1, "Introduction to Pharmacotherapeutics, Pathophysiology, Immune/Cellular Processes, and PK/PD"],
  [2, "Cardiovascular Pathopharmacology"],
  [3, "Pulmonary Pathopharmacology"],
  [4, "Renal Pathopharmacology and Electrolytes"],
  [5, "Gastrointestinal Pathopharmacology"],
  [6, "Hematology and Coagulation"],
  [7, "Endocrine Pathopharmacology"],
  [8, "Infection Pathopharmacology"],
  [9, "Nervous System and Mental Health Pathopharmacology"]
]);

const WEEK3_DECKS = {
  antihistamine: "week-03-pulmonary-pathopharmacology-03-w3-in-class-friday-w3-nurs-304-hypersensitivity-and-antihistamine-student",
  treatment: "week-03-pulmonary-pathopharmacology-03-w3-in-class-friday-w3-nurs-304-respiratory-diseases-treatment-student",
  patho: "week-03-pulmonary-pathopharmacology-03-w3-in-class-tuesday-w3-respiratory-patho-student",
  ards: "week-03-pulmonary-pathopharmacology-03-w3-required-asynchronous-ards-asynch-student-w-recording",
  caseStudy: "week-03-pulmonary-pathopharmacology-03-w3-required-asynchronous-nurs-304-respiratory-case-study-asynchronous-2025-studen"
};

const graphSlideRanges = {
  diphenhydramine: [
    { deckId: WEEK3_DECKS.antihistamine, start: 15, end: 24 },
    { deckId: WEEK3_DECKS.caseStudy, start: 27, end: 31 }
  ],
  cetirizine: [{ deckId: WEEK3_DECKS.antihistamine, start: 15, end: 29 }],
  fexofenadine: [{ deckId: WEEK3_DECKS.antihistamine, start: 15, end: 29 }],
  albuterol: [
    { deckId: WEEK3_DECKS.treatment, start: 5, end: 24 },
    { deckId: WEEK3_DECKS.caseStudy, start: 5, end: 20 }
  ],
  formoterol: [{ deckId: WEEK3_DECKS.treatment, start: 5, end: 24 }],
  ipratropium: [
    { deckId: WEEK3_DECKS.treatment, start: 34, end: 51 },
    { deckId: WEEK3_DECKS.caseStudy, start: 15, end: 16 }
  ],
  tiotropium: [{ deckId: WEEK3_DECKS.treatment, start: 34, end: 51 }],
  budesonide: [
    { deckId: WEEK3_DECKS.treatment, start: 26, end: 33 },
    { deckId: WEEK3_DECKS.caseStudy, start: 22, end: 25 }
  ],
  zafirlukast: [{ deckId: WEEK3_DECKS.treatment, start: 52, end: 62 }],
  hypersensitivity: [{ deckId: WEEK3_DECKS.antihistamine, start: 4, end: 29 }],
  asthma: [
    { deckId: WEEK3_DECKS.patho, start: 47, end: 51 },
    { deckId: WEEK3_DECKS.treatment, start: 5, end: 33 },
    { deckId: WEEK3_DECKS.treatment, start: 52, end: 62 },
    { deckId: WEEK3_DECKS.caseStudy, start: 5, end: 25 }
  ],
  status: [
    { deckId: WEEK3_DECKS.patho, start: 47, end: 51 },
    { deckId: WEEK3_DECKS.treatment, start: 5, end: 24 },
    { deckId: WEEK3_DECKS.caseStudy, start: 5, end: 20 }
  ],
  copd: [
    { deckId: WEEK3_DECKS.patho, start: 53, end: 66 },
    { deckId: WEEK3_DECKS.treatment, start: 5, end: 5 },
    { deckId: WEEK3_DECKS.treatment, start: 12, end: 17 },
    { deckId: WEEK3_DECKS.treatment, start: 27, end: 32 },
    { deckId: WEEK3_DECKS.treatment, start: 34, end: 49 }
  ]
};

function buildWeekGraphs() {
  const graphs = new Map();
  const conditionByName = new Map(medMapData.conditions.map((condition) => [condition.name, condition]));
  const weeks = [...new Set(medMapData.medicationClasses.map((medClass) => medClass.week))].sort((a, b) => a - b);

  weeks.forEach((week) => {
    graphs.set(week, week === 3 ? prepareWeek3Graph() : buildGeneratedWeekGraph(week, conditionByName));
  });

  return graphs;
}

function prepareWeek3Graph() {
  const graph = {
    ...week3Graph,
    week: 3,
    subtitle: "Week 3 · pulmonary pathopharmacology",
    defaultNodeId: "asthma",
    nodes: week3Graph.nodes.map((node) => ({ ...node, week: 3 }))
  };
  return graph;
}

function buildGeneratedWeekGraph(week, conditionByName) {
  const classes = medMapData.medicationClasses.filter((medClass) => medClass.week === week);
  const conditionNames = [...new Set(classes.flatMap((medClass) => medClass.conditions ?? []))];
  const conditionNodes = conditionNames.map((name) => {
    const sourceDetails = conditionByName.get(name);
    const details = getConditionDetails(name, sourceDetails);
    const id = `condition-${week}-${graphSlug(name)}`;
    return {
      id,
      label: name,
      type: "condition",
      week,
      cue: details.description,
      tags: sourceDetails?.relevantSystems?.slice(0, 3) ?? ["condition"],
      details
    };
  });
  const conditionIdByName = new Map(conditionNodes.map((node) => [node.label, node.id]));
  const groups = [];
  const nodes = [];
  const edges = [];

  classes.forEach((medClass) => {
    const classId = `class-${week}-${graphSlug(medClass.name)}`;
    const medLabels = medClass.drugs.length > 0
      ? medClass.drugs
      : [medClass.prototype?.inCourseMaterial ? medClass.prototype.name : medClass.name];
    const medIds = medLabels.map((drug) => `${classId}-${graphSlug(drug)}`);

    groups.push({
      id: classId,
      label: medClass.name,
      notes: medIds,
      type: "drug"
    });

    medLabels.forEach((drug, index) => {
      const details = getMedicationDetails(medClass, drug);
      nodes.push({
        id: medIds[index],
        label: drug,
        type: "drug",
        week,
        cue: details.description,
        tags: [medClass.name],
        details
      });
    });

    (medClass.conditions ?? []).forEach((conditionName) => {
      const conditionId = conditionIdByName.get(conditionName);
      if (!conditionId) return;
      medIds.forEach((medId) => edges.push([medId, conditionId]));
    });
  });

  groups.push(...conditionNodes.map((node) => ({
    id: `${node.id}-group`,
    label: node.label,
    notes: summarizeCondition(node.label, node.details.description),
    type: "condition"
  })));
  nodes.push(...conditionNodes);

  const defaultNodeId = conditionNodes[0]?.id ?? nodes[0]?.id;
  return {
    week,
    subtitle: `Week ${week} · medication-condition map`,
    defaultNodeId,
    groups,
    nodes,
    edges
  };
}

function summarizeCondition(label, description) {
  const summaries = {
    "Autoimmune disease": "The immune system mistakenly attacks self tissue, causing chronic inflammation and organ-specific injury.",
    "Graft-versus-host disease": "Donor immune cells attack host tissues after transplant, most often affecting skin, GI tract, or liver.",
    "Heart failure": "The heart cannot pump or fill effectively, reducing perfusion and causing fluid backup.",
    "Coronary artery disease": "Coronary artery narrowing limits myocardial blood flow and can lead to ischemic chest pain.",
    "Dysrhythmia": "Abnormal electrical conduction changes heart rhythm and can reduce perfusion or increase clot risk.",
    "Hypertension": "Persistently elevated blood pressure increases workload on the heart, kidneys, brain, and blood vessels.",
    "Electrolyte imbalance": "Abnormal sodium, potassium, magnesium, calcium, or phosphate levels disrupt fluid balance, nerves, and cardiac rhythm.",
    "Renal failure": "Reduced kidney function impairs waste clearance, fluid balance, electrolyte control, and acid-base regulation.",
    "Acute kidney injury": "Kidney function declines suddenly, causing rapid changes in waste clearance, fluid balance, and electrolytes.",
    "Chronic kidney disease": "Kidney function declines over time, impairing filtration, erythropoietin production, fluid balance, and electrolyte regulation.",
    "Shock": "Inadequate tissue perfusion prevents cells from receiving enough oxygen and nutrients to meet demand.",
    "Peptic ulcer disease": "Acid and impaired mucosal protection create erosions in the stomach or duodenum.",
    "GERD": "Refluxed gastric contents irritate the esophagus and cause heartburn, regurgitation, or chronic irritation.",
    "Constipation": "Stool moves too slowly or is difficult to pass, causing hard stools, straining, and discomfort.",
    "Diarrhea": "Frequent loose stool increases risk for dehydration, electrolyte loss, and skin breakdown.",
    "Anemia": "Low red blood cell mass or hemoglobin reduces oxygen delivery to tissues.",
    "Pathologic clotting": "Clots form inappropriately and can obstruct vessels or embolize to distant organs.",
    "DIC": "Widespread clotting consumes platelets and clotting factors, creating simultaneous clotting and bleeding risk.",
    "Leukemia and lymphoma": "Blood and lymphatic cancers disrupt normal white blood cell function, immunity, and marrow activity.",
    "Hypothyroidism": "Too little thyroid hormone slows metabolism and can cause fatigue, cold intolerance, and bradycardia.",
    "Hyperthyroidism / Graves disease": "Excess thyroid hormone accelerates metabolism and can cause tachycardia, heat intolerance, and weight loss.",
    "Type 1 diabetes mellitus": "Autoimmune beta-cell destruction causes absolute insulin deficiency and risk for ketoacidosis.",
    "Type 2 diabetes mellitus": "Insulin resistance and progressive beta-cell dysfunction cause chronic hyperglycemia.",
    "DKA": "Insulin deficiency causes hyperglycemia, ketone production, metabolic acidosis, and dehydration.",
    "HHNS": "Severe hyperglycemia causes profound dehydration and high serum osmolality, usually without major ketosis.",
    "Addison disease": "Adrenal insufficiency causes cortisol deficiency and often aldosterone deficiency.",
    "Cushing disease / syndrome": "Prolonged cortisol excess causes metabolic, fluid, tissue, and immune effects.",
    "Dysmenorrhea": "Painful menstruation often comes from prostaglandin-mediated uterine contractions.",
    "Inflammation": "Immune and vascular responses to injury or irritation cause redness, heat, swelling, pain, and repair.",
    "Angina": "Myocardial oxygen demand exceeds supply, causing ischemic chest discomfort.",
    "Acute coronary syndrome": "Acute coronary obstruction or plaque rupture causes sudden myocardial ischemia or infarction risk.",
    "Atherosclerosis": "Lipid-rich plaque builds up in arteries, narrowing flow and increasing rupture risk.",
    "Status asthmaticus": "A severe asthma exacerbation persists despite usual rescue therapy and can progress to respiratory failure.",
    "Hypervolemia": "Excess circulating fluid causes edema, increased workload, and pulmonary congestion risk.",
    "Hypovolemia": "Low circulating volume reduces preload, blood pressure, and tissue perfusion.",
    "Nausea and vomiting": "GI or neurologic triggers cause nausea and emesis, increasing dehydration and electrolyte-loss risk.",
    "Deep vein thrombosis": "A clot forms in a deep vein and can obstruct venous return or embolize to the lungs.",
    "Arterial thrombosis": "A clot blocks arterial blood flow and can cause ischemic tissue injury.",
    "Thrombosis": "A clot forms inside a vessel and can block local flow or embolize.",
    "Atrial fibrillation / flutter": "Atrial rhythm disturbance promotes blood stasis and increases embolic stroke risk.",
    "Bleeding": "Blood loss or impaired clotting reduces circulating volume and oxygen-carrying capacity.",
    "Contraception": "Hormonal contraception prevents pregnancy by suppressing ovulation and changing cervical mucus or endometrium.",
    "Sexual health / hormone therapy": "Hormone therapy changes androgen or ovarian hormone signaling to affect reproductive and systemic function."
  };
  if (summaries[label]) return [summaries[label]];

  const firstSentence = String(description ?? "").match(/^[^.!?]+[.!?]?/)?.[0]?.trim() ?? "";
  return [firstSentence || `${label} affects patient physiology and guides medication selection.`];
}

function graphSlug(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

const authoredConditionDetails = {
  "Graft-versus-host disease": {
    description: "Graft-versus-host disease occurs when donor immune cells attack host tissues after transplant.",
    sideEffects: ["Rash or skin changes", "Diarrhea or abdominal symptoms", "Liver involvement", "Infection risk from immunosuppression"],
    considerations: "Connect treatment to immune suppression, infection surveillance, lab trends, and transplant-related tissue injury."
  },
  "Inflammation": {
    description: "Inflammation is the immune and vascular response to injury, infection, or irritation.",
    sideEffects: ["Redness", "Heat", "Swelling", "Pain", "Loss of function when severe"],
    considerations: "Link medications to suppressing inflammatory signaling while monitoring infection risk and tissue-healing concerns."
  },
  "Contraception": {
    description: "Contraception prevents pregnancy by suppressing ovulation or changing cervical mucus and the endometrium.",
    sideEffects: ["Expected cycle changes", "Breakthrough bleeding", "Nausea or breast tenderness with hormones", "No disease symptoms because this is pregnancy prevention"],
    considerations: "Screen for pregnancy, clot risk, migraine with aura, smoking over age 35, uncontrolled hypertension, liver disease, and interacting medications."
  },
  "Bacterial infection": {
    description: "Bacterial infection occurs when pathogenic bacteria invade tissue or body fluids and trigger local or systemic inflammation.",
    sideEffects: ["Fever", "Localized pain or drainage", "Elevated WBC or inflammatory signs", "Malaise", "Sepsis signs if severe"],
    considerations: "Use culture and susceptibility data when available, check allergy history, renal function, pregnancy status, and antibiotic-specific adverse effects."
  },
  "Sexual health / hormone therapy": {
    description: "Hormone therapy changes androgen or ovarian hormone signaling for specific endocrine or reproductive indications.",
    sideEffects: ["Acne or skin changes", "Mood changes", "Fluid retention", "Polycythemia risk with testosterone"],
    considerations: "Use only for a clear indication; monitor adverse effects, pregnancy exposure risk, cardiovascular/clotting risk, and labs such as hematocrit when ordered."
  },
  "DKA": {
    description: "Diabetic ketoacidosis is a life-threatening insulin-deficient state with hyperglycemia, ketosis, acidosis, and dehydration. It is more common in type 1 diabetes and can be triggered by illness, stress, or missed insulin.",
    sideEffects: ["Rapid onset", "Fruity breath", "Kussmaul respirations", "Nausea/vomiting", "Elevated BUN/creatinine from dehydration"],
    considerations: "Priority treatment is fluids, insulin, electrolyte replacement, potassium monitoring, precipitating-cause treatment, and close acid-base/glucose assessment."
  },
  "HHNS": {
    description: "Hyperglycemic hyperosmolar nonketotic syndrome is severe hyperglycemia with profound dehydration and high serum osmolality, usually without significant ketosis. It is more common in type 2 diabetes and often develops more gradually than DKA.",
    sideEffects: ["Severe hyperglycemia", "Extreme dehydration", "Altered mental status", "Weakness", "Seizures or coma in severe cases"],
    considerations: "Monitor fluid status, serum osmolality, electrolytes, renal function, neurologic status, insulin therapy, and the underlying trigger."
  },
  "Addison disease": {
    description: "Addison disease is primary adrenal insufficiency with deficient cortisol and often deficient aldosterone. Low cortisol impairs stress response and glucose regulation, while low aldosterone contributes to sodium loss, potassium retention, and low blood pressure.",
    sideEffects: ["Fatigue", "Muscle weakness", "Weight loss", "Hyperpigmentation", "Hypotension"],
    considerations: "Glucocorticoid replacement is essential. Monitor for adrenal crisis during illness, surgery, injury, or missed doses, and reinforce stress-dose steroid instructions when prescribed."
  },
  "Cushing disease / syndrome": {
    description: "Cushing syndrome is prolonged cortisol excess from endogenous overproduction or exogenous corticosteroid exposure; Cushing disease is pituitary ACTH-driven cortisol excess. Excess cortisol shifts fat distribution, raises glucose, weakens tissues, and suppresses immune response.",
    sideEffects: ["Truncal weight gain", "Dorsocervical fat pad", "Thin skin or bruising", "Hyperglycemia", "Hypertension"],
    considerations: "Assess steroid exposure, glucose, blood pressure, infection risk, skin integrity, bone health, mood changes, and the need for gradual tapering when corticosteroids are reduced."
  },
  "Hypothyroidism": {
    description: "Hypothyroidism is deficient thyroid hormone activity, slowing metabolic processes. Thyroid hormone replacement restores hormone levels and prevents severe decompensation such as myxedema coma in untreated or undertreated patients.",
    sideEffects: ["Fatigue", "Cold intolerance", "Weight gain", "Constipation", "Bradycardia"],
    considerations: "Monitor TSH/T4 as ordered, take levothyroxine consistently on an empty stomach, separate from calcium/iron, and watch for overtreatment symptoms."
  },
  "Hyperthyroidism / Graves disease": {
    description: "Hyperthyroidism is excess thyroid hormone activity; Graves disease is an autoimmune cause. Thioamides reduce hormone synthesis and require monitoring for rare but serious blood and liver toxicity.",
    sideEffects: ["Weight loss", "Heat intolerance", "Tachycardia", "Tremor", "Anxiety"],
    considerations: "Monitor heart rate, thyroid labs, fever/sore throat with thioamides, liver symptoms, pregnancy status, and thyroid storm warning signs."
  },
  "Type 1 diabetes mellitus": {
    description: "Type 1 diabetes mellitus is autoimmune beta-cell destruction causing absolute insulin deficiency. Insulin therapy is required, and DKA risk rises when insulin is missed or illness increases metabolic stress.",
    sideEffects: ["Hyperglycemia", "Polyuria", "Polydipsia", "Weight loss", "DKA symptoms if severe"],
    considerations: "Teach insulin timing, glucose monitoring, sick-day rules, hypoglycemia treatment, ketone checks when indicated, and meal/activity matching."
  },
  "Type 2 diabetes mellitus": {
    description: "Type 2 diabetes mellitus combines insulin resistance with progressive beta-cell dysfunction. Medication links include insulin sensitization, renal glucose excretion, incretin-based therapy, and sometimes insulin replacement.",
    sideEffects: ["Hyperglycemia", "Polyuria", "Polydipsia", "Blurred vision", "Fatigue"],
    considerations: "Monitor HbA1c, renal function, cardiovascular risk, hypoglycemia risk by regimen, foot/eye/kidney complications, diet, activity, and adherence."
  },
  "Acute kidney injury": {
    description: "Acute kidney injury is a sudden decline in kidney function that reduces filtration and can quickly disrupt fluid balance, electrolyte levels, acid-base status, and medication clearance.",
    sideEffects: ["Decreased urine output", "Fluid retention", "Rising BUN/creatinine", "Electrolyte abnormalities", "Fatigue or confusion when severe"],
    considerations: "Monitor urine output, daily weight, creatinine, BUN, potassium, fluid status, nephrotoxic medications, and whether medication doses need renal adjustment."
  },
  "Chronic kidney disease": {
    description: "Chronic kidney disease is a gradual, long-term loss of kidney function that impairs filtration, fluid and electrolyte balance, blood pressure regulation, and erythropoietin production.",
    sideEffects: ["Fatigue", "Anemia", "Fluid overload", "Hypertension", "Hyperkalemia"],
    considerations: "Monitor kidney function trends, potassium, blood pressure, fluid status, anemia labs, medication dosing, and avoidance of nephrotoxic exposures."
  },
  "Heart failure": {
    description: "Heart failure occurs when the heart cannot pump or fill effectively enough to meet the body's needs, leading to reduced perfusion and fluid backup into the lungs, venous system, or tissues.",
    sideEffects: ["Dyspnea", "Edema", "Fatigue", "Orthopnea", "Weight gain from fluid retention"],
    considerations: "Monitor lung sounds, edema, daily weight, blood pressure, heart rate, renal function, potassium, and worsening shortness of breath."
  },
  "Coronary artery disease": {
    description: "Coronary artery disease is narrowing of the coronary arteries from atherosclerotic plaque, which limits oxygen-rich blood flow to the myocardium and can cause angina or myocardial infarction.",
    sideEffects: ["Chest discomfort", "Shortness of breath", "Fatigue", "Diaphoresis", "Nausea with ischemia"],
    considerations: "Assess chest-pain pattern, cardiovascular risk factors, lipid therapy, blood pressure, and symptoms that suggest acute coronary syndrome."
  },
  "Dysrhythmia": {
    description: "Dysrhythmia is an abnormal heart rhythm caused by altered impulse formation or conduction, which can reduce cardiac output or increase thromboembolic risk depending on the rhythm.",
    sideEffects: ["Palpitations", "Dizziness", "Syncope", "Chest discomfort", "Shortness of breath"],
    considerations: "Monitor pulse, ECG rhythm, blood pressure, perfusion, potassium, magnesium, and medication effects that alter rate or conduction."
  },
  "Hypertension": {
    description: "Hypertension is persistently elevated blood pressure that increases vascular resistance and long-term risk for heart, kidney, brain, and blood vessel damage.",
    sideEffects: ["Often asymptomatic", "Headache", "Dizziness", "Vision changes", "End-organ damage when uncontrolled"],
    considerations: "Measure blood pressure accurately, assess orthostatic risk, reinforce adherence, and monitor renal function and electrolytes with antihypertensive therapy."
  },
  "Angina": {
    description: "Angina is chest discomfort caused by myocardial oxygen demand exceeding oxygen supply, most often because narrowed coronary arteries cannot deliver enough blood during stress or exertion.",
    sideEffects: ["Chest pressure", "Pain radiating to arm, jaw, neck, or back", "Shortness of breath", "Diaphoresis", "Nausea"],
    considerations: "Assess trigger, duration, relief with rest or nitroglycerin, blood pressure, PDE-5 inhibitor use, and symptoms that suggest acute coronary syndrome."
  },
  "Acute coronary syndrome": {
    description: "Acute coronary syndrome is sudden myocardial ischemia caused by reduced coronary blood flow, often from plaque rupture and clot formation, and can progress to myocardial infarction.",
    sideEffects: ["Persistent chest pain", "Shortness of breath", "Diaphoresis", "Nausea", "ECG or troponin changes"],
    considerations: "Treat as time-sensitive: monitor ECG, troponins, oxygenation, blood pressure, bleeding risk, and reperfusion or antithrombotic therapy plans."
  },
  "Atherosclerosis": {
    description: "Atherosclerosis is buildup of lipid-rich plaque within arterial walls, narrowing blood flow and increasing the risk that plaque rupture will trigger thrombosis.",
    sideEffects: ["Often asymptomatic", "Angina", "Claudication", "TIA or stroke symptoms", "Acute coronary syndrome if plaque ruptures"],
    considerations: "Monitor lipid management, blood pressure, diabetes control, smoking exposure, muscle symptoms with statins, and overall cardiovascular risk reduction."
  },
  "Hypotension / poor perfusion": {
    description: "Hypotension with poor perfusion means blood pressure or circulatory flow is too low to deliver enough oxygenated blood to tissues.",
    sideEffects: ["Dizziness", "Cool clammy skin", "Altered mental status", "Low urine output", "Weak pulses"],
    considerations: "Assess blood pressure trend, MAP, mental status, urine output, skin perfusion, volume status, rhythm, and response to fluids or vasoactive medications."
  },
  "Constipation": {
    description: "Constipation is infrequent or difficult stool passage caused by slowed motility, hard stool, medications, low intake, or impaired elimination reflexes.",
    sideEffects: ["Hard stools", "Straining", "Bloating", "Abdominal discomfort", "Reduced stool frequency"],
    considerations: "Assess bowel pattern, hydration, mobility, opioid use, obstruction symptoms, and whether a bulk-forming, osmotic, softening, or stimulant approach fits the situation."
  },
  "Deep vein thrombosis": {
    description: "Deep vein thrombosis is clot formation in a deep vein, usually in the leg, that can obstruct venous return and embolize to the lungs.",
    sideEffects: ["Unilateral leg swelling", "Pain or tenderness", "Warmth", "Redness", "Possible pulmonary embolism symptoms"],
    considerations: "Assess bleeding risk, renal function, anticoagulant timing, mobility, procedure plans, and symptoms of pulmonary embolism."
  },
  "DIC": {
    description: "Disseminated intravascular coagulation is widespread clotting that consumes platelets and clotting factors, creating both thrombosis and bleeding risk.",
    sideEffects: ["Bleeding", "Bruising", "Petechiae", "Organ dysfunction", "Shock signs"],
    considerations: "Treat the underlying cause and monitor platelets, fibrinogen, PT/INR, aPTT, bleeding, perfusion, and transfusion or hemostatic therapy orders."
  },
  "Respiratory infection": {
    description: "Respiratory infection is infection of the airways or lung tissue that can cause cough, fever, sputum changes, dyspnea, and impaired gas exchange.",
    sideEffects: ["Cough", "Fever", "Sputum changes", "Dyspnea", "Fatigue"],
    considerations: "Assess severity, oxygenation, likely organism, allergy history, renal function, QT risk, and antibiotic adverse effects."
  },
  "Urinary tract infection": {
    description: "Urinary tract infection is bacterial infection of the urinary tract that can cause dysuria, frequency, urgency, flank pain, or systemic infection when severe.",
    sideEffects: ["Dysuria", "Frequency", "Urgency", "Suprapubic discomfort", "Fever if complicated"],
    considerations: "Assess kidney involvement, renal function, culture data when available, hydration, pregnancy status, and antibiotic safety profile."
  },
  "C. difficile superinfection risk": {
    description: "C. difficile superinfection occurs when antibiotics disrupt normal gut flora and allow toxin-producing C. difficile to overgrow in the colon.",
    sideEffects: ["Profuse watery diarrhea", "Abdominal cramping", "Fever", "Colitis", "Fluid and electrolyte loss"],
    considerations: "Monitor severe diarrhea during or after antibiotics, dehydration, stool testing orders, infection precautions, and avoidance of unnecessary antimotility agents."
  },
  "QT prolongation risk": {
    description: "QT prolongation is delayed cardiac repolarization that can increase the risk for torsades de pointes and other dangerous dysrhythmias.",
    sideEffects: ["Palpitations", "Syncope", "Dizziness", "Torsades de pointes risk"],
    considerations: "Review baseline QT risk, potassium, magnesium, dysrhythmia history, and combinations of QT-prolonging medications."
  },
  "Dysmenorrhea": {
    description: "Dysmenorrhea is painful menstruation, often related to prostaglandin-mediated uterine contractions. Hormonal therapy can reduce ovulation or stabilize endometrial cycling, while NSAIDs target prostaglandin-driven pain when appropriate.",
    sideEffects: ["Cramping pelvic pain", "Lower back pain", "Nausea", "Headache", "Fatigue"],
    considerations: "Assess severity, timing, bleeding pattern, pregnancy possibility, secondary causes, NSAID contraindications, and contraindications to estrogen-containing therapy."
  }
};

const authoredMedicationDetails = {
  "Glucocorticoids / corticosteroids": {
    description: "Glucocorticoids such as prednisone reduce inflammation and immune activation by altering gene transcription and suppressing inflammatory mediators. They also replace deficient cortisol in adrenal insufficiency, so the same class can be used either for immune control or hormone replacement.",
    sideEffects: ["Hyperglycemia", "Fluid retention", "Weight gain", "Mood changes", "Infection risk", "Skin thinning with long-term use"],
    considerations: "Do not stop long-term systemic therapy abruptly. Monitor glucose, blood pressure, infection, bone health, adrenal suppression, and need for stress-dose steroids in adrenal insufficiency."
  },
  "T and B cell suppressors": {
    description: "Tacrolimus and mycophenolate mofetil suppress lymphocyte-driven immune activity. The course places them with immune modulation and graft-versus-host disease concepts.",
    sideEffects: ["Infection risk", "GI upset", "Bone marrow suppression", "Renal or drug-specific toxicity"],
    considerations: "Assess infection risk, immune status, lab-monitoring requirements, pregnancy precautions when relevant, and medication interactions."
  },
  "T and B cell suppressors::Tacrolimus": {
    description: "Tacrolimus is a calcineurin inhibitor that suppresses T-cell activation. It is most useful to remember as a potent immunosuppressant with renal, neurologic, infection, and drug-level monitoring concerns.",
    sideEffects: ["Infection risk", "Nephrotoxicity", "Tremor", "Hypertension", "Hyperglycemia"],
    considerations: "Monitor renal function, blood pressure, glucose, infection signs, interacting drugs, and tacrolimus levels when ordered."
  },
  "T and B cell suppressors::Mycophenolate mofetil": {
    description: "Mycophenolate mofetil suppresses lymphocyte proliferation by interfering with purine synthesis. It is important for transplant and immune suppression and is especially associated with GI effects, marrow suppression, and pregnancy risk.",
    sideEffects: ["Infection risk", "Diarrhea", "Nausea", "Leukopenia", "Anemia"],
    considerations: "Monitor CBC, infection symptoms, GI tolerance, pregnancy precautions, and interactions that reduce or increase immunosuppressive effect."
  },
  "Anti-metabolites": {
    description: "Methotrexate is an antimetabolite immunosuppressant/DMARD that interferes with cell proliferation and immune activity.",
    sideEffects: ["Infection risk", "Mouth sores", "GI upset", "Bone marrow suppression", "Liver toxicity"],
    considerations: "Monitor CBC and liver-related labs when ordered, reinforce infection precautions, and treat it as an immunosuppressant rather than a routine pain medication."
  },
  "Monoclonal antibodies": {
    description: "Monoclonal antibodies such as adalimumab are targeted immune therapies used to reduce inflammatory immune signaling.",
    sideEffects: ["Infection risk", "Injection-site reaction", "Hypersensitivity reaction", "Possible reactivation of latent infection"],
    considerations: "Screen for infection risk per protocol, teach when to report fever or infection symptoms, and monitor for hypersensitivity or injection reactions."
  },
  "ACE inhibitors": {
    description: "ACE inhibitors such as lisinopril reduce angiotensin II formation and aldosterone effects, lowering vasoconstriction and volume workload in hypertension and heart failure.",
    sideEffects: ["Dry cough", "Hyperkalemia", "Hypotension", "Renal function changes", "Angioedema"],
    considerations: "Teach urgent reporting of lip, tongue, throat, or facial swelling. Monitor blood pressure, potassium, renal function, cough, and the 36-hour washout before starting an ARNI."
  },
  "Angiotensin II receptor blockers": {
    description: "ARBs block angiotensin II receptor effects in the RAAS pathway. They support hypertension and heart failure management without the same bradykinin cough emphasis as ACE inhibitors.",
    sideEffects: ["Hyperkalemia", "Hypotension", "Dizziness", "Renal function changes", "Rare angioedema"],
    considerations: "Monitor blood pressure, potassium, renal function, and potassium salt-substitute use, especially in kidney disease or with potassium-sparing drugs."
  },
  "Angiotensin receptor/neprilysin inhibitor": {
    description: "Sacubitril/valsartan combines neprilysin inhibition with ARB therapy for heart failure management.",
    sideEffects: ["Hypotension", "Hyperkalemia", "Dizziness", "Renal function changes", "Angioedema risk"],
    considerations: "Do not overlap with ACE inhibitors. Use the required 36-hour ACE-inhibitor washout to reduce angioedema risk."
  },
  "Calcium channel blockers": {
    description: "Calcium channel blockers reduce calcium-mediated vascular and/or cardiac muscle activity. Diltiazem and amlodipine are the course prototypes.",
    sideEffects: ["Hypotension", "Dizziness", "Peripheral edema", "Bradycardia or conduction slowing with diltiazem"],
    considerations: "Check blood pressure and pulse as appropriate. Distinguish dihydropyridine vascular effects from nondihydropyridine cardiac-conduction effects."
  },
  "Calcium channel blockers::Diltiazem": {
    description: "Diltiazem is a nondihydropyridine calcium channel blocker that affects both vessels and cardiac conduction. It is useful for rate control and angina or hypertension contexts where slowing AV-node conduction may matter.",
    sideEffects: ["Bradycardia", "Hypotension", "Dizziness", "Constipation", "Peripheral edema"],
    considerations: "Check heart rate and blood pressure before giving, and use caution with heart block, bradycardia, or heart failure concerns."
  },
  "Calcium channel blockers::Amlodipine": {
    description: "Amlodipine is a dihydropyridine calcium channel blocker that primarily relaxes vascular smooth muscle. It is most useful to connect with hypertension and angina through vasodilation rather than AV-node slowing.",
    sideEffects: ["Peripheral edema", "Hypotension", "Dizziness", "Flushing", "Headache"],
    considerations: "Monitor blood pressure and edema; it is less focused on pulse slowing than diltiazem but can still cause symptomatic hypotension."
  },
  "Beta adrenergic blockers": {
    description: "Beta blockers such as carvedilol and metoprolol reduce adrenergic cardiac workload. Cardioselectivity matters when respiratory disease is present.",
    sideEffects: ["Bradycardia", "Hypotension", "Fatigue", "Dizziness", "Bronchospasm risk with nonselective agents"],
    considerations: "Check heart rate and blood pressure before administration. Use cardioselectivity concepts for asthma/COPD patients and teach not to stop abruptly."
  },
  "Beta adrenergic blockers::Carvedilol": {
    description: "Carvedilol blocks beta receptors and also has alpha-1 blocking activity, so it lowers cardiac workload and vascular resistance. It is commonly tied to heart failure and blood pressure management.",
    sideEffects: ["Bradycardia", "Hypotension", "Dizziness", "Fatigue", "Orthostatic symptoms"],
    considerations: "Check heart rate and blood pressure, monitor for orthostasis, and use caution with asthma/COPD because it is not beta-1 selective."
  },
  "Beta adrenergic blockers::Metoprolol": {
    description: "Metoprolol is a beta-1 selective blocker that primarily reduces heart rate, contractility, and cardiac workload. It is useful for hypertension, angina or rate control, and selected heart failure regimens.",
    sideEffects: ["Bradycardia", "Hypotension", "Fatigue", "Dizziness", "Masked hypoglycemia symptoms"],
    considerations: "Check apical pulse and blood pressure, use caution with conduction disease, and remember beta-1 selectivity is relative at higher doses."
  },
  "Organic nitrates": {
    description: "Nitroglycerin is a nitrate vasodilator that lowers preload and myocardial oxygen demand to relieve ischemic chest pain.",
    sideEffects: ["Headache", "Hypotension", "Dizziness", "Flushing"],
    considerations: "Teach sitting or lying before use, avoiding PDE-5 inhibitors unless cleared, correct storage, and emergency follow-up if chest pain does not improve as instructed."
  },
  "Potassium channel blockers": {
    description: "Amiodarone is a potassium-channel antiarrhythmic used for dysrhythmia management.",
    sideEffects: ["Bradycardia", "Hypotension", "Pulmonary toxicity", "Thyroid dysfunction", "Liver toxicity"],
    considerations: "Use caution with thyroid dysfunction. Monitor rhythm, pulse, blood pressure, pulmonary symptoms, thyroid labs, liver labs, and interactions when ordered."
  },
  "HMG-CoA reductase inhibitors": {
    description: "Statins such as atorvastatin reduce hepatic cholesterol synthesis to lower atherosclerotic cardiovascular risk.",
    sideEffects: ["Myalgias", "GI upset", "Liver enzyme elevation", "Rare rhabdomyolysis"],
    considerations: "Teach reporting unexplained muscle pain or weakness and connect the class to CAD/atherosclerosis risk reduction."
  },
  "Cholesterol absorption inhibitors": {
    description: "Ezetimibe reduces intestinal cholesterol absorption and supports lipid management in coronary artery disease/atherosclerosis risk.",
    sideEffects: ["GI upset", "Headache", "Myalgias", "Liver enzyme elevation when combined with statins"],
    considerations: "Connect the medication to lowering cholesterol burden and monitor for muscle or liver-related concerns when used with statin therapy."
  },
  "Loop diuretics": {
    description: "Furosemide produces strong diuresis and is tested as rapid fluid removal therapy in heart failure or fluid overload contexts.",
    sideEffects: ["Hypotension", "Hypokalemia", "Dehydration", "Increased urination", "Ototoxicity with high-dose therapy"],
    considerations: "Monitor blood pressure, urine output, daily weight/fluid status, potassium, renal function, and hearing changes with high-dose therapy."
  },
  "Thiazides": {
    description: "Hydrochlorothiazide supports hypertension management and mild fluid reduction through thiazide diuresis.",
    sideEffects: ["Hypokalemia", "Hyponatremia", "Dehydration", "Hypotension", "Dizziness"],
    considerations: "Check blood pressure and monitor electrolytes, renal function, weight/fluid status, and fall risk."
  },
  "Aldosterone antagonists": {
    description: "Spironolactone blocks aldosterone and spares potassium while promoting sodium and water loss.",
    sideEffects: ["Hyperkalemia", "Dizziness", "Hypotension", "GI upset", "Endocrine effects"],
    considerations: "The tested priority is hyperkalemia, especially with CKD, diabetes, ACE inhibitors, ARBs, or potassium salt substitutes."
  },
  "Osmotic diuretics": {
    description: "Mannitol creates osmotic diuresis and is tested in acute renal-failure/AKI contexts with IV administration.",
    sideEffects: ["Fluid shifts", "Electrolyte imbalance", "Dehydration", "Fluid overload risk if poorly tolerated"],
    considerations: "Monitor renal function, urine output, electrolytes, lung sounds, edema, and IV route/administration requirements."
  },
  "Vasopressors / alpha- and beta-adrenergic agonists": {
    description: "Norepinephrine, epinephrine, dopamine, and dobutamine support vascular tone and/or cardiac output in shock or poor perfusion states.",
    sideEffects: ["Tachycardia", "Hypertension", "Dysrhythmias", "Peripheral ischemia", "Extravasation injury"],
    considerations: "Monitor blood pressure, rhythm, perfusion, urine output, IV site, and extravasation signs. Norepinephrine IV-site pain/pallor/coolness requires stopping the infusion while leaving the IV in place."
  },
  "Vasopressors / alpha- and beta-adrenergic agonists::Norepinephrine": {
    description: "Norepinephrine is a strong alpha-adrenergic vasopressor used to raise vascular tone and blood pressure in shock states. It is best remembered as a first-line pressor for severe hypotension with close perfusion monitoring.",
    sideEffects: ["Hypertension", "Tachycardia", "Dysrhythmias", "Peripheral ischemia", "Extravasation injury"],
    considerations: "Monitor MAP, rhythm, peripheral perfusion, urine output, and IV site; pain, pallor, or coolness at the site requires stopping the infusion while keeping access in place."
  },
  "Vasopressors / alpha- and beta-adrenergic agonists::Epinephrine": {
    description: "Epinephrine stimulates alpha and beta receptors, increasing vascular tone, heart activity, and bronchodilation. It is high-yield for anaphylaxis and severe shock rather than routine bronchodilation alone.",
    sideEffects: ["Tachycardia", "Palpitations", "Hypertension", "Tremor", "Dysrhythmias"],
    considerations: "Monitor rhythm, blood pressure, perfusion, glucose, and response to therapy; route and concentration safety are critical."
  },
  "Vasopressors / alpha- and beta-adrenergic agonists::Dopamine": {
    description: "Dopamine has dose-dependent adrenergic effects that can support cardiac output and blood pressure. It is useful to distinguish from norepinephrine because its beta and dopaminergic effects vary by dose.",
    sideEffects: ["Tachycardia", "Dysrhythmias", "Hypertension", "Nausea", "Extravasation injury"],
    considerations: "Monitor rhythm closely, blood pressure, urine output, perfusion, and IV site because dysrhythmias and extravasation are major concerns."
  },
  "Vasopressors / alpha- and beta-adrenergic agonists::Dobutamine": {
    description: "Dobutamine is primarily an inotrope that improves cardiac contractility and cardiac output. It is most useful in low-output heart failure or shock patterns where pump strength is the problem.",
    sideEffects: ["Tachycardia", "Dysrhythmias", "Angina", "Hypotension or hypertension", "Headache"],
    considerations: "Monitor rhythm, blood pressure, chest pain, urine output, and perfusion; it may worsen tachyarrhythmias or ischemic symptoms."
  },
  "Electrolyte replacement": {
    description: "Potassium chloride and magnesium sulfate restore clinically important electrolyte deficits.",
    sideEffects: ["Hyperkalemia or hypermagnesemia if overcorrected", "IV-site irritation", "Dysrhythmia risk with abnormal levels"],
    considerations: "Verify route, dilution, rate, renal function, and serum trends. IV potassium administration precautions and magnesium toxicity are high-yield."
  },
  "Electrolyte replacement::Potassium chloride": {
    description: "Potassium chloride replaces potassium when hypokalemia threatens muscle and cardiac electrical function. It is high-risk IV because rapid administration can cause lethal dysrhythmias.",
    sideEffects: ["Hyperkalemia", "GI irritation", "IV-site burning", "Dysrhythmias if overcorrected"],
    considerations: "Never give IV push. Verify dilution, pump rate, renal function, urine output, serum potassium, and ECG changes when clinically indicated."
  },
  "Electrolyte replacement::Magnesium sulfate": {
    description: "Magnesium sulfate replaces magnesium and can stabilize neuromuscular and cardiac function. Toxicity is important because excess magnesium depresses reflexes, respirations, and cardiac conduction.",
    sideEffects: ["Flushing", "Hypotension", "Loss of reflexes", "Respiratory depression", "Cardiac depression with toxicity"],
    considerations: "Monitor respirations, reflexes, blood pressure, renal function, serum magnesium when ordered, and have calcium gluconate available when protocol requires."
  },
  "Antacids": {
    description: "Antacids such as Mylanta neutralize existing gastric acid for GERD or ulcer-related symptoms.",
    sideEffects: ["Constipation or diarrhea depending on salt", "Bloating", "Drug absorption interactions", "Electrolyte concerns with overuse"],
    considerations: "Separate from interacting medications when instructed, especially drugs affected by calcium, magnesium, aluminum, or gastric pH."
  },
  "Antacids::Mylanta": {
    description: "Mylanta is a combination antacid that neutralizes stomach acid and often includes aluminum and magnesium components to balance bowel effects. It is used for short-term relief of heartburn or dyspepsia.",
    sideEffects: ["Bloating", "Constipation or diarrhea", "Drug absorption interactions", "Electrolyte issues with overuse"],
    considerations: "Separate from interacting medications and use caution with renal impairment because magnesium or aluminum can accumulate."
  },
  "Antacids::Aluminum hydroxide": {
    description: "Aluminum hydroxide is an antacid that neutralizes gastric acid and tends to constipate. It can also bind phosphate, which matters in renal and electrolyte contexts.",
    sideEffects: ["Constipation", "Nausea", "Low phosphate with excess use", "Drug absorption interactions"],
    considerations: "Monitor constipation, phosphate concerns, renal impairment, and spacing from medications that bind to aluminum."
  },
  "Antacids::Magnesium hydroxide": {
    description: "Magnesium hydroxide neutralizes gastric acid and can also act as an osmotic laxative. Its magnesium content makes renal function important.",
    sideEffects: ["Diarrhea", "Abdominal cramping", "Hypermagnesemia with renal impairment", "Drug absorption interactions"],
    considerations: "Use caution in renal impairment and monitor for diarrhea, dehydration, and magnesium toxicity with heavy use."
  },
  "Antacids::Simethicone": {
    description: "Simethicone is an antiflatulent that helps gas bubbles coalesce so gas is easier to pass. Unlike acid-neutralizing antacids, it is aimed at gas discomfort rather than acid suppression.",
    sideEffects: ["Minimal systemic effects", "Mild GI upset", "Hypersensitivity is rare"],
    considerations: "Use for bloating and gas symptoms, and reassess if pain, vomiting, distention, or GI bleeding signs are present."
  },
  "Histamine 2 receptor antagonists": {
    description: "H2 blockers such as cimetidine reduce gastric acid secretion by blocking histamine-2 receptors.",
    sideEffects: ["Headache", "Dizziness", "GI upset", "Confusion risk in vulnerable patients", "Drug interactions"],
    considerations: "Cimetidine has important interaction potential. Review medication list and monitor acid-suppression response."
  },
  "Proton pump inhibitors": {
    description: "PPIs such as omeprazole suppress gastric acid production by blocking the parietal-cell proton pump.",
    sideEffects: ["Headache", "GI upset", "Diarrhea", "Long-term magnesium or B12 concern", "Infection risk with prolonged acid suppression"],
    considerations: "Monitor long-term magnesium or B12 concerns and reduced absorption of drugs that need acidic gastric pH."
  },
  "Phenothiazine anti-emetics": {
    description: "Promethazine is a phenothiazine antiemetic used for nausea and vomiting control.",
    sideEffects: ["Sedation", "Dizziness", "Anticholinergic effects", "Extrapyramidal symptoms", "Hypotension"],
    considerations: "Assess sedation/fall risk, anticholinergic burden, and safety with other CNS depressants."
  },
  "5-HT3 / serotonin receptor antagonist anti-emetics": {
    description: "Ondansetron blocks 5-HT3 serotonin receptors to reduce nausea and vomiting.",
    sideEffects: ["Headache", "Constipation", "Dizziness", "QT prolongation"],
    considerations: "Assess QT prolongation risk, electrolytes, and interacting QT-prolonging medications when relevant."
  },
  "Laxatives": {
    description: "Psyllium is a bulk-forming laxative that increases stool bulk and supports bowel movement regularity.",
    sideEffects: ["Bloating", "Gas", "Cramping", "Obstruction risk without enough fluid"],
    considerations: "Teach adequate fluid intake and avoid use when bowel obstruction is suspected."
  },
  "Cathartics": {
    description: "Bisacodyl is a stimulant cathartic/laxative that increases bowel activity for constipation.",
    sideEffects: ["Cramping", "Diarrhea", "Dehydration", "Electrolyte imbalance"],
    considerations: "Use short-term as appropriate, assess bowel pattern and hydration, and avoid masking acute abdominal problems."
  },
  "Anti-diarrheal agents": {
    description: "Loperamide slows intestinal motility to reduce diarrhea.",
    sideEffects: ["Constipation", "Abdominal cramping", "Dizziness", "Nausea"],
    considerations: "Do not suppress diarrhea when infectious diarrhea or C. difficile is suspected without provider direction; monitor hydration and electrolytes."
  },
  "Antiplatelets": {
    description: "Aspirin reduces platelet aggregation, which is most relevant to arterial thrombosis and coronary artery disease/ACS prevention.",
    sideEffects: ["Bleeding", "Bruising", "GI irritation", "Black or bloody stools"],
    considerations: "Assess bleeding risk and avoid adding aspirin to anticoagulant therapy unless specifically prescribed."
  },
  "Hemostatics / reversal agents": {
    description: "Thrombin/fibrin products support clot formation, while protamine reverses heparin and vitamin K reverses excessive warfarin effect over time.",
    sideEffects: ["Thrombosis risk if overcorrected", "Hypersensitivity", "Rebound bleeding if source persists"],
    considerations: "Match reversal agent to anticoagulant: protamine for heparin, vitamin K/phytonadione for warfarin. Keep assessing bleeding and labs."
  },
  "Hemostatics / reversal agents::Thrombin/fibrin": {
    description: "Thrombin and fibrin products are topical or procedural hemostatic agents that directly support clot formation at a bleeding site. They are different from systemic anticoagulant reversal.",
    sideEffects: ["Local reaction", "Thrombosis risk if intravascular exposure occurs", "Hypersensitivity"],
    considerations: "Use only by the indicated route and site, avoid intravascular administration, and continue assessing whether bleeding is controlled."
  },
  "Hemostatics / reversal agents::Protamine sulfate": {
    description: "Protamine sulfate reverses heparin by binding it and neutralizing its anticoagulant effect. It is the key reversal agent to link with heparin-related bleeding.",
    sideEffects: ["Hypotension", "Bradycardia", "Dyspnea", "Anaphylactoid reaction", "Bleeding if underdosed or thrombosis if overcorrected"],
    considerations: "Give slowly per protocol, monitor blood pressure and respiratory status, and reassess coagulation and bleeding response."
  },
  "Hemostatics / reversal agents::Vitamin K": {
    description: "Vitamin K promotes hepatic production of vitamin K-dependent clotting factors and reverses excessive warfarin effect over time. It is not immediate clot replacement.",
    sideEffects: ["Injection-site reaction", "Flushing", "Hypersensitivity with IV use", "Reduced warfarin effect"],
    considerations: "Link to warfarin reversal, monitor INR trend, and use route and dose based on urgency and provider protocol."
  },
  "Erythropoietin-stimulating agents": {
    description: "Epoetin stimulates red blood cell production when anemia is related to low erythropoietin or selected chemotherapy contexts.",
    sideEffects: ["Hypertension", "Thrombotic risk", "Headache", "Injection-site reaction"],
    considerations: "Monitor blood pressure, hemoglobin/hematocrit trends, iron status when ordered, and thrombotic symptoms."
  },
  "Antianemics": {
    description: "Ferrous sulfate replaces iron for iron-deficiency anemia and supports hemoglobin production.",
    sideEffects: ["Constipation", "Dark stools", "GI upset", "Nausea"],
    considerations: "Teach adherence, constipation prevention, safe storage, and administration strategies that support absorption."
  },
  "Aminoglycosides": {
    description: "Gentamicin is an aminoglycoside that kills bacteria by disrupting protein synthesis, with emphasis on aerobic gram-negative infections.",
    sideEffects: ["Nephrotoxicity", "Ototoxicity", "Tinnitus or hearing changes", "Vertigo or dizziness"],
    considerations: "Monitor creatinine/BUN, urine output, peak/trough levels when ordered, hearing changes, tinnitus, vertigo, and superinfection. Space from penicillin by 1 hour when both are prescribed."
  },
  "Fluoroquinolones": {
    description: "Ciprofloxacin is a fluoroquinolone that kills bacteria by interfering with bacterial DNA synthesis.",
    sideEffects: ["QT prolongation", "Tendonitis or tendon rupture", "Photosensitivity", "GI upset", "C. difficile superinfection"],
    considerations: "Separate from calcium, magnesium, aluminum, iron, dairy, and antacids when instructed. Monitor tendon pain, QT-risk combinations, photosensitivity, renal function, and severe watery diarrhea."
  },
  "Tetracyclines": {
    description: "Doxycycline is a tetracycline that inhibits bacterial protein synthesis and is generally bacteriostatic.",
    sideEffects: ["Photosensitivity", "GI upset", "Reduced absorption with cations", "Tooth and bone development concerns"],
    considerations: "Separate from dairy, calcium, iron, magnesium, aluminum, and antacids. Avoid use in pregnancy/young children unless specifically indicated because of bone and tooth effects."
  },
  "Macrolides": {
    description: "Erythromycin and azithromycin are macrolides that inhibit bacterial protein synthesis and may be used for selected respiratory infections or when penicillin allergy limits options.",
    sideEffects: ["QT prolongation", "GI upset", "Dysrhythmia risk", "Digoxin toxicity risk", "Increased warfarin effect"],
    considerations: "Review QT-prolonging medications and dysrhythmia history. Monitor for interactions that can increase digoxin toxicity or warfarin bleeding risk."
  },
  "Macrolides::Erythromycin": {
    description: "Erythromycin is a macrolide antibiotic with prominent GI motility effects and interaction potential. It is more likely than azithromycin to cause CYP-mediated drug interactions.",
    sideEffects: ["GI upset", "QT prolongation", "Dysrhythmia risk", "Drug interactions", "Cholestatic hepatitis is rare"],
    considerations: "Review QT risk, warfarin or digoxin interaction concerns, liver symptoms, and tolerance of GI effects."
  },
  "Macrolides::Azithromycin": {
    description: "Azithromycin is a macrolide antibiotic with a long tissue half-life and fewer CYP interactions than erythromycin. It still carries QT prolongation concern.",
    sideEffects: ["GI upset", "QT prolongation", "Headache", "Diarrhea", "Dysrhythmia risk in vulnerable patients"],
    considerations: "Assess QT-risk factors, dysrhythmia history, electrolyte abnormalities, and interactions with other QT-prolonging drugs."
  },
  "Thyroid hormone": {
    description: "Thyroid hormone replacement such as levothyroxine restores deficient thyroid hormone activity in hypothyroidism. Correct dosing improves metabolic function while avoiding iatrogenic hyperthyroidism.",
    sideEffects: ["Palpitations if over-replaced", "Tachycardia", "Insomnia", "Weight loss", "Heat intolerance"],
    considerations: "Take consistently on an empty stomach, separate from calcium/iron, monitor TSH/T4, and use caution with cardiac disease and older adults."
  },
  "Thioamides": {
    description: "Thioamides reduce thyroid hormone synthesis and are used in hyperthyroidism and Graves disease. Their benefits require monitoring because rare agranulocytosis and liver injury can be serious.",
    sideEffects: ["Rash", "GI upset", "Arthralgia", "Agranulocytosis", "Hepatotoxicity"],
    considerations: "Teach patients to report fever or sore throat promptly, monitor thyroid and liver labs when ordered, and review pregnancy-specific agent selection."
  },
  "Thioamides::Methimazole": {
    description: "Methimazole reduces thyroid hormone synthesis and is generally the preferred thioamide for most nonpregnant hyperthyroid patients. It has a longer duration and lower severe liver toxicity concern than PTU.",
    sideEffects: ["Rash", "GI upset", "Agranulocytosis", "Arthralgia", "Liver injury"],
    considerations: "Teach fever or sore throat reporting, monitor thyroid response and liver symptoms, and avoid early pregnancy when PTU is preferred."
  },
  "Thioamides::Propylthiouracil (PTU)": {
    description: "PTU reduces thyroid hormone synthesis and also decreases peripheral conversion of T4 to T3. It is especially important for first-trimester pregnancy or thyroid storm contexts despite higher liver toxicity concern.",
    sideEffects: ["Agranulocytosis", "Hepatotoxicity", "Rash", "GI upset", "Arthralgia"],
    considerations: "Monitor liver symptoms closely, teach fever or sore throat reporting, and connect PTU to first-trimester pregnancy and thyroid storm use."
  },
  "Insulins": {
    description: "Insulin replaces or supplements endogenous insulin to move glucose into cells and suppress ketone production. It is required for type 1 diabetes and may be needed in type 2 diabetes, DKA, or HHNS management.",
    sideEffects: ["Hypoglycemia", "Weight gain", "Injection-site reactions", "Lipodystrophy", "Hypokalemia"],
    considerations: "Match insulin timing with meals and glucose checks, rotate sites, monitor potassium in IV insulin therapy, and teach hypoglycemia recognition and treatment."
  },
  "Insulins::Rapid acting": {
    description: "Rapid-acting insulin is meal and correction insulin. It starts working quickly, peaks soon after dosing, and is timed closely with food intake to cover the glucose rise from a meal.",
    sideEffects: ["Hypoglycemia", "Weight gain", "Injection-site reactions", "Lipodystrophy", "Hypokalemia"],
    considerations: "Give only when the meal is available or per correction-scale directions. Monitor for early post-dose hypoglycemia, missed meals, exercise changes, and accurate carbohydrate/meal timing."
  },
  "Insulins::Short acting": {
    description: "Short-acting regular insulin has a slower onset and longer peak than rapid-acting insulin. It can be used before meals and is also the insulin type commonly used IV in acute settings such as DKA protocols.",
    sideEffects: ["Hypoglycemia", "Weight gain", "Injection-site reactions", "Lipodystrophy", "Hypokalemia with IV therapy"],
    considerations: "Coordinate with meal timing and glucose checks. For IV insulin, monitor potassium closely because insulin shifts potassium into cells."
  },
  "Insulins::Intermediate acting": {
    description: "Intermediate-acting insulin, such as NPH, provides basal coverage with a distinct peak. Because it peaks, it has more timed hypoglycemia risk than flatter long-acting basal insulins.",
    sideEffects: ["Hypoglycemia during peak effect", "Weight gain", "Injection-site reactions", "Lipodystrophy"],
    considerations: "Know the expected peak window, ensure consistent meals/snacks as ordered, and teach cloudy insulin resuspension technique when applicable."
  },
  "Insulins::Long acting": {
    description: "Long-acting insulin provides basal insulin coverage over about a day with less pronounced peak activity. It helps control fasting and between-meal glucose but does not replace meal insulin when prandial coverage is needed.",
    sideEffects: ["Hypoglycemia", "Weight gain", "Injection-site reactions", "Lipodystrophy"],
    considerations: "Give consistently at the prescribed time, do not use for rapid correction, and avoid mixing most long-acting basal insulins with other insulins unless specifically directed."
  },
  "Insulins::Ultra-long acting": {
    description: "Ultra-long-acting insulin provides very prolonged basal coverage with a flatter action profile. It is designed for steady background insulin rather than meal coverage or emergency glucose correction.",
    sideEffects: ["Hypoglycemia", "Weight gain", "Injection-site reactions", "Lipodystrophy"],
    considerations: "Use consistently as prescribed, monitor fasting glucose trends, and avoid using it to treat acute hyperglycemia or DKA."
  },
  "Insulins::Premixed": {
    description: "Premixed insulin combines intermediate-acting insulin with rapid- or short-acting insulin in a fixed ratio. It simplifies dosing but reduces flexibility because basal and meal coverage are tied together.",
    sideEffects: ["Hypoglycemia", "Weight gain", "Injection-site reactions", "Lipodystrophy"],
    considerations: "Timing varies by product, so verify the exact premix instructions. Keep meals consistent and recognize that changing one component of coverage requires changing the whole mix."
  },
  "Biguanides": {
    description: "Biguanides such as metformin reduce hepatic glucose production and improve insulin sensitivity. They are commonly used in type 2 diabetes and have low hypoglycemia risk when used alone.",
    sideEffects: ["Diarrhea", "Nausea", "Abdominal discomfort", "Metallic taste", "Rare lactic acidosis"],
    considerations: "Monitor renal function, hold around iodinated contrast or acute illness when ordered, avoid with severe renal impairment, and take with food to reduce GI effects."
  },
  "SGLT2 inhibitors": {
    description: "SGLT2 inhibitors lower glucose by increasing urinary glucose excretion. They also affect fluid balance, so dehydration and genital/urinary infection risks are important teaching points.",
    sideEffects: ["Genital yeast infections", "Urinary tract infections", "Polyuria", "Dehydration", "Ketoacidosis risk"],
    considerations: "Monitor renal function, hydration, sick-day holds when directed, perioperative holds, genital hygiene, and DKA symptoms even when glucose is not extremely high."
  },
  "GLP receptor agonists": {
    description: "GLP-1 receptor agonists increase glucose-dependent insulin secretion, reduce glucagon, slow gastric emptying, and increase satiety. They are used in type 2 diabetes and may support weight reduction.",
    sideEffects: ["Nausea", "Vomiting", "Diarrhea", "Constipation", "Decreased appetite"],
    considerations: "Assess pancreatitis symptoms, gallbladder history, dehydration from GI effects, injection technique if injectable, and medullary thyroid carcinoma/MEN2 history for agents with that warning."
  },
  "Estrogen and progestin hormones": {
    description: "Estrogen and progestin hormones regulate reproductive cycling and can prevent pregnancy by suppressing ovulation, thickening cervical mucus, and changing the endometrium. They can also help regulate bleeding and dysmenorrhea in selected patients.",
    sideEffects: ["Nausea", "Breast tenderness", "Breakthrough bleeding", "Headache", "Mood changes"],
    considerations: "Screen for pregnancy, thromboembolic disease, migraine with aura, uncontrolled hypertension, smoking over age 35, liver disease, and interacting enzyme-inducing drugs."
  },
  "Estrogen and progestin hormones::Estradiol": {
    description: "Estradiol is an estrogen hormone that supports endometrial and reproductive hormone effects. In contraception combinations, estrogen helps suppress ovulation but also contributes to clotting-risk concerns.",
    sideEffects: ["Nausea", "Breast tenderness", "Headache", "Fluid retention", "Thromboembolic risk"],
    considerations: "Screen for clot history, migraine with aura, smoking over age 35, uncontrolled hypertension, liver disease, and pregnancy."
  },
  "Estrogen and progestin hormones::Progestin": {
    description: "Progestin thickens cervical mucus, alters the endometrium, and can suppress ovulation depending on formulation. It is central to contraception and cycle-control effects.",
    sideEffects: ["Irregular bleeding", "Mood changes", "Breast tenderness", "Bloating", "Acne"],
    considerations: "Assess pregnancy status, bleeding pattern, adherence timing, interacting medications, and whether estrogen is contraindicated."
  },
  "Testosterone": {
    description: "Testosterone therapy provides androgen effects when clinically indicated. It can affect reproductive tissue, skin, mood, red blood cell production, and cardiovascular risk factors.",
    sideEffects: ["Acne", "Fluid retention", "Mood changes", "Polycythemia", "Sleep apnea worsening"],
    considerations: "Monitor hematocrit, cardiovascular risk, liver history, prostate-related assessment when relevant, pregnancy exposure risk, and safe handling of topical formulations."
  },
  "Anticoagulants": {
    description: "Anticoagulants reduce fibrin clot formation by interfering with the coagulation cascade. They are linked to DVT, atrial fibrillation/flutter stroke prevention, and other thrombotic conditions.",
    sideEffects: ["Bleeding", "Bruising", "Hematuria", "Black or bloody stools", "Anemia from occult blood loss"],
    considerations: "Review renal/hepatic function, pregnancy status, procedure timing, interactions, adherence, reversal options, and required monitoring such as INR for warfarin."
  },
  "Anticoagulants::Warfarin": {
    description: "Warfarin is an oral vitamin K antagonist that reduces synthesis of vitamin K-dependent clotting factors. It is slow acting and requires INR monitoring to balance clot prevention with bleeding risk.",
    sideEffects: ["Bleeding", "Bruising", "Hematuria", "Black or bloody stools", "Skin necrosis is rare"],
    considerations: "Monitor INR, diet consistency with vitamin K, interactions, pregnancy contraindication, bleeding signs, and vitamin K reversal when ordered."
  },
  "Anticoagulants::Heparin": {
    description: "Heparin enhances antithrombin activity to inhibit clotting factors quickly. It is useful for acute anticoagulation and is monitored differently than warfarin.",
    sideEffects: ["Bleeding", "Heparin-induced thrombocytopenia", "Bruising", "Injection-site irritation", "Osteoporosis with long-term use"],
    considerations: "Monitor aPTT or anti-Xa per protocol, platelet count for HIT, bleeding, IV compatibility, and protamine sulfate reversal when ordered."
  },
  "Direct factor Xa inhibitors": {
    description: "Direct factor Xa inhibitors reduce thrombin generation by blocking factor Xa. They are oral anticoagulants used for selected venous thromboembolism and stroke-prevention indications.",
    sideEffects: ["Bleeding", "Bruising", "GI upset", "Anemia", "Wound bleeding"],
    considerations: "Monitor renal function, adherence, dose timing, interacting P-gp/CYP3A4 drugs, procedure holds, and availability of reversal strategies."
  },
  "Thrombolytics": {
    description: "Thrombolytics break down existing clots by promoting fibrinolysis. They can restore perfusion in selected emergencies but carry major bleeding risk.",
    sideEffects: ["Major bleeding", "Intracranial hemorrhage", "Hypotension", "Reperfusion dysrhythmias", "Allergic reaction with some agents"],
    considerations: "Screen contraindications carefully, including active bleeding, recent surgery/trauma, prior intracranial hemorrhage, severe uncontrolled hypertension, and timing from symptom onset."
  }
};

Object.assign(authoredMedicationDetails, {
  "Penicillins": {
    description: "Penicillins such as amoxicillin inhibit bacterial cell-wall synthesis and are bactericidal. The Week 8 slides emphasize allergy screening, culture-first logic, renal monitoring, and GI or superinfection effects.",
    sideEffects: ["Abdominal pain", "Nausea/vomiting/diarrhea", "Rash or hypersensitivity", "Superinfection", "Nephropathy"],
    considerations: "Assess penicillin and cephalosporin allergy history, draw cultures before antibiotics when ordered, monitor BUN/creatinine and electrolytes, and teach full-course adherence."
  },
  "Cephalosporins": {
    description: "Cephalosporins such as cefazolin bind bacterial cell-wall proteins and inhibit cell-wall synthesis. Course slides distinguish generations by gram-positive and gram-negative coverage.",
    sideEffects: ["Nausea/vomiting/diarrhea", "Hypersensitivity or SJS", "Superinfection", "Headache or dizziness", "Phlebitis"],
    considerations: "Assess cephalosporin and penicillin allergy history, monitor renal function, give oral forms with food if directed for GI upset, and watch for anticoagulant effect increase."
  },
  "Carbapenems": {
    description: "Carbapenems are broad-spectrum beta-lactams used for severe infections and multidrug-resistant organisms. They inhibit bacterial cell-wall synthesis and are bactericidal.",
    sideEffects: ["Hypersensitivity", "Nausea/vomiting/diarrhea", "Superinfection", "Headache or dizziness", "Altered mental status or seizures"],
    considerations: "Assess culture/sensitivity data, renal function, CNS history, seizure risk, hypersensitivity, and GI or C. difficile symptoms."
  },
  "Sulfonamides": {
    description: "Trimethoprim-sulfamethoxazole inhibits folic-acid production and is bacteriostatic. The case study links it to severe UTI therapy and broad safety screening before administration.",
    sideEffects: ["GI upset", "Photosensitivity", "Rash or SJS", "Hyperkalemia", "Renal damage or crystalluria", "Blood dyscrasias"],
    considerations: "Assess renal/liver function, hydration, potassium risk, G6PD deficiency, pregnancy/lactation, age under 2 months, sulfa-related allergy history, rash, and superinfection."
  },
  "Glycopeptide antibiotics": {
    description: "Vancomycin inhibits bacterial cell-wall synthesis and is active against gram-positive bacteria. Course slides link it to MRSA, C. difficile by oral route, and VRE context.",
    sideEffects: ["Nephrotoxicity", "Ototoxicity", "Tinnitus or hearing loss", "Vertigo", "Phlebitis", "Vancomycin flushing syndrome"],
    considerations: "Monitor peak/trough when ordered, BUN/creatinine, hearing/vestibular symptoms, IV site, and infuse IV doses over at least 1 hour."
  },
  "Nitroimidazoles": {
    description: "Metronidazole is listed in the infection guide and appears in C. difficile treatment context. It is used for selected anaerobic and protozoal infections depending on the order.",
    sideEffects: ["GI upset", "Metallic taste", "Headache", "Dizziness", "Peripheral neuropathy with prolonged therapy"],
    considerations: "Assess hepatic considerations, neurologic symptoms, alcohol use teaching, GI tolerance, and infection response."
  },
  "Antituberculars": {
    description: "Isoniazid is used for latent TB and in combination therapy for active TB. It inhibits mycobacterial cell-wall formation and growth of dormant cells.",
    sideEffects: ["Hepatotoxicity", "Peripheral neuropathy", "Nausea/vomiting", "Abdominal pain", "Anorexia"],
    considerations: "Assess baseline liver enzymes, alcohol use, acetaminophen use, seizure disorder, renal impairment, neuropathy symptoms, and teach empty-stomach administration unless directed otherwise."
  },
  "Antivirals": {
    description: "Acyclovir inhibits viral DNA polymerase and DNA replication for herpes simplex and varicella-zoster infections.",
    sideEffects: ["Renal toxicity risk", "Nausea or diarrhea", "Headache", "Seizure risk with interacting agents", "IV site irritation"],
    considerations: "Promote hydration, monitor renal/liver function, infuse IV doses over 1 hour, and use hand hygiene/gloves for topical administration."
  },
  "Antifungals": {
    description: "Antifungals treat mycoses by targeting fungal structures that differ from bacteria. Course notes emphasize topical therapy when appropriate and higher toxicity with systemic therapy.",
    sideEffects: ["Local irritation", "GI upset", "Hepatic toxicity with some systemic agents", "Infusion or renal toxicity concern with amphotericin B"],
    considerations: "Match route to infection depth, teach nystatin oral-suspension technique, and monitor systemic therapy toxicity closely."
  },
  "Antimalarials": {
    description: "Chloroquine phosphate is used for strain-sensitive malaria prophylaxis or acute infection. Travel region and resistance patterns drive selection.",
    sideEffects: ["GI upset", "Headache", "Visual or retinal changes", "Pruritus", "Dizziness"],
    considerations: "Check travel destination resistance, retinal disease, visual changes, psoriasis, alcohol use disorder, pregnancy/lactation, and adherence timing."
  },
  "Salicylates": {
    description: "Aspirin has analgesic, antipyretic, anti-inflammatory, and antiplatelet effects. Course placement in the pain section means the intended use matters for dose and monitoring.",
    sideEffects: ["GI irritation", "Bleeding", "Tinnitus at toxic levels", "Bronchospasm in sensitive clients"],
    considerations: "Assess bleeding risk, GI ulcer history, allergy/asthma sensitivity, renal function, and anticoagulant or antiplatelet combinations."
  },
  "Non-narcotic analgesic antipyretics": {
    description: "Acetaminophen reduces pain and fever without meaningful peripheral anti-inflammatory effect.",
    sideEffects: ["Hepatotoxicity with excess dose", "Nausea", "Rash is uncommon but possible"],
    considerations: "Count total daily acetaminophen across combination products and assess liver disease or alcohol use."
  },
  "Nonsteroidal anti-inflammatory drugs": {
    description: "Ibuprofen reduces prostaglandin-mediated pain, fever, and inflammation through COX inhibition.",
    sideEffects: ["GI irritation or bleeding", "Renal function worsening", "Fluid retention", "Increased blood pressure", "Bleeding risk"],
    considerations: "Assess kidney function, GI bleed risk, anticoagulants, blood pressure, heart failure/fluid status, and pregnancy considerations."
  },
  "Opioid analgesics": {
    description: "Morphine activates opioid receptors to change pain perception and response, but it also depresses CNS and respiratory function.",
    sideEffects: ["Respiratory depression", "Sedation", "Constipation", "Hypotension", "Nausea/vomiting", "Dependence risk"],
    considerations: "Assess pain, sedation, respiratory rate, oxygenation, blood pressure, bowel function, fall risk, and overdose response."
  },
  "Opioid antagonists": {
    description: "Naloxone competitively blocks opioid receptors and can reverse opioid-induced respiratory and CNS depression.",
    sideEffects: ["Acute withdrawal", "Pain return", "Tachycardia", "Nausea/vomiting"],
    considerations: "Support airway and breathing, repeat doses as needed, and monitor for recurrent respiratory depression after naloxone wears off."
  },
  "Gamma-aminobutyric acid structural analogs": {
    description: "Gabapentin modulates neuronal excitability and is course-linked to neurogenic pain and seizure-related therapy.",
    sideEffects: ["Dizziness", "Drowsiness", "Ataxia", "Fatigue", "Peripheral edema"],
    considerations: "Monitor falls, sedation, renal dosing, mood changes, and additive CNS depressants."
  },
  "Hydantoins": {
    description: "Phenytoin stabilizes neuronal firing for seizure control and has important interaction and toxicity monitoring considerations.",
    sideEffects: ["Nystagmus or ataxia", "Drowsiness", "Gingival hyperplasia", "Rash", "Hepatic effects"],
    considerations: "Monitor seizure control, levels when ordered, oral hygiene, rash, toxicity symptoms, liver function, pregnancy considerations, and interactions."
  },
  "Benzodiazepines": {
    description: "Diazepam and alprazolam enhance GABA activity, reducing neuronal activity. Alprazolam in the mental health deck is used short-term PRN for panic attacks.",
    sideEffects: ["Drowsiness", "Dizziness", "Lethargy", "Confusion", "Blurred vision", "Dependence", "Respiratory depression with depressants"],
    considerations: "Avoid alcohol, opioids, sleep aids, diphenhydramine, and other CNS depressants. Assess respiratory disease, liver disease, substance-use history, older-adult safety, glaucoma, and alertness precautions."
  },
  "Dopaminergic antiparkinson agents": {
    description: "Levodopa-carbidopa supports dopamine signaling for Parkinson disease motor symptoms.",
    sideEffects: ["Nausea", "Orthostatic hypotension", "Dyskinesias", "Hallucinations or confusion", "Wearing-off fluctuations"],
    considerations: "Assess motor response, timing with doses, orthostatic blood pressure, dyskinesias, mental status, and swallowing/fall safety."
  },
  "Cholinesterase inhibitors": {
    description: "Donepezil increases acetylcholine signaling to support cognitive symptoms in Alzheimer disease and dementia.",
    sideEffects: ["Nausea/diarrhea", "Bradycardia", "Syncope", "Insomnia", "Weight loss"],
    considerations: "Monitor pulse, syncope/falls, GI tolerance, weight, sleep disturbance, and caregiver expectations."
  },
  "Selective serotonin reuptake inhibitors": {
    description: "Fluoxetine blocks serotonin reuptake. The mental health deck frames SSRIs as first-line antidepressants and includes use in depression, OCD, PMDD, and anxiety contexts.",
    sideEffects: ["GI upset", "Drowsiness or nervousness", "Sexual dysfunction", "Bleeding risk", "QT prolongation", "Serotonin syndrome", "Suicidal thoughts warning"],
    considerations: "Teach delayed onset, do not stop abruptly, avoid St. John's wort and MAOIs, monitor young adults for suicidality, and review serotonin syndrome, QT, bleeding, and alcohol/CNS depressant risks."
  }
});

const medicationAdverseEffectFallbacks = [
  [/penicillin/i, ["GI upset", "Rash or hypersensitivity", "Superinfection", "Renal monitoring concerns"]],
  [/cephalosporin/i, ["GI upset", "Hypersensitivity or SJS", "Superinfection", "Phlebitis"]],
  [/carbapenem/i, ["GI upset", "Hypersensitivity", "Superinfection", "Seizure risk"]],
  [/sulfonamide/i, ["GI upset", "Photosensitivity", "Rash or SJS", "Hyperkalemia", "Renal damage"]],
  [/glycopeptide|vancomycin/i, ["Nephrotoxicity", "Ototoxicity", "Phlebitis", "Vancomycin flushing syndrome"]],
  [/nitroimidazole|metronidazole/i, ["GI upset", "Metallic taste", "Headache", "Peripheral neuropathy with prolonged therapy"]],
  [/antitubercular|isoniazid/i, ["Hepatotoxicity", "Peripheral neuropathy", "GI upset", "Seizure risk in susceptible clients"]],
  [/antiviral|acyclovir/i, ["Renal toxicity risk", "GI upset", "Headache", "Seizure risk with interacting agents"]],
  [/antifungal|nystatin|amphotericin/i, ["Local irritation", "GI upset", "Hepatic or renal toxicity depending on agent", "Infusion reaction with systemic therapy"]],
  [/antimalarial|chloroquine/i, ["GI upset", "Headache", "Visual or retinal changes", "Pruritus"]],
  [/salicylate|aspirin/i, ["GI irritation", "Bleeding", "Tinnitus at toxic levels", "Bronchospasm in sensitive clients"]],
  [/acetaminophen|non-narcotic analgesic/i, ["Hepatotoxicity with excess dose", "Nausea", "Rash is uncommon but possible"]],
  [/nonsteroidal|NSAID|ibuprofen/i, ["GI irritation or bleeding", "Renal function worsening", "Fluid retention", "Increased blood pressure"]],
  [/opioid analgesic|morphine/i, ["Respiratory depression", "Sedation", "Constipation", "Hypotension", "Nausea/vomiting"]],
  [/opioid antagonist|naloxone/i, ["Acute withdrawal", "Pain return", "Tachycardia", "Nausea/vomiting"]],
  [/gamma-aminobutyric|gabapentin/i, ["Dizziness", "Drowsiness", "Ataxia", "Fatigue", "Peripheral edema"]],
  [/hydantoin|phenytoin/i, ["Nystagmus or ataxia", "Drowsiness", "Gingival hyperplasia", "Rash"]],
  [/benzodiazepine|alprazolam|diazepam/i, ["Drowsiness", "Dizziness", "Confusion", "Respiratory depression with depressants", "Dependence"]],
  [/dopaminergic|levodopa/i, ["Nausea", "Orthostatic hypotension", "Dyskinesias", "Hallucinations or confusion"]],
  [/cholinesterase|donepezil/i, ["Nausea/diarrhea", "Bradycardia", "Syncope", "Insomnia", "Weight loss"]],
  [/selective serotonin|SSRI|fluoxetine/i, ["GI upset", "Sexual dysfunction", "Serotonin syndrome", "Bleeding risk", "Suicidal thoughts warning"]],
  [/aminoglycoside/i, ["Nephrotoxicity", "Ototoxicity", "Tinnitus or hearing changes", "Vertigo or dizziness"]],
  [/fluoroquinolone/i, ["QT prolongation", "Tendonitis or tendon rupture", "Photosensitivity", "C. difficile superinfection"]],
  [/tetracycline/i, ["Photosensitivity", "GI upset", "Reduced absorption with calcium/iron/magnesium/aluminum", "Tooth and bone development concerns"]],
  [/macrolide/i, ["QT prolongation", "GI upset", "Increased digoxin levels", "Increased warfarin effect or bleeding risk"]],
  [/beta adrenergic blockers/i, ["Bradycardia", "Hypotension", "Fatigue", "Bronchospasm risk with nonselective agents"]],
  [/diuretic|thiazide|aldosterone/i, ["Dehydration", "Hypotension", "Electrolyte imbalance", "Dizziness"]],
  [/vasopressor|adrenergic/i, ["Tachycardia", "Hypertension", "Dysrhythmias", "Peripheral ischemia"]],
  [/antacid|histamine 2|proton pump/i, ["Headache", "GI upset", "Diarrhea or constipation", "Drug absorption interactions"]],
  [/anti-emetic|5-HT3|phenothiazine/i, ["Sedation or dizziness", "Constipation", "QT prolongation", "Extrapyramidal symptoms with dopamine blockade"]],
  [/laxative|cathartic/i, ["Cramping", "Diarrhea", "Dehydration", "Electrolyte imbalance"]],
  [/anti-diarrheal/i, ["Constipation", "Abdominal cramping", "Dizziness", "Nausea"]],
  [/antiplatelet|hemostatic|reversal/i, ["Bleeding or bruising", "GI irritation", "Thrombosis risk with reversal therapy"]],
  [/erythropoietin|antianemic/i, ["GI upset", "Hypertension with ESAs", "Constipation with iron", "Thrombotic risk with ESAs"]],
  [/ACE|angiotensin|neprilysin/i, ["Hypotension", "Dizziness", "Hyperkalemia", "Renal function changes", "Angioedema risk"]],
  [/calcium channel/i, ["Hypotension", "Dizziness", "Peripheral edema", "Bradycardia with diltiazem"]],
  [/nitrate/i, ["Headache", "Hypotension", "Dizziness", "Flushing"]],
  [/potassium channel/i, ["Bradycardia", "Hypotension", "Pulmonary toxicity", "Thyroid dysfunction"]],
  [/HMG|cholesterol/i, ["Muscle aches", "GI upset", "Liver enzyme elevation", "Headache"]],
  [/T and B|anti-metabolite|monoclonal/i, ["Infection risk", "GI upset", "Bone marrow suppression", "Injection or infusion reaction"]]
];

function getConditionDetails(name, source) {
  if (authoredConditionDetails[name]) return authoredConditionDetails[name];
  const systems = source?.relevantSystems?.slice(0, 4).join(", ");
  const drugClasses = source?.drugClasses?.slice(0, 3).join(", ");
  return {
    description: cleanDisplayText(source?.mechanism, `${name} involves ${systems || "the affected body system"}. Medication links focus on ${drugClasses || "treating the cause, reducing symptoms, and preventing complications"}.`),
    sideEffects: cleanList(source?.sideEffects, defaultConditionSymptoms(name)),
    considerations: systems
      ? `Assess the patient presentation, trend relevant labs and vital signs, and connect medication choice to ${systems}.`
      : "Assess severity, likely cause, relevant labs and vital signs, medication risks, and signs that require escalation."
  };
}

function getMedicationDetails(medClass, drug) {
  const drugSpecificKey = `${medClass.name}::${drug}`;
  if (authoredMedicationDetails[drugSpecificKey]) return authoredMedicationDetails[drugSpecificKey];
  if (authoredMedicationDetails[drug]) return authoredMedicationDetails[drug];
  const graphDetails = graphNodeDetails[graphSlug(drug)];
  if (graphDetails) return graphDetails;
  if (authoredMedicationDetails[medClass.name]) return authoredMedicationDetails[medClass.name];
  return {
    description: cleanDisplayText(medClass.mechanism, `${medClass.name} is linked to ${medClass.conditions.join(", ")}. Focus on how the class changes physiology, what patient findings should improve, and what adverse effects need monitoring.`),
    sideEffects: medicationAdverseEffects(medClass.name),
    considerations: cleanDisplayText(medClass.considerations, "Check indication, baseline vital signs and labs, contraindications, major interactions, and patient teaching points before administration.")
  };
}

function medicationAdverseEffects(className) {
  const match = medicationAdverseEffectFallbacks.find(([pattern]) => pattern.test(className));
  return match?.[1] ?? ["GI upset", "Dizziness", "Hypersensitivity reaction", "Medication-specific toxicity"];
}

function defaultConditionSymptoms(name) {
  if (/heart failure|hypervolemia/i.test(name)) return ["Dyspnea", "Edema", "Fatigue", "Weight gain from fluid retention"];
  if (/hypovolemia|shock/i.test(name)) return ["Hypotension", "Tachycardia", "Dizziness", "Low urine output"];
  if (/clot|throm|fibrillation|flutter/i.test(name)) return ["Pain or swelling", "Reduced perfusion", "Shortness of breath if embolic", "Stroke symptoms if cerebral"];
  if (/GERD|ulcer|nausea|vomiting|constipation|diarrhea/i.test(name)) return ["GI discomfort", "Nausea or bowel pattern changes", "Fluid or electrolyte loss when severe"];
  if (/anemia|leukemia|lymphoma/i.test(name)) return ["Fatigue", "Pallor", "Shortness of breath", "Infection or bleeding risk"];
  if (/asthma|COPD|hypersensitivity/i.test(name)) return ["Wheezing", "Dyspnea", "Cough", "Chest tightness"];
  if (/hypertension/i.test(name)) return ["Often asymptomatic", "Headache", "Vision changes", "End-organ damage if uncontrolled"];
  if (/angina|coronary|atherosclerosis|acute coronary/i.test(name)) return ["Chest discomfort", "Shortness of breath", "Diaphoresis", "Nausea"];
  return ["Condition-specific symptoms", "Functional change in the affected system", "Complications if untreated"];
}

function cleanList(items, fallback) {
  const sourceReferencePattern = /guide|deck|slides?|extracted|not listed|not specified|not fully specified|not enumerated|\bcourse\b|quiz|materials?|asks|requested|flagged|emphasized/i;
  const cleaned = (items ?? [])
    .map((item) => cleanDisplayText(item, ""))
    .filter((item) => item && !sourceReferencePattern.test(item));
  return cleaned.length ? cleaned : fallback;
}

function cleanDisplayText(text, fallback) {
  const value = String(text ?? "").trim();
  const sourceReferencePattern = /guide|deck|slides?|extracted|not listed|not specified|not fully specified|not enumerated|\bcourse\b|quiz|materials?|asks|requested|flagged|emphasized/i;
  if (!value || /not listed|not fully specified|not specified in (the )?(extracted )?(study-)?guide text/i.test(value)) return fallback;
  const filtered = value
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => !sourceReferencePattern.test(sentence))
    .join(" ")
    .trim();
  const displayValue = filtered || (sourceReferencePattern.test(value) ? fallback : value);
  return displayValue
    .replace(/The [^.]*guide asks (students )?(to )?/gi, "")
    .replace(/The [^.]*guide includes /gi, "")
    .replace(/The [^.]*guide covers /gi, "")
    .replace(/[A-Z][^.]*guide lists /g, "")
    .replace(/[A-Z][^.]*guide names /g, "")
    .replace(/[A-Z][^.]*guide explicitly (calls out|gives) /g, "")
    .replace(/[A-Z][^.]*guide asks for /g, "")
    .replace(/Course notes mention /g, "")
    .replace(/Course slides (flag|state|emphasize|describe) /g, "")
    .replace(/The slides (flag|state|emphasize|describe) /g, "")
    .replace(/The [^.]*deck (describes|lists|emphasizes|states) /gi, "")
    .replace(/The Week 3 [^.]*slides (describe|list|emphasize|state) /gi, "")
    .replace(/Study guides flag /g, "")
    .replace(/Study guide /g, "")
    .replace(/Course guide /g, "")
    .replace(/available course materials/g, "medication-specific details")
    .replace(/extracted study-guide text/g, "medication-specific details")
    .replace(/extracted guide/g, "medication-specific details")
    .replace(/\s+/g, " ")
    .trim();
}

let graphResizeObserver;
let graphSlides = [];
const MAX_RELATED_SLIDES = 4;
const weekGraphs = buildWeekGraphs();
let activeWeek = 1;
let activeGraph = weekGraphs.get(activeWeek);
let selectedGraphNodeId = activeGraph.defaultNodeId;

window.NURS304MedMap = {
  medMapData,
  weekGraphs,
  WEEK_TOPICS,
  getMedicationDetails,
  getConditionDetails,
  formatWeekTabLabel
};

if (document.getElementById("medGraph") && document.getElementById("graphDetails")) {
  renderWeekSelect();
  renderMedGraph(activeGraph);
  loadGraphSlides();
}

async function loadGraphSlides() {
  try {
    const response = await fetch("data/slides.json");
    const slides = await response.json();
    graphSlides = slides
      .sort((a, b) => (a.week - b.week) || a.deckId.localeCompare(b.deckId) || a.slideNumber - b.slideNumber);
    const container = document.getElementById("medGraph");
    const details = document.getElementById("graphDetails");
    const nodeById = new Map(activeGraph.nodes.map((node) => [node.id, node]));
    if (container && details) {
      selectNode(selectedGraphNodeId, activeGraph, nodeById, container, details);
    }
  } catch {
    graphSlides = [];
  }
}

function renderWeekSelect() {
  const selects = document.querySelectorAll(".week-select");
  if (!selects.length) return;
  const options = [...weekGraphs.keys()].sort((a, b) => a - b).map((week) => {
    const label = formatWeekTabLabel(week);
    return `
    <option value="${week}"${week === activeWeek ? " selected" : ""}>${escapeHtml(label)}</option>
  `;
  }).join("");
  selects.forEach((select) => {
    select.innerHTML = options;
    select.value = String(activeWeek);
    select.onchange = () => {
      const week = Number(select.value);
      if (week === activeWeek) return;
      activeWeek = week;
      activeGraph = weekGraphs.get(activeWeek);
      selectedGraphNodeId = activeGraph.defaultNodeId;
      renderWeekSelect();
      renderMedGraph(activeGraph);
    };
  });
}

function formatWeekTabLabel(week) {
  const topic = WEEK_TOPICS.get(week);
  return topic ? `W${week} · ${topic}` : `W${week}`;
}

function renderMedGraph(graph) {
  const container = document.getElementById("medGraph");
  const details = document.getElementById("graphDetails");
  const nodeById = new Map(graph.nodes.map((node) => [node.id, node]));
  const drugGroups = graph.groups.filter((group) => group.type === "drug");
  const conditionGroups = graph.groups.filter((group) => group.type === "condition");

  container.innerHTML = `
    <section class="link-map-column med-column" aria-label="Medication classes">
      ${drugGroups.map((group) => `
        <article class="link-card med-class-card">
          <h3>${escapeHtml(group.label)}</h3>
          <div class="med-list">
            ${group.notes.map((id) => {
              const node = nodeById.get(id);
              return `<button class="graph-anchor" type="button" data-node-id="${escapeHtml(id)}">${escapeHtml(node?.label ?? id)}</button>`;
            }).join("")}
          </div>
        </article>
      `).join("")}
    </section>
    <svg class="connector-layer" aria-hidden="true"></svg>
    <section class="link-map-column condition-column" aria-label="Conditions">
      ${conditionGroups.map((group) => {
        const conditionId = group.id.replace(/-group$/, "");
        const node = nodeById.get(conditionId);
        return `
          <article class="link-card condition-card" data-condition-card="${escapeHtml(conditionId)}">
            <button class="graph-anchor" type="button" data-node-id="${escapeHtml(conditionId)}">${escapeHtml(group.label)}</button>
            <p>${escapeHtml((group.notes ?? []).join(" "))}</p>
          </article>
        `;
      }).join("")}
    </section>
  `;

  container.querySelectorAll(".graph-anchor").forEach((anchor) => {
    anchor.addEventListener("click", () => selectNode(anchor.dataset.nodeId, graph, nodeById, container, details));
  });

  if (graphResizeObserver) graphResizeObserver.disconnect();
  graphResizeObserver = new ResizeObserver(() => syncGraphLayout(graph, container));
  graphResizeObserver.observe(container);
  container.querySelectorAll(".link-card").forEach((card) => graphResizeObserver.observe(card));

  requestAnimationFrame(() => {
    syncGraphLayout(graph, container);
    selectNode(selectedGraphNodeId, graph, nodeById, container, details);
  });
}

function syncGraphLayout(graph, container) {
  positionConditionCards(graph, container);
  requestAnimationFrame(() => drawGraphConnectors(graph, container));
}

function positionConditionCards(graph, container) {
  container.querySelectorAll(".condition-card").forEach((card) => {
    card.style.setProperty("--condition-offset", "0px");
  });

  const containerRect = container.getBoundingClientRect();
  const gap = 8;
  const placements = graph.groups.filter((group) => group.type === "condition").map((group) => {
    const conditionId = group.id.replace(/-group$/, "");
    const linkedMedIds = graph.edges.filter(([, to]) => to === conditionId).map(([from]) => from);
    const linkedAnchors = linkedMedIds
      .map((id) => container.querySelector(`.med-column [data-node-id="${id}"]`))
      .filter(Boolean);
    const conditionCard = container.querySelector(`[data-condition-card="${conditionId}"]`);

    if (!linkedAnchors.length || !conditionCard) return null;

    const targetY = linkedAnchors.reduce((sum, anchor) => {
      const rect = anchor.getBoundingClientRect();
      return sum + rect.top + rect.height / 2 - containerRect.top;
    }, 0) / linkedAnchors.length;
    const conditionRect = conditionCard.getBoundingClientRect();
    const baseTop = conditionRect.top - containerRect.top;
    const conditionY = conditionRect.top + conditionRect.height / 2 - containerRect.top;
    const offset = Math.max(-26, Math.min(26, targetY - conditionY));
    return {
      card: conditionCard,
      baseTop,
      height: conditionRect.height,
      desiredTop: baseTop + offset
    };
  }).filter(Boolean);

  placements.sort((a, b) => a.desiredTop - b.desiredTop);
  let previousBottom = 0;
  placements.forEach((placement) => {
    const top = Math.max(placement.desiredTop, previousBottom + gap);
    const offset = top - placement.baseTop;
    placement.card.style.setProperty("--condition-offset", `${Math.round(offset)}px`);
    previousBottom = top + placement.height;
  });
}

function drawGraphConnectors(graph, container) {
  const svg = container.querySelector(".connector-layer");
  const containerRect = container.getBoundingClientRect();
  const width = containerRect.width;
  const height = containerRect.height;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  graph.edges.forEach(([fromId, toId]) => {
    const from = container.querySelector(`.med-column [data-node-id="${fromId}"]`);
    const to = container.querySelector(`.condition-column [data-node-id="${toId}"]`);
    if (!from || !to) return;
    const isActive = fromId === selectedGraphNodeId || toId === selectedGraphNodeId;

    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    const x1 = fromRect.right - containerRect.left + 15;
    const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
    const x2 = toRect.left - containerRect.left - 15;
    const y2 = toRect.top + toRect.height / 2 - containerRect.top;
    const control = Math.max(28, Math.abs(x2 - x1) * 0.45);
    const path = createSvg("path", {
      class: `connector-path${isActive ? " active" : ""}`,
      d: `M ${x1} ${y1} C ${x1 + control} ${y1}, ${x2 - control} ${y2}, ${x2} ${y2}`,
      "data-from": fromId,
      "data-to": toId
    });
    svg.append(path);
  });

  container.querySelectorAll(".connector-path.active").forEach((path) => {
    path.parentNode.append(path);
  });
}

function selectNode(nodeId, graph, nodeById, container, details) {
  const node = nodeById.get(nodeId);
  selectedGraphNodeId = nodeId;
  const linkedIds = new Set();
  container.querySelectorAll(".connector-path").forEach((edge) => {
    const isActive = edge.dataset.from === nodeId || edge.dataset.to === nodeId;
    edge.classList.toggle("active", isActive);
    if (isActive) edge.parentNode.append(edge);
    if (isActive) {
      linkedIds.add(edge.dataset.from === nodeId ? edge.dataset.to : edge.dataset.from);
    }
  });

  container.querySelectorAll(".graph-anchor").forEach((anchor) => {
    anchor.classList.toggle("selected", anchor.dataset.nodeId === nodeId);
  });

  const relatedSlides = getRelatedSlides(nodeId, node);
  const detailsContent = getDisplayNodeDetails(nodeId, node);
  const symptomHeading = node.type === "condition" ? "Symptoms" : "Side effects";
  details.innerHTML = `
    <span class="graph-details-kicker">${escapeHtml(node.type)}</span>
    <div class="graph-details-title-row">
      <h3>
        <span>${escapeHtml(node.label)}</span>
        <a class="google-it-link" href="${googleSearchUrl(node.label)}" target="_blank" rel="noopener noreferrer" aria-label="Google ${escapeHtml(node.label)}" title="Google ${escapeHtml(node.label)}">${googleIconSvg()}</a>
      </h3>
    </div>
    <p>${escapeHtml(detailsContent.description)}</p>
    <div class="graph-chip-row">
      ${node.tags.map((tag) => `<span class="graph-chip">${escapeHtml(tag)}</span>`).join("")}
    </div>
    ${renderDetailSection(symptomHeading, detailsContent.sideEffects)}
    <section class="graph-detail-section">
      <h4>Considerations / contraindications</h4>
      <p>${escapeHtml(detailsContent.considerations)}</p>
    </section>
    ${renderRelatedSlides(relatedSlides)}
  `;
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

function getDisplayNodeDetails(nodeId, node) {
  const rawDetails = graphNodeDetails[nodeId] ?? node.details ?? {
    description: node.cue,
    sideEffects: [],
    considerations: "Review the linked course slides and medication class notes for specific nursing considerations."
  };
  return {
    description: cleanDisplayText(rawDetails.description, node.cue),
    sideEffects: cleanList(rawDetails.sideEffects, node.type === "condition" ? defaultConditionSymptoms(node.label) : medicationAdverseEffects(node.label)),
    considerations: cleanDisplayText(rawDetails.considerations, "Check indication, baseline assessment findings, contraindications, major interactions, and patient teaching points.")
  };
}

function renderDetailSection(title, items) {
  if (!items.length) return "";
  return `
    <section class="graph-detail-section">
      <h4>${escapeHtml(title)}</h4>
      <ul>
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function getRelatedSlides(nodeId, node) {
  const terms = getSlideTerms(nodeId, node);
  if (!terms.length || !graphSlides.length) return [];

  const weekSlides = graphSlides.filter((slide) => slide.week === node.week);
  const curatedSlideIds = new Set(getCuratedRangeSlides(nodeId).map((slide) => slide.id));
  const ranked = weekSlides
    .filter((slide) => isUsefulSlide(slide))
    .map((slide) => ({
      slide,
      score: scoreSlideForTerms(slide, terms) + (curatedSlideIds.has(slide.id) ? 2 : 0)
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.slide.slideNumber - b.slide.slideNumber);

  const seen = new Set();
  return ranked
    .map((entry) => entry.slide)
    .filter((slide) => {
      const signature = `${slide.deckId}:${slide.slideNumber}:${normalizeSearch(slide.text).slice(0, 180)}`;
      if (seen.has(signature)) return false;
      seen.add(signature);
      return true;
    })
    .slice(0, MAX_RELATED_SLIDES);
}

function getCuratedRangeSlides(nodeId) {
  const ranges = graphSlideRanges[nodeId] ?? [];
  if (!ranges.length) return [];
  return graphSlides.filter((slide) => ranges.some((range) => (
    slide.deckId === range.deckId
    && slide.slideNumber >= range.start
    && slide.slideNumber <= range.end
  )));
}

function getSlideTerms(nodeId, node) {
  const termMap = {
    diphenhydramine: ["diphenhydramine", "first-generation h 1", "first-generation h1", "benadryl"],
    cetirizine: ["cetirizine", "second-generation h 1", "second-generation h1", "zyrtec"],
    fexofenadine: ["fexofenadine", "third-generation h 1", "third-generation h1", "allegra"],
    albuterol: ["albuterol", "saba", "short-acting", "beta 2 agonist", "rescue inhaler"],
    formoterol: ["formoterol", "laba", "long acting", "long-acting"],
    ipratropium: ["ipratropium", "sama", "short-acting muscarinic", "m3 antagonist"],
    tiotropium: ["tiotropium", "lama", "long-acting muscarinic", "m3 antagonist"],
    budesonide: ["budesonide", "inhaled corticosteroids", "ics", "airway inflammation"],
    zafirlukast: ["zafirlukast", "leukotriene receptor antagonist", "ltra", "leukotrienes"],
    hypersensitivity: ["hypersensitivity", "allergic reaction", "ige", "histamine", "h 1 receptor"],
    asthma: ["asthma", "bronchoconstriction", "bronchospasm", "airway inflammation"],
    status: ["status asthmaticus", "status asthma", "severe exacerbation", "acute asthma", "airway emergency", "albuterol inhal"],
    copd: ["copd", "emphysema", "chronic bronchitis", "airflow limitation"]
  };
  return termMap[nodeId] ?? [node.label, ...(node.tags ?? [])];
}

function scoreSlideForTerms(slide, terms) {
  const title = normalizeSearch(slide.title);
  const text = normalizeSearch(slide.text);
  const deck = normalizeSearch(slide.deckTitle);
  return terms.reduce((score, term) => {
    const normalizedTerm = normalizeSearch(term);
    if (!normalizedTerm) return score;
    const termWeight = Math.max(1, normalizedTerm.split(" ").length);
    let nextScore = score;
    if (title.includes(normalizedTerm)) nextScore += termWeight + 3;
    if (text.includes(normalizedTerm)) nextScore += termWeight;
    if (deck.includes(normalizedTerm)) nextScore += 1;
    return nextScore;
  }, 0);
}

function renderRelatedSlides(slides) {
  if (!slides.length) {
    return `
      <section class="graph-slide-section">
        <h4>Related slides</h4>
        <p class="graph-slide-empty">No focused slide matches found for this selection.</p>
      </section>
    `;
  }

  return `
    <section class="graph-slide-section">
      <h4>Related slides</h4>
      <div class="graph-slide-grid">
        ${slides.map((slide) => `
          <a class="graph-slide" href="${escapeHtml(slide.image)}" target="_blank" rel="noreferrer">
            <img src="${escapeHtml(slide.image)}" alt="${escapeHtml(slide.title)}" loading="lazy">
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function isUsefulSlide(slide) {
  const text = normalizeSearch(slide.text);
  const title = normalizeSearch(slide.title);
  if (slide.textLength < 70) return false;
  if (title.length < 18 && text.length < 120) return false;
  if (/^image:/.test(title) && text.length < 180) return false;
  if (/the slido app must be installed/.test(text)) return false;
  return true;
}

function normalizeSearch(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[β]/g, "beta")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createSvg(tagName, attributes, text) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  if (text) element.textContent = text;
  return element;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
