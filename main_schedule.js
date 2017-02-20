//1번 작업
//sig를 만듬
//sig를 url에 붙허넣음
//request함
//파일로 저장함

//2번 작업
//파일을 열음
//excel파일로 출력함

const statsUrlFormats = require("./statsUrlFormats.js");
//console.log(statsUrlFormats['basketballScheduleFormat'])
console.log(statsUrlFormats.getBasketballScheduleUrl("2017-02-28", "2017-03-31"))
