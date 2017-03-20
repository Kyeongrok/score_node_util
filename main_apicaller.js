let apiHelper = require("./helper/apiHelper");
let statsUrlFormats = require("./statsUrlFormats");
const apiKey = "hrzct5ze45rs6vd5f7nuuyfn";
const secret = "FUcabTvbbG";
let FileHandler = require('./handler/FileHandler.js');


let url = "http://api.stats.com/v1/decode/baseball/mlb/playDetails?languageId=15&accept=json"+statsUrlFormats.getApikeySignature;

let urls = {
    "urlMlbPbp" : "http://api.stats.com/v1/decode/baseball/mlb/pbpDetails?languageId=15&accept=json"+statsUrlFormats.getApikeySignature,
    "urlPitchDetail":"http://api.stats.com/v1/decode/baseball/mlb/pitchDetailResults?accept=json"+statsUrlFormats.getApikeySignature,
    "urlNpbPbp" : "http://api.stats.com/v1/decode/baseball/npb/pbpDetails?languageId=15&accept=json"+statsUrlFormats.getApikeySignature,
    "urlNpbPitchDetail":"http://api.stats.com/v1/decode/baseball/npb/pitchDetailResults?accept=json"+statsUrlFormats.getApikeySignature,
};

console.log(urls);


let basePath = "c:/git_bitbucket/score_node_util";
let testDataLocation = basePath + "/data/baseball/";
let fh = new FileHandler(testDataLocation);
let fileList = fh.fileList;


// console.log(fileList);
let str = fh.getFileContentsString(testDataLocation + "stats_mlb_pitch_detail.json");
let json = JSON.parse(str);
let pbpDetails = json['apiResults']['pitchDetails'];

console.log(pbpDetails);

for (let pbpDetail of pbpDetails) {
    console.log(pbpDetail['pitchDetailId'] + "=" + pbpDetail['name'] + "=" + pbpDetail['abbreviation']);

}

