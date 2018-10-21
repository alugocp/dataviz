const http=require("http");
const url=require("url");
const fs=require("fs");

function jsonSwitch(json){
  if(json.type=="init") return fs.readFileSync("database-list.json");
  //if(json.type=="search")
  //if(json.type=="access")
  return "Kill, moe"
}

http.createServer(function(request,response){
  response.writeHead(200,{
    "Access-Control-Allow-Origin":"*"
  });
  var data=url.parse(request.url,true);
  if(data.query.json) try{
    response.end(
      jsonSwitch(JSON.parse(data.query.json))
    );
  }catch(e){
    response.end("Yeet");
  }else response.end("Thought like shit");
}).listen(2020);
console.log("Dataviz server deployed");
