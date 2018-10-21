
dv.search={
  initSearchButton:function(){
    $(".search button").click(function(){
      dv.server.request("search",{
        visualize:$(".search .visualize").prop("checked"),
        type:$(".search .datatype").val(),
        site:$(".search .website").val(),
        term:$(".search .name").val()
      },function(data){
        // Success! Populate the results div
        var results=$(".search  .results")
          .removeClass("visualize")
          .empty();
        var json=JSON.parse(data);
        if(json.length){
          results.append("<div class=\"matches\">"+json.length+" results</div>");
          for(k in json) results.append(
            dv.search.result(json[k])
          );
        }else results.append(dv.search.noResults());
      },function(){
        // Failure :(
        $(".search  .results").empty()
          .removeClass("visualize")
          .append("<img src=\"assets/error.svg\"><br>")
          .append("Could not access server")
          .addClass("fail");
      });
    });
  },
  initShortcut:function(){
    var shortcut=function(e){
      if(e.which==13) $(".search button").trigger("click");
    }
    $(".search .filters").keypress(shortcut)
      .children().keypress(shortcut);
  },
  result:function(json){
    var res=$("<div></div>")
      .append("<h3>"+json.name+"</h3>")
      .addClass("result");
    if(json.visualize) res.append($("<span></span>")
      .append("<img src=\"assets/view.svg\">")
      .append("<span>Visualize as "+json.type+"</span>")
      .attr("href",json.visualize)
      .addClass("iconified")
      .click(function(){
        dv.vis.visualize($(this).attr("href"));
      })
    ).append("<br>");
    res.append($("<span></span>")
        .append("<img src=\"assets/public.svg\">")
        .append("<a href=\""+json.link+"\" target=\"_blank\">"+json.site+"</a>")
        .addClass("iconified")
    );
    return res;
  },
  noResults:function(){
    return $("<div></div>")
      .append("<h3>No results</h3>")
      .append("<p>Our database contains no results that match your request</p>")
      .addClass("result");
  }
}
