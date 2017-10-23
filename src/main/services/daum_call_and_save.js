const fs = require('fs');
const request = require('../request/request');

const printString = (string) => {
  console.log(string);
  fs.writeFile('./nba_80008653.json', string, (err) => console.log(err) );
}

const callAndPrint = request.getString(printString);
const url = 'http://score.sports.media.daum.net/hermes/api/game/get.json?gameId=80008653&detail=liveData';

callAndPrint(url);

