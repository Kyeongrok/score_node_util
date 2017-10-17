const fs = require('fs');
const request = require('./request/request');
const statsUrlFormats = require("./statsUrlFormats.js");

// fs.writeFile('test_data/hello.txt', string);
const printJson = (string) => {

  const json = JSON.parse(string);
  const event = json.apiResults[0].league.season.eventType[0].events[0];
  const boxscores = event.boxscores;
  console.log(boxscores);
};

const callAndPrint = request.getString(printJson);
callAndPrint(statsUrlFormats.getBasketballLiveBoxUrl(1947369));

