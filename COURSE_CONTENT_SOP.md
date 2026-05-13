# Course Content Update SOP

Use this checklist whenever new NURS 304 material is added: lecture slides, extracted slide text, study guides, quiz results, practice exams, or instructor review materials.

## 1. Archive the Source Material

1. Save original files in the existing course-material folders using descriptive names.
2. Save pasted quiz/test text in `saved-materials/` with an ISO date prefix.
3. Preserve course wording exactly for quiz/test questions, including answer choices, question type, and case-study stems.
4. Mark whether answers are confirmed from Canvas feedback, inferred from the selected answer, or still unverified.

## 2. Extract and Normalize Content

1. Extract readable text from new PowerPoints, PDFs, or documents.
2. Keep week/topic naming consistent with the app.
3. Identify new medications, lab values, disorders, procedures, and nursing priorities.
4. Compare extracted content against existing `data/questions.json` to avoid duplicate course questions.

## 3. Add Course Questions

1. Add class quiz/test questions as `sourceType: "Course"`.
2. Keep the stem and answer choices exactly as shown in the class material.
3. Add confirmed correct answers only when feedback or scoring supports them.
4. Use a short rationale that explains the correct answer without changing the original question wording.
5. Re-run an answer audit after entry, especially for select-all-that-apply, matching, and case-study questions.

## 4. Generate New AI Practice Questions

1. Follow `QUESTION_GENERATION_RULES.md`.
2. Match the course style: concise nursing stems, realistic clinical context, and no awkward AI lead-ins.
3. Keep difficulty aligned with existing quizzes and exams.
4. Use a similar proportion of multiple choice, select-all-that-apply, true/false, matching, and fill-in questions as the course materials.
5. Base questions primarily on lectures, extracted slide text, study guides, and saved quizzes. Do not overemphasize details that appear only in supplemental drug documents.
6. Vet every generated question for clinical sense, answer correctness, and plausible distractors before saving it.

## 5. Update Vocabulary Definitions

1. Define medical, biology, pharmacology, and nursing words above a high-school baseline.
2. Err on the side of adding definitions for medications, drug classes, diseases, lab names, procedures, and abnormal findings.
3. Include normal adult ranges when relevant, such as hemoglobin, hematocrit, platelets, electrolytes, glucose, ABGs, BUN, creatinine, INR, and aPTT.
4. Include both broad and specific terms when useful, such as `antihistamine` and `first-generation antihistamine`.
5. Include medications that appear in answer options, not only medications in the question stem.

## 6. Classify Weeks and Subtopics

1. Add or revise `subtopic` values when new content introduces a meaningful study cluster.
2. Keep subtopics detailed enough to help filtering, but broad enough that there are readily available study videos.
3. Run:

```sh
node scripts/classify-subtopics.js
```

4. Review the printed counts for obvious misclassification, such as one subtopic absorbing unrelated questions.
5. Spot-check course questions after classification because exact class questions matter most.

## 7. Maintain Related Videos

1. Update `data/videos.json` for any new subtopic.
2. Prefer nursing-focused videos for NCLEX-style clinical judgment and medication teaching.
3. Use A&P-focused sources for physiology foundations when nursing videos are too superficial.
4. Keep each subtopic to 1-3 videos so the sidebar stays useful.
5. Prefer stable pages from trusted sources such as RegisteredNurseRN, Khan Academy, Osmosis, OpenStax, or other reputable nursing/medical education sources.

## 8. Run Quality Checks

1. Validate JSON:

```sh
node -e "JSON.parse(require('fs').readFileSync('data/questions.json','utf8')); JSON.parse(require('fs').readFileSync('data/videos.json','utf8'))"
```

2. Check JavaScript syntax:

```sh
node --check app.js
node --check scripts/classify-subtopics.js
```

3. Confirm every question has a subtopic and every used subtopic has video mappings.
4. Launch the app locally and verify filters, definitions, videos, answer submission, answered-question memory, and reset behavior.
5. Commit only after data and UI checks pass.
