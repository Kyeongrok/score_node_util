const apiHelper = require('./helper/apiHelper');
const statsUrlFormats = require('./statsUrlFormats');

const apiKey = 'hrzct5ze45rs6vd5f7nuuyfn';
const secret = 'FUcabTvbbG';
const FileHandler = require('./handler/FileHandler.js');

const url = `http://api.stats.com/v1/decode/baseball/mlb/playDetails?languageId=15&accept=json${statsUrlFormats.getApikeySignature}`;

const urls = {
  urlMlbPbp: `http://api.stats.com/v1/decode/baseball/mlb/pbpDetails?languageId=15&accept=json${statsUrlFormats.getApikeySignature}`,
  urlPitchDetail: `http://api.stats.com/v1/decode/baseball/mlb/pitchDetailResults?accept=json${statsUrlFormats.getApikeySignature}`,
  urlNpbPbp: `http://api.stats.com/v1/decode/baseball/npb/pbpDetails?languageId=15&accept=json${statsUrlFormats.getApikeySignature}`,
  urlNpbPitchDetail: `http://api.stats.com/v1/decode/baseball/npb/pitchDetailResults?accept=json${statsUrlFormats.getApikeySignature}`,
};

console.log(urls);

const basePath = 'c:/git_bitbucket/score_node_util';
const testDataLocation = `${basePath}/data/baseball/`;
const fh = new FileHandler(testDataLocation);
const fileList = fh.fileList;

// console.log(fileList);
const str = fh.getFileContentsString(`${testDataLocation}stats_mlb_pitch_detail.json`);
const json = JSON.parse(str);
const pbpDetails = json.apiResults.pitchDetails;

console.log(pbpDetails);

for (const pbpDetail of pbpDetails) {
  console.log(`${pbpDetail.pitchDetailId}=${pbpDetail.name}=${pbpDetail.abbreviation}`);
}

