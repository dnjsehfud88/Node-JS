//var http = require("http");
//http.createServer (function(request, response){
    /*
        HTTP 헤더 전송
        HTTP Status: 200 : OK
        Content Type: text/plain
    */
 //  response.writeHead(200, { 'Cobntent-Type': 'text/plain'});

   /* 
        Response Body를 "Hello World"로 설정
    */
//   response.end("Hello World\n");
//}).listen(8081);

//console.log("Sever running at http://127.0.0.1:8081");

var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program has ended");