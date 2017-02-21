const util = require("util");
const sha256 = require('js-sha256');
const apiKey = "hrzct5ze45rs6vd5f7nuuyfn"
const secret = "FUcabTvbbG"

const formats = {
  "footballLiveFormat":"http://api.stats.com/v1/stats/soccer/epl/events/%s/?accept=json&linescore=true&pbp=true&languageId=15&api_key=%s&sig=%s"
  ,"basketballLiveFormat" : "http://api.stats.com/v1/stats/basketball/nba/events/%s?languageId=15&pbp=true&accept=json&api_key=%s&sig=%s"
  ,"footballScheduleFormat" : "http://api.stats.com/v1/stats/soccer/epl/scores/?date=%s&accept=json&api_key=%s&sig=%s"
  ,"basketballScheduleFormat" : "http://api.stats.com/v1/stats/basketball/nba/events/?languageId=15&startDate=%s&endDate=%s&accept=json&api_key=%s&sig=%s"
  ,"baseballMlbScheduleFormat" : "http://api.stats.com/v1/stats/baseball/mlb/events/?languageId=15&startDate=%s&endDate=%s&accept=json&api_key=%s&sig=%s"
  ,"baseballNpbScheduleFormat" : "http://api.stats.com/v1/stats/baseball/npb/events/?languageId=15&startDate=%s&endDate=%s&accept=json&api_key=%s&sig=%s"
}

//signature maker
const getSignature = (apiKey, secret)=>{
    return sha256(apiKey + secret +  Math.floor((new Date().getTime()) / 1000) );
}

const getFootballLiveUrl = (eventId)=>(
  util.format(formats['footballLiveFormat'], eventId, apiKey, getSignature(apiKey, secret))
)

const getBasketballScheduleUrl = (startDate, endDate)=>(
  util.format(formats['basketballScheduleFormat'], startDate, endDate, apiKey, getSignature(apiKey, secret))
)
const getBasketballLiveUrl = (eventId)=>(
  util.format(formats['basketballLiveFormat'], eventId, apiKey, getSignature(apiKey, secret))
)

const getBaseballMlbScheduleUrl = (startDate, endDate)=>(
  util.format(formats['baseballMlbScheduleFormat'], startDate, endDate, apiKey, getSignature(apiKey, secret))
)

const getBaseballNpbScheduleUrl = (startDate, endDate)=>(
  util.format(formats['baseballNpbScheduleFormat'], startDate, endDate, apiKey, getSignature(apiKey, secret))
)

module.exports = {
  getBasketballScheduleUrl:getBasketballScheduleUrl
  ,getBasketballLiveUrl:getBasketballLiveUrl
  ,getFootballLiveUrl:getFootballLiveUrl
  ,getBaseballMlbScheduleUrl:getBaseballMlbScheduleUrl
  ,getBaseballNpbScheduleUrl:getBaseballNpbScheduleUrl

};
