const http=require("http");
const port=2020;

http.createServer(function(request,response){
  response.writeHead(200,{
    "Access-Control-Allow-Origin":"*",
    "Content-Type":"text/html"
  });
  response.end("Hi");
}).listen(port);
console.log("Dataviz server deployed");
