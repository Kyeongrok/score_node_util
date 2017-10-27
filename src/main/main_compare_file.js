const fs = require('fs');
const compareUtil = require('../../util/compareUtil');

const path = 'C:/Users/kyeongrok.kim/Desktop/baseball/mlb/';
// const fileName = "2017-03-07-01-46-16.json";
// compareUtil.processAndSave(path)
// 파일 경로를 넘기면 해당 위치에 있는 파일을 이전 파일과 비교해서 지울건 지움
// compareUtil.compare1AndDelete("C:/Users/kyeongrok.kim/Desktop/baseball/mlb/")

// 파일 열어서 메세지 만든다.

const fileList = fs.readdirSync(path);

const makeMessage = (fileString) => {
  const jsonNode = JSON.parse(fileString);
  let message = '';
  message += JSON.stringify(jsonNode.gameData.status);
  message += JSON.stringify(jsonNode.liveData.linescore.innings);
  return message;
};

for (const fileName of fileList) {
  const file = fs.readFileSync(path + fileName);
  const fileString = file.toString();
  const message = makeMessage(fileString);
  console.log(message);
}

