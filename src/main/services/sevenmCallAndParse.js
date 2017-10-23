const callAndParse = require('../saver/callAndParse');
const sevenmCsxlParser = require('../parser/sevenmCsxlParser');



setInterval(() =>{
  const url = "http://ctc.live.7m.cn/datafile/csxl.js"; // + "?nocache=" + System.currentTimeMillis()
  callAndParse.callAndParse(url)(sevenmCsxlParser.parse);
}, 5000);
