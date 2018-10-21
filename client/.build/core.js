// Dataviz site model object
var dv=new Object();

// Server features
dv.server={
  $_SERVER:"http://10.200.157.144:2020",
  request:function(type,options,callback,error){
    json=options || {};
    json["type"]=type;
    $.get(dv.server.$_SERVER,"json="+JSON.stringify(json),callback)
      .fail(error);
  }
}
