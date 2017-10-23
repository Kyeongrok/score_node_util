
const printPersonStat = (personStats) =>{
  personStats.forEach(person => {
    console.log(person);
  })
}

exports.parse = string => {
  const json = JSON.parse(string);
  printPersonStat(json.homePersonStat);
  printPersonStat(json.awayPersonStat);
}