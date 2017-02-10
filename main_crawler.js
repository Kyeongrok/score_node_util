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

const apiKey = "hrzct5ze45rs6vd5f7nuuyfn"
const secret = "FUcabTvbbG"
//eventid, apikey, signature
const footballLiveFormat = "http://api.stats.com/v1/stats/soccer/epl/events/%s/?accept=json&linescore=true&box=true&pbp=true&languageId=15&api_key=%s&sig=%s"

//sha256으로 encoding한다.
var signature = SHA256(apiKey + secret +  Math.floor((new Date().getTime()) / 1000) )

//2.parse를 호출한다. callback으로 fileWriter를 넘긴다.
setInterval(()=>{
  //1.주소를 만든다
  let url = util.format(footballLiveFormat, "1643374", apiKey, signature)
  console.log(url)
  crawler.parse(url, "./saved/", crawler.writeFile)
}, 1000); //여기 1000이 1초이다. 10초로 하고 싶으면 10000으로 하면 된다.
