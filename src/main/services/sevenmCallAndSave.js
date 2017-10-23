const callAndSave = require('../saver/callAndSave')

const url = "http://ctc.live.7m.cn/datafile/csxl.js"; // + "?nocache=" + System.currentTimeMillis()

callAndSave.callAndSave(url)('./csxl.js');