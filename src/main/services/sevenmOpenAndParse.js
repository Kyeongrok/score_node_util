const openAndParse = require('../saver/openAndParse');
const sevenmCsxlParser = require('../parser/sevenmCsxlParser');

openAndParse.openAndParse('./csxl.js')(sevenmCsxlParser.parse);