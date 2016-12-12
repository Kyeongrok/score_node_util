var JsonHandler = function(s_jsonString){
	this.jsonObject = JSON.parse(s_jsonString);

	this.getEvent = function(){
		var event = this.jsonObject['apiResults'][0]['league']['season']['eventType'][0]['events'][0];
		return event;
	}

}

module.exports = JsonHandler;