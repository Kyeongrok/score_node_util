const fs = require('fs');

const save = (string, filePathName) => {
  fs.writeFile(filePathName, string);
}

exports.saveToFile = save;