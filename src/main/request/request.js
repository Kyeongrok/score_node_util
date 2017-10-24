const request = require('request');
const iconv = require('iconv-lite');

exports.getString = callback => url => request({
  url,
  method: 'GET',
  headers: [
  ],
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10,
},
(error, response, body) => {
  if (!error && response.statusCode === 200) {
    iconv.extendNodeEncodings();
    const strContents = new Buffer(body);
    console.log(strContents);
    console.log(iconv.decode(strContents, 'EUC-KR').toString());


    callback(body);
  } else {
    console.log(`error${response.statusCode}`);
  }
});

