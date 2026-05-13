const state = {
  questions: [],
  filtered: [],
  currentId: null,
  answers: new Map(),
  checked: new Set(),
};

const el = {
  search: document.getElementById("searchInput"),
  week: document.getElementById("weekFilter"),
  category: document.getElementById("categoryFilter"),
  system: document.getElementById("systemFilter"),
  type: document.getElementById("typeFilter"),
  difficulty: document.getElementById("difficultyFilter"),
  drug: document.getElementById("drugFilter"),
  filteredCount: document.getElementById("filteredCount"),
  medCount: document.getElementById("medCount"),
  apCount: document.getElementById("apCount"),
  answeredCount: document.getElementById("answeredCount"),
  listStatus: document.getElementById("listStatus"),
  questionList: document.getElementById("questionList"),
  emptyState: document.getElementById("emptyState"),
  questionCard: document.getElementById("questionCard"),
  questionMeta: document.getElementById("questionMeta"),
  questionStem: document.getElementById("questionStem"),
  answerForm: document.getElementById("answerForm"),
  feedback: document.getElementById("feedback"),
  shuffle: document.getElementById("shuffleButton"),
  reset: document.getElementById("resetButton"),
  export: document.getElementById("exportButton"),
  random: document.getElementById("randomButton"),
  check: document.getElementById("checkButton"),
  clear: document.getElementById("clearButton"),
  next: document.getElementById("nextButton"),
};

const filters = [el.search, el.week, el.category, el.system, el.type, el.difficulty, el.drug];

async function init() {
  try {
    const response = await fetch("data/questions.json");
    if (!response.ok) throw new Error(`Question data returned ${response.status}`);
    state.questions = await response.json();
    state.filtered = [...state.questions];
    buildFilters();
    bindEvents();
    applyFilters();
  } catch (error) {
    el.listStatus.textContent = "Data failed to load";
    el.emptyState.innerHTML = `
      <h2>Question data did not load</h2>
      <p>Run this folder from a local server or GitHub Pages so the app can fetch data/questions.json.</p>
    `;
    console.error(error);
  }
}

function bindEvents() {
  filters.forEach((filter) => filter.addEventListener("input", applyFilters));
  el.shuffle.addEventListener("click", shuffleFiltered);
  el.reset.addEventListener("click", resetFilters);
  el.export.addEventListener("click", exportFiltered);
  el.random.addEventListener("click", selectRandom);
  el.check.addEventListener("click", checkAnswer);
  el.clear.addEventListener("click", clearAnswer);
  el.next.addEventListener("click", selectNext);
}

function buildFilters() {
  fillSelect(el.week, "All weeks", state.questions.map((q) => [q.week, q.weekLabel]), true);
  fillSelect(el.category, "All categories", state.questions.map((q) => q.category));
  fillSelect(el.system, "All systems", state.questions.map((q) => q.system));
  fillSelect(el.type, "All types", state.questions.map((q) => q.type));
  fillSelect(el.difficulty, "All difficulties", state.questions.map((q) => q.difficulty));
  fillSelect(el.drug, "All drugs", state.questions.map((q) => q.drug).filter(Boolean));
}

function fillSelect(select, label, values, pairValues = false) {
  select.innerHTML = "";
  select.append(new Option(label, ""));

  const options = pairValues
    ? [...new Map(values.map(([value, text]) => [String(value), text])).entries()]
    : [...new Set(values.filter(Boolean).map(String))]
        .sort((a, b) => a.localeCompare(b))
        .map((value) => [value, value]);

  options.forEach(([value, text]) => select.append(new Option(text, value)));
}

function applyFilters() {
  const query = el.search.value.trim().toLowerCase();
  const selected = {
    week: el.week.value,
    category: el.category.value,
    system: el.system.value,
    type: el.type.value,
    difficulty: el.difficulty.value,
    drug: el.drug.value,
  };

  state.filtered = state.questions.filter((question) => {
    if (selected.week && String(question.week) !== selected.week) return false;
    if (selected.category && question.category !== selected.category) return false;
    if (selected.system && question.system !== selected.system) return false;
    if (selected.type && question.type !== selected.type) return false;
    if (selected.difficulty && question.difficulty !== selected.difficulty) return false;
    if (selected.drug && question.drug !== selected.drug) return false;
    if (!query) return true;

    const searchable = [
      question.stem,
      question.topic,
      question.system,
      question.category,
      question.drug,
      question.rationale,
      question.source,
      ...question.options,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return searchable.includes(query);
  });

  if (!state.filtered.some((question) => question.id === state.currentId)) {
    state.currentId = state.filtered[0]?.id ?? null;
  }

  render();
}

function render() {
  renderMetrics();
  renderList();
  renderCurrentQuestion();
}

function renderMetrics() {
  el.filteredCount.textContent = state.filtered.length;
  el.medCount.textContent = state.filtered.filter((q) => q.category === "Medication").length;
  el.apCount.textContent = state.filtered.filter((q) => q.category === "A&P").length;
  el.answeredCount.textContent = state.checked.size;
  el.listStatus.textContent = `${state.filtered.length} of ${state.questions.length}`;
}

function renderList() {
  el.questionList.innerHTML = "";

  if (state.filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-list";
    empty.textContent = "No questions match the current filters.";
    el.questionList.append(empty);
    return;
  }

  state.filtered.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `question-list-item${question.id === state.currentId ? " active" : ""}`;
    button.dataset.id = question.id;
    button.innerHTML = `
      <span class="list-title">${escapeHtml(question.stem)}</span>
      <span class="tags">
        <span class="tag">${escapeHtml(question.weekLabel)}</span>
        <span class="tag ${question.category === "Medication" ? "med" : "ap"}">${escapeHtml(question.category)}</span>
        <span class="tag">${escapeHtml(question.type)}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      state.currentId = question.id;
      render();
    });
    el.questionList.append(button);
  });
}

function renderCurrentQuestion() {
  const question = getCurrentQuestion();
  el.feedback.className = "feedback hidden";
  el.feedback.innerHTML = "";

  if (!question) {
    el.emptyState.classList.remove("hidden");
    el.questionCard.classList.add("hidden");
    return;
  }

  el.emptyState.classList.add("hidden");
  el.questionCard.classList.remove("hidden");
  el.questionMeta.textContent = [
    question.weekLabel,
    question.system,
    question.topic,
    question.category,
    question.type,
    question.difficulty,
    question.drug ? `Drug: ${question.drug}` : null,
  ]
    .filter(Boolean)
    .join(" · ");
  el.questionStem.textContent = question.stem;

  const selected = state.answers.get(question.id) ?? new Set();
  const inputType = question.type === "Multiple Answer" ? "checkbox" : "radio";
  el.answerForm.innerHTML = "";

  question.options.forEach((option, index) => {
    const id = `${question.id}-${index}`;
    const label = document.createElement("label");
    label.className = "answer-option";
    label.innerHTML = `
      <input id="${id}" name="${question.id}" type="${inputType}" value="${escapeHtml(option)}" ${selected.has(option) ? "checked" : ""}>
      <span>${escapeHtml(option)}</span>
    `;
    label.querySelector("input").addEventListener("change", (event) => storeAnswer(question, event));
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

function checkAnswer() {
  const question = getCurrentQuestion();
  if (!question) return;

  const selected = state.answers.get(question.id) ?? new Set();
  const correct = new Set(question.correctAnswers);
  const isCorrect = setsMatch(selected, correct);
  state.checked.add(question.id);

  [...el.answerForm.querySelectorAll(".answer-option")].forEach((label) => {
    const value = label.querySelector("input").value;
    label.classList.toggle("correct", correct.has(value));
    label.classList.toggle("incorrect", selected.has(value) && !correct.has(value));
  });

  el.feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  el.feedback.innerHTML = `
    <strong>${isCorrect ? "Correct" : "Review this one"}</strong>
    <div><b>Answer:</b> ${question.correctAnswers.map(escapeHtml).join("; ")}</div>
    <div><b>Rationale:</b> ${escapeHtml(question.rationale)}</div>
  `;
  renderMetrics();
}

function clearAnswer() {
  const question = getCurrentQuestion();
  if (!question) return;
  state.answers.delete(question.id);
  state.checked.delete(question.id);
  render();
}

function selectNext() {
  if (state.filtered.length === 0) return;
  const index = state.filtered.findIndex((question) => question.id === state.currentId);
  const nextIndex = index === -1 ? 0 : (index + 1) % state.filtered.length;
  state.currentId = state.filtered[nextIndex].id;
  render();
}

function selectRandom() {
  if (state.filtered.length === 0) return;
  const index = Math.floor(Math.random() * state.filtered.length);
  state.currentId = state.filtered[index].id;
  render();
}

function shuffleFiltered() {
  for (let i = state.filtered.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.filtered[i], state.filtered[j]] = [state.filtered[j], state.filtered[i]];
  }
  state.currentId = state.filtered[0]?.id ?? null;
  render();
}

function resetFilters() {
  filters.forEach((filter) => {
    filter.value = "";
  });
  applyFilters();
}

function exportFiltered() {
  const blob = new Blob([JSON.stringify(state.filtered, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "nurs304-filtered-questions.json";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getCurrentQuestion() {
  return state.questions.find((question) => question.id === state.currentId);
}

function setsMatch(a, b) {
  if (a.size !== b.size) return false;
  return [...a].every((value) => b.has(value));
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
