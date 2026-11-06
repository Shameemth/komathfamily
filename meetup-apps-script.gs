// Komath Family Meetup - Google Apps Script (paste into script.google.com)
function sh_(){var s=SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RSVP');
  if(!s){s=SpreadsheetApp.getActiveSpreadsheet().insertSheet('RSVP');s.appendRow(['key','name','status','time']);}return s;}
function doGet(){var v=sh_().getDataRange().getValues(),o=[];
  for(var i=1;i<v.length;i++)o.push({key:v[i][0],name:v[i][1],status:v[i][2],t:v[i][3]});
  return ContentService.createTextOutput(JSON.stringify({rsvp:o})).setMimeType(ContentService.MimeType.JSON);}
function doPost(e){var l=LockService.getScriptLock();l.waitLock(15000);
  try{var d=JSON.parse(e.postData.contents),s=sh_(),v=s.getDataRange().getValues(),r=-1;
    if(d.status!=='yes'&&d.status!=='no'&&d.status!=='clear')throw new Error('bad status');
    for(var i=1;i<v.length;i++)if(v[i][0]===d.key){r=i+1;break;}
    if(d.status==='clear'){if(r>0)s.deleteRow(r);}
    else{var row=[String(d.key).slice(0,200),String(d.name).slice(0,200),d.status,new Date().toISOString()];
      if(r>0)s.getRange(r,1,1,4).setValues([row]);else s.appendRow(row);}
  }finally{l.releaseLock();}
  return ContentService.createTextOutput('{"ok":true}').setMimeType(ContentService.MimeType.JSON);}
