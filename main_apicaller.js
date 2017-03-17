let apiHelper = require("./helper/apiHelper");
let statsUrlFormats = require("./statsUrlFormats");
const apiKey = "hrzct5ze45rs6vd5f7nuuyfn";
const secret = "FUcabTvbbG";


let url = "http://api.stats.com/v1/decode/baseball/mlb/playDetails?languageId=15&accept=json"+statsUrlFormats.getApikeySignature;

console.log(url);





