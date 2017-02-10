/*
크롤러
특정 page를 1초마다 지정한 dir에 저장한다.
*/

var http = require('http');
var request = require('request');
var fs = require("fs");
const dateTime = require("node-datetime");

const requestLoop = setInterval(()=>{
  parse("http://www.google.com");
}, 1000); //여기 1000이 1초이다. 10초로 하고 싶으면 10000으로 하면 된다.


const parse =(url)=>{
  request({
      url: url,
      method: "GET",
      timeout: 10000,
      followRedirect: true,
      maxRedirects: 10
  },(error, response, body)=>{
      if(!error && response.statusCode == 200){

          let dt = dateTime.create();
          let formatted = dt.format('Y-m-d-H-M-S');
          let fileName = "./saved/" + formatted + ".json";
          writeFile(body, fileName);
      }else{
          console.log('error' + response.statusCode);
      }
  });
}

//parse("http://www.google.com");

//text를 지정한 파일경로에 쓴다.
const writeFile = (text, targetFileName)=>{
  fs.writeFile(targetFileName, text, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(targetFileName + " was saved!");
  });

}
