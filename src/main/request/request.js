const request = require('request');

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
    console.log(url);
    callback(body);
  } else {
    console.log(`error${response.statusCode}`);
  }
});

