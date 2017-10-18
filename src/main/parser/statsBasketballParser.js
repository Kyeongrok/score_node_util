const statsBasketballParser = (string, num) => {
  const json = JSON.parse(string)
  const event = json.apiResults[0].league.season.eventType[0].events[0];
  const teams = event.teams;
  const pbp = event.pbp;
  const nowPbp = pbp[pbp.length - 1];

  const playEvent8List = pbp.filter(item => item.playEvent.playEventId === 10)
    .map(item => item.players[0].sequence + ' ' +item.players[0].firstName + ' ' +item.players[0].lastName + '--->'
      + item.players[1].sequence + ' ' +item.players[1].firstName + ' ' +item.players[1].lastName)
  ;

  console.log(num, playEvent8List);

  console.log('%s status %s period:%s time:%s ha score: %s vs %s homeFouls:%s visitorFouls:%s homeScorePbp:%s awayScorePbp:%s time:%s:%s',
    num,
    event.eventStatus.eventStatusId,
    event.eventStatus.period,
    event.eventStatus.minutes + ':'+ event.eventStatus.seconds,
    teams[0].score,
    teams[1].score, nowPbp.homeFouls, nowPbp.visitorFouls,
    nowPbp.homeScore,
    nowPbp.visitorScore,
    nowPbp.time.minutes,
    nowPbp.time.seconds,
  );

};

exports.printData = statsBasketballParser;