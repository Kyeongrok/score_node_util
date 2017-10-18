const fs = require('fs');

exports.getFileList = (path) =>{
  const list = [];
  fs.readdirSync(path).forEach((fileName) => {

    list.push(fileName);
  });

  return list;
};





