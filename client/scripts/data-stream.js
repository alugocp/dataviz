// https://www.binarytides.com/ajax-based-streaming-without-polling/
// Incremental database loading
dv.stream={
  access:function(source){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200){
        console.log("All done!");
      }else if(this.readyState>2){
        console.log(this.responseText);
      }
    }
    request.open("get",source,true);
    request.send();
  }
}
