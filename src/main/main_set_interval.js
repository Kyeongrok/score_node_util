const request = require('request');


const hello = (url) => request({
    url: url,
    method: 'GET',
    headers: [
      { name: 'content-type', value: 'application/x-www-form-urlencoded' },
      { name: 'accept-encoding', value: 'utf-8' },
    ],
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10,
  },
  (error, response, body) => {
  if (!error && response.statusCode === 200) {
  console.log(url);
  console.log(body);
    console.log(response.headers);
} else {
    try {
      console.log(`error${response.statusCode}`);
    } catch (e) {

    }
  }
});

setInterval(() => hello('http://livescore.named.com/gateway/config/configGet.php'), 100);



