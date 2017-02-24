const statsUrlFormats = require("./statsUrlFormats.js");
const crawler = require("./crawler.js");
const fs = require("fs");
const TelegramBot = require('node-telegram-bot-api');
const dateTime = require("node-datetime");
const messageMakers = require("./messageMakers.js")
const scheduleList = require("./scheduleList")

var bot = new TelegramBot('239008772:AAEqyNeEeJM6WGvRNOYD8S7DE8kcgQBD5qM', { polling: false });

var beforeRes = "";
var beforeMessage = "";
var beforePbpLength = 0;

let serviceFn = (res)=>{
  //파일명 만드는 기능
  //파일로 저장하는 기능
  //let message = messageMakers.statsFootballMessageMaker(res);

  let fileName = "./saved/baseball/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
  crawler.writeFile(res, fileName);

  //
  // if(beforeMessage != message){
  //   let fileName = "./saved/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
  //   crawler.writeFile(res, fileName);
  //   console.log(message);
  //   bot.sendMessage("-202009157", message);
  //   beforeMessage = message;
  //   beforePbpLength = pbpLength;
  // }
  //
}

//2.parse를 호출한다. callback으로 fileWriter를 넘긴다.
let getSetInterval = (schedule)=>{
    //1.주소를 만든다
    return setInterval(()=>{
      let url = statsUrlFormats.getBaseballMlbLiveUrl(schedule['eventId'])
      let nowDate = new Date();
      let startDate = new Date(Date.UTC(schedule['sYear'], parseInt(schedule['sMonth'])-1, schedule['sDate'], schedule['sHour'],schedule['sMinute'],schedule['sSecond']));
      let endDate = new Date(Date.UTC(schedule['eYear'], parseInt(schedule['eMonth'])-1, schedule['eDate'], schedule['eHour'],schedule['eMinute'],schedule['eSecond']));

      console.log("nowDate:" +nowDate.toISOString()+"  startDate:" +startDate.toISOString())
      console.log("will be parsed:"+(startDate < nowDate && nowDate < endDate));
      if(startDate < nowDate && nowDate < endDate ){
          try{
            crawler.parse(url, serviceFn );
          }catch(e){
            console.log(e)
          }
      }
    }, 3000); //여기 1000이 1초이다. 10초로 하고 싶으면 10000으로 하면 된다.
}


console.log(new Date())
//console.log(scheduleList['scheduleList'][2])
console.log(statsUrlFormats.getBasketballScheduleUrl("2017-02-23", "2017-02-24"))
console.log(statsUrlFormats.getBaseballMlbLiveUrl("1705947"))

mlb_170224180500 = getSetInterval(scheduleList['scheduleList'][2]);

///forever start -o /var/www/score_node_util/out.log main_crawler.jsnode /var/www/score_node_util/out.log -o /var/www/score_node_util/out.log main_crawler.js
