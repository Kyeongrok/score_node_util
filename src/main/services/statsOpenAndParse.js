const openAndParse = require('../saver/openAndParse');


openAndParse.openAndParse('./1947352.json')((string) => {
  const json = JSON.parse(string);
  const pbp = json.apiResults[0].league.season.eventType[0].events[0].pbp;

  pbp.forEach(item => console.log(item.playId, item.period));
  // console.log(pbp.length);
});
