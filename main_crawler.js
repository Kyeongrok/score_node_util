const statsUrlFormats = require("./statsUrlFormats.js");
const crawler = require("./crawler/crawler.js");
const fs = require("fs");
const TelegramBot = require('node-telegram-bot-api');
const dateTime = require("node-datetime");
const messageMakers = require("./maker/statsTelegramMessageMakers.js");
const scheduleList = require("./scheduleList");

var bot = new TelegramBot('239008772:AAEqyNeEeJM6WGvRNOYD8S7DE8kcgQBD5qM', { polling: false });

var beforeRes = "";
var beforeMessage = "";
var beforePbpLength = 0;


let serviceFn1 = (res)=>{
  let fileName = "./saved/baseball/mlb/1/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
  crawler.writeFile(res, fileName);
};
let serviceFn2 = (res)=>{
  let fileName = "./saved/baseball/mlb/2/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
  crawler.writeFile(res, fileName);
};
let serviceFn3 = (res)=>{
  let fileName = "./saved/baseball/mlb/3/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
  crawler.writeFile(res, fileName);
};
let serviceFn4 = (res)=>{
  let fileName = "./saved/baseball/mlb/4/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
  crawler.writeFile(res, fileName);
};
let serviceFn5 = (res)=>{
  let fileName = "./saved/baseball/mlb/5/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
  crawler.writeFile(res, fileName);
};
let serviceFn6 = (res)=>{
  let fileName = "./saved/baseball/mlb/6/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
  crawler.writeFile(res, fileName);
};
let serviceFn7 = (res)=>{
  let fileName = "./saved/baseball/mlb/7/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
  crawler.writeFile(res, fileName);
};
let serviceFn8 = (res)=>{
  let fileName = "./saved/baseball/mlb/8/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
  crawler.writeFile(res, fileName);
};

let getUrl2 = (eventId)=>("http://statsapi.mlb.com/api/v1/game/" +eventId+ "/feed/live?language=en" );

//2.parse를 호출한다. callback으로 fileWriter를 넘긴다.
let getSetInterval = (schedule, serviceFn, urlGetter)=>{
    //1.주소를 만든다
    return setInterval(()=>{
      let url = urlGetter( schedule['eventId'] );
      let nowDate = new Date();
      let startDate = new Date(Date.UTC(schedule['sYear'], parseInt(schedule['sMonth'])-1, schedule['sDate'], schedule['sHour'],schedule['sMinute'],schedule['sSecond']));
      let endDate = new Date(Date.UTC(schedule['eYear'], parseInt(schedule['eMonth'])-1, schedule['eDate'], schedule['eHour'],schedule['eMinute'],schedule['eSecond']));

      console.log("nowDate:" +nowDate.toISOString()+"  startDate:" +startDate.toISOString());
      console.log("will be parsed:"+(startDate < nowDate && nowDate < endDate));
      if(startDate < nowDate && nowDate < endDate ){
          try{
            crawler.parse(url, serviceFn );
          }catch(e){
            console.log(e)
          }
      }
    }, 3000); //여기 1000이 1초이다. 10초로 하고 싶으면 10000으로 하면 된다.
};



mlb_mlb_1 = getSetInterval(scheduleList['scheduleList'][0], serviceFn1, getUrl2);
mlb_mlb_2 = getSetInterval(scheduleList['scheduleList'][1], serviceFn2, getUrl2);
mlb_mlb_3 = getSetInterval(scheduleList['scheduleList'][2], serviceFn3, getUrl2);
mlb_mlb_4 = getSetInterval(scheduleList['scheduleList'][3], serviceFn4, getUrl2);
mlb_mlb_5 = getSetInterval(scheduleList['scheduleList'][4], serviceFn5, getUrl2);
mlb_mlb_6 = getSetInterval(scheduleList['scheduleList'][5], serviceFn6, getUrl2);
mlb_mlb_7 = getSetInterval(scheduleList['scheduleList'][6], serviceFn7, getUrl2);
mlb_mlb_8 = getSetInterval(scheduleList['scheduleList'][7], serviceFn8, getUrl2);


///forever start -o /var/www/score_node_util/out.log main_crawler.js
//node /var/www/score_node_util/out.log -o /var/www/score_node_util/out.log main_crawler.js
