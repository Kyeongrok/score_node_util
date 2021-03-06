/*
크롤러
특정 page를 1초마다 지정한 dir에 저장한다.
*/
var http = require('http');
var request = require('request');
var fs = require("fs");

const getCrawler = (callback) => (url, i)=>{
  request({
      url: url,
      method: "GET",
      timeout: 10000,
      followRedirect: true,
      maxRedirects: 10
  },(error, response, body)=>{
      if(!error && response.statusCode == 200){
          try{
            // console.log("response 200 ok");
            new Promise(resolve => resolve(body))
              .then(result => callback(result, i));
          }catch(e){
              console.log(e);
          }

      }else{
          console.log('error' + response.statusCode);
          console.log('error');
      }
  });
};

//text를 지정한 파일경로에 쓴다.
const writeFile = (text, targetFileName)=>{
  fs.writeFile(targetFileName, text, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(targetFileName + " was saved!");
  });
};

exports.getCrawler = getCrawler;
exports.crawl = getCrawler;
exports.writeFile = writeFile;
