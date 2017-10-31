// stats 농구 engine test용으로 사용했던 것

const statsBasketballParser = require('../parser/statsBasketballParser');
const crawlerMaker = require('../crawler/crawlerMaker.js');
const crawl = crawlerMaker.getCrawler(statsBasketballParser.printData);

for (let i = 1350; i < 1370; i += 1) {
  const url = `http://13.124.67.68:8203/basketball/stats/game1?eventId=${i}`;
  console.log(url);

  try {
    crawl(url, i);
    // const response = client.fetchSync(url);
    // statsBasketballParser(response.body);
  } catch (e) {
    console.log(e);
  }
}
