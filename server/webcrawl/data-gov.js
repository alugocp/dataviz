const fs=require("fs");
const input=process.argv[2];
var output={
  data:process.argv[3],
  site:"data.gov"
};
var html=fs.readFileSync(input).toString();
var name=html.match(/<title>(.*)<\/title>/g)[0]
  .replace(" - Data.gov</title>","")
  .replace("<title>","");
var csv=html.match(/(https?)?:\/\/[A-Za-z0-9\/\-\._?]+\.csv/g);
if(csv){
  output.visualize=true;
  output.data=csv[0];
  output.type="csv";
}
console.log("\""+name+"\":"+JSON.stringify(output));
