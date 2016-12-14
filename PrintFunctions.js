
var FileHandler = require('./FileHandler.js');

module.exports = function(testDataLocation){
	var fh = new FileHandler(testDataLocation);
	var fileList = fh.fileList;


	this.printPlayDetail = function(s_fileName){
		var location = testDataLocation + s_fileName;
		console.log(location);

		jsonString = fh.getFileContentsString(location);

		var jsonObject = fh.getJsonObject(jsonString);
		var sport =jsonObject['sport'];
		var playEvents = sport['league']['playEvents']['playEvent'];

		for(var playEvent of playEvents ){
			var result = "";
			result += playEvent['playEventId'];
			result += ", " +playEvent['name'];
			result += ", " +playEvent['playDetail']['playDetailId'];
			result += ", " +playEvent['playDetail']['name'];

			console.log(result);
		}

		//console.log(playEvents);
	}

	this.printNflPlayDetail = function(s_fileName){
		var location = testDataLocation + s_fileName;
		console.log(location);

		jsonString = fh.getFileContentsString(location);

		var jsonObject = fh.getJsonObject(jsonString);
		var apiResults =jsonObject['apiResults']
		var playTypes =apiResults['playTypes']

		for(var item of playTypes){
			console.log(item['playTypeId'] + ", " + item['name']);
		}

	}


	this.printTeamData = function(s_fileName){
		var location = testDataLocation + s_fileName;
		console.log(location);

		jsonString = fh.getFileContentsString(location);

		var jsonObject = fh.getJsonObject(jsonString);
		var apiResult =jsonObject['apiResults'][0]
		var league = apiResult['league'];
		var conferences = league['season']['conferences'];
		var estern = conferences[0]['divisions'];
		var western = conferences[1]['divisions'];

		for(var item of estern){

			for(var team of item['teams']){
				result = "";
				result += item['name'] + ",";
				result += team['abbreviation'] + ",";
				result += team['teamId']+"," + team['location'] + ",";
				console.log(result);
			}
		}

		for(var item of western){
			for(var team of item['teams']){
				//console.log(team);
				result = "";
				result += item['name'] + ",";
				result += team['abbreviation'] + ",";
				result += team['teamId']+"," + team['location'] + ",";
				console.log(result);
			}
		}

	}


	//
	this.printPlayerData = function(index){
		console.log("--------" + fileList[index] + "---------");
		jsonString = fh.getNFileContentsString(index);

		var jsonObject = fh.getJsonObject(jsonString);
		var apiResult =jsonObject['apiResults'][0]
		var league = apiResult['league'];
		var players = league['players'];


		for (var player of players){
			console.log(player);
			var result = "";
			result += player['playerId'] + ",";
			result += player['team']['abbreviation'] + ",";
			result += player['firstName'] + " ";
			result += player['lastName'];

			console.log(result);
		}

	}

	this.printHockeyGameSchedule = function(index) {
		jsonString = fh.getNFileContentsString(index);
		// console.log(jsonString);
		var jsonObject = fh.getJsonObject(jsonString);

		var apiResults = jsonObject['apiResults'][0];
		var league = apiResults['league'];
		var season = league['season'];
		var eventType = season['eventType'][0]
		var events = eventType['events'];

		var result = "";

		for(var item of events) {
				result += item['eventId'] + ",";
				result += item['teams'][0]['nickname'] + " vs " + item['teams'][1]['nickname'] + ",";
				var startDateUTC = item['startDate'][1];
				result += startDateUTC['year'] + "-" + startDateUTC['month'] + "-" + startDateUTC['date'] + ",";
				result += startDateUTC['hour'] + ":" + startDateUTC['minute'] + "\n";

		}
		console.log(result);
	}

	this.printFileList=()=>{
		//file list 출력
		console.log(fileList.length);
		console.log(fileList);
	}

	this.printApiResults =(index)=>{

		console.log("--------" + fileList[index] + "---------");
		jsonString = fh.getNFileContentsString(index);
		var jsonObject = fh.getJsonObject(jsonString);
		var events =jsonObject['apiResults'][0]['league']['season']['eventType'][0]['events'];


		for(var event of events){
			//console.log(event);

			var result = "";
			result += event['eventId'];


			result += ", " + event['teams'][0]['nickname'] + " vs " +event['teams'][1]['nickname'];
			result += ", " + event['startDate'][1]['year'];
			result += ", " + event['startDate'][1]['month'];
			result += ", " + event['startDate'][1]['date'];
			result += ", " + event['startDate'][1]['hour'];
			result += ", " + event['startDate'][1]['minute'];
			console.log(result);

		}



	}

	//경기 데이터 출력하는 기능
	this.printGameData = function( start_num, end_num){
		for(var i = start_num ; i < end_num; i++){

			//console.log("--------" + fileList[i] + "---------");
			jsonString_a = fh.getNFileContentsString(i);

			var jsonObject = fh.getJsonObject(jsonString_a);
			var events;
			try{
				events =jsonObject['apiResults'][0]['league']['season']['eventType'][0]['events'];
			}catch(e){
				console.log(e);
			}


			var pbp = events[0]['pbp'];

			//console.log(pbp);
			console.log(pbp.length);


			for (var item of pbp){
				//console.log(item);


				var printContents = "";
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
}
