const callAndParse = require('../saver/callAndParse');
const fs = require('fs');

const optAuth = '10aw6mbc7gvnc1tp4w8n0w2a68';

let url = 'http://api.performfeeds.com/soccerdata/tournamentcalendar/1vmmaetzoxkgg1qf6pkpfmku0k?_fmt=json&_rt=b';
url = `http://api.performfeeds.com/soccerdata/tournamentcalendar/${optAuth}/active/authorized`;
callAndParse.callAndParse(url)(string => fs.writeFile('./opta_step1.json', string));

