const callAndParse = require('../saver/callAndParse');
const fs = require('fs');

let url = 'http://sportsdata.naver.com/data//kbl_game/2017/10/20171015553031016.nsd';
url = 'http://sportsdata.naver.com/data//kbl_game/2017/10/201710241050310121.nsd';
callAndParse.callAndParse(url)((string) => {
  console.log(string);
  fs.writeFile('./naver_basketball_201710241050310121.json', string);
});

