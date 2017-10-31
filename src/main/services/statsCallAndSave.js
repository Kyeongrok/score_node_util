const statsUrlFormats = require('../statsUrlFormats.js');
const callAndSave = require('../saver/callAndSave');

const url = statsUrlFormats.getBasketballLiveBoxUrl(1948032);
console.log(url);

let i = 180;
// setInterval(() => {
//   i = i + 1;
//   callAndSave.callAndSave(url)('./1948032' + i + '.js');
// }, 5000);

const getDate = () => {
  const date = new Date();

  return date;
}

getDate();