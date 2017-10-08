const statsUrlFormats = require("./statsUrlFormats.js");
const crawler = require("./crawler/crawler.js");
const dateTime = require("node-datetime");

const crawl = (makeUrl, fileNameCreator) => () => {
  // 특정 조건이 맞으면 아래 행을 실행한다.
  const startDate = new Date(Date.UTC(2017, 10 - 1, 9, 5, 56, 30));
  const endDate = new Date(Date.UTC(2017, 10 - 1, 9, 8, 0, 0));
  let nowDate = Date.UTC();

  console.log(startDate, nowDate);

  if(startDate < nowDate && nowDate < endDate ){
    crawler.crawl(makeUrl(), (string) => crawler.writeFile(string, fileNameCreator()));
  }

};
const fileNameCrator = () => './saved/basketball/nba/1/' + dateTime.create().format('Y-m-d-H-M-S') + '.json';

// startDate, endDate를 넣어서 setInterval()를 return하는 function
const crawlLiveBox = crawl(() => statsUrlFormats['getBasketballLiveBoxUrl'](1953565), fileNameCrator);
setInterval(crawlLiveBox, 10000);

console.log(Date.now());