require('request');
var jsdom = require("jsdom");

var request = require('request');
var url = "http://www.covers.com/pageLoader/pageLoader.aspx?page=/data/nba/players/player736448.html";


var value = jsdom.env({
    url:url,
    scripts:["http://code.jquery.com/jquery.js"],
    done:function (err, window) {
        //console.log(window);
        var $ = window.$;
        var table = $(".data:nth-child(0) tbody tr td");

        $(table).each(function(key, value){
          console.log(value);
        });
    }
  }
);
