// Dataviz site model object
$(document).ready(function(){
  dv.search.initSearchButton();
  dv.search.initShortcut();
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
    for(k in json.list){
      sources.append("<h2>"+k+"</h2>")
        .append("<div>link: <a href=\""+json.list[k].link+"\">source</a></div>")
        .append("<p>"+json.list[k].description.join(". ")+"</p>");
    }
    var types=$(".content .search .datatype");
    var sites=$(".content .search .website");
    for(k in json.types) types.append("<option value=\""+json.types[k]+"\">"+json.types[k]+"</option>");
    for(k in json.sites) sites.append("<option value=\""+json.sites[k]+"\">"+json.sites[k]+"</option>");
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
