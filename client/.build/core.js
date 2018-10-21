// Dataviz site model object
$(document).ready(function(){
  dv.nav.setToolbar();
  setTimeout(dv.load.init,500);
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
