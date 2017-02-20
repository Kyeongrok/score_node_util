const statsUrlFormats = require("./statsUrlFormats.js");
const crawler = require("./crawler.js");
const fs = require("fs");
var TelegramBot = require('node-telegram-bot-api');
const dateTime = require("node-datetime");

var bot = new TelegramBot('239008772:AAEqyNeEeJM6WGvRNOYD8S7DE8kcgQBD5qM', { polling: false });

var beforeRes = "";
var beforeMessage = "";
var beforePbpLength = 0;

let serviceFn = (res)=>{
  //파일명 만드는 기능
  //파일로 저장하는 기능
  //메세지 만드는 기능
  let fileName = "./saved/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";

  //json 으로 만듬
  let json = JSON.parse(res);
  let selectedEvent = json['apiResults'][0]['league']['season']['eventType'][0]['events'][0];
  let teams = selectedEvent['teams'];
  let pbp = selectedEvent['pbp'];
  let eventStatus = selectedEvent['eventStatus'];
  let minutes = eventStatus['time']['minutes'];
  let seconds = eventStatus['time']['seconds'];
  let pbpLength = pbp.length;
  let team_1 = teams[0];
  let team_2 = teams[1];
  let linescore_1 = team_1['linescores'];
  let linescore_2 = team_2['linescores'];

  let message = JSON.stringify(eventStatus) + " "
  + team_1['displayName']
  + " linescores:" + JSON.stringify(linescore_1)
  + team_2['displayName']
  + " linescores:" + JSON.stringify(linescore_2)
  + " pbp:"+ JSON.stringify(pbp[pbpLength-1]['playText'])
  //+ " yello_1:" + yellowCards_1 + " yello_2:" + yellowCards_2
  //+ " red_1:" + redCards_1 + " red_2:" + redCards_2
  //+ " teamStats_1:"+ JSON.stringify(teamStats_1)
  //+ " teamStats_2:"+ JSON.stringify(teamStats_2)
  ;

  console.log(minutes + ":" + seconds);
  if(beforeMessage != message){
    crawler.writeFile(res, fileName);
    console.log(message);
    bot.sendMessage("-202009157", message);
    beforeMessage = message;
    beforePbpLength = pbpLength;
  }
}

//2.parse를 호출한다. callback으로 fileWriter를 넘긴다.
let getSetInterval = (schedule)=>{
    return setInterval(()=>{
      //1.주소를 만든다
      let url = statsUrlFormats.getFootballLiveUrl(schedule['eventId'])
      console.log(url);
      let nowDate = new Date();
      let startDate = new Date(Date.UTC(schedule['sYear'], schedule['sMonth'], schedule['sDate'], schedule['sHour'],schedule['sMinute'],schedule['sSecond']));
      let endDate = new Date(Date.UTC(schedule['eYear'], schedule['eMonth'], schedule['eDate'], schedule['eHour'],schedule['eMinute'],schedule['eSecond']));

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


var url = statsUrlFormats.getBasketballLiveUrl(1675115);
console.log(url);
//crawler.parse(url, serviceFn );
