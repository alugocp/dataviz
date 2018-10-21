const http=require("http");
const url=require("url");

function jsonSwitch(json){
  return "server";
}

http.createServer(function(request,response){
  response.writeHead(200,{
    "Access-Control-Allow-Origin":"*"
  });
  var data=url.parse(request.url,true);
  if(data.query.json) try{
    reponse.end(
      jsonSwitch(JSON.parse(data.query.json))
    );
  }catch(e){
    response.end("Yeet");
  }else response.end("Thought like shit");
}).listen(2020);
console.log("Dataviz server deployed");
