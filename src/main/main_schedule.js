/*
/*
1.url 추출
2.url로 파일을 만듬
3.excel로 저장
*/

let FileHandler = require('./handler/FileHandler.js');
const excelExporter = require("./exporter/ExcelExporter.js");
const crawler = require("./crawler/crawlerMaker.js");
const statsUrlFormats = require("./statsUrlFormats.js");

// const basePath = "c:/git_bitbucket/score_node_util";
const basePath = "c:/git/sports-service/test_data";
const testDataLocation = basePath + "/basketball/stats/schedule/";
const fh = new FileHandler(testDataLocation);

let statsBasketballScheduleUrl = statsUrlFormats.getBasketballScheduleUrl("2017-02-28", "2017-03-31");

let scheduleExporter = (string)=>excelExporter.scheduleExport(string, targetFileName, sheetName);

const statsScheduleFileSave = (url, targetFileName, sheetName) => {
    let scheduleExporter = (string)=>excelExporter.scheduleExport(string, targetFileName, sheetName);
    crawler.parse(url, scheduleExporter);
};
let statsBaseballMlbScheduleUrl = statsUrlFormats.getBaseballMlbScheduleUrl("2017-04-01", "2017-04-30");
let statsHockeyNhlScheduleUrl = statsUrlFormats.getHockeyNhlLiveUrl("2017-04-01", "2017-04-30");
let statsBasketballNbaScheduleUrl = statsUrlFormats.getBasketballScheduleUrl("2017-04-01", "2017-04-30");

// let npbScheduleString = fh.getFileContentsString(testDataLocation + "baseball/" +"stats_npb_schedule_04.json");
//excelExporter.scheduleExport(npbScheduleString, "stats_npb_schedule_04.xlsx", "sheet1");

// let nhlScheduleString = fh.getFileContentsString(testDataLocation + "icehockey/" +"stats_icehockey_04_po.json");
//excelExporter.scheduleExport(nhlScheduleString, "stats_icehockey_04_po.xlsx", "sheet1");

let nbaScheduleString = fh.getFileContentsString(testDataLocation +"2017-2018.json");
excelExporter.scheduleExport(nbaScheduleString, "stats_nba_2017_regular.xlsx", "sheet1");

console.log(statsHockeyNhlScheduleUrl);
console.log(statsBaseballMlbScheduleUrl);
console.log(statsBasketballNbaScheduleUrl);

console.log(nbaScheduleString);

