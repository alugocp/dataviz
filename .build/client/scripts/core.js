// Dataviz site model object
var dv=new Object();

// Server features
dv.server={
  $_SERVER:"",
  request:function(type,options,callback,error){
    callback("Hi");// pre-server testing
    /*json=options || {};
    json["type"]=type;
    $.get($_SERVER,JSON.stringify(json),callback,error);*/
  }
}
