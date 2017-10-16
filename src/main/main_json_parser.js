const client = require('cheerio-httpcli');

const crawlerMaker = require("./crawler/crawlerMaker.js");
const statsBasketballParser = (string) => {
  const json = JSON.parse(string)
  const event = json.apiResults[0].league.season.eventType[0].events[0];
  const teams = event.teams;
  const pbp = event.pbp;
  const nowPbp = pbp[pbp.length - 1];

  console.log('status %s period:%s ha score: %s vs %s homeFouls:%s visitorFouls:%s',
    event.eventStatus.eventStatusId, event.eventStatus.period,
    teams[0].score, teams[1].score, nowPbp.homeFouls, nowPbp.visitorFouls);

}

const crawl = crawlerMaker.getCrawler(statsBasketballParser);

for(let i = 1113; i < 3000 ; i += 1){
  const url = 'http://13.124.67.68:8203/basketball/stats/game1?eventId=' + i;
  console.log(url);

  try {
    // crawl(url);
    const response = client.fetchSync(url);
    statsBasketballParser(response.body);
  } catch (e) {
  }
}


