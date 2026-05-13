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
  /^questions?\b/,
  /^references?\b/,
  /^resources?\b/,
  /^summary\b/,
  /^thank you\b/,
  /^today'?s (agenda|objectives?|plan)\b/,
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
  const slides = prepareSlides(extracted);
  const matched = matchQuestionsToSlides(questions, slides);
  fs.writeFileSync(questionsPath, `${JSON.stringify(matched.questions, null, 2)}\n`);
  fs.writeFileSync(slidesPath, `${JSON.stringify(matched.slides, null, 2)}\n`);

  const slideById = new Map(slides.map((slide) => [slide.id, slide]));
  const referenced = [...new Set(matched.questions.flatMap((question) => question.slideRefs ?? []))].sort();
  const referencedSlides = referenced.map((id) => slideById.get(id)).filter(Boolean);
  cleanupUnreferencedImages(referencedSlides);
  exportReferencedSlides(referencedSlides);

  console.log(`Slides extracted: ${extracted.length}`);
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

function prepareSlides(slides) {
  const contentSlides = slides.filter(isContentSlide);
  const byCanonicalContent = new Map();
  for (const slide of contentSlides) {
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
    const selected = scored
      .filter((item) => item.score >= Math.max(10, topScore * 0.55))
      .slice(0, 3)
      .map((item) => item.slide.id);
    questionMatches.set(question.id, selected);
    return { ...question, slideRefs: selected };
  });

  const usedIds = new Set(updatedQuestions.flatMap((question) => question.slideRefs ?? []));
  const publicSlides = slides
    .filter((slide) => usedIds.has(slide.id))
    .map(({ tokens, slideFileNumber, ...slide }) => slide)
    .sort((a, b) => a.week - b.week || a.deckTitle.localeCompare(b.deckTitle) || a.slideNumber - b.slideNumber);

  return { questions: updatedQuestions, slides: publicSlides, questionMatches };
}

function getCandidateSlides(question, slides) {
  const sameWeek = slides.filter((slide) => question.week && slide.week === question.week);
  const subtopic = sameWeek.filter((slide) => slide.subtopic === question.subtopic);
  if (subtopic.length >= 5) return subtopic;
  if (sameWeek.length > 0) return sameWeek;
  return slides.filter((slide) => slide.subtopic === question.subtopic);
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
  missing.forEach((slide, index) => {
    process.stdout.write(`\r${index + 1}/${missing.length} ${slide.id}`.slice(0, 100));
    exportSlide(slide);
  });
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

function exportSlide(slide) {
  const sourcePptx = path.resolve(repoRoot, slide.deckPath);
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "nurs304-slide-"));
  const tempPptx = path.join(tempDir, `${slide.id}.pptx`);
  const outPath = path.join(repoRoot, slide.image);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  createPptxWithSlideFirst(sourcePptx, tempPptx, slide.slideFileNumber);
  execFileSync("qlmanage", ["-t", "-s", String(previewWidth), "-o", tempDir, tempPptx], { stdio: "ignore" });
  const generated = `${tempPptx}.png`;
  if (!fs.existsSync(generated)) throw new Error(`Quick Look did not generate ${generated}`);
  fs.renameSync(generated, outPath);
  fs.rmSync(tempDir, { recursive: true, force: true });
}

function createPptxWithSlideFirst(sourcePptx, destinationPptx, slideFileNumber) {
  const entries = readZipEntries(sourcePptx);
  const presentationPath = "ppt/presentation.xml";
  const rels = extractRelationships(entries.get("ppt/_rels/presentation.xml.rels").toString("utf8"));
  const slideTarget = `slides/slide${slideFileNumber}.xml`;
  const targetRid = [...rels.entries()].find(([, target]) => target === slideTarget)?.[0];
  if (!targetRid) throw new Error(`Could not find relationship for ${slideTarget} in ${sourcePptx}`);
  const presentation = entries.get(presentationPath).toString("utf8");
  const slideItems = [...presentation.matchAll(/<p:sldId[^>]+\/>/g)].map((match) => match[0]);
  const targetItem = slideItems.find((item) => item.includes(`r:id="${targetRid}"`));
  const reordered = [targetItem, ...slideItems.filter((item) => item !== targetItem)].join("");
  entries.set(
    presentationPath,
    Buffer.from(presentation.replace(/<p:sldIdLst>[\s\S]*?<\/p:sldIdLst>/, `<p:sldIdLst>${reordered}</p:sldIdLst>`))
  );
  writeZipEntries(destinationPptx, entries);
}

function writeZipEntries(zipPath, entries) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "nurs304-pptx-zip-"));
  for (const [name, data] of entries.entries()) {
    if (name.endsWith("/")) continue;
    const filePath = path.join(tempDir, name);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, data);
  }
  execFileSync("zip", ["-qr", zipPath, "."], { cwd: tempDir, stdio: "ignore" });
  fs.rmSync(tempDir, { recursive: true, force: true });
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

main();
