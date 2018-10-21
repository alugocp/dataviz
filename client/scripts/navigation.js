
dv.nav={
  header:function(text){
    var title=$(
      "<div class=\"header\">"+text+"</div>"
    ).click(function(){
      $(this).parent().toggleClass("open");
    });
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
