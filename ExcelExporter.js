const fs = require('fs');
const Excel = require('exceljs');
const FileHandler = require('./FileHandler.js');

let ExcelExporter = {

  extractJsonList:(events)=>{
    let eventList = [];

    for (var event of events){

      //utc +9하기
      let date = new Date(event['startDate'][1]['full'])
      date.setHours(date.getHours() + 9)

      let item = {
        "eventId":event['eventId']
        ,"home_name":event['teams'][0]['location']
        ,"away_name":event['teams'][1]['location']
        ,"year":event['startDate'][1]['year']
        ,"month":event['startDate'][1]['month']
        ,"date":event['startDate'][1]['date']
        ,"hour":event['startDate'][1]['hour']
        ,"minute":event['startDate'][1]['minute']
        ,"full":date.toGMTString()
      }

      eventList.push(item);
    }
    return eventList;
  },

  exportToExcel:(fileName, sheetName, list)=>{
    var workbook = new Excel.Workbook();
    var worksheet = workbook.addWorksheet(sheetName);
    var columnList = []

    //header만듬
    for(var field in list[0]){
      columnList.push({ header: field});
    }
    worksheet.columns = columnList;

    //데이터 넣음
    for (var i = 0 ; i < list.length ;i++){
      var item = list[i];
      var row = [];
      for(var field in item){
        row.push(item[field]);
      }
      worksheet.addRow(row);
    }
    workbook.xlsx.writeFile(fileName);
  },

  scheduleExport:function(string, fileName, sheetName){
    var fh = new FileHandler("./");
    var json = fh.getJsonObject(string);
    let events = json['apiResults'][0]['league']['season']['eventType'][0]['events'];
    let eventList = ExcelExporter.extractJsonList(events);

    //excel로 출력
    ExcelExporter.exportToExcel(fileName, sheetName, eventList);

  },

}

module.exports = ExcelExporter;
