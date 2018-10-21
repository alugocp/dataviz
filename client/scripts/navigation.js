
dv.nav={
  header:function(text){
    var title=$(
      "<div class=\"header\"></div>"
    ).append($("<img class=\"icon\" src=\"assets/arrow-right.svg\">").click(function(){
      var parent=$(this).parent().parent();
      parent.toggleClass("open");
      if(parent.hasClass("open")) $(this).attr("src","assets/arrow-down.svg");
      else $(this).attr("src","assets/arrow-right.svg");
    })).append($("<span>"+text+"</span>").click(function(){
      dv.section($(this));
      /*var parent=$(this).parent();
      parent.toggleClass("open");
      if(parent.hasClass("open")) $(this).find(".icon").attr("src","assets/arrow-down.svg");
      else $(this).find(".icon").attr("src","assets/arrow-right.svg");*/
    }));
    return $("<div></div>").append(title)
      .append("<div class=\"sections\"></div>");
  },
  section:function(text){
    return $("<div></div>").click(function(){
      dv.section($(this));
    }).text(text);
  },
  setToolbar:function(){
    var toolbar=$(".toolbar");
    $(".content .component").each(function(){
      var header=dv.nav.header(
        $(this).find("h1").first().text()
      );
      $(this).find("h2").each(function(){
        header.find(".sections").append(
          dv.nav.section($(this).text())
        );
      });
      toolbar.append(header);
    });
  }
}
