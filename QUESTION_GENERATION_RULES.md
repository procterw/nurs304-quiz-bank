# NURS 304 Practice Question Generation Rules

Use these rules when generating future questions for this app.

## Source Priority

Base questions on the provided course materials in this order:

1. Study guides in `school-assistant/captures/NURS304/study-guides/extracted-text`.
2. Saved quizzes and tests in `school-assistant/captures/NURS304/quizzes`.
3. Extracted PowerPoint text in `school-assistant/captures/NURS304/extracted-slide-text-by-week` and `extracted-slide-text-by-deck`.
4. Original PowerPoint folder/topic structure in `school-assistant/captures/NURS304/powerpoints`.

Do not overemphasize detailed medication information that only appears in a separately generated drug document. Medication questions should stay aligned with the course slides, study guides, and saved quiz style.

## Quality Rules

- Every question must make clinical and grammatical sense.
- Every correct answer must be verified against course materials or standard nursing pathophysiology/pharmacology knowledge represented in those materials.
- Do not use artificial lead-ins such as "In a short clinical vignette focused on..." or "Which option best reflects the course materials?" Stems should read like normal Canvas/NURS questions.
- Avoid vague stems, trick wording, and answer choices that are accidentally correct.
- Distractors should be plausible but clearly less correct than the keyed answer.
- Keep rationales to one helpful paragraph, usually 2-4 concise sentences, explaining why the answer is correct and, when useful, why major distractors are not correct.
- Prefer NCLEX-style nursing judgment, safety, patient teaching, symptom recognition, lab interpretation, and mechanism questions.
- Difficulty should reflect the level and style of the saved course quizzes and practice exam: mostly direct nursing application, safety, teaching, lab/ABG interpretation, and symptom recognition. Do not make questions substantially more detailed, obscure, or pharmacology-heavy than the existing exams unless the user explicitly asks for advanced review.

## Format Rules

- Use the existing JSON schema in `data/questions.json`.
- Keep future small-batch sets balanced across available topics unless the user requests a specific topic.
- Include some `Multiple Answer` / "Select all that apply" questions in roughly the same proportion as the saved quizzes, usually about 20-25% of a mixed set.
- For `Multiple Answer` questions, include only answer choices that are unambiguously correct in `correctAnswers`.
- Use `category` values consistently: `Medication` or `A&P`.
- Use `sourceType` values consistently: `Course` for saved quiz/test items and `AI` for generated items.
- Use `sourceConfidence` to document how the key was established, especially when Canvas hid responses and the answer was audited from course content.
- Use `topic` values matching the PowerPoint folder-derived topic labels already in the app.
- Glossary/definition coverage should err on the side of including useful clinical terms from both stems and answer choices. Define lab values, pathophysiology terms, medication classes, adverse-effect terms, and meaningful anatomy/physiology terms; omit only very basic words.
- Definitions should be more than one-word glosses. Include nursing relevance and normal healthy ranges when relevant, such as calcium, potassium, sodium, magnesium, hemoglobin, hematocrit, glucose, pH, PaCO2, PaO2, BUN, creatinine, albumin, and platelet count.

## Current App Bank

The current app contains exact saved course/practice items where the stem and answer choices were recoverable, plus generated AI practice questions. Course-labeled items should not be rewritten into summaries or given generic distractors.
