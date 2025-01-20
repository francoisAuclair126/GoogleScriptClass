    function makeNewOne(){
      const id = '16nnQqCLVpEgv70f-jYTICQZfCYDeNqa1foyf4YXkpFg';
      const ss = SpreadsheetApp.openById(id);
      const sheets = ss.getSheets();
      Logger.log(sheets);
      const newName = 'Sheet New';
      let sheet = ss.getSheetByName(newName);
      if(sheet == null){
        sheet = ss.insertSheet();
        sheet.setName(newName);
      }
      Logger.log(sheet.getIndex());
     
    }