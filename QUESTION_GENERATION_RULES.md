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
- Avoid vague stems, trick wording, and answer choices that are accidentally correct.
- Distractors should be plausible but clearly less correct than the keyed answer.
- Keep rationales to one short paragraph explaining why the answer is correct and, when useful, why major distractors are not correct.
- Prefer NCLEX-style nursing judgment, safety, patient teaching, symptom recognition, lab interpretation, and mechanism questions.

## Format Rules

- Use the existing JSON schema in `data/questions.json`.
- Keep future small-batch sets balanced across available topics unless the user requests a specific topic.
- Include some `Multiple Answer` / "Select all that apply" questions in roughly the same proportion as the saved quizzes, usually about 20-25% of a mixed set.
- For `Multiple Answer` questions, include only answer choices that are unambiguously correct in `correctAnswers`.
- Use `category` values consistently: `Medication` or `A&P`.
- Use `topic` values matching the PowerPoint folder-derived topic labels already in the app.

## Current App Seed Set

The current app intentionally uses 20 curated questions instead of the previous large generated bank. Expand from this baseline only after applying the quality rules above.
