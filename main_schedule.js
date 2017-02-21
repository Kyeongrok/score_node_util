/*
1.url 추출
2.url로 파일을 만듬
3.excel로 저장
*/

var FileHandler = require('./FileHandler.js');

const statsUrlFormats = require("./statsUrlFormats.js");

statsBasketballScheduleUrl = statsUrlFormats.getBasketballScheduleUrl("2017-02-28", "2017-03-31");
console.log(statsBasketballScheduleUrl);

statsBaseballMlbScheduleUrl = statsUrlFormats.getBaseballMlbScheduleUrl("2017-02-28", "2017-03-31");
console.log(statsBaseballMlbScheduleUrl)

statsBaseballNpbScheduleUrl = statsUrlFormats.getBaseballNpbScheduleUrl("2017-02-28", "2017-03-31");
console.log(statsBaseballNpbScheduleUrl)


//파일을 연다
var testDataLocation = "./data/";
var fh = new FileHandler(testDataLocation);
var fileList = fh.fileList;
//console.log(fileList);

var string = fh.getFileContentsString(testDataLocation + "stats_mlb_schedule_170221_170331.json");
var json = fh.getJsonObject(string);


let events = json['apiResults'][0]['league']['season']['eventType'][0]['events'];

for (var event of events){
  //console.log("-----");
  //console.log(event);

}
