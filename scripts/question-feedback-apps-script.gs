const SHEET_NAME = "Question feedback";

function doPost(event) {
  const sheet = getFeedbackSheet_();
  const payload = parsePayload_(event);

  sheet.appendRow([
    new Date(),
    payload.reportedAt || "",
    payload.questionId || "",
    payload.week || "",
    payload.topic || "",
    payload.category || "",
    payload.subtopic || "",
    payload.type || "",
    payload.stem || "",
    JSON.stringify(payload.selectedAnswers || []),
    JSON.stringify(payload.correctAnswers || []),
    JSON.stringify(payload.options || []),
    payload.rationale || "",
    payload.pageUrl || "",
    payload.userAgent || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getFeedbackSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Received At",
      "Reported At",
      "Question ID",
      "Week",
      "Topic",
      "Category",
      "Subtopic",
      "Type",
      "Stem",
      "Selected Answers",
      "Correct Answers",
      "Options",
      "Rationale",
      "Page URL",
      "User Agent",
    ]);
  }
  return sheet;
}

function parsePayload_(event) {
  if (!event || !event.postData || !event.postData.contents) return {};
  try {
    return JSON.parse(event.postData.contents);
  } catch (error) {
    return { stem: event.postData.contents };
  }
}
