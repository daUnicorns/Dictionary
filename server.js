var http = require("http");
var port = process.env.PORT || 8080;
var fs = require('fs');
var stylesheet = fs.readFileSync('./style.css');
var index = fs.readFileSync('./index.html');
// var main = require("main.js");

function handler(request, response){
  var url = request.url;
  console.log(url);
  if(url === '/style.css'){
    response.writeHead(200, {"Content-Type": "text/css"});
    response.end(stylesheet);
    console.log('style.css has been sent');
  }
  else if(url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index);
  } else if (url.indexOf("/new_request") > -1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<link rel='stylesheet' href='./style.css'><h2 class='result'>test success</h2>");
  } else {
    response.end();
  }
  console.log(request);
}

http.createServer(handler).listen(port);
console.log("Server is listening");
