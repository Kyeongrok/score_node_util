const openAndParse = require('../saver/openAndParse');
const fileListGetter = require('../getter/fileListGetter');
const eventGetter = require('../getter/eventGetter');
const fileWrite = require('../writer/fileWrite');


// 각 파일별로 pbp개수를 세어본다.

// 파일 리스트를 가지고 온다.
const path = 'C:\\Users\\kyeongrok.kim\\Desktop\\score_data\\basketbtall_data\\2017-10-18\\';
const filenameList = fileListGetter.getFileList(path);

const infoList = [];

const makeInfo = (filename, event) => {
  const lastEvent = event.pbp[event.pbp.length - 1];
  const info = {};
  info.filename = filename;
  info.pbpLength = event.pbp.length;
  info.playId = lastEvent.playId;
  info.period = lastEvent.period;
  return info;
};
const printInfo = info => console.log(info.filename, info.pbpLength, info.playId, info.period);

const openAndParse2 = path => filename => openAndParse.openAndParse(path + filename)((string) => {
  try {
    const event = eventGetter.getEvent(string);
    const info = makeInfo(filename, event);
    infoList.push(info);
    printInfo(info);
    // fileWrite.doWrite('./result.txt', `${JSON.stringify(info)},\n`);
  } catch (e) {
    console.log(e);
  }
});

// filenameList.forEach((filename) => {
//   openAndParse2(path)(filename);
// });

openAndParse.openAndParse('../../../test_data/basketball/stats/' + '1947352.json', string => console.log(string));
