const callAndParse = require('../saver/callAndParse');
const fs = require('fs');

const url = 'http://api.performfeeds.com/soccerdata/tournamentcalendar/1vmmaetzoxkgg1qf6pkpfmku0k?_fmt=json&_rt=b';
callAndParse.callAndParse(url)(string => fs.writeFile('./opta.json', string));

