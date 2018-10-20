// Dataviz site model object
var dv=new Object();

// Server features
dv.server={
  $_SERVER:"http://localhost:2020",
  request:function(type,options,callback,error){
    json=options || {};
    json["type"]=type;
    $.get(dv.server.$_SERVER,json,callback,"text/html")
      .fail(error);
  }
}
