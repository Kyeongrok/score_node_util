const callAndParse = require('../saver/callAndParse');
const fs = require('fs');

const url = 'http://www.wkbl.or.kr/game/ajax/ajax_team_total_record.asp';
callAndParse.callAndParse(url)((string) => {
  console.log(string);
});
