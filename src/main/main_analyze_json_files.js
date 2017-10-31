const fs = require('fs');

const fileListGetter = require('./getter/fileListGetter');
const statsBasketballPbpParser = require('./parser/statsBasketballPbpParser');

const path = 'C:\\Users\\kyeongrok.kim\\Desktop\\score_data\\basketbtall_data\\2017-10-18';
const list = fileListGetter.getFileList(path);

// console.log(list.length);
// const filteredList = list.filter(filename =>  filename.indexOf('14-01-') >= 0);

const filteredList = list.slice(0, 800);
console.log('filteredList.length', filteredList.length);

const pbpGetter = statsBasketballPbpParser.pbpGetter(pbp => Number(pbp.playId) > 1177 && Number(pbp.playId) < 1180);

filteredList.forEach((fileName) => {
  const data = fs.readFileSync(`${path}/${fileName}`);
  const string = data.toString();

  const pbps = pbpGetter(string);

  // pbps.forEach(pbp => console.log('%s----------------------\n%s', pbp.playId, JSON.stringify(pbp)));

  const json = JSON.parse(string);
  const event = json.apiResults[0].league.season.eventType[0].events[0];
  console.log('eventTypeId %s, my callTime:%s startTimeStamp:%s endTimeStamp:%s'
    , event.eventStatus.eventStatusId
    , fileName.replace(/-/g, ':').replace('_live.json', ''),
    json.startTimestamp, json.endTimestamp);
});

