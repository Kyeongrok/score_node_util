const statsUrlFormats = require('../statsUrlFormats.js');
const callAndSave = require('../saver/callAndSave');
const ymdhms = require('../getter/yyyy-mm-dd-hh-mm-ssGetter');

setInterval(() => {
  const statsGameId = 1948032;
  const url = statsUrlFormats.getBasketballLiveBoxUrl(statsGameId);
  console.log(url);
  const fileName = `${ymdhms.ymdhms()}`;
  callAndSave.callAndSave(url)(`./${fileName}^${statsGameId}.js`);
}, 5000);
