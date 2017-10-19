const request = require('request');

exports.getString = callback => (url) => request({
    url: url,
    method: 'GET',
    headers: [
      { name: 'content-type', value: 'application/x-www-form-urlencoded2' },
      { name: 'accept-encoding', value: 'utf-8' },
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

