/*
1.url 추출
2.url로 파일을 만듬
3.excel로 저장
*/

const statsUrlFormats = require("./statsUrlFormats.js");

statsBasketballScheduleUrl = statsUrlFormats.getBasketballScheduleUrl("2017-02-28", "2017-03-31");
console.log(statsBasketballScheduleUrl);
