const callAndParse = require('../saver/callAndParse');
const sevenmCsxlParser = require('../parser/sevenmCsxlParser');

setInterval(() => {
  try {
    const url = `${'http://ctc.live.7m.cn/datafile/csxl.js?nocache='}${new Date().getTime()}`;
    callAndParse.callAndParse(url)(sevenmCsxlParser.parse);
  } catch (e) {
    console.log(e);
  }
}, 1000 * 10);
