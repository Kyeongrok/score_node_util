const openAndParse = require('../saver/openAndParse');
const daumGamePlayerStatParser = require('../parser/daumGamePlayerStatParser');

openAndParse.openAndParse('./nba_80008653.json')(daumGamePlayerStatParser.parse);
