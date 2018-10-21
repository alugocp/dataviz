const http=require("http");
const url=require("url");
const fs=require("fs");
var database,sites=[],types=[];

// Request response types
function search(json){
  var hits=[];
  if(json.term=="") json.term=null;
  if(json.site=="") json.site=null;
  if(json.type=="") json.type=null;
  if((json.term && typeof json.term=="string")
  || json.site || json.type){
    if(json.term) json.term=json.term.toLowerCase();
    for(k in database){
      var obj=database[k];
      if((!json.term || k.toLowerCase().includes(json.term))
      && (!json.type || obj.type==json.type)
      && (!json.site || obj.site==json.site)
      && (!json.visualize || obj.visualize)){
        var match=obj;
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
  if(json.request=="search") return search(json);
  if(json.request=="init") return initialize();
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
