var stats_uta_phin = {
	"status": "OK",
	"recordCount": 1,
	"startTimestamp": "2016-10-06T02:01:31.6776503Z",
	"endTimestamp": "2016-10-06T02:01:31.7089003Z",
	"timeTaken": 0.03125,
	"apiResults": [{
		"sportId": 1,
		"name": "Basketball",
		"league": {
			"leagueId": 1,
			"name": "National Basketball Assoc.",
			"abbreviation": "NBA",
			"displayName": "National Basketball Assoc.",
			"season": {
				"season": 2016,
				"name": "2016-17 NBA Season",
				"isActive": true,
				"eventType": [{
					"eventTypeId": 0,
					"name": "Preseason",
					"events": [{
						"eventId": 1680158,
						"startDate": [{
							"year": 2016,
							"month": 10,
							"date": 5,
							"hour": 19,
							"minute": 0,
							"full": "2016-10-05T19:00:00",
							"dateType": "Local"
						}, {
							"year": 2016,
							"month": 10,
							"date": 6,
							"hour": 2,
							"minute": 0,
							"full": "2016-10-06T02:00:00",
							"dateType": "UTC"
						}],
						"isTba": false,
						"isDataConfirmed": {
							"score": false
						},
						"scheduledPeriods": 4,
						"eventStatus": {
							"eventStatusId": 1,
							"isActive": false,
							"name": "Pre-Game"
						},
						"venue": {
							"venueId": 21,
							"name": "Talking Stick Resort Arena",
							"city": "Phoenix",
							"state": {
								"stateId": 3,
								"name": "Arizona",
								"abbreviation": "AZ"
							},
							"country": {
								"countryId": 1,
								"name": "United States",
								"abbreviation": "USA"
							}
						},
						"tvStations": [],
						"teams": [{
							"teamId": 21,
							"location": "피닉스 ",
							"nickname": "선스",
							"abbreviation": "Pho",
							"teamLocationType": {
								"teamLocationTypeId": 1,
								"name": "home"
							},
							"record": {
								"wins": 1,
								"losses": 0,
								"percentage": " 1.000"
							},
							"isWinner": false
						}, {
							"teamId": 26,
							"location": "유타 ",
							"nickname": "재즈",
							"abbreviation": "Uta",
							"teamLocationType": {
								"teamLocationTypeId": 2,
								"name": "away"
							},
							"record": {
								"wins": 0,
								"losses": 1,
								"percentage": "  .000"
							},
							"isWinner": false
						}],
						"coverageLevel": {
							"coverageLevelId": 3,
							"details": "NBA FEED",
							"name": "level 1"
						}
					}]
				}]
			}
		}
	}]
}

module.exports = stats_uta_phin;