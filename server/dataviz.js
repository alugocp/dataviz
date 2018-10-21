const http=require("http");
const url=require("url");
const fs=require("fs");
var database,sites=[],types=[];

// Request response types
function access(json){

}
function search(json){
  var hits=[];
  if(json["term"] && typeof json["term"]=="string"){
    json.term=json.term.toLowerCase();
    for(k in database){
      if(k.toLowerCase().includes(json.term)){
        var match=database[k];
        match.name=k;
        hits.push(match);
      }
    }
  }
  return JSON.stringify(hits);
}
function initialize(){
  var list=JSON.parse(fs.readFileSync("database-list.json"));
  return JSON.stringify({sites:sites,types:types,list:list});
}
function jsonSwitch(json){
  if(json.type=="access") return access(json);
  if(json.type=="search") return search(json);
  if(json.type=="init") return initialize();
  return "Kill, moe"
}

// Setup HTTP server
function init_database(){
  database=JSON.parse(
    fs.readFileSync("database.yeet.json")
  );
  for(k in database){
    var obj=database[k];
    if(obj.site && !sites.includes(obj.site)) sites.push(obj.site);
    if(obj.type && !types.includes(obj.type)) types.push(obj.type);
  }
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
init_database();
console.log("Dataviz server deployed");
