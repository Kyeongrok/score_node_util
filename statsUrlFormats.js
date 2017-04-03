const util = require("util");
const sha256 = require('js-sha256');
const apiKey = "hrzct5ze45rs6vd5f7nuuyfn";
const secret = "FUcabTvbbG";

const formats = {
  "footballLiveFormat":"http://api.stats.com/v1/stats/soccer/epl/events/%s/?accept=json&linescore=true&pbp=true&languageId=15&api_key=%s&sig=%s"
  ,"basketballLiveFormat" : "http://api.stats.com/v1/stats/basketball/nba/events/%s?languageId=15&pbp=true&accept=json&api_key=%s&sig=%s"
  ,"footballScheduleFormat" : "http://api.stats.com/v1/stats/soccer/epl/scores/?date=%s&accept=json&api_key=%s&sig=%s"
  ,"basketballScheduleFormat" : "http://api.stats.com/v1/stats/basketball/nba/events/?languageId=15&startDate=%s&endDate=%s&accept=json&api_key=%s&sig=%s"
  ,"baseballMlbScheduleFormat" : "http://api.stats.com/v1/stats/baseball/mlb/events/?languageId=15&startDate=%s&endDate=%s&accept=json&api_key=%s&sig=%s"
  ,"baseballNpbScheduleFormat" : "http://api.stats.com/v1/stats/baseball/npb/events/?languageId=15&startDate=%s&endDate=%s&accept=json&api_key=%s&sig=%s"
  ,"baseballMlbLiveFormat" : "http://api.stats.com/v1/stats/baseball/mlb/events/%s?box=true&pbp=true&tvl=true&linescore=true&languageId=15&accept=json&api_key=%s&sig=%s"
  ,"hockeyNhlLiveFormat" : "http://api.stats.com/v1/stats/hockey/nhl/events/?languageId=15&startDate=%s&endDate=%s&accept=json&api_key=%s&sig=%s"
};

//signature maker
const getSignature = (apiKey, secret)=>( sha256(apiKey + secret +  Math.floor((new Date().getTime()) / 1000) ));

module.exports = {
  getSignature:getSignature(apiKey, secret)
  ,getApikeySignature: "&api_key="+apiKey+"&sig="+getSignature(apiKey, secret)
  ,getBasketballScheduleUrl:(startDate, endDate)=>( util.format(formats['basketballScheduleFormat'], startDate, endDate, apiKey, getSignature(apiKey, secret)) )
  ,getBasketballLiveUrl:(eventId)=>( util.format(formats['basketballLiveFormat'], eventId, apiKey, getSignature(apiKey, secret)) )
  ,getFootballLiveUrl:(eventId)=>(  util.format(formats['footballLiveFormat'], eventId, apiKey, getSignature(apiKey, secret)) )
  ,getBaseballMlbScheduleUrl:(startDate, endDate)=>( util.format(formats['baseballMlbScheduleFormat'], startDate, endDate, apiKey, getSignature(apiKey, secret)) )
  ,getBaseballNpbScheduleUrl:(startDate, endDate)=>( util.format(formats['baseballNpbScheduleFormat'], startDate, endDate, apiKey, getSignature(apiKey, secret)) )
  ,getBaseballMlbLiveUrl:(eventId)=>(  util.format(formats['baseballMlbLiveFormat'], eventId, apiKey, getSignature(apiKey, secret)) )
  ,getHockeyNhlLiveUrl:(startDate, endDate)=>(  util.format(formats['hockeyNhlLiveFormat'], startDate, endDate, apiKey, getSignature(apiKey, secret)) )

};
