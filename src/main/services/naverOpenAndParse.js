const openAndParse = require('../saver/openAndParse');

const callback = (string) => {
  const json = JSON.parse(string);
  const homeGamePlayerAvgRecord = json.player_avg_record.game['10'];
  console.log(homeGamePlayerAvgRecord);
};

openAndParse.openAndParse('../../../test_data/basketball/naver/201710241050310121.json')(callback);

