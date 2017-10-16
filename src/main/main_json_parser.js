const crawlerMaker = require("./crawler/crawlerMaker.js");
const statsBasketballParser = (string) => {
  const json = JSON.parse(string)
  const event = json.apiResults[0].league.season.eventType[0].events[0];
  const teams = event.teams;
  console.log('status %s ha score: %s vs %s', event.eventStatus.eventStatusId, teams[0].score, teams[1].score);
}

const crawler = crawlerMaker.getCrawler(statsBasketballParser);

for(let i = 1076; i < 1077 ; i++){
  const url = 'http://13.124.67.68:8203/basketball/stats/game1?eventId=' + i;
  console.log(url);
  crawler(url);

}


