const fs = require('fs');

const parseAndPrint = parser => (err, data) => {
  const string = data.toString();
  parser(string);
};

exports.openAndParse = fileName => parser => fs.readFile(fileName, parseAndPrint(parser));
