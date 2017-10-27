const callAndParse = require('../saver/callAndParse');

let url = 'http://sportsdata.naver.com/data//kbl_game/2017/10/20171015553031016.nsd';
url = 'http://sportsdata.naver.com/data//kbl_game/2017/10/201710241050310121.nsd';


setInterval(() => {
  callAndParse.callAndParse(url)(string => console.log(string));
}, 1000 * 1);
