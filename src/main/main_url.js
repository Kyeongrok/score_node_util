const statsUrlFormats = require("./statsUrlFormats.js");
let statsBasketballNbaScheduleUrl = statsUrlFormats.getBasketballScheduleUrl("2017-10-08", "2017-10-09");

console.log(statsBasketballNbaScheduleUrl);

console.log(statsUrlFormats.getBasketballLiveBoxUrl(1947369));

