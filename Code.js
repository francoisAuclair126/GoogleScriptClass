function test2(){
  const url = 'https://docs.google.com/spreadsheets/d/18RllQQmP_jpqn16yUnxLdE9z9zVpfHShTEdC6Z0jv9A/edit?gid=700920426#gid=700920426'
  const ss = SpreadsheetApp.openByUrl;
  //const sheets = ss.getSheets();
  const sheet= ss.getName;
}





function open1() {
  const id = '18RllQQmP_jpqn16yUnxLdE9z9zVpfHShTEdC6Z0jv9A'
  const ss = SpreadsheetApp.openById(id);
  const sheets = ss.getSheets();
  sheets.forEach((sheet,index)=>{
    console.log(sheet.getSheetName());
    sheet.setName('updated' + index);
  })
  
}
