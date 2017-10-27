const openAndParse = require('../saver/openAndParse');

const callback = (string) => {
  console.log(string);
};
openAndParse.openAndParse('../../../test_data/basketball/naver/201710241050310121.json')(callback);

