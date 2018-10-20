$(document).ready(function(){
  setTimeout(dv.load.init,500);
});

dv.load={
  init:function(){
    $(".load-screen .bar").animate({width:"85%"},1500);
    dv.server.request("init",null,function(data){
      // success!
      $(".load-screen .bar")
        .css("width","100%")
        .stop(true);
      $(".load-screen").animate({"opacity":"0"},1000);
    },function(){
      // failure :(
      $(".load-screen .bar")
        .text("Server is down")
        .addClass("fail")
        .stop(true);
      // reset icon's src
    });
  }
}
