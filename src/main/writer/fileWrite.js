const fs = require('fs');

exports.doWrite = (filePathName, contents) => fs.writeFile(filePathName, contents, { flag: 'a' }, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
