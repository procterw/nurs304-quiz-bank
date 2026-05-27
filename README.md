# NURS 304 Quiz Bank

A static single-page quiz bank for GitHub Pages. The app loads `data/questions.json` and `data/videos.json`, then lets you filter by week and subtopic. Slide assets remain in the project for archive/reference work, but the quiz and med-map UI no longer render slide previews.

By default, the practice page excludes saved course questions and shows only generated questions. Add `?all_questions` to the URL to include saved course questions and show the source filter.

## Run locally

```sh
python3 -m http.server 4173 --directory .
```

Open `http://127.0.0.1:4173`.

## Deploy

Publish this folder's contents to GitHub Pages. There is no build step.

## Question Feedback

The practice page includes a one-click `This question is bad` button. To connect it:

1. Create a Google Sheet.
2. Open Extensions > Apps Script.
3. Paste in `scripts/question-feedback-apps-script.gs`.
4. Deploy it as a Web app with execute access as you and access set to anyone.
5. Copy the Web app URL into `QUESTION_FEEDBACK_ENDPOINT` in `app.js`.

Feedback rows will be appended to a `Question feedback` sheet.

## Update the bank

Replace `data/questions.json` with another array of question objects using the same fields:

- `id`
- `week`
- `weekLabel`
- `topic`
- `system`
- `category`
- `drug`
- `type`
- `difficulty`
- `stem`
- `options`
- `correctAnswers`
- `prompts` for `Matching` questions
- `blanks` for `Fill in the Blank` questions
- `rationale`
- `source`
- `sourceType`
- `sourceConfidence`
- `subtopic`

Follow `QUESTION_GENERATION_RULES.md` when generating more questions, use `COURSE_CONTENT_SOP.md` when adding new course materials or quiz results, and follow `MED_MAP_RULES.md` when adding or auditing medication-condition map sections.
