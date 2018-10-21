// Dataviz site model object
$(document).ready(function(){
  dv.load.init();
  dv.init();
});
var dv={
  init:function(){
    $(".content .component:not(.introduction)").hide();
    $(".toolbar div").first().addClass("open");
  },
  section:function(e){
    var i=$(".toolbar").children().index(e.parent().parent())-1;
    $(".content .component").hide();
    $(".content").children().eq(i).show();
  },
  populate:function(json){
    var sources=$(".content .databases");
    for(k in json){
      sources.append("<h2>"+k+"</h2>")
        .append("<div>link: <a href=\""+json[k].link+"\">source</a></div>")
        .append("<p>"+json[k].description.join(". ")+"</p>");
    }
  }
};

// Server features
dv.server={
  $_SERVER:"http://localhost:2020",
  request:function(type,options,callback,error){
    json=options || {};
    json["type"]=type;
    $.get(dv.server.$_SERVER,"json="+JSON.stringify(json),callback)
      .fail(error);
  }
}
