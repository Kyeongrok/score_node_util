/*
/*
1.url 추출
2.url로 파일을 만듬
3.excel로 저장
*/

let FileHandler = require('./handler/FileHandler.js');
const excelExporter = require("./exporter/ExcelExporter.js");
const crawler = require("./crawler/crawler.js");
const statsUrlFormats = require("./statsUrlFormats.js");

let basePath = "c:/git_bitbucket/score_node_util";
let testDataLocation = basePath + "/data/";
let fh = new FileHandler(testDataLocation);

let statsBasketballScheduleUrl = statsUrlFormats.getBasketballScheduleUrl("2017-02-28", "2017-03-31");
let statsBaseballNpbScheduleUrl = statsUrlFormats.getBaseballNpbScheduleUrl("2017-04-01", "2017-04-30");
let statsFootballLiveUrl = statsUrlFormats.getFootballLiveUrl("123456");

let scheduleExporter = (string)=>excelExporter.scheduleExport(string, targetFileName, sheetName);

const statsScheduleFileSave = (url, targetFileName, sheetName) => {
    let scheduleExporter = (string)=>excelExporter.scheduleExport(string, targetFileName, sheetName);
    crawler.parse(url, scheduleExporter);
};
let statsBaseballMlbScheduleUrl = statsUrlFormats.getBaseballMlbScheduleUrl("2017-04-01", "2017-04-30");


var npbScheduleString = fh.getFileContentsString(testDataLocation + "baseball/" +"stats_mlb_schedule_04.json");
excelExporter.scheduleExport(npbScheduleString, "stats_mlb_schedule_04.xlsx", "sheet1");

