// Load screen and startup server request
dv.load={
  init:function(){
    $(".load-screen .bar").animate({width:"85%"},1500);
    dv.server.request("init",null,function(data){
      console.log(data);
      dv.populate(JSON.parse(data));
      dv.nav.setToolbar();
      setTimeout(function(){
        // success!
        $(".load-screen .bar")
          .css("width","100%")
          .stop(true);
        $(".load-screen").animate({"opacity":"0"},1000);
        setTimeout(function(){$(".load-screen").hide()},1000);
      },750);
    },function(){
      // failure :(
      console.log(arguments);
      $(".load-screen .bar")
        .text("Server error")
        .css("width","100%")
        .addClass("fail")
        .stop(true);
      // reset icon's src
    });
  }
}
