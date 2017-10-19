const fs = require('fs');
const request = require('./request/request');
const statsUrlFormats = require("./statsUrlFormats.js");


// fs.writeFile('test_data/hello.txt', string);
const printJson = (string) => {
  console.log(string);
  const json = JSON.parse(string);
  const event = json.apiResults[0].league.season.eventType[0].events[0];
  const boxscores = event.boxscores;

  const playerList = boxscores[0].playerStats.map(playerStat => playerStat.player);
  console.log(playerList);
  playerList.forEach(player=>{
    console.log('%s %s %s', player.playerId, player.firstName, player.lastName, player.uniform);
  })
  // console.log('homePlayerStat:%s awayPlayerStat:%s', boxscores[0].playerStat, boxscores[1].playerStat);
  // console.log(event.pbp.length);
  // console.log(event.pbp[event.pbp.length-1]);
};

const callAndPrint = request.getString(printJson);
callAndPrint(statsUrlFormats.getBasketballLiveBoxUrl(1947666));