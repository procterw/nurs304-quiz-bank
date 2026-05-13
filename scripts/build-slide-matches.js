const fs = require("fs");
const path = require("path");
const os = require("os");
const zlib = require("zlib");
const { execFileSync } = require("child_process");
const { classifySubtopic, normalize } = require("./classify-subtopics");

const repoRoot = path.resolve(__dirname, "..");
const pptRoot = path.resolve(repoRoot, "..", "school-assistant", "captures", "NURS304", "powerpoints");
const questionsPath = path.join(repoRoot, "data", "questions.json");
const slidesPath = path.join(repoRoot, "data", "slides.json");
const imageDir = path.join(repoRoot, "data", "slide-previews");
const previewWidth = 1000;
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const STOPWORDS = new Set([
  "about", "after", "again", "against", "answer", "answers", "based", "because", "before", "being",
  "below", "between", "client", "course", "during", "effect", "effects", "following", "from", "health",
  "indicate", "indicates", "instructor", "likely", "management", "medication", "medications", "nurse",
  "nurses", "nursing", "patient", "patients", "primary", "provider", "question", "reports", "review",
  "reviewing", "should", "student", "symptom", "symptoms", "teaching", "therapy", "these", "which",
  "while", "with", "would", "what", "when", "where", "select", "apply", "true", "false", "correct",
  "incorrect", "not", "and", "the", "for", "that", "this", "are", "was", "were", "has", "have", "had",
  "will", "can", "all", "most", "best", "first", "more", "less", "than", "into", "also", "such", "their",
  "they", "them", "then", "each", "type", "types", "class", "classes", "care", "plan", "risk",
]);

const LOW_CONTENT_TITLE_PATTERNS = [
  /^agenda\b/,
  /^announcement(s)?\b/,
  /^break\b/,
  /^case study$/i,
  /^check[-\s]?in\b/,
  /^discussion\b/,
  /^housekeeping\b/,
  /^introduction\b/,
  /^learning objectives?\b/,
  /^objectives?\b/,
  /^outline\b/,
  /^outline of the day\b/,
  /^questions?\b/,
  /^references?\b/,
  /^resources?\b/,
  /^summary\b/,
  /^thank you\b/,
  /^today'?s (agenda|objectives?|plan)\b/,
  /assistant teaching professor/i,
  /slides? (created|developed) by/i,
  /slido app/i,
];

const ADMIN_ONLY_TERMS = new Set([
  "agenda", "announcement", "announcements", "break", "canvas", "check", "course", "discussion",
  "friday", "housekeeping", "learning", "module", "monday", "nurs", "objective", "objectives",
  "outline", "question", "questions", "reference", "references", "resources", "student", "students",
  "summary", "thanks", "thursday", "today", "tuesday", "wednesday", "week",
]);

function main() {
  fs.mkdirSync(imageDir, { recursive: true });
  const questions = JSON.parse(fs.readFileSync(questionsPath, "utf8"));
  const extracted = extractSlides();
  const previewMapped = addPreviewIndexes(extracted);
  const slides = prepareSlides(previewMapped);
  const matched = matchQuestionsToSlides(questions, slides);
  fs.writeFileSync(questionsPath, `${JSON.stringify(matched.questions, null, 2)}\n`);
  fs.writeFileSync(slidesPath, `${JSON.stringify(matched.slides, null, 2)}\n`);

  const slideById = new Map(slides.map((slide) => [slide.id, slide]));
  const referenced = [...new Set(matched.questions.flatMap((question) => question.slideRefs ?? []))].sort();
  const referencedSlides = referenced.map((id) => slideById.get(id)).filter(Boolean);
  cleanupUnreferencedImages(referencedSlides);
  exportReferencedSlides(referencedSlides);

  console.log(`Slides extracted: ${extracted.length}`);
  console.log(`Slides mappable to rendered previews: ${previewMapped.filter((slide) => slide.previewIndex).length}`);
  console.log(`Slides eligible after filtering/deduplication: ${slides.length}`);
  console.log(`Questions matched: ${matched.questions.filter((question) => (question.slideRefs ?? []).length > 0).length}/${questions.length}`);
  console.log(`Unique slide screenshots referenced: ${referenced.length}`);
}

function extractSlides() {
  const pptxFiles = listPptxFiles(pptRoot);
  return pptxFiles.flatMap((pptxPath) => extractDeckSlides(pptxPath));
}

function listPptxFiles(root) {
  const results = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(fullPath);
      if (entry.isFile() && entry.name.toLowerCase().endsWith(".pptx") && !entry.name.startsWith("~$")) {
        results.push(fullPath);
      }
    }
  }
  return results.sort((a, b) => a.localeCompare(b));
}

function extractDeckSlides(pptxPath) {
  const entries = readZipEntries(pptxPath);
  const presentation = entries.get("ppt/presentation.xml").toString("utf8");
  const rels = entries.get("ppt/_rels/presentation.xml.rels").toString("utf8");
  const relationships = extractRelationships(rels);
  const orderedSlideTargets = [...presentation.matchAll(/<p:sldId[^>]+r:id="([^"]+)"[^>]*\/>/g)]
    .map((match) => relationships.get(match[1]))
    .filter(Boolean)
    .map((target) => target.replace(/^\/?ppt\//, "ppt/").replace(/^slides\//, "ppt/slides/"));

  const deckId = slugify(path.basename(path.dirname(pptxPath)) + "-" + path.basename(pptxPath, ".pptx"));
  const deckTitle = path.basename(pptxPath, ".pptx");
  const week = extractWeek(pptxPath);
  const weekLabel = week ? `Week ${week}` : "";

  return orderedSlideTargets.map((slidePath, index) => {
    const slideNumber = index + 1;
    const slideFileNumber = Number(slidePath.match(/slide(\d+)\.xml$/)?.[1]);
    const text = extractSlideText(entries.get(slidePath)?.toString("utf8") ?? "");
    const title = getSlideTitle(text, deckTitle, slideNumber);
    const id = `${deckId}-s${String(slideNumber).padStart(3, "0")}`;
    const image = `data/slide-previews/${id}.png`;
    return {
      id,
      week,
      weekLabel,
      deckId,
      deckTitle,
      deckPath: path.relative(repoRoot, pptxPath),
      slideNumber,
      slideFileNumber,
      title,
      text,
      textLength: text.length,
      subtopic: classifySubtopic({
        week,
        topic: deckTitle,
        system: "",
        category: "",
        stem: text,
        correctAnswers: [],
      }),
      image,
    };
  });
}

function addPreviewIndexes(slides) {
  const byDeck = groupBy(slides, (slide) => slide.deckPath);
  const mapped = [];

  for (const [deckPath, deckSlides] of byDeck.entries()) {
    const deck = deckSlides[0];
    const sourcePptx = path.resolve(repoRoot, deckPath);
    const preview = createDeckPreview(sourcePptx);
    if (!preview.htmlPath) {
      fs.rmSync(preview.tempDir, { recursive: true, force: true });
      continue;
    }
    try {
      const previewSlides = extractPreviewSlideTexts(preview.htmlPath);
      mapped.push(...previewSlides.map((text, index) => createRenderedSlide(deck, text, index + 1)));
    } finally {
      fs.rmSync(preview.tempDir, { recursive: true, force: true });
    }
  }

  return mapped;
}

function createRenderedSlide(deck, text, previewIndex) {
  const title = getSlideTitle(text, deck.deckTitle, previewIndex);
  const id = `${deck.deckId}-p${String(previewIndex).padStart(3, "0")}`;
  return {
    id,
    week: deck.week,
    weekLabel: deck.weekLabel,
    deckId: deck.deckId,
    deckTitle: deck.deckTitle,
    deckPath: deck.deckPath,
    slideNumber: previewIndex,
    previewIndex,
    title,
    text,
    textLength: text.length,
    subtopic: classifySubtopic({
      week: deck.week,
      topic: deck.deckTitle,
      system: "",
      category: "",
      stem: text,
      correctAnswers: [],
    }),
    image: `data/slide-previews/${id}.png`,
  };
}

function groupBy(items, getKey) {
  const groups = new Map();
  for (const item of items) {
    const key = getKey(item);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  return groups;
}

function createDeckPreview(sourcePptx) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "nurs304-preview-"));
  execFileSync("qlmanage", ["-p", "-o", tempDir, sourcePptx], { stdio: "ignore" });
  const htmlPath = findFile(tempDir, "Preview.html");
  return { tempDir, htmlPath };
}

function findFile(root, fileName) {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(fullPath);
      if (entry.isFile() && entry.name === fileName) return fullPath;
    }
  }
  return null;
}

function extractPreviewSlideTexts(htmlPath) {
  const html = fs.readFileSync(htmlPath, "utf8");
  return html
    .split(/(?=<div class="slide")/)
    .filter((part) => part.startsWith('<div class="slide"'))
    .map((part) => stripHtml(part));
}

function stripHtml(html) {
  return decodeHtmlEntities(html
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim());
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'");
}

function findBestPreviewIndex(slide, previewTokens) {
  const targetTokens = new Set(tokenize(slide.text));
  if (targetTokens.size === 0) return null;

  let best = { index: null, score: 0, overlap: 0 };
  previewTokens.forEach((tokens, index) => {
    let overlap = 0;
    for (const token of targetTokens) {
      if (tokens.has(token)) overlap += 1;
    }
    const score = overlap / Math.max(targetTokens.size, 1);
    if (score > best.score || (score === best.score && overlap > best.overlap)) {
      best = { index: index + 1, score, overlap };
    }
  });

  if (best.overlap >= 5 && best.score >= 0.45) return best.index;
  if (targetTokens.size <= 8 && best.overlap >= Math.max(3, Math.ceil(targetTokens.size * 0.65))) return best.index;
  return null;
}

function prepareSlides(slides) {
  const contentSlides = slides.filter((slide) => slide.previewIndex && isContentSlide(slide));
  const byRenderedPreview = new Map();
  for (const slide of contentSlides) {
    const key = `${slide.deckPath}:${slide.previewIndex}`;
    const current = byRenderedPreview.get(key);
    if (!current || getSlideQualityScore(slide) > getSlideQualityScore(current)) {
      byRenderedPreview.set(key, slide);
    }
  }

  const byCanonicalContent = new Map();
  for (const slide of byRenderedPreview.values()) {
    const key = getSlideDeduplicationKey(slide);
    const current = byCanonicalContent.get(key);
    if (!current || getSlideQualityScore(slide) > getSlideQualityScore(current)) {
      byCanonicalContent.set(key, slide);
    }
  }
  return [...byCanonicalContent.values()].sort(
    (a, b) => a.week - b.week || a.deckTitle.localeCompare(b.deckTitle) || a.slideNumber - b.slideNumber
  );
}

function isContentSlide(slide) {
  const title = normalize(slide.title ?? "");
  const tokens = tokenize(slide.text);
  const domainTokens = tokens.filter((token) => !ADMIN_ONLY_TERMS.has(token));
  const hasSubstantiveText = slide.textLength >= 85 && domainTokens.length >= 7;
  const looksAdministrative = LOW_CONTENT_TITLE_PATTERNS.some((pattern) => pattern.test(title));

  if (!hasSubstantiveText) return false;
  if (looksAdministrative) return false;
  if (domainTokens.length < 12 && /^(education|image|medications|orders|re-assessment|what happens next)\b/i.test(title)) return false;
  return true;
}

function getSlideDeduplicationKey(slide) {
  const canonicalText = normalize(slide.text)
    .replace(/student|instructor|nurs|304|copyright|university|washington/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return `${slide.week || "unknown"}:${canonicalText}`;
}

function getSlideQualityScore(slide) {
  const deckPenalty = /student/i.test(slide.deckTitle) ? 0.15 : 0;
  const instructorBonus = /instructor/i.test(slide.deckTitle) ? 0.1 : 0;
  return Math.min(slide.textLength, 1400) / 1000 + tokenize(slide.text).length / 100 + instructorBonus - deckPenalty;
}

function readZipEntries(zipPath) {
  const data = fs.readFileSync(zipPath);
  const entries = new Map();
  let offset = 0;
  while (offset < data.length) {
    const signature = data.readUInt32LE(offset);
    if (signature === 0x04034b50) {
      const compression = data.readUInt16LE(offset + 8);
      const compressedSize = data.readUInt32LE(offset + 18);
      const fileNameLength = data.readUInt16LE(offset + 26);
      const extraLength = data.readUInt16LE(offset + 28);
      const fileName = data.slice(offset + 30, offset + 30 + fileNameLength).toString("utf8");
      const start = offset + 30 + fileNameLength + extraLength;
      const compressed = data.slice(start, start + compressedSize);
      const content = compression === 0
        ? compressed
        : zlib.inflateRawSync(compressed);
      entries.set(fileName, content);
      offset = start + compressedSize;
    } else if (signature === 0x02014b50 || signature === 0x06054b50) {
      break;
    } else {
      offset += 1;
    }
  }
  return entries;
}

function extractRelationships(xml) {
  const rels = new Map();
  for (const match of xml.matchAll(/<Relationship[^>]+Id="([^"]+)"[^>]+Target="([^"]+)"[^>]*\/>/g)) {
    rels.set(match[1], match[2]);
  }
  return rels;
}

function extractSlideText(xml) {
  const text = [...xml.matchAll(/<a:t>([\s\S]*?)<\/a:t>/g)]
    .map((match) => decodeXml(match[1]))
    .join(" ");
  return text.replace(/\s+/g, " ").trim();
}

function decodeXml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function getSlideTitle(text, deckTitle, slideNumber) {
  const title = text.split(/\s{2,}|[.!?]\s/).find((part) => part.trim().length >= 4) || text || `${deckTitle} slide ${slideNumber}`;
  return title.trim().slice(0, 110);
}

function extractWeek(filePath) {
  const match = filePath.match(/week-(\d+)/i) || filePath.match(/(?:^|[^\d])0?(\d)[-\s]*W\d/i);
  return match ? Number(match[1]) : null;
}

function matchQuestionsToSlides(questions, slides) {
  const searchableSlides = slides
    .filter((slide) => slide.textLength >= 45)
    .map((slide) => ({ ...slide, tokens: new Set(tokenize(slide.text)) }));
  const documentFrequency = buildDocumentFrequency(searchableSlides);
  const questionMatches = new Map();

  const updatedQuestions = questions.map((question) => {
    const weightedTerms = getQuestionWeightedTerms(question);
    const candidates = getCandidateSlides(question, searchableSlides);
    const scored = candidates
      .map((slide) => ({
        slide,
        score: scoreSlide(question, weightedTerms, slide, documentFrequency, searchableSlides.length),
      }))
      .filter((item) => item.score >= 10)
      .sort((a, b) => b.score - a.score);

    const topScore = scored[0]?.score ?? 0;
    const selectedSlides = scored
      .filter((item) => item.score >= Math.max(10, topScore * 0.55))
      .slice(0, 3)
      .map((item) => item.slide);
    const selected = addContextSlides(selectedSlides, scored, searchableSlides)
      .slice(0, 3)
      .map((slide) => slide.id);
    questionMatches.set(question.id, selected);
    return { ...question, slideRefs: selected };
  });

  const usedIds = new Set(updatedQuestions.flatMap((question) => question.slideRefs ?? []));
  const publicSlides = slides
    .filter((slide) => usedIds.has(slide.id))
    .map(({ tokens, slideFileNumber, previewIndex, ...slide }) => slide)
    .sort((a, b) => a.week - b.week || a.deckTitle.localeCompare(b.deckTitle) || a.slideNumber - b.slideNumber);

  return { questions: updatedQuestions, slides: publicSlides, questionMatches };
}

function addContextSlides(selectedSlides, scored, allSlides) {
  const selected = [...selectedSlides];
  const selectedIds = new Set(selected.map((slide) => slide.id));
  const topSlides = selectedSlides.slice(0, 2);

  for (const slide of topSlides) {
    if (selected.length >= 3) break;
    const neighbors = allSlides
      .filter((candidate) => {
        if (selectedIds.has(candidate.id)) return false;
        if (candidate.deckId !== slide.deckId) return false;
        if (candidate.subtopic !== slide.subtopic) return false;
        return Math.abs(candidate.slideNumber - slide.slideNumber) <= 2;
      })
      .sort((a, b) => Math.abs(a.slideNumber - slide.slideNumber) - Math.abs(b.slideNumber - slide.slideNumber));

    for (const neighbor of neighbors) {
      const ranked = scored.find((item) => item.slide.id === neighbor.id);
      if (ranked && ranked.score < 4) continue;
      selected.push(neighbor);
      selectedIds.add(neighbor.id);
      break;
    }
  }

  return selected;
}

function getCandidateSlides(question, slides) {
  const sameWeek = slides.filter((slide) => question.week && slide.week === question.week);
  const sameWeekSubtopic = sameWeek.filter((slide) => slide.subtopic === question.subtopic);
  const subtopic = slides.filter((slide) => question.subtopic && slide.subtopic === question.subtopic);
  if (sameWeekSubtopic.length >= 3) return sameWeekSubtopic;
  if (subtopic.length >= 5) return subtopic;
  if (sameWeek.length > 0) return sameWeek;
  return subtopic;
}

function getQuestionWeightedTerms(question) {
  const weights = new Map();
  addWeightedTerms(weights, question.stem, 4);
  addWeightedTerms(weights, question.drug, 7);
  addWeightedTerms(weights, question.correctAnswers?.join(" "), 6);
  addWeightedTerms(weights, (question.prompts ?? []).flatMap((prompt) => [prompt.prompt, prompt.answer]).join(" "), 5);
  addWeightedTerms(weights, (question.blanks ?? []).flatMap((blank) => [blank.label, ...blank.answers]).join(" "), 5);
  addWeightedTerms(weights, question.options?.join(" "), 1);
  addWeightedTerms(weights, question.rationale, 1.5);
  return weights;
}

function addWeightedTerms(weights, text, weight) {
  for (const token of tokenize(text)) {
    weights.set(token, (weights.get(token) ?? 0) + weight);
  }
}

function tokenize(text) {
  return normalize(text ?? "")
    .replace(/[^a-z0-9+/.-]+/g, " ")
    .split(/\s+/)
    .map((token) => token.replace(/^[^a-z0-9]+|[^a-z0-9]+$/g, ""))
    .filter((token) => token.length >= 4 || /^(abg|ace|arb|ckd|copd|dvt|gfr|hctz|inr|ppi|pt|tpa)$/i.test(token))
    .filter((token) => !STOPWORDS.has(token));
}

function buildDocumentFrequency(slides) {
  const df = new Map();
  for (const slide of slides) {
    for (const token of slide.tokens) df.set(token, (df.get(token) ?? 0) + 1);
  }
  return df;
}

function scoreSlide(question, weightedTerms, slide, documentFrequency, slideCount) {
  let score = 0;
  for (const [token, weight] of weightedTerms.entries()) {
    if (!slide.tokens.has(token)) continue;
    const idf = Math.log(1 + slideCount / (1 + (documentFrequency.get(token) ?? 0)));
    score += weight * Math.max(1, idf);
  }
  if (question.week && slide.week === question.week) score *= 1.35;
  if (question.subtopic && slide.subtopic === question.subtopic) score *= 1.25;
  if (slide.textLength < 90) score *= 0.75;
  return score;
}

function exportReferencedSlides(slides) {
  const missing = slides.filter((slide) => !fs.existsSync(path.join(repoRoot, slide.image)));
  console.log(`Exporting ${missing.length} missing slide screenshots at ${previewWidth}px...`);
  const byDeck = groupBy(missing, (slide) => slide.deckPath);
  let exported = 0;
  for (const [deckPath, deckSlides] of byDeck.entries()) {
    const sourcePptx = path.resolve(repoRoot, deckPath);
    const preview = createDeckPreview(sourcePptx);
    try {
      const { slideWidth, slideHeight } = getPreviewDimensions(preview.htmlPath);
      for (const slide of deckSlides) {
        exported += 1;
        process.stdout.write(`\r${exported}/${missing.length} ${slide.id}`.slice(0, 100));
        exportSlideFromPreview(preview.htmlPath, slide, slideWidth, slideHeight);
      }
    } finally {
      fs.rmSync(preview.tempDir, { recursive: true, force: true });
    }
  }
  if (missing.length > 0) process.stdout.write("\n");
}

function cleanupUnreferencedImages(slides) {
  const keep = new Set(slides.map((slide) => path.basename(slide.image)));
  for (const entry of fs.readdirSync(imageDir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".png") && !keep.has(entry.name)) {
      fs.rmSync(path.join(imageDir, entry.name));
    }
  }
}

function getPreviewDimensions(htmlPath) {
  const html = fs.readFileSync(htmlPath, "utf8");
  const match = html.match(/div\.slide,\s*div\.loading-slide\s*\{\s*width:\s*(\d+);\s*height:\s*(\d+);/);
  return {
    slideWidth: match ? Number(match[1]) : 720,
    slideHeight: match ? Number(match[2]) : 405,
  };
}

function exportSlideFromPreview(previewHtmlPath, slide, slideWidth, slideHeight) {
  if (!slide.previewIndex) throw new Error(`Slide ${slide.id} does not have a preview index`);
  if (!fs.existsSync(chromePath)) throw new Error(`Chrome not found at ${chromePath}`);

  const outPath = path.join(repoRoot, slide.image);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const renderHtml = path.join(path.dirname(previewHtmlPath), `${slide.id}.html`);
  const chromeProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), "nurs304-chrome-"));
  const height = Math.round(previewWidth * (slideHeight / slideWidth));
  const scale = previewWidth / slideWidth;
  const html = `${markPreviewSlideForRendering(fs.readFileSync(previewHtmlPath, "utf8"), slide.previewIndex)}
<style>
html, body { margin:0 !important; padding:0 !important; width:${previewWidth}px !important; height:${height}px !important; overflow:hidden !important; background:white !important; }
body > div.slide { display:none !important; margin:0 !important; box-shadow:none !important; transform:scale(${scale}); transform-origin:top left; }
body > div.slide.render-target { display:block !important; }
</style>`;
  fs.writeFileSync(renderHtml, html);
  try {
    runChromeScreenshot(renderHtml, outPath, previewWidth, height, chromeProfileDir);
    if (!fs.existsSync(outPath)) throw new Error(`Chrome did not generate ${outPath}`);
  } finally {
    fs.rmSync(chromeProfileDir, { recursive: true, force: true });
  }
}

function markPreviewSlideForRendering(html, previewIndex) {
  let count = 0;
  const marked = html.replace(/<div class="slide"/g, (match) => {
    count += 1;
    return count === previewIndex ? '<div class="slide render-target"' : match;
  });
  if (count < previewIndex) {
    throw new Error(`Preview only contains ${count} slides; cannot render slide ${previewIndex}`);
  }
  return marked;
}

function runChromeScreenshot(renderHtml, outPath, width, height, profileDir) {
  let lastError = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    fs.rmSync(outPath, { force: true });
    try {
      execFileSync(chromePath, [
        "--headless=new",
        "--disable-gpu",
        "--disable-background-networking",
        "--disable-extensions",
        "--hide-scrollbars",
        "--run-all-compositor-stages-before-draw",
        `--user-data-dir=${profileDir}`,
        `--screenshot=${outPath}`,
        `--window-size=${width},${height}`,
        `file://${renderHtml}`,
      ], { stdio: "ignore", timeout: 8000, killSignal: "SIGKILL" });
      return;
    } catch (error) {
      if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) return;
      lastError = error;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 400 * attempt);
    }
  }
  throw lastError;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

main();
