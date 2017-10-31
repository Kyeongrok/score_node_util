const fs = require('fs');
const request = require('../request/request');
const statsUrlFormats = require('../statsUrlFormats.js');
const parser = require('../parser/statsBasketballParser');
const callAndSave = require('../saver/callAndSave');

// fs.writeFile('test_data/hello.txt', string);
const printJson = (string) => {
  console.log(string);
  const json = JSON.parse(string);
  const event = json.apiResults[0].league.season.eventType[0].events[0];
  const boxscores = event.boxscores;
  // console.log(boxscores[0]);
  // console.log('homePlayerStat:%s awayPlayerStat:%s', boxscores[0].playerStat, boxscores[1].playerStat);
  console.log(event.pbp);
  // console.log(event.pbp[event.pbp.length-1]);
};

const callAndPrint = request.getString(printJson);

// setInterval(() => {
//   // 1947346, 1947369
//   ()=>{}, 5000
// });
const url = statsUrlFormats.getBasketballLiveBoxUrl(1948032);
console.log(url);

let i = 180;
setInterval(() => {
  i = i + 1;
  callAndSave.callAndSave(url)('./1948032' + i + '.js');
}, 5000);

