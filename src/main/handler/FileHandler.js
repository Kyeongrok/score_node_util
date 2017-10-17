
const fs = require('fs');
const FileHandler = (s_dir) => {
	this.testDataLocation = s_dir;
	this.fileList = fs.readdirSync( s_dir );

	this.getFileList = function getFileLIst() {
  		return this.fileList;
	};

    /**
     *
     * @param s_fileLocationName
     */
	this.getFileContentsString = (s_fileLocationName) => {
		console.log(s_fileLocationName);
		var file = fs.readFileSync(s_fileLocationName);
		return file.toString();
	};

	//return 해당 fileName의 file string
	this.getNFileContentsString = function(i_n){
		var fileLocation = this.testDataLocation + this.fileList[i_n];
		var file = fs.readFileSync(fileLocation);
	  	return file.toString();
	};

	//stats data 의 event를 return함
	this.getEvent = function(s_json){
		var jsonObject;
		try{
			jsonObject = JSON.parse(s_json);
			return jsonObject['apiResults'][0]['league']['season']['eventType'][0]['events'][0];
		}catch(e){
			return {};
		}
	};

	this.getJsonObject = function(s_json){
		var jsonObject;
		try{
			jsonObject = JSON.parse(s_json);
			return jsonObject;
		}catch(e){
			return {};
		}
	}
};

module.exports = FileHandler;
