const http=require("http");
const url=require("url");
const port=2020;

http.createServer(function(request,response){
  response.writeHead(200,{
    "Access-Control-Allow-Origin":"*"
  });
  var json=url.parse(request.url,true).query.json;
  response.end("Server");
}).listen(port);
console.log("Dataviz server deployed");
