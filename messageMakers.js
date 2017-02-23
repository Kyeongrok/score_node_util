let statsFootballMessageMaker = (res)=>{

  //메세지 만드는 기능

  //json 으로 만듬
  let json = JSON.parse(res);
  let selectedEvent = json['apiResults'][0]['league']['season']['eventType'][0]['events'][0];
  let teams = selectedEvent['teams'];
  let pbp = selectedEvent['pbp'];
  let eventStatus = selectedEvent['eventStatus'];
  let minutes = eventStatus['time']['minutes'];
  let seconds = eventStatus['time']['seconds'];
  let pbpLength = pbp.length;
  let team_1 = teams[0];
  let team_2 = teams[1];
  let linescore_1 = team_1['linescores'];
  let linescore_2 = team_2['linescores'];

  let message = JSON.stringify(eventStatus) + " "
  + team_1['displayName']
  + " linescores:" + JSON.stringify(linescore_1)
  + team_2['displayName']
  + " linescores:" + JSON.stringify(linescore_2)
  + " pbp:"+ JSON.stringify(pbp[pbpLength-1]['playText'])
  ;

  return message;
}

const statsBaseballLiveMessageMaker =(jsonString)=>{
  let message = "";

  return message;
}
exports.statsFootballMessageMaker = statsFootballMessageMaker;
exports.statsBaseballLiveMessageMaker = statsBaseballLiveMessageMaker;
