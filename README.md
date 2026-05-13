# NURS 304 Quiz Bank

A static single-page quiz bank for GitHub Pages. The app loads `data/questions.json`, then lets you filter by week, category, and source.

## Run locally

```sh
python3 -m http.server 4173 --directory quiz-webapp
```

Open `http://127.0.0.1:4173`.

## Deploy

Publish the `quiz-webapp` folder contents to GitHub Pages. There is no build step.

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
- `rationale`
- `source`
- `sourceType`

Follow `QUESTION_GENERATION_RULES.md` when generating more questions.
