const SHEET_ID = '1zUAhO5hEqOainV5xvwKHAjrmtStxP5z0JpYrDXyfJtY';
const TAB_NAME = 'Responses';

function setupSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(TAB_NAME);
  if (!sheet) sheet = ss.insertSheet(TAB_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Contact choice', 'Contact detail', 'Message', 'Consent']);
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(TAB_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(TAB_NAME);
    sheet.appendRow(['Timestamp', 'Contact choice', 'Contact detail', 'Message', 'Consent']);
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.contactType || '',
    data.contact || '',
    data.message || '',
    data.consent ? 'Yes' : 'No'
  ]);
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
