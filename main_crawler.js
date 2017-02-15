

const scheduleList = [
    {"eventId":"1643377", "sYear":"2017", "sMonth":"1", "sDate":"11"
        , "sHour":"23"  ,"sMinute":"0"  ,"sSecond":"0"
        , "eYear":"2017", "eMonth":"1", "eDate":"12"
        , "eHour":"3"  ,"eMinute":"0"  ,"eSecond":"0"
    },
    {"eventId":"1643371", "sYear":"2017", "sMonth":"1", "sDate":"13"
        , "sHour":"20"  ,"sMinute":"0"  ,"sSecond":"0"
        , "eYear":"2017", "eMonth":"1", "eDate":"13"
        , "eHour":"23"  ,"eMinute":"0"  ,"eSecond":"0"
    },

]

const crawler = require("./crawler.js");
const util = require("util");
var sha256 = require('js-sha256');
const fs = require("fs");
var TelegramBot = require('node-telegram-bot-api');
const dateTime = require("node-datetime");

const apiKey = "hrzct5ze45rs6vd5f7nuuyfn"
const secret = "FUcabTvbbG"
//eventid, apikey, signature
const footballLiveFormat = "http://api.stats.com/v1/stats/soccer/epl/events/%s/?accept=json&linescore=true&pbp=true&languageId=15&api_key=%s&sig=%s"

const basketballLiveFormat = "http://api.stats.com/v1/stats/basketball/nba/events/%s?languageId=15&pbp=true&accept=json&api_key=%s&sig=%s";
const footballScheduleFormat = "http://api.stats.com/v1/stats/soccer/epl/scores/?date=%s&accept=json&api_key=%s&sig=%s";

var token = '239008772:AAEqyNeEeJM6WGvRNOYD8S7DE8kcgQBD5qM';
var bot = new TelegramBot(token, { polling: false });

//sha256으로 encoding한다.

var beforeRes = "";
var beforeMessage = "";
var beforePbpLength = 0;

let serviceFn = (res)=>{

  let fileName = "./saved/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
  let json = JSON.parse(res);
  let selectedEvent = json['apiResults'][0]['league']['season']['eventType'][0]['events'][0];
  let teams = selectedEvent['teams'];
  let pbp = selectedEvent['pbp'];
  let eventStatus = selectedEvent['eventStatus'];
  let minutes = eventStatus['time']['minutes'];
  let seconds = eventStatus['time']['seconds'];

  // let boxscores = selectedEvent['boxscores'];
  // let boxscores_1 = boxscores[0];
  // let boxscores_2 = boxscores[1];
  //
  // let teamStats_1 = boxscores_1['teamStats'];
  // let teamStats_2 = boxscores_2['teamStats'];

  // let yellowCards_1 = teamStats_1['yellowCards']
  // let yellowCards_2 = teamStats_2['yellowCards']
  // let redCards_1 = teamStats_1['redCards']
  // let redCards_2 = teamStats_2['redCards']

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
      let signature = getSignature(apiKey, secret);
      let url = util.format(footballLiveFormat, schedule['eventId'], apiKey, signature)
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

const getSignature = (apiKey, secret)=>{

    return sha256(apiKey + secret +  Math.floor((new Date().getTime()) / 1000) );
}

console.log(new Date());
//let hello = getSetInterval(scheduleList[1]);

//1675115

var sig = getSignature(apiKey, secret);

//http://api.stats.com/v1/stats/basketball/nba/events/1675115?languageId=15&pbp=true&accept=json&api_key=hrzct5ze45rs6vd5f7nuuyfn&sig=f307011ab653f5cdf221d709b67ec87e5aa9b9285c06fd7d5d4790cd9f3ad03b
console.log(sig);
var url = util.format(basketballLiveFormat, 1675115, apiKey, sig);
console.log(url);
crawler.parse(url, serviceFn );
