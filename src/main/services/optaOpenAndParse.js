const openAndParse = require('../saver/openAndParse');

const parse = (string) => {
  const json = JSON.parse(string);
  const filteredList = json.competition.filter(item => item.country.indexOf('Korea') >= 1);
  // const leagueNameList = json.competition.map(item => ({ name: item.name, country: item.country, competitionCode: item.competitionCode }));

  console.log(filteredList.length);

  filteredList.forEach((leagueName) => {
    console.log(leagueName);
  });
};

openAndParse.openAndParse('./opta.json')(parse);
