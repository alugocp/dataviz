
dv.vis={
  visualize:function(link){
    $(".search .results").addClass("visualize");
    dv.stream.access(link,function(bits,i){
      if(bits){
        var lines=bits.split("\n");
        if(!i) $(".search .results").empty()
          .append(dv.vis.csv=$("<table class=\"csv\"></table>"));
        for(var a=0;a<lines.length;a++) dv.vis.row(lines[a]);
      }else{
        // rid of loading animation
      }
    });
  },
  row:function(line){
    var cells=line.split(",");
    var row=$("<tr></tr>").addClass("row");
    for(var a=0;a<cells.length;a++){
      row.append("<td>"+cells[a]+"</td>");
    }
    dv.vis.csv.append(row);
  }
}
