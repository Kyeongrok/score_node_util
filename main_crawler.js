/*
eventid
1643374, Arsenal vs Hull City, 2017, 2, 11, 12, 30
1643377, Manchester United vs Watford, 2017, 2, 11, 15, 0
1643378, Middlesbrough vs Everton, 2017, 2, 11, 15, 0
1643379, Stoke City vs Crystal Palace, 2017, 2, 11, 15, 0
1643380, Sunderland vs Southampton, 2017, 2, 11, 15, 0
1643382, West Ham United vs West Bromwich Albion, 2017, 2, 11, 15, 0
1643376, Liverpool vs Tottenham Hotspur, 2017, 2, 11, 17, 30
*/
const crawler = require("./crawler.js");
const util = require("util");
const SHA256 = require("crypto-js/sha256");
const fs = require("fs");
var TelegramBot = require('node-telegram-bot-api');
const dateTime = require("node-datetime");

const apiKey = "hrzct5ze45rs6vd5f7nuuyfn"
const secret = "FUcabTvbbG"
//eventid, apikey, signature
const footballLiveFormat = "http://api.stats.com/v1/stats/soccer/epl/events/%s/?accept=json&linescore=true&box=true&pbp=true&languageId=15&api_key=%s&sig=%s"

var token = '239008772:AAEqyNeEeJM6WGvRNOYD8S7DE8kcgQBD5qM';
var bot = new TelegramBot(token, { polling: false });

//sha256으로 encoding한다.
var signature = SHA256(apiKey + secret +  Math.floor((new Date().getTime()) / 1000) )

var beforeRes = "";
var beforeMessage = "";

//2.parse를 호출한다. callback으로 fileWriter를 넘긴다.
let getSetInterval = ()=>{
    return setInterval(()=>{
      //1.주소를 만든다
      let url = util.format(footballLiveFormat, "1643374", apiKey, signature)
      console.log(url);
      crawler.parse(url, (res)=>{

        if(beforeRes != res){
          let fileName = "C:/Users/kyeongrok.kim/Desktop/saved/" + dateTime.create().format('Y-m-d-H-M-S') + ".json";
          let json = JSON.parse(res);
          let teams = json['apiResults'][0]['league']['season']['eventType'][0]['events'][0]['teams'];

          let team_1 = teams[0];
          let team_2 = teams[1];
          console.log(teams);
          let message = team_1['displayName'] + " linescores:" + team_1['linescores'] + team_2['displayName'] + " linescores:" + team_2['linescores'];
          //crawler.writeFile(res, fileName);
          console.log(beforeMessage);
          console.log(message);
          console.log(beforeMessage != message);
          if( beforeMessage != message){
            bot.sendMessage("-202009157", JSON.stringify(message));
            beforeMessage = message;
          }
        }



      });
    }, 1000); //여기 1000이 1초이다. 10초로 하고 싶으면 10000으로 하면 된다.
}

let hello = getSetInterval();
//47960673318771
