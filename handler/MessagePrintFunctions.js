
let FileHandler = require('./FileHandler.js');

module.exports = function(testDataLocation){
	let fh = new FileHandler(testDataLocation);
	let fileList = fh.fileList;

	let jsonString = "";

	this.printPlayDetail = function(s_fileName){
		let location = testDataLocation + s_fileName;
		console.log(location);

		jsonString = fh.getFileContentsString(location);

		let jsonObject = fh.getJsonObject(jsonString);
		let sport =jsonObject['sport'];
		let playEvents = sport['league']['playEvents']['playEvent'];

		for(let playEvent of playEvents ){
			let result = "";
			result += playEvent['playEventId'];
			result += ", " +playEvent['name'];
			result += ", " +playEvent['playDetail']['playDetailId'];
			result += ", " +playEvent['playDetail']['name'];

			console.log(result);
		}

		//console.log(playEvents);
	};

	this.printNflPlayDetail = function(s_fileName){
		let location = testDataLocation + s_fileName;
		console.log(location);

		jsonString = fh.getFileContentsString(location);

		let jsonObject = fh.getJsonObject(jsonString);
		let apiResults =jsonObject['apiResults'];
		let playTypes =apiResults['playTypes'];

		for(let item of playTypes){
			console.log(item['playTypeId'] + ", " + item['name']);
		}

	};


	this.printTeamData = function(s_fileName){
		let location = testDataLocation + s_fileName;
		console.log(location);

		jsonString = fh.getFileContentsString(location);

		let jsonObject = fh.getJsonObject(jsonString);
		let apiResult =jsonObject['apiResults'][0];
		let league = apiResult['league'];
		let conferences = league['season']['conferences'];
		let eastern = conferences[0]['divisions'];
		let western = conferences[1]['divisions'];

		for(let item of eastern){

			for(let team of item['teams']){
				//noinspection JSUndeclaredVariable
                result = "";
				//noinspection JSUndeclaredVariable
                result += item['name'] + ",";
				//noinspection JSUndeclaredVariable
                result += team['abbreviation'] + ",";
				//noinspection JSUndeclaredVariable
                result += team['teamId']+"," + team['location'] + ",";
				console.log(result);
			}
		}

		for(let item of western){
			for(let team of item['teams']){
				//console.log(team);
				//noinspection JSUndeclaredVariable
                result = "";
				//noinspection JSUndeclaredVariable
                result += item['name'] + ",";
				//noinspection JSUndeclaredVariable
                result += team['abbreviation'] + ",";
				//noinspection JSUndeclaredVariable
                result += team['teamId']+"," + team['location'] + ",";
				console.log(result);
			}
		}

	};


	//
	this.printPlayerData = function(index){
		console.log("--------" + fileList[index] + "---------");
		jsonString = fh.getNFileContentsString(index);

		let jsonObject = fh.getJsonObject(jsonString);
		let apiResult =jsonObject['apiResults'][0];
		let league = apiResult['league'];
		let players = league['players'];


		for (let player of players){
			console.log(player);
			let result = "";
			result += player['playerId'] + ",";
			result += player['team']['abbreviation'] + ",";
			result += player['firstName'] + " ";
			result += player['lastName'];

			console.log(result);
		}

	};

	this.printHockeyGameSchedule = function(index) {
		jsonString = fh.getNFileContentsString(index);
		// console.log(jsonString);
		let jsonObject = fh.getJsonObject(jsonString);

		let apiResults = jsonObject['apiResults'][0];
		let league = apiResults['league'];
		let season = league['season'];
		let eventType = season['eventType'][0];
		let events = eventType['events'];

		let result = "";

		for(let item of events) {
				result += item['eventId'] + ",";
				result += item['teams'][0]['nickname'] + " vs " + item['teams'][1]['nickname'] + ",";
				let startDateUTC = item['startDate'][1];
				result += startDateUTC['year'] + "-" + startDateUTC['month'] + "-" + startDateUTC['date'] + ",";
				result += startDateUTC['hour'] + ":" + startDateUTC['minute'] + "\n";

		}
		console.log(result);
	};

	this.printFileList=()=>{
		//file list 출력
		console.log(fileList.length);
		console.log(fileList);
	};

	this.printApiResults =(index)=>{

		console.log("--------" + fileList[index] + "---------");
		jsonString = fh.getNFileContentsString(index);
		let jsonObject = fh.getJsonObject(jsonString);
		let events =jsonObject['apiResults'][0]['league']['season']['eventType'][0]['events'];


		for(let event of events){
			//console.log(event);

			let result = "";
			result += event['eventId'];


			result += ", " + event['teams'][0]['nickname'] + " vs " +event['teams'][1]['nickname'];
			result += ", " + event['startDate'][1]['year'];
			result += ", " + event['startDate'][1]['month'];
			result += ", " + event['startDate'][1]['date'];
			result += ", " + event['startDate'][1]['hour'];
			result += ", " + event['startDate'][1]['minute'];
			console.log(result);

		}



	};

	//경기 데이터 출력하는 기능
	this.printGameData = function( start_num, end_num){
		for(let i = start_num ; i < end_num; i++){

			//console.log("--------" + fileList[i] + "---------");
			//noinspection JSUndeclaredVariable
            jsonString_a = fh.getNFileContentsString(i);

			let jsonObject = fh.getJsonObject(jsonString_a);
			let events;
			try{
				events =jsonObject['apiResults'][0]['league']['season']['eventType'][0]['events'];
			}catch(e){
				console.log(e);
			}


			let pbp = events[0]['pbp'];

			//console.log(pbp);
			console.log(pbp.length);


			for (let item of pbp){
				//console.log(item);


				let printContents = "";
				printContents += item['playId'];
				printContents += ","+ item['period'];
				printContents += ","+ item['teamId'];


				if(item['pointsScored'] != null){
					printContents += ", " + item['pointsScored'];
				} else{printContents += ", " + ""}

				if(item['players'][0] != null){
					printContents += ", " + item['players'][0]['playerId'];
				} else{printContents += ", " + "p1없음"}

				if(item['players'][0] != null){
					printContents += ", " + item['players'][0]['firstName'] +" "+ item['players'][0]['lastName'];
				} else{printContents += ", " + "p1없음"}

				if(item['players'][1] != null){
					printContents += ", " + item['players'][1]['playerId'];
				} else{printContents += ", " + ""}

				if(item['players'][1] != null){
					printContents += ", " + item['players'][1]['firstName'] +" "+ item['players'][1]['lastName'];
				} else{printContents += ", " + ""}

				printContents += ", " + item['playEvent']['playEventId'];
				printContents += ", " + item['playEvent']['name'];


				if(item['playEvent']['playDetail']['playDetailId'] != null){
					printContents += ", " + item['playEvent']['playDetail']['playDetailId'];
				}else{printContents += ", " + ""}

				if(item['playEvent']['playDetail']['name'] != null){
					printContents += ", " + item['playEvent']['playDetail']['name'];
				}else{printContents += ", " + ""}

				console.log(printContents);
			}
		}
	}
};
