// Incremental database loading
dv.stream={
  access:function(source,increment){
    var request=new XMLHttpRequest();
    request.counter=0;
    request.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200) increment(null);
      else if(this.readyState>2) increment(this.responseText,this.counter++);
    }
    request.open("get",source,true);
    request.send();
  }
}

// https://www.binarytides.com/ajax-based-streaming-without-polling/
// Mozilla GitHub: HTML5 PDF viewer
// SheetJs GitHub: js-xlsx
