const fs = require('fs');

const parseAndPrint = (err, data)=>{
  const json = JSON.parse(data.toString());
  console.log(json.homePerson);
  console.log(json.awayPerson);
}

fs.readFile('./nba_80008653.json', parseAndPrint);


