const getPbps = predicator => (string) => {
  const json = JSON.parse(string)
  const event = json.apiResults[0].league.season.eventType[0].events[0];
  const teams = event.teams;
  const pbp = event.pbp;

  return pbp.filter(predicator);

};

exports.pbpGetter = getPbps;