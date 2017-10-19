exports.getEvent = (string) =>{
  const json = JSON.parse(string);
  const event = json.apiResults[0].league.season.eventType[0].events[0];
  return event;
}