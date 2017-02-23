/*
/*
1.url 추출
2.url로 파일을 만듬
3.excel로 저장
*/

var FileHandler = require('./FileHandler.js');
const excelExporter = require("./ExcelExporter.js")

const statsUrlFormats = require("./statsUrlFormats.js");

statsBasketballScheduleUrl = statsUrlFormats.getBasketballScheduleUrl("2017-02-28", "2017-03-31");
console.log(statsBasketballScheduleUrl);

statsBaseballMlbScheduleUrl = statsUrlFormats.getBaseballMlbScheduleUrl("2017-02-28", "2017-03-31");
console.log(statsBaseballMlbScheduleUrl)

statsBaseballNpbScheduleUrl = statsUrlFormats.getBaseballNpbScheduleUrl("2017-02-28", "2017-03-31");
console.log(statsBaseballNpbScheduleUrl)

statsFootballLiveUrl = statsUrlFormats.getFootballLiveUrl("123456");
console.log(statsFootballLiveUrl);

//파일을 연다
var testDataLocation = "./data/";
var fh = new FileHandler(testDataLocation);
var fileList = fh.fileList;
console.log(fileList);

//var npbSchedule = fh.getFileContentsString(testDataLocation + "stats_npb_schedule_17021_170331.json");
//var mlbSchedule = fh.getFileContentsString(testDataLocation + "stats_mlb_schedule_17021_170331.json");
//excelExporter.scheduleExport(npb, "./npb.xlsx", "test");
