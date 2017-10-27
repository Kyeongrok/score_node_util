require('request');
const jsdom = require('jsdom');

const request = require('request');

const url = 'http://www.covers.com/pageLoader/pageLoader.aspx?page=/data/nba/players/player736448.html';

const value = jsdom.env({
  url,
  scripts: ['http://code.jquery.com/jquery.js'],
  done(err, window) {
    // console.log(window);
    const $ = window.$;
    const table = $('.data:nth-child(0) tbody tr td');

    $(table).each((key, value) => {
      console.log(value);
    });
  },
},
);
