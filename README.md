# NURS 304 Quiz Bank

A static single-page quiz bank for GitHub Pages. The app loads `data/questions.json`, then lets you filter by week and source.

## Run locally

```sh
python3 -m http.server 4173 --directory .
```

Open `http://127.0.0.1:4173`.

## Deploy

Publish this folder's contents to GitHub Pages. There is no build step.

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

Follow `QUESTION_GENERATION_RULES.md` when generating more questions.
