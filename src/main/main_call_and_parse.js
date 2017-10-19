const fs = require('fs');
const request = require('./request/request');
const statsUrlFormats = require("./statsUrlFormats.js");
const eventGetter = require('./getter/eventGetter');

// fs.writeFile('test_data/hello.txt', string);
const printJson = (string) => {
  console.log(string);

  const event = eventGetter.getEvent(string);
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