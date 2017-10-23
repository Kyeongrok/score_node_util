const fs = require('fs');
const request = require('../request/request');

const saveString = (fileName) => (string) => {
  console.log(string);
  fs.writeFile(fileName, string, (err) => console.log(err) );
}

exports.callAndSave = (url) => (filePathName) => request.getString(saveString(filePathName))(url);